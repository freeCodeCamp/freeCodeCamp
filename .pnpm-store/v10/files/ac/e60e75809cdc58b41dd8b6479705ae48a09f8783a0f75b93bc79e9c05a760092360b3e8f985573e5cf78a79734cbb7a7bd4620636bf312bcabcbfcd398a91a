import * as C from './constant';
import en from './locale/en';
import U from './utils';
var L = 'en'; // global locale

var Ls = {}; // global loaded locale

Ls[L] = en;
var IS_DAYJS = '$isDayjsObject'; // eslint-disable-next-line no-use-before-define

var isDayjs = function isDayjs(d) {
  return d instanceof Dayjs || !!(d && d[IS_DAYJS]);
};

var parseLocale = function parseLocale(preset, object, isLocal) {
  var l;
  if (!preset) return L;

  if (typeof preset === 'string') {
    var presetLower = preset.toLowerCase();

    if (Ls[presetLower]) {
      l = presetLower;
    }

    if (object) {
      Ls[presetLower] = object;
      l = presetLower;
    }

    var presetSplit = preset.split('-');

    if (!l && presetSplit.length > 1) {
      return parseLocale(presetSplit[0]);
    }
  } else {
    var name = preset.name;
    Ls[name] = preset;
    l = name;
  }

  if (!isLocal && l) L = l;
  return l || !isLocal && L;
};

var dayjs = function dayjs(date, c) {
  if (isDayjs(date)) {
    return date.clone();
  } // eslint-disable-next-line no-nested-ternary


  var cfg = typeof c === 'object' ? c : {};
  cfg.date = date;
  cfg.args = arguments; // eslint-disable-line prefer-rest-params

  return new Dayjs(cfg); // eslint-disable-line no-use-before-define
};

var wrapper = function wrapper(date, instance) {
  return dayjs(date, {
    locale: instance.$L,
    utc: instance.$u,
    x: instance.$x,
    $offset: instance.$offset // todo: refactor; do not use this.$offset in you code

  });
};

var Utils = U; // for plugin use

Utils.l = parseLocale;
Utils.i = isDayjs;
Utils.w = wrapper;

var parseDate = function parseDate(cfg) {
  var date = cfg.date,
      utc = cfg.utc;
  if (date === null) return new Date(NaN); // null is invalid

  if (Utils.u(date)) return new Date(); // today

  if (date instanceof Date) return new Date(date);

  if (typeof date === 'string' && !/Z$/i.test(date)) {
    var d = date.match(C.REGEX_PARSE);

    if (d) {
      var m = d[2] - 1 || 0;
      var ms = (d[7] || '0').substring(0, 3);

      if (utc) {
        return new Date(Date.UTC(d[1], m, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms));
      }

      return new Date(d[1], m, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms);
    }
  }

  return new Date(date); // everything else
};

