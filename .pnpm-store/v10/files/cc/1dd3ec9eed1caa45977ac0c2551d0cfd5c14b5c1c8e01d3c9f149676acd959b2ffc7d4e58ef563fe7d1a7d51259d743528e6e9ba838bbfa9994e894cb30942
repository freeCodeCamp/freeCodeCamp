export default (function (o, c, dayjs) {
  var proto = c.prototype;

  var parseDate = function parseDate(cfg) {
    var date = cfg.date,
        utc = cfg.utc;

    if (Array.isArray(date)) {
      if (utc) {
        if (!date.length) {
          return new Date();
        }

        return new Date(Date.UTC.apply(null, date));
      }

      if (date.length === 1) {
        return dayjs(String(date[0])).toDate();
      }

      return new (Function.prototype.bind.apply(Date, [null].concat(date)))();
    }

    return date;
  };

  var oldParse = proto.parse;

  proto.parse = function (cfg) {
    cfg.date = parseDate.bind(this)(cfg);
    oldParse.bind(this)(cfg);
  };
});