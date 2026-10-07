import { MILLISECONDS_A_DAY, MILLISECONDS_A_HOUR, MILLISECONDS_A_MINUTE, MILLISECONDS_A_SECOND, MILLISECONDS_A_WEEK } from '../../constant';
var MILLISECONDS_A_YEAR = MILLISECONDS_A_DAY * 365;
var MILLISECONDS_A_MONTH = MILLISECONDS_A_YEAR / 12;
var DURATION_REGEX_PARSE = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
var DURATION_REGEX_FORMAT = /\[([^\]]+)]|YYYY|YY|Y|M{1,2}|D{1,2}|H{1,2}|m{1,2}|s{1,2}|SSS/g;
var unitToMS = {
  years: MILLISECONDS_A_YEAR,
  months: MILLISECONDS_A_MONTH,
  days: MILLISECONDS_A_DAY,
  hours: MILLISECONDS_A_HOUR,
  minutes: MILLISECONDS_A_MINUTE,
  seconds: MILLISECONDS_A_SECOND,
  milliseconds: 1,
  weeks: MILLISECONDS_A_WEEK
};

var isDuration = function isDuration(d) {
  return d instanceof Duration;
}; // eslint-disable-line no-use-before-define


var $d;
var $u;

var wrapper = function wrapper(input, instance, unit) {
  return new Duration(input, unit, instance.$l);
}; // eslint-disable-line no-use-before-define


var prettyUnit = function prettyUnit(unit) {
  return $u.p(unit) + "s";
};

var isNegative = function isNegative(number) {
  return number < 0;
};

var roundNumber = function roundNumber(number) {
  return isNegative(number) ? Math.ceil(number) : Math.floor(number);
};

var absolute = function absolute(number) {
  return Math.abs(number);
};

var getNumberUnitFormat = function getNumberUnitFormat(number, unit) {
  if (!number) {
    return {
      negative: false,
      format: ''
    };
  }

  if (isNegative(number)) {
    return {
      negative: true,
      format: "" + absolute(number) + unit
    };
  }

  return {
    negative: false,
    format: "" + number + unit
  };
};

