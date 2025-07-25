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

class Module5 extends Content {
    constructor() {
        super();
    }
}

class Page1 extends Module5 {
    text(): JSX.Element | Array<JSX.Element> {
        return [
            <p>Here's an example of how some things might play out in a real game.</p>,
            <p>
                Let's look at these two stones. They're not a team, because diagonal points are not
                connected to each other.
            </p>,
        ];
    }
    config(): PuzzleConfig {
        return {
            puzzle_player_move_mode: "fixed",
            width: 9,
            height: 9,
            initial_state: {
                black: "f7g6",
            },
        };
    }
}

class Page2 extends Module5 {
    text(): JSX.Element | Array<JSX.Element> {
        return [
            <p>
                With enough moves, both stones could be captured. The White stone at 1 places both
                Blue stones into atari at once, or double atari.
            </p>,
        ];
    }
    config(): PuzzleConfig {
        return {
            puzzle_player_move_mode: "fixed",
            width: 9,
            height: 9,
            initial_state: {
                black: "f7g6",
                white: "e7f6g5g7",
            },
        };
    }
    onSetGoban(goban: Goban): void {
        goban.setMarkByPrettyCoordinates("g7", "1");
    }
}

class Page3 extends Module5 {
    text(): JSX.Element | Array<JSX.Element> {
        return [<p>Blue could add a stone at 2 to make a group with three liberties.</p>];
    }
    config(): PuzzleConfig {
        return {
            puzzle_player_move_mode: "fixed",
            width: 9,
            height: 9,
            initial_state: {
                black: "f7g6",
                white: "e7f6g5g7",
            },
        };
    }
    onSetGoban(goban: Goban): void {
        goban.setMarkByPrettyCoordinates("g7", "1");
        this.delay(() => {
            goban.placeByPrettyCoordinates("f8");
            goban.setMarkByPrettyCoordinates("g7", "1"); // This is needed to keep the marked 1 on the white stone
            goban.setMarkByPrettyCoordinates("f8", "2");
        }, 1500);
        this.delay(() => goban.setMarkByPrettyCoordinates("e8", "triangle"));
        this.delay(() => goban.setMarkByPrettyCoordinates("f9", "triangle"));
        this.delay(() => goban.setMarkByPrettyCoordinates("g8", "triangle"));
    }
}

class Page4 extends Module5 {
    text(): JSX.Element | Array<JSX.Element> {
        return [
            <p>
                White can still capture the other stone at 3 though, because it's not connected to
                the Blue group.
            </p>,
        ];
    }
    config(): PuzzleConfig {
        return {
            puzzle_player_move_mode: "fixed",
            width: 9,
            height: 9,
            initial_state: {
                black: "f7f8",
                white: "e7f6g5g7h6",
            },
        };
    }
    onSetGoban(goban: Goban): void {
        goban.setMarkByPrettyCoordinates("g7", "1");
        goban.setMarkByPrettyCoordinates("f8", "2");
        goban.setMarkByPrettyCoordinates("h6", "3");
    }
}

class Page5 extends Module5 {
    text(): JSX.Element | Array<JSX.Element> {
        return [
            <p>
                So White might try to capture the Blue group by adding a stone at 1. Blue might try
                playing at 2 to save the stones.
            </p>,
        ];
    }
    config(): PuzzleConfig {
        return {
            puzzle_player_move_mode: "fixed",
            width: 9,
            height: 9,
            initial_state: {
                black: "f7f8",
                white: "e7f6g5g7h6g8",
            },
        };
    }
    onSetGoban(goban: Goban): void {
        goban.setMarkByPrettyCoordinates("g8", "1");
        this.delay(() => {
            goban.placeByPrettyCoordinates("e8");
            goban.setMarkByPrettyCoordinates("g8", "1");
            goban.setMarkByPrettyCoordinates("e8", "2");
        }, 6000);
    }
}

