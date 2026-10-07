export default (function (_, c, dayjs) {
  var proto = c.prototype;

  var parseDate = function parseDate(cfg) {
    var date = cfg.date,
        utc = cfg.utc;

    if (typeof date === 'string' && date.charAt(0) === '-') {
      var normalData = date.slice(1);
      var newDate = dayjs(normalData);

      if (utc) {
        newDate = dayjs.utc(normalData);
      } else {
        newDate = dayjs(normalData);
      }

      var fullYear = newDate.year();

      if (date.indexOf("-" + fullYear) !== -1) {
        return dayjs(newDate).subtract(fullYear * 2, 'year').toDate();
      }

      return date;
    }

    return date;
  };

  var oldParse = proto.parse;

  proto.parse = function (cfg) {
    cfg.date = parseDate.bind(this)(cfg);
    oldParse.bind(this)(cfg);
  };
});