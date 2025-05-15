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
import { Content } from "../Content";
import { PuzzleConfig, Goban } from "goban";
import { Axol } from "../Axol";
import { openPopup } from "../../../components/PopupDialog";

const POPUP_TIMEOUT = 1500;

class Puzzle1 extends Content {
    text(): JSX.Element | Array<JSX.Element> {
        return [<p>Ladder 1</p>];
    }
    config(): PuzzleConfig {
        return {
            initial_state: {
                black: "e7e6e5f5g5g6",
                white: "d8d7d6d5e4f4g4h5f6f7",
            },

            move_tree: this.makePuzzleMoveTree(
                [
                    "f8g7h7g8h8g9h9f9e9",
                    "f8g7h7g8h8g9f9e8h9",
                    "f8g7h7g8g9h8j8h9j9",
                    "f8g7h7g8g9h8h9j8j7h6j9",
                    "f8g7h7g8h8g9e8h6h9f9e9",
                ],
                [
                    "f8g7h7g8g9h8h9j8j9f9",
                    "f8g7h7g8h8g9h6e8",
                    "f8g7g8h7h6e8",
                    "f8g7g8h7e8h6",
                    "g7f8e8e9g8f9g9d9",
                    "g7f8g8e8",
                ],
                9,
                9,
            ),
        };
    }
    onSetGoban(goban: Goban): void {
        goban.on("puzzle-correct-answer", () => {
            this.captureDelay(() => {
                openPopup({
                    text: <Axol>Solved!</Axol>,
                    no_accept: true,
                    no_cancel: true,
                    timeout: POPUP_TIMEOUT,
                })
                    .then(() => {
                        this.gotoNext();
                    })
                    .catch(() => 0);
            });
        });
        goban.on("puzzle-wrong-answer", () => {
            new Promise<void>((resolve) => {
                setTimeout(resolve, 1000);
            })
                .then(() => {
                    return openPopup({
                        text: <Axol>Try again!</Axol>,
                        no_accept: true,
                        no_cancel: true,
                        timeout: POPUP_TIMEOUT,
                    });
                })
                .then(() => {
                    this.resetGoban?.();
                })
                .catch(() => 0);
        });
    }
}

class Puzzle2 extends Content {
    text(): JSX.Element | Array<JSX.Element> {
        return [<p>Ladder 2</p>];
    }
    config(): PuzzleConfig {
        return {
            initial_state: {
                black: "e4d3c3c4c5",
                white: "b3b4b5b6b7c7d4d5",
            },

            move_tree: this.makePuzzleMoveTree(
                [
                    "d6e5f5e6e7f6g6f7f8g7h7g8h8g9h9g5f9",
                    "d6e5f5e6e7f6g6f7f8g7h7g8h8g9f9g5h9",
                    "d6e5f5e6e7f6g6f7f8g7h7g8g9h8j8g5h9",
                    "d6e5f5e6e7f6g6f7f8g7h7g8g9h8h9j8j7g5j9",
                ],
                ["e5d6", "d6e5f5e6e7f6g6f7f8g7h7g8g9h8h9j8j9f9"],
                9,
                9,
            ),
        };
    }
    onSetGoban(goban: Goban): void {
        goban.on("puzzle-correct-answer", () => {
            this.captureDelay(() => {
                openPopup({
                    text: <Axol>Solved!</Axol>,
                    no_accept: true,
                    no_cancel: true,
                    timeout: POPUP_TIMEOUT,
                })
                    .then(() => {
                        this.gotoNext();
                    })
                    .catch(() => 0);
            });
        });
        goban.on("puzzle-wrong-answer", () => {
            new Promise<void>((resolve) => {
                setTimeout(resolve, 1000);
            })
                .then(() => {
                    return openPopup({
                        text: <Axol>Try again!</Axol>,
                        no_accept: true,
                        no_cancel: true,
                        timeout: POPUP_TIMEOUT,
                    });
                })
                .then(() => {
                    this.resetGoban?.();
                })
                .catch(() => 0);
        });
    }
}

class Puzzle3 extends Content {
    text(): JSX.Element | Array<JSX.Element> {
        return [<p>Ladder 3</p>];
    }
    config(): PuzzleConfig {
        return {
            initial_state: {
                black: "e8e7d6d5",
                white: "g7d8c8d7b7c6c4e6",
            },

            move_tree: this.makePuzzleMoveTree(["f6e5e4f5g5f4f3"], ["e5f6"], 9, 9),
        };
    }
    onSetGoban(goban: Goban): void {
        goban.on("puzzle-correct-answer", () => {
            new Promise<void>((resolve) => {
                setTimeout(resolve, 1000);
            })
                .then(() => {
                    return openPopup({
                        text: <Axol>Solved!</Axol>,
                        no_accept: true,
                        no_cancel: true,
                        timeout: POPUP_TIMEOUT,
                    });
                })
                .then(() => {
                    this.gotoNext();
                })
                .catch(() => 0);
        });
        goban.on("puzzle-wrong-answer", () => {
            new Promise<void>((resolve) => {
                setTimeout(resolve, 1000);
            })
                .then(() => {
                    return openPopup({
                        text: <Axol>Try again!</Axol>,
                        no_accept: true,
                        no_cancel: true,
                        timeout: POPUP_TIMEOUT,
                    });
                })
                .then(() => {
                    this.resetGoban?.();
                })
                .catch(() => 0);
        });
    }
}

class Puzzle4 extends Content {
    text(): JSX.Element | Array<JSX.Element> {
        return [<p>Ladder 4</p>];
    }
    config(): PuzzleConfig {
        return {
            initial_state: {
                black: "e8e7d6d5d4",
                white: "g7d8c8d7b7c5c6c4c3e6h6",
            },

            move_tree: this.makePuzzleMoveTree(
                ["f6e5e4f5g5f4f3g4h4"],
                ["e5f6", "f6e5f5e4e3d3"],
                9,
                9,
            ),
        };
    }
    onSetGoban(goban: Goban): void {
        goban.on("puzzle-correct-answer", () => {
            new Promise<void>((resolve) => {
                setTimeout(resolve, 1000);
            })
                .then(() => {
                    return openPopup({
                        text: <Axol>Solved!</Axol>,
                        no_accept: true,
                        no_cancel: true,
                        timeout: POPUP_TIMEOUT,
                    });
                })
                .then(() => {
                    this.gotoNext();
                })
                .catch(() => 0);
        });
        goban.on("puzzle-wrong-answer", () => {
            new Promise<void>((resolve) => {
                setTimeout(resolve, 1000);
            })
                .then(() => {
                    return openPopup({
                        text: <Axol>Try again!</Axol>,
                        no_accept: true,
                        no_cancel: true,
                        timeout: POPUP_TIMEOUT,
                    });
                })
                .then(() => {
                    this.resetGoban?.();
                })
                .catch(() => 0);
        });
    }
}

export const Ladder: Array<typeof Content> = [Puzzle1, Puzzle2, Puzzle3, Puzzle4];
