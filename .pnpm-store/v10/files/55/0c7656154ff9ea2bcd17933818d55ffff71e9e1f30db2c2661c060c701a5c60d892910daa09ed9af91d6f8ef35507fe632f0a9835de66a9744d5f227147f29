"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.symbol = exports.structureKeys = exports.structure = exports.string = exports.random = exports.optimize = exports.number = exports.isHash = exports.hash = exports.combine = exports.cached = exports.array = void 0;
var _Function = require("./Function.js");
var _GlobalValue = require("./GlobalValue.js");
var _Predicate = require("./Predicate.js");
var _Utils = require("./Utils.js");
/**
 * @since 2.0.0
 */

/** @internal */
const randomHashCache = /*#__PURE__*/(0, _GlobalValue.globalValue)(/*#__PURE__*/Symbol.for("effect/Hash/randomHashCache"), () => new WeakMap());
/**
 * @since 2.0.0
 * @category symbols
 */
const symbol = exports.symbol = /*#__PURE__*/Symbol.for("effect/Hash");
/**
 * @since 2.0.0
 * @category hashing
 */
const hash = self => {
  if (_Utils.structuralRegionState.enabled === true) {
    return 0;
  }
  switch (typeof self) {
    case "number":
      return number(self);
    case "bigint":
      return string(self.toString(10));
    case "boolean":
      return string(String(self));
    case "symbol":
      return string(String(self));
    case "string":
      return string(self);
    case "undefined":
      return string("undefined");
    case "function":
    case "object":
      {
        if (self === null) {
          return string("null");
        } else if (self instanceof Date) {
          if (Number.isNaN(self.getTime())) {
            return string("Invalid Date");
          }
          return hash(self.toISOString());
        } else if (self instanceof URL) {
          return hash(self.href);
        } else if (isHash(self)) {
          return self[symbol]();
        } else {
          return random(self);
        }
      }
    default:
      throw new Error(`BUG: unhandled typeof ${typeof self} - please report an issue at https://github.com/Effect-TS/effect/issues`);
  }
};
/**
 * @since 2.0.0
 * @category hashing
 */
exports.hash = hash;
const random = self => {
  if (!randomHashCache.has(self)) {
    randomHashCache.set(self, number(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)));
  }
  return randomHashCache.get(self);
};
/**
 * @since 2.0.0
 * @category hashing
 */
exports.random = random;
const combine = b => self => self * 53 ^ b;
/**
 * @since 2.0.0
 * @category hashing
 */
exports.combine = combine;
const optimize = n => n & 0xbfffffff | n >>> 1 & 0x40000000;
/**
 * @since 2.0.0
 * @category guards
 */
exports.optimize = optimize;
const isHash = u => (0, _Predicate.hasProperty)(u, symbol);
/**
 * @since 2.0.0
 * @category hashing
 */
exports.isHash = isHash;
const number = n => {
  if (n !== n || n === Infinity) {
    return 0;
  }
  let h = n | 0;
  if (h !== n) {
    h ^= n * 0xffffffff;
  }
  while (n > 0xffffffff) {
    h ^= n /= 0xffffffff;
  }
  return optimize(h);
};
/**
 * @since 2.0.0
 * @category hashing
 */
exports.number = number;
const string = str => {
  let h = 5381,
    i = str.length;
  while (i) {
    h = h * 33 ^ str.charCodeAt(--i);
  }
  return optimize(h);
};
/**
 * @since 2.0.0
 * @category hashing
 */
exports.string = string;
const structureKeys = (o, keys) => {
  let h = 12289;
  for (let i = 0; i < keys.length; i++) {
    h ^= (0, _Function.pipe)(string(keys[i]), combine(hash(o[keys[i]])));
  }
  return optimize(h);
};
/**
 * @since 2.0.0
 * @category hashing
 */
exports.structureKeys = structureKeys;
const structure = o => structureKeys(o, Object.keys(o));
/**
 * @since 2.0.0
 * @category hashing
 */
exports.structure = structure;
const array = arr => {
  let h = 6151;
  for (let i = 0; i < arr.length; i++) {
    h = (0, _Function.pipe)(h, combine(hash(arr[i])));
  }
  return optimize(h);
};
/**
 * @since 2.0.0
 * @category hashing
 */
exports.array = array;
const cached = function () {
  if (arguments.length === 1) {
    const self = arguments[0];
    return function (hash) {
      Object.defineProperty(self, symbol, {
        value() {
          return hash;
        },
        enumerable: false
      });
      return hash;
    };
  }
  const self = arguments[0];
  const hash = arguments[1];
  Object.defineProperty(self, symbol, {
    value() {
      return hash;
    },
    enumerable: false
  });
  return hash;
};
exports.cached = cached;
//# sourceMappingURL=Hash.js.map