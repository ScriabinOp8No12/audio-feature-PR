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
import { Content } from "./Content";
import { PuzzleConfig, Goban, JGOFNumericPlayerColor } from "goban";
import { Axol } from "./Axol";
import { openPopup } from "@kidsgo/components/PopupDialog";

const POPUP_TIMEOUT = 1500;

class Module7 extends Content {
    constructor(audioUrl: string, shouldPlayAudio?: boolean) {
        super();
        this.audioUrl = audioUrl;

        if (shouldPlayAudio !== undefined) {
            this.shouldPlayAudio = shouldPlayAudio;
        }
    }
}

class Page1 extends Module7 {
    constructor() {
        super("no_audio_here");
    }

    text(): JSX.Element | Array<JSX.Element> {
        return [
            <p>
                Understanding when the game is over can be confusing. The most important thing is to
                keep playing until you have clear borders.
            </p>,
            <p> This game is almost done, let's look a little closer.</p>,
        ];
    }

    config(): PuzzleConfig {
        return {
            puzzle_player_move_mode: "fixed",
            width: 9,
            height: 9,
            initial_state: {
                black: "c2c3c5c6c7d3d4d7e3e4e8e9f4f5f6",
                white: "d2e2e6e7f2f3f7f8g3g4g6g7h2h4h8",
            },
        };
    }
}

class Page2 extends Module7 {
    constructor() {
        super("no_audio_here");
    }

    text(): JSX.Element | Array<JSX.Element> {
        return [
            <p>
                First: finish the territories by playing to the edge. Here the blue stone pushes
                into white's area, making it a little smaller and sealing the edge.
            </p>,
        ];
    }

    config(): PuzzleConfig {
        return {
            puzzle_player_move_mode: "fixed",
            width: 9,
            height: 9,
            initial_state: {
                black: "c2c3c5c6c7d3d4d7e3e4e8e9f4f5f6",
                white: "d2e2e6e7f2f3f7f8g3g4g6g7h2h4h8",
            },
        };
    }
    onSetGoban(goban: Goban): void {
        this.delay(() => {
            goban.placeByPrettyCoordinates("d1");
            // goban.setMarkByPrettyCoordinates("d1", "1");
        });
    }
}

class Page3 extends Module7 {
    constructor() {
        super("no_audio_here");
    }

    text(): JSX.Element | Array<JSX.Element> {
        return [
            <p>
                White has a hole in the wall on the right side and fills it to close the territory.
            </p>,
        ];
    }

    config(): PuzzleConfig {
        return {
            puzzle_player_move_mode: "fixed",
            width: 9,
            height: 9,
            initial_state: {
                black: "c2c3c5c6c7d1d3d4d7e3e4e8e9f4f5f6",
                white: "d2e2e6e7f2f3f7f8g3g4g6g7h2h4h8",
            },
        };
    }
    onSetGoban(goban: Goban): void {
        this.delay(() => {
            goban.editPlaceByPrettyCoordinates("g5", JGOFNumericPlayerColor.WHITE);
        });
    }
}

class Page4 extends Module7 {
    constructor() {
        super("no_audio_here");
    }

    text(): JSX.Element | Array<JSX.Element> {
        return [
            <p>
                Blue pushes further along the edge. White blocks and puts Blue into Atari. Blue
                connects so the stones won't be captured.
            </p>,
            <p>Connections along the edge like this are common in the endgame.</p>,
        ];
    }

    config(): PuzzleConfig {
        return {
            puzzle_player_move_mode: "fixed",
            width: 9,
            height: 9,
            initial_state: {
                black: "c2c3c5c6c7d1d3d4d7e3e4e8e9f4f5f6",
                white: "d2e2e6e7f2f3f7f8g3g4g5g6g7h2h4h8",
            },
        };
    }
    onSetGoban(goban: Goban): void {
        this.delay(() => {
            goban.placeByPrettyCoordinates("e1");
        });
        this.delay(() => {
            goban.placeByPrettyCoordinates("f1");
        });
        this.delay(() => {
            goban.placeByPrettyCoordinates("c1");
        });
    }
}

