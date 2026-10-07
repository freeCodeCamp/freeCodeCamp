// Plugin template from https://day.js.org/docs/en/plugin/plugin
export default (function (option, dayjsClass) {
  var oldParse = dayjsClass.prototype.parse;

  dayjsClass.prototype.parse = function (cfg) {
    if (typeof cfg.date === 'string') {
      var locale = this.$locale();
      cfg.date = locale && locale.preparse ? locale.preparse(cfg.date) : cfg.date;
    } // original parse result


    return oldParse.bind(this)(cfg);
  }; // // overriding existing API
  // // e.g. extend dayjs().format()


  var oldFormat = dayjsClass.prototype.format;

  dayjsClass.prototype.format = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // original format result
    var result = oldFormat.call.apply(oldFormat, [this].concat(args)); // return modified result

    var locale = this.$locale();
    return locale && locale.postformat ? locale.postformat(result) : result;
  };

  var oldFromTo = dayjsClass.prototype.fromToBase;

  if (oldFromTo) {
    dayjsClass.prototype.fromToBase = function (input, withoutSuffix, instance, isFrom) {
      var locale = this.$locale() || instance.$locale(); // original format result

      return oldFromTo.call(this, input, withoutSuffix, instance, isFrom, locale && locale.postformat);
    };
  }
});