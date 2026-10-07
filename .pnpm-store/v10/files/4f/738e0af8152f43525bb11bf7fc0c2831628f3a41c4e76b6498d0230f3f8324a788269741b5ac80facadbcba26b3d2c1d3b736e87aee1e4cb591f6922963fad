import * as C from '../../constant';
export default (function (o, c, d) {
  o = o || {};
  var proto = c.prototype;
  var relObj = {
    future: 'in %s',
    past: '%s ago',
    s: 'a few seconds',
    m: 'a minute',
    mm: '%d minutes',
    h: 'an hour',
    hh: '%d hours',
    d: 'a day',
    dd: '%d days',
    M: 'a month',
    MM: '%d months',
    y: 'a year',
    yy: '%d years'
  };
  d.en.relativeTime = relObj;

  proto.fromToBase = function (input, withoutSuffix, instance, isFrom, postFormat) {
    var loc = instance.$locale().relativeTime || relObj;
    var T = o.thresholds || [{
      l: 's',
      r: 44,
      d: C.S
    }, {
      l: 'm',
      r: 89
    }, {
      l: 'mm',
      r: 44,
      d: C.MIN
    }, {
      l: 'h',
      r: 89
    }, {
      l: 'hh',
      r: 21,
      d: C.H
    }, {
      l: 'd',
      r: 35
    }, {
      l: 'dd',
      r: 25,
      d: C.D
    }, {
      l: 'M',
      r: 45
    }, {
      l: 'MM',
      r: 10,
      d: C.M
    }, {
      l: 'y',
      r: 17
    }, {
      l: 'yy',
      d: C.Y
    }];
    var Tl = T.length;
    var result;
    var out;
    var isFuture;

    for (var i = 0; i < Tl; i += 1) {
      var t = T[i];

      if (t.d) {
        result = isFrom ? d(input).diff(instance, t.d, true) : instance.diff(input, t.d, true);
      }

      var abs = (o.rounding || Math.round)(Math.abs(result));
      isFuture = result > 0;

      if (abs <= t.r || !t.r) {
        if (abs <= 1 && i > 0) t = T[i - 1]; // 1 minutes -> a minute, 0 seconds -> 0 second

        var format = loc[t.l];

        if (postFormat) {
          abs = postFormat("" + abs);
        }

        if (typeof format === 'string') {
          out = format.replace('%d', abs);
        } else {
          out = format(abs, withoutSuffix, t.l, isFuture);
        }

        break;
      }
    }

    if (withoutSuffix) return out;
    var pastOrFuture = isFuture ? loc.future : loc.past;

    if (typeof pastOrFuture === 'function') {
      return pastOrFuture(out);
    }

    return pastOrFuture.replace('%s', out);
  };

  function fromTo(input, withoutSuffix, instance, isFrom) {
    return proto.fromToBase(input, withoutSuffix, instance, isFrom);
  }

  proto.to = function (input, withoutSuffix) {
    return fromTo(input, withoutSuffix, this, true);
  };

  proto.from = function (input, withoutSuffix) {
    return fromTo(input, withoutSuffix, this);
  };

  var makeNow = function makeNow(thisDay) {
    return thisDay.$u ? d.utc() : d();
  };

  proto.toNow = function (withoutSuffix) {
    return this.to(makeNow(this), withoutSuffix);
  };

  proto.fromNow = function (withoutSuffix) {
    return this.from(makeNow(this), withoutSuffix);
  };
});