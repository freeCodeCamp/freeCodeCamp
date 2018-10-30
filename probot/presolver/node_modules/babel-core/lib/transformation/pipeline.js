"use strict";

exports.__esModule = true;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _normalizeAst = require("../helpers/normalize-ast");

var _normalizeAst2 = _interopRequireDefault(_normalizeAst);

var _plugin = require("./plugin");

var _plugin2 = _interopRequireDefault(_plugin);

var _file = require("./file");

var _file2 = _interopRequireDefault(_file);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pipeline = function () {
  function Pipeline() {
    (0, _classCallCheck3.default)(this, Pipeline);
  }

  Pipeline.prototype.lint = function lint(code) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    opts.code = false;
    opts.mode = "lint";
    return this.transform(code, opts);
  };

  Pipeline.prototype.pretransform = function pretransform(code, opts) {
    var file = new _file2.default(opts, this);
    return file.wrap(code, function () {
      file.addCode(code);
      file.parseCode(code);
      return file;
    });
  };

  Pipeline.prototype.transform = function transform(code, opts) {
    var file = new _file2.default(opts, this);
    return file.wrap(code, function () {
      file.addCode(code);
      file.parseCode(code);
      return file.transform();
    });
  };

  Pipeline.prototype.analyse = function analyse(code) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var visitor = arguments[2];

    opts.code = false;
    if (visitor) {
      opts.plugins = opts.plugins || [];
      opts.plugins.push(new _plugin2.default({ visitor: visitor }));
    }
    return this.transform(code, opts).metadata;
  };

  Pipeline.prototype.transformFromAst = function transformFromAst(ast, code, opts) {
    ast = (0, _normalizeAst2.default)(ast);

    var file = new _file2.default(opts, this);
    return file.wrap(code, function () {
      file.addCode(code);
      file.addAst(ast);
      return file.transform();
    });
  };

  return Pipeline;
}();

exports.default = Pipeline;
module.exports = exports["default"];