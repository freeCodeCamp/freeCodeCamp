"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _parser = _interopRequireDefault(require("./parser"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Processor = /*#__PURE__*/function () {
  function Processor(func, options) {
    this.func = func || function noop() {};
    this.funcRes = null;
    this.options = options;
  }
  var _proto = Processor.prototype;
  _proto._shouldUpdateSelector = function _shouldUpdateSelector(rule, options) {
    if (options === void 0) {
      options = {};
    }
    var merged = Object.assign({}, this.options, options);
    if (merged.updateSelector === false) {
      return false;
    } else {
      return typeof rule !== "string";
    }
  };
  _proto._isLossy = function _isLossy(options) {
    if (options === void 0) {
      options = {};
    }
    var merged = Object.assign({}, this.options, options);
    if (merged.lossless === false) {
      return true;
    } else {
      return false;
    }
  };
  _proto._root = function _root(rule, options) {
    if (options === void 0) {
      options = {};
    }
    var parser = new _parser["default"](rule, this._parseOptions(options));
    return parser.root;
  };
  _proto._parseOptions = function _parseOptions(options) {
    return {
      lossy: this._isLossy(options)
    };
  };
  _proto._run = function _run(rule, options) {
    var _this = this;
    if (options === void 0) {
      options = {};
    }
    return new Promise(function (resolve, reject) {
      try {
        var root = _this._root(rule, options);
        Promise.resolve(_this.func(root)).then(function (transform) {
          var string = undefined;
          if (_this._shouldUpdateSelector(rule, options)) {
            string = root.toString();
            rule.selector = string;
          }
          return {
            transform: transform,
            root: root,
            string: string
          };
        }).then(resolve, reject);
      } catch (e) {
        reject(e);
        return;
      }
    });
  };
  _proto._runSync = function _runSync(rule, options) {
    if (options === void 0) {
      options = {};
    }
    var root = this._root(rule, options);
    var transform = this.func(root);
    if (transform && typeof transform.then === "function") {
      throw new Error("Selector processor returned a promise to a synchronous call.");
    }
    var string = undefined;
    if (options.updateSelector && typeof rule !== "string") {
      string = root.toString();
      rule.selector = string;
    }
    return {
      transform: transform,
      root: root,
      string: string
    };
  }

  /**
   * Process rule into a selector AST.
   *
   * @param rule {postcss.Rule | string} The css selector to be processed
   * @param options The options for processing
   * @returns {Promise<parser.Root>} The AST of the selector after processing it.
   */;
  _proto.ast = function ast(rule, options) {
    return this._run(rule, options).then(function (result) {
      return result.root;
    });
  }

  /**
   * Process rule into a selector AST synchronously.
   *
   * @param rule {postcss.Rule | string} The css selector to be processed
   * @param options The options for processing
   * @returns {parser.Root} The AST of the selector after processing it.
   */;
  _proto.astSync = function astSync(rule, options) {
    return this._runSync(rule, options).root;
  }

  /**
   * Process a selector into a transformed value asynchronously
   *
   * @param rule {postcss.Rule | string} The css selector to be processed
   * @param options The options for processing
   * @returns {Promise<any>} The value returned by the processor.
   */;
  _proto.transform = function transform(rule, options) {
    return this._run(rule, options).then(function (result) {
      return result.transform;
    });
  }

  /**
   * Process a selector into a transformed value synchronously.
   *
   * @param rule {postcss.Rule | string} The css selector to be processed
   * @param options The options for processing
   * @returns {any} The value returned by the processor.
   */;
  _proto.transformSync = function transformSync(rule, options) {
    return this._runSync(rule, options).transform;
  }

  /**
   * Process a selector into a new selector string asynchronously.
   *
   * @param rule {postcss.Rule | string} The css selector to be processed
   * @param options The options for processing
   * @returns {string} the selector after processing.
   */;
  _proto.process = function process(rule, options) {
    return this._run(rule, options).then(function (result) {
      return result.string || result.root.toString();
    });
  }

  /**
   * Process a selector into a new selector string synchronously.
   *
   * @param rule {postcss.Rule | string} The css selector to be processed
   * @param options The options for processing
   * @returns {string} the selector after processing.
   */;
  _proto.processSync = function processSync(rule, options) {
    var result = this._runSync(rule, options);
    return result.string || result.root.toString();
  };
  return Processor;
}();
exports["default"] = Processor;
module.exports = exports.default;