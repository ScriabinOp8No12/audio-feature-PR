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

class Module1 extends Content {
    audioRef: React.RefObject<HTMLAudioElement>;
    audioUrl: string;

    constructor(audioUrl: string) {
        super();
        this.audioRef = React.createRef();
        this.audioUrl = audioUrl;
    }

    playAudio = async () => {
        const audio = this.audioRef.current;
        if (audio) {
            await audio.play();
        }
    };

    componentWillUnmount() {
        const audio = this.audioRef.current;
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }
    }
}

class Page1 extends Module1 {
    constructor() {
        super(
            "https://res.cloudinary.com/dn8rdavoi/video/upload/v1707854748/kids-go-server-COMBINED-audio-slices/slice_audio1_nkvkon.wav",
        );
    }

    text(): JSX.Element | Array<JSX.Element> {
        return [
            <button key="playButton" onClick={this.playAudio}>
                Play Audio
            </button>,
            <audio
                key="audioElement"
                ref={this.audioRef}
                style={{ visibility: "hidden" }}
                autoPlay={true} // This line auto plays the audio when we click the next button to navigate to the next page
                src={this.audioUrl}
            ></audio>,
            <p>In Go we place stones on the lines, not in the squares!</p>,
            <p>
                The darker color, Blast Off Blue in this case, always goes first, followed by the
                lighter color, Whammo White here.
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
        this.delay(
            () => goban.editPlaceByPrettyCoordinates("e4", JGOFNumericPlayerColor.WHITE),
            10000,
        );
    }
}

class Page2 extends Module1 {
    constructor() {
        super(
            "https://res.cloudinary.com/dn8rdavoi/video/upload/v1707854682/kids-go-server-COMBINED-audio-slices/slice_audio2_pcjrth.wav",
        );
    }

    text(): JSX.Element | Array<JSX.Element> {
        return [
            <button key="playButton" onClick={this.playAudio}>
                Play Audio
            </button>,
            <audio
                key="audioElement"
                ref={this.audioRef}
                style={{ visibility: "hidden" }}
                autoPlay={true}
                src={this.audioUrl}
            ></audio>,
            <p>
                The spaces next to the stones are important, we call them Liberties. This stone has
                four liberties where the lines cross.
            </p>,
        ];
    }
    config(): PuzzleConfig {
        return {
            puzzle_player_move_mode: "fixed",
            initial_state: {
                black: "d4",
                white: "",
            },
        };
    }
    onSetGoban(goban: Goban): void {
        this.delay(() => goban.setMarkByPrettyCoordinates("d5", "1"));
        this.delay(() => goban.setMarkByPrettyCoordinates("e4", "2"));
        this.delay(() => goban.setMarkByPrettyCoordinates("d3", "3"));
        this.delay(() => goban.setMarkByPrettyCoordinates("c4", "4"));

        // todo: stone smiles at end
    }
}

class Page3 extends Module1 {
    constructor() {
        super(
            "https://res.cloudinary.com/dn8rdavoi/video/upload/v1707854677/kids-go-server-COMBINED-audio-slices/slice_audio3_n7porg.wav",
        );
    }

    text(): JSX.Element | Array<JSX.Element> {
        return [
            <button key="playButton" onClick={this.playAudio}>
                Play Audio
            </button>,
            <audio
                key="audioElement"
                ref={this.audioRef}
                style={{ visibility: "hidden" }}
                autoPlay={true}
                src={this.audioUrl}
            ></audio>,
            <p>
                There are no liberties off the edge of the board, so this stone only has two
                liberties.
            </p>,
        ];
    }
    config(): PuzzleConfig {
        return {
            puzzle_player_move_mode: "fixed",
            initial_state: {
                black: "g7",
                white: "",
            },
        };
    }
    onSetGoban(goban: Goban): void {
        this.delay(() => goban.setMarkByPrettyCoordinates("f7", "1"), 3000);
        this.delay(() => goban.setMarkByPrettyCoordinates("g6", "2"));
    }
}

class Page4 extends Module1 {
    constructor() {
        super(
            "https://res.cloudinary.com/dn8rdavoi/video/upload/v1707854678/kids-go-server-COMBINED-audio-slices/slice_audio4_xitqmt.wav",
        );
    }

