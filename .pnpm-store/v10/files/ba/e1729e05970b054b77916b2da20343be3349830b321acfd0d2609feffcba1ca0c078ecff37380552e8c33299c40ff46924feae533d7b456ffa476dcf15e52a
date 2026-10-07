import { MIN, MS } from '../../constant';
var typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
}; // Cache time-zone lookups from Intl.DateTimeFormat,
// as it is a *very* slow method.

var dtfCache = {};

var getDateTimeFormat = function getDateTimeFormat(timezone, options) {
  if (options === void 0) {
    options = {};
  }

  var timeZoneName = options.timeZoneName || 'short';
  var key = timezone + "|" + timeZoneName;
  var dtf = dtfCache[key];

  if (!dtf) {
    dtf = new Intl.DateTimeFormat('en-US', {
      hour12: false,
      timeZone: timezone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: timeZoneName
    });
    dtfCache[key] = dtf;
  }

  return dtf;
};

export default (function (o, c, d) {
  var defaultTimezone;

  var makeFormatParts = function makeFormatParts(timestamp, timezone, options) {
    if (options === void 0) {
      options = {};
    }

    var date = new Date(timestamp);
    var dtf = getDateTimeFormat(timezone, options);
    return dtf.formatToParts(date);
  };

  var tzOffset = function tzOffset(timestamp, timezone) {
    var formatResult = makeFormatParts(timestamp, timezone);
    var filled = [];

    for (var i = 0; i < formatResult.length; i += 1) {
      var _formatResult$i = formatResult[i],
          type = _formatResult$i.type,
          value = _formatResult$i.value;
      var pos = typeToPos[type];

      if (pos >= 0) {
        filled[pos] = parseInt(value, 10);
      }
    }

    var hour = filled[3]; // Workaround for the same behavior in different node version
    // https://github.com/nodejs/node/issues/33027

    /* istanbul ignore next */

    var fixedHour = hour === 24 ? 0 : hour;
    var utcString = filled[0] + "-" + filled[1] + "-" + filled[2] + " " + fixedHour + ":" + filled[4] + ":" + filled[5] + ":000";
    var utcTs = d.utc(utcString).valueOf();
    var asTS = +timestamp;
    var over = asTS % 1000;
    asTS -= over;
    return (utcTs - asTS) / (60 * 1000);
  }; // find the right offset a given local time. The o input is our guess, which determines which
  // offset we'll pick in ambiguous cases (e.g. there are two 3 AMs b/c Fallback DST)
  // https://github.com/moment/luxon/blob/master/src/datetime.js#L76


  var fixOffset = function fixOffset(localTS, o0, tz) {
    // Our UTC time is just a guess because our offset is just a guess
    var utcGuess = localTS - o0 * 60 * 1000; // Test whether the zone matches the offset for this ts

    var o2 = tzOffset(utcGuess, tz); // If so, offset didn't change and we're done

    if (o0 === o2) {
      return [utcGuess, o0];
    } // If not, change the ts by the difference in the offset


    utcGuess -= (o2 - o0) * 60 * 1000; // If that gives us the local time we want, we're done

    var o3 = tzOffset(utcGuess, tz);

    if (o2 === o3) {
      return [utcGuess, o2];
    } // If it's different, we're in a hole time.
    // The offset has changed, but the we don't adjust the time


    return [localTS - Math.min(o2, o3) * 60 * 1000, Math.max(o2, o3)];
  };

  var proto = c.prototype;

  proto.tz = function (timezone, keepLocalTime) {
    if (timezone === void 0) {
      timezone = defaultTimezone;
    }

    var oldOffset = this.utcOffset();
    var date = this.toDate();
    var target = date.toLocaleString('en-US', {
      timeZone: timezone
    });
    var diff = Math.round((date - new Date(target)) / 1000 / 60);
    var offset = -Math.round(date.getTimezoneOffset() / 15) * 15 - diff;
    var isUTC = !Number(offset);
    var ins;

    if (isUTC) {
      // if utcOffset is 0, turn it to UTC mode
      ins = this.utcOffset(0, keepLocalTime);
    } else {
      ins = d(target, {
        locale: this.$L
      }).$set(MS, this.$ms).utcOffset(offset, true);

      if (keepLocalTime) {
        var newOffset = ins.utcOffset();
        ins = ins.add(oldOffset - newOffset, MIN);
      }
    }

    ins.$x.$timezone = timezone;
    return ins;
  };

  proto.offsetName = function (type) {
    // type: short(default) / long
    var zone = this.$x.$timezone || d.tz.guess();
    var result = makeFormatParts(this.valueOf(), zone, {
      timeZoneName: type
    }).find(function (m) {
      return m.type.toLowerCase() === 'timezonename';
    });
    return result && result.value;
  };

  var oldStartOf = proto.startOf;

  proto.startOf = function (units, startOf) {
    if (!this.$x || !this.$x.$timezone) {
      return oldStartOf.call(this, units, startOf);
    }

    var withoutTz = d(this.format('YYYY-MM-DD HH:mm:ss:SSS'), {
      locale: this.$L
    });
    var startOfWithoutTz = oldStartOf.call(withoutTz, units, startOf);
    return startOfWithoutTz.tz(this.$x.$timezone, true);
  };

  d.tz = function (input, arg1, arg2) {
    var parseFormat = arg2 && arg1;
    var timezone = arg2 || arg1 || defaultTimezone;
    var previousOffset = tzOffset(+d(), timezone);

    if (typeof input !== 'string') {
      // timestamp number || js Date || Day.js
      return d(input).tz(timezone);
    }

    var localTs = d.utc(input, parseFormat).valueOf();

    var _fixOffset = fixOffset(localTs, previousOffset, timezone),
        targetTs = _fixOffset[0],
        targetOffset = _fixOffset[1];

    var ins = d(targetTs).utcOffset(targetOffset);
    ins.$x.$timezone = timezone;
    return ins;
  };

  d.tz.guess = function () {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  };

  d.tz.setDefault = function (timezone) {
    defaultTimezone = timezone;
  };
});