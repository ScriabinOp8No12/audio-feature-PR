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
        return [<p>Random 1</p>];
    }
    config(): PuzzleConfig {
        return {
            initial_state: {
                black: "f8f7e6d6d9c6c8b7b6",
                white: "h8g6g9f6e7e8e9d7c7b8",
            },

            move_tree: this.makePuzzleMoveTree(["f9g8d8"], ["d8c9", "b9f9", "f9g8g7h7"], 9, 9),
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
        return [<p>Random 2</p>];
    }
    config(): PuzzleConfig {
        return {
            initial_state: {
                black: "c6d4d7d8e9f8f7f6g7h7h6",
                white: "b4c3d3d6e6e7e8f3f5g3g6g5g6h5",
            },

            move_tree: this.makePuzzleMoveTree(["e5d5c5"], ["d5e5", "e5d5e4c5"], 9, 9),
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
        return [<p>Random 3</p>];
    }
    config(): PuzzleConfig {
        return {
            initial_state: {
                black: "j5h4h7h8g4g7f4f6e5e6",
                white: "j3j6j7h3h6g3g5g6f3f5e3e4",
            },

            move_tree: this.makePuzzleMoveTree(["j8j4h5"], ["h5j4", "j4h5"], 9, 9),
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
        return [<p>Random 4</p>];
    }
    config(): PuzzleConfig {
        return {
            initial_state: {
                black: "j4j6j7j8h8g8g7g4g3f6e6e5",
                white: "h7h6h3h2g6g2f8f7f5f4f3f2d8d7",
            },

            move_tree: this.makePuzzleMoveTree(["g5h5h4j3j5"], ["h5g5", "g5h5j5h4"], 9, 9),
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
        return [<p>Random 5</p>];
    }
    config(): PuzzleConfig {
        return {
            initial_state: {
                black: "g7g8f7e8e9d7d8c8c9",
                white: "h5h7h8h9g5f6f8e6e7d6c5c7b7b8b9",
            },

            move_tree: this.makePuzzleMoveTree(["g9g6f9"], ["f9g9g6h6f8d9"], 9, 9),
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
        return [<p>Random 6</p>];
    }
    config(): PuzzleConfig {
        return {
            initial_state: {
                black: "a8b8c8d8e9",
                white: "a7b7c7d7d9e7f8f9",
            },

            move_tree: this.makePuzzleMoveTree(["e8c9b9"], ["c9e8d9b9a9b9"], 9, 9),
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
        return [<p>Random 7</p>];
    }
    config(): PuzzleConfig {
        return {
            initial_state: {
                black: "h4h5h6g6f7e7e8e4d5d7c8c7c6b6",
                white: "h2h7h8g3g7g9g4g5f6f8f4e3e6d3d6c4c5",
            },

            move_tree: this.makePuzzleMoveTree(["f5e5f5"], ["e5f5"], 9, 9),
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
        return [<p>Random 8</p>];
    }
    config(): PuzzleConfig {
        return {
            initial_state: {
                black: "b7b9c7d8d9",
                white: "a6b6b8c6d7e6e8e9",
            },

            move_tree: this.makePuzzleMoveTree(["a8c8c9"], ["c8a8a7c9"], 9, 9),
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

class Puzzle9 extends Content {
    text(): JSX.Element | Array<JSX.Element> {
        return [<p>Random 9</p>];
    }
    config(): PuzzleConfig {
        return {
            initial_state: {
                black: "a3b4b6c3c7d3d4d6e5",
                white: "a5b2b3b5c2c4c5c6d5",
            },

            move_tree: this.makePuzzleMoveTree(["a6a4b4"], ["a4a2", "a6a4a2a1"], 9, 9),
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

class Puzzle10 extends Content {
    text(): JSX.Element | Array<JSX.Element> {
        return [<p>Random 10</p>];
    }
    config(): PuzzleConfig {
        return {
            initial_state: {
                black: "j7j4j1h7h4h1g1g4g5g6f2f4e2e3c2",
                white: "j3j6h3h6h8g3g7f3f5f6f7e4e5c4",
            },

            move_tree: this.makePuzzleMoveTree(
                [
                    "g2j8h2h5j2",
                    "g2j8j2h5h2",
                    "h2j8g2h5j2",
                    "h2j8j2h5g2",
                    "j2j8h2h5g2",
                    "j2j8g2h5h2",
                ],
                [
                    "h5j5",
                    "j5h5",
                    "j8j9",
                    "g2j8h5j5",
                    "g2j8j5h5",
                    "h2j8h5j5",
                    "h2j8j5h5",
                    "j2j8h5j5",
                    "j2j8j5h5",
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

class Puzzle11 extends Content {
    text(): JSX.Element | Array<JSX.Element> {
        return [<p>Random 11</p>];
    }
    config(): PuzzleConfig {
        return {
            initial_state: {
                black: "j6j7h6g5f5f8e5e6e7d8c9c7",
                white: "j8h7h9h8g8g9f6f7e8e9",
            },

            move_tree: this.makePuzzleMoveTree(
                ["g7f9g6f8d9d6j9"],
                ["d9f9g6g7", "g6g7d9f9", "d9f9g7g6"],
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

export const Random: Array<typeof Content> = [
    Puzzle1,
    Puzzle2,
    Puzzle3,
    Puzzle4,
    Puzzle5,
    Puzzle6,
    Puzzle7,
    Puzzle8,
    Puzzle9,
    Puzzle10,
    Puzzle11,
];