class Page5 extends Module7 {
    constructor() {
        super("no_audio_here");
    }

    text(): JSX.Element | Array<JSX.Element> {
        return [
            <p>
                White could then connect to the top edge to finish enclosing territory. Now is the
                game done? Are all the connections secure?
            </p>,
        ];
    }

    config(): PuzzleConfig {
        return {
            puzzle_player_move_mode: "fixed",
            width: 9,
            height: 9,
            initial_state: {
                black: "c1c2c3c5c6c7d1d3d4d7e1e3e4e8e9f4f5f6",
                white: "d2e2e6e7f1f2f3f7f8g3g4g5g6g7h2h4h8",
            },
        };
    }
    onSetGoban(goban: Goban): void {
        this.delay(() => {
            goban.editPlaceByPrettyCoordinates("f9", JGOFNumericPlayerColor.WHITE);
        });
    }
}

class Page6 extends Module7 {
    constructor() {
        super("no_audio_here");
    }

    text(): JSX.Element | Array<JSX.Element> {
        return [
            <p>
                No, white 1 is dangerous. If Blue plays in the middle at 2, oops! Now white can cut
                at 3 and blue is in trouble.
            </p>,
        ];
    }

    config(): PuzzleConfig {
        return {
            puzzle_player_move_mode: "fixed",
            width: 9,
            height: 9,
            initial_state: {
                black: "c1c2c3c5c6c7d1d3d4d7e1e3e4e8e9f4f5f6",
                white: "d2e2e6e7f1f2f3f7f8g3g4g5g6g7h2h4h8",
            },
        };
    }
    onSetGoban(goban: Goban): void {
        this.delay(() => {
            goban.editPlaceByPrettyCoordinates("f9", JGOFNumericPlayerColor.WHITE);
            goban.setMarkByPrettyCoordinates("f9", "1");
        });
        this.delay(() => {
            goban.placeByPrettyCoordinates("e5");
            goban.setMarkByPrettyCoordinates("f9", "1");
            goban.setMarkByPrettyCoordinates("e5", "2");
        });
        this.delay(() => {
            goban.placeByPrettyCoordinates("d8");
            goban.setMarkByPrettyCoordinates("f9", "1");
            goban.setMarkByPrettyCoordinates("e5", "2");
            goban.setMarkByPrettyCoordinates("d8", "3");
        });
    }
}

class Page7 extends Module7 {
    constructor() {
        super("no_audio_here");
    }

    text(): JSX.Element | Array<JSX.Element> {
        return [
            <p>
                Adding a stone on the bottom line doesnt help as the group is still in atari, blue
                just loses more stones.
            </p>,
        ];
    }

    config(): PuzzleConfig {
        return {
            puzzle_player_move_mode: "fixed",
            width: 9,
            height: 9,
            initial_state: {
                black: "c1c2c3c5c6c7d1d3d4d7e1e3e4e8e5e9f4f5f6",
                white: "d2d8e2e6e7f1f2f3f7f8f9g3g4g5g6g7h2h4h8",
            },
        };
    }
    onSetGoban(goban: Goban): void {
        this.delay(() => {
            // goban.editPlaceByPrettyCoordinates("d8", JGOFNumericPlayerColor.WHITE);
            goban.placeByPrettyCoordinates("d9");
        });
        this.delay(() => {
            goban.placeByPrettyCoordinates("c9");
        });
    }
}

class Page8 extends Module7 {
    constructor() {
        super("no_audio_here");
    }

    text(): JSX.Element | Array<JSX.Element> {
        return [
            <p>
                Instead, blue can play this way. white captures two stones, and Blue seals the edge
                between the colors.
            </p>,
        ];
    }

