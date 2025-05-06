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

class Module6 extends Content {
    constructor(audioUrl: string, shouldPlayAudio?: boolean) {
        super();
        this.audioUrl = audioUrl;

        if (shouldPlayAudio !== undefined) {
            this.shouldPlayAudio = shouldPlayAudio;
        }
    }
}

class Page1 extends Module6 {
    constructor() {
        super("no_audio_here");
    }

    text(): JSX.Element | Array<JSX.Element> {
        return [
            <p>
                The best way to keep your stones safe is to connect them. These stones cannot be
                cut.
            </p>,
            <p>
                These moves are good for walls and for defense, but it is pretty slow for securing
                territory.
            </p>,
        ];
    }

    config(): PuzzleConfig {
        return {
            puzzle_player_move_mode: "fixed",
            initial_state: {
                black: "d4d5",
                white: "",
            },
        };
    }
}

class Page2 extends Module6 {
    constructor() {
        super("no_audio_here");
    }

    text(): JSX.Element | Array<JSX.Element> {
        return [
            <p>Other shapes can stretch out and still connect.</p>,
            <p>
                The Diagonal at B, the One Point Jump at C, the Small Knights at D, and the Two
                Point Jump at E
            </p>,
            <p>These basic connecting moves will help you avoid getting captured!</p>,
        ];
    }
    config(): PuzzleConfig {
        return {
            puzzle_player_move_mode: "fixed",
            width: 9,
            height: 9,
            initial_state: {
                black: "e5e6",
                white: "",
            },
        };
    }
    onSetGoban(goban: Goban): void {
        this.delay(() => {
            goban.setMarkByPrettyCoordinates("e6", "A");
        }, 0);
        this.delay(() => {
            goban.placeByPrettyCoordinates("b7");
            goban.setMarkByPrettyCoordinates("e6", "A");
        });
        this.delay(() => {
            goban.editPlaceByPrettyCoordinates("c8", JGOFNumericPlayerColor.BLACK);
            goban.setMarkByPrettyCoordinates("e6", "A");
            goban.setMarkByPrettyCoordinates("c8", "B");
        });
        this.delay(() => {
            goban.editPlaceByPrettyCoordinates("h6", JGOFNumericPlayerColor.BLACK);
            goban.setMarkByPrettyCoordinates("e6", "A");
            goban.setMarkByPrettyCoordinates("c8", "B");
        });
        this.delay(() => {
            goban.editPlaceByPrettyCoordinates("h8", JGOFNumericPlayerColor.BLACK);
            goban.setMarkByPrettyCoordinates("e6", "A");
            goban.setMarkByPrettyCoordinates("c8", "B");
            goban.setMarkByPrettyCoordinates("h8", "C");
        });
        this.delay(() => {
            goban.editPlaceByPrettyCoordinates("f2", JGOFNumericPlayerColor.BLACK);
            goban.setMarkByPrettyCoordinates("e6", "A");
            goban.setMarkByPrettyCoordinates("c8", "B");
            goban.setMarkByPrettyCoordinates("h8", "C");
        });
        this.delay(() => {
            goban.editPlaceByPrettyCoordinates("h3", JGOFNumericPlayerColor.BLACK);
            goban.setMarkByPrettyCoordinates("e6", "A");
            goban.setMarkByPrettyCoordinates("c8", "B");
            goban.setMarkByPrettyCoordinates("h8", "C");
            goban.setMarkByPrettyCoordinates("h3", "D");
        });
        this.delay(() => {
            goban.editPlaceByPrettyCoordinates("b5", JGOFNumericPlayerColor.BLACK);
            goban.setMarkByPrettyCoordinates("e6", "A");
            goban.setMarkByPrettyCoordinates("c8", "B");
            goban.setMarkByPrettyCoordinates("h8", "C");
            goban.setMarkByPrettyCoordinates("h3", "D");
        });
        this.delay(() => {
            goban.editPlaceByPrettyCoordinates("b2", JGOFNumericPlayerColor.BLACK);
            goban.setMarkByPrettyCoordinates("e6", "A");
            goban.setMarkByPrettyCoordinates("c8", "B");
            goban.setMarkByPrettyCoordinates("h8", "C");
            goban.setMarkByPrettyCoordinates("h3", "D");
            goban.setMarkByPrettyCoordinates("b2", "E");
        });
    }
}

