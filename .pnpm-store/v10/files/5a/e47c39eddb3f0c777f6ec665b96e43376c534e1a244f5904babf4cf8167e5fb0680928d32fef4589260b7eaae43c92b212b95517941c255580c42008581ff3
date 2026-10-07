export function indexToPrintableIndexMapper(v) {
    if (v < 95)
        return v + 0x20;
    if (v <= 0x7e)
        return v - 95;
    return v;
}
export function indexToPrintableIndexUnmapper(v) {
    if (v >= 0x20 && v <= 0x7e)
        return v - 0x20;
    if (v >= 0 && v <= 0x1f)
        return v + 95;
    return v;
}
