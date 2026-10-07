export function createDate(y, m, d, h, M, s, ms) {
    // can't just apply() to create a date:
    // https://stackoverflow.com/q/181348
    var date;
    // the date constructor remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0) {
        // preserve leap years using a full 400 year cycle, then reset
        date = new Date(y + 400, m, d, h, M, s, ms);
        if (isFinite(date.getFullYear())) {
            date.setFullYear(y);
        }
    } else {
        date = new Date(y, m, d, h, M, s, ms);
    }

    return date;
}

export function createUTCDate(y) {
    var date, args;
    // the Date.UTC function remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0) {
        args = Array.prototype.slice.call(arguments);
        // preserve leap years using a full 400 year cycle, then reset
        args[0] = y + 400;
        date = new Date(Date.UTC.apply(null, args));
        if (isFinite(date.getUTCFullYear())) {
            date.setUTCFullYear(y);
        }
    } else {
        date = new Date(Date.UTC.apply(null, arguments));
    }

    return date;
}