class Page6 extends Module5 {
    text(): JSX.Element | Array<JSX.Element> {
        return [
            <p>
                Maybe White gets impatient and tries to surround Blue's group with 3. Blue responds
                with 4, which puts White's stone at A into atari.
            </p>,
        ];
    }
    config(): PuzzleConfig {
        return {
            puzzle_player_move_mode: "fixed",
            width: 9,
            height: 9,
            initial_state: {
                black: "f7f8e8",
                white: "e7f6g5g7h6g8",
            },
        };
    }
    onSetGoban(goban: Goban): void {
        goban.setMarkByPrettyCoordinates("g8", "1");
        goban.setMarkByPrettyCoordinates("e8", "2");
        this.delay(() => {
            goban.editPlaceByPrettyCoordinates("d7", JGOFNumericPlayerColor.BLACK);
            goban.setMarkByPrettyCoordinates("d8", "3");
            goban.setMarkByPrettyCoordinates("d7", "4");
            goban.setMarkByPrettyCoordinates("e7", "A");
            goban.setMarkByPrettyCoordinates("g8", "1");
            goban.setMarkByPrettyCoordinates("e8", "2");
        }, 2000);
        this.delay(() => {
            goban.editPlaceByPrettyCoordinates("d8", JGOFNumericPlayerColor.WHITE);
            goban.setMarkByPrettyCoordinates("d8", "3");
            goban.setMarkByPrettyCoordinates("g8", "1");
            goban.setMarkByPrettyCoordinates("e8", "2");
        }, 4000);
    }
}

class Page7 extends Module5 {
    text(): JSX.Element | Array<JSX.Element> {
        return [
            <p>
                White will lose the stone at A if Blue plays at B, so White adds a stone there to
                get new liberties.
            </p>,
        ];
    }
    config(): PuzzleConfig {
        return {
            puzzle_player_move_mode: "fixed",
            width: 9,
            height: 9,
            initial_state: {
                black: "f7f8e8d7",
                white: "e7f6g5g7h6g8d8e6",
            },
        };
    }
    onSetGoban(goban: Goban): void {
        goban.setMarkByPrettyCoordinates("e7", "A");
        goban.setMarkByPrettyCoordinates("e6", "B");
    }
}

class Page8 extends Module5 {
    text(): JSX.Element | Array<JSX.Element> {
        return [
            <p>Now Blue has turned the tables on White! Playing at 1 puts White C into atari.</p>,
        ];
    }
    config(): PuzzleConfig {
        return {
            puzzle_player_move_mode: "fixed",
            width: 9,
            height: 9,
            initial_state: {
                black: "f7f8e8d7c8",
                white: "e7f6g5g7h6g8d8e6",
            },
        };
    }
    onSetGoban(goban: Goban): void {
        goban.setMarkByPrettyCoordinates("c8", "1");
        goban.setMarkByPrettyCoordinates("d8", "C");
    }
}

class Page9 extends Module5 {
    text(): JSX.Element | Array<JSX.Element> {
        return [
            <p>
                White adds a stone at 2, but there's a problem. 2 is on the edge of the board, which
                means there is one liberty less!
            </p>,
        ];
    }
    config(): PuzzleConfig {
        return {
            puzzle_player_move_mode: "fixed",
            width: 9,
            height: 9,
            initial_state: {
                black: "f7f8e8d7c8",
                white: "e7f6g5g7h6g8d8e6d9",
            },
        };
    }
    onSetGoban(goban: Goban): void {
        goban.setMarkByPrettyCoordinates("c8", "1");
        goban.setMarkByPrettyCoordinates("d9", "2");
    }
}

class Page10 extends Module5 {
    text(): JSX.Element | Array<JSX.Element> {
        return [
            <p>
                This means that a move by Blue at either A or B will put two White stones into
                atari. Which one do you think is best?
            </p>,
        ];
    }
    config(): PuzzleConfig {
        return {
            puzzle_player_move_mode: "fixed",
            width: 9,
            height: 9,
            initial_state: {
                black: "f7f8e8d7c8",
                white: "e7f6g5g7h6g8d8e6d9",
            },
        };
    }
    onSetGoban(goban: Goban): void {
        goban.setMarkByPrettyCoordinates("c9", "A");
        goban.setMarkByPrettyCoordinates("e9", "B");
    }
}

