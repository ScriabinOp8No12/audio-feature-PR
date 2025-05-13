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
        return [<p>Puzzle 12 Life and death / cuts</p>];
    }
    config(): PuzzleConfig {
        return {
            width: 9,
            height: 9,
            initial_state: {
                black: "j3h3g3f3d3e4e5d6f6f7f8g8j7",
                white: "j4h4g4f4f5h5j5g6h6g7h8h9j9",
            },

            move_tree: this.makePuzzleMoveTree(["h7j8g9"], ["j8h7", "j6h7", "g9h7"], 9, 9),
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
        return [<p>Puzzle 13 capturing / cuts </p>];
    }
    config(): PuzzleConfig {
        return {
            width: 9,
            height: 9,
            initial_state: {
                black: "d7d6d5d4e4f4g4h5h6h7g7",
                white: "c7c8d8e8e6e5f5g5g6f7g8h8",
            },

            move_tree: this.makePuzzleMoveTree(["e7f6f8"], ["f8e7"], 9, 9),
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
        return [<p>Puzzle 14 capturing / cuts </p>];
    }
    config(): PuzzleConfig {
        return {
            width: 9,
            height: 9,
            initial_state: {
                black: "e3f3g3g4g5g6g7f7e7",
                white: "f4f5f6d5c3b4b5b6c7",
            },

            move_tree: this.makePuzzleMoveTree(
                ["e5e6d6e4d4e5c5"],
                ["e6e5", "e4e5", "e5e6e4d6"],
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

class Puzzle4 extends Content {
    text(): JSX.Element | Array<JSX.Element> {
        return [<p>Puzzle 15 capturing </p>];
    }
    config(): PuzzleConfig {
        return {
            width: 9,
            height: 9,
            initial_state: {
                black: "j7j8h8g8j5h5f7e7e6e5",
                white: "j6h6h7g7g5g4g3f6f8e8d8e3c4c6",
            },

            move_tree: this.makePuzzleMoveTree(["g6"], ["f5g6"], 9, 9),
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
        return [<p>Puzzle 16 cuts / capturing </p>];
    }
    config(): PuzzleConfig {
        return {
            width: 9,
            height: 9,
            initial_state: {
                black: "c6c7c8d9e8f7f6",
                white: "d8d7e7e6d4f4f5",
            },

            move_tree: this.makePuzzleMoveTree(["e5d6d5"], ["d6e5"], 9, 9),
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
        return [<p>Puzzle 17 capturing </p>];
    }
    config(): PuzzleConfig {
        return {
            width: 9,
            height: 9,
            initial_state: {
                black: "b3c3d2d3d4e4c6f5f6g5",
                white: "e2e3e5f3f4h3h4h5g6g7f8c5b5b6b7",
            },

            move_tree: this.makePuzzleMoveTree(["d5e6e7d6d7"], ["e6d5"], 9, 9),
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
        return [<p>Puzzle 18 capturing / cuts </p>];
    }
    config(): PuzzleConfig {
        return {
            width: 9,
            height: 9,
            initial_state: {
                black: "d8f9f8f7f6e5d5",
                white: "c6c5c4d3e3f4f5g6e6e7e8",
            },

            move_tree: this.makePuzzleMoveTree(["d6d7c7d4e9"], ["d7d6", "e9d6"], 9, 9),
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
        return [<p>Puzzle 19 capturing / cuts </p>];
    }
    config(): PuzzleConfig {
        return {
            width: 9,
            height: 9,
            initial_state: {
                black: "d5d4d3e2f3h3g4h5g6",
                white: "c5c6d6d7e3e4e5e8f4f5g5g7h7",
            },

            move_tree: this.makePuzzleMoveTree(["e6f6f7"], ["f6e6", "e7e6", "f7e6"], 9, 9),
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
        return [<p>Puzzle 20 life and death </p>];
    }
    config(): PuzzleConfig {
        return {
            width: 9,
            height: 9,
            initial_state: {
                black: "a9b9a7b7c7c6d6e6f7f8f9",
                white: "a8b8c8d7e7e8e9",
            },

            move_tree: this.makePuzzleMoveTree(["d9d8c9"], ["c9d9"], 9, 9),
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
        return [<p>Puzzle 21 connecting / life and death </p>];
    }
    config(): PuzzleConfig {
        return {
            width: 9,
            height: 9,
            initial_state: {
                black: "e3g3h3h5j6h7g7f7e7",
                white: "j5h4g4g5g6e5e6d7d8e8f8g8",
            },

            move_tree: this.makePuzzleMoveTree(["j4h6j5"], ["h6j4", "h8h6", "j3h6"], 9, 9),
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
        return [<p>Puzzle 22 ladder </p>];
    }
    config(): PuzzleConfig {
        return {
            width: 9,
            height: 9,
            initial_state: {
                black: "f3g4d4c5b6c7d7e6",
                white: "e2g2g3h4h5g5g7f8e5d5d6c6",
            },

            move_tree: this.makePuzzleMoveTree(["f5e4e3f4g4"], ["e4f5", "f5e4f4e3"], 9, 9),
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

class Puzzle12 extends Content {
    text(): JSX.Element | Array<JSX.Element> {
        return [<p>Puzzle 23 life and death / cuts </p>];
    }
    config(): PuzzleConfig {
        return {
            width: 9,
            height: 9,
            initial_state: {
                black: "j7h7h6j5h5g5g4",
                white: "j8h8g8g7f6f5f4f3g3g2g1h1j1h4j4",
            },

            move_tree: this.makePuzzleMoveTree(
                ["h3j3j2j3j4h2j3"],
                ["j3h3", "h2h3", "j2h3", "h3j3j2j3h2h4", "h3j3j2j3j4h2g6j3"],
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

class Puzzle13 extends Content {
    text(): JSX.Element | Array<JSX.Element> {
        return [<p>Puzzle 24 life and death </p>];
    }
    config(): PuzzleConfig {
        return {
            width: 9,
            height: 9,
            initial_state: {
                black: "g1f2f3e2d2d3d4e4",
                white: "a2b2c2c3c4c5d5e5f5f4g4g3g2h2e1",
            },

            move_tree: this.makePuzzleMoveTree(["d1h1f1"], ["d1h1c1f1g1f1", "f1d1c1d1e1b1"], 9, 9),
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

class Puzzle14 extends Content {
    text(): JSX.Element | Array<JSX.Element> {
        return [<p>Puzzle 25 life and death </p>];
    }
    config(): PuzzleConfig {
        return {
            width: 9,
            height: 9,
            initial_state: {
                black: "g9g8h8f8g7j6h6h5g5",
                white: "j4h4g4f4e4g6f6f7e7e8e9f9h9j9j8j7e5",
            },

            move_tree: this.makePuzzleMoveTree(
                ["h7j8j9h9j7f5j9"],
                ["h7j8j7j9", "h7j8h9", "h7j8j9h9j5j9", "h7j8j9h9f5j9"],
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

export const LifeAndDeath: Array<typeof Content> = [
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
    Puzzle12,
    Puzzle13,
    Puzzle14,
];
