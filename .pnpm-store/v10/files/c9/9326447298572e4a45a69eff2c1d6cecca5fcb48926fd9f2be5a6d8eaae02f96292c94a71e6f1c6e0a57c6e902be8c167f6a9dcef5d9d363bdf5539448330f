import dictionaryFrom from '../object/dictionaryFrom';
import arrayFrom from '../array/arrayFrom';
import isObject from '../object/isObject';

function without(target) {
  var attributesToOmit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var omitDict = dictionaryFrom(arrayFrom(attributesToOmit));

  if (Array.isArray(target)) {
    return target.reduce(function (memo, element) {
      if (!(omitDict[element] && (options.stringifyFirst || omitDict[element].value === element))) {
        memo.push(element);
      }

      return memo;
    }, []);
  } else if (isObject(target)) {
    return Object.keys(target).reduce(function (memo, key) {
      if (!omitDict[key]) {
        memo[key] = target[key];
      }

      return memo;
    }, {});
  } else {
    return target;
  }
}

export default without;