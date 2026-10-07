"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const boundaries_1 = require("./boundaries");
// BreakTypes
// @type {BreakType}
const NotBreak = 0;
const BreakStart = 1;
const Break = 2;
const BreakLastRegional = 3;
const BreakPenultimateRegional = 4;
class GraphemerHelper {
    /**
     * Check if the the character at the position {pos} of the string is surrogate
     * @param str {string}
     * @param pos {number}
     * @returns {boolean}
     */
    static isSurrogate(str, pos) {
        return (0xd800 <= str.charCodeAt(pos) &&
            str.charCodeAt(pos) <= 0xdbff &&
            0xdc00 <= str.charCodeAt(pos + 1) &&
            str.charCodeAt(pos + 1) <= 0xdfff);
    }
    /**
     * The String.prototype.codePointAt polyfill
     * Private function, gets a Unicode code point from a JavaScript UTF-16 string
     * handling surrogate pairs appropriately
     * @param str {string}
     * @param idx {number}
     * @returns {number}
     */
    static codePointAt(str, idx) {
        if (idx === undefined) {
            idx = 0;
        }
        const code = str.charCodeAt(idx);
        // if a high surrogate
        if (0xd800 <= code && code <= 0xdbff && idx < str.length - 1) {
            const hi = code;
            const low = str.charCodeAt(idx + 1);
            if (0xdc00 <= low && low <= 0xdfff) {
                return (hi - 0xd800) * 0x400 + (low - 0xdc00) + 0x10000;
            }
            return hi;
        }
        // if a low surrogate
        if (0xdc00 <= code && code <= 0xdfff && idx >= 1) {
            const hi = str.charCodeAt(idx - 1);
            const low = code;
            if (0xd800 <= hi && hi <= 0xdbff) {
                return (hi - 0xd800) * 0x400 + (low - 0xdc00) + 0x10000;
            }
            return low;
        }
        // just return the char if an unmatched surrogate half or a
        // single-char codepoint
        return code;
    }
    //
    /**
     * Private function, returns whether a break is allowed between the two given grapheme breaking classes
     * Implemented the UAX #29 3.1.1 Grapheme Cluster Boundary Rules on extended grapheme clusters
     * @param start {number}
     * @param mid {Array<number>}
     * @param end {number}
     * @param startEmoji {number}
     * @param midEmoji {Array<number>}
     * @param endEmoji {number}
     * @returns {number}
     */
    static shouldBreak(start, mid, end, startEmoji, midEmoji, endEmoji) {
        const all = [start].concat(mid).concat([end]);
        const allEmoji = [startEmoji].concat(midEmoji).concat([endEmoji]);
        const previous = all[all.length - 2];
        const next = end;
        const nextEmoji = endEmoji;
        // Lookahead terminator for:
        // GB12. ^ (RI RI)* RI ? RI
        // GB13. [^RI] (RI RI)* RI ? RI
        const rIIndex = all.lastIndexOf(boundaries_1.CLUSTER_BREAK.REGIONAL_INDICATOR);
        if (rIIndex > 0 &&
            all.slice(1, rIIndex).every(function (c) {
                return c === boundaries_1.CLUSTER_BREAK.REGIONAL_INDICATOR;
            }) &&
            [boundaries_1.CLUSTER_BREAK.PREPEND, boundaries_1.CLUSTER_BREAK.REGIONAL_INDICATOR].indexOf(previous) === -1) {
            if (all.filter(function (c) {
                return c === boundaries_1.CLUSTER_BREAK.REGIONAL_INDICATOR;
            }).length %
                2 ===
                1) {
                return BreakLastRegional;
            }
            else {
                return BreakPenultimateRegional;
            }
        }
        // GB3. CR × LF
        if (previous === boundaries_1.CLUSTER_BREAK.CR && next === boundaries_1.CLUSTER_BREAK.LF) {
            return NotBreak;
        }
        // GB4. (Control|CR|LF) ÷
        else if (previous === boundaries_1.CLUSTER_BREAK.CONTROL ||
            previous === boundaries_1.CLUSTER_BREAK.CR ||
            previous === boundaries_1.CLUSTER_BREAK.LF) {
            return BreakStart;
        }
        // GB5. ÷ (Control|CR|LF)
        else if (next === boundaries_1.CLUSTER_BREAK.CONTROL ||
            next === boundaries_1.CLUSTER_BREAK.CR ||
            next === boundaries_1.CLUSTER_BREAK.LF) {
            return BreakStart;
        }
        // GB6. L × (L|V|LV|LVT)
        else if (previous === boundaries_1.CLUSTER_BREAK.L &&
            (next === boundaries_1.CLUSTER_BREAK.L ||
                next === boundaries_1.CLUSTER_BREAK.V ||
                next === boundaries_1.CLUSTER_BREAK.LV ||
                next === boundaries_1.CLUSTER_BREAK.LVT)) {
            return NotBreak;
        }
        // GB7. (LV|V) × (V|T)
        else if ((previous === boundaries_1.CLUSTER_BREAK.LV || previous === boundaries_1.CLUSTER_BREAK.V) &&
            (next === boundaries_1.CLUSTER_BREAK.V || next === boundaries_1.CLUSTER_BREAK.T)) {
            return NotBreak;
        }
        // GB8. (LVT|T) × (T)
        else if ((previous === boundaries_1.CLUSTER_BREAK.LVT || previous === boundaries_1.CLUSTER_BREAK.T) &&
            next === boundaries_1.CLUSTER_BREAK.T) {
            return NotBreak;
        }
        // GB9. × (Extend|ZWJ)
        else if (next === boundaries_1.CLUSTER_BREAK.EXTEND || next === boundaries_1.CLUSTER_BREAK.ZWJ) {
            return NotBreak;
        }
        // GB9a. × SpacingMark
        else if (next === boundaries_1.CLUSTER_BREAK.SPACINGMARK) {
            return NotBreak;
        }
        // GB9b. Prepend ×
        else if (previous === boundaries_1.CLUSTER_BREAK.PREPEND) {
            return NotBreak;
        }
        // GB11. \p{Extended_Pictographic} Extend* ZWJ × \p{Extended_Pictographic}
        const previousNonExtendIndex = allEmoji
            .slice(0, -1)
            .lastIndexOf(boundaries_1.EXTENDED_PICTOGRAPHIC);
        if (previousNonExtendIndex !== -1 &&
            allEmoji[previousNonExtendIndex] === boundaries_1.EXTENDED_PICTOGRAPHIC &&
            all.slice(previousNonExtendIndex + 1, -2).every(function (c) {
                return c === boundaries_1.CLUSTER_BREAK.EXTEND;
            }) &&
            previous === boundaries_1.CLUSTER_BREAK.ZWJ &&
            nextEmoji === boundaries_1.EXTENDED_PICTOGRAPHIC) {
            return NotBreak;
        }
        // GB12. ^ (RI RI)* RI × RI
        // GB13. [^RI] (RI RI)* RI × RI
        if (mid.indexOf(boundaries_1.CLUSTER_BREAK.REGIONAL_INDICATOR) !== -1) {
            return Break;
        }
        if (previous === boundaries_1.CLUSTER_BREAK.REGIONAL_INDICATOR &&
            next === boundaries_1.CLUSTER_BREAK.REGIONAL_INDICATOR) {
            return NotBreak;
        }
        // GB999. Any ? Any
        return BreakStart;
    }
}
exports.default = GraphemerHelper;