    config(): PuzzleConfig {
        return {
            puzzle_player_move_mode: "fixed",
            width: 9,
            height: 9,
            initial_state: {
                black: "c1c2c3c5c6c7d1d3d4d7e1e3e4e8e5e9f4f5f6",
                white: "d2d8e2e6e7f1f2f3f7f8f9g3g4g5g6g7h2h4h8",
            },
        };
    }
    onSetGoban(goban: Goban): void {
        this.delay(() => {
            goban.placeByPrettyCoordinates("c8");
        });
        this.delay(() => {
            goban.placeByPrettyCoordinates("d9");
        });
        this.delay(() => {
            goban.placeByPrettyCoordinates("c9");
        });
    }
}

class Page9 extends Module7 {
    constructor() {
        super("no_audio_here");
    }

    text(): JSX.Element | Array<JSX.Element> {
        return [
            <p>
                Let's go back. When White played at 1, Blue needed to connect the stones at 2 to be
                safe.
            </p>,
        ];
    }

    config(): PuzzleConfig {
        return {
            puzzle_player_move_mode: "fixed",
            width: 9,
            height: 9,
            initial_state: {
                black: "c1c2c3c5c6c7d1d3d4d7e1e3e4e8e9f4f5f6",
                white: "d2e2e6e7f1f2f3f7f8g3g4g5g6g7h2h4h8",
            },
        };
    }
    onSetGoban(goban: Goban): void {
        this.delay(() => {
            goban.editPlaceByPrettyCoordinates("f9", JGOFNumericPlayerColor.WHITE);
            goban.setMarkByPrettyCoordinates("f9", "1");
        });
        this.delay(() => {
            goban.placeByPrettyCoordinates("d8");
            goban.setMarkByPrettyCoordinates("f9", "1");
            goban.setMarkByPrettyCoordinates("d8", "2");
        });
    }
}

class Page10 extends Module7 {
    constructor() {
        super("no_audio_here");
    }

    text(): JSX.Element | Array<JSX.Element> {
        return [
            <p>
                The walls are now complete, but there are spaces between the two groups - marked
                with squares. We call these neutral points. Often (but not always) these points
                aren't very important.
            </p>,
            <p>
                They won't count as territory, but they are part of your area and need to be filled
                in to score the game.
            </p>,
        ];
    }

    config(): PuzzleConfig {
        return {
            puzzle_player_move_mode: "fixed",
            width: 9,
            height: 9,
            initial_state: {
                black: "c1c2c3c5c6c7d1d3d4d7d8e1e3e4e8e9f4f5f6",
                white: "d2e2e6e7f1f2f3f7f8f9g3g4g5g6g7h2h4h8",
            },
        };
    }
    onSetGoban(goban: Goban): void {
        this.delay(() => {
            goban.setMarkByPrettyCoordinates("d6", "square");
            goban.setMarkByPrettyCoordinates("d5", "square");
            goban.setMarkByPrettyCoordinates("e5", "square");
        }, 0);
    }
}

class Page11 extends Module7 {
    constructor() {
        super("no_audio_here");
    }

    text(): JSX.Element | Array<JSX.Element> {
        return [
            <p>
                Remember, you must either play a stone or pass a stone to your opponent as a
                prisoner, so playing on a neutral point saves you one point.
            </p>,
            <p>So go along the borders of each territory and fill in any gaps.</p>,
        ];
    }

    config(): PuzzleConfig {
        return {
            puzzle_player_move_mode: "fixed",
            width: 9,
            height: 9,
            initial_state: {
                black: "c1c2c3c5c6c7d1d3d4d7d8e1e3e4e8e9f4f5f6",
                white: "d2e2e6e7f1f2f3f7f8f9g3g4g5g6g7h2h4h8",
            },
        };
    }
    onSetGoban(goban: Goban): void {
        this.delay(() => {
            goban.editPlaceByPrettyCoordinates("e5", JGOFNumericPlayerColor.WHITE);
        });
        this.delay(() => {
            goban.placeByPrettyCoordinates("d5");
        });
        this.delay(() => {
            goban.placeByPrettyCoordinates("d6");
        });
    }
}

export const module7: Array<typeof Content> = [
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
    Page6,
    Page7,
    Page8,
    Page9,
    Page10,
    Page11,
];