var Dayjs = /*#__PURE__*/function () {
  function Dayjs(cfg) {
    this.$L = parseLocale(cfg.locale, null, true);
    this.parse(cfg); // for plugin

    this.$x = this.$x || cfg.x || {};
    this[IS_DAYJS] = true;
  }

  var _proto = Dayjs.prototype;

  _proto.parse = function parse(cfg) {
    this.$d = parseDate(cfg);
    this.init();
  };

  _proto.init = function init() {
    var $d = this.$d;
    this.$y = $d.getFullYear();
    this.$M = $d.getMonth();
    this.$D = $d.getDate();
    this.$W = $d.getDay();
    this.$H = $d.getHours();
    this.$m = $d.getMinutes();
    this.$s = $d.getSeconds();
    this.$ms = $d.getMilliseconds();
  } // eslint-disable-next-line class-methods-use-this
  ;

  _proto.$utils = function $utils() {
    return Utils;
  };

  _proto.isValid = function isValid() {
    return !(this.$d.toString() === C.INVALID_DATE_STRING);
  };

  _proto.isSame = function isSame(that, units) {
    var other = dayjs(that);
    return this.startOf(units) <= other && other <= this.endOf(units);
  };

  _proto.isAfter = function isAfter(that, units) {
    return dayjs(that) < this.startOf(units);
  };

  _proto.isBefore = function isBefore(that, units) {
    return this.endOf(units) < dayjs(that);
  };

  _proto.$g = function $g(input, get, set) {
    if (Utils.u(input)) return this[get];
    return this.set(set, input);
  };

  _proto.unix = function unix() {
    return Math.floor(this.valueOf() / 1000);
  };

  _proto.valueOf = function valueOf() {
    // timezone(hour) * 60 * 60 * 1000 => ms
    return this.$d.getTime();
  };

  _proto.startOf = function startOf(units, _startOf) {
    var _this = this;

    // startOf -> endOf
    var isStartOf = !Utils.u(_startOf) ? _startOf : true;
    var unit = Utils.p(units);

    var instanceFactory = function instanceFactory(d, m) {
      var ins = Utils.w(_this.$u ? Date.UTC(_this.$y, m, d) : new Date(_this.$y, m, d), _this);
      return isStartOf ? ins : ins.endOf(C.D);
    };

    var instanceFactorySet = function instanceFactorySet(method, slice) {
      var argumentStart = [0, 0, 0, 0];
      var argumentEnd = [23, 59, 59, 999];
      return Utils.w(_this.toDate()[method].apply( // eslint-disable-line prefer-spread
      _this.toDate('s'), (isStartOf ? argumentStart : argumentEnd).slice(slice)), _this);
    };

    var $W = this.$W,
        $M = this.$M,
        $D = this.$D;
    var utcPad = "set" + (this.$u ? 'UTC' : '');

    switch (unit) {
      case C.Y:
        return isStartOf ? instanceFactory(1, 0) : instanceFactory(31, 11);

      case C.M:
        return isStartOf ? instanceFactory(1, $M) : instanceFactory(0, $M + 1);

      case C.W:
        {
          var weekStart = this.$locale().weekStart || 0;
          var gap = ($W < weekStart ? $W + 7 : $W) - weekStart;
          return instanceFactory(isStartOf ? $D - gap : $D + (6 - gap), $M);
        }

      case C.D:
      case C.DATE:
        return instanceFactorySet(utcPad + "Hours", 0);

      case C.H:
        return instanceFactorySet(utcPad + "Minutes", 1);

      case C.MIN:
        return instanceFactorySet(utcPad + "Seconds", 2);

      case C.S:
        return instanceFactorySet(utcPad + "Milliseconds", 3);

      default:
        return this.clone();
    }
  };

  _proto.endOf = function endOf(arg) {
    return this.startOf(arg, false);
  };

  _proto.$set = function $set(units, _int) {
    var _C$D$C$DATE$C$M$C$Y$C;

    // private set
    var unit = Utils.p(units);
    var utcPad = "set" + (this.$u ? 'UTC' : '');
    var name = (_C$D$C$DATE$C$M$C$Y$C = {}, _C$D$C$DATE$C$M$C$Y$C[C.D] = utcPad + "Date", _C$D$C$DATE$C$M$C$Y$C[C.DATE] = utcPad + "Date", _C$D$C$DATE$C$M$C$Y$C[C.M] = utcPad + "Month", _C$D$C$DATE$C$M$C$Y$C[C.Y] = utcPad + "FullYear", _C$D$C$DATE$C$M$C$Y$C[C.H] = utcPad + "Hours", _C$D$C$DATE$C$M$C$Y$C[C.MIN] = utcPad + "Minutes", _C$D$C$DATE$C$M$C$Y$C[C.S] = utcPad + "Seconds", _C$D$C$DATE$C$M$C$Y$C[C.MS] = utcPad + "Milliseconds", _C$D$C$DATE$C$M$C$Y$C)[unit];
    var arg = unit === C.D ? this.$D + (_int - this.$W) : _int;

    if (unit === C.M || unit === C.Y) {
      // clone is for badMutable plugin
      var date = this.clone().set(C.DATE, 1);
      date.$d[name](arg);
      date.init();
      this.$d = date.set(C.DATE, Math.min(this.$D, date.daysInMonth())).$d;
    } else if (name) this.$d[name](arg);

    this.init();
    return this;
  };

  _proto.set = function set(string, _int2) {
    return this.clone().$set(string, _int2);
  };

  _proto.get = function get(unit) {
    return this[Utils.p(unit)]();
  };

  _proto.add = function add(number, units) {
    var _this2 = this,
        _C$MIN$C$H$C$S$unit;

    number = Number(number); // eslint-disable-line no-param-reassign

    var unit = Utils.p(units);

    var instanceFactorySet = function instanceFactorySet(n) {
      var d = dayjs(_this2);
      return Utils.w(d.date(d.date() + Math.round(n * number)), _this2);
    };

    if (unit === C.M) {
      return this.set(C.M, this.$M + number);
    }

    if (unit === C.Y) {
      return this.set(C.Y, this.$y + number);
    }

    if (unit === C.D) {
      return instanceFactorySet(1);
    }

    if (unit === C.W) {
      return instanceFactorySet(7);
    }

    var step = (_C$MIN$C$H$C$S$unit = {}, _C$MIN$C$H$C$S$unit[C.MIN] = C.MILLISECONDS_A_MINUTE, _C$MIN$C$H$C$S$unit[C.H] = C.MILLISECONDS_A_HOUR, _C$MIN$C$H$C$S$unit[C.S] = C.MILLISECONDS_A_SECOND, _C$MIN$C$H$C$S$unit)[unit] || 1; // ms

    var nextTimeStamp = this.$d.getTime() + number * step;
    return Utils.w(nextTimeStamp, this);
  };

  _proto.subtract = function subtract(number, string) {
    return this.add(number * -1, string);
  };

  _proto.format = function format(formatStr) {
    var _this3 = this;

    var locale = this.$locale();
    if (!this.isValid()) return locale.invalidDate || C.INVALID_DATE_STRING;
    var str = formatStr || C.FORMAT_DEFAULT;
    var zoneStr = Utils.z(this);
    var $H = this.$H,
        $m = this.$m,
        $M = this.$M;
    var weekdays = locale.weekdays,
        months = locale.months,
        meridiem = locale.meridiem;

    var getShort = function getShort(arr, index, full, length) {
      return arr && (arr[index] || arr(_this3, str)) || full[index].slice(0, length);
    };

    var get$H = function get$H(num) {
      return Utils.s($H % 12 || 12, num, '0');
    };

    var meridiemFunc = meridiem || function (hour, minute, isLowercase) {
      var m = hour < 12 ? 'AM' : 'PM';
      return isLowercase ? m.toLowerCase() : m;
    };

    var matches = function matches(match) {
      switch (match) {
        case 'YY':
          return String(_this3.$y).slice(-2);

        case 'YYYY':
          return Utils.s(_this3.$y, 4, '0');

        case 'M':
          return $M + 1;

        case 'MM':
          return Utils.s($M + 1, 2, '0');

        case 'MMM':
          return getShort(locale.monthsShort, $M, months, 3);

        case 'MMMM':
          return getShort(months, $M);

        case 'D':
          return _this3.$D;

        case 'DD':
          return Utils.s(_this3.$D, 2, '0');

        case 'd':
          return String(_this3.$W);

        case 'dd':
          return getShort(locale.weekdaysMin, _this3.$W, weekdays, 2);

        case 'ddd':
          return getShort(locale.weekdaysShort, _this3.$W, weekdays, 3);

        case 'dddd':
          return weekdays[_this3.$W];

        case 'H':
          return String($H);

        case 'HH':
          return Utils.s($H, 2, '0');

        case 'h':
          return get$H(1);

        case 'hh':
          return get$H(2);

        case 'a':
          return meridiemFunc($H, $m, true);

        case 'A':
          return meridiemFunc($H, $m, false);

        case 'm':
          return String($m);

        case 'mm':
          return Utils.s($m, 2, '0');

        case 's':
          return String(_this3.$s);

        case 'ss':
          return Utils.s(_this3.$s, 2, '0');

        case 'SSS':
          return Utils.s(_this3.$ms, 3, '0');

        case 'Z':
          return zoneStr;
        // 'ZZ' logic below

        default:
          break;
      }

      return null;
    };

    return str.replace(C.REGEX_FORMAT, function (match, $1) {
      return $1 || matches(match) || zoneStr.replace(':', '');
    }); // 'ZZ'
  };

  _proto.utcOffset = function utcOffset() {
    // Because a bug at FF24, we're rounding the timezone offset around 15 minutes
    // https://github.com/moment/moment/pull/1871
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  };

  _proto.diff = function diff(input, units, _float) {
    var _this4 = this;

    var unit = Utils.p(units);
    var that = dayjs(input);
    var zoneDelta = (that.utcOffset() - this.utcOffset()) * C.MILLISECONDS_A_MINUTE;
    var diff = this - that;

    var getMonth = function getMonth() {
      return Utils.m(_this4, that);
    };

    var result;

    switch (unit) {
      case C.Y:
        result = getMonth() / 12;
        break;

      case C.M:
        result = getMonth();
        break;

      case C.Q:
        result = getMonth() / 3;
        break;

      case C.W:
        result = (diff - zoneDelta) / C.MILLISECONDS_A_WEEK;
        break;

      case C.D:
        result = (diff - zoneDelta) / C.MILLISECONDS_A_DAY;
        break;

      case C.H:
        result = diff / C.MILLISECONDS_A_HOUR;
        break;

      case C.MIN:
        result = diff / C.MILLISECONDS_A_MINUTE;
        break;

      case C.S:
        result = diff / C.MILLISECONDS_A_SECOND;
        break;

      default:
        result = diff; // milliseconds

        break;
    }

    return _float ? result : Utils.a(result);
  };

  _proto.daysInMonth = function daysInMonth() {
    return this.endOf(C.M).$D;
  };

  _proto.$locale = function $locale() {
    // get locale object
    return Ls[this.$L];
  };

  _proto.locale = function locale(preset, object) {
    if (!preset) return this.$L;
    var that = this.clone();
    var nextLocaleName = parseLocale(preset, object, true);
    if (nextLocaleName) that.$L = nextLocaleName;
    return that;
  };

  _proto.clone = function clone() {
    return Utils.w(this.$d, this);
  };

  _proto.toDate = function toDate() {
    return new Date(this.valueOf());
  };

  _proto.toJSON = function toJSON() {
    return this.isValid() ? this.toISOString() : null;
  };

  _proto.toISOString = function toISOString() {
    // ie 8 return
    // new Dayjs(this.valueOf() + this.$d.getTimezoneOffset() * 60000)
    // .format('YYYY-MM-DDTHH:mm:ss.SSS[Z]')
    return this.$d.toISOString();
  };

  _proto.toString = function toString() {
    return this.$d.toUTCString();
  };

  return Dayjs;
}();

var proto = Dayjs.prototype;
dayjs.prototype = proto;
[['$ms', C.MS], ['$s', C.S], ['$m', C.MIN], ['$H', C.H], ['$W', C.D], ['$M', C.M], ['$y', C.Y], ['$D', C.DATE]].forEach(function (g) {
  proto[g[1]] = function (input) {
    return this.$g(input, g[0], g[1]);
  };
});

dayjs.extend = function (plugin, option) {
  if (!plugin.$i) {
    // install plugin only once
    plugin(option, Dayjs, dayjs);
    plugin.$i = true;
  }

  return dayjs;
};

dayjs.locale = parseLocale;
dayjs.isDayjs = isDayjs;

dayjs.unix = function (timestamp) {
  return dayjs(timestamp * 1e3);
};

dayjs.en = Ls[L];
dayjs.Ls = Ls;
dayjs.p = {};
export default dayjs;