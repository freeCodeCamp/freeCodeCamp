export function createDate (y, m, d, h, M, s, ms) {
    //can't just apply() to create a date:
    //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
    var date = new Date(y, m, d, h, M, s, ms);

    //the date constructor doesn't accept years < 1970
    if (y < 1970) {
        date.setFullYear(y);
    }
    return date;
}

export function createUTCDate (y) {
    var date = new Date(Date.UTC.apply(null, arguments));
    if (y < 1970) {
        date.setUTCFullYear(y);
    }
    return date;
}
