"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AsyncIterator;
var _OverloadYield = require("./OverloadYield.js");
var _regeneratorDefine = require("./regeneratorDefine.js");
function AsyncIterator(generator, PromiseImpl) {
  if (!this.next) {
    (0, _regeneratorDefine.default)(AsyncIterator.prototype);
    (0, _regeneratorDefine.default)(AsyncIterator.prototype, typeof Symbol === "function" && Symbol.asyncIterator || "@asyncIterator", function () {
      return this;
    });
  }
  function invoke(method, arg, resolve, reject) {
    try {
      var result = generator[method](arg);
      var value = result.value;
      if (value instanceof _OverloadYield.default) {
        return PromiseImpl.resolve(value.v).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        });
      }
      return PromiseImpl.resolve(value).then(function (unwrapped) {
        result.value = unwrapped;
        resolve(result);
      }, function (error) {
        return invoke("throw", error, resolve, reject);
      });
    } catch (error) {
      reject(error);
    }
  }
  var previousPromise;
  function enqueue(method, i, arg) {
    function callInvokeWithMethodAndArg() {
      return new PromiseImpl(function (resolve, reject) {
        invoke(method, arg, resolve, reject);
      });
    }
    return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
  }
  (0, _regeneratorDefine.default)(this, "_invoke", enqueue, true);
}

//# sourceMappingURL=regeneratorAsyncIterator.js.map
