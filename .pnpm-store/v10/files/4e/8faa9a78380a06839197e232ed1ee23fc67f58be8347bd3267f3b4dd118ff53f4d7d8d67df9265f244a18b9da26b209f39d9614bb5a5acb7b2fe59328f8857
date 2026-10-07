"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eraseLines = exports.cursorTo = exports.cursorDown = exports.cursorUp = exports.cursorShow = exports.cursorHide = exports.cursorLeft = void 0;
const ESC = '\u001B[';
/** Move cursor to first column */
exports.cursorLeft = ESC + 'G';
/** Hide the cursor */
exports.cursorHide = ESC + '?25l';
/** Show the cursor */
exports.cursorShow = ESC + '?25h';
/** Move cursor up by count rows */
const cursorUp = (rows = 1) => (rows > 0 ? `${ESC}${rows}A` : '');
exports.cursorUp = cursorUp;
/** Move cursor down by count rows */
const cursorDown = (rows = 1) => rows > 0 ? `${ESC}${rows}B` : '';
exports.cursorDown = cursorDown;
/** Move cursor to position (x, y) */
const cursorTo = (x, y) => {
    if (typeof y === 'number' && !Number.isNaN(y)) {
        return `${ESC}${y + 1};${x + 1}H`;
    }
    return `${ESC}${x + 1}G`;
};
exports.cursorTo = cursorTo;
const eraseLine = ESC + '2K';
/** Erase the specified number of lines above the cursor */
const eraseLines = (lines) => lines > 0 ? (eraseLine + (0, exports.cursorUp)(1)).repeat(lines - 1) + eraseLine + exports.cursorLeft : '';
exports.eraseLines = eraseLines;
