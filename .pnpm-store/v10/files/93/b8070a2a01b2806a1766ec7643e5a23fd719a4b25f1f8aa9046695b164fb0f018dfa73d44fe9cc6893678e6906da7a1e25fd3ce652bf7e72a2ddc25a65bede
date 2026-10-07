"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _wrapAsyncGenerator;
var _OverloadYield = require("./OverloadYield.js");
function _wrapAsyncGenerator(fn) {
  return function () {
    return new AsyncGenerator(fn.apply(this, arguments));
  };
}
function AsyncGenerator(gen) {
  var front, back;
  function send(key, arg) {
    return new Promise(function (resolve, reject) {
      var request = {
        key: key,
        arg: arg,
        resolve: resolve,
        reject: reject,
        next: null
      };
      if (back) {
        back = back.next = request;
      } else {
        front = back = request;
        resume(key, arg);
      }
    });
  }
  function resume(key, arg) {
    try {
      var result = gen[key](arg);
      var value = result.value;
      var overloaded = value instanceof _OverloadYield.default;
      Promise.resolve(overloaded ? value.v : value).then(function (arg) {
        if (overloaded) {
          var nextKey = key === "return" && value.k ? key : "next";
          if (!value.k || arg.done) {
            return resume(nextKey, arg);
          } else {
            arg = gen[nextKey](arg).value;
          }
        }
        settle(!!result.done, arg);
      }, function (err) {
        resume("throw", err);
      });
    } catch (err) {
      settle(2, err);
    }
  }
  function settle(type, value) {
    if (type === 2) {
      front.reject(value);
    } else {
      front.resolve({
        value: value,
        done: type
      });
    }
    front = front.next;
    if (front) {
      resume(front.key, front.arg);
    } else {
      back = null;
    }
  }
  this._invoke = send;
  if (typeof gen["return"] !== "function") {
    this["return"] = undefined;
  }
}
AsyncGenerator.prototype[typeof Symbol === "function" && Symbol.asyncIterator || "@@asyncIterator"] = function () {
  return this;
};
AsyncGenerator.prototype.next = function (arg) {
  return this._invoke("next", arg);
};
AsyncGenerator.prototype["throw"] = function (arg) {
  return this._invoke("throw", arg);
};
AsyncGenerator.prototype["return"] = function (arg) {
  return this._invoke("return", arg);
};

//# sourceMappingURL=wrapAsyncGenerator.js.map
