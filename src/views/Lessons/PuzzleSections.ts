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

import { Content } from "./Content";
import { Capturing } from "./Lesson8Puzzles/Capturing";
import { Tesuji } from "./Lesson8Puzzles/Tesuji";
import { LifeAndDeath } from "./Lesson8Puzzles/LifeAndDeath";

export const sectionKeys = ["capturing", "tesuji", "lifeanddeath"] as const;

export const puzzleSectionMap: Record<(typeof sectionKeys)[number], Array<typeof Content>> = {
    capturing: Capturing,
    tesuji: Tesuji,
    lifeanddeath: LifeAndDeath,
};

export const sectionDisplayNames: Record<(typeof sectionKeys)[number], string> = {
    capturing: "Capturing",
    tesuji: "Tesuji",
    lifeanddeath: "Life and Death",
};
