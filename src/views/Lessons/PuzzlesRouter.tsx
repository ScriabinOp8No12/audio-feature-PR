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
import { Puzzles } from "./Puzzles";
import { useParams } from "react-router-dom";
import { puzzleSections } from "./puzzleSections";

export function PuzzlesRouter(): JSX.Element {
    const params = useParams();
    console.log(params);
    const sectionName = params.section || "tesuji"; // Default to tesuji if missing
    let puzzleNumber = parseInt(params.puzzleNumber || "1") - 1;

    // Convert section name to index using a direct mapping
    let sectionIndex = 0; // Default to Tesuji
    if (sectionName.toLowerCase() === "lifeanddeath") {
        sectionIndex = 1;
    }

    if (sectionIndex < 0 || sectionIndex >= puzzleSections.length) {
        sectionIndex = 0;
    }

    if (puzzleNumber < 0 || puzzleNumber >= puzzleSections[sectionIndex].length) {
        puzzleNumber = 0;
    }

    console.log("Resolved to section index:", sectionIndex, "puzzle number:", puzzleNumber);

    return (
        <div>
            <Puzzles section={sectionIndex} puzzleNumber={puzzleNumber} />
        </div>
    );
}
