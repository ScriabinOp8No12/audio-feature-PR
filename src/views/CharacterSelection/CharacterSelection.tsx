/*
 * Copyright (C) 2012-2020  Online-Go.com
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import * as React from "react";
import * as data from "@/lib/data";
import cached from "@/lib/cached";
import { useNavigate } from "react-router-dom";
import { useUser } from "@/lib/hooks";
import { post, get } from "@/lib/requests";
import { BackButton } from "@kidsgo/components/BackButton";
import { _ } from "@/lib/translate";
import { useEnsureUserIsCreated } from "@kidsgo/views/Matchmaking";
import {
    AvatarSelection,
    Race,
    raceIdxToUiClass,
    uiClassToRaceIdx,
    avatar_background_class,
} from "@kidsgo/components/Avatar";
import { openPopup } from "@kidsgo/components/PopupDialog";
//import { SignIn } from "@kidsgo/views/SignIn";

export function CharacterSelection(): JSX.Element {
    useEnsureUserIsCreated();
    const navigate = useNavigate();
    const user = useUser();
    const [race, idx] = uiClassToRaceIdx(user.ui_class);
    const [avatarRace, setAvatarRace] = React.useState<Race>(race);
    const [avatarIdx, setAvatarIdx] = React.useState(idx);
    const [refreshing, setRefreshing] = React.useState(false);

    const last_ui_class = React.useRef<string>(raceIdxToUiClass(race, idx));
    const updating = React.useRef<boolean>(false);
    const previousRace = React.useRef<Race>(race); // Track previous race

    const refresh = () => {
        setRefreshing(true);
        const config = data.get("cached.config");
        const ui_class = config?.user?.ui_class;

        post("kidsgo/regenerate_username", { ui_class })
            .then((config) => {
                data.set(cached.config, config);
                console.log("should be ", config.user);
                setRefreshing(false);
            })
            .catch((err) => {
                console.error(err);
                setRefreshing(false);
            });
    };

    const update_server = (ui_class: string): void => {
        last_ui_class.current = ui_class;
        if (updating.current) {
            return;
        }
        updating.current = true;
        post("kidsgo/update_avatar", { ui_class })
            .then(() => {
                updating.current = false;
                if (ui_class !== last_ui_class.current) {
                    update_server(last_ui_class.current);
                }
            })
            .catch((err) => {
                updating.current = false;
                console.error("Failed to update avatar", err);
            });
    };

    const update = async (race: Race, idx: number): Promise<void> => {
        const raceChanged = previousRace.current !== race;

        setAvatarRace(race);
        setAvatarIdx(idx);

        const new_ui_class = raceIdxToUiClass(race, idx);

        // Update server first
        await new Promise<void>((resolve, reject) => {
            const updateServerAsync = (ui_class: string): void => {
                last_ui_class.current = ui_class;
                if (updating.current) {
                    resolve();
                    return;
                }
                updating.current = true;
                post("kidsgo/update_avatar", { ui_class })
                    .then(() => {
                        updating.current = false;
                        if (ui_class !== last_ui_class.current) {
                            updateServerAsync(last_ui_class.current);
                        } else {
                            resolve();
                        }
                    })
                    .catch((err) => {
                        updating.current = false;
                        console.error("Failed to update avatar", err);
                        reject(err);
                    });
            };
            updateServerAsync(new_ui_class);
        });

        // Update local config after server update
        const config = data.get("cached.config");
        config.user.ui_class = new_ui_class;
        data.setWithoutEmit("cached.config", config);
        data.setWithoutEmit("config", config);
        data.set("config.user", JSON.parse(JSON.stringify(config.user)));
        data.set("user", JSON.parse(JSON.stringify(config.user)));

        // Only trigger refresh when race changes, after avatar is fully updated
        if (raceChanged) {
            refresh();
        }

        previousRace.current = race;
    };

    return (
        <div id="CharacterSelection" className={avatar_background_class(race)}>
            <BackButton onClick={() => navigate("/play")} />
            <div className="HelpButton" onClick={() => navigate("/help")}></div>
            <NameSelection refreshing={refreshing} onRefresh={refresh} />
            <AvatarSelection race={avatarRace} idx={avatarIdx} onChange={update} />
            <button className="ok" onClick={() => navigate("/play")}>
                Done — I love it!
            </button>
        </div>
    );
}

function NameSelection({
    refreshing,
    onRefresh,
}: {
    refreshing: boolean;
    onRefresh: () => void;
}): JSX.Element {
    const user = useUser();

    if (user.anonymous) {
        return <div className="NameSelection" />;
    }

    return (
        <div className={`NameSelection ${refreshing ? "refreshing" : ""}`}>
            <div className="title">PLAYER AVATAR</div>
            <div className="username">{user.username}</div>
            <button className="refresh" onClick={onRefresh}>
                Change Name
            </button>
        </div>
    );
}
