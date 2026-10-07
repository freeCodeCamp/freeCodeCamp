/* MAIN */
const getCodePointsLength = (() => {
    const SURROGATE_PAIR_RE = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
    return (input) => {
        let surrogatePairsNr = 0;
        SURROGATE_PAIR_RE.lastIndex = 0;
        while (SURROGATE_PAIR_RE.test(input)) {
            surrogatePairsNr += 1;
        }
        return input.length - surrogatePairsNr;
    };
})();
const isFullWidth = (x) => {
    return x === 0x3000 || x >= 0xFF01 && x <= 0xFF60 || x >= 0xFFE0 && x <= 0xFFE6;
};
const isWideNotCJKTNotEmoji = (x) => {
    return x === 0x231B || x === 0x2329 || x >= 0x2FF0 && x <= 0x2FFF || x >= 0x3001 && x <= 0x303E || x >= 0x3099 && x <= 0x30FF || x >= 0x3105 && x <= 0x312F || x >= 0x3131 && x <= 0x318E || x >= 0x3190 && x <= 0x31E3 || x >= 0x31EF && x <= 0x321E || x >= 0x3220 && x <= 0x3247 || x >= 0x3250 && x <= 0x4DBF || x >= 0xFE10 && x <= 0xFE19 || x >= 0xFE30 && x <= 0xFE52 || x >= 0xFE54 && x <= 0xFE66 || x >= 0xFE68 && x <= 0xFE6B || x >= 0x1F200 && x <= 0x1F202 || x >= 0x1F210 && x <= 0x1F23B || x >= 0x1F240 && x <= 0x1F248 || x >= 0x20000 && x <= 0x2FFFD || x >= 0x30000 && x <= 0x3FFFD;
};
/* EXPORT */
export { getCodePointsLength, isFullWidth, isWideNotCJKTNotEmoji };
