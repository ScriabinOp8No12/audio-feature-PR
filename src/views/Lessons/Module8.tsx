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
import { PuzzleConfig, Goban } from "goban";
import { Axol } from "./Axol";
import { openPopup } from "@kidsgo/components/PopupDialog";

const POPUP_TIMEOUT = 1500;

class Puzzle1 extends Content {
    text(): JSX.Element | Array<JSX.Element> {
        return [<p>Puzzle 1 capturing race</p>];
    }
    config(): PuzzleConfig {
        return {
            width: 9,
            height: 9,
            initial_state: {
                black: "a4b5b6b7b8d8e7f5f4e3d3c4c3c2c1",
                white: "b1b2b3b4c5c6c7d5d4e4f3f2h3",
            },

            move_tree: this.makePuzzleMoveTree(
                ["a3e2a2d2a1", "a2e2a3d2a1"],
                ["c8e2", "d7e2", "d6e2", "e5e2", "e2e1d2d1", "e2e1d1d2", "d2e2", "d1e2", "e1e2"],
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
        return [<p>Puzzle 2 cuts</p>];
    }
    config(): PuzzleConfig {
        return {
            width: 9,
            height: 9,
            initial_state: {
                black: "h3g4f4f5f6g7",
                white: "h2g2g3h4g5g6h7",
            },

            move_tree: this.makePuzzleMoveTree(["h5j3h6"], ["h6h5j6j7j5j4"], 9, 9),
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
        return [<p>Puzzle 3 capturing / cuts</p>];
    }
    config(): PuzzleConfig {
        return {
            width: 9,
            height: 9,
            initial_state: {
                black: "e9e8e7f7g8g6h6j6j7",
                white: "f9f8h9g7h7j8f6f5g5h5",
            },

            move_tree: this.makePuzzleMoveTree(["h8"], ["g9j5"], 9, 9),
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

class Puzzle4 extends Content {
    text(): JSX.Element | Array<JSX.Element> {
        return [<p>Puzzle 4 cuts / capturing</p>];
    }
    config(): PuzzleConfig {
        return {
            width: 9,
            height: 9,
            initial_state: {
                black: "d9e8f8h8g7g6f5d5h7",
                white: "c8d8e7f7f6g8g9g5g4e3d4c5c6h5h6j7",
            },

            move_tree: this.makePuzzleMoveTree(
                ["d7e6d6e5e4"],
                ["f9e9", "h9j8f9e5", "d7e6e5d6"],
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

class Puzzle5 extends Content {
    text(): JSX.Element | Array<JSX.Element> {
        return [<p>Puzzle 5 capturing / cuts</p>];
    }
    config(): PuzzleConfig {
        return {
            width: 9,
            height: 9,
            initial_state: {
                black: "e5d6d7e8g8g7g6",
                white: "f7e7e6f5f4f3e3",
            },

            move_tree: this.makePuzzleMoveTree(
                ["f6d5f8"],
                ["d5f6", "f8f6", "f6d5e4d4", "f6d5c5e4"],
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

class Puzzle6 extends Content {
    text(): JSX.Element | Array<JSX.Element> {
        return [<p>Puzzle 6 life and death</p>];
    }
    config(): PuzzleConfig {
        return {
            width: 9,
            height: 9,
            initial_state: {
                black: "e3f3g3g4g5g6g7f7e7d8c8b7b6b5c4d4",
                white: "e4f4f5f6e6d7c7c6d5",
            },

            move_tree: this.makePuzzleMoveTree(["c5d3d6"], [""], 9, 9),
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

class Puzzle7 extends Content {
    text(): JSX.Element | Array<JSX.Element> {
        return [<p>Puzzle 7 capturing</p>];
    }
    config(): PuzzleConfig {
        return {
            width: 9,
            height: 9,
            initial_state: {
                black: "a6a7b7c7c6d7d5e7f7g7h7h6g5",
                white: "a5b5b6c5c4d6e6f6g6e4g3h4h5j5",
            },

            move_tree: this.makePuzzleMoveTree(["e5f5f4"], ["f5e5"], 9, 9),
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

class Puzzle8 extends Content {
    text(): JSX.Element | Array<JSX.Element> {
        return [<p>Puzzle 8 life and death</p>];
    }
    config(): PuzzleConfig {
        return {
            width: 9,
            height: 9,
            initial_state: {
                black: "b5a7b7c7d7e8f8g8",
                white: "a8b8b9c8d8e9",
            },

            move_tree: this.makePuzzleMoveTree(["d9c9f9d9a9"], ["f9d9"], 9, 9),
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

export const module8: Array<typeof Content> = [
    Puzzle1,
    Puzzle2,
    Puzzle3,
    Puzzle4,
    Puzzle5,
    Puzzle6,
    Puzzle7,
    Puzzle8,
];
