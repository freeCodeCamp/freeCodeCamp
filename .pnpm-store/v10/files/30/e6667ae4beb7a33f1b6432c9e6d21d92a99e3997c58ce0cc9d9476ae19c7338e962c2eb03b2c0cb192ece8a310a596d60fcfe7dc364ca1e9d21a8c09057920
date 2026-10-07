"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _wrapRegExp;
var _setPrototypeOf = require("./setPrototypeOf.js");
var _inherits = require("./inherits.js");
function _wrapRegExp() {
  exports.default = _wrapRegExp = function (re, groups) {
    return new BabelRegExp(re, undefined, groups);
  };
  var _super = RegExp.prototype;
  var _groups = new WeakMap();
  function BabelRegExp(re, flags, groups) {
    var _this = new RegExp(re, flags);
    _groups.set(_this, groups || _groups.get(re));
    return (0, _setPrototypeOf.default)(_this, BabelRegExp.prototype);
  }
  (0, _inherits.default)(BabelRegExp, RegExp);
  BabelRegExp.prototype.exec = function (str) {
    var result = _super.exec.call(this, str);
    if (result) {
      result.groups = buildGroups(result, this);
      var indices = result.indices;
      if (indices) indices.groups = buildGroups(indices, this);
    }
    return result;
  };
  BabelRegExp.prototype[Symbol.replace] = function (str, substitution) {
    if (typeof substitution === "string") {
      var groups = _groups.get(this);
      return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)(>|$)/g, function (match, name, end) {
        if (end === "") {
          return match;
        } else {
          var group = groups[name];
          return Array.isArray(group) ? "$" + group.join("$") : typeof group === "number" ? "$" + group : "";
        }
      }));
    } else if (typeof substitution === "function") {
      var _this = this;
      return _super[Symbol.replace].call(this, str, function () {
        var args = arguments;
        if (typeof args[args.length - 1] !== "object") {
          args = [].slice.call(args);
          args.push(buildGroups(args, _this));
        }
        return substitution.apply(this, args);
      });
    } else {
      return _super[Symbol.replace].call(this, str, substitution);
    }
  };
  function buildGroups(result, re) {
    var g = _groups.get(re);
    return Object.keys(g).reduce(function (groups, name) {
      var i = g[name];
      if (typeof i === "number") groups[name] = result[i];else {
        var k = 0;
        while (result[i[k]] === undefined && k + 1 < i.length) {
          k++;
        }
        groups[name] = result[i[k]];
      }
      return groups;
    }, Object.create(null));
  }
  return _wrapRegExp.apply(this, arguments);
}

//# sourceMappingURL=wrapRegExp.js.map
