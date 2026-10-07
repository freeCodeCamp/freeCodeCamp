export function objectOrFunction(x) {
  let type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

export function isFunction(x) {
  return typeof x === 'function';
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
