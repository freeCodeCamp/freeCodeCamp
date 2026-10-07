'use strict';

// NOTE: this behaves like lodash/defaults, but doesn't mutate the target
// it also preserve keys order and keep the highest numeric value
function mergeNumericMax() {
  var sources = Array.prototype.slice.call(arguments);

  return sources.reduceRight(function (acc, source) {
    Object.keys(Object(source)).forEach(function (key) {
      var accValue = typeof acc[key] === 'number' ? acc[key] : 0;
      var sourceValue = source[key];

      if (sourceValue === undefined) {
        return;
      }

      if (sourceValue >= accValue) {
        if (acc[key] !== undefined) {
          // remove if already added, so that we can add it in correct order
          delete acc[key];
        }
        acc[key] = sourceValue;
      }
    });
    return acc;
  }, {});
}

module.exports = mergeNumericMax;
