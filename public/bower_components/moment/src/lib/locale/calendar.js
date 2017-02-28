export var defaultCalendar = {
    sameDay : '[Today at] LT',
    nextDay : '[Tomorrow at] LT',
    nextWeek : 'dddd [at] LT',
    lastDay : '[Yesterday at] LT',
    lastWeek : '[Last] dddd [at] LT',
    sameElse : 'L'
};

export function calendar (key, mom, now) {
    var output = this._calendar[key];
    return typeof output === 'function' ? output.call(mom, now) : output;
}
