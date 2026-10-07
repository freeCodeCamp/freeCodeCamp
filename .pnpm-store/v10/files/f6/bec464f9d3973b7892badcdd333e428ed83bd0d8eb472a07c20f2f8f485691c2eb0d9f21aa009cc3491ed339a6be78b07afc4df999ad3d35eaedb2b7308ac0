// eslint-disable-next-line valid-typeof
var isBigInt = function isBigInt(num) {
  return typeof num === 'bigint';
};

export default (function (o, c, dayjs) {
  var proto = c.prototype;

  var parseDate = function parseDate(cfg) {
    var date = cfg.date;

    if (isBigInt(date)) {
      return Number(date);
    }

    return date;
  };

  var oldParse = proto.parse;

  proto.parse = function (cfg) {
    cfg.date = parseDate.bind(this)(cfg);
    oldParse.bind(this)(cfg);
  };

  var oldUnix = dayjs.unix;

  dayjs.unix = function (timestamp) {
    var ts = isBigInt(timestamp) ? Number(timestamp) : timestamp;
    return oldUnix(ts);
  };
});