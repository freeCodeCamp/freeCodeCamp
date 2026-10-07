import { DEBUG_BUILD } from '../debug-build.js';
import { debug } from './debug-logger.js';
import { isError, isEvent, isPrimitive } from './is.js';

function fill(source, name, replacementFactory) {
  if (!(name in source)) {
    return;
  }
  const original = source[name];
  if (typeof original !== "function") {
    return;
  }
  const wrapped = replacementFactory(original);
  if (typeof wrapped === "function") {
    markFunctionWrapped(wrapped, original);
  }
  try {
    source[name] = wrapped;
  } catch {
    DEBUG_BUILD && debug.log(`Failed to replace method "${name}" in object`, source);
  }
}
function addNonEnumerableProperty(obj, name, value) {
  try {
    Object.defineProperty(obj, name, {
      // enumerable: false, // the default, so we can save on bundle size by not explicitly setting it
      value,
      writable: true,
      configurable: true
    });
  } catch {
    DEBUG_BUILD && debug.log(`Failed to add non-enumerable property "${String(name)}" to object`, obj);
  }
}
function markFunctionWrapped(wrapped, original) {
  try {
    const proto = original.prototype || {};
    wrapped.prototype = original.prototype = proto;
    addNonEnumerableProperty(wrapped, "__sentry_original__", original);
  } catch {
  }
}
function wrapMethod(obj, field, wrapped, enumerable = true) {
  const original = obj[field];
  if (typeof original !== "function") {
    throw new Error(`Cannot wrap method: ${field} is not a function`);
  }
  if (getOriginalFunction(original)) {
    throw new Error(`Attempting to wrap method ${field} multiple times`);
  }
  markFunctionWrapped(wrapped, original);
  Object.defineProperty(obj, field, {
    writable: true,
    configurable: true,
    enumerable,
    value: wrapped
  });
}
function getOriginalFunction(func) {
  return func.__sentry_original__;
}
function convertToPlainObject(value) {
  if (isError(value)) {
    return {
      message: value.message,
      name: value.name,
      stack: value.stack,
      ...getOwnProperties(value)
    };
  }
  if (isEvent(value)) {
    const { type, target, currentTarget, detail } = value;
    return {
      type,
      target,
      currentTarget,
      ...detail ? { detail } : {},
      ...getOwnProperties(value)
    };
  }
  return value;
}
function getOwnProperties(obj) {
  if (typeof obj === "object" && obj !== null) {
    return Object.fromEntries(Object.entries(obj));
  }
  return {};
}
function extractExceptionKeysForMessage(exception) {
  const keys = Object.keys(convertToPlainObject(exception));
  keys.sort();
  return !keys[0] ? "[object has no keys]" : keys.join(", ");
}
function dropUndefinedKeys(inputValue) {
  const memoizationMap = /* @__PURE__ */ new Map();
  return _dropUndefinedKeys(inputValue, memoizationMap);
}
function _dropUndefinedKeys(inputValue, memoizationMap) {
  if (inputValue === null || typeof inputValue !== "object") {
    return inputValue;
  }
  const memoVal = memoizationMap.get(inputValue);
  if (memoVal !== void 0) {
    return memoVal;
  }
  if (Array.isArray(inputValue)) {
    const returnValue = [];
    memoizationMap.set(inputValue, returnValue);
    inputValue.forEach((value) => {
      returnValue.push(_dropUndefinedKeys(value, memoizationMap));
    });
    return returnValue;
  }
  if (isPojo(inputValue)) {
    const returnValue = {};
    memoizationMap.set(inputValue, returnValue);
    const keys = Object.keys(inputValue);
    keys.forEach((key) => {
      const val = inputValue[key];
      if (val !== void 0) {
        returnValue[key] = _dropUndefinedKeys(val, memoizationMap);
      }
    });
    return returnValue;
  }
  return inputValue;
}
function isPojo(input) {
  const constructor = input.constructor;
  return constructor === Object || constructor === void 0;
}
function objectify(wat) {
  let objectified;
  switch (true) {
    // this will catch both undefined and null
    case wat == void 0:
      objectified = new String(wat);
      break;
    // Though symbols and bigints do have wrapper classes (`Symbol` and `BigInt`, respectively), for whatever reason
    // those classes don't have constructors which can be used with the `new` keyword. We therefore need to cast each as
    // an object in order to wrap it.
    case (typeof wat === "symbol" || typeof wat === "bigint"):
      objectified = Object(wat);
      break;
    // this will catch the remaining primitives: `String`, `Number`, and `Boolean`
    case isPrimitive(wat):
      objectified = new wat.constructor(wat);
      break;
    // by process of elimination, at this point we know that `wat` must already be an object
    default:
      objectified = wat;
      break;
  }
  return objectified;
}

export { addNonEnumerableProperty, convertToPlainObject, dropUndefinedKeys, extractExceptionKeysForMessage, fill, getOriginalFunction, markFunctionWrapped, objectify, wrapMethod };
//# sourceMappingURL=object.js.map
