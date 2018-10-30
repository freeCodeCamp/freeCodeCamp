var clone = require('./clone');

module.exports = merge;

function typesMatch(a, b) {
  return (typeof a === typeof b) && (Array.isArray(a) === Array.isArray(b));
}

/**
 * A deep merge of the source based on the target.
 * @param  {Object} source   [description]
 * @param  {Object} target   [description]
 * @return {Object}          [description]
 */
function merge(source, target, result) {
  if (result === undefined) {
    result = clone(source);
  }

  // merge missing values from the target to the source
  Object.getOwnPropertyNames(target).forEach(function (key) {
    if (source[key] === undefined) {
      result[key] = target[key];
    }
  });

  Object.getOwnPropertyNames(source).forEach(function (key) {
    var value = source[key];

    if (target[key] && typesMatch(value, target[key])) {
      // merge empty values
      if (value === '') {
        result[key] = target[key];
      }

      if (Array.isArray(value)) {
        if (value.length === 0 && target[key].length) {
          result[key] = target[key].slice(0);
        }
      } else if (typeof value === 'object') {
        result[key] = merge(value, target[key]);
      }
    }
  });

  return result;
}