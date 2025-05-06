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
        super("no_audio_here");
    }

    text(): JSX.Element | Array<JSX.Element> {
        return [
            <p>
                Next, let's look at the diagonal connection. This only stays connected if you defend
                it.
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
        super("no_audio_here");
    }

    text(): JSX.Element | Array<JSX.Element> {
        return [
            <p>
                Now let's look at the one space jump. This is a strong shape because it's faster at
                surrounding territory compared to connecting one by one.
            </p>,
        ];
    }

    config(): PuzzleConfig {
        return {
            puzzle_player_move_mode: "fixed",
            initial_state: {
                black: "f3f5",
                white: "",
            },
        };
    }
}

class Page5 extends Module6 {
    constructor() {
        super("no_audio_here");
    }

    text(): JSX.Element | Array<JSX.Element> {
        return [
            <p>
                Even if white adds stones here, they will all be captured. If you are in atari on
                the second line and you extend, you will just lose more stones.
            </p>,
        ];
    }

    config(): PuzzleConfig {
        return {
            puzzle_player_move_mode: "fixed",
            initial_state: {
                black: "f3f5",
                white: "f4",
            },
        };
    }
    onSetGoban(goban: Goban): void {
        this.delay(() => {
            goban.placeByPrettyCoordinates("e4");
        });
        this.delay(() => {
            goban.placeByPrettyCoordinates("g4");
        });
        this.delay(() => {
            goban.placeByPrettyCoordinates("g5");
        });
        this.delay(() => {
            goban.placeByPrettyCoordinates("g3");
        });
        this.delay(() => {
            goban.placeByPrettyCoordinates("g2");
        });
    }
}

class Page6 extends Module6 {
    constructor() {
        super("no_audio_here");
    }
    text(): JSX.Element | Array<JSX.Element> {
        return [<p>Be careful, if you try the atari from this side, it will end in a disaster.</p>];
    }
    config(): PuzzleConfig {
        return {
            puzzle_player_move_mode: "fixed",
            initial_state: {
                black: "f3f5g4",
                white: "f4",
            },
        };
    }
    onSetGoban(goban: Goban): void {
        this.delay(() => goban.setMarkByPrettyCoordinates("g4", "1"), 0);
    }
}
class Page7 extends Module6 {
    constructor() {
        super("no_audio_here");
    }
    text(): JSX.Element | Array<JSX.Element> {
        return [
            <p>When white extends out, the group will have three liberties and can escape. </p>,
        ];
    }
    config(): PuzzleConfig {
        return {
            puzzle_player_move_mode: "fixed",
            initial_state: {
                black: "f3f5g4",
                white: "f4e4",
            },
        };
    }
    onSetGoban(goban: Goban): void {
        this.delay(() => goban.setMarkByPrettyCoordinates("g4", "1"), 0);
        this.delay(() => goban.setMarkByPrettyCoordinates("e4", "2"), 0);
        this.delay(() => goban.setMarkByPrettyCoordinates("e3", "triangle"), 0);
        this.delay(() => goban.setMarkByPrettyCoordinates("d4", "triangle"), 0);
        this.delay(() => goban.setMarkByPrettyCoordinates("e5", "triangle"), 0);
    }
}

class Page8 extends Module6 {
    constructor() {
        super("no_audio_here");
    }
    text(): JSX.Element | Array<JSX.Element> {
        return [
            <p>
                A one point jump on the third line has more trouble connecting. If you atari at 1
                and White extends at 2, then turns at 4, and extends at 6, White will run into the
                edge of the board and be captured.
            </p>,
            <p>But... the Blue stones aren't well connected. White has other choices.</p>,
        ];
    }
    config(): PuzzleConfig {
        return {
            puzzle_player_move_mode: "fixed",
            initial_state: {
                black: "e3e5d4f5g5f2",
                white: "e4f4f3g4g3",
            },
        };
    }
    onSetGoban(goban: Goban): void {
        this.delay(() => goban.setMarkByPrettyCoordinates("d4", "1"), 0);
        this.delay(() => goban.setMarkByPrettyCoordinates("f4", "2"), 0);
        this.delay(() => goban.setMarkByPrettyCoordinates("f5", "3"), 0);
        this.delay(() => goban.setMarkByPrettyCoordinates("f3", "4"), 0);
        this.delay(() => goban.setMarkByPrettyCoordinates("f2", "5"), 0);
        this.delay(() => goban.setMarkByPrettyCoordinates("g4", "6"), 0);
        this.delay(() => goban.setMarkByPrettyCoordinates("g5", "7"), 0);
        this.delay(() => goban.setMarkByPrettyCoordinates("g3", "8"), 0);
        this.delay(() => goban.setMarkByPrettyCoordinates("g2", "9"), 0);
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
