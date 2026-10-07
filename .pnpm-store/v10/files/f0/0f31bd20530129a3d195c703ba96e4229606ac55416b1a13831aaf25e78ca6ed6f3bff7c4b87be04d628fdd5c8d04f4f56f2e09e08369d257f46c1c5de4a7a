const TIME = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(?:Z|([+-])(\d\d):(\d\d))?$/i;
/**
 * Returns true if the value is a ISO time string
 * @specification
 */
export function IsTime(value, strictTimeZone = true) {
    const matches = TIME.exec(value);
    if (!matches)
        return false;
    const hr = +matches[1];
    const min = +matches[2];
    const sec = +matches[3];
    const tzSign = matches[4] === '-' ? -1 : 1; // Use matches[4] for sign
    const tzH = +(matches[5] || 0); // tzH is now matches[5]
    const tzM = +(matches[6] || 0); // tzM is now matches[6]
    if (tzH > 23 || tzM > 59)
        return false; // Check for valid hour/minute range in offset
    if (strictTimeZone && !matches[4] && value.toLowerCase().indexOf('z') === -1) {
        // If strictTimeZone is true, and neither 'Z' nor a '+/-' offset was found
        return false;
    }
    if (hr <= 23 && min <= 59 && sec < 60)
        return true;
    const utcMin = min - tzM * tzSign;
    const utcHr = hr - tzH * tzSign - (utcMin < 0 ? 1 : 0);
    return (utcHr === 23 || utcHr === -1) && (utcMin === 59 || utcMin === -1) && sec < 61;
}
