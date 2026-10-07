import { t } from '../localizedFormat/utils';
export default (function (o, c, dayjs) {
  // locale needed later
  var proto = c.prototype;

  var getLocalePart = function getLocalePart(part) {
    return part && (part.indexOf ? part : part.s);
  };

  var getShort = function getShort(ins, target, full, num, localeOrder) {
    var locale = ins.name ? ins : ins.$locale();
    var targetLocale = getLocalePart(locale[target]);
    var fullLocale = getLocalePart(locale[full]);
    var result = targetLocale || fullLocale.map(function (f) {
      return f.slice(0, num);
    });
    if (!localeOrder) return result;
    var weekStart = locale.weekStart;
    return result.map(function (_, index) {
      return result[(index + (weekStart || 0)) % 7];
    });
  };

  var getDayjsLocaleObject = function getDayjsLocaleObject() {
    return dayjs.Ls[dayjs.locale()];
  };

  var getLongDateFormat = function getLongDateFormat(l, format) {
    return l.formats[format] || t(l.formats[format.toUpperCase()]);
  };

  var localeData = function localeData() {
    var _this = this;

    return {
      months: function months(instance) {
        return instance ? instance.format('MMMM') : getShort(_this, 'months');
      },
      monthsShort: function monthsShort(instance) {
        return instance ? instance.format('MMM') : getShort(_this, 'monthsShort', 'months', 3);
      },
      firstDayOfWeek: function firstDayOfWeek() {
        return _this.$locale().weekStart || 0;
      },
      weekdays: function weekdays(instance) {
        return instance ? instance.format('dddd') : getShort(_this, 'weekdays');
      },
      weekdaysMin: function weekdaysMin(instance) {
        return instance ? instance.format('dd') : getShort(_this, 'weekdaysMin', 'weekdays', 2);
      },
      weekdaysShort: function weekdaysShort(instance) {
        return instance ? instance.format('ddd') : getShort(_this, 'weekdaysShort', 'weekdays', 3);
      },
      longDateFormat: function longDateFormat(format) {
        return getLongDateFormat(_this.$locale(), format);
      },
      meridiem: this.$locale().meridiem,
      ordinal: this.$locale().ordinal
    };
  };

  proto.localeData = function () {
    return localeData.bind(this)();
  };

  dayjs.localeData = function () {
    var localeObject = getDayjsLocaleObject();
    return {
      firstDayOfWeek: function firstDayOfWeek() {
        return localeObject.weekStart || 0;
      },
      weekdays: function weekdays() {
        return dayjs.weekdays();
      },
      weekdaysShort: function weekdaysShort() {
        return dayjs.weekdaysShort();
      },
      weekdaysMin: function weekdaysMin() {
        return dayjs.weekdaysMin();
      },
      months: function months() {
        return dayjs.months();
      },
      monthsShort: function monthsShort() {
        return dayjs.monthsShort();
      },
      longDateFormat: function longDateFormat(format) {
        return getLongDateFormat(localeObject, format);
      },
      meridiem: localeObject.meridiem,
      ordinal: localeObject.ordinal
    };
  };

  dayjs.months = function () {
    return getShort(getDayjsLocaleObject(), 'months');
  };

  dayjs.monthsShort = function () {
    return getShort(getDayjsLocaleObject(), 'monthsShort', 'months', 3);
  };

  dayjs.weekdays = function (localeOrder) {
    return getShort(getDayjsLocaleObject(), 'weekdays', null, null, localeOrder);
  };

  dayjs.weekdaysShort = function (localeOrder) {
    return getShort(getDayjsLocaleObject(), 'weekdaysShort', 'weekdays', 3, localeOrder);
  };

  dayjs.weekdaysMin = function (localeOrder) {
    return getShort(getDayjsLocaleObject(), 'weekdaysMin', 'weekdays', 2, localeOrder);
  };
});