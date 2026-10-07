/**
 * This file provides support for Unicode range U+1D400 to U+1D7FF,
 * Mathematical Alphanumeric Symbols.
 *
 * Function wideCharacterFont takes a wide character as input and returns
 * the font information necessary to render it properly.
 */

import type {Mode} from "./types";
import ParseError from "./ParseError";

/**
 * Data below is from https://www.unicode.org/charts/PDF/U1D400.pdf
 * That document sorts characters into groups by font type, say bold or italic.
 *
 * In the arrays below, each subarray consists three elements:
 *      * The CSS class of that group when in math mode.
 *      * The CSS class of that group when in text mode.
 *      * The font name, so that KaTeX can get font metrics.
 */

const wideLatinLetterData = [
    ["mathbf", "textbf", "Main-Bold"],                // A-Z bold upright
    ["mathbf", "textbf", "Main-Bold"],                // a-z bold upright

    ["mathnormal", "textit", "Math-Italic"],         // A-Z italic
    ["mathnormal", "textit", "Math-Italic"],         // a-z italic

    ["boldsymbol", "boldsymbol", "Main-BoldItalic"],  // A-Z bold italic
    ["boldsymbol", "boldsymbol", "Main-BoldItalic"],  // a-z bold italic

    // Map fancy A-Z letters to script, not calligraphic.
    // This aligns with unicode-math and math fonts (except Cambria Math).
    ["mathscr", "textscr", "Script-Regular"],       // A-Z script
    ["", "", ""],                                   // a-z script.  No font

    ["", "", ""],                                   // A-Z bold script. No font
    ["", "", ""],                                   // a-z bold script. No font

    ["mathfrak", "textfrak", "Fraktur-Regular"],    // A-Z Fraktur
    ["mathfrak", "textfrak", "Fraktur-Regular"],    // a-z Fraktur

    ["mathbb", "textbb", "AMS-Regular"],            // A-Z double-struck
    ["mathbb", "textbb", "AMS-Regular"],            // k double-struck

    // Note that we are using a bold font, but font metrics for regular Fraktur.
    ["mathboldfrak", "textboldfrak", "Fraktur-Regular"],  // A-Z bold Fraktur
    ["mathboldfrak", "textboldfrak", "Fraktur-Regular"],  // a-z bold Fraktur

    ["mathsf", "textsf", "SansSerif-Regular"],      // A-Z sans-serif
    ["mathsf", "textsf", "SansSerif-Regular"],      // a-z sans-serif

    ["mathboldsf", "textboldsf", "SansSerif-Bold"], // A-Z bold sans-serif
    ["mathboldsf", "textboldsf", "SansSerif-Bold"], // a-z bold sans-serif

    ["mathitsf", "textitsf", "SansSerif-Italic"],   // A-Z italic sans-serif
    ["mathitsf", "textitsf", "SansSerif-Italic"],   // a-z italic sans-serif

    ["", "", ""],                              // A-Z bold italic sans. No font
    ["", "", ""],                              // a-z bold italic sans. No font

    ["mathtt", "texttt", "Typewriter-Regular"],     // A-Z monospace
    ["mathtt", "texttt", "Typewriter-Regular"],     // a-z monospace
] as const satisfies readonly (readonly [string, string, string])[];

const wideNumeralData = [
    ["mathbf", "textbf", "Main-Bold"],                // 0-9 bold
    ["", "", ""],                         // 0-9 double-struck. No KaTeX font.
    ["mathsf", "textsf", "SansSerif-Regular"],        // 0-9 sans-serif
    ["mathboldsf", "textboldsf", "SansSerif-Bold"],   // 0-9 bold sans-serif
    ["mathtt", "texttt", "Typewriter-Regular"],       // 0-9 monospace
] as const satisfies readonly (readonly [string, string, string])[];

export const wideCharacterFont = (
    wideChar: string,
    mode: Mode,
): [string, string] => {

    // IE doesn't support codePointAt(). So work with the surrogate pair.
    const H = wideChar.charCodeAt(0);    // high surrogate
    const L = wideChar.charCodeAt(1);    // low surrogate
    const codePoint = ((H - 0xD800) * 0x400) + (L - 0xDC00) + 0x10000;

    const j = mode === "math" ? 0 : 1;  // column index for CSS class.

    if (0x1D400 <= codePoint && codePoint < 0x1D6A4) {
        // wideLatinLetterData contains exactly 26 chars on each row.
        // So we can calculate the relevant row. No traverse necessary.
        const i = Math.floor((codePoint - 0x1D400) / 26);
        return [wideLatinLetterData[i]![2], wideLatinLetterData[i]![j]];

    } else if (0x1D7CE <= codePoint && codePoint <= 0x1D7FF) {
        // Numerals, ten per row.
        const i = Math.floor((codePoint - 0x1D7CE) / 10);
        return [wideNumeralData[i]![2], wideNumeralData[i]![j]];

    } else if (codePoint === 0x1D6A5 || codePoint === 0x1D6A6) {
        // dotless i or j
        return [wideLatinLetterData[0][2], wideLatinLetterData[0][j]];

    } else if (0x1D6A6 < codePoint && codePoint < 0x1D7CE) {
        // Greek letters. Not supported, yet.
        return ["", ""];

    } else {
        // We don't support any wide characters outside 1D400–1D7FF.
        throw new ParseError("Unsupported character: " + wideChar);
    }
};
