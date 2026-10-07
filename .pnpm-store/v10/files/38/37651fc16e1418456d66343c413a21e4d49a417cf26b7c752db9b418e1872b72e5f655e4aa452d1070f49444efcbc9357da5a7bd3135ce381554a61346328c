import isObject from '../object/isObject';

function isEmpty(target) {
  if (isObject(target)) {
    return Object.keys(target).length === 0;
  } else {
    return !target ? true : target.length === 0;
  }
}

export default isEmpty;