    text(): JSX.Element | Array<JSX.Element> {
        return [
            <button key="playButton" onClick={this.playAudio}>
                Play Audio
            </button>,
            <audio
                key="audioElement"
                ref={this.audioRef}
                style={{ visibility: "hidden" }}
                autoPlay={true}
                src={this.audioUrl}
            ></audio>,
            <p>And this stone only has three.</p>,
        ];
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

class Page5 extends Module1 {
    constructor() {
        super(
            "https://res.cloudinary.com/dn8rdavoi/video/upload/v1707854684/kids-go-server-COMBINED-audio-slices/slice_audio5_l4jolv.wav",
        );
    }
    text(): JSX.Element | Array<JSX.Element> {
        return [
            <button key="playButton" onClick={this.playAudio}>
                Play Audio
            </button>,
            <audio
                key="audioElement"
                ref={this.audioRef}
                style={{ visibility: "hidden" }}
                autoPlay={true}
                src={this.audioUrl}
            ></audio>,
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

class Page6 extends Module1 {
    constructor() {
        super(
            "https://res.cloudinary.com/dn8rdavoi/video/upload/v1707854745/kids-go-server-COMBINED-audio-slices/slice_audio6_hpjrch.wav",
        );
    }
    text(): JSX.Element | Array<JSX.Element> {
        return [
            <button key="playButton" onClick={this.playAudio}>
                Play Audio
            </button>,
            <audio
                key="audioElement"
                ref={this.audioRef}
                style={{ visibility: "hidden" }}
                autoPlay={true}
                src={this.audioUrl}
            ></audio>,
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
                black: "d4",
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

class Page7 extends Module1 {
    constructor() {
        super(
            "https://res.cloudinary.com/dn8rdavoi/video/upload/v1707854750/kids-go-server-COMBINED-audio-slices/slice_audio7_cflubx.wav",
        );
    }
    text(): JSX.Element | Array<JSX.Element> {
        return [
            <button key="playButton" onClick={this.playAudio}>
                Play Audio
            </button>,
            <audio
                key="audioElement"
                ref={this.audioRef}
                style={{ visibility: "hidden" }}
                autoPlay={true}
                src={this.audioUrl}
            ></audio>,
            <p>If we add a stone, then they form a team and get new liberties.</p>,
            <p>Now they have three liberties and are safe from immediate capture.</p>,
        ];
    }
    config(): PuzzleConfig {
        return {
            puzzle_player_move_mode: "fixed",
            initial_state: {
                black: "d4",
                white: "c4d3e4",
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

class Page8 extends Module1 {
    constructor() {
        super(
            "https://res.cloudinary.com/dn8rdavoi/video/upload/v1707854685/kids-go-server-COMBINED-audio-slices/slice_audio8_d4znwa.wav",
        );
    }
    text(): JSX.Element | Array<JSX.Element> {
        return [
            <button key="playButton" onClick={this.playAudio}>
                Play Audio
            </button>,
            <audio
                key="audioElement"
                ref={this.audioRef}
                style={{ visibility: "hidden" }}
                autoPlay={true}
                src={this.audioUrl}
            ></audio>,
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
                black: "d4",
                white: "c4d3e4",
            },
        } as PuzzleConfig;
    }
    onSetGoban(goban: Goban): void {
        this.delay(() => goban.placeByPrettyCoordinates("f5"));
        this.delay(() => goban.placeByPrettyCoordinates("d5"));
    }
}

class Puzzle1 extends Module1 {
    private successAudio: HTMLAudioElement;
    constructor() {
        // This is the manually sliced audio clip for the first puzzle
        super(
            "https://res.cloudinary.com/dn8rdavoi/video/upload/v1707977976/kids-go-server-audio-slices/slice_first_puzzle_audio_wflxs8.wav",
        );
        // Success audio for the popup audio!  Says "Good job!"
        this.successAudio = new Audio(
            "https://res.cloudinary.com/dn8rdavoi/video/upload/v1707852115/kids-go-server-audio-slices/slice_13_q0v6nw.wav",
        );
    }

    text(): JSX.Element | Array<JSX.Element> {
        return [
            <button key="playButton" onClick={this.playAudio}>
                Play Audio
            </button>,
            <audio
                key="audioElement"
                ref={this.audioRef}
                style={{ visibility: "hidden" }}
                autoPlay={true}
                src={this.audioUrl}
            ></audio>,
            <p>Lets try some simple problems now. Try and capture the White stone.</p>,
        ];
    }
    config(): PuzzleConfig {
        return {
            initial_state: {
                black: "c7d6",
                white: "d7",
            },
            move_tree: this.makePuzzleMoveTree(["e7"], []),
        };
    }
    onSetGoban(goban: Goban): void {
        goban.on("puzzle-correct-answer", () => {
            // If we chain the success audio after the captureDelay, the "good job audio clip" happens after we go to the next puzzle
            this.successAudio
                .play()
                .catch((error) => console.error("Error playing success audio:", error));
            this.captureDelay(() => {
                openPopup({
                    text: <Axol>Good job!</Axol>,
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

class Puzzle2 extends Module1 {
    private successAudio: HTMLAudioElement;
    constructor() {
        super(
            "https://res.cloudinary.com/dn8rdavoi/video/upload/v1707852119/kids-go-server-audio-slices/slice_14_s6dmem.wav",
        );
        this.successAudio = new Audio(
            "https://res.cloudinary.com/dn8rdavoi/video/upload/v1707852116/kids-go-server-audio-slices/slice_15_cidisp.wav",
        );
    }
    text(): JSX.Element | Array<JSX.Element> {
        return [
            <button key="playButton" onClick={this.playAudio}>
                Play Audio
            </button>,
            <audio
                key="audioElement"
                ref={this.audioRef}
                style={{ visibility: "hidden" }}
                autoPlay={true}
                src={this.audioUrl}
            ></audio>,
            <p>Try and capture the White stone.</p>,
        ];
    }
    config(): PuzzleConfig {
        return {
            initial_state: {
                black: "e5d4e3",
                white: "e4",
            },
            move_tree: this.makePuzzleMoveTree(["F4"], []),
        };
    }
    onSetGoban(goban: Goban): void {
        goban.on("puzzle-correct-answer", () => {
            this.successAudio
                .play()
                .catch((error) => console.error("Error playing success audio:", error));
            this.captureDelay(() => {
                openPopup({
                    text: <Axol>You did it!</Axol>,
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

class Puzzle3 extends Module1 {
    private successAudio: HTMLAudioElement;
    constructor() {
        super(
            "https://res.cloudinary.com/dn8rdavoi/video/upload/v1707852118/kids-go-server-audio-slices/slice_16_p8yhmr.wav",
        );
        this.successAudio = new Audio(
            "https://res.cloudinary.com/dn8rdavoi/video/upload/v1707852117/kids-go-server-audio-slices/slice_17_z0n55r.wav",
        );
    }
    text(): JSX.Element | Array<JSX.Element> {
        return [
            <button key="playButton" onClick={this.playAudio}>
                Play Audio
            </button>,
            <audio
                key="audioElement"
                ref={this.audioRef}
                style={{ visibility: "hidden" }}
                autoPlay={true}
                src={this.audioUrl}
            ></audio>,
            <p>Try and capture the White stones.</p>,
        ];
    }
    config(): PuzzleConfig {
        return {
            initial_state: {
                black: "e5e2d4d3f4",
                white: "e4e3",
            },
            move_tree: this.makePuzzleMoveTree(["f3"], []),
        };
    }
    onSetGoban(goban: Goban): void {
        goban.on("puzzle-correct-answer", () => {
            this.successAudio
                .play()
                .catch((error) => console.error("Error playing success audio:", error));
            this.captureDelay(() => {
                openPopup({
                    text: <Axol>Nice work!</Axol>,
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

class Puzzle4 extends Module1 {
    private successAudio: HTMLAudioElement;
    constructor() {
        super(
            "https://res.cloudinary.com/dn8rdavoi/video/upload/v1708548582/audio-slices-less-pauses/slice18_less_pauses_revised_y2583y.wav",
        );
        this.successAudio = new Audio(
            "https://res.cloudinary.com/dn8rdavoi/video/upload/v1707852119/kids-go-server-audio-slices/slice_19_ddyawc.wav",
        );
    }
    text(): JSX.Element | Array<JSX.Element> {
        return [
            <button key="playButton" onClick={this.playAudio}>
                Play Audio
            </button>,
            <audio
                key="audioElement"
                ref={this.audioRef}
                style={{ visibility: "hidden" }}
                autoPlay={true}
                src={this.audioUrl}
            ></audio>,
            <p>Try and capture these White stones.</p>,
        ];
    }
    config(): PuzzleConfig {
        return {
            initial_state: {
                black: "d6e6d5f5c4d3d2e2f3",
                white: "d4e5e4e3",
            },
            move_tree: this.makePuzzleMoveTree(["f4"], []),
        };
    }
    onSetGoban(goban: Goban): void {
        goban.on("puzzle-correct-answer", () => {
            this.successAudio
                .play()
                .catch((error) => console.error("Error playing success audio:", error));
            this.captureDelay(() => {
                openPopup({
                    text: <Axol>Very clever!</Axol>,
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

class Puzzle5 extends Module1 {
    private successAudio: HTMLAudioElement;
    constructor() {
        super(
            "https://res.cloudinary.com/dn8rdavoi/video/upload/v1708472327/audio-slices-less-pauses/slice14_less_pauses_if00pt.wav",
        );
        this.successAudio = new Audio(
            "https://res.cloudinary.com/dn8rdavoi/video/upload/v1708472328/audio-slices-less-pauses/slice15_less_pauses_w7g2jr.wav",
        );
    }
    text(): JSX.Element | Array<JSX.Element> {
        return [
            <button key="playButton" onClick={this.playAudio}>
                Play Audio
            </button>,
            <audio
                key="audioElement"
                ref={this.audioRef}
                style={{ visibility: "hidden" }}
                autoPlay={true}
                src={this.audioUrl}
            ></audio>,
            <p>Try and capture the White stone.</p>,
        ];
    }
    config(): PuzzleConfig {
        return {
            initial_state: {
                black: "e6d5f5",
                white: "d4e5",
            },
            move_tree: this.makePuzzleMoveTree(["e4"], []),
        };
    }
    onSetGoban(goban: Goban): void {
        goban.on("puzzle-correct-answer", () => {
            this.successAudio
                .play()
                .catch((error) => console.error("Error playing success audio:", error));
            this.captureDelay(() => {
                openPopup({
                    text: <Axol>Good job!</Axol>,
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

class Puzzle6 extends Module1 {
    private successAudio: HTMLAudioElement;
    constructor() {
        super(
            "https://res.cloudinary.com/dn8rdavoi/video/upload/v1708548582/audio-slices-less-pauses/slice18_less_pauses_revised_y2583y.wav",
        );
        this.successAudio = new Audio(
            "https://res.cloudinary.com/dn8rdavoi/video/upload/v1708548659/audio-slices-less-pauses/slice19_less_pauses_revised_fykpjy.wav",
        );
    }
    text(): JSX.Element | Array<JSX.Element> {
        return [
            <button key="playButton" onClick={this.playAudio}>
                Play Audio
            </button>,
            <audio
                key="audioElement"
                ref={this.audioRef}
                style={{ visibility: "hidden" }}
                autoPlay={true}
                src={this.audioUrl}
            ></audio>,
            <p>Try and capture these White stones.</p>,
        ];
    }
    config(): PuzzleConfig {
        return {
            initial_state: {
                black: "b4b3b2c1d2d3e4f4f5e6d6",
                white: "e5d5d4c4c3c2",
            },
            move_tree: this.makePuzzleMoveTree(["c5"], []),
        };
    }
    onSetGoban(goban: Goban): void {
        goban.on("puzzle-correct-answer", () => {
            this.successAudio
                .play()
                .catch((error) => console.error("Error playing success audio:", error));
            this.captureDelay(() => {
                openPopup({
                    text: <Axol>You did it!</Axol>,
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

class Puzzle7 extends Module1 {
    private successAudio: HTMLAudioElement;
    constructor() {
        super(
            "https://res.cloudinary.com/dn8rdavoi/video/upload/v1708548582/audio-slices-less-pauses/slice18_less_pauses_revised_y2583y.wav",
        );
        this.successAudio = new Audio(
            "https://res.cloudinary.com/dn8rdavoi/video/upload/v1707852117/kids-go-server-audio-slices/slice_17_z0n55r.wav",
        );
    }
    text(): JSX.Element | Array<JSX.Element> {
        return [
            <button key="playButton" onClick={this.playAudio}>
                Play Audio
            </button>,
            <audio
                key="audioElement"
                ref={this.audioRef}
                style={{ visibility: "hidden" }}
                autoPlay={true}
                src={this.audioUrl}
            ></audio>,
            <p>Try and capture these White stones.</p>,
        ];
    }
    config(): PuzzleConfig {
        return {
            initial_state: {
                black: "d7d6d5e5f5g5",
                white: "e7e6f6g6g7",
            },
            move_tree: this.makePuzzleMoveTree(["f7"], []),
        };
    }
    onSetGoban(goban: Goban): void {
        goban.on("puzzle-correct-answer", () => {
            this.successAudio
                .play()
                .catch((error) => console.error("Error playing success audio:", error));
            this.captureDelay(() => {
                openPopup({
                    text: <Axol>Nice work!</Axol>,
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

class Puzzle8 extends Module1 {
    private successAudio: HTMLAudioElement;
    constructor() {
        super(
            "https://res.cloudinary.com/dn8rdavoi/video/upload/v1708548582/audio-slices-less-pauses/slice18_less_pauses_revised_y2583y.wav",
        );
        this.successAudio = new Audio(
            "https://res.cloudinary.com/dn8rdavoi/video/upload/v1708548659/audio-slices-less-pauses/slice19_less_pauses_revised_fykpjy.wav",
        );
    }
    text(): JSX.Element | Array<JSX.Element> {
        return [
            <button key="playButton" onClick={this.playAudio}>
                Play Audio
            </button>,
            <audio
                key="audioElement"
                ref={this.audioRef}
                style={{ visibility: "hidden" }}
                autoPlay={true}
                src={this.audioUrl}
            ></audio>,
            <p>Try and capture these White stones.</p>,
        ];
    }
    config(): PuzzleConfig {
        return {
            initial_state: {
                black: "c7c6c5b5a5",
                white: "a6b6b7",
            },
            move_tree: this.makePuzzleMoveTree(["a7"], []),
        };
    }
    onSetGoban(goban: Goban): void {
        goban.on("puzzle-correct-answer", () => {
            this.successAudio
                .play()
                .catch((error) => console.error("Error playing success audio:", error));
            this.captureDelay(() => {
                openPopup({
                    text: <Axol>Very clever!</Axol>,
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

export const module1: Array<typeof Content> = [
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
    Page6,
    Page7,
    Page8,

    Puzzle1,
    Puzzle2,
    Puzzle3,
    Puzzle4,
    Puzzle5,
    Puzzle6,
    Puzzle7,
    Puzzle8,
];
