export function set (config) {
    var prop, i;
    for (i in config) {
        prop = config[i];
        if (typeof prop === 'function') {
            this[i] = prop;
        } else {
            this['_' + i] = prop;
        }
    }
    // Lenient ordinal parsing accepts just a number in addition to
    // number + (possibly) stuff coming from _ordinalParseLenient.
    this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + (/\d{1,2}/).source);
}