class Page11 extends Module5 {
    text(): JSX.Element | Array<JSX.Element> {
        return [
            <p>
                Let's look at B first. This move looks good because on the next turn Blue could
                capture the two White stones at A.
            </p>,
        ];
    }
    config(): PuzzleConfig {
        return {
            puzzle_player_move_mode: "fixed",
            width: 9,
            height: 9,
            initial_state: {
                black: "f7f8e8d7c8e9",
                white: "e7f6g5g7h6g8d8e6d9",
            },
        };
    }
    onSetGoban(goban: Goban): void {
        goban.setMarkByPrettyCoordinates("c9", "A");
        goban.setMarkByPrettyCoordinates("e9", "B");
    }
}

class Page12 extends Module5 {
    text(): JSX.Element | Array<JSX.Element> {
        return [
            <p>
                Unfortunately, it's not Blue's turn. While it is true that White is in atari, Blue
                is also now in atari, so White can capture first - at C - and remove four Blue
                stones.
            </p>,
        ];
    }
    config(): PuzzleConfig {
        return {
            puzzle_player_move_mode: "fixed",
            width: 9,
            height: 9,
            initial_player: "white",
            flip_animated_capture_color: true,
            initial_state: {
                black: "f7f8e8d7c8e9",
                white: "e7f6g5g7h6g8d8e6d9",
            },
        } as PuzzleConfig;
    }
    onSetGoban(goban: Goban): void {
        goban.setMarkByPrettyCoordinates("f9", "C");

        this.delay(() => {
            goban.placeByPrettyCoordinates("f9");
            goban.setMarkByPrettyCoordinates("f9", "C");
            goban.setMarkByPrettyCoordinates("e9e8f8f7", "square");
        }, 9500);
    }
}

class Page13 extends Module5 {
    text(): JSX.Element | Array<JSX.Element> {
        return [
            <p>
                Let's try going the other way this time. A Blue play at A also puts the two White
                stones into atari.
            </p>,
        ];
    }
    config(): PuzzleConfig {
        return {
            puzzle_player_move_mode: "fixed",
            width: 9,
            height: 9,
            initial_state: {
                black: "f7f8e8d7c8c9",
                white: "e7f6g5g7h6g8d8e6d9",
            },
        };
    }
    onSetGoban(goban: Goban): void {
        goban.setMarkByPrettyCoordinates("c9", "A");
    }
}

class Page14 extends Module5 {
    text(): JSX.Element | Array<JSX.Element> {
        return [<p>Now even if White adds a stone at 2, which puts Blue into atari at D...</p>];
    }
    config(): PuzzleConfig {
        return {
            puzzle_player_move_mode: "fixed",
            width: 9,
            height: 9,
            initial_state: {
                black: "f7f8e8d7c8c9",
                white: "e7f6g5g7h6g8d8e6d9e9",
            },
        };
    }
    onSetGoban(goban: Goban): void {
        goban.setMarkByPrettyCoordinates("c9", "1");
        goban.setMarkByPrettyCoordinates("e9", "2");
        goban.setMarkByPrettyCoordinates("f9", "D");
    }
}

class Page15 extends Module5 {
    text(): JSX.Element | Array<JSX.Element> {
        return [<p>It's now Blue's turn, and playing at D captures all three White stones.</p>];
    }
    config(): PuzzleConfig {
        return {
            puzzle_player_move_mode: "fixed",
            width: 9,
            height: 9,
            flip_animated_capture_color: true,
            initial_state: {
                black: "f7f8e8d7c8c9",
                white: "e7f6g5g7h6g8d8e6d9e9",
            },
        } as PuzzleConfig;
    }
    onSetGoban(goban: Goban): void {
        goban.setMarkByPrettyCoordinates("f9", "D");
        this.delay(() => {
            goban.placeByPrettyCoordinates("f9");
            goban.setMarkByPrettyCoordinates("f9", "D");
        }, 3000);
    }
}

class Page16 extends Module5 {
    text(): JSX.Element | Array<JSX.Element> {
        return [
            <p>
                In Go, the placement of a single stone can make the difference between capturing a
                large group or losing one of your own. That's part of the fun!
            </p>,
        ];
    }
    axolotlFace() {
        return true;
    }
    hidePlayButton() {
        return true;
    }
}

export const module5: Array<typeof Content> = [
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
    Page12,
    Page13,
    Page14,
    Page15,
    Page16,
];
