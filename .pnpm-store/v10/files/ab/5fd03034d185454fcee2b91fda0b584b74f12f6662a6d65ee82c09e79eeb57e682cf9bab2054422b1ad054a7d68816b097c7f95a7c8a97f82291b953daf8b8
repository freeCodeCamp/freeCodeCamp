/**
 * virtual-core
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function memo(getDeps, fn, opts) {
  var _opts$initialDeps;
  var deps = (_opts$initialDeps = opts.initialDeps) != null ? _opts$initialDeps : [];
  var result;
  return function () {
    var depTime;
    if (opts.key && opts.debug != null && opts.debug()) depTime = Date.now();
    var newDeps = getDeps();
    var depsChanged = newDeps.length !== deps.length || newDeps.some(function (dep, index) {
      return deps[index] !== dep;
    });
    if (!depsChanged) {
      return result;
    }
    deps = newDeps;
    var resultTime;
    if (opts.key && opts.debug != null && opts.debug()) resultTime = Date.now();
    result = fn.apply(void 0, newDeps);
    if (opts.key && opts.debug != null && opts.debug()) {
      var depEndTime = Math.round((Date.now() - depTime) * 100) / 100;
      var resultEndTime = Math.round((Date.now() - resultTime) * 100) / 100;
      var resultFpsPercentage = resultEndTime / 16;
      var pad = function pad(str, num) {
        str = String(str);
        while (str.length < num) {
          str = ' ' + str;
        }
        return str;
      };
      console.info("%c\u23F1 " + pad(resultEndTime, 5) + " /" + pad(depEndTime, 5) + " ms", "\n            font-size: .6rem;\n            font-weight: bold;\n            color: hsl(" + Math.max(0, Math.min(120 - 120 * resultFpsPercentage, 120)) + "deg 100% 31%);", opts == null ? void 0 : opts.key);
    }
    opts == null || opts.onChange == null || opts.onChange(result);
    return result;
  };
}
function notUndefined(value, msg) {
  if (value === undefined) {
    throw new Error("Unexpected undefined" + (msg ? ": " + msg : ''));
  } else {
    return value;
  }
}
var approxEqual = function approxEqual(a, b) {
  return Math.abs(a - b) < 1;
};

export { approxEqual, memo, notUndefined };
//# sourceMappingURL=utils.esm.js.map
