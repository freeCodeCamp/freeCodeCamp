"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexToPrintableIndexMapper = indexToPrintableIndexMapper;
exports.indexToPrintableIndexUnmapper = indexToPrintableIndexUnmapper;
function indexToPrintableIndexMapper(v) {
    if (v < 95)
        return v + 0x20;
    if (v <= 0x7e)
        return v - 95;
    return v;
}
function indexToPrintableIndexUnmapper(v) {
    if (v >= 0x20 && v <= 0x7e)
        return v - 0x20;
    if (v >= 0 && v <= 0x1f)
        return v + 95;
    return v;
}
