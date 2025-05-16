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
        return [<p>Net 1</p>];
    }
    config(): PuzzleConfig {
        return {
            initial_state: {
                black: "c6d6d5d4e3f4g3h4",
                white: "b7c7e4e5e8f8g8h7h6h5",
            },

            move_tree: this.makePuzzleMoveTree(
                ["f6f5g5e6e7"],
                [
                    "f5e6f6e7",
                    "f5e6e7f6f7g6",
                    "f5e6e7f6g6f7",
                    "e6f5f6g5",
                    "e6f5g5f6f7g6",
                    "e6f5g5f6g6f7",
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
        return [<p>Net 2</p>];
    }
    config(): PuzzleConfig {
        return {
            initial_state: {
                black: "f1e2d2d3d4d5d6d7f3f4f5g5h5",
                white: "h1j2g2f2g3h3g4e3e4e5e6j5h6h7g8c4c5c6c7c8d8",
            },

            move_tree: this.makePuzzleMoveTree(
                ["f7e7e8f6g6"],
                ["f6e7e8f7f8g7", "e7f6g6f7g7h4", "e7f6f7g6", "e7f6g6f7f8g7", "f6e7f7e8"],
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

export const Net: Array<typeof Content> = [Puzzle1, Puzzle2, Puzzle3, Puzzle4];
