"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _regeneratorRuntime;
var _OverloadYield = require("./OverloadYield.js");
var _regenerator = require("./regenerator.js");
var _regeneratorAsync = require("./regeneratorAsync.js");
var _regeneratorAsyncGen = require("./regeneratorAsyncGen.js");
var _regeneratorAsyncIterator = require("./regeneratorAsyncIterator.js");
var _regeneratorKeys = require("./regeneratorKeys.js");
var _regeneratorValues = require("./regeneratorValues.js");
function _regeneratorRuntime() {
  "use strict";

  var r = (0, _regenerator.default)();
  var gen = r.m(_regeneratorRuntime);
  var GeneratorFunctionPrototype = Object.getPrototypeOf ? Object.getPrototypeOf(gen) : gen.__proto__;
  var GeneratorFunction = GeneratorFunctionPrototype.constructor;
  function isGeneratorFunction(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  }
  var abruptMap = {
    throw: 1,
    return: 2,
    break: 3,
    continue: 3
  };
  function wrapInnerFn(innerFn) {
    var compatContext;
    var callSyncState;
    return function (context) {
      if (!compatContext) {
        compatContext = {
          stop: function () {
            return callSyncState(context.a, 2);
          },
          catch: function () {
            return context.v;
          },
          abrupt: function (type, arg) {
            return callSyncState(context.a, abruptMap[type], arg);
          },
          delegateYield: function (iterable, resultName, nextLoc) {
            compatContext.resultName = resultName;
            return callSyncState(context.d, (0, _regeneratorValues.default)(iterable), nextLoc);
          },
          finish: function (finallyLoc) {
            return callSyncState(context.f, finallyLoc);
          }
        };
        callSyncState = function (fn, a1, a2) {
          context.p = compatContext.prev;
          context.n = compatContext.next;
          try {
            return fn(a1, a2);
          } finally {
            compatContext.next = context.n;
          }
        };
      }
      if (compatContext.resultName) {
        compatContext[compatContext.resultName] = context.v;
        compatContext.resultName = undefined;
      }
      compatContext.sent = context.v;
      compatContext.next = context.n;
      try {
        return innerFn.call(this, compatContext);
      } finally {
        context.p = compatContext.prev;
        context.n = compatContext.next;
      }
    };
  }
  return (exports.default = _regeneratorRuntime = function () {
    return {
      wrap: function (innerFn, outerFn, self, tryLocsList) {
        return r.w(wrapInnerFn(innerFn), outerFn, self, tryLocsList && tryLocsList.reverse());
      },
      isGeneratorFunction: isGeneratorFunction,
      mark: r.m,
      awrap: function (value, kind) {
        return new _OverloadYield.default(value, kind);
      },
      AsyncIterator: _regeneratorAsyncIterator.default,
      async: function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        return (isGeneratorFunction(outerFn) ? _regeneratorAsyncGen.default : _regeneratorAsync.default)(wrapInnerFn(innerFn), outerFn, self, tryLocsList, PromiseImpl);
      },
      keys: _regeneratorKeys.default,
      values: _regeneratorValues.default
    };
  })();
}

//# sourceMappingURL=regeneratorRuntime.js.map
