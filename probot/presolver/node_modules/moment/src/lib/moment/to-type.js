export function valueOf () {
    return this._d.valueOf() - ((this._offset || 0) * 60000);
}

export function unix () {
    return Math.floor(this.valueOf() / 1000);
}

export function toDate () {
    return new Date(this.valueOf());
}

export function toArray () {
    var m = this;
    return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
}

export function toObject () {
    var m = this;
    return {
        years: m.year(),
        months: m.month(),
        date: m.date(),
        hours: m.hours(),
        minutes: m.minutes(),
        seconds: m.seconds(),
        milliseconds: m.milliseconds()
    };
}

export function toJSON () {
    // new Date(NaN).toJSON() === null
    return this.isValid() ? this.toISOString() : null;
}
