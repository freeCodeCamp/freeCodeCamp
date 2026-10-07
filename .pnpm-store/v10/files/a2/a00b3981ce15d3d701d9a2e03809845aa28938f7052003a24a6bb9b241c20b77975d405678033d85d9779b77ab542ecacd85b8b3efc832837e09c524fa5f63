import isObject from '../object/isObject';
import hasKey from '../object/hasKey';
import isString from '../string/isString';
import isUndefined from '../isUndefined';

function contains(collection, item) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (Array.isArray(collection) || isString(collection)) {
    if (options.stringifyFirst) {
      return !isUndefined(collection.find(function (collectionItem) {
        return collectionItem.toString() === item.toString();
      }));
    } else {
      return collection.indexOf(item) !== -1;
    }
  } else if (isObject(collection)) {
    return hasKey(collection, item);
  } else {
    if (options.stringifyFirst) {
      return collection.toString() === item.toString();
    } else {
      return collection === item;
    }
  }
}

export default contains;