class Page3 extends Module6 {
    constructor() {
        super(
            "https://res.cloudinary.com/dn8rdavoi/video/upload/v1708472317/audio-slices-less-pauses/slice4_less_pauses_jiozem.mp3",
        );
    }

    text(): JSX.Element | Array<JSX.Element> {
        return [
            <p>
                Let's look at the diagonal connection. This only stays connected if you defend it.
            </p>,
            <p>
                If white tries to cut with A, blue would play at B to connect. If white tries to cut
                with B, blue would play at A to connect.
            </p>,
            <p>
                Sometimes there may be more important moves you could play, but in this lesson we
                are only concerned about connecting.
            </p>,
        ];
    }
    config(): PuzzleConfig {
        return {
            puzzle_player_move_mode: "fixed",
            initial_state: {
                black: "d4e5",
                white: "",
            },
        };
    }
    onSetGoban(goban: Goban): void {
        this.delay(() => {
            goban.setMarkByPrettyCoordinates("d5", "A");
            goban.setMarkByPrettyCoordinates("e4", "B");
        }, 0);
        this.delay(() => {
            goban.editPlaceByPrettyCoordinates("d5", JGOFNumericPlayerColor.WHITE);
            goban.setMarkByPrettyCoordinates("d5", "A");
            goban.setMarkByPrettyCoordinates("e4", "B");
        });
        this.delay(() => {
            goban.editPlaceByPrettyCoordinates("e4", JGOFNumericPlayerColor.BLACK);
            goban.setMarkByPrettyCoordinates("d5", "A");
            goban.setMarkByPrettyCoordinates("e4", "B");
        });
        // Clear stones here so we can animate white trying to cut with B instead
        this.delay(() => {
            goban.editPlaceByPrettyCoordinates("d5", 0);
            goban.editPlaceByPrettyCoordinates("e4", 0);
            goban.setMarkByPrettyCoordinates("d5", "A");
            goban.setMarkByPrettyCoordinates("e4", "B");
        }, 1500);
        this.delay(() => {
            goban.editPlaceByPrettyCoordinates("e4", JGOFNumericPlayerColor.WHITE);
            goban.setMarkByPrettyCoordinates("d5", "A");
            goban.setMarkByPrettyCoordinates("e4", "B");
        }, 1500);
        this.delay(() => {
            goban.editPlaceByPrettyCoordinates("d5", JGOFNumericPlayerColor.BLACK);
            goban.setMarkByPrettyCoordinates("d5", "A");
            goban.setMarkByPrettyCoordinates("e4", "B");
        });
    }
}

class Page4 extends Module6 {
    constructor() {
        super(
            "https://res.cloudinary.com/dn8rdavoi/video/upload/v1708472318/audio-slices-less-pauses/slice5_less_pauses_pebkdl.mp3",
        );
    }

    text(): JSX.Element | Array<JSX.Element> {
        return [<p>And this stone only has three.</p>];
    }
    config(): PuzzleConfig {
        return {
            puzzle_player_move_mode: "fixed",
            initial_state: {
                black: "d7",
                white: "",
            },
        };
    }
    onSetGoban(goban: Goban): void {
        this.delay(() => goban.setMarkByPrettyCoordinates("c7", "1"));
        this.delay(() => goban.setMarkByPrettyCoordinates("d6", "2"));
        this.delay(() => goban.setMarkByPrettyCoordinates("e7", "3"));
    }
}

