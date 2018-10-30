"use strict";

exports.__esModule = true;
exports.config = undefined;
exports.normaliseOptions = normaliseOptions;

var _parsers = require("./parsers");

var parsers = _interopRequireWildcard(_parsers);

var _config = require("./config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.config = _config2.default;
function normaliseOptions() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  for (var key in options) {
    var val = options[key];
    if (val == null) continue;

    var opt = _config2.default[key];
    if (opt && opt.alias) opt = _config2.default[opt.alias];
    if (!opt) continue;

    var parser = parsers[opt.type];
    if (parser) val = parser(val);

    options[key] = val;
  }

  return options;
}