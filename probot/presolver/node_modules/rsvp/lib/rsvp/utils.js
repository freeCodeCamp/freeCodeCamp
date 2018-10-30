export function objectOrFunction(x) {
  let type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

export function isFunction(x) {
  return typeof x === 'function';
}

export function isObject(x) {
  return x !== null && typeof x === 'object';
}

export function isMaybeThenable(x) {
  return x !== null && typeof x === 'object';
}

let _isArray;
if (Array.isArray) {
  _isArray = Array.isArray;
} else {
  _isArray = x => Object.prototype.toString.call(x) === '[object Array]';
}

export const isArray = _isArray;

// Date.now is not available in browsers < IE9
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now#Compatibility
export const now = Date.now || (() => new Date().getTime());