class Page5 extends Module6 {
    constructor() {
        super(
            "https://res.cloudinary.com/dn8rdavoi/video/upload/v1708473054/audio-slices-less-pauses/slice6_less_pauses_revised_zbk8aa.mp3",
        );
    }
    text(): JSX.Element | Array<JSX.Element> {
        return [
            <p>
                Stones of the same color that touch each other are on the same team. So they share
                their liberties.
            </p>,
        ];
    }
    config(): PuzzleConfig {
        return {
            puzzle_player_move_mode: "fixed",
            initial_state: {
                black: "",
                white: "",
            },
        };
    }
    onSetGoban(goban: Goban): void {
        this.delay(() => goban.editPlaceByPrettyCoordinates("d4", JGOFNumericPlayerColor.BLACK));
        this.delay(() => goban.editPlaceByPrettyCoordinates("e4", JGOFNumericPlayerColor.BLACK));
        this.delay(() => goban.setMarkByPrettyCoordinates("d5", "1"));
        this.delay(() => goban.setMarkByPrettyCoordinates("e5", "2"));
        this.delay(() => goban.setMarkByPrettyCoordinates("f4", "3"));
        this.delay(() => goban.setMarkByPrettyCoordinates("e3", "4"));
        this.delay(() => goban.setMarkByPrettyCoordinates("d3", "5"));
        this.delay(() => goban.setMarkByPrettyCoordinates("c4", "6"));
    }
}

class Page6 extends Module6 {
    constructor() {
        super(
            "https://res.cloudinary.com/dn8rdavoi/video/upload/v1708472320/audio-slices-less-pauses/slice7_less_pauses_nmppvy.mp3",
        );
    }
    text(): JSX.Element | Array<JSX.Element> {
        return [
            <p>
                If the other player takes 3 out of 4 liberties, we say a stone is in Atari, which
                means it can be captured on the next turn.
            </p>,
        ];
    }
    config(): PuzzleConfig {
        return {
            puzzle_player_move_mode: "fixed",
            initial_state: {
                black: "D4",
                white: "",
            },
        };
    }
    onSetGoban(goban: Goban): void {
        this.delay(() => goban.editPlaceByPrettyCoordinates("c4", JGOFNumericPlayerColor.WHITE));
        this.delay(() => goban.editPlaceByPrettyCoordinates("d3", JGOFNumericPlayerColor.WHITE));
        this.delay(() => goban.editPlaceByPrettyCoordinates("e4", JGOFNumericPlayerColor.WHITE));
        this.delay(() => goban.setMarkByPrettyCoordinates("d5", "triangle"));
    }
}

class Page7 extends Module6 {
    constructor() {
        super(
            "https://res.cloudinary.com/dn8rdavoi/video/upload/v1708473412/audio-slice-less-pauses-COMBINED/slice8_and_9_combined_revised_fxjbn9.mp3",
        );
    }
    text(): JSX.Element | Array<JSX.Element> {
        return [
            <p>If we add a stone, then they form a team and get new liberties.</p>,
            <p>Now they have three liberties and are safe from immediate capture.</p>,
        ];
    }
    config(): PuzzleConfig {
        return {
            puzzle_player_move_mode: "fixed",
            initial_state: {
                black: "D4",
                white: "C4D3E4",
            },
        };
    }
    onSetGoban(goban: Goban): void {
        this.delay(() => goban.editPlaceByPrettyCoordinates("d5", JGOFNumericPlayerColor.BLACK));
        this.delay(() => goban.setMarkByPrettyCoordinates("c5", "1"));
        this.delay(() => goban.setMarkByPrettyCoordinates("d6", "2"));
        this.delay(() => goban.setMarkByPrettyCoordinates("e5", "3"));
    }
}

class Page8 extends Module6 {
    constructor() {
        super(
            "https://res.cloudinary.com/dn8rdavoi/video/upload/v1708472323/audio-slices-less-pauses/slice10_less_pauses_o5h9dp.mp3",
        );
    }
    text(): JSX.Element | Array<JSX.Element> {
        return [
            <p>
                If Blue goes somewhere else though, then White can capture the stone and remove it
                from the board.
            </p>,
        ];
    }
    config(): PuzzleConfig {
        return {
            puzzle_player_move_mode: "fixed",
            flip_animated_capture_color: true,
            initial_state: {
                black: "D4",
                white: "C4D3E4",
            },
        } as PuzzleConfig;
    }
    onSetGoban(goban: Goban): void {
        this.delay(() => goban.placeByPrettyCoordinates("f5"));
        this.delay(() => goban.placeByPrettyCoordinates("d5"));
    }
}

export const module6: Array<typeof Content> = [
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
    Page6,
    Page7,
    Page8,
];
