const ESC = '\u001B[';
/** Move cursor to first column */
export const cursorLeft = ESC + 'G';
/** Hide the cursor */
export const cursorHide = ESC + '?25l';
/** Show the cursor */
export const cursorShow = ESC + '?25h';
/** Move cursor up by count rows */
export const cursorUp = (rows = 1) => (rows > 0 ? `${ESC}${rows}A` : '');
/** Move cursor down by count rows */
export const cursorDown = (rows = 1) => rows > 0 ? `${ESC}${rows}B` : '';
/** Move cursor to position (x, y) */
export const cursorTo = (x, y) => {
    if (typeof y === 'number' && !Number.isNaN(y)) {
        return `${ESC}${y + 1};${x + 1}H`;
    }
    return `${ESC}${x + 1}G`;
};
const eraseLine = ESC + '2K';
/** Erase the specified number of lines above the cursor */
export const eraseLines = (lines) => lines > 0 ? (eraseLine + cursorUp(1)).repeat(lines - 1) + eraseLine + cursorLeft : '';