var Duration = /*#__PURE__*/function () {
  function Duration(input, unit, locale) {
    var _this = this;

    this.$d = {};
    this.$l = locale;

    if (input === undefined) {
      this.$ms = 0;
      this.parseFromMilliseconds();
    }

    if (unit) {
      return wrapper(input * unitToMS[prettyUnit(unit)], this);
    }

    if (typeof input === 'number') {
      this.$ms = input;
      this.parseFromMilliseconds();
      return this;
    }

    if (typeof input === 'object') {
      Object.keys(input).forEach(function (k) {
        _this.$d[prettyUnit(k)] = input[k];
      });
      this.calMilliseconds();
      return this;
    }

    if (typeof input === 'string') {
      var d = input.match(DURATION_REGEX_PARSE);

      if (d) {
        var properties = d.slice(2);
        var numberD = properties.map(function (value) {
          return value != null ? Number(value) : 0;
        });
        this.$d.years = numberD[0];
        this.$d.months = numberD[1];
        this.$d.weeks = numberD[2];
        this.$d.days = numberD[3];
        this.$d.hours = numberD[4];
        this.$d.minutes = numberD[5];
        this.$d.seconds = numberD[6];
        this.calMilliseconds();
        return this;
      }
    }

    return this;
  }

  var _proto = Duration.prototype;

  _proto.calMilliseconds = function calMilliseconds() {
    var _this2 = this;

    this.$ms = Object.keys(this.$d).reduce(function (total, unit) {
      return total + (_this2.$d[unit] || 0) * unitToMS[unit];
    }, 0);
  };

  _proto.parseFromMilliseconds = function parseFromMilliseconds() {
    var $ms = this.$ms;
    this.$d.years = roundNumber($ms / MILLISECONDS_A_YEAR);
    $ms %= MILLISECONDS_A_YEAR;
    this.$d.months = roundNumber($ms / MILLISECONDS_A_MONTH);
    $ms %= MILLISECONDS_A_MONTH;
    this.$d.days = roundNumber($ms / MILLISECONDS_A_DAY);
    $ms %= MILLISECONDS_A_DAY;
    this.$d.hours = roundNumber($ms / MILLISECONDS_A_HOUR);
    $ms %= MILLISECONDS_A_HOUR;
    this.$d.minutes = roundNumber($ms / MILLISECONDS_A_MINUTE);
    $ms %= MILLISECONDS_A_MINUTE;
    this.$d.seconds = roundNumber($ms / MILLISECONDS_A_SECOND);
    $ms %= MILLISECONDS_A_SECOND;
    this.$d.milliseconds = $ms;
  };

  _proto.toISOString = function toISOString() {
    var Y = getNumberUnitFormat(this.$d.years, 'Y');
    var M = getNumberUnitFormat(this.$d.months, 'M');
    var days = +this.$d.days || 0;

    if (this.$d.weeks) {
      days += this.$d.weeks * 7;
    }

    var D = getNumberUnitFormat(days, 'D');
    var H = getNumberUnitFormat(this.$d.hours, 'H');
    var m = getNumberUnitFormat(this.$d.minutes, 'M');
    var seconds = this.$d.seconds || 0;

    if (this.$d.milliseconds) {
      seconds += this.$d.milliseconds / 1000;
      seconds = Math.round(seconds * 1000) / 1000;
    }

    var S = getNumberUnitFormat(seconds, 'S');
    var negativeMode = Y.negative || M.negative || D.negative || H.negative || m.negative || S.negative;
    var T = H.format || m.format || S.format ? 'T' : '';
    var P = negativeMode ? '-' : '';
    var result = P + "P" + Y.format + M.format + D.format + T + H.format + m.format + S.format;
    return result === 'P' || result === '-P' ? 'P0D' : result;
  };

  _proto.toJSON = function toJSON() {
    return this.toISOString();
  };

  _proto.format = function format(formatStr) {
    var str = formatStr || 'YYYY-MM-DDTHH:mm:ss';
    var matches = {
      Y: this.$d.years,
      YY: $u.s(this.$d.years, 2, '0'),
      YYYY: $u.s(this.$d.years, 4, '0'),
      M: this.$d.months,
      MM: $u.s(this.$d.months, 2, '0'),
      D: this.$d.days,
      DD: $u.s(this.$d.days, 2, '0'),
      H: this.$d.hours,
      HH: $u.s(this.$d.hours, 2, '0'),
      m: this.$d.minutes,
      mm: $u.s(this.$d.minutes, 2, '0'),
      s: this.$d.seconds,
      ss: $u.s(this.$d.seconds, 2, '0'),
      SSS: $u.s(this.$d.milliseconds, 3, '0')
    };
    return str.replace(DURATION_REGEX_FORMAT, function (match, $1) {
      return $1 || String(matches[match]);
    });
  };

  _proto.as = function as(unit) {
    return this.$ms / unitToMS[prettyUnit(unit)];
  };

  _proto.get = function get(unit) {
    var base = this.$ms;
    var pUnit = prettyUnit(unit);

    if (pUnit === 'milliseconds') {
      base %= 1000;
    } else if (pUnit === 'weeks') {
      base = roundNumber(base / unitToMS[pUnit]);
    } else {
      base = this.$d[pUnit];
    }

    return base || 0; // a === 0 will be true on both 0 and -0
  };

  _proto.add = function add(input, unit, isSubtract) {
    var another;

    if (unit) {
      another = input * unitToMS[prettyUnit(unit)];
    } else if (isDuration(input)) {
      another = input.$ms;
    } else {
      another = wrapper(input, this).$ms;
    }

    return wrapper(this.$ms + another * (isSubtract ? -1 : 1), this);
  };

  _proto.subtract = function subtract(input, unit) {
    return this.add(input, unit, true);
  };

  _proto.locale = function locale(l) {
    var that = this.clone();
    that.$l = l;
    return that;
  };

  _proto.clone = function clone() {
    return wrapper(this.$ms, this);
  };

  _proto.humanize = function humanize(withSuffix) {
    return $d().add(this.$ms, 'ms').locale(this.$l).fromNow(!withSuffix);
  };

  _proto.valueOf = function valueOf() {
    return this.asMilliseconds();
  };

  _proto.milliseconds = function milliseconds() {
    return this.get('milliseconds');
  };

  _proto.asMilliseconds = function asMilliseconds() {
    return this.as('milliseconds');
  };

  _proto.seconds = function seconds() {
    return this.get('seconds');
  };

  _proto.asSeconds = function asSeconds() {
    return this.as('seconds');
  };

  _proto.minutes = function minutes() {
    return this.get('minutes');
  };

  _proto.asMinutes = function asMinutes() {
    return this.as('minutes');
  };

  _proto.hours = function hours() {
    return this.get('hours');
  };

  _proto.asHours = function asHours() {
    return this.as('hours');
  };

  _proto.days = function days() {
    return this.get('days');
  };

  _proto.asDays = function asDays() {
    return this.as('days');
  };

  _proto.weeks = function weeks() {
    return this.get('weeks');
  };

  _proto.asWeeks = function asWeeks() {
    return this.as('weeks');
  };

  _proto.months = function months() {
    return this.get('months');
  };

  _proto.asMonths = function asMonths() {
    return this.as('months');
  };

  _proto.years = function years() {
    return this.get('years');
  };

  _proto.asYears = function asYears() {
    return this.as('years');
  };

  return Duration;
}();

var manipulateDuration = function manipulateDuration(date, duration, k) {
  return date.add(duration.years() * k, 'y').add(duration.months() * k, 'M').add(duration.days() * k, 'd').add(duration.hours() * k, 'h').add(duration.minutes() * k, 'm').add(duration.seconds() * k, 's').add(duration.milliseconds() * k, 'ms');
};

export default (function (option, Dayjs, dayjs) {
  $d = dayjs;
  $u = dayjs().$utils();

  dayjs.duration = function (input, unit) {
    var $l = dayjs.locale();
    return wrapper(input, {
      $l: $l
    }, unit);
  };

  dayjs.isDuration = isDuration;
  var oldAdd = Dayjs.prototype.add;
  var oldSubtract = Dayjs.prototype.subtract;

  Dayjs.prototype.add = function (value, unit) {
    if (isDuration(value)) {
      return manipulateDuration(this, value, 1);
    }

    return oldAdd.bind(this)(value, unit);
  };

  Dayjs.prototype.subtract = function (value, unit) {
    if (isDuration(value)) {
      return manipulateDuration(this, value, -1);
    }

    return oldSubtract.bind(this)(value, unit);
  };
});