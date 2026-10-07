/**
 * This file does conversion between units.  In particular, it provides
 * calculateSize to convert other units into ems.
 */

import ParseError from "./ParseError";
import Options from "./Options";

// This table gives the number of TeX pts in one of each *absolute* TeX unit.
// Thus, multiplying a length by this number converts the length from units
// into pts.  Dividing the result by ptPerEm gives the number of ems
// *assuming* a font size of ptPerEm (normal size, normal style).
const ptPerUnit: Record<string, number> = {
    // https://en.wikibooks.org/wiki/LaTeX/Lengths and
    // https://tex.stackexchange.com/a/8263
    "pt": 1,            // TeX point
    "mm": 7227 / 2540,  // millimeter
    "cm": 7227 / 254,   // centimeter
    "in": 72.27,        // inch
    "bp": 803 / 800,    // big (PostScript) points
    "pc": 12,           // pica
    "dd": 1238 / 1157,  // didot
    "cc": 14856 / 1157, // cicero (12 didot)
    "nd": 685 / 642,    // new didot
    "nc": 1370 / 107,   // new cicero (12 new didot)
    "sp": 1 / 65536,    // scaled point (TeX's internal smallest unit)
    // https://tex.stackexchange.com/a/41371
    "px": 803 / 800,    // \pdfpxdimen defaults to 1 bp in pdfTeX and LuaTeX
};

// Dictionary of relative units, for fast validity testing.
const relativeUnit = {
    "ex": true,
    "em": true,
    "mu": true,
};

export type Measurement = { number: number, unit: string };

/**
 * Determine whether the specified unit (either a string defining the unit
 * or a "size" parse node containing a unit field) is valid.
 */
export const validUnit = function(unit: string | Measurement): boolean {
    if (typeof unit !== "string") {
        unit = unit.unit;
    }
    return (unit in ptPerUnit || unit in relativeUnit || unit === "ex");
};

/*
 * Convert a "size" parse node (with numeric "number" and string "unit" fields,
 * as parsed by functions.js argType "size") into a CSS em value for the
 * current style/scale.  `options` gives the current options.
 */
export const calculateSize = function(
        sizeValue: Measurement, options: Options): number {
    let scale;
    if (sizeValue.unit in ptPerUnit) {
        // Absolute units
        scale = ptPerUnit[sizeValue.unit]   // Convert unit to pt
           / options.fontMetrics().ptPerEm  // Convert pt to CSS em
           / options.sizeMultiplier;        // Unscale to make absolute units
    } else if (sizeValue.unit === "mu") {
        // `mu` units scale with scriptstyle/scriptscriptstyle.
        scale = options.fontMetrics().cssEmPerMu;
    } else {
        // Other relative units always refer to the *textstyle* font
        // in the current size.
        let unitOptions;
        if (options.style.isTight()) {
            // isTight() means current style is script/scriptscript.
            unitOptions = options.havingStyle(options.style.text());
        } else {
            unitOptions = options;
        }
        // TODO: In TeX these units are relative to the quad of the current
        // *text* font, e.g. cmr10. KaTeX instead uses values from the
        // comparably-sized *Computer Modern symbol* font. At 10pt, these
        // match. At 7pt and 5pt, they differ: cmr7=1.138894, cmsy7=1.170641;
        // cmr5=1.361133, cmsy5=1.472241. Consider $\scriptsize a\kern1emb$.
        // TeX \showlists shows a kern of 1.13889 * fontsize;
        // KaTeX shows a kern of 1.171 * fontsize.
        if (sizeValue.unit === "ex") {
            scale = unitOptions.fontMetrics().xHeight;
        } else if (sizeValue.unit === "em") {
            scale = unitOptions.fontMetrics().quad;
        } else {
            throw new ParseError("Invalid unit: '" + sizeValue.unit + "'");
        }
        if (unitOptions !== options) {
            scale *= unitOptions.sizeMultiplier / options.sizeMultiplier;
        }
    }
    return Math.min(sizeValue.number * scale, options.maxSize);
};

/**
 * Round `n` to 4 decimal places, or to the nearest 1/10,000th em. See
 * https://github.com/KaTeX/KaTeX/pull/2460.
 */
export const makeEm = function(n: number): string {
    return +n.toFixed(4) + "em";
};
