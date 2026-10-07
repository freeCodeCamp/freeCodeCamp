import { MILLISECONDS_A_MINUTE, MIN } from '../../constant';
var REGEX_VALID_OFFSET_FORMAT = /[+-]\d\d(?::?\d\d)?/g;
var REGEX_OFFSET_HOURS_MINUTES_FORMAT = /([+-]|\d\d)/g;

function offsetFromString(value) {
  if (value === void 0) {
    value = '';
  }

  var offset = value.match(REGEX_VALID_OFFSET_FORMAT);

  if (!offset) {
    return null;
  }

  var _ref = ("" + offset[0]).match(REGEX_OFFSET_HOURS_MINUTES_FORMAT) || ['-', 0, 0],
      indicator = _ref[0],
      hoursOffset = _ref[1],
      minutesOffset = _ref[2];

  var totalOffsetInMinutes = +hoursOffset * 60 + +minutesOffset;

  if (totalOffsetInMinutes === 0) {
    return 0;
  }

  return indicator === '+' ? totalOffsetInMinutes : -totalOffsetInMinutes;
}

export default (function (option, Dayjs, dayjs) {
  var proto = Dayjs.prototype;

  dayjs.utc = function (date) {
    var cfg = {
      date: date,
      utc: true,
      args: arguments
    }; // eslint-disable-line prefer-rest-params

    return new Dayjs(cfg); // eslint-disable-line no-use-before-define
  };

  proto.utc = function (keepLocalTime) {
    var ins = dayjs(this.toDate(), {
      locale: this.$L,
      utc: true
    });

    if (keepLocalTime) {
      return ins.add(this.utcOffset(), MIN);
    }

    return ins;
  };

  proto.local = function () {
    return dayjs(this.toDate(), {
      locale: this.$L,
      utc: false
    });
  };

  var oldParse = proto.parse;

  proto.parse = function (cfg) {
    if (cfg.utc) {
      this.$u = true;
    }

    if (!this.$utils().u(cfg.$offset)) {
      this.$offset = cfg.$offset;
    }

    oldParse.call(this, cfg);
  };

  var oldInit = proto.init;

  proto.init = function () {
    if (this.$u) {
      var $d = this.$d;
      this.$y = $d.getUTCFullYear();
      this.$M = $d.getUTCMonth();
      this.$D = $d.getUTCDate();
      this.$W = $d.getUTCDay();
      this.$H = $d.getUTCHours();
      this.$m = $d.getUTCMinutes();
      this.$s = $d.getUTCSeconds();
      this.$ms = $d.getUTCMilliseconds();
    } else {
      oldInit.call(this);
    }
  };

  var oldUtcOffset = proto.utcOffset;

  proto.utcOffset = function (input, keepLocalTime) {
    var _this$$utils = this.$utils(),
        u = _this$$utils.u;

    if (u(input)) {
      if (this.$u) {
        return 0;
      }

      if (!u(this.$offset)) {
        return this.$offset;
      }

      return oldUtcOffset.call(this);
    }

    if (typeof input === 'string') {
      input = offsetFromString(input);

      if (input === null) {
        return this;
      }
    }

    var offset = Math.abs(input) <= 16 ? input * 60 : input;

    if (offset === 0) {
      return this.utc(keepLocalTime);
    }

    var ins = this.clone();

    if (keepLocalTime) {
      ins.$offset = offset;
      ins.$u = false;
      return ins;
    }

    var localTimezoneOffset = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
    ins = this.local().add(offset + localTimezoneOffset, MIN);
    ins.$offset = offset;
    ins.$x.$localOffset = localTimezoneOffset;
    return ins;
  };

  var oldFormat = proto.format;
  var UTC_FORMAT_DEFAULT = 'YYYY-MM-DDTHH:mm:ss[Z]';

  proto.format = function (formatStr) {
    var str = formatStr || (this.$u ? UTC_FORMAT_DEFAULT : '');
    return oldFormat.call(this, str);
  };

  proto.valueOf = function () {
    var addedOffset = !this.$utils().u(this.$offset) ? this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset()) : 0;
    return this.$d.valueOf() - addedOffset * MILLISECONDS_A_MINUTE;
  };

  proto.isUTC = function () {
    return !!this.$u;
  };

  proto.toISOString = function () {
    return this.toDate().toISOString();
  };

  proto.toString = function () {
    return this.toDate().toUTCString();
  };

  var oldToDate = proto.toDate;

  proto.toDate = function (type) {
    if (type === 's' && this.$offset) {
      return dayjs(this.format('YYYY-MM-DD HH:mm:ss:SSS')).toDate();
    }

    return oldToDate.call(this);
  };

  var oldDiff = proto.diff;

  proto.diff = function (input, units, _float) {
    if (input && this.$u === input.$u) {
      return oldDiff.call(this, input, units, _float);
    }

    var localThis = this.local();
    var localInput = dayjs(input).local();
    return oldDiff.call(localThis, localInput, units, _float);
  };
});