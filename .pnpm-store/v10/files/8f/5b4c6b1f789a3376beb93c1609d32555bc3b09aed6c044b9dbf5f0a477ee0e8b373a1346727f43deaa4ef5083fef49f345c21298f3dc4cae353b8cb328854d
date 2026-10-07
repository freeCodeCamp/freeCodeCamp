import { MS, Y, D, W } from '../../constant';
export default (function (o, c, d) {
  var proto = c.prototype;

  proto.week = function (week) {
    if (week === void 0) {
      week = null;
    }

    if (week !== null) {
      return this.add((week - this.week()) * 7, D);
    }

    var yearStart = this.$locale().yearStart || 1;

    if (this.month() === 11 && this.date() > 25) {
      // d(this) is for badMutable
      var nextYearStartDay = d(this).startOf(Y).add(1, Y).date(yearStart);
      var thisEndOfWeek = d(this).endOf(W);

      if (nextYearStartDay.isBefore(thisEndOfWeek)) {
        return 1;
      }
    }

    var yearStartDay = d(this).startOf(Y).date(yearStart);
    var yearStartWeek = yearStartDay.startOf(W).subtract(1, MS);
    var diffInWeek = this.diff(yearStartWeek, W, true);

    if (diffInWeek < 0) {
      return d(this).startOf('week').week();
    }

    return Math.ceil(diffInWeek);
  };

  proto.weeks = function (week) {
    if (week === void 0) {
      week = null;
    }

    return this.week(week);
  };
});