"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/@jest/get-type/build/index.js
var require_build = __commonJS({
  "node_modules/@jest/get-type/build/index.js"(exports2, module2) {
    (() => {
      "use strict";
      var __webpack_exports__ = {};
      (() => {
        var exports3 = __webpack_exports__;
        Object.defineProperty(exports3, "__esModule", {
          value: true
        });
        exports3.getType = getType2;
        exports3.isPrimitive = void 0;
        function getType2(value) {
          if (value === void 0) {
            return "undefined";
          } else if (value === null) {
            return "null";
          } else if (Array.isArray(value)) {
            return "array";
          } else if (typeof value === "boolean") {
            return "boolean";
          } else if (typeof value === "function") {
            return "function";
          } else if (typeof value === "number") {
            return "number";
          } else if (typeof value === "string") {
            return "string";
          } else if (typeof value === "bigint") {
            return "bigint";
          } else if (typeof value === "object") {
            if (value.constructor === RegExp) {
              return "regexp";
            } else if (value.constructor === Map) {
              return "map";
            } else if (value.constructor === Set) {
              return "set";
            } else if (value.constructor === Date) {
              return "date";
            }
            return "object";
          } else if (typeof value === "symbol") {
            return "symbol";
          }
          throw new Error(`value of unknown type: ${value}`);
        }
        const isPrimitive2 = (value) => Object(value) !== value;
        exports3.isPrimitive = isPrimitive2;
      })();
      module2.exports = __webpack_exports__;
    })();
  }
});

// node_modules/@jest/expect-utils/build/index.js
var require_build2 = __commonJS({
  "node_modules/@jest/expect-utils/build/index.js"(exports2, module2) {
    (() => {
      "use strict";
      var __webpack_modules__ = {
        /***/
        "./src/immutableUtils.ts": (
          /***/
          ((__unused_webpack_module, exports3) => {
            Object.defineProperty(exports3, "__esModule", {
              value: true
            });
            exports3.isImmutableList = isImmutableList;
            exports3.isImmutableOrderedKeyed = isImmutableOrderedKeyed;
            exports3.isImmutableOrderedSet = isImmutableOrderedSet;
            exports3.isImmutableRecord = isImmutableRecord;
            exports3.isImmutableUnorderedKeyed = isImmutableUnorderedKeyed;
            exports3.isImmutableUnorderedSet = isImmutableUnorderedSet;
            const IS_KEYED_SENTINEL = "@@__IMMUTABLE_KEYED__@@";
            const IS_SET_SENTINEL = "@@__IMMUTABLE_SET__@@";
            const IS_LIST_SENTINEL = "@@__IMMUTABLE_LIST__@@";
            const IS_ORDERED_SENTINEL = "@@__IMMUTABLE_ORDERED__@@";
            const IS_RECORD_SYMBOL = "@@__IMMUTABLE_RECORD__@@";
            function isObjectLiteral(source) {
              return source != null && typeof source === "object" && !Array.isArray(source);
            }
            function isImmutableUnorderedKeyed(source) {
              return Boolean(source && isObjectLiteral(source) && source[IS_KEYED_SENTINEL] && !source[IS_ORDERED_SENTINEL]);
            }
            function isImmutableUnorderedSet(source) {
              return Boolean(source && isObjectLiteral(source) && source[IS_SET_SENTINEL] && !source[IS_ORDERED_SENTINEL]);
            }
            function isImmutableList(source) {
              return Boolean(source && isObjectLiteral(source) && source[IS_LIST_SENTINEL]);
            }
            function isImmutableOrderedKeyed(source) {
              return Boolean(source && isObjectLiteral(source) && source[IS_KEYED_SENTINEL] && source[IS_ORDERED_SENTINEL]);
            }
            function isImmutableOrderedSet(source) {
              return Boolean(source && isObjectLiteral(source) && source[IS_SET_SENTINEL] && source[IS_ORDERED_SENTINEL]);
            }
            function isImmutableRecord(source) {
              return Boolean(source && isObjectLiteral(source) && source[IS_RECORD_SYMBOL]);
            }
          })
        ),
        /***/
        "./src/index.ts": (
          /***/
          ((__unused_webpack_module, exports3, __webpack_require__2) => {
            Object.defineProperty(exports3, "__esModule", {
              value: true
            });
            var _exportNames = {
              equals: true,
              isA: true
            };
            Object.defineProperty(exports3, "equals", {
              enumerable: true,
              get: function() {
                return _jasmineUtils.equals;
              }
            });
            Object.defineProperty(exports3, "isA", {
              enumerable: true,
              get: function() {
                return _jasmineUtils.isA;
              }
            });
            var _jasmineUtils = __webpack_require__2("./src/jasmineUtils.ts");
            var _utils = __webpack_require__2("./src/utils.ts");
            Object.keys(_utils).forEach(function(key) {
              if (key === "default" || key === "__esModule") return;
              if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
              if (key in exports3 && exports3[key] === _utils[key]) return;
              Object.defineProperty(exports3, key, {
                enumerable: true,
                get: function() {
                  return _utils[key];
                }
              });
            });
          })
        ),
        /***/
        "./src/jasmineUtils.ts": (
          /***/
          ((__unused_webpack_module, exports3) => {
            Object.defineProperty(exports3, "__esModule", {
              value: true
            });
            exports3.equals = void 0;
            exports3.isA = isA2;
            const equals2 = (a, b, customTesters, strictCheck) => {
              customTesters = customTesters || [];
              return eq(a, b, [], [], customTesters, strictCheck);
            };
            exports3.equals = equals2;
            function isAsymmetric(obj) {
              return !!obj && isA2("Function", obj.asymmetricMatch);
            }
            function asymmetricMatch(a, b) {
              const asymmetricA = isAsymmetric(a);
              const asymmetricB = isAsymmetric(b);
              if (asymmetricA && asymmetricB) {
                return void 0;
              }
              if (asymmetricA) {
                return a.asymmetricMatch(b);
              }
              if (asymmetricB) {
                return b.asymmetricMatch(a);
              }
            }
            function eq(a, b, aStack, bStack, customTesters, strictCheck) {
              let result = true;
              const asymmetricResult = asymmetricMatch(a, b);
              if (asymmetricResult !== void 0) {
                return asymmetricResult;
              }
              const testerContext = {
                equals: equals2
              };
              for (const item of customTesters) {
                const customTesterResult = item.call(testerContext, a, b, customTesters);
                if (customTesterResult !== void 0) {
                  return customTesterResult;
                }
              }
              if (a instanceof Error && b instanceof Error) {
                return a.message === b.message;
              }
              if (Object.is(a, b)) {
                return true;
              }
              if (a === null || b === null) {
                return false;
              }
              const className = Object.prototype.toString.call(a);
              if (className !== Object.prototype.toString.call(b)) {
                return false;
              }
              switch (className) {
                case "[object Boolean]":
                case "[object String]":
                case "[object Number]":
                  if (typeof a !== typeof b) {
                    return false;
                  } else if (typeof a !== "object" && typeof b !== "object") {
                    return false;
                  } else {
                    return Object.is(a.valueOf(), b.valueOf());
                  }
                case "[object Date]":
                  return +a === +b;
                // RegExps are compared by their source patterns and flags.
                case "[object RegExp]":
                  return a.source === b.source && a.flags === b.flags;
                // URLs are compared by their href property which contains the entire url string.
                case "[object URL]":
                  return a.href === b.href;
              }
              if (typeof a !== "object" || typeof b !== "object") {
                return false;
              }
              if (isDomNode(a) && isDomNode(b)) {
                return a.isEqualNode(b);
              }
              let length = aStack.length;
              while (length--) {
                if (aStack[length] === a) {
                  return bStack[length] === b;
                } else if (bStack[length] === b) {
                  return false;
                }
              }
              aStack.push(a);
              bStack.push(b);
              if (strictCheck && className === "[object Array]" && a.length !== b.length) {
                return false;
              }
              const aKeys = keys(a, hasKey);
              let key;
              const bKeys = keys(b, hasKey);
              if (!strictCheck) {
                for (let index = 0; index !== bKeys.length; ++index) {
                  key = bKeys[index];
                  if ((isAsymmetric(b[key]) || b[key] === void 0) && !hasKey(a, key)) {
                    aKeys.push(key);
                  }
                }
                for (let index = 0; index !== aKeys.length; ++index) {
                  key = aKeys[index];
                  if ((isAsymmetric(a[key]) || a[key] === void 0) && !hasKey(b, key)) {
                    bKeys.push(key);
                  }
                }
              }
              let size = aKeys.length;
              if (bKeys.length !== size) {
                return false;
              }
              while (size--) {
                key = aKeys[size];
                if (strictCheck) result = hasKey(b, key) && eq(a[key], b[key], aStack, bStack, customTesters, strictCheck);
                else result = (hasKey(b, key) || isAsymmetric(a[key]) || a[key] === void 0) && eq(a[key], b[key], aStack, bStack, customTesters, strictCheck);
                if (!result) {
                  return false;
                }
              }
              aStack.pop();
              bStack.pop();
              return result;
            }
            function keys(obj, hasKey2) {
              const keys2 = [];
              for (const key in obj) {
                if (hasKey2(obj, key)) {
                  keys2.push(key);
                }
              }
              return [...keys2, ...Object.getOwnPropertySymbols(obj).filter((symbol) => Object.getOwnPropertyDescriptor(obj, symbol).enumerable)];
            }
            function hasKey(obj, key) {
              return Object.prototype.hasOwnProperty.call(obj, key);
            }
            function isA2(typeName, value) {
              return Object.prototype.toString.apply(value) === `[object ${typeName}]`;
            }
            function isDomNode(obj) {
              return obj !== null && typeof obj === "object" && typeof obj.nodeType === "number" && typeof obj.nodeName === "string" && typeof obj.isEqualNode === "function";
            }
          })
        ),
        /***/
        "./src/utils.ts": (
          /***/
          ((__unused_webpack_module, exports3, __webpack_require__2) => {
            Object.defineProperty(exports3, "__esModule", {
              value: true
            });
            exports3.arrayBufferEquality = void 0;
            exports3.emptyObject = emptyObject2;
            exports3.typeEquality = exports3.subsetEquality = exports3.sparseArrayEquality = exports3.pathAsArray = exports3.partition = exports3.iterableEquality = exports3.isOneline = exports3.isError = exports3.getPath = exports3.getObjectSubset = exports3.getObjectKeys = void 0;
            var _getType = require_build();
            var _immutableUtils = __webpack_require__2("./src/immutableUtils.ts");
            var _jasmineUtils = __webpack_require__2("./src/jasmineUtils.ts");
            var Symbol2 = globalThis["jest-symbol-do-not-touch"] || globalThis.Symbol;
            const hasPropertyInObject = (object, key) => {
              const shouldTerminate = !object || typeof object !== "object" || object === Object.prototype;
              if (shouldTerminate) {
                return false;
              }
              return Object.prototype.hasOwnProperty.call(object, key) || hasPropertyInObject(Object.getPrototypeOf(object), key);
            };
            const getObjectKeys2 = (object) => {
              return [...Object.keys(object), ...Object.getOwnPropertySymbols(object).filter((s) => Object.getOwnPropertyDescriptor(object, s)?.enumerable)];
            };
            exports3.getObjectKeys = getObjectKeys2;
            const getPath2 = (object, propertyPath) => {
              if (!Array.isArray(propertyPath)) {
                propertyPath = pathAsArray2(propertyPath);
              }
              if (propertyPath.length > 0) {
                const lastProp = propertyPath.length === 1;
                const prop = propertyPath[0];
                const newObject = object[prop];
                if (!lastProp && (newObject === null || newObject === void 0)) {
                  return {
                    hasEndProp: false,
                    lastTraversedObject: object,
                    traversedPath: []
                  };
                }
                const result = getPath2(newObject, propertyPath.slice(1));
                if (result.lastTraversedObject === null) {
                  result.lastTraversedObject = object;
                }
                result.traversedPath.unshift(prop);
                if (lastProp) {
                  result.endPropIsDefined = !(0, _getType.isPrimitive)(object) && prop in object;
                  result.hasEndProp = newObject !== void 0 || result.endPropIsDefined;
                  if (!result.hasEndProp) {
                    result.traversedPath.shift();
                  }
                }
                return result;
              }
              return {
                lastTraversedObject: null,
                traversedPath: [],
                value: object
              };
            };
            exports3.getPath = getPath2;
            const getObjectSubset2 = (object, subset, customTesters = [], seenReferences = /* @__PURE__ */ new WeakMap()) => {
              if (Array.isArray(object)) {
                if (Array.isArray(subset) && subset.length === object.length) {
                  return subset.map((sub, i) => getObjectSubset2(object[i], sub, customTesters));
                }
              } else if (object instanceof Date) {
                return object;
              } else if (isObject2(object) && isObject2(subset)) {
                if ((0, _jasmineUtils.equals)(object, subset, [...customTesters, iterableEquality2, subsetEquality2])) {
                  return subset;
                }
                const trimmed = {};
                seenReferences.set(object, trimmed);
                for (const key of getObjectKeys2(object).filter((key2) => hasPropertyInObject(subset, key2))) {
                  trimmed[key] = seenReferences.has(object[key]) ? seenReferences.get(object[key]) : getObjectSubset2(object[key], subset[key], customTesters, seenReferences);
                }
                if (getObjectKeys2(trimmed).length > 0) {
                  return trimmed;
                }
              }
              return object;
            };
            exports3.getObjectSubset = getObjectSubset2;
            const IteratorSymbol = Symbol2.iterator;
            const hasIterator = (object) => !!(object != null && object[IteratorSymbol]);
            const iterableEquality2 = (a, b, customTesters = [], aStack = [], bStack = []) => {
              if (typeof a !== "object" || typeof b !== "object" || Array.isArray(a) || Array.isArray(b) || ArrayBuffer.isView(a) || ArrayBuffer.isView(b) || !hasIterator(a) || !hasIterator(b)) {
                return void 0;
              }
              if (a.constructor !== b.constructor) {
                return false;
              }
              let length = aStack.length;
              while (length--) {
                if (aStack[length] === a) {
                  return bStack[length] === b;
                }
              }
              aStack.push(a);
              bStack.push(b);
              const iterableEqualityWithStack = (a2, b2) => iterableEquality2(a2, b2, [...filteredCustomTesters], [...aStack], [...bStack]);
              const filteredCustomTesters = [...customTesters.filter((t) => t !== iterableEquality2), iterableEqualityWithStack];
              if (a.size !== void 0) {
                if (a.size !== b.size) {
                  return false;
                } else if ((0, _jasmineUtils.isA)("Set", a) || (0, _immutableUtils.isImmutableUnorderedSet)(a)) {
                  let allFound = true;
                  for (const aValue of a) {
                    if (!b.has(aValue)) {
                      let has = false;
                      for (const bValue of b) {
                        const isEqual = (0, _jasmineUtils.equals)(aValue, bValue, filteredCustomTesters);
                        if (isEqual === true) {
                          has = true;
                        }
                      }
                      if (has === false) {
                        allFound = false;
                        break;
                      }
                    }
                  }
                  aStack.pop();
                  bStack.pop();
                  return allFound;
                } else if ((0, _jasmineUtils.isA)("Map", a) || (0, _immutableUtils.isImmutableUnorderedKeyed)(a)) {
                  let allFound = true;
                  for (const aEntry of a) {
                    if (!b.has(aEntry[0]) || !(0, _jasmineUtils.equals)(aEntry[1], b.get(aEntry[0]), filteredCustomTesters)) {
                      let has = false;
                      for (const bEntry of b) {
                        const matchedKey = (0, _jasmineUtils.equals)(aEntry[0], bEntry[0], filteredCustomTesters);
                        let matchedValue = false;
                        if (matchedKey === true) {
                          matchedValue = (0, _jasmineUtils.equals)(aEntry[1], bEntry[1], filteredCustomTesters);
                        }
                        if (matchedValue === true) {
                          has = true;
                        }
                      }
                      if (has === false) {
                        allFound = false;
                        break;
                      }
                    }
                  }
                  aStack.pop();
                  bStack.pop();
                  return allFound;
                }
              }
              const bIterator = b[IteratorSymbol]();
              for (const aValue of a) {
                const nextB = bIterator.next();
                if (nextB.done || !(0, _jasmineUtils.equals)(aValue, nextB.value, filteredCustomTesters)) {
                  return false;
                }
              }
              if (!bIterator.next().done) {
                return false;
              }
              if (!(0, _immutableUtils.isImmutableList)(a) && !(0, _immutableUtils.isImmutableOrderedKeyed)(a) && !(0, _immutableUtils.isImmutableOrderedSet)(a) && !(0, _immutableUtils.isImmutableRecord)(a)) {
                const aEntries = entries(a);
                const bEntries = entries(b);
                if (!(0, _jasmineUtils.equals)(aEntries, bEntries)) {
                  return false;
                }
              }
              aStack.pop();
              bStack.pop();
              return true;
            };
            exports3.iterableEquality = iterableEquality2;
            const entries = (obj) => {
              if (!isObject2(obj)) return [];
              const symbolProperties = Object.getOwnPropertySymbols(obj).filter((key) => key !== Symbol2.iterator).map((key) => [key, obj[key]]);
              return [...symbolProperties, ...Object.entries(obj)];
            };
            const isObject2 = (a) => a !== null && typeof a === "object";
            const isObjectWithKeys = (a) => isObject2(a) && !(a instanceof Error) && !Array.isArray(a) && !(a instanceof Date) && !(a instanceof Set) && !(a instanceof Map);
            const subsetEquality2 = (object, subset, customTesters = []) => {
              const filteredCustomTesters = customTesters.filter((t) => t !== subsetEquality2);
              const subsetEqualityWithContext = (seenReferences = /* @__PURE__ */ new WeakMap()) => (object2, subset2) => {
                if (!isObjectWithKeys(subset2)) {
                  return void 0;
                }
                if (seenReferences.has(subset2)) return void 0;
                seenReferences.set(subset2, true);
                const matchResult = getObjectKeys2(subset2).every((key) => {
                  if (isObjectWithKeys(subset2[key])) {
                    if (seenReferences.has(subset2[key])) {
                      return (0, _jasmineUtils.equals)(object2[key], subset2[key], filteredCustomTesters);
                    }
                  }
                  const result = object2 != null && hasPropertyInObject(object2, key) && (0, _jasmineUtils.equals)(object2[key], subset2[key], [...filteredCustomTesters, subsetEqualityWithContext(seenReferences)]);
                  seenReferences.delete(subset2[key]);
                  return result;
                });
                seenReferences.delete(subset2);
                return matchResult;
              };
              return subsetEqualityWithContext()(object, subset);
            };
            exports3.subsetEquality = subsetEquality2;
            const typeEquality2 = (a, b) => {
              if (a == null || b == null || a.constructor === b.constructor || // Since Jest globals are different from Node globals,
              // constructors are different even between arrays when comparing properties of mock objects.
              // Both of them should be able to compare correctly when they are array-to-array.
              // https://github.com/jestjs/jest/issues/2549
              Array.isArray(a) && Array.isArray(b)) {
                return void 0;
              }
              return false;
            };
            exports3.typeEquality = typeEquality2;
            const arrayBufferEquality2 = (a, b) => {
              let dataViewA = a;
              let dataViewB = b;
              if (isArrayBuffer(a) && isArrayBuffer(b)) {
                dataViewA = new DataView(a);
                dataViewB = new DataView(b);
              } else if (ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
                dataViewA = new DataView(a.buffer, a.byteOffset, a.byteLength);
                dataViewB = new DataView(b.buffer, b.byteOffset, b.byteLength);
              }
              if (!(dataViewA instanceof DataView && dataViewB instanceof DataView)) {
                return void 0;
              }
              if (dataViewA.byteLength !== dataViewB.byteLength) {
                return false;
              }
              for (let i = 0; i < dataViewA.byteLength; i++) {
                if (dataViewA.getUint8(i) !== dataViewB.getUint8(i)) {
                  return false;
                }
              }
              return true;
            };
            exports3.arrayBufferEquality = arrayBufferEquality2;
            function isArrayBuffer(obj) {
              return Object.prototype.toString.call(obj) === "[object ArrayBuffer]";
            }
            const sparseArrayEquality2 = (a, b, customTesters = []) => {
              if (!Array.isArray(a) || !Array.isArray(b)) {
                return void 0;
              }
              const aKeys = Object.keys(a);
              const bKeys = Object.keys(b);
              return (0, _jasmineUtils.equals)(a, b, customTesters.filter((t) => t !== sparseArrayEquality2), true) && (0, _jasmineUtils.equals)(aKeys, bKeys);
            };
            exports3.sparseArrayEquality = sparseArrayEquality2;
            const partition2 = (items, predicate) => {
              const result = [[], []];
              for (const item of items) result[predicate(item) ? 0 : 1].push(item);
              return result;
            };
            exports3.partition = partition2;
            const pathAsArray2 = (propertyPath) => {
              const properties = [];
              if (propertyPath === "") {
                properties.push("");
                return properties;
              }
              const pattern = new RegExp("[^.[\\]]+|(?=(?:\\.)(?:\\.|$))", "g");
              if (propertyPath[0] === ".") {
                properties.push("");
              }
              propertyPath.replaceAll(pattern, (match) => {
                properties.push(match);
                return match;
              });
              return properties;
            };
            exports3.pathAsArray = pathAsArray2;
            const isError2 = (value) => {
              switch (Object.prototype.toString.call(value)) {
                case "[object Error]":
                case "[object Exception]":
                case "[object DOMException]":
                  return true;
                default:
                  return value instanceof Error;
              }
            };
            exports3.isError = isError2;
            function emptyObject2(obj) {
              return obj && typeof obj === "object" ? Object.keys(obj).length === 0 : false;
            }
            const MULTILINE_REGEXP = /[\n\r]/;
            const isOneline2 = (expected, received) => typeof expected === "string" && typeof received === "string" && (!MULTILINE_REGEXP.test(expected) || !MULTILINE_REGEXP.test(received));
            exports3.isOneline = isOneline2;
          })
        )
        /******/
      };
      var __webpack_module_cache__ = {};
      function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) {
          return cachedModule.exports;
        }
        var module3 = __webpack_module_cache__[moduleId] = {
          /******/
          // no module.id needed
          /******/
          // no module.loaded needed
          /******/
          exports: {}
          /******/
        };
        __webpack_modules__[moduleId](module3, module3.exports, __webpack_require__);
        return module3.exports;
      }
      var __webpack_exports__ = __webpack_require__("./src/index.ts");
      module2.exports = __webpack_exports__;
    })();
  }
});

// node_modules/pretty-format/node_modules/react-is/cjs/react-is.production.min.js
var require_react_is_production_min = __commonJS({
  "node_modules/pretty-format/node_modules/react-is/cjs/react-is.production.min.js"(exports2) {
    "use strict";
    var b = Symbol.for("react.element");
    var c = Symbol.for("react.portal");
    var d = Symbol.for("react.fragment");
    var e = Symbol.for("react.strict_mode");
    var f = Symbol.for("react.profiler");
    var g = Symbol.for("react.provider");
    var h = Symbol.for("react.context");
    var k = Symbol.for("react.server_context");
    var l = Symbol.for("react.forward_ref");
    var m = Symbol.for("react.suspense");
    var n = Symbol.for("react.suspense_list");
    var p = Symbol.for("react.memo");
    var q = Symbol.for("react.lazy");
    var t = Symbol.for("react.offscreen");
    var u;
    u = Symbol.for("react.module.reference");
    function v(a) {
      if ("object" === typeof a && null !== a) {
        var r = a.$$typeof;
        switch (r) {
          case b:
            switch (a = a.type, a) {
              case d:
              case f:
              case e:
              case m:
              case n:
                return a;
              default:
                switch (a = a && a.$$typeof, a) {
                  case k:
                  case h:
                  case l:
                  case q:
                  case p:
                  case g:
                    return a;
                  default:
                    return r;
                }
            }
          case c:
            return r;
        }
      }
    }
    exports2.ContextConsumer = h;
    exports2.ContextProvider = g;
    exports2.Element = b;
    exports2.ForwardRef = l;
    exports2.Fragment = d;
    exports2.Lazy = q;
    exports2.Memo = p;
    exports2.Portal = c;
    exports2.Profiler = f;
    exports2.StrictMode = e;
    exports2.Suspense = m;
    exports2.SuspenseList = n;
    exports2.isAsyncMode = function() {
      return false;
    };
    exports2.isConcurrentMode = function() {
      return false;
    };
    exports2.isContextConsumer = function(a) {
      return v(a) === h;
    };
    exports2.isContextProvider = function(a) {
      return v(a) === g;
    };
    exports2.isElement = function(a) {
      return "object" === typeof a && null !== a && a.$$typeof === b;
    };
    exports2.isForwardRef = function(a) {
      return v(a) === l;
    };
    exports2.isFragment = function(a) {
      return v(a) === d;
    };
    exports2.isLazy = function(a) {
      return v(a) === q;
    };
    exports2.isMemo = function(a) {
      return v(a) === p;
    };
    exports2.isPortal = function(a) {
      return v(a) === c;
    };
    exports2.isProfiler = function(a) {
      return v(a) === f;
    };
    exports2.isStrictMode = function(a) {
      return v(a) === e;
    };
    exports2.isSuspense = function(a) {
      return v(a) === m;
    };
    exports2.isSuspenseList = function(a) {
      return v(a) === n;
    };
    exports2.isValidElementType = function(a) {
      return "string" === typeof a || "function" === typeof a || a === d || a === f || a === e || a === m || a === n || a === t || "object" === typeof a && null !== a && (a.$$typeof === q || a.$$typeof === p || a.$$typeof === g || a.$$typeof === h || a.$$typeof === l || a.$$typeof === u || void 0 !== a.getModuleId) ? true : false;
    };
    exports2.typeOf = v;
  }
});

// node_modules/pretty-format/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/pretty-format/node_modules/react-is/cjs/react-is.development.js"(exports2) {
    "use strict";
    if (process.env.NODE_ENV !== "production") {
      (function() {
        "use strict";
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_SERVER_CONTEXT_TYPE = Symbol.for("react.server_context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                  case REACT_SUSPENSE_LIST_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_SERVER_CONTEXT_TYPE:
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var SuspenseList = REACT_SUSPENSE_LIST_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        var hasWarnedAboutDeprecatedIsConcurrentMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isConcurrentMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
              hasWarnedAboutDeprecatedIsConcurrentMode = true;
              console["warn"]("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        function isSuspenseList(object) {
          return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
        }
        exports2.ContextConsumer = ContextConsumer;
        exports2.ContextProvider = ContextProvider;
        exports2.Element = Element;
        exports2.ForwardRef = ForwardRef;
        exports2.Fragment = Fragment;
        exports2.Lazy = Lazy;
        exports2.Memo = Memo;
        exports2.Portal = Portal;
        exports2.Profiler = Profiler;
        exports2.StrictMode = StrictMode;
        exports2.Suspense = Suspense;
        exports2.SuspenseList = SuspenseList;
        exports2.isAsyncMode = isAsyncMode;
        exports2.isConcurrentMode = isConcurrentMode;
        exports2.isContextConsumer = isContextConsumer;
        exports2.isContextProvider = isContextProvider;
        exports2.isElement = isElement;
        exports2.isForwardRef = isForwardRef;
        exports2.isFragment = isFragment;
        exports2.isLazy = isLazy;
        exports2.isMemo = isMemo;
        exports2.isPortal = isPortal;
        exports2.isProfiler = isProfiler;
        exports2.isStrictMode = isStrictMode;
        exports2.isSuspense = isSuspense;
        exports2.isSuspenseList = isSuspenseList;
        exports2.isValidElementType = isValidElementType;
        exports2.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/pretty-format/node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/pretty-format/node_modules/react-is/index.js"(exports2, module2) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module2.exports = require_react_is_production_min();
    } else {
      module2.exports = require_react_is_development();
    }
  }
});

// node_modules/pretty-format/node_modules/ansi-styles/index.js
var require_ansi_styles = __commonJS({
  "node_modules/pretty-format/node_modules/ansi-styles/index.js"(exports2, module2) {
    "use strict";
    var ANSI_BACKGROUND_OFFSET = 10;
    var wrapAnsi256 = (offset = 0) => (code) => `\x1B[${38 + offset};5;${code}m`;
    var wrapAnsi16m = (offset = 0) => (red, green, blue) => `\x1B[${38 + offset};2;${red};${green};${blue}m`;
    function assembleStyles() {
      const codes = /* @__PURE__ */ new Map();
      const styles = {
        modifier: {
          reset: [0, 0],
          // 21 isn't widely supported and 22 does the same thing
          bold: [1, 22],
          dim: [2, 22],
          italic: [3, 23],
          underline: [4, 24],
          overline: [53, 55],
          inverse: [7, 27],
          hidden: [8, 28],
          strikethrough: [9, 29]
        },
        color: {
          black: [30, 39],
          red: [31, 39],
          green: [32, 39],
          yellow: [33, 39],
          blue: [34, 39],
          magenta: [35, 39],
          cyan: [36, 39],
          white: [37, 39],
          // Bright color
          blackBright: [90, 39],
          redBright: [91, 39],
          greenBright: [92, 39],
          yellowBright: [93, 39],
          blueBright: [94, 39],
          magentaBright: [95, 39],
          cyanBright: [96, 39],
          whiteBright: [97, 39]
        },
        bgColor: {
          bgBlack: [40, 49],
          bgRed: [41, 49],
          bgGreen: [42, 49],
          bgYellow: [43, 49],
          bgBlue: [44, 49],
          bgMagenta: [45, 49],
          bgCyan: [46, 49],
          bgWhite: [47, 49],
          // Bright color
          bgBlackBright: [100, 49],
          bgRedBright: [101, 49],
          bgGreenBright: [102, 49],
          bgYellowBright: [103, 49],
          bgBlueBright: [104, 49],
          bgMagentaBright: [105, 49],
          bgCyanBright: [106, 49],
          bgWhiteBright: [107, 49]
        }
      };
      styles.color.gray = styles.color.blackBright;
      styles.bgColor.bgGray = styles.bgColor.bgBlackBright;
      styles.color.grey = styles.color.blackBright;
      styles.bgColor.bgGrey = styles.bgColor.bgBlackBright;
      for (const [groupName, group] of Object.entries(styles)) {
        for (const [styleName, style] of Object.entries(group)) {
          styles[styleName] = {
            open: `\x1B[${style[0]}m`,
            close: `\x1B[${style[1]}m`
          };
          group[styleName] = styles[styleName];
          codes.set(style[0], style[1]);
        }
        Object.defineProperty(styles, groupName, {
          value: group,
          enumerable: false
        });
      }
      Object.defineProperty(styles, "codes", {
        value: codes,
        enumerable: false
      });
      styles.color.close = "\x1B[39m";
      styles.bgColor.close = "\x1B[49m";
      styles.color.ansi256 = wrapAnsi256();
      styles.color.ansi16m = wrapAnsi16m();
      styles.bgColor.ansi256 = wrapAnsi256(ANSI_BACKGROUND_OFFSET);
      styles.bgColor.ansi16m = wrapAnsi16m(ANSI_BACKGROUND_OFFSET);
      Object.defineProperties(styles, {
        rgbToAnsi256: {
          value: (red, green, blue) => {
            if (red === green && green === blue) {
              if (red < 8) {
                return 16;
              }
              if (red > 248) {
                return 231;
              }
              return Math.round((red - 8) / 247 * 24) + 232;
            }
            return 16 + 36 * Math.round(red / 255 * 5) + 6 * Math.round(green / 255 * 5) + Math.round(blue / 255 * 5);
          },
          enumerable: false
        },
        hexToRgb: {
          value: (hex) => {
            const matches = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(hex.toString(16));
            if (!matches) {
              return [0, 0, 0];
            }
            let { colorString } = matches.groups;
            if (colorString.length === 3) {
              colorString = colorString.split("").map((character) => character + character).join("");
            }
            const integer = Number.parseInt(colorString, 16);
            return [
              integer >> 16 & 255,
              integer >> 8 & 255,
              integer & 255
            ];
          },
          enumerable: false
        },
        hexToAnsi256: {
          value: (hex) => styles.rgbToAnsi256(...styles.hexToRgb(hex)),
          enumerable: false
        }
      });
      return styles;
    }
    Object.defineProperty(module2, "exports", {
      enumerable: true,
      get: assembleStyles
    });
  }
});

// node_modules/pretty-format/build/index.js
var require_build3 = __commonJS({
  "node_modules/pretty-format/build/index.js"(exports2, module2) {
    (() => {
      "use strict";
      var __webpack_modules__ = {
        /***/
        "./src/collections.ts": (
          /***/
          ((__unused_webpack_module, exports3) => {
            Object.defineProperty(exports3, "__esModule", {
              value: true
            });
            exports3.printIteratorEntries = printIteratorEntries;
            exports3.printIteratorValues = printIteratorValues;
            exports3.printListItems = printListItems;
            exports3.printObjectProperties = printObjectProperties;
            const getKeysOfEnumerableProperties = (object, compareKeys) => {
              const rawKeys = Object.keys(object);
              const keys = compareKeys === null ? rawKeys : rawKeys.sort(compareKeys);
              if (Object.getOwnPropertySymbols) {
                for (const symbol of Object.getOwnPropertySymbols(object)) {
                  if (Object.getOwnPropertyDescriptor(object, symbol).enumerable) {
                    keys.push(symbol);
                  }
                }
              }
              return keys;
            };
            function printIteratorEntries(iterator, config, indentation, depth, refs, printer, separator = ": ") {
              let result = "";
              let width = 0;
              let current = iterator.next();
              if (!current.done) {
                result += config.spacingOuter;
                const indentationNext = indentation + config.indent;
                while (!current.done) {
                  result += indentationNext;
                  if (width++ === config.maxWidth) {
                    result += "\u2026";
                    break;
                  }
                  const name = printer(current.value[0], config, indentationNext, depth, refs);
                  const value = printer(current.value[1], config, indentationNext, depth, refs);
                  result += name + separator + value;
                  current = iterator.next();
                  if (!current.done) {
                    result += `,${config.spacingInner}`;
                  } else if (!config.min) {
                    result += ",";
                  }
                }
                result += config.spacingOuter + indentation;
              }
              return result;
            }
            function printIteratorValues(iterator, config, indentation, depth, refs, printer) {
              let result = "";
              let width = 0;
              let current = iterator.next();
              if (!current.done) {
                result += config.spacingOuter;
                const indentationNext = indentation + config.indent;
                while (!current.done) {
                  result += indentationNext;
                  if (width++ === config.maxWidth) {
                    result += "\u2026";
                    break;
                  }
                  result += printer(current.value, config, indentationNext, depth, refs);
                  current = iterator.next();
                  if (!current.done) {
                    result += `,${config.spacingInner}`;
                  } else if (!config.min) {
                    result += ",";
                  }
                }
                result += config.spacingOuter + indentation;
              }
              return result;
            }
            function printListItems(list, config, indentation, depth, refs, printer) {
              let result = "";
              list = list instanceof ArrayBuffer ? new DataView(list) : list;
              const isDataView = (l) => l instanceof DataView;
              const length = isDataView(list) ? list.byteLength : list.length;
              if (length > 0) {
                result += config.spacingOuter;
                const indentationNext = indentation + config.indent;
                for (let i = 0; i < length; i++) {
                  result += indentationNext;
                  if (i === config.maxWidth) {
                    result += "\u2026";
                    break;
                  }
                  if (isDataView(list) || i in list) {
                    result += printer(isDataView(list) ? list.getInt8(i) : list[i], config, indentationNext, depth, refs);
                  }
                  if (i < length - 1) {
                    result += `,${config.spacingInner}`;
                  } else if (!config.min) {
                    result += ",";
                  }
                }
                result += config.spacingOuter + indentation;
              }
              return result;
            }
            function printObjectProperties(val, config, indentation, depth, refs, printer) {
              let result = "";
              const keys = getKeysOfEnumerableProperties(val, config.compareKeys);
              if (keys.length > 0) {
                result += config.spacingOuter;
                const indentationNext = indentation + config.indent;
                for (let i = 0; i < keys.length; i++) {
                  const key = keys[i];
                  const name = printer(key, config, indentationNext, depth, refs);
                  const value = printer(val[key], config, indentationNext, depth, refs);
                  result += `${indentationNext + name}: ${value}`;
                  if (i < keys.length - 1) {
                    result += `,${config.spacingInner}`;
                  } else if (!config.min) {
                    result += ",";
                  }
                }
                result += config.spacingOuter + indentation;
              }
              return result;
            }
          })
        ),
        /***/
        "./src/plugins/AsymmetricMatcher.ts": (
          /***/
          ((__unused_webpack_module, exports3, __webpack_require__2) => {
            Object.defineProperty(exports3, "__esModule", {
              value: true
            });
            exports3.test = exports3.serialize = exports3["default"] = void 0;
            var _collections = __webpack_require__2("./src/collections.ts");
            var Symbol2 = globalThis["jest-symbol-do-not-touch"] || globalThis.Symbol;
            const asymmetricMatcher = typeof Symbol2 === "function" && Symbol2.for ? Symbol2.for("jest.asymmetricMatcher") : 1267621;
            const SPACE = " ";
            const serialize = (val, config, indentation, depth, refs, printer) => {
              const stringedValue = val.toString();
              if (stringedValue === "ArrayContaining" || stringedValue === "ArrayNotContaining") {
                if (++depth > config.maxDepth) {
                  return `[${stringedValue}]`;
                }
                return `${stringedValue + SPACE}[${(0, _collections.printListItems)(val.sample, config, indentation, depth, refs, printer)}]`;
              }
              if (stringedValue === "ObjectContaining" || stringedValue === "ObjectNotContaining") {
                if (++depth > config.maxDepth) {
                  return `[${stringedValue}]`;
                }
                return `${stringedValue + SPACE}{${(0, _collections.printObjectProperties)(val.sample, config, indentation, depth, refs, printer)}}`;
              }
              if (stringedValue === "StringMatching" || stringedValue === "StringNotMatching") {
                return stringedValue + SPACE + printer(val.sample, config, indentation, depth, refs);
              }
              if (stringedValue === "StringContaining" || stringedValue === "StringNotContaining") {
                return stringedValue + SPACE + printer(val.sample, config, indentation, depth, refs);
              }
              if (stringedValue === "ArrayOf" || stringedValue === "NotArrayOf") {
                if (++depth > config.maxDepth) {
                  return `[${stringedValue}]`;
                }
                return `${stringedValue + SPACE}${printer(val.sample, config, indentation, depth, refs)}`;
              }
              if (typeof val.toAsymmetricMatcher !== "function") {
                throw new TypeError(`Asymmetric matcher ${val.constructor.name} does not implement toAsymmetricMatcher()`);
              }
              return val.toAsymmetricMatcher();
            };
            exports3.serialize = serialize;
            const test = (val) => val && val.$$typeof === asymmetricMatcher;
            exports3.test = test;
            const plugin = {
              serialize,
              test
            };
            var _default = exports3["default"] = plugin;
          })
        ),
        /***/
        "./src/plugins/DOMCollection.ts": (
          /***/
          ((__unused_webpack_module, exports3, __webpack_require__2) => {
            Object.defineProperty(exports3, "__esModule", {
              value: true
            });
            exports3.test = exports3.serialize = exports3["default"] = void 0;
            var _collections = __webpack_require__2("./src/collections.ts");
            const SPACE = " ";
            const OBJECT_NAMES = /* @__PURE__ */ new Set(["DOMStringMap", "NamedNodeMap"]);
            const ARRAY_REGEXP = /^(HTML\w*Collection|NodeList)$/;
            const testName = (name) => OBJECT_NAMES.has(name) || ARRAY_REGEXP.test(name);
            const test = (val) => val && val.constructor && !!val.constructor.name && testName(val.constructor.name);
            exports3.test = test;
            const isNamedNodeMap = (collection) => collection.constructor.name === "NamedNodeMap";
            const serialize = (collection, config, indentation, depth, refs, printer) => {
              const name = collection.constructor.name;
              if (++depth > config.maxDepth) {
                return `[${name}]`;
              }
              return (config.min ? "" : name + SPACE) + (OBJECT_NAMES.has(name) ? `{${(0, _collections.printObjectProperties)(isNamedNodeMap(collection) ? [...collection].reduce((props, attribute) => {
                props[attribute.name] = attribute.value;
                return props;
              }, {}) : {
                ...collection
              }, config, indentation, depth, refs, printer)}}` : `[${(0, _collections.printListItems)([...collection], config, indentation, depth, refs, printer)}]`);
            };
            exports3.serialize = serialize;
            const plugin = {
              serialize,
              test
            };
            var _default = exports3["default"] = plugin;
          })
        ),
        /***/
        "./src/plugins/DOMElement.ts": (
          /***/
          ((__unused_webpack_module, exports3, __webpack_require__2) => {
            Object.defineProperty(exports3, "__esModule", {
              value: true
            });
            exports3.test = exports3.serialize = exports3["default"] = void 0;
            var _markup = __webpack_require__2("./src/plugins/lib/markup.ts");
            const ELEMENT_NODE = 1;
            const TEXT_NODE = 3;
            const COMMENT_NODE = 8;
            const FRAGMENT_NODE = 11;
            const ELEMENT_REGEXP = /^((HTML|SVG)\w*)?Element$/;
            const testHasAttribute = (val) => {
              try {
                return typeof val.hasAttribute === "function" && val.hasAttribute("is");
              } catch {
                return false;
              }
            };
            const isCustomElement = (val) => {
              const tagName = val?.tagName;
              return typeof tagName === "string" && tagName.includes("-") || testHasAttribute(val);
            };
            const testNode = (val) => {
              const constructorName = val.constructor.name;
              const {
                nodeType
              } = val;
              return nodeType === ELEMENT_NODE && (ELEMENT_REGEXP.test(constructorName) || isCustomElement(val)) || nodeType === TEXT_NODE && constructorName === "Text" || nodeType === COMMENT_NODE && constructorName === "Comment" || nodeType === FRAGMENT_NODE && constructorName === "DocumentFragment";
            };
            const test = (val) => (val?.constructor?.name || isCustomElement(val)) && testNode(val);
            exports3.test = test;
            function nodeIsText(node) {
              return node.nodeType === TEXT_NODE;
            }
            function nodeIsComment(node) {
              return node.nodeType === COMMENT_NODE;
            }
            function nodeIsFragment(node) {
              return node.nodeType === FRAGMENT_NODE;
            }
            const serialize = (node, config, indentation, depth, refs, printer) => {
              if (nodeIsText(node)) {
                return (0, _markup.printText)(node.data, config);
              }
              if (nodeIsComment(node)) {
                return (0, _markup.printComment)(node.data, config);
              }
              const type = nodeIsFragment(node) ? "DocumentFragment" : node.tagName.toLowerCase();
              if (++depth > config.maxDepth) {
                return (0, _markup.printElementAsLeaf)(type, config);
              }
              return (0, _markup.printElement)(type, (0, _markup.printProps)(nodeIsFragment(node) ? [] : Array.from(node.attributes, (attr) => attr.name).sort(), nodeIsFragment(node) ? {} : [...node.attributes].reduce((props, attribute) => {
                props[attribute.name] = attribute.value;
                return props;
              }, {}), config, indentation + config.indent, depth, refs, printer), (0, _markup.printChildren)(Array.prototype.slice.call(node.childNodes || node.children), config, indentation + config.indent, depth, refs, printer), config, indentation);
            };
            exports3.serialize = serialize;
            const plugin = {
              serialize,
              test
            };
            var _default = exports3["default"] = plugin;
          })
        ),
        /***/
        "./src/plugins/Immutable.ts": (
          /***/
          ((__unused_webpack_module, exports3, __webpack_require__2) => {
            Object.defineProperty(exports3, "__esModule", {
              value: true
            });
            exports3.test = exports3.serialize = exports3["default"] = void 0;
            var _collections = __webpack_require__2("./src/collections.ts");
            const IS_ITERABLE_SENTINEL = "@@__IMMUTABLE_ITERABLE__@@";
            const IS_LIST_SENTINEL = "@@__IMMUTABLE_LIST__@@";
            const IS_KEYED_SENTINEL = "@@__IMMUTABLE_KEYED__@@";
            const IS_MAP_SENTINEL = "@@__IMMUTABLE_MAP__@@";
            const IS_ORDERED_SENTINEL = "@@__IMMUTABLE_ORDERED__@@";
            const IS_RECORD_SENTINEL = "@@__IMMUTABLE_RECORD__@@";
            const IS_SEQ_SENTINEL = "@@__IMMUTABLE_SEQ__@@";
            const IS_SET_SENTINEL = "@@__IMMUTABLE_SET__@@";
            const IS_STACK_SENTINEL = "@@__IMMUTABLE_STACK__@@";
            const getImmutableName = (name) => `Immutable.${name}`;
            const printAsLeaf = (name) => `[${name}]`;
            const SPACE = " ";
            const LAZY = "\u2026";
            const printImmutableEntries = (val, config, indentation, depth, refs, printer, type) => ++depth > config.maxDepth ? printAsLeaf(getImmutableName(type)) : `${getImmutableName(type) + SPACE}{${(0, _collections.printIteratorEntries)(val.entries(), config, indentation, depth, refs, printer)}}`;
            function getRecordEntries(val) {
              let i = 0;
              return {
                next() {
                  if (i < val._keys.length) {
                    const key = val._keys[i++];
                    return {
                      done: false,
                      value: [key, val.get(key)]
                    };
                  }
                  return {
                    done: true,
                    value: void 0
                  };
                }
              };
            }
            const printImmutableRecord = (val, config, indentation, depth, refs, printer) => {
              const name = getImmutableName(val._name || "Record");
              return ++depth > config.maxDepth ? printAsLeaf(name) : `${name + SPACE}{${(0, _collections.printIteratorEntries)(getRecordEntries(val), config, indentation, depth, refs, printer)}}`;
            };
            const printImmutableSeq = (val, config, indentation, depth, refs, printer) => {
              const name = getImmutableName("Seq");
              if (++depth > config.maxDepth) {
                return printAsLeaf(name);
              }
              if (val[IS_KEYED_SENTINEL]) {
                return `${name + SPACE}{${// from Immutable collection of entries or from ECMAScript object
                val._iter || val._object ? (0, _collections.printIteratorEntries)(val.entries(), config, indentation, depth, refs, printer) : LAZY}}`;
              }
              return `${name + SPACE}[${val._iter || // from Immutable collection of values
              val._array || // from ECMAScript array
              val._collection || // from ECMAScript collection in immutable v4
              val._iterable ? (0, _collections.printIteratorValues)(val.values(), config, indentation, depth, refs, printer) : LAZY}]`;
            };
            const printImmutableValues = (val, config, indentation, depth, refs, printer, type) => ++depth > config.maxDepth ? printAsLeaf(getImmutableName(type)) : `${getImmutableName(type) + SPACE}[${(0, _collections.printIteratorValues)(val.values(), config, indentation, depth, refs, printer)}]`;
            const serialize = (val, config, indentation, depth, refs, printer) => {
              if (val[IS_MAP_SENTINEL]) {
                return printImmutableEntries(val, config, indentation, depth, refs, printer, val[IS_ORDERED_SENTINEL] ? "OrderedMap" : "Map");
              }
              if (val[IS_LIST_SENTINEL]) {
                return printImmutableValues(val, config, indentation, depth, refs, printer, "List");
              }
              if (val[IS_SET_SENTINEL]) {
                return printImmutableValues(val, config, indentation, depth, refs, printer, val[IS_ORDERED_SENTINEL] ? "OrderedSet" : "Set");
              }
              if (val[IS_STACK_SENTINEL]) {
                return printImmutableValues(val, config, indentation, depth, refs, printer, "Stack");
              }
              if (val[IS_SEQ_SENTINEL]) {
                return printImmutableSeq(val, config, indentation, depth, refs, printer);
              }
              return printImmutableRecord(val, config, indentation, depth, refs, printer);
            };
            exports3.serialize = serialize;
            const test = (val) => val && (val[IS_ITERABLE_SENTINEL] === true || val[IS_RECORD_SENTINEL] === true);
            exports3.test = test;
            const plugin = {
              serialize,
              test
            };
            var _default = exports3["default"] = plugin;
          })
        ),
        /***/
        "./src/plugins/ReactElement.ts": (
          /***/
          ((__unused_webpack_module, exports3, __webpack_require__2) => {
            Object.defineProperty(exports3, "__esModule", {
              value: true
            });
            exports3.test = exports3.serialize = exports3["default"] = void 0;
            var ReactIs = _interopRequireWildcard(require_react_is());
            var _markup = __webpack_require__2("./src/plugins/lib/markup.ts");
            function _interopRequireWildcard(e, t) {
              if ("function" == typeof WeakMap) var r = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
              return (_interopRequireWildcard = function(e2, t2) {
                if (!t2 && e2 && e2.__esModule) return e2;
                var o, i, f = { __proto__: null, default: e2 };
                if (null === e2 || "object" != typeof e2 && "function" != typeof e2) return f;
                if (o = t2 ? n : r) {
                  if (o.has(e2)) return o.get(e2);
                  o.set(e2, f);
                }
                for (const t3 in e2) "default" !== t3 && {}.hasOwnProperty.call(e2, t3) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e2, t3)) && (i.get || i.set) ? o(f, t3, i) : f[t3] = e2[t3]);
                return f;
              })(e, t);
            }
            const getChildren = (arg, children = []) => {
              if (Array.isArray(arg)) {
                for (const item of arg) {
                  getChildren(item, children);
                }
              } else if (arg != null && arg !== false && arg !== "") {
                children.push(arg);
              }
              return children;
            };
            const getType2 = (element) => {
              const type = element.type;
              if (typeof type === "string") {
                return type;
              }
              if (typeof type === "function") {
                return type.displayName || type.name || "Unknown";
              }
              if (ReactIs.isFragment(element)) {
                return "React.Fragment";
              }
              if (ReactIs.isSuspense(element)) {
                return "React.Suspense";
              }
              if (typeof type === "object" && type !== null) {
                if (ReactIs.isContextProvider(element)) {
                  return "Context.Provider";
                }
                if (ReactIs.isContextConsumer(element)) {
                  return "Context.Consumer";
                }
                if (ReactIs.isForwardRef(element)) {
                  if (type.displayName) {
                    return type.displayName;
                  }
                  const functionName = type.render.displayName || type.render.name || "";
                  return functionName === "" ? "ForwardRef" : `ForwardRef(${functionName})`;
                }
                if (ReactIs.isMemo(element)) {
                  const functionName = type.displayName || type.type.displayName || type.type.name || "";
                  return functionName === "" ? "Memo" : `Memo(${functionName})`;
                }
              }
              return "UNDEFINED";
            };
            const getPropKeys = (element) => {
              const {
                props
              } = element;
              return Object.keys(props).filter((key) => key !== "children" && props[key] !== void 0).sort();
            };
            const serialize = (element, config, indentation, depth, refs, printer) => ++depth > config.maxDepth ? (0, _markup.printElementAsLeaf)(getType2(element), config) : (0, _markup.printElement)(getType2(element), (0, _markup.printProps)(getPropKeys(element), element.props, config, indentation + config.indent, depth, refs, printer), (0, _markup.printChildren)(getChildren(element.props.children), config, indentation + config.indent, depth, refs, printer), config, indentation);
            exports3.serialize = serialize;
            const test = (val) => val != null && ReactIs.isElement(val);
            exports3.test = test;
            const plugin = {
              serialize,
              test
            };
            var _default = exports3["default"] = plugin;
          })
        ),
        /***/
        "./src/plugins/ReactTestComponent.ts": (
          /***/
          ((__unused_webpack_module, exports3, __webpack_require__2) => {
            Object.defineProperty(exports3, "__esModule", {
              value: true
            });
            exports3.test = exports3.serialize = exports3["default"] = void 0;
            var _markup = __webpack_require__2("./src/plugins/lib/markup.ts");
            var Symbol2 = globalThis["jest-symbol-do-not-touch"] || globalThis.Symbol;
            const testSymbol = typeof Symbol2 === "function" && Symbol2.for ? Symbol2.for("react.test.json") : 245830487;
            const getPropKeys = (object) => {
              const {
                props
              } = object;
              return props ? Object.keys(props).filter((key) => props[key] !== void 0).sort() : [];
            };
            const serialize = (object, config, indentation, depth, refs, printer) => ++depth > config.maxDepth ? (0, _markup.printElementAsLeaf)(object.type, config) : (0, _markup.printElement)(object.type, object.props ? (0, _markup.printProps)(getPropKeys(object), object.props, config, indentation + config.indent, depth, refs, printer) : "", object.children ? (0, _markup.printChildren)(object.children, config, indentation + config.indent, depth, refs, printer) : "", config, indentation);
            exports3.serialize = serialize;
            const test = (val) => val && val.$$typeof === testSymbol;
            exports3.test = test;
            const plugin = {
              serialize,
              test
            };
            var _default = exports3["default"] = plugin;
          })
        ),
        /***/
        "./src/plugins/lib/escapeHTML.ts": (
          /***/
          ((__unused_webpack_module, exports3) => {
            Object.defineProperty(exports3, "__esModule", {
              value: true
            });
            exports3["default"] = escapeHTML;
            function escapeHTML(str) {
              return str.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
            }
          })
        ),
        /***/
        "./src/plugins/lib/markup.ts": (
          /***/
          ((__unused_webpack_module, exports3, __webpack_require__2) => {
            Object.defineProperty(exports3, "__esModule", {
              value: true
            });
            exports3.printText = exports3.printProps = exports3.printElementAsLeaf = exports3.printElement = exports3.printComment = exports3.printChildren = void 0;
            var _escapeHTML = _interopRequireDefault(__webpack_require__2("./src/plugins/lib/escapeHTML.ts"));
            function _interopRequireDefault(e) {
              return e && e.__esModule ? e : { default: e };
            }
            const printProps = (keys, props, config, indentation, depth, refs, printer) => {
              const indentationNext = indentation + config.indent;
              const colors3 = config.colors;
              return keys.map((key) => {
                const value = props[key];
                let printed = printer(value, config, indentationNext, depth, refs);
                if (typeof value !== "string") {
                  if (printed.includes("\n")) {
                    printed = config.spacingOuter + indentationNext + printed + config.spacingOuter + indentation;
                  }
                  printed = `{${printed}}`;
                }
                return `${config.spacingInner + indentation + colors3.prop.open + key + colors3.prop.close}=${colors3.value.open}${printed}${colors3.value.close}`;
              }).join("");
            };
            exports3.printProps = printProps;
            const printChildren = (children, config, indentation, depth, refs, printer) => children.map((child) => config.spacingOuter + indentation + (typeof child === "string" ? printText(child, config) : printer(child, config, indentation, depth, refs))).join("");
            exports3.printChildren = printChildren;
            const printText = (text, config) => {
              const contentColor = config.colors.content;
              return contentColor.open + (0, _escapeHTML.default)(text) + contentColor.close;
            };
            exports3.printText = printText;
            const printComment = (comment, config) => {
              const commentColor = config.colors.comment;
              return `${commentColor.open}<!--${(0, _escapeHTML.default)(comment)}-->${commentColor.close}`;
            };
            exports3.printComment = printComment;
            const printElement = (type, printedProps, printedChildren, config, indentation) => {
              const tagColor = config.colors.tag;
              return `${tagColor.open}<${type}${printedProps && tagColor.close + printedProps + config.spacingOuter + indentation + tagColor.open}${printedChildren ? `>${tagColor.close}${printedChildren}${config.spacingOuter}${indentation}${tagColor.open}</${type}` : `${printedProps && !config.min ? "" : " "}/`}>${tagColor.close}`;
            };
            exports3.printElement = printElement;
            const printElementAsLeaf = (type, config) => {
              const tagColor = config.colors.tag;
              return `${tagColor.open}<${type}${tagColor.close} \u2026${tagColor.open} />${tagColor.close}`;
            };
            exports3.printElementAsLeaf = printElementAsLeaf;
          })
        )
        /******/
      };
      var __webpack_module_cache__ = {};
      function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) {
          return cachedModule.exports;
        }
        var module3 = __webpack_module_cache__[moduleId] = {
          /******/
          // no module.id needed
          /******/
          // no module.loaded needed
          /******/
          exports: {}
          /******/
        };
        __webpack_modules__[moduleId](module3, module3.exports, __webpack_require__);
        return module3.exports;
      }
      var __webpack_exports__ = {};
      (() => {
        var exports3 = __webpack_exports__;
        Object.defineProperty(exports3, "__esModule", {
          value: true
        });
        exports3["default"] = exports3.DEFAULT_OPTIONS = void 0;
        exports3.format = format;
        exports3.plugins = void 0;
        var _ansiStyles = _interopRequireDefault(require_ansi_styles());
        var _collections = __webpack_require__("./src/collections.ts");
        var _AsymmetricMatcher = _interopRequireDefault(__webpack_require__("./src/plugins/AsymmetricMatcher.ts"));
        var _DOMCollection = _interopRequireDefault(__webpack_require__("./src/plugins/DOMCollection.ts"));
        var _DOMElement = _interopRequireDefault(__webpack_require__("./src/plugins/DOMElement.ts"));
        var _Immutable = _interopRequireDefault(__webpack_require__("./src/plugins/Immutable.ts"));
        var _ReactElement = _interopRequireDefault(__webpack_require__("./src/plugins/ReactElement.ts"));
        var _ReactTestComponent = _interopRequireDefault(__webpack_require__("./src/plugins/ReactTestComponent.ts"));
        function _interopRequireDefault(e) {
          return e && e.__esModule ? e : { default: e };
        }
        const src_toString = Object.prototype.toString;
        const toISOString = Date.prototype.toISOString;
        const errorToString = Error.prototype.toString;
        const regExpToString = RegExp.prototype.toString;
        const getConstructorName = (val) => typeof val.constructor === "function" && val.constructor.name || "Object";
        const isWindow = (val) => (
          // eslint-disable-next-line unicorn/prefer-global-this
          typeof window !== "undefined" && val === window
        );
        const SYMBOL_REGEXP = /^Symbol\((.*)\)(.*)$/;
        const NEWLINE_REGEXP = /\n/gi;
        class PrettyFormatPluginError extends Error {
          constructor(message, stack) {
            super(message);
            this.stack = stack;
            this.name = this.constructor.name;
          }
        }
        function isToStringedArrayType(toStringed) {
          return toStringed === "[object Array]" || toStringed === "[object ArrayBuffer]" || toStringed === "[object DataView]" || toStringed === "[object Float32Array]" || toStringed === "[object Float64Array]" || toStringed === "[object Int8Array]" || toStringed === "[object Int16Array]" || toStringed === "[object Int32Array]" || toStringed === "[object Uint8Array]" || toStringed === "[object Uint8ClampedArray]" || toStringed === "[object Uint16Array]" || toStringed === "[object Uint32Array]";
        }
        function printNumber(val) {
          return Object.is(val, -0) ? "-0" : String(val);
        }
        function printBigInt(val) {
          return String(`${val}n`);
        }
        function printFunction(val, printFunctionName) {
          if (!printFunctionName) {
            return "[Function]";
          }
          return `[Function ${val.name || "anonymous"}]`;
        }
        function printSymbol(val) {
          return String(val).replace(SYMBOL_REGEXP, "Symbol($1)");
        }
        function printError(val) {
          return `[${errorToString.call(val)}]`;
        }
        function printBasicValue(val, printFunctionName, escapeRegex, escapeString) {
          if (val === true || val === false) {
            return `${val}`;
          }
          if (val === void 0) {
            return "undefined";
          }
          if (val === null) {
            return "null";
          }
          const typeOf = typeof val;
          if (typeOf === "number") {
            return printNumber(val);
          }
          if (typeOf === "bigint") {
            return printBigInt(val);
          }
          if (typeOf === "string") {
            if (escapeString) {
              return `"${val.replaceAll(/"|\\/g, "\\$&")}"`;
            }
            return `"${val}"`;
          }
          if (typeOf === "function") {
            return printFunction(val, printFunctionName);
          }
          if (typeOf === "symbol") {
            return printSymbol(val);
          }
          const toStringed = src_toString.call(val);
          if (toStringed === "[object Promise]") {
            return "Promise {}";
          }
          if (toStringed === "[object WeakMap]") {
            return "WeakMap {}";
          }
          if (toStringed === "[object WeakSet]") {
            return "WeakSet {}";
          }
          if (toStringed === "[object Function]" || toStringed === "[object GeneratorFunction]") {
            return printFunction(val, printFunctionName);
          }
          if (toStringed === "[object Symbol]") {
            return printSymbol(val);
          }
          if (toStringed === "[object Date]") {
            return Number.isNaN(+val) ? "Date { NaN }" : toISOString.call(val);
          }
          if (toStringed === "[object Error]") {
            return printError(val);
          }
          if (toStringed === "[object RegExp]") {
            if (escapeRegex) {
              return regExpToString.call(val).replaceAll(/[$()*+.?[\\\]^{|}]/g, "\\$&");
            }
            return regExpToString.call(val);
          }
          if (val instanceof Error) {
            return printError(val);
          }
          return null;
        }
        function printComplexValue(val, config, indentation, depth, refs, hasCalledToJSON) {
          if (refs.includes(val)) {
            return "[Circular]";
          }
          refs = [...refs];
          refs.push(val);
          const hitMaxDepth = ++depth > config.maxDepth;
          const min = config.min;
          if (config.callToJSON && !hitMaxDepth && val.toJSON && typeof val.toJSON === "function" && !hasCalledToJSON) {
            return printer(val.toJSON(), config, indentation, depth, refs, true);
          }
          const toStringed = src_toString.call(val);
          if (toStringed === "[object Arguments]") {
            return hitMaxDepth ? "[Arguments]" : `${min ? "" : "Arguments "}[${(0, _collections.printListItems)(val, config, indentation, depth, refs, printer)}]`;
          }
          if (isToStringedArrayType(toStringed)) {
            return hitMaxDepth ? `[${val.constructor.name}]` : `${min ? "" : !config.printBasicPrototype && val.constructor.name === "Array" ? "" : `${val.constructor.name} `}[${(0, _collections.printListItems)(val, config, indentation, depth, refs, printer)}]`;
          }
          if (toStringed === "[object Map]") {
            return hitMaxDepth ? "[Map]" : `Map {${(0, _collections.printIteratorEntries)(val.entries(), config, indentation, depth, refs, printer, " => ")}}`;
          }
          if (toStringed === "[object Set]") {
            return hitMaxDepth ? "[Set]" : `Set {${(0, _collections.printIteratorValues)(val.values(), config, indentation, depth, refs, printer)}}`;
          }
          return hitMaxDepth || isWindow(val) ? `[${getConstructorName(val)}]` : `${min ? "" : !config.printBasicPrototype && getConstructorName(val) === "Object" ? "" : `${getConstructorName(val)} `}{${(0, _collections.printObjectProperties)(val, config, indentation, depth, refs, printer)}}`;
        }
        function isNewPlugin(plugin) {
          return plugin.serialize != null;
        }
        function printPlugin(plugin, val, config, indentation, depth, refs) {
          let printed;
          try {
            printed = isNewPlugin(plugin) ? plugin.serialize(val, config, indentation, depth, refs, printer) : plugin.print(val, (valChild) => printer(valChild, config, indentation, depth, refs), (str) => {
              const indentationNext = indentation + config.indent;
              return indentationNext + str.replaceAll(NEWLINE_REGEXP, `
${indentationNext}`);
            }, {
              edgeSpacing: config.spacingOuter,
              min: config.min,
              spacing: config.spacingInner
            }, config.colors);
          } catch (error) {
            throw new PrettyFormatPluginError(error.message, error.stack);
          }
          if (typeof printed !== "string") {
            throw new TypeError(`pretty-format: Plugin must return type "string" but instead returned "${typeof printed}".`);
          }
          return printed;
        }
        function findPlugin(plugins2, val) {
          for (const plugin of plugins2) {
            try {
              if (plugin.test(val)) {
                return plugin;
              }
            } catch (error) {
              throw new PrettyFormatPluginError(error.message, error.stack);
            }
          }
          return null;
        }
        function printer(val, config, indentation, depth, refs, hasCalledToJSON) {
          const plugin = findPlugin(config.plugins, val);
          if (plugin !== null) {
            return printPlugin(plugin, val, config, indentation, depth, refs);
          }
          const basicResult = printBasicValue(val, config.printFunctionName, config.escapeRegex, config.escapeString);
          if (basicResult !== null) {
            return basicResult;
          }
          return printComplexValue(val, config, indentation, depth, refs, hasCalledToJSON);
        }
        const DEFAULT_THEME = {
          comment: "gray",
          content: "reset",
          prop: "yellow",
          tag: "cyan",
          value: "green"
        };
        const DEFAULT_THEME_KEYS = Object.keys(DEFAULT_THEME);
        const toOptionsSubtype = (options) => options;
        const DEFAULT_OPTIONS = exports3.DEFAULT_OPTIONS = toOptionsSubtype({
          callToJSON: true,
          compareKeys: void 0,
          escapeRegex: false,
          escapeString: true,
          highlight: false,
          indent: 2,
          maxDepth: Number.POSITIVE_INFINITY,
          maxWidth: Number.POSITIVE_INFINITY,
          min: false,
          plugins: [],
          printBasicPrototype: true,
          printFunctionName: true,
          theme: DEFAULT_THEME
        });
        function validateOptions(options) {
          for (const key of Object.keys(options)) {
            if (!Object.prototype.hasOwnProperty.call(DEFAULT_OPTIONS, key)) {
              throw new Error(`pretty-format: Unknown option "${key}".`);
            }
          }
          if (options.min && options.indent !== void 0 && options.indent !== 0) {
            throw new Error('pretty-format: Options "min" and "indent" cannot be used together.');
          }
          if (options.theme !== void 0) {
            if (options.theme === null) {
              throw new Error('pretty-format: Option "theme" must not be null.');
            }
            if (typeof options.theme !== "object") {
              throw new TypeError(`pretty-format: Option "theme" must be of type "object" but instead received "${typeof options.theme}".`);
            }
          }
        }
        const getColorsHighlight = (options) => DEFAULT_THEME_KEYS.reduce((colors3, key) => {
          const value = options.theme && options.theme[key] !== void 0 ? options.theme[key] : DEFAULT_THEME[key];
          const color = value && _ansiStyles.default[value];
          if (color && typeof color.close === "string" && typeof color.open === "string") {
            colors3[key] = color;
          } else {
            throw new Error(`pretty-format: Option "theme" has a key "${key}" whose value "${value}" is undefined in ansi-styles.`);
          }
          return colors3;
        }, /* @__PURE__ */ Object.create(null));
        const getColorsEmpty = () => DEFAULT_THEME_KEYS.reduce((colors3, key) => {
          colors3[key] = {
            close: "",
            open: ""
          };
          return colors3;
        }, /* @__PURE__ */ Object.create(null));
        const getPrintFunctionName = (options) => options?.printFunctionName ?? DEFAULT_OPTIONS.printFunctionName;
        const getEscapeRegex = (options) => options?.escapeRegex ?? DEFAULT_OPTIONS.escapeRegex;
        const getEscapeString = (options) => options?.escapeString ?? DEFAULT_OPTIONS.escapeString;
        const getConfig = (options) => ({
          callToJSON: options?.callToJSON ?? DEFAULT_OPTIONS.callToJSON,
          colors: options?.highlight ? getColorsHighlight(options) : getColorsEmpty(),
          compareKeys: typeof options?.compareKeys === "function" || options?.compareKeys === null ? options.compareKeys : DEFAULT_OPTIONS.compareKeys,
          escapeRegex: getEscapeRegex(options),
          escapeString: getEscapeString(options),
          indent: options?.min ? "" : createIndent(options?.indent ?? DEFAULT_OPTIONS.indent),
          maxDepth: options?.maxDepth ?? DEFAULT_OPTIONS.maxDepth,
          maxWidth: options?.maxWidth ?? DEFAULT_OPTIONS.maxWidth,
          min: options?.min ?? DEFAULT_OPTIONS.min,
          plugins: options?.plugins ?? DEFAULT_OPTIONS.plugins,
          printBasicPrototype: options?.printBasicPrototype ?? true,
          printFunctionName: getPrintFunctionName(options),
          spacingInner: options?.min ? " " : "\n",
          spacingOuter: options?.min ? "" : "\n"
        });
        function createIndent(indent3) {
          return Array.from({
            length: indent3 + 1
          }).join(" ");
        }
        function format(val, options) {
          if (options) {
            validateOptions(options);
            if (options.plugins) {
              const plugin = findPlugin(options.plugins, val);
              if (plugin !== null) {
                return printPlugin(plugin, val, getConfig(options), "", 0, []);
              }
            }
          }
          const basicResult = printBasicValue(val, getPrintFunctionName(options), getEscapeRegex(options), getEscapeString(options));
          if (basicResult !== null) {
            return basicResult;
          }
          return printComplexValue(val, getConfig(options), "", 0, []);
        }
        const plugins = exports3.plugins = {
          AsymmetricMatcher: _AsymmetricMatcher.default,
          DOMCollection: _DOMCollection.default,
          DOMElement: _DOMElement.default,
          Immutable: _Immutable.default,
          ReactElement: _ReactElement.default,
          ReactTestComponent: _ReactTestComponent.default
        };
        var _default = exports3["default"] = format;
      })();
      module2.exports = __webpack_exports__;
    })();
  }
});

// node_modules/color-name/index.js
var require_color_name = __commonJS({
  "node_modules/color-name/index.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      "aliceblue": [240, 248, 255],
      "antiquewhite": [250, 235, 215],
      "aqua": [0, 255, 255],
      "aquamarine": [127, 255, 212],
      "azure": [240, 255, 255],
      "beige": [245, 245, 220],
      "bisque": [255, 228, 196],
      "black": [0, 0, 0],
      "blanchedalmond": [255, 235, 205],
      "blue": [0, 0, 255],
      "blueviolet": [138, 43, 226],
      "brown": [165, 42, 42],
      "burlywood": [222, 184, 135],
      "cadetblue": [95, 158, 160],
      "chartreuse": [127, 255, 0],
      "chocolate": [210, 105, 30],
      "coral": [255, 127, 80],
      "cornflowerblue": [100, 149, 237],
      "cornsilk": [255, 248, 220],
      "crimson": [220, 20, 60],
      "cyan": [0, 255, 255],
      "darkblue": [0, 0, 139],
      "darkcyan": [0, 139, 139],
      "darkgoldenrod": [184, 134, 11],
      "darkgray": [169, 169, 169],
      "darkgreen": [0, 100, 0],
      "darkgrey": [169, 169, 169],
      "darkkhaki": [189, 183, 107],
      "darkmagenta": [139, 0, 139],
      "darkolivegreen": [85, 107, 47],
      "darkorange": [255, 140, 0],
      "darkorchid": [153, 50, 204],
      "darkred": [139, 0, 0],
      "darksalmon": [233, 150, 122],
      "darkseagreen": [143, 188, 143],
      "darkslateblue": [72, 61, 139],
      "darkslategray": [47, 79, 79],
      "darkslategrey": [47, 79, 79],
      "darkturquoise": [0, 206, 209],
      "darkviolet": [148, 0, 211],
      "deeppink": [255, 20, 147],
      "deepskyblue": [0, 191, 255],
      "dimgray": [105, 105, 105],
      "dimgrey": [105, 105, 105],
      "dodgerblue": [30, 144, 255],
      "firebrick": [178, 34, 34],
      "floralwhite": [255, 250, 240],
      "forestgreen": [34, 139, 34],
      "fuchsia": [255, 0, 255],
      "gainsboro": [220, 220, 220],
      "ghostwhite": [248, 248, 255],
      "gold": [255, 215, 0],
      "goldenrod": [218, 165, 32],
      "gray": [128, 128, 128],
      "green": [0, 128, 0],
      "greenyellow": [173, 255, 47],
      "grey": [128, 128, 128],
      "honeydew": [240, 255, 240],
      "hotpink": [255, 105, 180],
      "indianred": [205, 92, 92],
      "indigo": [75, 0, 130],
      "ivory": [255, 255, 240],
      "khaki": [240, 230, 140],
      "lavender": [230, 230, 250],
      "lavenderblush": [255, 240, 245],
      "lawngreen": [124, 252, 0],
      "lemonchiffon": [255, 250, 205],
      "lightblue": [173, 216, 230],
      "lightcoral": [240, 128, 128],
      "lightcyan": [224, 255, 255],
      "lightgoldenrodyellow": [250, 250, 210],
      "lightgray": [211, 211, 211],
      "lightgreen": [144, 238, 144],
      "lightgrey": [211, 211, 211],
      "lightpink": [255, 182, 193],
      "lightsalmon": [255, 160, 122],
      "lightseagreen": [32, 178, 170],
      "lightskyblue": [135, 206, 250],
      "lightslategray": [119, 136, 153],
      "lightslategrey": [119, 136, 153],
      "lightsteelblue": [176, 196, 222],
      "lightyellow": [255, 255, 224],
      "lime": [0, 255, 0],
      "limegreen": [50, 205, 50],
      "linen": [250, 240, 230],
      "magenta": [255, 0, 255],
      "maroon": [128, 0, 0],
      "mediumaquamarine": [102, 205, 170],
      "mediumblue": [0, 0, 205],
      "mediumorchid": [186, 85, 211],
      "mediumpurple": [147, 112, 219],
      "mediumseagreen": [60, 179, 113],
      "mediumslateblue": [123, 104, 238],
      "mediumspringgreen": [0, 250, 154],
      "mediumturquoise": [72, 209, 204],
      "mediumvioletred": [199, 21, 133],
      "midnightblue": [25, 25, 112],
      "mintcream": [245, 255, 250],
      "mistyrose": [255, 228, 225],
      "moccasin": [255, 228, 181],
      "navajowhite": [255, 222, 173],
      "navy": [0, 0, 128],
      "oldlace": [253, 245, 230],
      "olive": [128, 128, 0],
      "olivedrab": [107, 142, 35],
      "orange": [255, 165, 0],
      "orangered": [255, 69, 0],
      "orchid": [218, 112, 214],
      "palegoldenrod": [238, 232, 170],
      "palegreen": [152, 251, 152],
      "paleturquoise": [175, 238, 238],
      "palevioletred": [219, 112, 147],
      "papayawhip": [255, 239, 213],
      "peachpuff": [255, 218, 185],
      "peru": [205, 133, 63],
      "pink": [255, 192, 203],
      "plum": [221, 160, 221],
      "powderblue": [176, 224, 230],
      "purple": [128, 0, 128],
      "rebeccapurple": [102, 51, 153],
      "red": [255, 0, 0],
      "rosybrown": [188, 143, 143],
      "royalblue": [65, 105, 225],
      "saddlebrown": [139, 69, 19],
      "salmon": [250, 128, 114],
      "sandybrown": [244, 164, 96],
      "seagreen": [46, 139, 87],
      "seashell": [255, 245, 238],
      "sienna": [160, 82, 45],
      "silver": [192, 192, 192],
      "skyblue": [135, 206, 235],
      "slateblue": [106, 90, 205],
      "slategray": [112, 128, 144],
      "slategrey": [112, 128, 144],
      "snow": [255, 250, 250],
      "springgreen": [0, 255, 127],
      "steelblue": [70, 130, 180],
      "tan": [210, 180, 140],
      "teal": [0, 128, 128],
      "thistle": [216, 191, 216],
      "tomato": [255, 99, 71],
      "turquoise": [64, 224, 208],
      "violet": [238, 130, 238],
      "wheat": [245, 222, 179],
      "white": [255, 255, 255],
      "whitesmoke": [245, 245, 245],
      "yellow": [255, 255, 0],
      "yellowgreen": [154, 205, 50]
    };
  }
});

// node_modules/color-convert/conversions.js
var require_conversions = __commonJS({
  "node_modules/color-convert/conversions.js"(exports2, module2) {
    var cssKeywords = require_color_name();
    var reverseKeywords = {};
    for (const key of Object.keys(cssKeywords)) {
      reverseKeywords[cssKeywords[key]] = key;
    }
    var convert = {
      rgb: { channels: 3, labels: "rgb" },
      hsl: { channels: 3, labels: "hsl" },
      hsv: { channels: 3, labels: "hsv" },
      hwb: { channels: 3, labels: "hwb" },
      cmyk: { channels: 4, labels: "cmyk" },
      xyz: { channels: 3, labels: "xyz" },
      lab: { channels: 3, labels: "lab" },
      lch: { channels: 3, labels: "lch" },
      hex: { channels: 1, labels: ["hex"] },
      keyword: { channels: 1, labels: ["keyword"] },
      ansi16: { channels: 1, labels: ["ansi16"] },
      ansi256: { channels: 1, labels: ["ansi256"] },
      hcg: { channels: 3, labels: ["h", "c", "g"] },
      apple: { channels: 3, labels: ["r16", "g16", "b16"] },
      gray: { channels: 1, labels: ["gray"] }
    };
    module2.exports = convert;
    for (const model of Object.keys(convert)) {
      if (!("channels" in convert[model])) {
        throw new Error("missing channels property: " + model);
      }
      if (!("labels" in convert[model])) {
        throw new Error("missing channel labels property: " + model);
      }
      if (convert[model].labels.length !== convert[model].channels) {
        throw new Error("channel and label counts mismatch: " + model);
      }
      const { channels, labels } = convert[model];
      delete convert[model].channels;
      delete convert[model].labels;
      Object.defineProperty(convert[model], "channels", { value: channels });
      Object.defineProperty(convert[model], "labels", { value: labels });
    }
    convert.rgb.hsl = function(rgb) {
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const min = Math.min(r, g, b);
      const max = Math.max(r, g, b);
      const delta = max - min;
      let h;
      let s;
      if (max === min) {
        h = 0;
      } else if (r === max) {
        h = (g - b) / delta;
      } else if (g === max) {
        h = 2 + (b - r) / delta;
      } else if (b === max) {
        h = 4 + (r - g) / delta;
      }
      h = Math.min(h * 60, 360);
      if (h < 0) {
        h += 360;
      }
      const l = (min + max) / 2;
      if (max === min) {
        s = 0;
      } else if (l <= 0.5) {
        s = delta / (max + min);
      } else {
        s = delta / (2 - max - min);
      }
      return [h, s * 100, l * 100];
    };
    convert.rgb.hsv = function(rgb) {
      let rdif;
      let gdif;
      let bdif;
      let h;
      let s;
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const v = Math.max(r, g, b);
      const diff2 = v - Math.min(r, g, b);
      const diffc = function(c) {
        return (v - c) / 6 / diff2 + 1 / 2;
      };
      if (diff2 === 0) {
        h = 0;
        s = 0;
      } else {
        s = diff2 / v;
        rdif = diffc(r);
        gdif = diffc(g);
        bdif = diffc(b);
        if (r === v) {
          h = bdif - gdif;
        } else if (g === v) {
          h = 1 / 3 + rdif - bdif;
        } else if (b === v) {
          h = 2 / 3 + gdif - rdif;
        }
        if (h < 0) {
          h += 1;
        } else if (h > 1) {
          h -= 1;
        }
      }
      return [
        h * 360,
        s * 100,
        v * 100
      ];
    };
    convert.rgb.hwb = function(rgb) {
      const r = rgb[0];
      const g = rgb[1];
      let b = rgb[2];
      const h = convert.rgb.hsl(rgb)[0];
      const w = 1 / 255 * Math.min(r, Math.min(g, b));
      b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
      return [h, w * 100, b * 100];
    };
    convert.rgb.cmyk = function(rgb) {
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const k = Math.min(1 - r, 1 - g, 1 - b);
      const c = (1 - r - k) / (1 - k) || 0;
      const m = (1 - g - k) / (1 - k) || 0;
      const y = (1 - b - k) / (1 - k) || 0;
      return [c * 100, m * 100, y * 100, k * 100];
    };
    function comparativeDistance(x, y) {
      return (x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2 + (x[2] - y[2]) ** 2;
    }
    convert.rgb.keyword = function(rgb) {
      const reversed = reverseKeywords[rgb];
      if (reversed) {
        return reversed;
      }
      let currentClosestDistance = Infinity;
      let currentClosestKeyword;
      for (const keyword of Object.keys(cssKeywords)) {
        const value = cssKeywords[keyword];
        const distance = comparativeDistance(rgb, value);
        if (distance < currentClosestDistance) {
          currentClosestDistance = distance;
          currentClosestKeyword = keyword;
        }
      }
      return currentClosestKeyword;
    };
    convert.keyword.rgb = function(keyword) {
      return cssKeywords[keyword];
    };
    convert.rgb.xyz = function(rgb) {
      let r = rgb[0] / 255;
      let g = rgb[1] / 255;
      let b = rgb[2] / 255;
      r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92;
      g = g > 0.04045 ? ((g + 0.055) / 1.055) ** 2.4 : g / 12.92;
      b = b > 0.04045 ? ((b + 0.055) / 1.055) ** 2.4 : b / 12.92;
      const x = r * 0.4124 + g * 0.3576 + b * 0.1805;
      const y = r * 0.2126 + g * 0.7152 + b * 0.0722;
      const z = r * 0.0193 + g * 0.1192 + b * 0.9505;
      return [x * 100, y * 100, z * 100];
    };
    convert.rgb.lab = function(rgb) {
      const xyz = convert.rgb.xyz(rgb);
      let x = xyz[0];
      let y = xyz[1];
      let z = xyz[2];
      x /= 95.047;
      y /= 100;
      z /= 108.883;
      x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
      y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
      z = z > 8856e-6 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
      const l = 116 * y - 16;
      const a = 500 * (x - y);
      const b = 200 * (y - z);
      return [l, a, b];
    };
    convert.hsl.rgb = function(hsl) {
      const h = hsl[0] / 360;
      const s = hsl[1] / 100;
      const l = hsl[2] / 100;
      let t2;
      let t3;
      let val;
      if (s === 0) {
        val = l * 255;
        return [val, val, val];
      }
      if (l < 0.5) {
        t2 = l * (1 + s);
      } else {
        t2 = l + s - l * s;
      }
      const t1 = 2 * l - t2;
      const rgb = [0, 0, 0];
      for (let i = 0; i < 3; i++) {
        t3 = h + 1 / 3 * -(i - 1);
        if (t3 < 0) {
          t3++;
        }
        if (t3 > 1) {
          t3--;
        }
        if (6 * t3 < 1) {
          val = t1 + (t2 - t1) * 6 * t3;
        } else if (2 * t3 < 1) {
          val = t2;
        } else if (3 * t3 < 2) {
          val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
        } else {
          val = t1;
        }
        rgb[i] = val * 255;
      }
      return rgb;
    };
    convert.hsl.hsv = function(hsl) {
      const h = hsl[0];
      let s = hsl[1] / 100;
      let l = hsl[2] / 100;
      let smin = s;
      const lmin = Math.max(l, 0.01);
      l *= 2;
      s *= l <= 1 ? l : 2 - l;
      smin *= lmin <= 1 ? lmin : 2 - lmin;
      const v = (l + s) / 2;
      const sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
      return [h, sv * 100, v * 100];
    };
    convert.hsv.rgb = function(hsv) {
      const h = hsv[0] / 60;
      const s = hsv[1] / 100;
      let v = hsv[2] / 100;
      const hi = Math.floor(h) % 6;
      const f = h - Math.floor(h);
      const p = 255 * v * (1 - s);
      const q = 255 * v * (1 - s * f);
      const t = 255 * v * (1 - s * (1 - f));
      v *= 255;
      switch (hi) {
        case 0:
          return [v, t, p];
        case 1:
          return [q, v, p];
        case 2:
          return [p, v, t];
        case 3:
          return [p, q, v];
        case 4:
          return [t, p, v];
        case 5:
          return [v, p, q];
      }
    };
    convert.hsv.hsl = function(hsv) {
      const h = hsv[0];
      const s = hsv[1] / 100;
      const v = hsv[2] / 100;
      const vmin = Math.max(v, 0.01);
      let sl;
      let l;
      l = (2 - s) * v;
      const lmin = (2 - s) * vmin;
      sl = s * vmin;
      sl /= lmin <= 1 ? lmin : 2 - lmin;
      sl = sl || 0;
      l /= 2;
      return [h, sl * 100, l * 100];
    };
    convert.hwb.rgb = function(hwb) {
      const h = hwb[0] / 360;
      let wh = hwb[1] / 100;
      let bl = hwb[2] / 100;
      const ratio = wh + bl;
      let f;
      if (ratio > 1) {
        wh /= ratio;
        bl /= ratio;
      }
      const i = Math.floor(6 * h);
      const v = 1 - bl;
      f = 6 * h - i;
      if ((i & 1) !== 0) {
        f = 1 - f;
      }
      const n = wh + f * (v - wh);
      let r;
      let g;
      let b;
      switch (i) {
        default:
        case 6:
        case 0:
          r = v;
          g = n;
          b = wh;
          break;
        case 1:
          r = n;
          g = v;
          b = wh;
          break;
        case 2:
          r = wh;
          g = v;
          b = n;
          break;
        case 3:
          r = wh;
          g = n;
          b = v;
          break;
        case 4:
          r = n;
          g = wh;
          b = v;
          break;
        case 5:
          r = v;
          g = wh;
          b = n;
          break;
      }
      return [r * 255, g * 255, b * 255];
    };
    convert.cmyk.rgb = function(cmyk) {
      const c = cmyk[0] / 100;
      const m = cmyk[1] / 100;
      const y = cmyk[2] / 100;
      const k = cmyk[3] / 100;
      const r = 1 - Math.min(1, c * (1 - k) + k);
      const g = 1 - Math.min(1, m * (1 - k) + k);
      const b = 1 - Math.min(1, y * (1 - k) + k);
      return [r * 255, g * 255, b * 255];
    };
    convert.xyz.rgb = function(xyz) {
      const x = xyz[0] / 100;
      const y = xyz[1] / 100;
      const z = xyz[2] / 100;
      let r;
      let g;
      let b;
      r = x * 3.2406 + y * -1.5372 + z * -0.4986;
      g = x * -0.9689 + y * 1.8758 + z * 0.0415;
      b = x * 0.0557 + y * -0.204 + z * 1.057;
      r = r > 31308e-7 ? 1.055 * r ** (1 / 2.4) - 0.055 : r * 12.92;
      g = g > 31308e-7 ? 1.055 * g ** (1 / 2.4) - 0.055 : g * 12.92;
      b = b > 31308e-7 ? 1.055 * b ** (1 / 2.4) - 0.055 : b * 12.92;
      r = Math.min(Math.max(0, r), 1);
      g = Math.min(Math.max(0, g), 1);
      b = Math.min(Math.max(0, b), 1);
      return [r * 255, g * 255, b * 255];
    };
    convert.xyz.lab = function(xyz) {
      let x = xyz[0];
      let y = xyz[1];
      let z = xyz[2];
      x /= 95.047;
      y /= 100;
      z /= 108.883;
      x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
      y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
      z = z > 8856e-6 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
      const l = 116 * y - 16;
      const a = 500 * (x - y);
      const b = 200 * (y - z);
      return [l, a, b];
    };
    convert.lab.xyz = function(lab) {
      const l = lab[0];
      const a = lab[1];
      const b = lab[2];
      let x;
      let y;
      let z;
      y = (l + 16) / 116;
      x = a / 500 + y;
      z = y - b / 200;
      const y2 = y ** 3;
      const x2 = x ** 3;
      const z2 = z ** 3;
      y = y2 > 8856e-6 ? y2 : (y - 16 / 116) / 7.787;
      x = x2 > 8856e-6 ? x2 : (x - 16 / 116) / 7.787;
      z = z2 > 8856e-6 ? z2 : (z - 16 / 116) / 7.787;
      x *= 95.047;
      y *= 100;
      z *= 108.883;
      return [x, y, z];
    };
    convert.lab.lch = function(lab) {
      const l = lab[0];
      const a = lab[1];
      const b = lab[2];
      let h;
      const hr = Math.atan2(b, a);
      h = hr * 360 / 2 / Math.PI;
      if (h < 0) {
        h += 360;
      }
      const c = Math.sqrt(a * a + b * b);
      return [l, c, h];
    };
    convert.lch.lab = function(lch) {
      const l = lch[0];
      const c = lch[1];
      const h = lch[2];
      const hr = h / 360 * 2 * Math.PI;
      const a = c * Math.cos(hr);
      const b = c * Math.sin(hr);
      return [l, a, b];
    };
    convert.rgb.ansi16 = function(args, saturation = null) {
      const [r, g, b] = args;
      let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation;
      value = Math.round(value / 50);
      if (value === 0) {
        return 30;
      }
      let ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
      if (value === 2) {
        ansi += 60;
      }
      return ansi;
    };
    convert.hsv.ansi16 = function(args) {
      return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
    };
    convert.rgb.ansi256 = function(args) {
      const r = args[0];
      const g = args[1];
      const b = args[2];
      if (r === g && g === b) {
        if (r < 8) {
          return 16;
        }
        if (r > 248) {
          return 231;
        }
        return Math.round((r - 8) / 247 * 24) + 232;
      }
      const ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
      return ansi;
    };
    convert.ansi16.rgb = function(args) {
      let color = args % 10;
      if (color === 0 || color === 7) {
        if (args > 50) {
          color += 3.5;
        }
        color = color / 10.5 * 255;
        return [color, color, color];
      }
      const mult = (~~(args > 50) + 1) * 0.5;
      const r = (color & 1) * mult * 255;
      const g = (color >> 1 & 1) * mult * 255;
      const b = (color >> 2 & 1) * mult * 255;
      return [r, g, b];
    };
    convert.ansi256.rgb = function(args) {
      if (args >= 232) {
        const c = (args - 232) * 10 + 8;
        return [c, c, c];
      }
      args -= 16;
      let rem;
      const r = Math.floor(args / 36) / 5 * 255;
      const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
      const b = rem % 6 / 5 * 255;
      return [r, g, b];
    };
    convert.rgb.hex = function(args) {
      const integer = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
      const string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert.hex.rgb = function(args) {
      const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
      if (!match) {
        return [0, 0, 0];
      }
      let colorString = match[0];
      if (match[0].length === 3) {
        colorString = colorString.split("").map((char) => {
          return char + char;
        }).join("");
      }
      const integer = parseInt(colorString, 16);
      const r = integer >> 16 & 255;
      const g = integer >> 8 & 255;
      const b = integer & 255;
      return [r, g, b];
    };
    convert.rgb.hcg = function(rgb) {
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const max = Math.max(Math.max(r, g), b);
      const min = Math.min(Math.min(r, g), b);
      const chroma = max - min;
      let grayscale;
      let hue;
      if (chroma < 1) {
        grayscale = min / (1 - chroma);
      } else {
        grayscale = 0;
      }
      if (chroma <= 0) {
        hue = 0;
      } else if (max === r) {
        hue = (g - b) / chroma % 6;
      } else if (max === g) {
        hue = 2 + (b - r) / chroma;
      } else {
        hue = 4 + (r - g) / chroma;
      }
      hue /= 6;
      hue %= 1;
      return [hue * 360, chroma * 100, grayscale * 100];
    };
    convert.hsl.hcg = function(hsl) {
      const s = hsl[1] / 100;
      const l = hsl[2] / 100;
      const c = l < 0.5 ? 2 * s * l : 2 * s * (1 - l);
      let f = 0;
      if (c < 1) {
        f = (l - 0.5 * c) / (1 - c);
      }
      return [hsl[0], c * 100, f * 100];
    };
    convert.hsv.hcg = function(hsv) {
      const s = hsv[1] / 100;
      const v = hsv[2] / 100;
      const c = s * v;
      let f = 0;
      if (c < 1) {
        f = (v - c) / (1 - c);
      }
      return [hsv[0], c * 100, f * 100];
    };
    convert.hcg.rgb = function(hcg) {
      const h = hcg[0] / 360;
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      if (c === 0) {
        return [g * 255, g * 255, g * 255];
      }
      const pure = [0, 0, 0];
      const hi = h % 1 * 6;
      const v = hi % 1;
      const w = 1 - v;
      let mg = 0;
      switch (Math.floor(hi)) {
        case 0:
          pure[0] = 1;
          pure[1] = v;
          pure[2] = 0;
          break;
        case 1:
          pure[0] = w;
          pure[1] = 1;
          pure[2] = 0;
          break;
        case 2:
          pure[0] = 0;
          pure[1] = 1;
          pure[2] = v;
          break;
        case 3:
          pure[0] = 0;
          pure[1] = w;
          pure[2] = 1;
          break;
        case 4:
          pure[0] = v;
          pure[1] = 0;
          pure[2] = 1;
          break;
        default:
          pure[0] = 1;
          pure[1] = 0;
          pure[2] = w;
      }
      mg = (1 - c) * g;
      return [
        (c * pure[0] + mg) * 255,
        (c * pure[1] + mg) * 255,
        (c * pure[2] + mg) * 255
      ];
    };
    convert.hcg.hsv = function(hcg) {
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      const v = c + g * (1 - c);
      let f = 0;
      if (v > 0) {
        f = c / v;
      }
      return [hcg[0], f * 100, v * 100];
    };
    convert.hcg.hsl = function(hcg) {
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      const l = g * (1 - c) + 0.5 * c;
      let s = 0;
      if (l > 0 && l < 0.5) {
        s = c / (2 * l);
      } else if (l >= 0.5 && l < 1) {
        s = c / (2 * (1 - l));
      }
      return [hcg[0], s * 100, l * 100];
    };
    convert.hcg.hwb = function(hcg) {
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      const v = c + g * (1 - c);
      return [hcg[0], (v - c) * 100, (1 - v) * 100];
    };
    convert.hwb.hcg = function(hwb) {
      const w = hwb[1] / 100;
      const b = hwb[2] / 100;
      const v = 1 - b;
      const c = v - w;
      let g = 0;
      if (c < 1) {
        g = (v - c) / (1 - c);
      }
      return [hwb[0], c * 100, g * 100];
    };
    convert.apple.rgb = function(apple) {
      return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
    };
    convert.rgb.apple = function(rgb) {
      return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
    };
    convert.gray.rgb = function(args) {
      return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
    };
    convert.gray.hsl = function(args) {
      return [0, 0, args[0]];
    };
    convert.gray.hsv = convert.gray.hsl;
    convert.gray.hwb = function(gray) {
      return [0, 100, gray[0]];
    };
    convert.gray.cmyk = function(gray) {
      return [0, 0, 0, gray[0]];
    };
    convert.gray.lab = function(gray) {
      return [gray[0], 0, 0];
    };
    convert.gray.hex = function(gray) {
      const val = Math.round(gray[0] / 100 * 255) & 255;
      const integer = (val << 16) + (val << 8) + val;
      const string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert.rgb.gray = function(rgb) {
      const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
      return [val / 255 * 100];
    };
  }
});

// node_modules/color-convert/route.js
var require_route = __commonJS({
  "node_modules/color-convert/route.js"(exports2, module2) {
    var conversions = require_conversions();
    function buildGraph() {
      const graph = {};
      const models = Object.keys(conversions);
      for (let len = models.length, i = 0; i < len; i++) {
        graph[models[i]] = {
          // http://jsperf.com/1-vs-infinity
          // micro-opt, but this is simple.
          distance: -1,
          parent: null
        };
      }
      return graph;
    }
    function deriveBFS(fromModel) {
      const graph = buildGraph();
      const queue = [fromModel];
      graph[fromModel].distance = 0;
      while (queue.length) {
        const current = queue.pop();
        const adjacents = Object.keys(conversions[current]);
        for (let len = adjacents.length, i = 0; i < len; i++) {
          const adjacent = adjacents[i];
          const node = graph[adjacent];
          if (node.distance === -1) {
            node.distance = graph[current].distance + 1;
            node.parent = current;
            queue.unshift(adjacent);
          }
        }
      }
      return graph;
    }
    function link(from, to) {
      return function(args) {
        return to(from(args));
      };
    }
    function wrapConversion(toModel, graph) {
      const path4 = [graph[toModel].parent, toModel];
      let fn = conversions[graph[toModel].parent][toModel];
      let cur = graph[toModel].parent;
      while (graph[cur].parent) {
        path4.unshift(graph[cur].parent);
        fn = link(conversions[graph[cur].parent][cur], fn);
        cur = graph[cur].parent;
      }
      fn.conversion = path4;
      return fn;
    }
    module2.exports = function(fromModel) {
      const graph = deriveBFS(fromModel);
      const conversion = {};
      const models = Object.keys(graph);
      for (let len = models.length, i = 0; i < len; i++) {
        const toModel = models[i];
        const node = graph[toModel];
        if (node.parent === null) {
          continue;
        }
        conversion[toModel] = wrapConversion(toModel, graph);
      }
      return conversion;
    };
  }
});

// node_modules/color-convert/index.js
var require_color_convert = __commonJS({
  "node_modules/color-convert/index.js"(exports2, module2) {
    var conversions = require_conversions();
    var route = require_route();
    var convert = {};
    var models = Object.keys(conversions);
    function wrapRaw(fn) {
      const wrappedFn = function(...args) {
        const arg0 = args[0];
        if (arg0 === void 0 || arg0 === null) {
          return arg0;
        }
        if (arg0.length > 1) {
          args = arg0;
        }
        return fn(args);
      };
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    function wrapRounded(fn) {
      const wrappedFn = function(...args) {
        const arg0 = args[0];
        if (arg0 === void 0 || arg0 === null) {
          return arg0;
        }
        if (arg0.length > 1) {
          args = arg0;
        }
        const result = fn(args);
        if (typeof result === "object") {
          for (let len = result.length, i = 0; i < len; i++) {
            result[i] = Math.round(result[i]);
          }
        }
        return result;
      };
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    models.forEach((fromModel) => {
      convert[fromModel] = {};
      Object.defineProperty(convert[fromModel], "channels", { value: conversions[fromModel].channels });
      Object.defineProperty(convert[fromModel], "labels", { value: conversions[fromModel].labels });
      const routes = route(fromModel);
      const routeModels = Object.keys(routes);
      routeModels.forEach((toModel) => {
        const fn = routes[toModel];
        convert[fromModel][toModel] = wrapRounded(fn);
        convert[fromModel][toModel].raw = wrapRaw(fn);
      });
    });
    module2.exports = convert;
  }
});

// node_modules/ansi-styles/index.js
var require_ansi_styles2 = __commonJS({
  "node_modules/ansi-styles/index.js"(exports2, module2) {
    "use strict";
    var wrapAnsi16 = (fn, offset) => (...args) => {
      const code = fn(...args);
      return `\x1B[${code + offset}m`;
    };
    var wrapAnsi256 = (fn, offset) => (...args) => {
      const code = fn(...args);
      return `\x1B[${38 + offset};5;${code}m`;
    };
    var wrapAnsi16m = (fn, offset) => (...args) => {
      const rgb = fn(...args);
      return `\x1B[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
    };
    var ansi2ansi = (n) => n;
    var rgb2rgb = (r, g, b) => [r, g, b];
    var setLazyProperty = (object, property, get) => {
      Object.defineProperty(object, property, {
        get: () => {
          const value = get();
          Object.defineProperty(object, property, {
            value,
            enumerable: true,
            configurable: true
          });
          return value;
        },
        enumerable: true,
        configurable: true
      });
    };
    var colorConvert;
    var makeDynamicStyles = (wrap, targetSpace, identity, isBackground) => {
      if (colorConvert === void 0) {
        colorConvert = require_color_convert();
      }
      const offset = isBackground ? 10 : 0;
      const styles = {};
      for (const [sourceSpace, suite] of Object.entries(colorConvert)) {
        const name = sourceSpace === "ansi16" ? "ansi" : sourceSpace;
        if (sourceSpace === targetSpace) {
          styles[name] = wrap(identity, offset);
        } else if (typeof suite === "object") {
          styles[name] = wrap(suite[targetSpace], offset);
        }
      }
      return styles;
    };
    function assembleStyles() {
      const codes = /* @__PURE__ */ new Map();
      const styles = {
        modifier: {
          reset: [0, 0],
          // 21 isn't widely supported and 22 does the same thing
          bold: [1, 22],
          dim: [2, 22],
          italic: [3, 23],
          underline: [4, 24],
          inverse: [7, 27],
          hidden: [8, 28],
          strikethrough: [9, 29]
        },
        color: {
          black: [30, 39],
          red: [31, 39],
          green: [32, 39],
          yellow: [33, 39],
          blue: [34, 39],
          magenta: [35, 39],
          cyan: [36, 39],
          white: [37, 39],
          // Bright color
          blackBright: [90, 39],
          redBright: [91, 39],
          greenBright: [92, 39],
          yellowBright: [93, 39],
          blueBright: [94, 39],
          magentaBright: [95, 39],
          cyanBright: [96, 39],
          whiteBright: [97, 39]
        },
        bgColor: {
          bgBlack: [40, 49],
          bgRed: [41, 49],
          bgGreen: [42, 49],
          bgYellow: [43, 49],
          bgBlue: [44, 49],
          bgMagenta: [45, 49],
          bgCyan: [46, 49],
          bgWhite: [47, 49],
          // Bright color
          bgBlackBright: [100, 49],
          bgRedBright: [101, 49],
          bgGreenBright: [102, 49],
          bgYellowBright: [103, 49],
          bgBlueBright: [104, 49],
          bgMagentaBright: [105, 49],
          bgCyanBright: [106, 49],
          bgWhiteBright: [107, 49]
        }
      };
      styles.color.gray = styles.color.blackBright;
      styles.bgColor.bgGray = styles.bgColor.bgBlackBright;
      styles.color.grey = styles.color.blackBright;
      styles.bgColor.bgGrey = styles.bgColor.bgBlackBright;
      for (const [groupName, group] of Object.entries(styles)) {
        for (const [styleName, style] of Object.entries(group)) {
          styles[styleName] = {
            open: `\x1B[${style[0]}m`,
            close: `\x1B[${style[1]}m`
          };
          group[styleName] = styles[styleName];
          codes.set(style[0], style[1]);
        }
        Object.defineProperty(styles, groupName, {
          value: group,
          enumerable: false
        });
      }
      Object.defineProperty(styles, "codes", {
        value: codes,
        enumerable: false
      });
      styles.color.close = "\x1B[39m";
      styles.bgColor.close = "\x1B[49m";
      setLazyProperty(styles.color, "ansi", () => makeDynamicStyles(wrapAnsi16, "ansi16", ansi2ansi, false));
      setLazyProperty(styles.color, "ansi256", () => makeDynamicStyles(wrapAnsi256, "ansi256", ansi2ansi, false));
      setLazyProperty(styles.color, "ansi16m", () => makeDynamicStyles(wrapAnsi16m, "rgb", rgb2rgb, false));
      setLazyProperty(styles.bgColor, "ansi", () => makeDynamicStyles(wrapAnsi16, "ansi16", ansi2ansi, true));
      setLazyProperty(styles.bgColor, "ansi256", () => makeDynamicStyles(wrapAnsi256, "ansi256", ansi2ansi, true));
      setLazyProperty(styles.bgColor, "ansi16m", () => makeDynamicStyles(wrapAnsi16m, "rgb", rgb2rgb, true));
      return styles;
    }
    Object.defineProperty(module2, "exports", {
      enumerable: true,
      get: assembleStyles
    });
  }
});

// node_modules/has-flag/index.js
var require_has_flag = __commonJS({
  "node_modules/has-flag/index.js"(exports2, module2) {
    "use strict";
    module2.exports = (flag, argv = process.argv) => {
      const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
      const position = argv.indexOf(prefix + flag);
      const terminatorPosition = argv.indexOf("--");
      return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
    };
  }
});

// node_modules/chalk/node_modules/supports-color/index.js
var require_supports_color = __commonJS({
  "node_modules/chalk/node_modules/supports-color/index.js"(exports2, module2) {
    "use strict";
    var os = require("os");
    var tty = require("tty");
    var hasFlag = require_has_flag();
    var { env } = process;
    var forceColor;
    if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false") || hasFlag("color=never")) {
      forceColor = 0;
    } else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
      forceColor = 1;
    }
    if ("FORCE_COLOR" in env) {
      if (env.FORCE_COLOR === "true") {
        forceColor = 1;
      } else if (env.FORCE_COLOR === "false") {
        forceColor = 0;
      } else {
        forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
      }
    }
    function translateLevel(level) {
      if (level === 0) {
        return false;
      }
      return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
      };
    }
    function supportsColor(haveStream, streamIsTTY) {
      if (forceColor === 0) {
        return 0;
      }
      if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
        return 3;
      }
      if (hasFlag("color=256")) {
        return 2;
      }
      if (haveStream && !streamIsTTY && forceColor === void 0) {
        return 0;
      }
      const min = forceColor || 0;
      if (env.TERM === "dumb") {
        return min;
      }
      if (process.platform === "win32") {
        const osRelease = os.release().split(".");
        if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
          return Number(osRelease[2]) >= 14931 ? 3 : 2;
        }
        return 1;
      }
      if ("CI" in env) {
        if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((sign) => sign in env) || env.CI_NAME === "codeship") {
          return 1;
        }
        return min;
      }
      if ("TEAMCITY_VERSION" in env) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
      }
      if (env.COLORTERM === "truecolor") {
        return 3;
      }
      if ("TERM_PROGRAM" in env) {
        const version = parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch (env.TERM_PROGRAM) {
          case "iTerm.app":
            return version >= 3 ? 3 : 2;
          case "Apple_Terminal":
            return 2;
        }
      }
      if (/-256(color)?$/i.test(env.TERM)) {
        return 2;
      }
      if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
        return 1;
      }
      if ("COLORTERM" in env) {
        return 1;
      }
      return min;
    }
    function getSupportLevel(stream) {
      const level = supportsColor(stream, stream && stream.isTTY);
      return translateLevel(level);
    }
    module2.exports = {
      supportsColor: getSupportLevel,
      stdout: translateLevel(supportsColor(true, tty.isatty(1))),
      stderr: translateLevel(supportsColor(true, tty.isatty(2)))
    };
  }
});

// node_modules/chalk/source/util.js
var require_util = __commonJS({
  "node_modules/chalk/source/util.js"(exports2, module2) {
    "use strict";
    var stringReplaceAll = (string, substring, replacer) => {
      let index = string.indexOf(substring);
      if (index === -1) {
        return string;
      }
      const substringLength = substring.length;
      let endIndex = 0;
      let returnValue = "";
      do {
        returnValue += string.substr(endIndex, index - endIndex) + substring + replacer;
        endIndex = index + substringLength;
        index = string.indexOf(substring, endIndex);
      } while (index !== -1);
      returnValue += string.substr(endIndex);
      return returnValue;
    };
    var stringEncaseCRLFWithFirstIndex = (string, prefix, postfix, index) => {
      let endIndex = 0;
      let returnValue = "";
      do {
        const gotCR = string[index - 1] === "\r";
        returnValue += string.substr(endIndex, (gotCR ? index - 1 : index) - endIndex) + prefix + (gotCR ? "\r\n" : "\n") + postfix;
        endIndex = index + 1;
        index = string.indexOf("\n", endIndex);
      } while (index !== -1);
      returnValue += string.substr(endIndex);
      return returnValue;
    };
    module2.exports = {
      stringReplaceAll,
      stringEncaseCRLFWithFirstIndex
    };
  }
});

// node_modules/chalk/source/templates.js
var require_templates = __commonJS({
  "node_modules/chalk/source/templates.js"(exports2, module2) {
    "use strict";
    var TEMPLATE_REGEX = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
    var STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
    var STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
    var ESCAPE_REGEX = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi;
    var ESCAPES = /* @__PURE__ */ new Map([
      ["n", "\n"],
      ["r", "\r"],
      ["t", "	"],
      ["b", "\b"],
      ["f", "\f"],
      ["v", "\v"],
      ["0", "\0"],
      ["\\", "\\"],
      ["e", "\x1B"],
      ["a", "\x07"]
    ]);
    function unescape(c) {
      const u = c[0] === "u";
      const bracket = c[1] === "{";
      if (u && !bracket && c.length === 5 || c[0] === "x" && c.length === 3) {
        return String.fromCharCode(parseInt(c.slice(1), 16));
      }
      if (u && bracket) {
        return String.fromCodePoint(parseInt(c.slice(2, -1), 16));
      }
      return ESCAPES.get(c) || c;
    }
    function parseArguments(name, arguments_) {
      const results = [];
      const chunks = arguments_.trim().split(/\s*,\s*/g);
      let matches;
      for (const chunk of chunks) {
        const number = Number(chunk);
        if (!Number.isNaN(number)) {
          results.push(number);
        } else if (matches = chunk.match(STRING_REGEX)) {
          results.push(matches[2].replace(ESCAPE_REGEX, (m, escape, character) => escape ? unescape(escape) : character));
        } else {
          throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
        }
      }
      return results;
    }
    function parseStyle(style) {
      STYLE_REGEX.lastIndex = 0;
      const results = [];
      let matches;
      while ((matches = STYLE_REGEX.exec(style)) !== null) {
        const name = matches[1];
        if (matches[2]) {
          const args = parseArguments(name, matches[2]);
          results.push([name].concat(args));
        } else {
          results.push([name]);
        }
      }
      return results;
    }
    function buildStyle(chalk, styles) {
      const enabled = {};
      for (const layer of styles) {
        for (const style of layer.styles) {
          enabled[style[0]] = layer.inverse ? null : style.slice(1);
        }
      }
      let current = chalk;
      for (const [styleName, styles2] of Object.entries(enabled)) {
        if (!Array.isArray(styles2)) {
          continue;
        }
        if (!(styleName in current)) {
          throw new Error(`Unknown Chalk style: ${styleName}`);
        }
        current = styles2.length > 0 ? current[styleName](...styles2) : current[styleName];
      }
      return current;
    }
    module2.exports = (chalk, temporary) => {
      const styles = [];
      const chunks = [];
      let chunk = [];
      temporary.replace(TEMPLATE_REGEX, (m, escapeCharacter, inverse, style, close, character) => {
        if (escapeCharacter) {
          chunk.push(unescape(escapeCharacter));
        } else if (style) {
          const string = chunk.join("");
          chunk = [];
          chunks.push(styles.length === 0 ? string : buildStyle(chalk, styles)(string));
          styles.push({ inverse, styles: parseStyle(style) });
        } else if (close) {
          if (styles.length === 0) {
            throw new Error("Found extraneous } in Chalk template literal");
          }
          chunks.push(buildStyle(chalk, styles)(chunk.join("")));
          chunk = [];
          styles.pop();
        } else {
          chunk.push(character);
        }
      });
      chunks.push(chunk.join(""));
      if (styles.length > 0) {
        const errMessage = `Chalk template literal is missing ${styles.length} closing bracket${styles.length === 1 ? "" : "s"} (\`}\`)`;
        throw new Error(errMessage);
      }
      return chunks.join("");
    };
  }
});

// node_modules/chalk/source/index.js
var require_source = __commonJS({
  "node_modules/chalk/source/index.js"(exports2, module2) {
    "use strict";
    var ansiStyles = require_ansi_styles2();
    var { stdout: stdoutColor, stderr: stderrColor } = require_supports_color();
    var {
      stringReplaceAll,
      stringEncaseCRLFWithFirstIndex
    } = require_util();
    var { isArray } = Array;
    var levelMapping = [
      "ansi",
      "ansi",
      "ansi256",
      "ansi16m"
    ];
    var styles = /* @__PURE__ */ Object.create(null);
    var applyOptions = (object, options = {}) => {
      if (options.level && !(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)) {
        throw new Error("The `level` option should be an integer from 0 to 3");
      }
      const colorLevel = stdoutColor ? stdoutColor.level : 0;
      object.level = options.level === void 0 ? colorLevel : options.level;
    };
    var ChalkClass = class {
      constructor(options) {
        return chalkFactory(options);
      }
    };
    var chalkFactory = (options) => {
      const chalk2 = {};
      applyOptions(chalk2, options);
      chalk2.template = (...arguments_) => chalkTag(chalk2.template, ...arguments_);
      Object.setPrototypeOf(chalk2, Chalk.prototype);
      Object.setPrototypeOf(chalk2.template, chalk2);
      chalk2.template.constructor = () => {
        throw new Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.");
      };
      chalk2.template.Instance = ChalkClass;
      return chalk2.template;
    };
    function Chalk(options) {
      return chalkFactory(options);
    }
    for (const [styleName, style] of Object.entries(ansiStyles)) {
      styles[styleName] = {
        get() {
          const builder = createBuilder(this, createStyler(style.open, style.close, this._styler), this._isEmpty);
          Object.defineProperty(this, styleName, { value: builder });
          return builder;
        }
      };
    }
    styles.visible = {
      get() {
        const builder = createBuilder(this, this._styler, true);
        Object.defineProperty(this, "visible", { value: builder });
        return builder;
      }
    };
    var usedModels = ["rgb", "hex", "keyword", "hsl", "hsv", "hwb", "ansi", "ansi256"];
    for (const model of usedModels) {
      styles[model] = {
        get() {
          const { level } = this;
          return function(...arguments_) {
            const styler = createStyler(ansiStyles.color[levelMapping[level]][model](...arguments_), ansiStyles.color.close, this._styler);
            return createBuilder(this, styler, this._isEmpty);
          };
        }
      };
    }
    for (const model of usedModels) {
      const bgModel = "bg" + model[0].toUpperCase() + model.slice(1);
      styles[bgModel] = {
        get() {
          const { level } = this;
          return function(...arguments_) {
            const styler = createStyler(ansiStyles.bgColor[levelMapping[level]][model](...arguments_), ansiStyles.bgColor.close, this._styler);
            return createBuilder(this, styler, this._isEmpty);
          };
        }
      };
    }
    var proto = Object.defineProperties(() => {
    }, {
      ...styles,
      level: {
        enumerable: true,
        get() {
          return this._generator.level;
        },
        set(level) {
          this._generator.level = level;
        }
      }
    });
    var createStyler = (open, close, parent) => {
      let openAll;
      let closeAll;
      if (parent === void 0) {
        openAll = open;
        closeAll = close;
      } else {
        openAll = parent.openAll + open;
        closeAll = close + parent.closeAll;
      }
      return {
        open,
        close,
        openAll,
        closeAll,
        parent
      };
    };
    var createBuilder = (self, _styler, _isEmpty) => {
      const builder = (...arguments_) => {
        if (isArray(arguments_[0]) && isArray(arguments_[0].raw)) {
          return applyStyle(builder, chalkTag(builder, ...arguments_));
        }
        return applyStyle(builder, arguments_.length === 1 ? "" + arguments_[0] : arguments_.join(" "));
      };
      Object.setPrototypeOf(builder, proto);
      builder._generator = self;
      builder._styler = _styler;
      builder._isEmpty = _isEmpty;
      return builder;
    };
    var applyStyle = (self, string) => {
      if (self.level <= 0 || !string) {
        return self._isEmpty ? "" : string;
      }
      let styler = self._styler;
      if (styler === void 0) {
        return string;
      }
      const { openAll, closeAll } = styler;
      if (string.indexOf("\x1B") !== -1) {
        while (styler !== void 0) {
          string = stringReplaceAll(string, styler.close, styler.open);
          styler = styler.parent;
        }
      }
      const lfIndex = string.indexOf("\n");
      if (lfIndex !== -1) {
        string = stringEncaseCRLFWithFirstIndex(string, closeAll, openAll, lfIndex);
      }
      return openAll + string + closeAll;
    };
    var template;
    var chalkTag = (chalk2, ...strings) => {
      const [firstString] = strings;
      if (!isArray(firstString) || !isArray(firstString.raw)) {
        return strings.join(" ");
      }
      const arguments_ = strings.slice(1);
      const parts = [firstString.raw[0]];
      for (let i = 1; i < firstString.length; i++) {
        parts.push(
          String(arguments_[i - 1]).replace(/[{}\\]/g, "\\$&"),
          String(firstString.raw[i])
        );
      }
      if (template === void 0) {
        template = require_templates();
      }
      return template(chalk2, parts.join(""));
    };
    Object.defineProperties(Chalk.prototype, styles);
    var chalk = Chalk();
    chalk.supportsColor = stdoutColor;
    chalk.stderr = Chalk({ level: stderrColor ? stderrColor.level : 0 });
    chalk.stderr.supportsColor = stderrColor;
    module2.exports = chalk;
  }
});

// node_modules/@jest/diff-sequences/build/index.js
var require_build4 = __commonJS({
  "node_modules/@jest/diff-sequences/build/index.js"(exports2, module2) {
    (() => {
      "use strict";
      var __webpack_exports__ = {};
      (() => {
        var exports3 = __webpack_exports__;
        Object.defineProperty(exports3, "__esModule", {
          value: true
        });
        exports3["default"] = diffSequence;
        const pkg = "@jest/diff-sequences";
        const NOT_YET_SET = 0;
        const countCommonItemsF = (aIndex, aEnd, bIndex, bEnd, isCommon) => {
          let nCommon = 0;
          while (aIndex < aEnd && bIndex < bEnd && isCommon(aIndex, bIndex)) {
            aIndex += 1;
            bIndex += 1;
            nCommon += 1;
          }
          return nCommon;
        };
        const countCommonItemsR = (aStart, aIndex, bStart, bIndex, isCommon) => {
          let nCommon = 0;
          while (aStart <= aIndex && bStart <= bIndex && isCommon(aIndex, bIndex)) {
            aIndex -= 1;
            bIndex -= 1;
            nCommon += 1;
          }
          return nCommon;
        };
        const extendPathsF = (d, aEnd, bEnd, bF, isCommon, aIndexesF, iMaxF) => {
          let iF = 0;
          let kF = -d;
          let aFirst = aIndexesF[iF];
          let aIndexPrev1 = aFirst;
          aIndexesF[iF] += countCommonItemsF(aFirst + 1, aEnd, bF + aFirst - kF + 1, bEnd, isCommon);
          const nF = Math.min(d, iMaxF);
          for (iF += 1, kF += 2; iF <= nF; iF += 1, kF += 2) {
            if (iF !== d && aIndexPrev1 < aIndexesF[iF]) {
              aFirst = aIndexesF[iF];
            } else {
              aFirst = aIndexPrev1 + 1;
              if (aEnd <= aFirst) {
                return iF - 1;
              }
            }
            aIndexPrev1 = aIndexesF[iF];
            aIndexesF[iF] = aFirst + countCommonItemsF(aFirst + 1, aEnd, bF + aFirst - kF + 1, bEnd, isCommon);
          }
          return iMaxF;
        };
        const extendPathsR = (d, aStart, bStart, bR, isCommon, aIndexesR, iMaxR) => {
          let iR = 0;
          let kR = d;
          let aFirst = aIndexesR[iR];
          let aIndexPrev1 = aFirst;
          aIndexesR[iR] -= countCommonItemsR(aStart, aFirst - 1, bStart, bR + aFirst - kR - 1, isCommon);
          const nR = Math.min(d, iMaxR);
          for (iR += 1, kR -= 2; iR <= nR; iR += 1, kR -= 2) {
            if (iR !== d && aIndexesR[iR] < aIndexPrev1) {
              aFirst = aIndexesR[iR];
            } else {
              aFirst = aIndexPrev1 - 1;
              if (aFirst < aStart) {
                return iR - 1;
              }
            }
            aIndexPrev1 = aIndexesR[iR];
            aIndexesR[iR] = aFirst - countCommonItemsR(aStart, aFirst - 1, bStart, bR + aFirst - kR - 1, isCommon);
          }
          return iMaxR;
        };
        const extendOverlappablePathsF = (d, aStart, aEnd, bStart, bEnd, isCommon, aIndexesF, iMaxF, aIndexesR, iMaxR, division) => {
          const bF = bStart - aStart;
          const aLength = aEnd - aStart;
          const bLength = bEnd - bStart;
          const baDeltaLength = bLength - aLength;
          const kMinOverlapF = -baDeltaLength - (d - 1);
          const kMaxOverlapF = -baDeltaLength + (d - 1);
          let aIndexPrev1 = NOT_YET_SET;
          const nF = Math.min(d, iMaxF);
          for (let iF = 0, kF = -d; iF <= nF; iF += 1, kF += 2) {
            const insert = iF === 0 || iF !== d && aIndexPrev1 < aIndexesF[iF];
            const aLastPrev = insert ? aIndexesF[iF] : aIndexPrev1;
            const aFirst = insert ? aLastPrev : aLastPrev + 1;
            const bFirst = bF + aFirst - kF;
            const nCommonF = countCommonItemsF(aFirst + 1, aEnd, bFirst + 1, bEnd, isCommon);
            const aLast = aFirst + nCommonF;
            aIndexPrev1 = aIndexesF[iF];
            aIndexesF[iF] = aLast;
            if (kMinOverlapF <= kF && kF <= kMaxOverlapF) {
              const iR = (d - 1 - (kF + baDeltaLength)) / 2;
              if (iR <= iMaxR && aIndexesR[iR] - 1 <= aLast) {
                const bLastPrev = bF + aLastPrev - (insert ? kF + 1 : kF - 1);
                const nCommonR = countCommonItemsR(aStart, aLastPrev, bStart, bLastPrev, isCommon);
                const aIndexPrevFirst = aLastPrev - nCommonR;
                const bIndexPrevFirst = bLastPrev - nCommonR;
                const aEndPreceding = aIndexPrevFirst + 1;
                const bEndPreceding = bIndexPrevFirst + 1;
                division.nChangePreceding = d - 1;
                if (d - 1 === aEndPreceding + bEndPreceding - aStart - bStart) {
                  division.aEndPreceding = aStart;
                  division.bEndPreceding = bStart;
                } else {
                  division.aEndPreceding = aEndPreceding;
                  division.bEndPreceding = bEndPreceding;
                }
                division.nCommonPreceding = nCommonR;
                if (nCommonR !== 0) {
                  division.aCommonPreceding = aEndPreceding;
                  division.bCommonPreceding = bEndPreceding;
                }
                division.nCommonFollowing = nCommonF;
                if (nCommonF !== 0) {
                  division.aCommonFollowing = aFirst + 1;
                  division.bCommonFollowing = bFirst + 1;
                }
                const aStartFollowing = aLast + 1;
                const bStartFollowing = bFirst + nCommonF + 1;
                division.nChangeFollowing = d - 1;
                if (d - 1 === aEnd + bEnd - aStartFollowing - bStartFollowing) {
                  division.aStartFollowing = aEnd;
                  division.bStartFollowing = bEnd;
                } else {
                  division.aStartFollowing = aStartFollowing;
                  division.bStartFollowing = bStartFollowing;
                }
                return true;
              }
            }
          }
          return false;
        };
        const extendOverlappablePathsR = (d, aStart, aEnd, bStart, bEnd, isCommon, aIndexesF, iMaxF, aIndexesR, iMaxR, division) => {
          const bR = bEnd - aEnd;
          const aLength = aEnd - aStart;
          const bLength = bEnd - bStart;
          const baDeltaLength = bLength - aLength;
          const kMinOverlapR = baDeltaLength - d;
          const kMaxOverlapR = baDeltaLength + d;
          let aIndexPrev1 = NOT_YET_SET;
          const nR = Math.min(d, iMaxR);
          for (let iR = 0, kR = d; iR <= nR; iR += 1, kR -= 2) {
            const insert = iR === 0 || iR !== d && aIndexesR[iR] < aIndexPrev1;
            const aLastPrev = insert ? aIndexesR[iR] : aIndexPrev1;
            const aFirst = insert ? aLastPrev : aLastPrev - 1;
            const bFirst = bR + aFirst - kR;
            const nCommonR = countCommonItemsR(aStart, aFirst - 1, bStart, bFirst - 1, isCommon);
            const aLast = aFirst - nCommonR;
            aIndexPrev1 = aIndexesR[iR];
            aIndexesR[iR] = aLast;
            if (kMinOverlapR <= kR && kR <= kMaxOverlapR) {
              const iF = (d + (kR - baDeltaLength)) / 2;
              if (iF <= iMaxF && aLast - 1 <= aIndexesF[iF]) {
                const bLast = bFirst - nCommonR;
                division.nChangePreceding = d;
                if (d === aLast + bLast - aStart - bStart) {
                  division.aEndPreceding = aStart;
                  division.bEndPreceding = bStart;
                } else {
                  division.aEndPreceding = aLast;
                  division.bEndPreceding = bLast;
                }
                division.nCommonPreceding = nCommonR;
                if (nCommonR !== 0) {
                  division.aCommonPreceding = aLast;
                  division.bCommonPreceding = bLast;
                }
                division.nChangeFollowing = d - 1;
                if (d === 1) {
                  division.nCommonFollowing = 0;
                  division.aStartFollowing = aEnd;
                  division.bStartFollowing = bEnd;
                } else {
                  const bLastPrev = bR + aLastPrev - (insert ? kR - 1 : kR + 1);
                  const nCommonF = countCommonItemsF(aLastPrev, aEnd, bLastPrev, bEnd, isCommon);
                  division.nCommonFollowing = nCommonF;
                  if (nCommonF !== 0) {
                    division.aCommonFollowing = aLastPrev;
                    division.bCommonFollowing = bLastPrev;
                  }
                  const aStartFollowing = aLastPrev + nCommonF;
                  const bStartFollowing = bLastPrev + nCommonF;
                  if (d - 1 === aEnd + bEnd - aStartFollowing - bStartFollowing) {
                    division.aStartFollowing = aEnd;
                    division.bStartFollowing = bEnd;
                  } else {
                    division.aStartFollowing = aStartFollowing;
                    division.bStartFollowing = bStartFollowing;
                  }
                }
                return true;
              }
            }
          }
          return false;
        };
        const divide = (nChange, aStart, aEnd, bStart, bEnd, isCommon, aIndexesF, aIndexesR, division) => {
          const bF = bStart - aStart;
          const bR = bEnd - aEnd;
          const aLength = aEnd - aStart;
          const bLength = bEnd - bStart;
          const baDeltaLength = bLength - aLength;
          let iMaxF = aLength;
          let iMaxR = aLength;
          aIndexesF[0] = aStart - 1;
          aIndexesR[0] = aEnd;
          if (baDeltaLength % 2 === 0) {
            const dMin = (nChange || baDeltaLength) / 2;
            const dMax = (aLength + bLength) / 2;
            for (let d = 1; d <= dMax; d += 1) {
              iMaxF = extendPathsF(d, aEnd, bEnd, bF, isCommon, aIndexesF, iMaxF);
              if (d < dMin) {
                iMaxR = extendPathsR(d, aStart, bStart, bR, isCommon, aIndexesR, iMaxR);
              } else if (
                // If a reverse path overlaps a forward path in the same diagonal,
                // return a division of the index intervals at the middle change.
                extendOverlappablePathsR(d, aStart, aEnd, bStart, bEnd, isCommon, aIndexesF, iMaxF, aIndexesR, iMaxR, division)
              ) {
                return;
              }
            }
          } else {
            const dMin = ((nChange || baDeltaLength) + 1) / 2;
            const dMax = (aLength + bLength + 1) / 2;
            let d = 1;
            iMaxF = extendPathsF(d, aEnd, bEnd, bF, isCommon, aIndexesF, iMaxF);
            for (d += 1; d <= dMax; d += 1) {
              iMaxR = extendPathsR(d - 1, aStart, bStart, bR, isCommon, aIndexesR, iMaxR);
              if (d < dMin) {
                iMaxF = extendPathsF(d, aEnd, bEnd, bF, isCommon, aIndexesF, iMaxF);
              } else if (
                // If a forward path overlaps a reverse path in the same diagonal,
                // return a division of the index intervals at the middle change.
                extendOverlappablePathsF(d, aStart, aEnd, bStart, bEnd, isCommon, aIndexesF, iMaxF, aIndexesR, iMaxR, division)
              ) {
                return;
              }
            }
          }
          throw new Error(`${pkg}: no overlap aStart=${aStart} aEnd=${aEnd} bStart=${bStart} bEnd=${bEnd}`);
        };
        const findSubsequences = (nChange, aStart, aEnd, bStart, bEnd, transposed, callbacks, aIndexesF, aIndexesR, division) => {
          if (bEnd - bStart < aEnd - aStart) {
            transposed = !transposed;
            if (transposed && callbacks.length === 1) {
              const {
                foundSubsequence: foundSubsequence2,
                isCommon: isCommon2
              } = callbacks[0];
              callbacks[1] = {
                foundSubsequence: (nCommon, bCommon, aCommon) => {
                  foundSubsequence2(nCommon, aCommon, bCommon);
                },
                isCommon: (bIndex, aIndex) => isCommon2(aIndex, bIndex)
              };
            }
            const tStart = aStart;
            const tEnd = aEnd;
            aStart = bStart;
            aEnd = bEnd;
            bStart = tStart;
            bEnd = tEnd;
          }
          const {
            foundSubsequence,
            isCommon
          } = callbacks[transposed ? 1 : 0];
          divide(nChange, aStart, aEnd, bStart, bEnd, isCommon, aIndexesF, aIndexesR, division);
          const {
            nChangePreceding,
            aEndPreceding,
            bEndPreceding,
            nCommonPreceding,
            aCommonPreceding,
            bCommonPreceding,
            nCommonFollowing,
            aCommonFollowing,
            bCommonFollowing,
            nChangeFollowing,
            aStartFollowing,
            bStartFollowing
          } = division;
          if (aStart < aEndPreceding && bStart < bEndPreceding) {
            findSubsequences(nChangePreceding, aStart, aEndPreceding, bStart, bEndPreceding, transposed, callbacks, aIndexesF, aIndexesR, division);
          }
          if (nCommonPreceding !== 0) {
            foundSubsequence(nCommonPreceding, aCommonPreceding, bCommonPreceding);
          }
          if (nCommonFollowing !== 0) {
            foundSubsequence(nCommonFollowing, aCommonFollowing, bCommonFollowing);
          }
          if (aStartFollowing < aEnd && bStartFollowing < bEnd) {
            findSubsequences(nChangeFollowing, aStartFollowing, aEnd, bStartFollowing, bEnd, transposed, callbacks, aIndexesF, aIndexesR, division);
          }
        };
        const validateLength = (name, arg) => {
          if (typeof arg !== "number") {
            throw new TypeError(`${pkg}: ${name} typeof ${typeof arg} is not a number`);
          }
          if (!Number.isSafeInteger(arg)) {
            throw new RangeError(`${pkg}: ${name} value ${arg} is not a safe integer`);
          }
          if (arg < 0) {
            throw new RangeError(`${pkg}: ${name} value ${arg} is a negative integer`);
          }
        };
        const validateCallback = (name, arg) => {
          const type = typeof arg;
          if (type !== "function") {
            throw new TypeError(`${pkg}: ${name} typeof ${type} is not a function`);
          }
        };
        function diffSequence(aLength, bLength, isCommon, foundSubsequence) {
          validateLength("aLength", aLength);
          validateLength("bLength", bLength);
          validateCallback("isCommon", isCommon);
          validateCallback("foundSubsequence", foundSubsequence);
          const nCommonF = countCommonItemsF(0, aLength, 0, bLength, isCommon);
          if (nCommonF !== 0) {
            foundSubsequence(nCommonF, 0, 0);
          }
          if (aLength !== nCommonF || bLength !== nCommonF) {
            const aStart = nCommonF;
            const bStart = nCommonF;
            const nCommonR = countCommonItemsR(aStart, aLength - 1, bStart, bLength - 1, isCommon);
            const aEnd = aLength - nCommonR;
            const bEnd = bLength - nCommonR;
            const nCommonFR = nCommonF + nCommonR;
            if (aLength !== nCommonFR && bLength !== nCommonFR) {
              const nChange = 0;
              const transposed = false;
              const callbacks = [{
                foundSubsequence,
                isCommon
              }];
              const aIndexesF = [NOT_YET_SET];
              const aIndexesR = [NOT_YET_SET];
              const division = {
                aCommonFollowing: NOT_YET_SET,
                aCommonPreceding: NOT_YET_SET,
                aEndPreceding: NOT_YET_SET,
                aStartFollowing: NOT_YET_SET,
                bCommonFollowing: NOT_YET_SET,
                bCommonPreceding: NOT_YET_SET,
                bEndPreceding: NOT_YET_SET,
                bStartFollowing: NOT_YET_SET,
                nChangeFollowing: NOT_YET_SET,
                nChangePreceding: NOT_YET_SET,
                nCommonFollowing: NOT_YET_SET,
                nCommonPreceding: NOT_YET_SET
              };
              findSubsequences(nChange, aStart, aEnd, bStart, bEnd, transposed, callbacks, aIndexesF, aIndexesR, division);
            }
            if (nCommonR !== 0) {
              foundSubsequence(nCommonR, aEnd, bEnd);
            }
          }
        }
      })();
      module2.exports = __webpack_exports__;
    })();
  }
});

// node_modules/jest-diff/build/index.js
var require_build5 = __commonJS({
  "node_modules/jest-diff/build/index.js"(exports2, module2) {
    (() => {
      "use strict";
      var __webpack_modules__ = {
        /***/
        "./src/cleanupSemantic.ts": (
          /***/
          ((__unused_webpack_module, exports3) => {
            Object.defineProperty(exports3, "__esModule", {
              value: true
            });
            exports3.cleanupSemantic = exports3.Diff = exports3.DIFF_INSERT = exports3.DIFF_EQUAL = exports3.DIFF_DELETE = void 0;
            var DIFF_DELETE = exports3.DIFF_DELETE = -1;
            var DIFF_INSERT = exports3.DIFF_INSERT = 1;
            var DIFF_EQUAL = exports3.DIFF_EQUAL = 0;
            class Diff {
              0;
              1;
              constructor(op, text) {
                this[0] = op;
                this[1] = text;
              }
            }
            exports3.Diff = Diff;
            var diff_commonPrefix = function(text1, text2) {
              if (!text1 || !text2 || text1.charAt(0) != text2.charAt(0)) {
                return 0;
              }
              var pointermin = 0;
              var pointermax = Math.min(text1.length, text2.length);
              var pointermid = pointermax;
              var pointerstart = 0;
              while (pointermin < pointermid) {
                if (text1.substring(pointerstart, pointermid) == text2.substring(pointerstart, pointermid)) {
                  pointermin = pointermid;
                  pointerstart = pointermin;
                } else {
                  pointermax = pointermid;
                }
                pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
              }
              return pointermid;
            };
            var diff_commonSuffix = function(text1, text2) {
              if (!text1 || !text2 || text1.charAt(text1.length - 1) != text2.charAt(text2.length - 1)) {
                return 0;
              }
              var pointermin = 0;
              var pointermax = Math.min(text1.length, text2.length);
              var pointermid = pointermax;
              var pointerend = 0;
              while (pointermin < pointermid) {
                if (text1.substring(text1.length - pointermid, text1.length - pointerend) == text2.substring(text2.length - pointermid, text2.length - pointerend)) {
                  pointermin = pointermid;
                  pointerend = pointermin;
                } else {
                  pointermax = pointermid;
                }
                pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
              }
              return pointermid;
            };
            var diff_commonOverlap_ = function(text1, text2) {
              var text1_length = text1.length;
              var text2_length = text2.length;
              if (text1_length == 0 || text2_length == 0) {
                return 0;
              }
              if (text1_length > text2_length) {
                text1 = text1.substring(text1_length - text2_length);
              } else if (text1_length < text2_length) {
                text2 = text2.substring(0, text1_length);
              }
              var text_length = Math.min(text1_length, text2_length);
              if (text1 == text2) {
                return text_length;
              }
              var best = 0;
              var length = 1;
              while (true) {
                var pattern = text1.substring(text_length - length);
                var found = text2.indexOf(pattern);
                if (found == -1) {
                  return best;
                }
                length += found;
                if (found == 0 || text1.substring(text_length - length) == text2.substring(0, length)) {
                  best = length;
                  length++;
                }
              }
            };
            var diff_cleanupSemantic = function(diffs) {
              var changes = false;
              var equalities = [];
              var equalitiesLength = 0;
              var lastEquality = null;
              var pointer = 0;
              var length_insertions1 = 0;
              var length_deletions1 = 0;
              var length_insertions2 = 0;
              var length_deletions2 = 0;
              while (pointer < diffs.length) {
                if (diffs[pointer][0] == DIFF_EQUAL) {
                  equalities[equalitiesLength++] = pointer;
                  length_insertions1 = length_insertions2;
                  length_deletions1 = length_deletions2;
                  length_insertions2 = 0;
                  length_deletions2 = 0;
                  lastEquality = diffs[pointer][1];
                } else {
                  if (diffs[pointer][0] == DIFF_INSERT) {
                    length_insertions2 += diffs[pointer][1].length;
                  } else {
                    length_deletions2 += diffs[pointer][1].length;
                  }
                  if (lastEquality && lastEquality.length <= Math.max(length_insertions1, length_deletions1) && lastEquality.length <= Math.max(length_insertions2, length_deletions2)) {
                    diffs.splice(equalities[equalitiesLength - 1], 0, new Diff(DIFF_DELETE, lastEquality));
                    diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT;
                    equalitiesLength--;
                    equalitiesLength--;
                    pointer = equalitiesLength > 0 ? equalities[equalitiesLength - 1] : -1;
                    length_insertions1 = 0;
                    length_deletions1 = 0;
                    length_insertions2 = 0;
                    length_deletions2 = 0;
                    lastEquality = null;
                    changes = true;
                  }
                }
                pointer++;
              }
              if (changes) {
                diff_cleanupMerge(diffs);
              }
              diff_cleanupSemanticLossless(diffs);
              pointer = 1;
              while (pointer < diffs.length) {
                if (diffs[pointer - 1][0] == DIFF_DELETE && diffs[pointer][0] == DIFF_INSERT) {
                  var deletion = diffs[pointer - 1][1];
                  var insertion = diffs[pointer][1];
                  var overlap_length1 = diff_commonOverlap_(deletion, insertion);
                  var overlap_length2 = diff_commonOverlap_(insertion, deletion);
                  if (overlap_length1 >= overlap_length2) {
                    if (overlap_length1 >= deletion.length / 2 || overlap_length1 >= insertion.length / 2) {
                      diffs.splice(pointer, 0, new Diff(DIFF_EQUAL, insertion.substring(0, overlap_length1)));
                      diffs[pointer - 1][1] = deletion.substring(0, deletion.length - overlap_length1);
                      diffs[pointer + 1][1] = insertion.substring(overlap_length1);
                      pointer++;
                    }
                  } else {
                    if (overlap_length2 >= deletion.length / 2 || overlap_length2 >= insertion.length / 2) {
                      diffs.splice(pointer, 0, new Diff(DIFF_EQUAL, deletion.substring(0, overlap_length2)));
                      diffs[pointer - 1][0] = DIFF_INSERT;
                      diffs[pointer - 1][1] = insertion.substring(0, insertion.length - overlap_length2);
                      diffs[pointer + 1][0] = DIFF_DELETE;
                      diffs[pointer + 1][1] = deletion.substring(overlap_length2);
                      pointer++;
                    }
                  }
                  pointer++;
                }
                pointer++;
              }
            };
            exports3.cleanupSemantic = diff_cleanupSemantic;
            var diff_cleanupSemanticLossless = function(diffs) {
              function diff_cleanupSemanticScore_(one, two) {
                if (!one || !two) {
                  return 6;
                }
                var char1 = one.charAt(one.length - 1);
                var char2 = two.charAt(0);
                var nonAlphaNumeric1 = char1.match(nonAlphaNumericRegex_);
                var nonAlphaNumeric2 = char2.match(nonAlphaNumericRegex_);
                var whitespace1 = nonAlphaNumeric1 && char1.match(whitespaceRegex_);
                var whitespace2 = nonAlphaNumeric2 && char2.match(whitespaceRegex_);
                var lineBreak1 = whitespace1 && char1.match(linebreakRegex_);
                var lineBreak2 = whitespace2 && char2.match(linebreakRegex_);
                var blankLine1 = lineBreak1 && one.match(blanklineEndRegex_);
                var blankLine2 = lineBreak2 && two.match(blanklineStartRegex_);
                if (blankLine1 || blankLine2) {
                  return 5;
                } else if (lineBreak1 || lineBreak2) {
                  return 4;
                } else if (nonAlphaNumeric1 && !whitespace1 && whitespace2) {
                  return 3;
                } else if (whitespace1 || whitespace2) {
                  return 2;
                } else if (nonAlphaNumeric1 || nonAlphaNumeric2) {
                  return 1;
                }
                return 0;
              }
              var pointer = 1;
              while (pointer < diffs.length - 1) {
                if (diffs[pointer - 1][0] == DIFF_EQUAL && diffs[pointer + 1][0] == DIFF_EQUAL) {
                  var equality1 = diffs[pointer - 1][1];
                  var edit = diffs[pointer][1];
                  var equality2 = diffs[pointer + 1][1];
                  var commonOffset = diff_commonSuffix(equality1, edit);
                  if (commonOffset) {
                    var commonString = edit.substring(edit.length - commonOffset);
                    equality1 = equality1.substring(0, equality1.length - commonOffset);
                    edit = commonString + edit.substring(0, edit.length - commonOffset);
                    equality2 = commonString + equality2;
                  }
                  var bestEquality1 = equality1;
                  var bestEdit = edit;
                  var bestEquality2 = equality2;
                  var bestScore = diff_cleanupSemanticScore_(equality1, edit) + diff_cleanupSemanticScore_(edit, equality2);
                  while (edit.charAt(0) === equality2.charAt(0)) {
                    equality1 += edit.charAt(0);
                    edit = edit.substring(1) + equality2.charAt(0);
                    equality2 = equality2.substring(1);
                    var score = diff_cleanupSemanticScore_(equality1, edit) + diff_cleanupSemanticScore_(edit, equality2);
                    if (score >= bestScore) {
                      bestScore = score;
                      bestEquality1 = equality1;
                      bestEdit = edit;
                      bestEquality2 = equality2;
                    }
                  }
                  if (diffs[pointer - 1][1] != bestEquality1) {
                    if (bestEquality1) {
                      diffs[pointer - 1][1] = bestEquality1;
                    } else {
                      diffs.splice(pointer - 1, 1);
                      pointer--;
                    }
                    diffs[pointer][1] = bestEdit;
                    if (bestEquality2) {
                      diffs[pointer + 1][1] = bestEquality2;
                    } else {
                      diffs.splice(pointer + 1, 1);
                      pointer--;
                    }
                  }
                }
                pointer++;
              }
            };
            var nonAlphaNumericRegex_ = /[^a-zA-Z0-9]/;
            var whitespaceRegex_ = /\s/;
            var linebreakRegex_ = /[\r\n]/;
            var blanklineEndRegex_ = /\n\r?\n$/;
            var blanklineStartRegex_ = /^\r?\n\r?\n/;
            var diff_cleanupMerge = function(diffs) {
              diffs.push(new Diff(DIFF_EQUAL, ""));
              var pointer = 0;
              var count_delete = 0;
              var count_insert = 0;
              var text_delete = "";
              var text_insert = "";
              var commonlength;
              while (pointer < diffs.length) {
                switch (diffs[pointer][0]) {
                  case DIFF_INSERT:
                    count_insert++;
                    text_insert += diffs[pointer][1];
                    pointer++;
                    break;
                  case DIFF_DELETE:
                    count_delete++;
                    text_delete += diffs[pointer][1];
                    pointer++;
                    break;
                  case DIFF_EQUAL:
                    if (count_delete + count_insert > 1) {
                      if (count_delete !== 0 && count_insert !== 0) {
                        commonlength = diff_commonPrefix(text_insert, text_delete);
                        if (commonlength !== 0) {
                          if (pointer - count_delete - count_insert > 0 && diffs[pointer - count_delete - count_insert - 1][0] == DIFF_EQUAL) {
                            diffs[pointer - count_delete - count_insert - 1][1] += text_insert.substring(0, commonlength);
                          } else {
                            diffs.splice(0, 0, new Diff(DIFF_EQUAL, text_insert.substring(0, commonlength)));
                            pointer++;
                          }
                          text_insert = text_insert.substring(commonlength);
                          text_delete = text_delete.substring(commonlength);
                        }
                        commonlength = diff_commonSuffix(text_insert, text_delete);
                        if (commonlength !== 0) {
                          diffs[pointer][1] = text_insert.substring(text_insert.length - commonlength) + diffs[pointer][1];
                          text_insert = text_insert.substring(0, text_insert.length - commonlength);
                          text_delete = text_delete.substring(0, text_delete.length - commonlength);
                        }
                      }
                      pointer -= count_delete + count_insert;
                      diffs.splice(pointer, count_delete + count_insert);
                      if (text_delete.length) {
                        diffs.splice(pointer, 0, new Diff(DIFF_DELETE, text_delete));
                        pointer++;
                      }
                      if (text_insert.length) {
                        diffs.splice(pointer, 0, new Diff(DIFF_INSERT, text_insert));
                        pointer++;
                      }
                      pointer++;
                    } else if (pointer !== 0 && diffs[pointer - 1][0] == DIFF_EQUAL) {
                      diffs[pointer - 1][1] += diffs[pointer][1];
                      diffs.splice(pointer, 1);
                    } else {
                      pointer++;
                    }
                    count_insert = 0;
                    count_delete = 0;
                    text_delete = "";
                    text_insert = "";
                    break;
                }
              }
              if (diffs[diffs.length - 1][1] === "") {
                diffs.pop();
              }
              var changes = false;
              pointer = 1;
              while (pointer < diffs.length - 1) {
                if (diffs[pointer - 1][0] == DIFF_EQUAL && diffs[pointer + 1][0] == DIFF_EQUAL) {
                  if (diffs[pointer][1].substring(diffs[pointer][1].length - diffs[pointer - 1][1].length) == diffs[pointer - 1][1]) {
                    diffs[pointer][1] = diffs[pointer - 1][1] + diffs[pointer][1].substring(0, diffs[pointer][1].length - diffs[pointer - 1][1].length);
                    diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];
                    diffs.splice(pointer - 1, 1);
                    changes = true;
                  } else if (diffs[pointer][1].substring(0, diffs[pointer + 1][1].length) == diffs[pointer + 1][1]) {
                    diffs[pointer - 1][1] += diffs[pointer + 1][1];
                    diffs[pointer][1] = diffs[pointer][1].substring(diffs[pointer + 1][1].length) + diffs[pointer + 1][1];
                    diffs.splice(pointer + 1, 1);
                    changes = true;
                  }
                }
                pointer++;
              }
              if (changes) {
                diff_cleanupMerge(diffs);
              }
            };
          })
        ),
        /***/
        "./src/constants.ts": (
          /***/
          ((__unused_webpack_module, exports3) => {
            Object.defineProperty(exports3, "__esModule", {
              value: true
            });
            exports3.SIMILAR_MESSAGE = exports3.NO_DIFF_MESSAGE = void 0;
            const NO_DIFF_MESSAGE = exports3.NO_DIFF_MESSAGE = "Compared values have no visual difference.";
            const SIMILAR_MESSAGE = exports3.SIMILAR_MESSAGE = "Compared values serialize to the same structure.\nPrinting internal object structure without calling `toJSON` instead.";
          })
        ),
        /***/
        "./src/diffLines.ts": (
          /***/
          ((__unused_webpack_module, exports3, __webpack_require__2) => {
            Object.defineProperty(exports3, "__esModule", {
              value: true
            });
            exports3.printDiffLines = exports3.diffLinesUnified2 = exports3.diffLinesUnified = exports3.diffLinesRaw = void 0;
            var _diffSequences = _interopRequireDefault(require_build4());
            var _cleanupSemantic = __webpack_require__2("./src/cleanupSemantic.ts");
            var _escapeControlCharacters = __webpack_require__2("./src/escapeControlCharacters.ts");
            var _joinAlignedDiffs = __webpack_require__2("./src/joinAlignedDiffs.ts");
            var _normalizeDiffOptions = __webpack_require__2("./src/normalizeDiffOptions.ts");
            function _interopRequireDefault(e) {
              return e && e.__esModule ? e : { default: e };
            }
            const isEmptyString = (lines) => lines.length === 1 && lines[0].length === 0;
            const countChanges = (diffs) => {
              let a = 0;
              let b = 0;
              for (const diff2 of diffs) {
                switch (diff2[0]) {
                  case _cleanupSemantic.DIFF_DELETE:
                    a += 1;
                    break;
                  case _cleanupSemantic.DIFF_INSERT:
                    b += 1;
                    break;
                }
              }
              return {
                a,
                b
              };
            };
            const printAnnotation = ({
              aAnnotation,
              aColor,
              aIndicator,
              bAnnotation,
              bColor,
              bIndicator,
              includeChangeCounts,
              omitAnnotationLines
            }, changeCounts) => {
              if (omitAnnotationLines) {
                return "";
              }
              let aRest = "";
              let bRest = "";
              if (includeChangeCounts) {
                const aCount = String(changeCounts.a);
                const bCount = String(changeCounts.b);
                const baAnnotationLengthDiff = bAnnotation.length - aAnnotation.length;
                const aAnnotationPadding = " ".repeat(Math.max(0, baAnnotationLengthDiff));
                const bAnnotationPadding = " ".repeat(Math.max(0, -baAnnotationLengthDiff));
                const baCountLengthDiff = bCount.length - aCount.length;
                const aCountPadding = " ".repeat(Math.max(0, baCountLengthDiff));
                const bCountPadding = " ".repeat(Math.max(0, -baCountLengthDiff));
                aRest = `${aAnnotationPadding}  ${aIndicator} ${aCountPadding}${aCount}`;
                bRest = `${bAnnotationPadding}  ${bIndicator} ${bCountPadding}${bCount}`;
              }
              const a = `${aIndicator} ${aAnnotation}${aRest}`;
              const b = `${bIndicator} ${bAnnotation}${bRest}`;
              return `${aColor(a)}
${bColor(b)}

`;
            };
            const printDiffLines = (diffs, options) => printAnnotation(options, countChanges(diffs)) + (options.expand ? (0, _joinAlignedDiffs.joinAlignedDiffsExpand)(diffs, options) : (0, _joinAlignedDiffs.joinAlignedDiffsNoExpand)(diffs, options));
            exports3.printDiffLines = printDiffLines;
            const diffLinesUnified = (aLines, bLines, options) => printDiffLines(diffLinesRaw(isEmptyString(aLines) ? [] : aLines.map(_escapeControlCharacters.escapeControlCharacters), isEmptyString(bLines) ? [] : bLines.map(_escapeControlCharacters.escapeControlCharacters)), (0, _normalizeDiffOptions.normalizeDiffOptions)(options));
            exports3.diffLinesUnified = diffLinesUnified;
            const diffLinesUnified2 = (aLinesDisplay, bLinesDisplay, aLinesCompare, bLinesCompare, options) => {
              if (isEmptyString(aLinesDisplay) && isEmptyString(aLinesCompare)) {
                aLinesDisplay = [];
                aLinesCompare = [];
              }
              if (isEmptyString(bLinesDisplay) && isEmptyString(bLinesCompare)) {
                bLinesDisplay = [];
                bLinesCompare = [];
              }
              if (aLinesDisplay.length !== aLinesCompare.length || bLinesDisplay.length !== bLinesCompare.length) {
                return diffLinesUnified(aLinesDisplay, bLinesDisplay, options);
              }
              const diffs = diffLinesRaw(aLinesCompare, bLinesCompare);
              let aIndex = 0;
              let bIndex = 0;
              for (const diff2 of diffs) {
                switch (diff2[0]) {
                  case _cleanupSemantic.DIFF_DELETE:
                    diff2[1] = aLinesDisplay[aIndex];
                    aIndex += 1;
                    break;
                  case _cleanupSemantic.DIFF_INSERT:
                    diff2[1] = bLinesDisplay[bIndex];
                    bIndex += 1;
                    break;
                  default:
                    diff2[1] = bLinesDisplay[bIndex];
                    aIndex += 1;
                    bIndex += 1;
                }
              }
              return printDiffLines(diffs, (0, _normalizeDiffOptions.normalizeDiffOptions)(options));
            };
            exports3.diffLinesUnified2 = diffLinesUnified2;
            const diffLinesRaw = (aLines, bLines) => {
              const aLength = aLines.length;
              const bLength = bLines.length;
              const isCommon = (aIndex2, bIndex2) => aLines[aIndex2] === bLines[bIndex2];
              const diffs = [];
              let aIndex = 0;
              let bIndex = 0;
              const foundSubsequence = (nCommon, aCommon, bCommon) => {
                for (; aIndex !== aCommon; aIndex += 1) {
                  diffs.push(new _cleanupSemantic.Diff(_cleanupSemantic.DIFF_DELETE, aLines[aIndex]));
                }
                for (; bIndex !== bCommon; bIndex += 1) {
                  diffs.push(new _cleanupSemantic.Diff(_cleanupSemantic.DIFF_INSERT, bLines[bIndex]));
                }
                for (; nCommon !== 0; nCommon -= 1, aIndex += 1, bIndex += 1) {
                  diffs.push(new _cleanupSemantic.Diff(_cleanupSemantic.DIFF_EQUAL, bLines[bIndex]));
                }
              };
              (0, _diffSequences.default)(aLength, bLength, isCommon, foundSubsequence);
              for (; aIndex !== aLength; aIndex += 1) {
                diffs.push(new _cleanupSemantic.Diff(_cleanupSemantic.DIFF_DELETE, aLines[aIndex]));
              }
              for (; bIndex !== bLength; bIndex += 1) {
                diffs.push(new _cleanupSemantic.Diff(_cleanupSemantic.DIFF_INSERT, bLines[bIndex]));
              }
              return diffs;
            };
            exports3.diffLinesRaw = diffLinesRaw;
          })
        ),
        /***/
        "./src/diffStrings.ts": (
          /***/
          ((__unused_webpack_module, exports3, __webpack_require__2) => {
            Object.defineProperty(exports3, "__esModule", {
              value: true
            });
            exports3["default"] = void 0;
            var _diffSequences = _interopRequireDefault(require_build4());
            var _cleanupSemantic = __webpack_require__2("./src/cleanupSemantic.ts");
            function _interopRequireDefault(e) {
              return e && e.__esModule ? e : { default: e };
            }
            const diffStrings = (a, b) => {
              const isCommon = (aIndex2, bIndex2) => a[aIndex2] === b[bIndex2];
              let aIndex = 0;
              let bIndex = 0;
              const diffs = [];
              const foundSubsequence = (nCommon, aCommon, bCommon) => {
                if (aIndex !== aCommon) {
                  diffs.push(new _cleanupSemantic.Diff(_cleanupSemantic.DIFF_DELETE, a.slice(aIndex, aCommon)));
                }
                if (bIndex !== bCommon) {
                  diffs.push(new _cleanupSemantic.Diff(_cleanupSemantic.DIFF_INSERT, b.slice(bIndex, bCommon)));
                }
                aIndex = aCommon + nCommon;
                bIndex = bCommon + nCommon;
                diffs.push(new _cleanupSemantic.Diff(_cleanupSemantic.DIFF_EQUAL, b.slice(bCommon, bIndex)));
              };
              (0, _diffSequences.default)(a.length, b.length, isCommon, foundSubsequence);
              if (aIndex !== a.length) {
                diffs.push(new _cleanupSemantic.Diff(_cleanupSemantic.DIFF_DELETE, a.slice(aIndex)));
              }
              if (bIndex !== b.length) {
                diffs.push(new _cleanupSemantic.Diff(_cleanupSemantic.DIFF_INSERT, b.slice(bIndex)));
              }
              return diffs;
            };
            var _default = exports3["default"] = diffStrings;
          })
        ),
        /***/
        "./src/escapeControlCharacters.ts": (
          /***/
          ((__unused_webpack_module, exports3) => {
            Object.defineProperty(exports3, "__esModule", {
              value: true
            });
            exports3.escapeControlCharacters = void 0;
            const escapeControlCharacters = (str) => str.replaceAll(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F-\u009F]/g, (match) => {
              switch (match) {
                case "\b":
                  return "\\b";
                case "\f":
                  return "\\f";
                case "\v":
                  return "\\v";
                default: {
                  const code = match.codePointAt(0);
                  return `\\x${code.toString(16).padStart(2, "0")}`;
                }
              }
            });
            exports3.escapeControlCharacters = escapeControlCharacters;
          })
        ),
        /***/
        "./src/getAlignedDiffs.ts": (
          /***/
          ((__unused_webpack_module, exports3, __webpack_require__2) => {
            Object.defineProperty(exports3, "__esModule", {
              value: true
            });
            exports3["default"] = void 0;
            var _cleanupSemantic = __webpack_require__2("./src/cleanupSemantic.ts");
            const concatenateRelevantDiffs = (op, diffs, changeColor) => diffs.reduce((reduced, diff2) => reduced + (diff2[0] === _cleanupSemantic.DIFF_EQUAL ? diff2[1] : diff2[0] === op && diff2[1].length > 0 ? changeColor(diff2[1]) : ""), "");
            class ChangeBuffer {
              op;
              line;
              // incomplete line
              lines;
              // complete lines
              changeColor;
              constructor(op, changeColor) {
                this.op = op;
                this.line = [];
                this.lines = [];
                this.changeColor = changeColor;
              }
              pushSubstring(substring) {
                this.pushDiff(new _cleanupSemantic.Diff(this.op, substring));
              }
              pushLine() {
                this.lines.push(
                  this.line.length === 1 ? this.line[0][0] === this.op ? this.line[0] : new _cleanupSemantic.Diff(this.op, this.line[0][1]) : new _cleanupSemantic.Diff(this.op, concatenateRelevantDiffs(this.op, this.line, this.changeColor))
                  // was common diff
                );
                this.line.length = 0;
              }
              isLineEmpty() {
                return this.line.length === 0;
              }
              // Minor input to buffer.
              pushDiff(diff2) {
                this.line.push(diff2);
              }
              // Main input to buffer.
              align(diff2) {
                const string = diff2[1];
                if (string.includes("\n")) {
                  const substrings = string.split("\n");
                  const iLast = substrings.length - 1;
                  for (const [i, substring] of substrings.entries()) {
                    if (i < iLast) {
                      this.pushSubstring(substring);
                      this.pushLine();
                    } else if (substring.length > 0) {
                      this.pushSubstring(substring);
                    }
                  }
                } else {
                  this.pushDiff(diff2);
                }
              }
              // Output from buffer.
              moveLinesTo(lines) {
                if (!this.isLineEmpty()) {
                  this.pushLine();
                }
                lines.push(...this.lines);
                this.lines.length = 0;
              }
            }
            class CommonBuffer {
              deleteBuffer;
              insertBuffer;
              lines;
              constructor(deleteBuffer, insertBuffer) {
                this.deleteBuffer = deleteBuffer;
                this.insertBuffer = insertBuffer;
                this.lines = [];
              }
              pushDiffCommonLine(diff2) {
                this.lines.push(diff2);
              }
              pushDiffChangeLines(diff2) {
                const isDiffEmpty = diff2[1].length === 0;
                if (!isDiffEmpty || this.deleteBuffer.isLineEmpty()) {
                  this.deleteBuffer.pushDiff(diff2);
                }
                if (!isDiffEmpty || this.insertBuffer.isLineEmpty()) {
                  this.insertBuffer.pushDiff(diff2);
                }
              }
              flushChangeLines() {
                this.deleteBuffer.moveLinesTo(this.lines);
                this.insertBuffer.moveLinesTo(this.lines);
              }
              // Input to buffer.
              align(diff2) {
                const op = diff2[0];
                const string = diff2[1];
                if (string.includes("\n")) {
                  const substrings = string.split("\n");
                  const iLast = substrings.length - 1;
                  for (const [i, substring] of substrings.entries()) {
                    if (i === 0) {
                      const subdiff = new _cleanupSemantic.Diff(op, substring);
                      if (this.deleteBuffer.isLineEmpty() && this.insertBuffer.isLineEmpty()) {
                        this.flushChangeLines();
                        this.pushDiffCommonLine(subdiff);
                      } else {
                        this.pushDiffChangeLines(subdiff);
                        this.flushChangeLines();
                      }
                    } else if (i < iLast) {
                      this.pushDiffCommonLine(new _cleanupSemantic.Diff(op, substring));
                    } else if (substring.length > 0) {
                      this.pushDiffChangeLines(new _cleanupSemantic.Diff(op, substring));
                    }
                  }
                } else {
                  this.pushDiffChangeLines(diff2);
                }
              }
              // Output from buffer.
              getLines() {
                this.flushChangeLines();
                return this.lines;
              }
            }
            const getAlignedDiffs = (diffs, changeColor) => {
              const deleteBuffer = new ChangeBuffer(_cleanupSemantic.DIFF_DELETE, changeColor);
              const insertBuffer = new ChangeBuffer(_cleanupSemantic.DIFF_INSERT, changeColor);
              const commonBuffer = new CommonBuffer(deleteBuffer, insertBuffer);
              for (const diff2 of diffs) {
                switch (diff2[0]) {
                  case _cleanupSemantic.DIFF_DELETE:
                    deleteBuffer.align(diff2);
                    break;
                  case _cleanupSemantic.DIFF_INSERT:
                    insertBuffer.align(diff2);
                    break;
                  default:
                    commonBuffer.align(diff2);
                }
              }
              return commonBuffer.getLines();
            };
            var _default = exports3["default"] = getAlignedDiffs;
          })
        ),
        /***/
        "./src/joinAlignedDiffs.ts": (
          /***/
          ((__unused_webpack_module, exports3, __webpack_require__2) => {
            Object.defineProperty(exports3, "__esModule", {
              value: true
            });
            exports3.joinAlignedDiffsNoExpand = exports3.joinAlignedDiffsExpand = void 0;
            var _cleanupSemantic = __webpack_require__2("./src/cleanupSemantic.ts");
            const formatTrailingSpaces = (line, trailingSpaceFormatter) => line.replace(/\s+$/, (match) => trailingSpaceFormatter(match));
            const printDiffLine = (line, isFirstOrLast, color, indicator, trailingSpaceFormatter, emptyFirstOrLastLinePlaceholder) => line.length === 0 ? indicator === " " ? isFirstOrLast && emptyFirstOrLastLinePlaceholder.length > 0 ? color(`${indicator} ${emptyFirstOrLastLinePlaceholder}`) : "" : color(indicator) : color(`${indicator} ${formatTrailingSpaces(line, trailingSpaceFormatter)}`);
            const printDeleteLine = (line, isFirstOrLast, {
              aColor,
              aIndicator,
              changeLineTrailingSpaceColor,
              emptyFirstOrLastLinePlaceholder
            }) => printDiffLine(line, isFirstOrLast, aColor, aIndicator, changeLineTrailingSpaceColor, emptyFirstOrLastLinePlaceholder);
            const printInsertLine = (line, isFirstOrLast, {
              bColor,
              bIndicator,
              changeLineTrailingSpaceColor,
              emptyFirstOrLastLinePlaceholder
            }) => printDiffLine(line, isFirstOrLast, bColor, bIndicator, changeLineTrailingSpaceColor, emptyFirstOrLastLinePlaceholder);
            const printCommonLine = (line, isFirstOrLast, {
              commonColor,
              commonIndicator,
              commonLineTrailingSpaceColor,
              emptyFirstOrLastLinePlaceholder
            }) => printDiffLine(line, isFirstOrLast, commonColor, commonIndicator, commonLineTrailingSpaceColor, emptyFirstOrLastLinePlaceholder);
            const createPatchMark = (aStart, aEnd, bStart, bEnd, {
              patchColor
            }) => patchColor(`@@ -${aStart + 1},${aEnd - aStart} +${bStart + 1},${bEnd - bStart} @@`);
            const joinAlignedDiffsNoExpand = (diffs, options) => {
              const iLength = diffs.length;
              const nContextLines = options.contextLines;
              const nContextLines2 = nContextLines + nContextLines;
              let jLength = iLength;
              let hasExcessAtStartOrEnd = false;
              let nExcessesBetweenChanges = 0;
              let i = 0;
              while (i !== iLength) {
                const iStart = i;
                while (i !== iLength && diffs[i][0] === _cleanupSemantic.DIFF_EQUAL) {
                  i += 1;
                }
                if (iStart !== i) {
                  if (iStart === 0) {
                    if (i > nContextLines) {
                      jLength -= i - nContextLines;
                      hasExcessAtStartOrEnd = true;
                    }
                  } else if (i === iLength) {
                    const n = i - iStart;
                    if (n > nContextLines) {
                      jLength -= n - nContextLines;
                      hasExcessAtStartOrEnd = true;
                    }
                  } else {
                    const n = i - iStart;
                    if (n > nContextLines2) {
                      jLength -= n - nContextLines2;
                      nExcessesBetweenChanges += 1;
                    }
                  }
                }
                while (i !== iLength && diffs[i][0] !== _cleanupSemantic.DIFF_EQUAL) {
                  i += 1;
                }
              }
              const hasPatch = nExcessesBetweenChanges !== 0 || hasExcessAtStartOrEnd;
              if (nExcessesBetweenChanges !== 0) {
                jLength += nExcessesBetweenChanges + 1;
              } else if (hasExcessAtStartOrEnd) {
                jLength += 1;
              }
              const jLast = jLength - 1;
              const lines = [];
              let jPatchMark = 0;
              if (hasPatch) {
                lines.push("");
              }
              let aStart = 0;
              let bStart = 0;
              let aEnd = 0;
              let bEnd = 0;
              const pushCommonLine = (line) => {
                const j = lines.length;
                lines.push(printCommonLine(line, j === 0 || j === jLast, options));
                aEnd += 1;
                bEnd += 1;
              };
              const pushDeleteLine = (line) => {
                const j = lines.length;
                lines.push(printDeleteLine(line, j === 0 || j === jLast, options));
                aEnd += 1;
              };
              const pushInsertLine = (line) => {
                const j = lines.length;
                lines.push(printInsertLine(line, j === 0 || j === jLast, options));
                bEnd += 1;
              };
              i = 0;
              while (i !== iLength) {
                let iStart = i;
                while (i !== iLength && diffs[i][0] === _cleanupSemantic.DIFF_EQUAL) {
                  i += 1;
                }
                if (iStart !== i) {
                  if (iStart === 0) {
                    if (i > nContextLines) {
                      iStart = i - nContextLines;
                      aStart = iStart;
                      bStart = iStart;
                      aEnd = aStart;
                      bEnd = bStart;
                    }
                    for (let iCommon = iStart; iCommon !== i; iCommon += 1) {
                      pushCommonLine(diffs[iCommon][1]);
                    }
                  } else if (i === iLength) {
                    const iEnd = i - iStart > nContextLines ? iStart + nContextLines : i;
                    for (let iCommon = iStart; iCommon !== iEnd; iCommon += 1) {
                      pushCommonLine(diffs[iCommon][1]);
                    }
                  } else {
                    const nCommon = i - iStart;
                    if (nCommon > nContextLines2) {
                      const iEnd = iStart + nContextLines;
                      for (let iCommon = iStart; iCommon !== iEnd; iCommon += 1) {
                        pushCommonLine(diffs[iCommon][1]);
                      }
                      lines[jPatchMark] = createPatchMark(aStart, aEnd, bStart, bEnd, options);
                      jPatchMark = lines.length;
                      lines.push("");
                      const nOmit = nCommon - nContextLines2;
                      aStart = aEnd + nOmit;
                      bStart = bEnd + nOmit;
                      aEnd = aStart;
                      bEnd = bStart;
                      for (let iCommon = i - nContextLines; iCommon !== i; iCommon += 1) {
                        pushCommonLine(diffs[iCommon][1]);
                      }
                    } else {
                      for (let iCommon = iStart; iCommon !== i; iCommon += 1) {
                        pushCommonLine(diffs[iCommon][1]);
                      }
                    }
                  }
                }
                while (i !== iLength && diffs[i][0] === _cleanupSemantic.DIFF_DELETE) {
                  pushDeleteLine(diffs[i][1]);
                  i += 1;
                }
                while (i !== iLength && diffs[i][0] === _cleanupSemantic.DIFF_INSERT) {
                  pushInsertLine(diffs[i][1]);
                  i += 1;
                }
              }
              if (hasPatch) {
                lines[jPatchMark] = createPatchMark(aStart, aEnd, bStart, bEnd, options);
              }
              return lines.join("\n");
            };
            exports3.joinAlignedDiffsNoExpand = joinAlignedDiffsNoExpand;
            const joinAlignedDiffsExpand = (diffs, options) => diffs.map((diff2, i, diffs2) => {
              const line = diff2[1];
              const isFirstOrLast = i === 0 || i === diffs2.length - 1;
              switch (diff2[0]) {
                case _cleanupSemantic.DIFF_DELETE:
                  return printDeleteLine(line, isFirstOrLast, options);
                case _cleanupSemantic.DIFF_INSERT:
                  return printInsertLine(line, isFirstOrLast, options);
                default:
                  return printCommonLine(line, isFirstOrLast, options);
              }
            }).join("\n");
            exports3.joinAlignedDiffsExpand = joinAlignedDiffsExpand;
          })
        ),
        /***/
        "./src/normalizeDiffOptions.ts": (
          /***/
          ((__unused_webpack_module, exports3) => {
            Object.defineProperty(exports3, "__esModule", {
              value: true
            });
            exports3.normalizeDiffOptions = exports3.noColor = void 0;
            var _chalk = _interopRequireDefault(require_source());
            function _interopRequireDefault(e) {
              return e && e.__esModule ? e : { default: e };
            }
            const noColor = (string) => string;
            exports3.noColor = noColor;
            const DIFF_CONTEXT_DEFAULT = 5;
            const OPTIONS_DEFAULT = {
              aAnnotation: "Expected",
              aColor: _chalk.default.green,
              aIndicator: "-",
              bAnnotation: "Received",
              bColor: _chalk.default.red,
              bIndicator: "+",
              changeColor: _chalk.default.inverse,
              changeLineTrailingSpaceColor: noColor,
              commonColor: _chalk.default.dim,
              commonIndicator: " ",
              commonLineTrailingSpaceColor: noColor,
              compareKeys: void 0,
              contextLines: DIFF_CONTEXT_DEFAULT,
              emptyFirstOrLastLinePlaceholder: "",
              expand: true,
              includeChangeCounts: false,
              omitAnnotationLines: false,
              patchColor: _chalk.default.yellow
            };
            const getCompareKeys = (compareKeys) => compareKeys && typeof compareKeys === "function" ? compareKeys : OPTIONS_DEFAULT.compareKeys;
            const getContextLines = (contextLines) => typeof contextLines === "number" && Number.isSafeInteger(contextLines) && contextLines >= 0 ? contextLines : DIFF_CONTEXT_DEFAULT;
            const normalizeDiffOptions = (options = {}) => ({
              ...OPTIONS_DEFAULT,
              ...options,
              compareKeys: getCompareKeys(options.compareKeys),
              contextLines: getContextLines(options.contextLines)
            });
            exports3.normalizeDiffOptions = normalizeDiffOptions;
          })
        ),
        /***/
        "./src/printDiffs.ts": (
          /***/
          ((__unused_webpack_module, exports3, __webpack_require__2) => {
            Object.defineProperty(exports3, "__esModule", {
              value: true
            });
            exports3.diffStringsUnified = exports3.diffStringsRaw = void 0;
            var _cleanupSemantic = __webpack_require__2("./src/cleanupSemantic.ts");
            var _diffLines = __webpack_require__2("./src/diffLines.ts");
            var _diffStrings = _interopRequireDefault(__webpack_require__2("./src/diffStrings.ts"));
            var _getAlignedDiffs = _interopRequireDefault(__webpack_require__2("./src/getAlignedDiffs.ts"));
            var _normalizeDiffOptions = __webpack_require__2("./src/normalizeDiffOptions.ts");
            function _interopRequireDefault(e) {
              return e && e.__esModule ? e : { default: e };
            }
            const hasCommonDiff = (diffs, isMultiline) => {
              if (isMultiline) {
                const iLast = diffs.length - 1;
                return diffs.some((diff2, i) => diff2[0] === _cleanupSemantic.DIFF_EQUAL && (i !== iLast || diff2[1] !== "\n"));
              }
              return diffs.some((diff2) => diff2[0] === _cleanupSemantic.DIFF_EQUAL);
            };
            const diffStringsUnified = (a, b, options) => {
              if (a !== b && a.length > 0 && b.length > 0) {
                const isMultiline = a.includes("\n") || b.includes("\n");
                const diffs = diffStringsRaw(
                  isMultiline ? `${a}
` : a,
                  isMultiline ? `${b}
` : b,
                  true
                  // cleanupSemantic
                );
                if (hasCommonDiff(diffs, isMultiline)) {
                  const optionsNormalized = (0, _normalizeDiffOptions.normalizeDiffOptions)(options);
                  const lines = (0, _getAlignedDiffs.default)(diffs, optionsNormalized.changeColor);
                  return (0, _diffLines.printDiffLines)(lines, optionsNormalized);
                }
              }
              return (0, _diffLines.diffLinesUnified)(a.split("\n"), b.split("\n"), options);
            };
            exports3.diffStringsUnified = diffStringsUnified;
            const diffStringsRaw = (a, b, cleanup) => {
              const diffs = (0, _diffStrings.default)(a, b);
              if (cleanup) {
                (0, _cleanupSemantic.cleanupSemantic)(diffs);
              }
              return diffs;
            };
            exports3.diffStringsRaw = diffStringsRaw;
          })
        )
        /******/
      };
      var __webpack_module_cache__ = {};
      function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) {
          return cachedModule.exports;
        }
        var module3 = __webpack_module_cache__[moduleId] = {
          /******/
          // no module.id needed
          /******/
          // no module.loaded needed
          /******/
          exports: {}
          /******/
        };
        __webpack_modules__[moduleId](module3, module3.exports, __webpack_require__);
        return module3.exports;
      }
      var __webpack_exports__ = {};
      (() => {
        var exports3 = __webpack_exports__;
        Object.defineProperty(exports3, "__esModule", {
          value: true
        });
        Object.defineProperty(exports3, "DIFF_DELETE", {
          enumerable: true,
          get: function() {
            return _cleanupSemantic.DIFF_DELETE;
          }
        });
        Object.defineProperty(exports3, "DIFF_EQUAL", {
          enumerable: true,
          get: function() {
            return _cleanupSemantic.DIFF_EQUAL;
          }
        });
        Object.defineProperty(exports3, "DIFF_INSERT", {
          enumerable: true,
          get: function() {
            return _cleanupSemantic.DIFF_INSERT;
          }
        });
        Object.defineProperty(exports3, "Diff", {
          enumerable: true,
          get: function() {
            return _cleanupSemantic.Diff;
          }
        });
        exports3.diff = diff2;
        Object.defineProperty(exports3, "diffLinesRaw", {
          enumerable: true,
          get: function() {
            return _diffLines.diffLinesRaw;
          }
        });
        Object.defineProperty(exports3, "diffLinesUnified", {
          enumerable: true,
          get: function() {
            return _diffLines.diffLinesUnified;
          }
        });
        Object.defineProperty(exports3, "diffLinesUnified2", {
          enumerable: true,
          get: function() {
            return _diffLines.diffLinesUnified2;
          }
        });
        Object.defineProperty(exports3, "diffStringsRaw", {
          enumerable: true,
          get: function() {
            return _printDiffs.diffStringsRaw;
          }
        });
        Object.defineProperty(exports3, "diffStringsUnified", {
          enumerable: true,
          get: function() {
            return _printDiffs.diffStringsUnified;
          }
        });
        var _chalk = _interopRequireDefault(require_source());
        var _getType = require_build();
        var _prettyFormat = require_build3();
        var _cleanupSemantic = __webpack_require__("./src/cleanupSemantic.ts");
        var _constants = __webpack_require__("./src/constants.ts");
        var _diffLines = __webpack_require__("./src/diffLines.ts");
        var _escapeControlCharacters = __webpack_require__("./src/escapeControlCharacters.ts");
        var _normalizeDiffOptions = __webpack_require__("./src/normalizeDiffOptions.ts");
        var _printDiffs = __webpack_require__("./src/printDiffs.ts");
        function _interopRequireDefault(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var src_Symbol = globalThis["jest-symbol-do-not-touch"] || globalThis.Symbol;
        const getCommonMessage = (message, options) => {
          const {
            commonColor
          } = (0, _normalizeDiffOptions.normalizeDiffOptions)(options);
          return commonColor(message);
        };
        const {
          AsymmetricMatcher: AsymmetricMatcher2,
          DOMCollection,
          DOMElement,
          Immutable,
          ReactElement,
          ReactTestComponent
        } = _prettyFormat.plugins;
        const PLUGINS = [ReactTestComponent, ReactElement, DOMElement, DOMCollection, Immutable, AsymmetricMatcher2];
        const FORMAT_OPTIONS = {
          plugins: PLUGINS
        };
        const FALLBACK_FORMAT_OPTIONS = {
          callToJSON: false,
          maxDepth: 10,
          plugins: PLUGINS
        };
        function diff2(a, b, options) {
          if (Object.is(a, b)) {
            return getCommonMessage(_constants.NO_DIFF_MESSAGE, options);
          }
          const aType = (0, _getType.getType)(a);
          let expectedType = aType;
          let omitDifference = false;
          if (aType === "object" && typeof a.asymmetricMatch === "function") {
            if (a.$$typeof !== src_Symbol.for("jest.asymmetricMatcher")) {
              return null;
            }
            if (typeof a.getExpectedType !== "function") {
              return null;
            }
            expectedType = a.getExpectedType();
            omitDifference = expectedType === "string";
          }
          if (expectedType !== (0, _getType.getType)(b)) {
            return `  Comparing two different types of values. Expected ${_chalk.default.green(expectedType)} but received ${_chalk.default.red((0, _getType.getType)(b))}.`;
          }
          if (omitDifference) {
            return null;
          }
          switch (aType) {
            case "string":
              return (0, _diffLines.diffLinesUnified)((0, _escapeControlCharacters.escapeControlCharacters)(a).split("\n"), (0, _escapeControlCharacters.escapeControlCharacters)(b).split("\n"), options);
            case "boolean":
            case "number":
              return comparePrimitive(a, b, options);
            case "map":
              return compareObjects(sortMap(a), sortMap(b), options);
            case "set":
              return compareObjects(sortSet(a), sortSet(b), options);
            default:
              return compareObjects(a, b, options);
          }
        }
        function comparePrimitive(a, b, options) {
          const aFormat = (0, _prettyFormat.format)(a, FORMAT_OPTIONS);
          const bFormat = (0, _prettyFormat.format)(b, FORMAT_OPTIONS);
          return aFormat === bFormat ? getCommonMessage(_constants.NO_DIFF_MESSAGE, options) : (0, _diffLines.diffLinesUnified)(aFormat.split("\n"), bFormat.split("\n"), options);
        }
        function sortMap(map) {
          return new Map([...map].sort());
        }
        function sortSet(set) {
          return new Set([...set].sort());
        }
        function compareObjects(a, b, options) {
          let difference;
          let hasThrown = false;
          try {
            const formatOptions = getFormatOptions(FORMAT_OPTIONS, options);
            difference = getObjectsDifference(a, b, formatOptions, options);
          } catch {
            hasThrown = true;
          }
          const noDiffMessage = getCommonMessage(_constants.NO_DIFF_MESSAGE, options);
          if (difference === void 0 || difference === noDiffMessage) {
            const formatOptions = getFormatOptions(FALLBACK_FORMAT_OPTIONS, options);
            difference = getObjectsDifference(a, b, formatOptions, options);
            if (difference !== noDiffMessage && !hasThrown) {
              difference = `${getCommonMessage(_constants.SIMILAR_MESSAGE, options)}

${difference}`;
            }
          }
          return difference;
        }
        function getFormatOptions(formatOptions, options) {
          const {
            compareKeys
          } = (0, _normalizeDiffOptions.normalizeDiffOptions)(options);
          return {
            ...formatOptions,
            compareKeys
          };
        }
        function getObjectsDifference(a, b, formatOptions, options) {
          const formatOptionsZeroIndent = {
            ...formatOptions,
            indent: 0
          };
          const aCompare = (0, _prettyFormat.format)(a, formatOptionsZeroIndent);
          const bCompare = (0, _prettyFormat.format)(b, formatOptionsZeroIndent);
          if (aCompare === bCompare) {
            return getCommonMessage(_constants.NO_DIFF_MESSAGE, options);
          } else {
            const aDisplay = (0, _prettyFormat.format)(a, formatOptions);
            const bDisplay = (0, _prettyFormat.format)(b, formatOptions);
            return (0, _diffLines.diffLinesUnified2)(aDisplay.split("\n"), bDisplay.split("\n"), aCompare.split("\n"), bCompare.split("\n"), options);
          }
        }
      })();
      module2.exports = __webpack_exports__;
    })();
  }
});

// node_modules/jest-matcher-utils/build/index.js
var require_build6 = __commonJS({
  "node_modules/jest-matcher-utils/build/index.js"(exports2, module2) {
    (() => {
      "use strict";
      var __webpack_modules__ = {
        /***/
        "./src/Replaceable.ts": (
          /***/
          ((__unused_webpack_module, exports3) => {
            Object.defineProperty(exports3, "__esModule", {
              value: true
            });
            exports3["default"] = void 0;
            var _getType = require_build();
            const supportTypes = /* @__PURE__ */ new Set(["map", "array", "object"]);
            class Replaceable {
              object;
              type;
              constructor(object) {
                this.object = object;
                this.type = (0, _getType.getType)(object);
                if (!supportTypes.has(this.type)) {
                  throw new Error(`Type ${this.type} is not support in Replaceable!`);
                }
              }
              static isReplaceable(obj1, obj2) {
                const obj1Type = (0, _getType.getType)(obj1);
                const obj2Type = (0, _getType.getType)(obj2);
                return obj1Type === obj2Type && supportTypes.has(obj1Type);
              }
              forEach(cb) {
                if (this.type === "object") {
                  const descriptors = Object.getOwnPropertyDescriptors(this.object);
                  for (const key of [...Object.keys(descriptors), ...Object.getOwnPropertySymbols(descriptors)].filter((key2) => descriptors[key2].enumerable)) {
                    cb(this.object[key], key, this.object);
                  }
                } else {
                  this.object.forEach(cb);
                }
              }
              get(key) {
                if (this.type === "map") {
                  return this.object.get(key);
                }
                return this.object[key];
              }
              set(key, value) {
                if (this.type === "map") {
                  this.object.set(key, value);
                } else {
                  this.object[key] = value;
                }
              }
            }
            exports3["default"] = Replaceable;
          })
        ),
        /***/
        "./src/deepCyclicCopyReplaceable.ts": (
          /***/
          ((__unused_webpack_module, exports3) => {
            Object.defineProperty(exports3, "__esModule", {
              value: true
            });
            exports3.SERIALIZABLE_PROPERTIES = void 0;
            exports3["default"] = deepCyclicCopyReplaceable;
            var _prettyFormat = require_build3();
            var Symbol2 = globalThis["jest-symbol-do-not-touch"] || globalThis.Symbol;
            const builtInObject = [Array, Date, Float32Array, Float64Array, Int16Array, Int32Array, Int8Array, Map, Set, RegExp, Uint16Array, Uint32Array, Uint8Array, Uint8ClampedArray];
            if (typeof Buffer !== "undefined") {
              builtInObject.push(Buffer);
            }
            if (typeof Window !== "undefined") {
              builtInObject.push(Window);
            }
            const SERIALIZABLE_PROPERTIES2 = exports3.SERIALIZABLE_PROPERTIES = Symbol2.for("@jest/serializableProperties");
            const isBuiltInObject = (object) => builtInObject.includes(object.constructor);
            const isMap = (value) => value.constructor === Map;
            function deepCyclicCopyReplaceable(value, cycles = /* @__PURE__ */ new WeakMap()) {
              if (typeof value !== "object" || value === null) {
                return value;
              } else if (cycles.has(value)) {
                return cycles.get(value);
              } else if (Array.isArray(value)) {
                return deepCyclicCopyArray(value, cycles);
              } else if (isMap(value)) {
                return deepCyclicCopyMap(value, cycles);
              } else if (isBuiltInObject(value)) {
                return value;
              } else if (_prettyFormat.plugins.DOMElement.test(value)) {
                return value.cloneNode(true);
              } else {
                return deepCyclicCopyObject(value, cycles);
              }
            }
            function deepCyclicCopyObject(object, cycles) {
              const newObject = Object.create(Object.getPrototypeOf(object));
              let descriptors = {};
              let obj = object;
              do {
                const serializableProperties = getSerializableProperties(obj);
                if (serializableProperties === void 0) {
                  descriptors = Object.assign(/* @__PURE__ */ Object.create(null), Object.getOwnPropertyDescriptors(obj), descriptors);
                } else {
                  for (const property of serializableProperties) {
                    if (!descriptors[property]) {
                      descriptors[property] = Object.getOwnPropertyDescriptor(obj, property);
                    }
                  }
                }
              } while ((obj = Object.getPrototypeOf(obj)) && obj !== Object.getPrototypeOf({}));
              cycles.set(object, newObject);
              const newDescriptors = [...Object.keys(descriptors), ...Object.getOwnPropertySymbols(descriptors)].reduce(
                //@ts-expect-error because typescript do not support symbol key in object
                //https://github.com/microsoft/TypeScript/issues/1863
                (newDescriptors2, key) => {
                  const enumerable = descriptors[key].enumerable;
                  newDescriptors2[key] = {
                    configurable: true,
                    enumerable,
                    value: deepCyclicCopyReplaceable(
                      // this accesses the value or getter, depending. We just care about the value anyways, and this allows us to not mess with accessors
                      // it has the side effect of invoking the getter here though, rather than copying it over
                      object[key],
                      cycles
                    ),
                    writable: true
                  };
                  return newDescriptors2;
                },
                /* @__PURE__ */ Object.create(null)
              );
              return Object.defineProperties(newObject, newDescriptors);
            }
            function deepCyclicCopyArray(array, cycles) {
              const newArray = new (Object.getPrototypeOf(array)).constructor(array.length);
              const length = array.length;
              cycles.set(array, newArray);
              for (let i = 0; i < length; i++) {
                newArray[i] = deepCyclicCopyReplaceable(array[i], cycles);
              }
              return newArray;
            }
            function deepCyclicCopyMap(map, cycles) {
              const newMap = /* @__PURE__ */ new Map();
              cycles.set(map, newMap);
              for (const [key, value] of map) {
                newMap.set(key, deepCyclicCopyReplaceable(value, cycles));
              }
              return newMap;
            }
            function getSerializableProperties(obj) {
              if (typeof obj !== "object" || obj === null) {
                return;
              }
              const serializableProperties = obj[SERIALIZABLE_PROPERTIES2];
              if (!Array.isArray(serializableProperties)) {
                return;
              }
              return serializableProperties.filter((key) => typeof key === "string" || typeof key === "symbol");
            }
          })
        )
        /******/
      };
      var __webpack_module_cache__ = {};
      function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) {
          return cachedModule.exports;
        }
        var module3 = __webpack_module_cache__[moduleId] = {
          /******/
          // no module.id needed
          /******/
          // no module.loaded needed
          /******/
          exports: {}
          /******/
        };
        __webpack_modules__[moduleId](module3, module3.exports, __webpack_require__);
        return module3.exports;
      }
      var __webpack_exports__ = {};
      (() => {
        var exports3 = __webpack_exports__;
        Object.defineProperty(exports3, "__esModule", {
          value: true
        });
        exports3.RECEIVED_COLOR = exports3.INVERTED_COLOR = exports3.EXPECTED_COLOR = exports3.DIM_COLOR = exports3.BOLD_WEIGHT = void 0;
        Object.defineProperty(exports3, "SERIALIZABLE_PROPERTIES", {
          enumerable: true,
          get: function() {
            return _deepCyclicCopyReplaceable.SERIALIZABLE_PROPERTIES;
          }
        });
        exports3.printReceived = exports3.printExpected = exports3.printDiffOrStringify = exports3.pluralize = exports3.matcherHint = exports3.matcherErrorMessage = exports3.highlightTrailingWhitespace = exports3.getLabelPrinter = exports3.ensureNumbers = exports3.ensureNoExpected = exports3.ensureExpectedIsNumber = exports3.ensureExpectedIsNonNegativeInteger = exports3.ensureActualIsNumber = exports3.diff = exports3.SUGGEST_TO_CONTAIN_EQUAL = void 0;
        exports3.printWithType = printWithType2;
        exports3.replaceMatchedToAsymmetricMatcher = replaceMatchedToAsymmetricMatcher2;
        exports3.stringify = void 0;
        var _chalk = _interopRequireDefault(require_source());
        var _getType = require_build();
        var _jestDiff = require_build5();
        var _prettyFormat = require_build3();
        var _Replaceable = _interopRequireDefault(__webpack_require__("./src/Replaceable.ts"));
        var _deepCyclicCopyReplaceable = _interopRequireWildcard(__webpack_require__("./src/deepCyclicCopyReplaceable.ts"));
        function _interopRequireWildcard(e, t) {
          if ("function" == typeof WeakMap) var r = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
          return (_interopRequireWildcard = function(e2, t2) {
            if (!t2 && e2 && e2.__esModule) return e2;
            var o, i, f = { __proto__: null, default: e2 };
            if (null === e2 || "object" != typeof e2 && "function" != typeof e2) return f;
            if (o = t2 ? n : r) {
              if (o.has(e2)) return o.get(e2);
              o.set(e2, f);
            }
            for (const t3 in e2) "default" !== t3 && {}.hasOwnProperty.call(e2, t3) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e2, t3)) && (i.get || i.set) ? o(f, t3, i) : f[t3] = e2[t3]);
            return f;
          })(e, t);
        }
        function _interopRequireDefault(e) {
          return e && e.__esModule ? e : { default: e };
        }
        const {
          AsymmetricMatcher: AsymmetricMatcher2,
          DOMCollection,
          DOMElement,
          Immutable,
          ReactElement,
          ReactTestComponent
        } = _prettyFormat.plugins;
        const PLUGINS = [ReactTestComponent, ReactElement, DOMElement, DOMCollection, Immutable, AsymmetricMatcher2];
        const EXPECTED_COLOR2 = exports3.EXPECTED_COLOR = _chalk.default.green;
        const RECEIVED_COLOR2 = exports3.RECEIVED_COLOR = _chalk.default.red;
        const INVERTED_COLOR2 = exports3.INVERTED_COLOR = _chalk.default.inverse;
        const BOLD_WEIGHT2 = exports3.BOLD_WEIGHT = _chalk.default.bold;
        const DIM_COLOR2 = exports3.DIM_COLOR = _chalk.default.dim;
        const MULTILINE_REGEXP = /\n/;
        const SPACE_SYMBOL = "\xB7";
        const NUMBERS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen"];
        const SUGGEST_TO_CONTAIN_EQUAL2 = exports3.SUGGEST_TO_CONTAIN_EQUAL = _chalk.default.dim("Looks like you wanted to test for object/array equality with the stricter `toContain` matcher. You probably need to use `toContainEqual` instead.");
        const stringify2 = (object, maxDepth = 10, maxWidth = 10) => {
          const MAX_LENGTH = 1e4;
          let result;
          try {
            result = (0, _prettyFormat.format)(object, {
              maxDepth,
              maxWidth,
              min: true,
              plugins: PLUGINS
            });
          } catch {
            result = (0, _prettyFormat.format)(object, {
              callToJSON: false,
              maxDepth,
              maxWidth,
              min: true,
              plugins: PLUGINS
            });
          }
          if (result.length >= MAX_LENGTH && maxDepth > 1) {
            return stringify2(object, Math.floor(maxDepth / 2), maxWidth);
          } else if (result.length >= MAX_LENGTH && maxWidth > 1) {
            return stringify2(object, maxDepth, Math.floor(maxWidth / 2));
          } else {
            return result;
          }
        };
        exports3.stringify = stringify2;
        const highlightTrailingWhitespace2 = (text) => text.replaceAll(/\s+$/gm, _chalk.default.inverse("$&"));
        exports3.highlightTrailingWhitespace = highlightTrailingWhitespace2;
        const replaceTrailingSpaces = (text) => text.replaceAll(/\s+$/gm, (spaces) => SPACE_SYMBOL.repeat(spaces.length));
        const printReceived2 = (object) => RECEIVED_COLOR2(replaceTrailingSpaces(stringify2(object)));
        exports3.printReceived = printReceived2;
        const printExpected2 = (value) => EXPECTED_COLOR2(replaceTrailingSpaces(stringify2(value)));
        exports3.printExpected = printExpected2;
        function printWithType2(name, value, print) {
          const type = (0, _getType.getType)(value);
          const hasType = type !== "null" && type !== "undefined" ? `${name} has type:  ${type}
` : "";
          const hasValue = `${name} has value: ${print(value)}`;
          return hasType + hasValue;
        }
        const ensureNoExpected2 = (expected, matcherName, options) => {
          if (expected !== void 0) {
            const matcherString = (options ? "" : "[.not]") + matcherName;
            throw new Error(matcherErrorMessage2(
              matcherHint2(matcherString, void 0, "", options),
              // Because expected is omitted in hint above,
              // expected is black instead of green in message below.
              "this matcher must not have an expected argument",
              printWithType2("Expected", expected, printExpected2)
            ));
          }
        };
        exports3.ensureNoExpected = ensureNoExpected2;
        const ensureActualIsNumber2 = (actual, matcherName, options) => {
          if (typeof actual !== "number" && typeof actual !== "bigint") {
            const matcherString = (options ? "" : "[.not]") + matcherName;
            throw new Error(matcherErrorMessage2(matcherHint2(matcherString, void 0, void 0, options), `${RECEIVED_COLOR2("received")} value must be a number or bigint`, printWithType2("Received", actual, printReceived2)));
          }
        };
        exports3.ensureActualIsNumber = ensureActualIsNumber2;
        const ensureExpectedIsNumber2 = (expected, matcherName, options) => {
          if (typeof expected !== "number" && typeof expected !== "bigint") {
            const matcherString = (options ? "" : "[.not]") + matcherName;
            throw new Error(matcherErrorMessage2(matcherHint2(matcherString, void 0, void 0, options), `${EXPECTED_COLOR2("expected")} value must be a number or bigint`, printWithType2("Expected", expected, printExpected2)));
          }
        };
        exports3.ensureExpectedIsNumber = ensureExpectedIsNumber2;
        const ensureNumbers2 = (actual, expected, matcherName, options) => {
          ensureActualIsNumber2(actual, matcherName, options);
          ensureExpectedIsNumber2(expected, matcherName, options);
        };
        exports3.ensureNumbers = ensureNumbers2;
        const ensureExpectedIsNonNegativeInteger2 = (expected, matcherName, options) => {
          if (typeof expected !== "number" || !Number.isSafeInteger(expected) || expected < 0) {
            const matcherString = (options ? "" : "[.not]") + matcherName;
            throw new Error(matcherErrorMessage2(matcherHint2(matcherString, void 0, void 0, options), `${EXPECTED_COLOR2("expected")} value must be a non-negative integer`, printWithType2("Expected", expected, printExpected2)));
          }
        };
        exports3.ensureExpectedIsNonNegativeInteger = ensureExpectedIsNonNegativeInteger2;
        const getCommonAndChangedSubstrings = (diffs, op, hasCommonDiff) => diffs.reduce((reduced, diff3) => reduced + (diff3[0] === _jestDiff.DIFF_EQUAL ? diff3[1] : diff3[0] === op ? hasCommonDiff ? INVERTED_COLOR2(diff3[1]) : diff3[1] : ""), "");
        const isLineDiffable = (expected, received) => {
          const expectedType = (0, _getType.getType)(expected);
          const receivedType = (0, _getType.getType)(received);
          if (expectedType !== receivedType) {
            return false;
          }
          if ((0, _getType.isPrimitive)(expected)) {
            return typeof expected === "string" && typeof received === "string" && expected.length > 0 && received.length > 0 && (MULTILINE_REGEXP.test(expected) || MULTILINE_REGEXP.test(received));
          }
          if (expectedType === "date" || expectedType === "function" || expectedType === "regexp") {
            return false;
          }
          if (expected instanceof Error && received instanceof Error) {
            return false;
          }
          if (receivedType === "object" && typeof received.asymmetricMatch === "function") {
            return false;
          }
          return true;
        };
        const MAX_DIFF_STRING_LENGTH = 2e4;
        const printDiffOrStringify2 = (expected, received, expectedLabel, receivedLabel, expand) => {
          if (typeof expected === "string" && typeof received === "string" && expected.length > 0 && received.length > 0 && expected.length <= MAX_DIFF_STRING_LENGTH && received.length <= MAX_DIFF_STRING_LENGTH && expected !== received) {
            if (expected.includes("\n") || received.includes("\n")) {
              return (0, _jestDiff.diffStringsUnified)(expected, received, {
                aAnnotation: expectedLabel,
                bAnnotation: receivedLabel,
                changeLineTrailingSpaceColor: _chalk.default.bgYellow,
                commonLineTrailingSpaceColor: _chalk.default.bgYellow,
                emptyFirstOrLastLinePlaceholder: "\u21B5",
                // U+21B5
                expand,
                includeChangeCounts: true
              });
            }
            const diffs = (0, _jestDiff.diffStringsRaw)(expected, received, true);
            const hasCommonDiff = diffs.some((diff3) => diff3[0] === _jestDiff.DIFF_EQUAL);
            const printLabel2 = getLabelPrinter2(expectedLabel, receivedLabel);
            const expectedLine2 = printLabel2(expectedLabel) + printExpected2(getCommonAndChangedSubstrings(diffs, _jestDiff.DIFF_DELETE, hasCommonDiff));
            const receivedLine2 = printLabel2(receivedLabel) + printReceived2(getCommonAndChangedSubstrings(diffs, _jestDiff.DIFF_INSERT, hasCommonDiff));
            return `${expectedLine2}
${receivedLine2}`;
          }
          if (isLineDiffable(expected, received)) {
            const {
              replacedExpected,
              replacedReceived
            } = replaceMatchedToAsymmetricMatcher2(expected, received, [], []);
            const difference = (0, _jestDiff.diff)(replacedExpected, replacedReceived, {
              aAnnotation: expectedLabel,
              bAnnotation: receivedLabel,
              expand,
              includeChangeCounts: true
            });
            if (typeof difference === "string" && difference.includes(`- ${expectedLabel}`) && difference.includes(`+ ${receivedLabel}`)) {
              return difference;
            }
          }
          const printLabel = getLabelPrinter2(expectedLabel, receivedLabel);
          const expectedLine = printLabel(expectedLabel) + printExpected2(expected);
          const receivedLine = printLabel(receivedLabel) + (stringify2(expected) === stringify2(received) ? "serializes to the same string" : printReceived2(received));
          return `${expectedLine}
${receivedLine}`;
        };
        exports3.printDiffOrStringify = printDiffOrStringify2;
        const shouldPrintDiff = (actual, expected) => {
          if (typeof actual === "number" && typeof expected === "number") {
            return false;
          }
          if (typeof actual === "bigint" && typeof expected === "bigint") {
            return false;
          }
          if (typeof actual === "boolean" && typeof expected === "boolean") {
            return false;
          }
          return true;
        };
        function replaceMatchedToAsymmetricMatcher2(replacedExpected, replacedReceived, expectedCycles, receivedCycles) {
          return _replaceMatchedToAsymmetricMatcher((0, _deepCyclicCopyReplaceable.default)(replacedExpected), (0, _deepCyclicCopyReplaceable.default)(replacedReceived), expectedCycles, receivedCycles);
        }
        function _replaceMatchedToAsymmetricMatcher(replacedExpected, replacedReceived, expectedCycles, receivedCycles) {
          if (!_Replaceable.default.isReplaceable(replacedExpected, replacedReceived)) {
            return {
              replacedExpected,
              replacedReceived
            };
          }
          if (expectedCycles.includes(replacedExpected) || receivedCycles.includes(replacedReceived)) {
            return {
              replacedExpected,
              replacedReceived
            };
          }
          expectedCycles.push(replacedExpected);
          receivedCycles.push(replacedReceived);
          const expectedReplaceable = new _Replaceable.default(replacedExpected);
          const receivedReplaceable = new _Replaceable.default(replacedReceived);
          expectedReplaceable.forEach((expectedValue, key) => {
            const receivedValue = receivedReplaceable.get(key);
            if (isAsymmetricMatcher(expectedValue)) {
              if (expectedValue.asymmetricMatch(receivedValue)) {
                receivedReplaceable.set(key, expectedValue);
              }
            } else if (isAsymmetricMatcher(receivedValue)) {
              if (receivedValue.asymmetricMatch(expectedValue)) {
                expectedReplaceable.set(key, receivedValue);
              }
            } else if (_Replaceable.default.isReplaceable(expectedValue, receivedValue)) {
              const replaced = _replaceMatchedToAsymmetricMatcher(expectedValue, receivedValue, expectedCycles, receivedCycles);
              expectedReplaceable.set(key, replaced.replacedExpected);
              receivedReplaceable.set(key, replaced.replacedReceived);
            }
          });
          return {
            replacedExpected: expectedReplaceable.object,
            replacedReceived: receivedReplaceable.object
          };
        }
        function isAsymmetricMatcher(data) {
          const type = (0, _getType.getType)(data);
          return type === "object" && typeof data.asymmetricMatch === "function";
        }
        const diff2 = (a, b, options) => shouldPrintDiff(a, b) ? (0, _jestDiff.diff)(a, b, options) : null;
        exports3.diff = diff2;
        const pluralize2 = (word, count) => `${NUMBERS[count] || count} ${word}${count === 1 ? "" : "s"}`;
        exports3.pluralize = pluralize2;
        const getLabelPrinter2 = (...strings) => {
          const maxLength = strings.reduce((max, string) => Math.max(string.length, max), 0);
          return (string) => `${string}: ${" ".repeat(maxLength - string.length)}`;
        };
        exports3.getLabelPrinter = getLabelPrinter2;
        const matcherErrorMessage2 = (hint, generic, specific) => `${hint}

${_chalk.default.bold("Matcher error")}: ${generic}${typeof specific === "string" ? `

${specific}` : ""}`;
        exports3.matcherErrorMessage = matcherErrorMessage2;
        const matcherHint2 = (matcherName, received = "received", expected = "expected", options = {}) => {
          const {
            comment = "",
            expectedColor = EXPECTED_COLOR2,
            isDirectExpectCall = false,
            // seems redundant with received === ''
            isNot = false,
            promise = "",
            receivedColor = RECEIVED_COLOR2,
            secondArgument = "",
            secondArgumentColor = EXPECTED_COLOR2
          } = options;
          let hint = "";
          let dimString = "expect";
          if (!isDirectExpectCall && received !== "") {
            hint += DIM_COLOR2(`${dimString}(`) + receivedColor(received);
            dimString = ")";
          }
          if (promise !== "") {
            hint += DIM_COLOR2(`${dimString}.`) + promise;
            dimString = "";
          }
          if (isNot) {
            hint += `${DIM_COLOR2(`${dimString}.`)}not`;
            dimString = "";
          }
          if (matcherName.includes(".")) {
            dimString += matcherName;
          } else {
            hint += DIM_COLOR2(`${dimString}.`) + matcherName;
            dimString = "";
          }
          if (expected === "") {
            dimString += "()";
          } else {
            hint += DIM_COLOR2(`${dimString}(`) + expectedColor(expected);
            if (secondArgument) {
              hint += DIM_COLOR2(", ") + secondArgumentColor(secondArgument);
            }
            dimString = ")";
          }
          if (comment !== "") {
            dimString += ` // ${comment}`;
          }
          if (dimString !== "") {
            hint += DIM_COLOR2(dimString);
          }
          return hint;
        };
        exports3.matcherHint = matcherHint2;
      })();
      module2.exports = __webpack_exports__;
    })();
  }
});

// node_modules/picocolors/picocolors.js
var require_picocolors = __commonJS({
  "node_modules/picocolors/picocolors.js"(exports2, module2) {
    var p = process || {};
    var argv = p.argv || [];
    var env = p.env || {};
    var isColorSupported = !(!!env.NO_COLOR || argv.includes("--no-color")) && (!!env.FORCE_COLOR || argv.includes("--color") || p.platform === "win32" || (p.stdout || {}).isTTY && env.TERM !== "dumb" || !!env.CI);
    var formatter = (open, close, replace = open) => (input) => {
      let string = "" + input, index = string.indexOf(close, open.length);
      return ~index ? open + replaceClose(string, close, replace, index) + close : open + string + close;
    };
    var replaceClose = (string, close, replace, index) => {
      let result = "", cursor = 0;
      do {
        result += string.substring(cursor, index) + replace;
        cursor = index + close.length;
        index = string.indexOf(close, cursor);
      } while (~index);
      return result + string.substring(cursor);
    };
    var createColors = (enabled = isColorSupported) => {
      let f = enabled ? formatter : () => String;
      return {
        isColorSupported: enabled,
        reset: f("\x1B[0m", "\x1B[0m"),
        bold: f("\x1B[1m", "\x1B[22m", "\x1B[22m\x1B[1m"),
        dim: f("\x1B[2m", "\x1B[22m", "\x1B[22m\x1B[2m"),
        italic: f("\x1B[3m", "\x1B[23m"),
        underline: f("\x1B[4m", "\x1B[24m"),
        inverse: f("\x1B[7m", "\x1B[27m"),
        hidden: f("\x1B[8m", "\x1B[28m"),
        strikethrough: f("\x1B[9m", "\x1B[29m"),
        black: f("\x1B[30m", "\x1B[39m"),
        red: f("\x1B[31m", "\x1B[39m"),
        green: f("\x1B[32m", "\x1B[39m"),
        yellow: f("\x1B[33m", "\x1B[39m"),
        blue: f("\x1B[34m", "\x1B[39m"),
        magenta: f("\x1B[35m", "\x1B[39m"),
        cyan: f("\x1B[36m", "\x1B[39m"),
        white: f("\x1B[37m", "\x1B[39m"),
        gray: f("\x1B[90m", "\x1B[39m"),
        bgBlack: f("\x1B[40m", "\x1B[49m"),
        bgRed: f("\x1B[41m", "\x1B[49m"),
        bgGreen: f("\x1B[42m", "\x1B[49m"),
        bgYellow: f("\x1B[43m", "\x1B[49m"),
        bgBlue: f("\x1B[44m", "\x1B[49m"),
        bgMagenta: f("\x1B[45m", "\x1B[49m"),
        bgCyan: f("\x1B[46m", "\x1B[49m"),
        bgWhite: f("\x1B[47m", "\x1B[49m"),
        blackBright: f("\x1B[90m", "\x1B[39m"),
        redBright: f("\x1B[91m", "\x1B[39m"),
        greenBright: f("\x1B[92m", "\x1B[39m"),
        yellowBright: f("\x1B[93m", "\x1B[39m"),
        blueBright: f("\x1B[94m", "\x1B[39m"),
        magentaBright: f("\x1B[95m", "\x1B[39m"),
        cyanBright: f("\x1B[96m", "\x1B[39m"),
        whiteBright: f("\x1B[97m", "\x1B[39m"),
        bgBlackBright: f("\x1B[100m", "\x1B[49m"),
        bgRedBright: f("\x1B[101m", "\x1B[49m"),
        bgGreenBright: f("\x1B[102m", "\x1B[49m"),
        bgYellowBright: f("\x1B[103m", "\x1B[49m"),
        bgBlueBright: f("\x1B[104m", "\x1B[49m"),
        bgMagentaBright: f("\x1B[105m", "\x1B[49m"),
        bgCyanBright: f("\x1B[106m", "\x1B[49m"),
        bgWhiteBright: f("\x1B[107m", "\x1B[49m")
      };
    };
    module2.exports = createColors();
    module2.exports.createColors = createColors;
  }
});

// node_modules/js-tokens/index.js
var require_js_tokens = __commonJS({
  "node_modules/js-tokens/index.js"(exports2) {
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = /((['"])(?:(?!\2|\\).|\\(?:\r\n|[\s\S]))*(\2)?|`(?:[^`\\$]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{[^}]*\}?)*\}?)*(`)?)|(\/\/.*)|(\/\*(?:[^*]|\*(?!\/))*(\*\/)?)|(\/(?!\*)(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\]\\]).|\\.)+\/(?:(?!\s*(?:\b|[\u0080-\uFFFF$\\'"~({]|[+\-!](?!=)|\.?\d))|[gmiyus]{1,6}\b(?![\u0080-\uFFFF$\\]|\s*(?:[+\-*%&|^<>!=?({]|\/(?![\/*])))))|(0[xX][\da-fA-F]+|0[oO][0-7]+|0[bB][01]+|(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?)|((?!\d)(?:(?!\s)[$\w\u0080-\uFFFF]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+)|(--|\+\+|&&|\|\||=>|\.{3}|(?:[+\-\/%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2})=?|[?~.,:;[\](){}])|(\s+)|(^$|[\s\S])/g;
    exports2.matchToToken = function(match) {
      var token = { type: "invalid", value: match[0], closed: void 0 };
      if (match[1]) token.type = "string", token.closed = !!(match[3] || match[4]);
      else if (match[5]) token.type = "comment";
      else if (match[6]) token.type = "comment", token.closed = !!match[7];
      else if (match[8]) token.type = "regex";
      else if (match[9]) token.type = "number";
      else if (match[10]) token.type = "name";
      else if (match[11]) token.type = "punctuator";
      else if (match[12]) token.type = "whitespace";
      return token;
    };
  }
});

// node_modules/@babel/helper-validator-identifier/lib/identifier.js
var require_identifier = __commonJS({
  "node_modules/@babel/helper-validator-identifier/lib/identifier.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.isIdentifierChar = isIdentifierChar;
    exports2.isIdentifierName = isIdentifierName;
    exports2.isIdentifierStart = isIdentifierStart;
    var nonASCIIidentifierStartChars = "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088F\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5C\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDC-\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7DC\uA7F1-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC";
    var nonASCIIidentifierChars = "\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0897-\u089F\u08CA-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0CF3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u180F-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1ABF-\u1ADD\u1AE0-\u1AEB\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u200C\u200D\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\u30FB\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F\uFF65";
    var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
    var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");
    nonASCIIidentifierStartChars = nonASCIIidentifierChars = null;
    var astralIdentifierStartCodes = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 4, 51, 13, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 7, 25, 39, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 39, 27, 10, 22, 251, 41, 7, 1, 17, 5, 57, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 31, 9, 2, 0, 3, 0, 2, 37, 2, 0, 26, 0, 2, 0, 45, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 200, 32, 32, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 24, 43, 261, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 26, 3994, 6, 582, 6842, 29, 1763, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 433, 44, 212, 63, 33, 24, 3, 24, 45, 74, 6, 0, 67, 12, 65, 1, 2, 0, 15, 4, 10, 7381, 42, 31, 98, 114, 8702, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 229, 29, 3, 0, 208, 30, 2, 2, 2, 1, 2, 6, 3, 4, 10, 1, 225, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4381, 3, 5773, 3, 7472, 16, 621, 2467, 541, 1507, 4938, 6, 8489];
    var astralIdentifierCodes = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 7, 9, 32, 4, 318, 1, 78, 5, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 68, 8, 2, 0, 3, 0, 2, 3, 2, 4, 2, 0, 15, 1, 83, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 7, 19, 58, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 199, 7, 137, 9, 54, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 55, 9, 266, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 10, 5350, 0, 7, 14, 11465, 27, 2343, 9, 87, 9, 39, 4, 60, 6, 26, 9, 535, 9, 470, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4178, 9, 519, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 245, 1, 2, 9, 233, 0, 3, 0, 8, 1, 6, 0, 475, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];
    function isInAstralSet(code, set) {
      let pos = 65536;
      for (let i = 0, length = set.length; i < length; i += 2) {
        pos += set[i];
        if (pos > code) return false;
        pos += set[i + 1];
        if (pos >= code) return true;
      }
      return false;
    }
    function isIdentifierStart(code) {
      if (code < 65) return code === 36;
      if (code <= 90) return true;
      if (code < 97) return code === 95;
      if (code <= 122) return true;
      if (code <= 65535) {
        return code >= 170 && nonASCIIidentifierStart.test(String.fromCharCode(code));
      }
      return isInAstralSet(code, astralIdentifierStartCodes);
    }
    function isIdentifierChar(code) {
      if (code < 48) return code === 36;
      if (code < 58) return true;
      if (code < 65) return false;
      if (code <= 90) return true;
      if (code < 97) return code === 95;
      if (code <= 122) return true;
      if (code <= 65535) {
        return code >= 170 && nonASCIIidentifier.test(String.fromCharCode(code));
      }
      return isInAstralSet(code, astralIdentifierStartCodes) || isInAstralSet(code, astralIdentifierCodes);
    }
    function isIdentifierName(name) {
      let isFirst = true;
      for (let i = 0; i < name.length; i++) {
        let cp = name.charCodeAt(i);
        if ((cp & 64512) === 55296 && i + 1 < name.length) {
          const trail = name.charCodeAt(++i);
          if ((trail & 64512) === 56320) {
            cp = 65536 + ((cp & 1023) << 10) + (trail & 1023);
          }
        }
        if (isFirst) {
          isFirst = false;
          if (!isIdentifierStart(cp)) {
            return false;
          }
        } else if (!isIdentifierChar(cp)) {
          return false;
        }
      }
      return !isFirst;
    }
  }
});

// node_modules/@babel/helper-validator-identifier/lib/keyword.js
var require_keyword = __commonJS({
  "node_modules/@babel/helper-validator-identifier/lib/keyword.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.isKeyword = isKeyword;
    exports2.isReservedWord = isReservedWord;
    exports2.isStrictBindOnlyReservedWord = isStrictBindOnlyReservedWord;
    exports2.isStrictBindReservedWord = isStrictBindReservedWord;
    exports2.isStrictReservedWord = isStrictReservedWord;
    var reservedWords = {
      keyword: ["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"],
      strict: ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"],
      strictBind: ["eval", "arguments"]
    };
    var keywords = new Set(reservedWords.keyword);
    var reservedWordsStrictSet = new Set(reservedWords.strict);
    var reservedWordsStrictBindSet = new Set(reservedWords.strictBind);
    function isReservedWord(word, inModule) {
      return inModule && word === "await" || word === "enum";
    }
    function isStrictReservedWord(word, inModule) {
      return isReservedWord(word, inModule) || reservedWordsStrictSet.has(word);
    }
    function isStrictBindOnlyReservedWord(word) {
      return reservedWordsStrictBindSet.has(word);
    }
    function isStrictBindReservedWord(word, inModule) {
      return isStrictReservedWord(word, inModule) || isStrictBindOnlyReservedWord(word);
    }
    function isKeyword(word) {
      return keywords.has(word);
    }
  }
});

// node_modules/@babel/helper-validator-identifier/lib/index.js
var require_lib = __commonJS({
  "node_modules/@babel/helper-validator-identifier/lib/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "isIdentifierChar", {
      enumerable: true,
      get: function() {
        return _identifier.isIdentifierChar;
      }
    });
    Object.defineProperty(exports2, "isIdentifierName", {
      enumerable: true,
      get: function() {
        return _identifier.isIdentifierName;
      }
    });
    Object.defineProperty(exports2, "isIdentifierStart", {
      enumerable: true,
      get: function() {
        return _identifier.isIdentifierStart;
      }
    });
    Object.defineProperty(exports2, "isKeyword", {
      enumerable: true,
      get: function() {
        return _keyword.isKeyword;
      }
    });
    Object.defineProperty(exports2, "isReservedWord", {
      enumerable: true,
      get: function() {
        return _keyword.isReservedWord;
      }
    });
    Object.defineProperty(exports2, "isStrictBindOnlyReservedWord", {
      enumerable: true,
      get: function() {
        return _keyword.isStrictBindOnlyReservedWord;
      }
    });
    Object.defineProperty(exports2, "isStrictBindReservedWord", {
      enumerable: true,
      get: function() {
        return _keyword.isStrictBindReservedWord;
      }
    });
    Object.defineProperty(exports2, "isStrictReservedWord", {
      enumerable: true,
      get: function() {
        return _keyword.isStrictReservedWord;
      }
    });
    var _identifier = require_identifier();
    var _keyword = require_keyword();
  }
});

// node_modules/@babel/code-frame/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/@babel/code-frame/lib/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var picocolors = require_picocolors();
    var jsTokens = require_js_tokens();
    var helperValidatorIdentifier = require_lib();
    function isColorSupported() {
      return typeof process === "object" && (process.env.FORCE_COLOR === "0" || process.env.FORCE_COLOR === "false") ? false : picocolors.isColorSupported;
    }
    var compose = (f, g) => (v) => f(g(v));
    function buildDefs(colors3) {
      return {
        keyword: colors3.cyan,
        capitalized: colors3.yellow,
        jsxIdentifier: colors3.yellow,
        punctuator: colors3.yellow,
        number: colors3.magenta,
        string: colors3.green,
        regex: colors3.magenta,
        comment: colors3.gray,
        invalid: compose(compose(colors3.white, colors3.bgRed), colors3.bold),
        gutter: colors3.gray,
        marker: compose(colors3.red, colors3.bold),
        message: compose(colors3.red, colors3.bold),
        reset: colors3.reset
      };
    }
    var defsOn = buildDefs(picocolors.createColors(true));
    var defsOff = buildDefs(picocolors.createColors(false));
    function getDefs(enabled) {
      return enabled ? defsOn : defsOff;
    }
    var sometimesKeywords = /* @__PURE__ */ new Set(["as", "async", "from", "get", "of", "set"]);
    var NEWLINE$1 = /\r\n|[\n\r\u2028\u2029]/;
    var BRACKET = /^[()[\]{}]$/;
    var tokenize;
    var JSX_TAG = /^[a-z][\w-]*$/i;
    var getTokenType = function(token, offset, text) {
      if (token.type === "name") {
        const tokenValue = token.value;
        if (helperValidatorIdentifier.isKeyword(tokenValue) || helperValidatorIdentifier.isStrictReservedWord(tokenValue, true) || sometimesKeywords.has(tokenValue)) {
          return "keyword";
        }
        if (JSX_TAG.test(tokenValue) && (text[offset - 1] === "<" || text.slice(offset - 2, offset) === "</")) {
          return "jsxIdentifier";
        }
        const firstChar = String.fromCodePoint(tokenValue.codePointAt(0));
        if (firstChar !== firstChar.toLowerCase()) {
          return "capitalized";
        }
      }
      if (token.type === "punctuator" && BRACKET.test(token.value)) {
        return "bracket";
      }
      if (token.type === "invalid" && (token.value === "@" || token.value === "#")) {
        return "punctuator";
      }
      return token.type;
    };
    tokenize = function* (text) {
      let match;
      while (match = jsTokens.default.exec(text)) {
        const token = jsTokens.matchToToken(match);
        yield {
          type: getTokenType(token, match.index, text),
          value: token.value
        };
      }
    };
    function highlight(text) {
      if (text === "") return "";
      const defs = getDefs(true);
      let highlighted = "";
      for (const {
        type,
        value
      } of tokenize(text)) {
        if (type in defs) {
          highlighted += value.split(NEWLINE$1).map((str) => defs[type](str)).join("\n");
        } else {
          highlighted += value;
        }
      }
      return highlighted;
    }
    var deprecationWarningShown = false;
    var NEWLINE = /\r\n|[\n\r\u2028\u2029]/;
    function getMarkerLines(loc, source, opts, startLineBaseZero) {
      const startLoc = Object.assign({
        column: 0,
        line: -1
      }, loc.start);
      const endLoc = Object.assign({}, startLoc, loc.end);
      const {
        linesAbove = 2,
        linesBelow = 3
      } = opts || {};
      const startLine = startLoc.line - startLineBaseZero;
      const startColumn = startLoc.column;
      const endLine = endLoc.line - startLineBaseZero;
      const endColumn = endLoc.column;
      let start = Math.max(startLine - (linesAbove + 1), 0);
      let end = Math.min(source.length, endLine + linesBelow);
      if (startLine === -1) {
        start = 0;
      }
      if (endLine === -1) {
        end = source.length;
      }
      const lineDiff = endLine - startLine;
      const markerLines = {};
      if (lineDiff) {
        for (let i = 0; i <= lineDiff; i++) {
          const lineNumber = i + startLine;
          if (!startColumn) {
            markerLines[lineNumber] = true;
          } else if (i === 0) {
            const sourceLength = source[lineNumber - 1].length;
            markerLines[lineNumber] = [startColumn, sourceLength - startColumn + 1];
          } else if (i === lineDiff) {
            markerLines[lineNumber] = [0, endColumn];
          } else {
            const sourceLength = source[lineNumber - i].length;
            markerLines[lineNumber] = [0, sourceLength];
          }
        }
      } else {
        if (startColumn === endColumn) {
          if (startColumn) {
            markerLines[startLine] = [startColumn, 0];
          } else {
            markerLines[startLine] = true;
          }
        } else {
          markerLines[startLine] = [startColumn, endColumn - startColumn];
        }
      }
      return {
        start,
        end,
        markerLines
      };
    }
    function codeFrameColumns(rawLines, loc, opts = {}) {
      const shouldHighlight = opts.forceColor || isColorSupported() && opts.highlightCode;
      const startLineBaseZero = (opts.startLine || 1) - 1;
      const defs = getDefs(shouldHighlight);
      const lines = rawLines.split(NEWLINE);
      const {
        start,
        end,
        markerLines
      } = getMarkerLines(loc, lines, opts, startLineBaseZero);
      const hasColumns = loc.start && typeof loc.start.column === "number";
      const numberMaxWidth = String(end + startLineBaseZero).length;
      const highlightedLines = shouldHighlight ? highlight(rawLines) : rawLines;
      let frame = highlightedLines.split(NEWLINE, end).slice(start, end).map((line, index2) => {
        const number = start + 1 + index2;
        const paddedNumber = ` ${number + startLineBaseZero}`.slice(-numberMaxWidth);
        const gutter = ` ${paddedNumber} |`;
        const hasMarker = markerLines[number];
        const lastMarkerLine = !markerLines[number + 1];
        if (hasMarker) {
          let markerLine = "";
          if (Array.isArray(hasMarker)) {
            const markerSpacing = line.slice(0, Math.max(hasMarker[0] - 1, 0)).replace(/[^\t]/g, " ");
            const numberOfMarkers = hasMarker[1] || 1;
            markerLine = ["\n ", defs.gutter(gutter.replace(/\d/g, " ")), " ", markerSpacing, defs.marker("^").repeat(numberOfMarkers)].join("");
            if (lastMarkerLine && opts.message) {
              markerLine += " " + defs.message(opts.message);
            }
          }
          return [defs.marker(">"), defs.gutter(gutter), line.length > 0 ? ` ${line}` : "", markerLine].join("");
        } else {
          return ` ${defs.gutter(gutter)}${line.length > 0 ? ` ${line}` : ""}`;
        }
      }).join("\n");
      if (opts.message && !hasColumns) {
        frame = `${" ".repeat(numberMaxWidth + 1)}${opts.message}
${frame}`;
      }
      if (shouldHighlight) {
        return defs.reset(frame);
      } else {
        return frame;
      }
    }
    function index(rawLines, lineNumber, colNumber, opts = {}) {
      if (!deprecationWarningShown) {
        deprecationWarningShown = true;
        const message = "Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";
        if (process.emitWarning) {
          process.emitWarning(message, "DeprecationWarning");
        } else {
          const deprecationError = new Error(message);
          deprecationError.name = "DeprecationWarning";
          console.warn(new Error(message));
        }
      }
      colNumber = Math.max(colNumber, 0);
      const location = {
        start: {
          column: colNumber,
          line: lineNumber
        }
      };
      return codeFrameColumns(rawLines, location, opts);
    }
    exports2.codeFrameColumns = codeFrameColumns;
    exports2.default = index;
    exports2.highlight = highlight;
  }
});

// node_modules/jest-message-util/node_modules/graceful-fs/polyfills.js
var require_polyfills = __commonJS({
  "node_modules/jest-message-util/node_modules/graceful-fs/polyfills.js"(exports2, module2) {
    var constants = require("constants");
    var origCwd = process.cwd;
    var cwd = null;
    var platform = process.env.GRACEFUL_FS_PLATFORM || process.platform;
    process.cwd = function() {
      if (!cwd)
        cwd = origCwd.call(process);
      return cwd;
    };
    try {
      process.cwd();
    } catch (er) {
    }
    if (typeof process.chdir === "function") {
      chdir = process.chdir;
      process.chdir = function(d) {
        cwd = null;
        chdir.call(process, d);
      };
      if (Object.setPrototypeOf) Object.setPrototypeOf(process.chdir, chdir);
    }
    var chdir;
    module2.exports = patch;
    function patch(fs3) {
      if (constants.hasOwnProperty("O_SYMLINK") && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)) {
        patchLchmod(fs3);
      }
      if (!fs3.lutimes) {
        patchLutimes(fs3);
      }
      fs3.chown = chownFix(fs3.chown);
      fs3.fchown = chownFix(fs3.fchown);
      fs3.lchown = chownFix(fs3.lchown);
      fs3.chmod = chmodFix(fs3.chmod);
      fs3.fchmod = chmodFix(fs3.fchmod);
      fs3.lchmod = chmodFix(fs3.lchmod);
      fs3.chownSync = chownFixSync(fs3.chownSync);
      fs3.fchownSync = chownFixSync(fs3.fchownSync);
      fs3.lchownSync = chownFixSync(fs3.lchownSync);
      fs3.chmodSync = chmodFixSync(fs3.chmodSync);
      fs3.fchmodSync = chmodFixSync(fs3.fchmodSync);
      fs3.lchmodSync = chmodFixSync(fs3.lchmodSync);
      fs3.stat = statFix(fs3.stat);
      fs3.fstat = statFix(fs3.fstat);
      fs3.lstat = statFix(fs3.lstat);
      fs3.statSync = statFixSync(fs3.statSync);
      fs3.fstatSync = statFixSync(fs3.fstatSync);
      fs3.lstatSync = statFixSync(fs3.lstatSync);
      if (fs3.chmod && !fs3.lchmod) {
        fs3.lchmod = function(path4, mode, cb) {
          if (cb) process.nextTick(cb);
        };
        fs3.lchmodSync = function() {
        };
      }
      if (fs3.chown && !fs3.lchown) {
        fs3.lchown = function(path4, uid, gid, cb) {
          if (cb) process.nextTick(cb);
        };
        fs3.lchownSync = function() {
        };
      }
      if (platform === "win32") {
        fs3.rename = typeof fs3.rename !== "function" ? fs3.rename : (function(fs$rename) {
          function rename(from, to, cb) {
            var start = Date.now();
            var backoff = 0;
            fs$rename(from, to, function CB(er) {
              if (er && (er.code === "EACCES" || er.code === "EPERM" || er.code === "EBUSY") && Date.now() - start < 6e4) {
                setTimeout(function() {
                  fs3.stat(to, function(stater, st) {
                    if (stater && stater.code === "ENOENT")
                      fs$rename(from, to, CB);
                    else
                      cb(er);
                  });
                }, backoff);
                if (backoff < 100)
                  backoff += 10;
                return;
              }
              if (cb) cb(er);
            });
          }
          if (Object.setPrototypeOf) Object.setPrototypeOf(rename, fs$rename);
          return rename;
        })(fs3.rename);
      }
      fs3.read = typeof fs3.read !== "function" ? fs3.read : (function(fs$read) {
        function read(fd, buffer, offset, length, position, callback_) {
          var callback;
          if (callback_ && typeof callback_ === "function") {
            var eagCounter = 0;
            callback = function(er, _, __) {
              if (er && er.code === "EAGAIN" && eagCounter < 10) {
                eagCounter++;
                return fs$read.call(fs3, fd, buffer, offset, length, position, callback);
              }
              callback_.apply(this, arguments);
            };
          }
          return fs$read.call(fs3, fd, buffer, offset, length, position, callback);
        }
        if (Object.setPrototypeOf) Object.setPrototypeOf(read, fs$read);
        return read;
      })(fs3.read);
      fs3.readSync = typeof fs3.readSync !== "function" ? fs3.readSync : /* @__PURE__ */ (function(fs$readSync) {
        return function(fd, buffer, offset, length, position) {
          var eagCounter = 0;
          while (true) {
            try {
              return fs$readSync.call(fs3, fd, buffer, offset, length, position);
            } catch (er) {
              if (er.code === "EAGAIN" && eagCounter < 10) {
                eagCounter++;
                continue;
              }
              throw er;
            }
          }
        };
      })(fs3.readSync);
      function patchLchmod(fs4) {
        fs4.lchmod = function(path4, mode, callback) {
          fs4.open(
            path4,
            constants.O_WRONLY | constants.O_SYMLINK,
            mode,
            function(err, fd) {
              if (err) {
                if (callback) callback(err);
                return;
              }
              fs4.fchmod(fd, mode, function(err2) {
                fs4.close(fd, function(err22) {
                  if (callback) callback(err2 || err22);
                });
              });
            }
          );
        };
        fs4.lchmodSync = function(path4, mode) {
          var fd = fs4.openSync(path4, constants.O_WRONLY | constants.O_SYMLINK, mode);
          var threw = true;
          var ret;
          try {
            ret = fs4.fchmodSync(fd, mode);
            threw = false;
          } finally {
            if (threw) {
              try {
                fs4.closeSync(fd);
              } catch (er) {
              }
            } else {
              fs4.closeSync(fd);
            }
          }
          return ret;
        };
      }
      function patchLutimes(fs4) {
        if (constants.hasOwnProperty("O_SYMLINK") && fs4.futimes) {
          fs4.lutimes = function(path4, at, mt, cb) {
            fs4.open(path4, constants.O_SYMLINK, function(er, fd) {
              if (er) {
                if (cb) cb(er);
                return;
              }
              fs4.futimes(fd, at, mt, function(er2) {
                fs4.close(fd, function(er22) {
                  if (cb) cb(er2 || er22);
                });
              });
            });
          };
          fs4.lutimesSync = function(path4, at, mt) {
            var fd = fs4.openSync(path4, constants.O_SYMLINK);
            var ret;
            var threw = true;
            try {
              ret = fs4.futimesSync(fd, at, mt);
              threw = false;
            } finally {
              if (threw) {
                try {
                  fs4.closeSync(fd);
                } catch (er) {
                }
              } else {
                fs4.closeSync(fd);
              }
            }
            return ret;
          };
        } else if (fs4.futimes) {
          fs4.lutimes = function(_a, _b, _c, cb) {
            if (cb) process.nextTick(cb);
          };
          fs4.lutimesSync = function() {
          };
        }
      }
      function chmodFix(orig) {
        if (!orig) return orig;
        return function(target, mode, cb) {
          return orig.call(fs3, target, mode, function(er) {
            if (chownErOk(er)) er = null;
            if (cb) cb.apply(this, arguments);
          });
        };
      }
      function chmodFixSync(orig) {
        if (!orig) return orig;
        return function(target, mode) {
          try {
            return orig.call(fs3, target, mode);
          } catch (er) {
            if (!chownErOk(er)) throw er;
          }
        };
      }
      function chownFix(orig) {
        if (!orig) return orig;
        return function(target, uid, gid, cb) {
          return orig.call(fs3, target, uid, gid, function(er) {
            if (chownErOk(er)) er = null;
            if (cb) cb.apply(this, arguments);
          });
        };
      }
      function chownFixSync(orig) {
        if (!orig) return orig;
        return function(target, uid, gid) {
          try {
            return orig.call(fs3, target, uid, gid);
          } catch (er) {
            if (!chownErOk(er)) throw er;
          }
        };
      }
      function statFix(orig) {
        if (!orig) return orig;
        return function(target, options, cb) {
          if (typeof options === "function") {
            cb = options;
            options = null;
          }
          function callback(er, stats) {
            if (stats) {
              if (stats.uid < 0) stats.uid += 4294967296;
              if (stats.gid < 0) stats.gid += 4294967296;
            }
            if (cb) cb.apply(this, arguments);
          }
          return options ? orig.call(fs3, target, options, callback) : orig.call(fs3, target, callback);
        };
      }
      function statFixSync(orig) {
        if (!orig) return orig;
        return function(target, options) {
          var stats = options ? orig.call(fs3, target, options) : orig.call(fs3, target);
          if (stats) {
            if (stats.uid < 0) stats.uid += 4294967296;
            if (stats.gid < 0) stats.gid += 4294967296;
          }
          return stats;
        };
      }
      function chownErOk(er) {
        if (!er)
          return true;
        if (er.code === "ENOSYS")
          return true;
        var nonroot = !process.getuid || process.getuid() !== 0;
        if (nonroot) {
          if (er.code === "EINVAL" || er.code === "EPERM")
            return true;
        }
        return false;
      }
    }
  }
});

// node_modules/jest-message-util/node_modules/graceful-fs/legacy-streams.js
var require_legacy_streams = __commonJS({
  "node_modules/jest-message-util/node_modules/graceful-fs/legacy-streams.js"(exports2, module2) {
    var Stream = require("stream").Stream;
    module2.exports = legacy;
    function legacy(fs3) {
      return {
        ReadStream,
        WriteStream
      };
      function ReadStream(path4, options) {
        if (!(this instanceof ReadStream)) return new ReadStream(path4, options);
        Stream.call(this);
        var self = this;
        this.path = path4;
        this.fd = null;
        this.readable = true;
        this.paused = false;
        this.flags = "r";
        this.mode = 438;
        this.bufferSize = 64 * 1024;
        options = options || {};
        var keys = Object.keys(options);
        for (var index = 0, length = keys.length; index < length; index++) {
          var key = keys[index];
          this[key] = options[key];
        }
        if (this.encoding) this.setEncoding(this.encoding);
        if (this.start !== void 0) {
          if ("number" !== typeof this.start) {
            throw TypeError("start must be a Number");
          }
          if (this.end === void 0) {
            this.end = Infinity;
          } else if ("number" !== typeof this.end) {
            throw TypeError("end must be a Number");
          }
          if (this.start > this.end) {
            throw new Error("start must be <= end");
          }
          this.pos = this.start;
        }
        if (this.fd !== null) {
          process.nextTick(function() {
            self._read();
          });
          return;
        }
        fs3.open(this.path, this.flags, this.mode, function(err, fd) {
          if (err) {
            self.emit("error", err);
            self.readable = false;
            return;
          }
          self.fd = fd;
          self.emit("open", fd);
          self._read();
        });
      }
      function WriteStream(path4, options) {
        if (!(this instanceof WriteStream)) return new WriteStream(path4, options);
        Stream.call(this);
        this.path = path4;
        this.fd = null;
        this.writable = true;
        this.flags = "w";
        this.encoding = "binary";
        this.mode = 438;
        this.bytesWritten = 0;
        options = options || {};
        var keys = Object.keys(options);
        for (var index = 0, length = keys.length; index < length; index++) {
          var key = keys[index];
          this[key] = options[key];
        }
        if (this.start !== void 0) {
          if ("number" !== typeof this.start) {
            throw TypeError("start must be a Number");
          }
          if (this.start < 0) {
            throw new Error("start must be >= zero");
          }
          this.pos = this.start;
        }
        this.busy = false;
        this._queue = [];
        if (this.fd === null) {
          this._open = fs3.open;
          this._queue.push([this._open, this.path, this.flags, this.mode, void 0]);
          this.flush();
        }
      }
    }
  }
});

// node_modules/jest-message-util/node_modules/graceful-fs/clone.js
var require_clone = __commonJS({
  "node_modules/jest-message-util/node_modules/graceful-fs/clone.js"(exports2, module2) {
    "use strict";
    module2.exports = clone;
    var getPrototypeOf = Object.getPrototypeOf || function(obj) {
      return obj.__proto__;
    };
    function clone(obj) {
      if (obj === null || typeof obj !== "object")
        return obj;
      if (obj instanceof Object)
        var copy = { __proto__: getPrototypeOf(obj) };
      else
        var copy = /* @__PURE__ */ Object.create(null);
      Object.getOwnPropertyNames(obj).forEach(function(key) {
        Object.defineProperty(copy, key, Object.getOwnPropertyDescriptor(obj, key));
      });
      return copy;
    }
  }
});

// node_modules/jest-message-util/node_modules/graceful-fs/graceful-fs.js
var require_graceful_fs = __commonJS({
  "node_modules/jest-message-util/node_modules/graceful-fs/graceful-fs.js"(exports2, module2) {
    var fs3 = require("fs");
    var polyfills = require_polyfills();
    var legacy = require_legacy_streams();
    var clone = require_clone();
    var util2 = require("util");
    var gracefulQueue;
    var previousSymbol;
    if (typeof Symbol === "function" && typeof Symbol.for === "function") {
      gracefulQueue = Symbol.for("graceful-fs.queue");
      previousSymbol = Symbol.for("graceful-fs.previous");
    } else {
      gracefulQueue = "___graceful-fs.queue";
      previousSymbol = "___graceful-fs.previous";
    }
    function noop() {
    }
    function publishQueue(context, queue2) {
      Object.defineProperty(context, gracefulQueue, {
        get: function() {
          return queue2;
        }
      });
    }
    var debug = noop;
    if (util2.debuglog)
      debug = util2.debuglog("gfs4");
    else if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || ""))
      debug = function() {
        var m = util2.format.apply(util2, arguments);
        m = "GFS4: " + m.split(/\n/).join("\nGFS4: ");
        console.error(m);
      };
    if (!fs3[gracefulQueue]) {
      queue = global[gracefulQueue] || [];
      publishQueue(fs3, queue);
      fs3.close = (function(fs$close) {
        function close(fd, cb) {
          return fs$close.call(fs3, fd, function(err) {
            if (!err) {
              resetQueue();
            }
            if (typeof cb === "function")
              cb.apply(this, arguments);
          });
        }
        Object.defineProperty(close, previousSymbol, {
          value: fs$close
        });
        return close;
      })(fs3.close);
      fs3.closeSync = (function(fs$closeSync) {
        function closeSync(fd) {
          fs$closeSync.apply(fs3, arguments);
          resetQueue();
        }
        Object.defineProperty(closeSync, previousSymbol, {
          value: fs$closeSync
        });
        return closeSync;
      })(fs3.closeSync);
      if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || "")) {
        process.on("exit", function() {
          debug(fs3[gracefulQueue]);
          require("assert").equal(fs3[gracefulQueue].length, 0);
        });
      }
    }
    var queue;
    if (!global[gracefulQueue]) {
      publishQueue(global, fs3[gracefulQueue]);
    }
    module2.exports = patch(clone(fs3));
    if (process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !fs3.__patched) {
      module2.exports = patch(fs3);
      fs3.__patched = true;
    }
    function patch(fs4) {
      polyfills(fs4);
      fs4.gracefulify = patch;
      fs4.createReadStream = createReadStream;
      fs4.createWriteStream = createWriteStream;
      var fs$readFile = fs4.readFile;
      fs4.readFile = readFile;
      function readFile(path4, options, cb) {
        if (typeof options === "function")
          cb = options, options = null;
        return go$readFile(path4, options, cb);
        function go$readFile(path5, options2, cb2, startTime) {
          return fs$readFile(path5, options2, function(err) {
            if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
              enqueue([go$readFile, [path5, options2, cb2], err, startTime || Date.now(), Date.now()]);
            else {
              if (typeof cb2 === "function")
                cb2.apply(this, arguments);
            }
          });
        }
      }
      var fs$writeFile = fs4.writeFile;
      fs4.writeFile = writeFile;
      function writeFile(path4, data, options, cb) {
        if (typeof options === "function")
          cb = options, options = null;
        return go$writeFile(path4, data, options, cb);
        function go$writeFile(path5, data2, options2, cb2, startTime) {
          return fs$writeFile(path5, data2, options2, function(err) {
            if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
              enqueue([go$writeFile, [path5, data2, options2, cb2], err, startTime || Date.now(), Date.now()]);
            else {
              if (typeof cb2 === "function")
                cb2.apply(this, arguments);
            }
          });
        }
      }
      var fs$appendFile = fs4.appendFile;
      if (fs$appendFile)
        fs4.appendFile = appendFile;
      function appendFile(path4, data, options, cb) {
        if (typeof options === "function")
          cb = options, options = null;
        return go$appendFile(path4, data, options, cb);
        function go$appendFile(path5, data2, options2, cb2, startTime) {
          return fs$appendFile(path5, data2, options2, function(err) {
            if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
              enqueue([go$appendFile, [path5, data2, options2, cb2], err, startTime || Date.now(), Date.now()]);
            else {
              if (typeof cb2 === "function")
                cb2.apply(this, arguments);
            }
          });
        }
      }
      var fs$copyFile = fs4.copyFile;
      if (fs$copyFile)
        fs4.copyFile = copyFile;
      function copyFile(src, dest, flags, cb) {
        if (typeof flags === "function") {
          cb = flags;
          flags = 0;
        }
        return go$copyFile(src, dest, flags, cb);
        function go$copyFile(src2, dest2, flags2, cb2, startTime) {
          return fs$copyFile(src2, dest2, flags2, function(err) {
            if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
              enqueue([go$copyFile, [src2, dest2, flags2, cb2], err, startTime || Date.now(), Date.now()]);
            else {
              if (typeof cb2 === "function")
                cb2.apply(this, arguments);
            }
          });
        }
      }
      var fs$readdir = fs4.readdir;
      fs4.readdir = readdir;
      var noReaddirOptionVersions = /^v[0-5]\./;
      function readdir(path4, options, cb) {
        if (typeof options === "function")
          cb = options, options = null;
        var go$readdir = noReaddirOptionVersions.test(process.version) ? function go$readdir2(path5, options2, cb2, startTime) {
          return fs$readdir(path5, fs$readdirCallback(
            path5,
            options2,
            cb2,
            startTime
          ));
        } : function go$readdir2(path5, options2, cb2, startTime) {
          return fs$readdir(path5, options2, fs$readdirCallback(
            path5,
            options2,
            cb2,
            startTime
          ));
        };
        return go$readdir(path4, options, cb);
        function fs$readdirCallback(path5, options2, cb2, startTime) {
          return function(err, files) {
            if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
              enqueue([
                go$readdir,
                [path5, options2, cb2],
                err,
                startTime || Date.now(),
                Date.now()
              ]);
            else {
              if (files && files.sort)
                files.sort();
              if (typeof cb2 === "function")
                cb2.call(this, err, files);
            }
          };
        }
      }
      if (process.version.substr(0, 4) === "v0.8") {
        var legStreams = legacy(fs4);
        ReadStream = legStreams.ReadStream;
        WriteStream = legStreams.WriteStream;
      }
      var fs$ReadStream = fs4.ReadStream;
      if (fs$ReadStream) {
        ReadStream.prototype = Object.create(fs$ReadStream.prototype);
        ReadStream.prototype.open = ReadStream$open;
      }
      var fs$WriteStream = fs4.WriteStream;
      if (fs$WriteStream) {
        WriteStream.prototype = Object.create(fs$WriteStream.prototype);
        WriteStream.prototype.open = WriteStream$open;
      }
      Object.defineProperty(fs4, "ReadStream", {
        get: function() {
          return ReadStream;
        },
        set: function(val) {
          ReadStream = val;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(fs4, "WriteStream", {
        get: function() {
          return WriteStream;
        },
        set: function(val) {
          WriteStream = val;
        },
        enumerable: true,
        configurable: true
      });
      var FileReadStream = ReadStream;
      Object.defineProperty(fs4, "FileReadStream", {
        get: function() {
          return FileReadStream;
        },
        set: function(val) {
          FileReadStream = val;
        },
        enumerable: true,
        configurable: true
      });
      var FileWriteStream = WriteStream;
      Object.defineProperty(fs4, "FileWriteStream", {
        get: function() {
          return FileWriteStream;
        },
        set: function(val) {
          FileWriteStream = val;
        },
        enumerable: true,
        configurable: true
      });
      function ReadStream(path4, options) {
        if (this instanceof ReadStream)
          return fs$ReadStream.apply(this, arguments), this;
        else
          return ReadStream.apply(Object.create(ReadStream.prototype), arguments);
      }
      function ReadStream$open() {
        var that = this;
        open(that.path, that.flags, that.mode, function(err, fd) {
          if (err) {
            if (that.autoClose)
              that.destroy();
            that.emit("error", err);
          } else {
            that.fd = fd;
            that.emit("open", fd);
            that.read();
          }
        });
      }
      function WriteStream(path4, options) {
        if (this instanceof WriteStream)
          return fs$WriteStream.apply(this, arguments), this;
        else
          return WriteStream.apply(Object.create(WriteStream.prototype), arguments);
      }
      function WriteStream$open() {
        var that = this;
        open(that.path, that.flags, that.mode, function(err, fd) {
          if (err) {
            that.destroy();
            that.emit("error", err);
          } else {
            that.fd = fd;
            that.emit("open", fd);
          }
        });
      }
      function createReadStream(path4, options) {
        return new fs4.ReadStream(path4, options);
      }
      function createWriteStream(path4, options) {
        return new fs4.WriteStream(path4, options);
      }
      var fs$open = fs4.open;
      fs4.open = open;
      function open(path4, flags, mode, cb) {
        if (typeof mode === "function")
          cb = mode, mode = null;
        return go$open(path4, flags, mode, cb);
        function go$open(path5, flags2, mode2, cb2, startTime) {
          return fs$open(path5, flags2, mode2, function(err, fd) {
            if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
              enqueue([go$open, [path5, flags2, mode2, cb2], err, startTime || Date.now(), Date.now()]);
            else {
              if (typeof cb2 === "function")
                cb2.apply(this, arguments);
            }
          });
        }
      }
      return fs4;
    }
    function enqueue(elem) {
      debug("ENQUEUE", elem[0].name, elem[1]);
      fs3[gracefulQueue].push(elem);
      retry();
    }
    var retryTimer;
    function resetQueue() {
      var now = Date.now();
      for (var i = 0; i < fs3[gracefulQueue].length; ++i) {
        if (fs3[gracefulQueue][i].length > 2) {
          fs3[gracefulQueue][i][3] = now;
          fs3[gracefulQueue][i][4] = now;
        }
      }
      retry();
    }
    function retry() {
      clearTimeout(retryTimer);
      retryTimer = void 0;
      if (fs3[gracefulQueue].length === 0)
        return;
      var elem = fs3[gracefulQueue].shift();
      var fn = elem[0];
      var args = elem[1];
      var err = elem[2];
      var startTime = elem[3];
      var lastTime = elem[4];
      if (startTime === void 0) {
        debug("RETRY", fn.name, args);
        fn.apply(null, args);
      } else if (Date.now() - startTime >= 6e4) {
        debug("TIMEOUT", fn.name, args);
        var cb = args.pop();
        if (typeof cb === "function")
          cb.call(null, err);
      } else {
        var sinceAttempt = Date.now() - lastTime;
        var sinceStart = Math.max(lastTime - startTime, 1);
        var desiredDelay = Math.min(sinceStart * 1.2, 100);
        if (sinceAttempt >= desiredDelay) {
          debug("RETRY", fn.name, args);
          fn.apply(null, args.concat([startTime]));
        } else {
          fs3[gracefulQueue].push(elem);
        }
      }
      if (retryTimer === void 0) {
        retryTimer = setTimeout(retry, 0);
      }
    }
  }
});

// node_modules/braces/lib/utils.js
var require_utils = __commonJS({
  "node_modules/braces/lib/utils.js"(exports2) {
    "use strict";
    exports2.isInteger = (num) => {
      if (typeof num === "number") {
        return Number.isInteger(num);
      }
      if (typeof num === "string" && num.trim() !== "") {
        return Number.isInteger(Number(num));
      }
      return false;
    };
    exports2.find = (node, type) => node.nodes.find((node2) => node2.type === type);
    exports2.exceedsLimit = (min, max, step = 1, limit) => {
      if (limit === false) return false;
      if (!exports2.isInteger(min) || !exports2.isInteger(max)) return false;
      return (Number(max) - Number(min)) / Number(step) >= limit;
    };
    exports2.escapeNode = (block, n = 0, type) => {
      const node = block.nodes[n];
      if (!node) return;
      if (type && node.type === type || node.type === "open" || node.type === "close") {
        if (node.escaped !== true) {
          node.value = "\\" + node.value;
          node.escaped = true;
        }
      }
    };
    exports2.encloseBrace = (node) => {
      if (node.type !== "brace") return false;
      if (node.commas >> 0 + node.ranges >> 0 === 0) {
        node.invalid = true;
        return true;
      }
      return false;
    };
    exports2.isInvalidBrace = (block) => {
      if (block.type !== "brace") return false;
      if (block.invalid === true || block.dollar) return true;
      if (block.commas >> 0 + block.ranges >> 0 === 0) {
        block.invalid = true;
        return true;
      }
      if (block.open !== true || block.close !== true) {
        block.invalid = true;
        return true;
      }
      return false;
    };
    exports2.isOpenOrClose = (node) => {
      if (node.type === "open" || node.type === "close") {
        return true;
      }
      return node.open === true || node.close === true;
    };
    exports2.reduce = (nodes) => nodes.reduce((acc, node) => {
      if (node.type === "text") acc.push(node.value);
      if (node.type === "range") node.type = "text";
      return acc;
    }, []);
    exports2.flatten = (...args) => {
      const result = [];
      const flat = (arr) => {
        for (let i = 0; i < arr.length; i++) {
          const ele = arr[i];
          if (Array.isArray(ele)) {
            flat(ele);
            continue;
          }
          if (ele !== void 0) {
            result.push(ele);
          }
        }
        return result;
      };
      flat(args);
      return result;
    };
  }
});

// node_modules/braces/lib/stringify.js
var require_stringify = __commonJS({
  "node_modules/braces/lib/stringify.js"(exports2, module2) {
    "use strict";
    var utils2 = require_utils();
    module2.exports = (ast, options = {}) => {
      const stringify2 = (node, parent = {}) => {
        const invalidBlock = options.escapeInvalid && utils2.isInvalidBrace(parent);
        const invalidNode = node.invalid === true && options.escapeInvalid === true;
        let output = "";
        if (node.value) {
          if ((invalidBlock || invalidNode) && utils2.isOpenOrClose(node)) {
            return "\\" + node.value;
          }
          return node.value;
        }
        if (node.value) {
          return node.value;
        }
        if (node.nodes) {
          for (const child of node.nodes) {
            output += stringify2(child);
          }
        }
        return output;
      };
      return stringify2(ast);
    };
  }
});

// node_modules/is-number/index.js
var require_is_number = __commonJS({
  "node_modules/is-number/index.js"(exports2, module2) {
    "use strict";
    module2.exports = function(num) {
      if (typeof num === "number") {
        return num - num === 0;
      }
      if (typeof num === "string" && num.trim() !== "") {
        return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
      }
      return false;
    };
  }
});

// node_modules/to-regex-range/index.js
var require_to_regex_range = __commonJS({
  "node_modules/to-regex-range/index.js"(exports2, module2) {
    "use strict";
    var isNumber = require_is_number();
    var toRegexRange = (min, max, options) => {
      if (isNumber(min) === false) {
        throw new TypeError("toRegexRange: expected the first argument to be a number");
      }
      if (max === void 0 || min === max) {
        return String(min);
      }
      if (isNumber(max) === false) {
        throw new TypeError("toRegexRange: expected the second argument to be a number.");
      }
      let opts = { relaxZeros: true, ...options };
      if (typeof opts.strictZeros === "boolean") {
        opts.relaxZeros = opts.strictZeros === false;
      }
      let relax = String(opts.relaxZeros);
      let shorthand = String(opts.shorthand);
      let capture = String(opts.capture);
      let wrap = String(opts.wrap);
      let cacheKey = min + ":" + max + "=" + relax + shorthand + capture + wrap;
      if (toRegexRange.cache.hasOwnProperty(cacheKey)) {
        return toRegexRange.cache[cacheKey].result;
      }
      let a = Math.min(min, max);
      let b = Math.max(min, max);
      if (Math.abs(a - b) === 1) {
        let result = min + "|" + max;
        if (opts.capture) {
          return `(${result})`;
        }
        if (opts.wrap === false) {
          return result;
        }
        return `(?:${result})`;
      }
      let isPadded = hasPadding(min) || hasPadding(max);
      let state = { min, max, a, b };
      let positives = [];
      let negatives = [];
      if (isPadded) {
        state.isPadded = isPadded;
        state.maxLen = String(state.max).length;
      }
      if (a < 0) {
        let newMin = b < 0 ? Math.abs(b) : 1;
        negatives = splitToPatterns(newMin, Math.abs(a), state, opts);
        a = state.a = 0;
      }
      if (b >= 0) {
        positives = splitToPatterns(a, b, state, opts);
      }
      state.negatives = negatives;
      state.positives = positives;
      state.result = collatePatterns(negatives, positives, opts);
      if (opts.capture === true) {
        state.result = `(${state.result})`;
      } else if (opts.wrap !== false && positives.length + negatives.length > 1) {
        state.result = `(?:${state.result})`;
      }
      toRegexRange.cache[cacheKey] = state;
      return state.result;
    };
    function collatePatterns(neg, pos, options) {
      let onlyNegative = filterPatterns(neg, pos, "-", false, options) || [];
      let onlyPositive = filterPatterns(pos, neg, "", false, options) || [];
      let intersected = filterPatterns(neg, pos, "-?", true, options) || [];
      let subpatterns = onlyNegative.concat(intersected).concat(onlyPositive);
      return subpatterns.join("|");
    }
    function splitToRanges(min, max) {
      let nines = 1;
      let zeros = 1;
      let stop = countNines(min, nines);
      let stops = /* @__PURE__ */ new Set([max]);
      while (min <= stop && stop <= max) {
        stops.add(stop);
        nines += 1;
        stop = countNines(min, nines);
      }
      stop = countZeros(max + 1, zeros) - 1;
      while (min < stop && stop <= max) {
        stops.add(stop);
        zeros += 1;
        stop = countZeros(max + 1, zeros) - 1;
      }
      stops = [...stops];
      stops.sort(compare);
      return stops;
    }
    function rangeToPattern(start, stop, options) {
      if (start === stop) {
        return { pattern: start, count: [], digits: 0 };
      }
      let zipped = zip(start, stop);
      let digits = zipped.length;
      let pattern = "";
      let count = 0;
      for (let i = 0; i < digits; i++) {
        let [startDigit, stopDigit] = zipped[i];
        if (startDigit === stopDigit) {
          pattern += startDigit;
        } else if (startDigit !== "0" || stopDigit !== "9") {
          pattern += toCharacterClass(startDigit, stopDigit, options);
        } else {
          count++;
        }
      }
      if (count) {
        pattern += options.shorthand === true ? "\\d" : "[0-9]";
      }
      return { pattern, count: [count], digits };
    }
    function splitToPatterns(min, max, tok, options) {
      let ranges = splitToRanges(min, max);
      let tokens = [];
      let start = min;
      let prev;
      for (let i = 0; i < ranges.length; i++) {
        let max2 = ranges[i];
        let obj = rangeToPattern(String(start), String(max2), options);
        let zeros = "";
        if (!tok.isPadded && prev && prev.pattern === obj.pattern) {
          if (prev.count.length > 1) {
            prev.count.pop();
          }
          prev.count.push(obj.count[0]);
          prev.string = prev.pattern + toQuantifier(prev.count);
          start = max2 + 1;
          continue;
        }
        if (tok.isPadded) {
          zeros = padZeros(max2, tok, options);
        }
        obj.string = zeros + obj.pattern + toQuantifier(obj.count);
        tokens.push(obj);
        start = max2 + 1;
        prev = obj;
      }
      return tokens;
    }
    function filterPatterns(arr, comparison, prefix, intersection, options) {
      let result = [];
      for (let ele of arr) {
        let { string } = ele;
        if (!intersection && !contains(comparison, "string", string)) {
          result.push(prefix + string);
        }
        if (intersection && contains(comparison, "string", string)) {
          result.push(prefix + string);
        }
      }
      return result;
    }
    function zip(a, b) {
      let arr = [];
      for (let i = 0; i < a.length; i++) arr.push([a[i], b[i]]);
      return arr;
    }
    function compare(a, b) {
      return a > b ? 1 : b > a ? -1 : 0;
    }
    function contains(arr, key, val) {
      return arr.some((ele) => ele[key] === val);
    }
    function countNines(min, len) {
      return Number(String(min).slice(0, -len) + "9".repeat(len));
    }
    function countZeros(integer, zeros) {
      return integer - integer % Math.pow(10, zeros);
    }
    function toQuantifier(digits) {
      let [start = 0, stop = ""] = digits;
      if (stop || start > 1) {
        return `{${start + (stop ? "," + stop : "")}}`;
      }
      return "";
    }
    function toCharacterClass(a, b, options) {
      return `[${a}${b - a === 1 ? "" : "-"}${b}]`;
    }
    function hasPadding(str) {
      return /^-?(0+)\d/.test(str);
    }
    function padZeros(value, tok, options) {
      if (!tok.isPadded) {
        return value;
      }
      let diff2 = Math.abs(tok.maxLen - String(value).length);
      let relax = options.relaxZeros !== false;
      switch (diff2) {
        case 0:
          return "";
        case 1:
          return relax ? "0?" : "0";
        case 2:
          return relax ? "0{0,2}" : "00";
        default: {
          return relax ? `0{0,${diff2}}` : `0{${diff2}}`;
        }
      }
    }
    toRegexRange.cache = {};
    toRegexRange.clearCache = () => toRegexRange.cache = {};
    module2.exports = toRegexRange;
  }
});

// node_modules/fill-range/index.js
var require_fill_range = __commonJS({
  "node_modules/fill-range/index.js"(exports2, module2) {
    "use strict";
    var util2 = require("util");
    var toRegexRange = require_to_regex_range();
    var isObject2 = (val) => val !== null && typeof val === "object" && !Array.isArray(val);
    var transform = (toNumber) => {
      return (value) => toNumber === true ? Number(value) : String(value);
    };
    var isValidValue = (value) => {
      return typeof value === "number" || typeof value === "string" && value !== "";
    };
    var isNumber = (num) => Number.isInteger(+num);
    var zeros = (input) => {
      let value = `${input}`;
      let index = -1;
      if (value[0] === "-") value = value.slice(1);
      if (value === "0") return false;
      while (value[++index] === "0") ;
      return index > 0;
    };
    var stringify2 = (start, end, options) => {
      if (typeof start === "string" || typeof end === "string") {
        return true;
      }
      return options.stringify === true;
    };
    var pad = (input, maxLength, toNumber) => {
      if (maxLength > 0) {
        let dash = input[0] === "-" ? "-" : "";
        if (dash) input = input.slice(1);
        input = dash + input.padStart(dash ? maxLength - 1 : maxLength, "0");
      }
      if (toNumber === false) {
        return String(input);
      }
      return input;
    };
    var toMaxLen = (input, maxLength) => {
      let negative = input[0] === "-" ? "-" : "";
      if (negative) {
        input = input.slice(1);
        maxLength--;
      }
      while (input.length < maxLength) input = "0" + input;
      return negative ? "-" + input : input;
    };
    var toSequence = (parts, options, maxLen) => {
      parts.negatives.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
      parts.positives.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
      let prefix = options.capture ? "" : "?:";
      let positives = "";
      let negatives = "";
      let result;
      if (parts.positives.length) {
        positives = parts.positives.map((v) => toMaxLen(String(v), maxLen)).join("|");
      }
      if (parts.negatives.length) {
        negatives = `-(${prefix}${parts.negatives.map((v) => toMaxLen(String(v), maxLen)).join("|")})`;
      }
      if (positives && negatives) {
        result = `${positives}|${negatives}`;
      } else {
        result = positives || negatives;
      }
      if (options.wrap) {
        return `(${prefix}${result})`;
      }
      return result;
    };
    var toRange = (a, b, isNumbers, options) => {
      if (isNumbers) {
        return toRegexRange(a, b, { wrap: false, ...options });
      }
      let start = String.fromCharCode(a);
      if (a === b) return start;
      let stop = String.fromCharCode(b);
      return `[${start}-${stop}]`;
    };
    var toRegex = (start, end, options) => {
      if (Array.isArray(start)) {
        let wrap = options.wrap === true;
        let prefix = options.capture ? "" : "?:";
        return wrap ? `(${prefix}${start.join("|")})` : start.join("|");
      }
      return toRegexRange(start, end, options);
    };
    var rangeError = (...args) => {
      return new RangeError("Invalid range arguments: " + util2.inspect(...args));
    };
    var invalidRange = (start, end, options) => {
      if (options.strictRanges === true) throw rangeError([start, end]);
      return [];
    };
    var invalidStep = (step, options) => {
      if (options.strictRanges === true) {
        throw new TypeError(`Expected step "${step}" to be a number`);
      }
      return [];
    };
    var fillNumbers = (start, end, step = 1, options = {}) => {
      let a = Number(start);
      let b = Number(end);
      if (!Number.isInteger(a) || !Number.isInteger(b)) {
        if (options.strictRanges === true) throw rangeError([start, end]);
        return [];
      }
      if (a === 0) a = 0;
      if (b === 0) b = 0;
      let descending = a > b;
      let startString = String(start);
      let endString = String(end);
      let stepString = String(step);
      step = Math.max(Math.abs(step), 1);
      let padded = zeros(startString) || zeros(endString) || zeros(stepString);
      let maxLen = padded ? Math.max(startString.length, endString.length, stepString.length) : 0;
      let toNumber = padded === false && stringify2(start, end, options) === false;
      let format = options.transform || transform(toNumber);
      if (options.toRegex && step === 1) {
        return toRange(toMaxLen(start, maxLen), toMaxLen(end, maxLen), true, options);
      }
      let parts = { negatives: [], positives: [] };
      let push = (num) => parts[num < 0 ? "negatives" : "positives"].push(Math.abs(num));
      let range = [];
      let index = 0;
      while (descending ? a >= b : a <= b) {
        if (options.toRegex === true && step > 1) {
          push(a);
        } else {
          range.push(pad(format(a, index), maxLen, toNumber));
        }
        a = descending ? a - step : a + step;
        index++;
      }
      if (options.toRegex === true) {
        return step > 1 ? toSequence(parts, options, maxLen) : toRegex(range, null, { wrap: false, ...options });
      }
      return range;
    };
    var fillLetters = (start, end, step = 1, options = {}) => {
      if (!isNumber(start) && start.length > 1 || !isNumber(end) && end.length > 1) {
        return invalidRange(start, end, options);
      }
      let format = options.transform || ((val) => String.fromCharCode(val));
      let a = `${start}`.charCodeAt(0);
      let b = `${end}`.charCodeAt(0);
      let descending = a > b;
      let min = Math.min(a, b);
      let max = Math.max(a, b);
      if (options.toRegex && step === 1) {
        return toRange(min, max, false, options);
      }
      let range = [];
      let index = 0;
      while (descending ? a >= b : a <= b) {
        range.push(format(a, index));
        a = descending ? a - step : a + step;
        index++;
      }
      if (options.toRegex === true) {
        return toRegex(range, null, { wrap: false, options });
      }
      return range;
    };
    var fill = (start, end, step, options = {}) => {
      if (end == null && isValidValue(start)) {
        return [start];
      }
      if (!isValidValue(start) || !isValidValue(end)) {
        return invalidRange(start, end, options);
      }
      if (typeof step === "function") {
        return fill(start, end, 1, { transform: step });
      }
      if (isObject2(step)) {
        return fill(start, end, 0, step);
      }
      let opts = { ...options };
      if (opts.capture === true) opts.wrap = true;
      step = step || opts.step || 1;
      if (!isNumber(step)) {
        if (step != null && !isObject2(step)) return invalidStep(step, opts);
        return fill(start, end, 1, step);
      }
      if (isNumber(start) && isNumber(end)) {
        return fillNumbers(start, end, step, opts);
      }
      return fillLetters(start, end, Math.max(Math.abs(step), 1), opts);
    };
    module2.exports = fill;
  }
});

// node_modules/braces/lib/compile.js
var require_compile = __commonJS({
  "node_modules/braces/lib/compile.js"(exports2, module2) {
    "use strict";
    var fill = require_fill_range();
    var utils2 = require_utils();
    var compile = (ast, options = {}) => {
      const walk = (node, parent = {}) => {
        const invalidBlock = utils2.isInvalidBrace(parent);
        const invalidNode = node.invalid === true && options.escapeInvalid === true;
        const invalid = invalidBlock === true || invalidNode === true;
        const prefix = options.escapeInvalid === true ? "\\" : "";
        let output = "";
        if (node.isOpen === true) {
          return prefix + node.value;
        }
        if (node.isClose === true) {
          console.log("node.isClose", prefix, node.value);
          return prefix + node.value;
        }
        if (node.type === "open") {
          return invalid ? prefix + node.value : "(";
        }
        if (node.type === "close") {
          return invalid ? prefix + node.value : ")";
        }
        if (node.type === "comma") {
          return node.prev.type === "comma" ? "" : invalid ? node.value : "|";
        }
        if (node.value) {
          return node.value;
        }
        if (node.nodes && node.ranges > 0) {
          const args = utils2.reduce(node.nodes);
          const range = fill(...args, { ...options, wrap: false, toRegex: true, strictZeros: true });
          if (range.length !== 0) {
            return args.length > 1 && range.length > 1 ? `(${range})` : range;
          }
        }
        if (node.nodes) {
          for (const child of node.nodes) {
            output += walk(child, node);
          }
        }
        return output;
      };
      return walk(ast);
    };
    module2.exports = compile;
  }
});

// node_modules/braces/lib/expand.js
var require_expand = __commonJS({
  "node_modules/braces/lib/expand.js"(exports2, module2) {
    "use strict";
    var fill = require_fill_range();
    var stringify2 = require_stringify();
    var utils2 = require_utils();
    var append = (queue = "", stash = "", enclose = false) => {
      const result = [];
      queue = [].concat(queue);
      stash = [].concat(stash);
      if (!stash.length) return queue;
      if (!queue.length) {
        return enclose ? utils2.flatten(stash).map((ele) => `{${ele}}`) : stash;
      }
      for (const item of queue) {
        if (Array.isArray(item)) {
          for (const value of item) {
            result.push(append(value, stash, enclose));
          }
        } else {
          for (let ele of stash) {
            if (enclose === true && typeof ele === "string") ele = `{${ele}}`;
            result.push(Array.isArray(ele) ? append(item, ele, enclose) : item + ele);
          }
        }
      }
      return utils2.flatten(result);
    };
    var expand = (ast, options = {}) => {
      const rangeLimit = options.rangeLimit === void 0 ? 1e3 : options.rangeLimit;
      const walk = (node, parent = {}) => {
        node.queue = [];
        let p = parent;
        let q = parent.queue;
        while (p.type !== "brace" && p.type !== "root" && p.parent) {
          p = p.parent;
          q = p.queue;
        }
        if (node.invalid || node.dollar) {
          q.push(append(q.pop(), stringify2(node, options)));
          return;
        }
        if (node.type === "brace" && node.invalid !== true && node.nodes.length === 2) {
          q.push(append(q.pop(), ["{}"]));
          return;
        }
        if (node.nodes && node.ranges > 0) {
          const args = utils2.reduce(node.nodes);
          if (utils2.exceedsLimit(...args, options.step, rangeLimit)) {
            throw new RangeError("expanded array length exceeds range limit. Use options.rangeLimit to increase or disable the limit.");
          }
          let range = fill(...args, options);
          if (range.length === 0) {
            range = stringify2(node, options);
          }
          q.push(append(q.pop(), range));
          node.nodes = [];
          return;
        }
        const enclose = utils2.encloseBrace(node);
        let queue = node.queue;
        let block = node;
        while (block.type !== "brace" && block.type !== "root" && block.parent) {
          block = block.parent;
          queue = block.queue;
        }
        for (let i = 0; i < node.nodes.length; i++) {
          const child = node.nodes[i];
          if (child.type === "comma" && node.type === "brace") {
            if (i === 1) queue.push("");
            queue.push("");
            continue;
          }
          if (child.type === "close") {
            q.push(append(q.pop(), queue, enclose));
            continue;
          }
          if (child.value && child.type !== "open") {
            queue.push(append(queue.pop(), child.value));
            continue;
          }
          if (child.nodes) {
            walk(child, node);
          }
        }
        return queue;
      };
      return utils2.flatten(walk(ast));
    };
    module2.exports = expand;
  }
});

// node_modules/braces/lib/constants.js
var require_constants = __commonJS({
  "node_modules/braces/lib/constants.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      MAX_LENGTH: 1e4,
      // Digits
      CHAR_0: "0",
      /* 0 */
      CHAR_9: "9",
      /* 9 */
      // Alphabet chars.
      CHAR_UPPERCASE_A: "A",
      /* A */
      CHAR_LOWERCASE_A: "a",
      /* a */
      CHAR_UPPERCASE_Z: "Z",
      /* Z */
      CHAR_LOWERCASE_Z: "z",
      /* z */
      CHAR_LEFT_PARENTHESES: "(",
      /* ( */
      CHAR_RIGHT_PARENTHESES: ")",
      /* ) */
      CHAR_ASTERISK: "*",
      /* * */
      // Non-alphabetic chars.
      CHAR_AMPERSAND: "&",
      /* & */
      CHAR_AT: "@",
      /* @ */
      CHAR_BACKSLASH: "\\",
      /* \ */
      CHAR_BACKTICK: "`",
      /* ` */
      CHAR_CARRIAGE_RETURN: "\r",
      /* \r */
      CHAR_CIRCUMFLEX_ACCENT: "^",
      /* ^ */
      CHAR_COLON: ":",
      /* : */
      CHAR_COMMA: ",",
      /* , */
      CHAR_DOLLAR: "$",
      /* . */
      CHAR_DOT: ".",
      /* . */
      CHAR_DOUBLE_QUOTE: '"',
      /* " */
      CHAR_EQUAL: "=",
      /* = */
      CHAR_EXCLAMATION_MARK: "!",
      /* ! */
      CHAR_FORM_FEED: "\f",
      /* \f */
      CHAR_FORWARD_SLASH: "/",
      /* / */
      CHAR_HASH: "#",
      /* # */
      CHAR_HYPHEN_MINUS: "-",
      /* - */
      CHAR_LEFT_ANGLE_BRACKET: "<",
      /* < */
      CHAR_LEFT_CURLY_BRACE: "{",
      /* { */
      CHAR_LEFT_SQUARE_BRACKET: "[",
      /* [ */
      CHAR_LINE_FEED: "\n",
      /* \n */
      CHAR_NO_BREAK_SPACE: "\xA0",
      /* \u00A0 */
      CHAR_PERCENT: "%",
      /* % */
      CHAR_PLUS: "+",
      /* + */
      CHAR_QUESTION_MARK: "?",
      /* ? */
      CHAR_RIGHT_ANGLE_BRACKET: ">",
      /* > */
      CHAR_RIGHT_CURLY_BRACE: "}",
      /* } */
      CHAR_RIGHT_SQUARE_BRACKET: "]",
      /* ] */
      CHAR_SEMICOLON: ";",
      /* ; */
      CHAR_SINGLE_QUOTE: "'",
      /* ' */
      CHAR_SPACE: " ",
      /*   */
      CHAR_TAB: "	",
      /* \t */
      CHAR_UNDERSCORE: "_",
      /* _ */
      CHAR_VERTICAL_LINE: "|",
      /* | */
      CHAR_ZERO_WIDTH_NOBREAK_SPACE: "\uFEFF"
      /* \uFEFF */
    };
  }
});

// node_modules/braces/lib/parse.js
var require_parse = __commonJS({
  "node_modules/braces/lib/parse.js"(exports2, module2) {
    "use strict";
    var stringify2 = require_stringify();
    var {
      MAX_LENGTH,
      CHAR_BACKSLASH,
      /* \ */
      CHAR_BACKTICK,
      /* ` */
      CHAR_COMMA,
      /* , */
      CHAR_DOT,
      /* . */
      CHAR_LEFT_PARENTHESES,
      /* ( */
      CHAR_RIGHT_PARENTHESES,
      /* ) */
      CHAR_LEFT_CURLY_BRACE,
      /* { */
      CHAR_RIGHT_CURLY_BRACE,
      /* } */
      CHAR_LEFT_SQUARE_BRACKET,
      /* [ */
      CHAR_RIGHT_SQUARE_BRACKET,
      /* ] */
      CHAR_DOUBLE_QUOTE,
      /* " */
      CHAR_SINGLE_QUOTE,
      /* ' */
      CHAR_NO_BREAK_SPACE,
      CHAR_ZERO_WIDTH_NOBREAK_SPACE
    } = require_constants();
    var parse = (input, options = {}) => {
      if (typeof input !== "string") {
        throw new TypeError("Expected a string");
      }
      const opts = options || {};
      const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
      if (input.length > max) {
        throw new SyntaxError(`Input length (${input.length}), exceeds max characters (${max})`);
      }
      const ast = { type: "root", input, nodes: [] };
      const stack = [ast];
      let block = ast;
      let prev = ast;
      let brackets = 0;
      const length = input.length;
      let index = 0;
      let depth = 0;
      let value;
      const advance = () => input[index++];
      const push = (node) => {
        if (node.type === "text" && prev.type === "dot") {
          prev.type = "text";
        }
        if (prev && prev.type === "text" && node.type === "text") {
          prev.value += node.value;
          return;
        }
        block.nodes.push(node);
        node.parent = block;
        node.prev = prev;
        prev = node;
        return node;
      };
      push({ type: "bos" });
      while (index < length) {
        block = stack[stack.length - 1];
        value = advance();
        if (value === CHAR_ZERO_WIDTH_NOBREAK_SPACE || value === CHAR_NO_BREAK_SPACE) {
          continue;
        }
        if (value === CHAR_BACKSLASH) {
          push({ type: "text", value: (options.keepEscaping ? value : "") + advance() });
          continue;
        }
        if (value === CHAR_RIGHT_SQUARE_BRACKET) {
          push({ type: "text", value: "\\" + value });
          continue;
        }
        if (value === CHAR_LEFT_SQUARE_BRACKET) {
          brackets++;
          let next;
          while (index < length && (next = advance())) {
            value += next;
            if (next === CHAR_LEFT_SQUARE_BRACKET) {
              brackets++;
              continue;
            }
            if (next === CHAR_BACKSLASH) {
              value += advance();
              continue;
            }
            if (next === CHAR_RIGHT_SQUARE_BRACKET) {
              brackets--;
              if (brackets === 0) {
                break;
              }
            }
          }
          push({ type: "text", value });
          continue;
        }
        if (value === CHAR_LEFT_PARENTHESES) {
          block = push({ type: "paren", nodes: [] });
          stack.push(block);
          push({ type: "text", value });
          continue;
        }
        if (value === CHAR_RIGHT_PARENTHESES) {
          if (block.type !== "paren") {
            push({ type: "text", value });
            continue;
          }
          block = stack.pop();
          push({ type: "text", value });
          block = stack[stack.length - 1];
          continue;
        }
        if (value === CHAR_DOUBLE_QUOTE || value === CHAR_SINGLE_QUOTE || value === CHAR_BACKTICK) {
          const open = value;
          let next;
          if (options.keepQuotes !== true) {
            value = "";
          }
          while (index < length && (next = advance())) {
            if (next === CHAR_BACKSLASH) {
              value += next + advance();
              continue;
            }
            if (next === open) {
              if (options.keepQuotes === true) value += next;
              break;
            }
            value += next;
          }
          push({ type: "text", value });
          continue;
        }
        if (value === CHAR_LEFT_CURLY_BRACE) {
          depth++;
          const dollar = prev.value && prev.value.slice(-1) === "$" || block.dollar === true;
          const brace = {
            type: "brace",
            open: true,
            close: false,
            dollar,
            depth,
            commas: 0,
            ranges: 0,
            nodes: []
          };
          block = push(brace);
          stack.push(block);
          push({ type: "open", value });
          continue;
        }
        if (value === CHAR_RIGHT_CURLY_BRACE) {
          if (block.type !== "brace") {
            push({ type: "text", value });
            continue;
          }
          const type = "close";
          block = stack.pop();
          block.close = true;
          push({ type, value });
          depth--;
          block = stack[stack.length - 1];
          continue;
        }
        if (value === CHAR_COMMA && depth > 0) {
          if (block.ranges > 0) {
            block.ranges = 0;
            const open = block.nodes.shift();
            block.nodes = [open, { type: "text", value: stringify2(block) }];
          }
          push({ type: "comma", value });
          block.commas++;
          continue;
        }
        if (value === CHAR_DOT && depth > 0 && block.commas === 0) {
          const siblings = block.nodes;
          if (depth === 0 || siblings.length === 0) {
            push({ type: "text", value });
            continue;
          }
          if (prev.type === "dot") {
            block.range = [];
            prev.value += value;
            prev.type = "range";
            if (block.nodes.length !== 3 && block.nodes.length !== 5) {
              block.invalid = true;
              block.ranges = 0;
              prev.type = "text";
              continue;
            }
            block.ranges++;
            block.args = [];
            continue;
          }
          if (prev.type === "range") {
            siblings.pop();
            const before = siblings[siblings.length - 1];
            before.value += prev.value + value;
            prev = before;
            block.ranges--;
            continue;
          }
          push({ type: "dot", value });
          continue;
        }
        push({ type: "text", value });
      }
      do {
        block = stack.pop();
        if (block.type !== "root") {
          block.nodes.forEach((node) => {
            if (!node.nodes) {
              if (node.type === "open") node.isOpen = true;
              if (node.type === "close") node.isClose = true;
              if (!node.nodes) node.type = "text";
              node.invalid = true;
            }
          });
          const parent = stack[stack.length - 1];
          const index2 = parent.nodes.indexOf(block);
          parent.nodes.splice(index2, 1, ...block.nodes);
        }
      } while (stack.length > 0);
      push({ type: "eos" });
      return ast;
    };
    module2.exports = parse;
  }
});

// node_modules/braces/index.js
var require_braces = __commonJS({
  "node_modules/braces/index.js"(exports2, module2) {
    "use strict";
    var stringify2 = require_stringify();
    var compile = require_compile();
    var expand = require_expand();
    var parse = require_parse();
    var braces = (input, options = {}) => {
      let output = [];
      if (Array.isArray(input)) {
        for (const pattern of input) {
          const result = braces.create(pattern, options);
          if (Array.isArray(result)) {
            output.push(...result);
          } else {
            output.push(result);
          }
        }
      } else {
        output = [].concat(braces.create(input, options));
      }
      if (options && options.expand === true && options.nodupes === true) {
        output = [...new Set(output)];
      }
      return output;
    };
    braces.parse = (input, options = {}) => parse(input, options);
    braces.stringify = (input, options = {}) => {
      if (typeof input === "string") {
        return stringify2(braces.parse(input, options), options);
      }
      return stringify2(input, options);
    };
    braces.compile = (input, options = {}) => {
      if (typeof input === "string") {
        input = braces.parse(input, options);
      }
      return compile(input, options);
    };
    braces.expand = (input, options = {}) => {
      if (typeof input === "string") {
        input = braces.parse(input, options);
      }
      let result = expand(input, options);
      if (options.noempty === true) {
        result = result.filter(Boolean);
      }
      if (options.nodupes === true) {
        result = [...new Set(result)];
      }
      return result;
    };
    braces.create = (input, options = {}) => {
      if (input === "" || input.length < 3) {
        return [input];
      }
      return options.expand !== true ? braces.compile(input, options) : braces.expand(input, options);
    };
    module2.exports = braces;
  }
});

// node_modules/micromatch/node_modules/picomatch/lib/constants.js
var require_constants2 = __commonJS({
  "node_modules/micromatch/node_modules/picomatch/lib/constants.js"(exports2, module2) {
    "use strict";
    var path4 = require("path");
    var WIN_SLASH = "\\\\/";
    var WIN_NO_SLASH = `[^${WIN_SLASH}]`;
    var DEFAULT_MAX_EXTGLOB_RECURSION = 0;
    var DOT_LITERAL = "\\.";
    var PLUS_LITERAL = "\\+";
    var QMARK_LITERAL = "\\?";
    var SLASH_LITERAL = "\\/";
    var ONE_CHAR = "(?=.)";
    var QMARK = "[^/]";
    var END_ANCHOR = `(?:${SLASH_LITERAL}|$)`;
    var START_ANCHOR = `(?:^|${SLASH_LITERAL})`;
    var DOTS_SLASH = `${DOT_LITERAL}{1,2}${END_ANCHOR}`;
    var NO_DOT = `(?!${DOT_LITERAL})`;
    var NO_DOTS = `(?!${START_ANCHOR}${DOTS_SLASH})`;
    var NO_DOT_SLASH = `(?!${DOT_LITERAL}{0,1}${END_ANCHOR})`;
    var NO_DOTS_SLASH = `(?!${DOTS_SLASH})`;
    var QMARK_NO_DOT = `[^.${SLASH_LITERAL}]`;
    var STAR = `${QMARK}*?`;
    var POSIX_CHARS = {
      DOT_LITERAL,
      PLUS_LITERAL,
      QMARK_LITERAL,
      SLASH_LITERAL,
      ONE_CHAR,
      QMARK,
      END_ANCHOR,
      DOTS_SLASH,
      NO_DOT,
      NO_DOTS,
      NO_DOT_SLASH,
      NO_DOTS_SLASH,
      QMARK_NO_DOT,
      STAR,
      START_ANCHOR
    };
    var WINDOWS_CHARS = {
      ...POSIX_CHARS,
      SLASH_LITERAL: `[${WIN_SLASH}]`,
      QMARK: WIN_NO_SLASH,
      STAR: `${WIN_NO_SLASH}*?`,
      DOTS_SLASH: `${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$)`,
      NO_DOT: `(?!${DOT_LITERAL})`,
      NO_DOTS: `(?!(?:^|[${WIN_SLASH}])${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
      NO_DOT_SLASH: `(?!${DOT_LITERAL}{0,1}(?:[${WIN_SLASH}]|$))`,
      NO_DOTS_SLASH: `(?!${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
      QMARK_NO_DOT: `[^.${WIN_SLASH}]`,
      START_ANCHOR: `(?:^|[${WIN_SLASH}])`,
      END_ANCHOR: `(?:[${WIN_SLASH}]|$)`
    };
    var POSIX_REGEX_SOURCE = {
      __proto__: null,
      alnum: "a-zA-Z0-9",
      alpha: "a-zA-Z",
      ascii: "\\x00-\\x7F",
      blank: " \\t",
      cntrl: "\\x00-\\x1F\\x7F",
      digit: "0-9",
      graph: "\\x21-\\x7E",
      lower: "a-z",
      print: "\\x20-\\x7E ",
      punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",
      space: " \\t\\r\\n\\v\\f",
      upper: "A-Z",
      word: "A-Za-z0-9_",
      xdigit: "A-Fa-f0-9"
    };
    module2.exports = {
      DEFAULT_MAX_EXTGLOB_RECURSION,
      MAX_LENGTH: 1024 * 64,
      POSIX_REGEX_SOURCE,
      // regular expressions
      REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
      REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
      REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
      REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
      REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
      REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
      // Replace globs with equivalent patterns to reduce parsing time.
      REPLACEMENTS: {
        __proto__: null,
        "***": "*",
        "**/**": "**",
        "**/**/**": "**"
      },
      // Digits
      CHAR_0: 48,
      /* 0 */
      CHAR_9: 57,
      /* 9 */
      // Alphabet chars.
      CHAR_UPPERCASE_A: 65,
      /* A */
      CHAR_LOWERCASE_A: 97,
      /* a */
      CHAR_UPPERCASE_Z: 90,
      /* Z */
      CHAR_LOWERCASE_Z: 122,
      /* z */
      CHAR_LEFT_PARENTHESES: 40,
      /* ( */
      CHAR_RIGHT_PARENTHESES: 41,
      /* ) */
      CHAR_ASTERISK: 42,
      /* * */
      // Non-alphabetic chars.
      CHAR_AMPERSAND: 38,
      /* & */
      CHAR_AT: 64,
      /* @ */
      CHAR_BACKWARD_SLASH: 92,
      /* \ */
      CHAR_CARRIAGE_RETURN: 13,
      /* \r */
      CHAR_CIRCUMFLEX_ACCENT: 94,
      /* ^ */
      CHAR_COLON: 58,
      /* : */
      CHAR_COMMA: 44,
      /* , */
      CHAR_DOT: 46,
      /* . */
      CHAR_DOUBLE_QUOTE: 34,
      /* " */
      CHAR_EQUAL: 61,
      /* = */
      CHAR_EXCLAMATION_MARK: 33,
      /* ! */
      CHAR_FORM_FEED: 12,
      /* \f */
      CHAR_FORWARD_SLASH: 47,
      /* / */
      CHAR_GRAVE_ACCENT: 96,
      /* ` */
      CHAR_HASH: 35,
      /* # */
      CHAR_HYPHEN_MINUS: 45,
      /* - */
      CHAR_LEFT_ANGLE_BRACKET: 60,
      /* < */
      CHAR_LEFT_CURLY_BRACE: 123,
      /* { */
      CHAR_LEFT_SQUARE_BRACKET: 91,
      /* [ */
      CHAR_LINE_FEED: 10,
      /* \n */
      CHAR_NO_BREAK_SPACE: 160,
      /* \u00A0 */
      CHAR_PERCENT: 37,
      /* % */
      CHAR_PLUS: 43,
      /* + */
      CHAR_QUESTION_MARK: 63,
      /* ? */
      CHAR_RIGHT_ANGLE_BRACKET: 62,
      /* > */
      CHAR_RIGHT_CURLY_BRACE: 125,
      /* } */
      CHAR_RIGHT_SQUARE_BRACKET: 93,
      /* ] */
      CHAR_SEMICOLON: 59,
      /* ; */
      CHAR_SINGLE_QUOTE: 39,
      /* ' */
      CHAR_SPACE: 32,
      /*   */
      CHAR_TAB: 9,
      /* \t */
      CHAR_UNDERSCORE: 95,
      /* _ */
      CHAR_VERTICAL_LINE: 124,
      /* | */
      CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
      /* \uFEFF */
      SEP: path4.sep,
      /**
       * Create EXTGLOB_CHARS
       */
      extglobChars(chars) {
        return {
          "!": { type: "negate", open: "(?:(?!(?:", close: `))${chars.STAR})` },
          "?": { type: "qmark", open: "(?:", close: ")?" },
          "+": { type: "plus", open: "(?:", close: ")+" },
          "*": { type: "star", open: "(?:", close: ")*" },
          "@": { type: "at", open: "(?:", close: ")" }
        };
      },
      /**
       * Create GLOB_CHARS
       */
      globChars(win32) {
        return win32 === true ? WINDOWS_CHARS : POSIX_CHARS;
      }
    };
  }
});

// node_modules/micromatch/node_modules/picomatch/lib/utils.js
var require_utils2 = __commonJS({
  "node_modules/micromatch/node_modules/picomatch/lib/utils.js"(exports2) {
    "use strict";
    var path4 = require("path");
    var win32 = process.platform === "win32";
    var {
      REGEX_BACKSLASH,
      REGEX_REMOVE_BACKSLASH,
      REGEX_SPECIAL_CHARS,
      REGEX_SPECIAL_CHARS_GLOBAL
    } = require_constants2();
    exports2.isObject = (val) => val !== null && typeof val === "object" && !Array.isArray(val);
    exports2.hasRegexChars = (str) => REGEX_SPECIAL_CHARS.test(str);
    exports2.isRegexChar = (str) => str.length === 1 && exports2.hasRegexChars(str);
    exports2.escapeRegex = (str) => str.replace(REGEX_SPECIAL_CHARS_GLOBAL, "\\$1");
    exports2.toPosixSlashes = (str) => str.replace(REGEX_BACKSLASH, "/");
    exports2.removeBackslashes = (str) => {
      return str.replace(REGEX_REMOVE_BACKSLASH, (match) => {
        return match === "\\" ? "" : match;
      });
    };
    exports2.supportsLookbehinds = () => {
      const segs = process.version.slice(1).split(".").map(Number);
      if (segs.length === 3 && segs[0] >= 9 || segs[0] === 8 && segs[1] >= 10) {
        return true;
      }
      return false;
    };
    exports2.isWindows = (options) => {
      if (options && typeof options.windows === "boolean") {
        return options.windows;
      }
      return win32 === true || path4.sep === "\\";
    };
    exports2.escapeLast = (input, char, lastIdx) => {
      const idx = input.lastIndexOf(char, lastIdx);
      if (idx === -1) return input;
      if (input[idx - 1] === "\\") return exports2.escapeLast(input, char, idx - 1);
      return `${input.slice(0, idx)}\\${input.slice(idx)}`;
    };
    exports2.removePrefix = (input, state = {}) => {
      let output = input;
      if (output.startsWith("./")) {
        output = output.slice(2);
        state.prefix = "./";
      }
      return output;
    };
    exports2.wrapOutput = (input, state = {}, options = {}) => {
      const prepend = options.contains ? "" : "^";
      const append = options.contains ? "" : "$";
      let output = `${prepend}(?:${input})${append}`;
      if (state.negated === true) {
        output = `(?:^(?!${output}).*$)`;
      }
      return output;
    };
  }
});

// node_modules/micromatch/node_modules/picomatch/lib/scan.js
var require_scan = __commonJS({
  "node_modules/micromatch/node_modules/picomatch/lib/scan.js"(exports2, module2) {
    "use strict";
    var utils2 = require_utils2();
    var {
      CHAR_ASTERISK,
      /* * */
      CHAR_AT,
      /* @ */
      CHAR_BACKWARD_SLASH,
      /* \ */
      CHAR_COMMA,
      /* , */
      CHAR_DOT,
      /* . */
      CHAR_EXCLAMATION_MARK,
      /* ! */
      CHAR_FORWARD_SLASH,
      /* / */
      CHAR_LEFT_CURLY_BRACE,
      /* { */
      CHAR_LEFT_PARENTHESES,
      /* ( */
      CHAR_LEFT_SQUARE_BRACKET,
      /* [ */
      CHAR_PLUS,
      /* + */
      CHAR_QUESTION_MARK,
      /* ? */
      CHAR_RIGHT_CURLY_BRACE,
      /* } */
      CHAR_RIGHT_PARENTHESES,
      /* ) */
      CHAR_RIGHT_SQUARE_BRACKET
      /* ] */
    } = require_constants2();
    var isPathSeparator = (code) => {
      return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
    };
    var depth = (token) => {
      if (token.isPrefix !== true) {
        token.depth = token.isGlobstar ? Infinity : 1;
      }
    };
    var scan = (input, options) => {
      const opts = options || {};
      const length = input.length - 1;
      const scanToEnd = opts.parts === true || opts.scanToEnd === true;
      const slashes = [];
      const tokens = [];
      const parts = [];
      let str = input;
      let index = -1;
      let start = 0;
      let lastIndex = 0;
      let isBrace = false;
      let isBracket = false;
      let isGlob = false;
      let isExtglob = false;
      let isGlobstar = false;
      let braceEscaped = false;
      let backslashes = false;
      let negated = false;
      let negatedExtglob = false;
      let finished = false;
      let braces = 0;
      let prev;
      let code;
      let token = { value: "", depth: 0, isGlob: false };
      const eos = () => index >= length;
      const peek = () => str.charCodeAt(index + 1);
      const advance = () => {
        prev = code;
        return str.charCodeAt(++index);
      };
      while (index < length) {
        code = advance();
        let next;
        if (code === CHAR_BACKWARD_SLASH) {
          backslashes = token.backslashes = true;
          code = advance();
          if (code === CHAR_LEFT_CURLY_BRACE) {
            braceEscaped = true;
          }
          continue;
        }
        if (braceEscaped === true || code === CHAR_LEFT_CURLY_BRACE) {
          braces++;
          while (eos() !== true && (code = advance())) {
            if (code === CHAR_BACKWARD_SLASH) {
              backslashes = token.backslashes = true;
              advance();
              continue;
            }
            if (code === CHAR_LEFT_CURLY_BRACE) {
              braces++;
              continue;
            }
            if (braceEscaped !== true && code === CHAR_DOT && (code = advance()) === CHAR_DOT) {
              isBrace = token.isBrace = true;
              isGlob = token.isGlob = true;
              finished = true;
              if (scanToEnd === true) {
                continue;
              }
              break;
            }
            if (braceEscaped !== true && code === CHAR_COMMA) {
              isBrace = token.isBrace = true;
              isGlob = token.isGlob = true;
              finished = true;
              if (scanToEnd === true) {
                continue;
              }
              break;
            }
            if (code === CHAR_RIGHT_CURLY_BRACE) {
              braces--;
              if (braces === 0) {
                braceEscaped = false;
                isBrace = token.isBrace = true;
                finished = true;
                break;
              }
            }
          }
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (code === CHAR_FORWARD_SLASH) {
          slashes.push(index);
          tokens.push(token);
          token = { value: "", depth: 0, isGlob: false };
          if (finished === true) continue;
          if (prev === CHAR_DOT && index === start + 1) {
            start += 2;
            continue;
          }
          lastIndex = index + 1;
          continue;
        }
        if (opts.noext !== true) {
          const isExtglobChar = code === CHAR_PLUS || code === CHAR_AT || code === CHAR_ASTERISK || code === CHAR_QUESTION_MARK || code === CHAR_EXCLAMATION_MARK;
          if (isExtglobChar === true && peek() === CHAR_LEFT_PARENTHESES) {
            isGlob = token.isGlob = true;
            isExtglob = token.isExtglob = true;
            finished = true;
            if (code === CHAR_EXCLAMATION_MARK && index === start) {
              negatedExtglob = true;
            }
            if (scanToEnd === true) {
              while (eos() !== true && (code = advance())) {
                if (code === CHAR_BACKWARD_SLASH) {
                  backslashes = token.backslashes = true;
                  code = advance();
                  continue;
                }
                if (code === CHAR_RIGHT_PARENTHESES) {
                  isGlob = token.isGlob = true;
                  finished = true;
                  break;
                }
              }
              continue;
            }
            break;
          }
        }
        if (code === CHAR_ASTERISK) {
          if (prev === CHAR_ASTERISK) isGlobstar = token.isGlobstar = true;
          isGlob = token.isGlob = true;
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (code === CHAR_QUESTION_MARK) {
          isGlob = token.isGlob = true;
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (code === CHAR_LEFT_SQUARE_BRACKET) {
          while (eos() !== true && (next = advance())) {
            if (next === CHAR_BACKWARD_SLASH) {
              backslashes = token.backslashes = true;
              advance();
              continue;
            }
            if (next === CHAR_RIGHT_SQUARE_BRACKET) {
              isBracket = token.isBracket = true;
              isGlob = token.isGlob = true;
              finished = true;
              break;
            }
          }
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (opts.nonegate !== true && code === CHAR_EXCLAMATION_MARK && index === start) {
          negated = token.negated = true;
          start++;
          continue;
        }
        if (opts.noparen !== true && code === CHAR_LEFT_PARENTHESES) {
          isGlob = token.isGlob = true;
          if (scanToEnd === true) {
            while (eos() !== true && (code = advance())) {
              if (code === CHAR_LEFT_PARENTHESES) {
                backslashes = token.backslashes = true;
                code = advance();
                continue;
              }
              if (code === CHAR_RIGHT_PARENTHESES) {
                finished = true;
                break;
              }
            }
            continue;
          }
          break;
        }
        if (isGlob === true) {
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
      }
      if (opts.noext === true) {
        isExtglob = false;
        isGlob = false;
      }
      let base = str;
      let prefix = "";
      let glob = "";
      if (start > 0) {
        prefix = str.slice(0, start);
        str = str.slice(start);
        lastIndex -= start;
      }
      if (base && isGlob === true && lastIndex > 0) {
        base = str.slice(0, lastIndex);
        glob = str.slice(lastIndex);
      } else if (isGlob === true) {
        base = "";
        glob = str;
      } else {
        base = str;
      }
      if (base && base !== "" && base !== "/" && base !== str) {
        if (isPathSeparator(base.charCodeAt(base.length - 1))) {
          base = base.slice(0, -1);
        }
      }
      if (opts.unescape === true) {
        if (glob) glob = utils2.removeBackslashes(glob);
        if (base && backslashes === true) {
          base = utils2.removeBackslashes(base);
        }
      }
      const state = {
        prefix,
        input,
        start,
        base,
        glob,
        isBrace,
        isBracket,
        isGlob,
        isExtglob,
        isGlobstar,
        negated,
        negatedExtglob
      };
      if (opts.tokens === true) {
        state.maxDepth = 0;
        if (!isPathSeparator(code)) {
          tokens.push(token);
        }
        state.tokens = tokens;
      }
      if (opts.parts === true || opts.tokens === true) {
        let prevIndex;
        for (let idx = 0; idx < slashes.length; idx++) {
          const n = prevIndex ? prevIndex + 1 : start;
          const i = slashes[idx];
          const value = input.slice(n, i);
          if (opts.tokens) {
            if (idx === 0 && start !== 0) {
              tokens[idx].isPrefix = true;
              tokens[idx].value = prefix;
            } else {
              tokens[idx].value = value;
            }
            depth(tokens[idx]);
            state.maxDepth += tokens[idx].depth;
          }
          if (idx !== 0 || value !== "") {
            parts.push(value);
          }
          prevIndex = i;
        }
        if (prevIndex && prevIndex + 1 < input.length) {
          const value = input.slice(prevIndex + 1);
          parts.push(value);
          if (opts.tokens) {
            tokens[tokens.length - 1].value = value;
            depth(tokens[tokens.length - 1]);
            state.maxDepth += tokens[tokens.length - 1].depth;
          }
        }
        state.slashes = slashes;
        state.parts = parts;
      }
      return state;
    };
    module2.exports = scan;
  }
});

// node_modules/micromatch/node_modules/picomatch/lib/parse.js
var require_parse2 = __commonJS({
  "node_modules/micromatch/node_modules/picomatch/lib/parse.js"(exports2, module2) {
    "use strict";
    var constants = require_constants2();
    var utils2 = require_utils2();
    var {
      MAX_LENGTH,
      POSIX_REGEX_SOURCE,
      REGEX_NON_SPECIAL_CHARS,
      REGEX_SPECIAL_CHARS_BACKREF,
      REPLACEMENTS
    } = constants;
    var expandRange = (args, options) => {
      if (typeof options.expandRange === "function") {
        return options.expandRange(...args, options);
      }
      args.sort();
      const value = `[${args.join("-")}]`;
      try {
        new RegExp(value);
      } catch (ex) {
        return args.map((v) => utils2.escapeRegex(v)).join("..");
      }
      return value;
    };
    var syntaxError = (type, char) => {
      return `Missing ${type}: "${char}" - use "\\\\${char}" to match literal characters`;
    };
    var splitTopLevel = (input) => {
      const parts = [];
      let bracket = 0;
      let paren = 0;
      let quote = 0;
      let value = "";
      let escaped = false;
      for (const ch of input) {
        if (escaped === true) {
          value += ch;
          escaped = false;
          continue;
        }
        if (ch === "\\") {
          value += ch;
          escaped = true;
          continue;
        }
        if (ch === '"') {
          quote = quote === 1 ? 0 : 1;
          value += ch;
          continue;
        }
        if (quote === 0) {
          if (ch === "[") {
            bracket++;
          } else if (ch === "]" && bracket > 0) {
            bracket--;
          } else if (bracket === 0) {
            if (ch === "(") {
              paren++;
            } else if (ch === ")" && paren > 0) {
              paren--;
            } else if (ch === "|" && paren === 0) {
              parts.push(value);
              value = "";
              continue;
            }
          }
        }
        value += ch;
      }
      parts.push(value);
      return parts;
    };
    var isPlainBranch = (branch) => {
      let escaped = false;
      for (const ch of branch) {
        if (escaped === true) {
          escaped = false;
          continue;
        }
        if (ch === "\\") {
          escaped = true;
          continue;
        }
        if (/[?*+@!()[\]{}]/.test(ch)) {
          return false;
        }
      }
      return true;
    };
    var normalizeSimpleBranch = (branch) => {
      let value = branch.trim();
      let changed = true;
      while (changed === true) {
        changed = false;
        if (/^@\([^\\()[\]{}|]+\)$/.test(value)) {
          value = value.slice(2, -1);
          changed = true;
        }
      }
      if (!isPlainBranch(value)) {
        return;
      }
      return value.replace(/\\(.)/g, "$1");
    };
    var hasRepeatedCharPrefixOverlap = (branches) => {
      const values = branches.map(normalizeSimpleBranch).filter(Boolean);
      for (let i = 0; i < values.length; i++) {
        for (let j = i + 1; j < values.length; j++) {
          const a = values[i];
          const b = values[j];
          const char = a[0];
          if (!char || a !== char.repeat(a.length) || b !== char.repeat(b.length)) {
            continue;
          }
          if (a === b || a.startsWith(b) || b.startsWith(a)) {
            return true;
          }
        }
      }
      return false;
    };
    var parseRepeatedExtglob = (pattern, requireEnd = true) => {
      if (pattern[0] !== "+" && pattern[0] !== "*" || pattern[1] !== "(") {
        return;
      }
      let bracket = 0;
      let paren = 0;
      let quote = 0;
      let escaped = false;
      for (let i = 1; i < pattern.length; i++) {
        const ch = pattern[i];
        if (escaped === true) {
          escaped = false;
          continue;
        }
        if (ch === "\\") {
          escaped = true;
          continue;
        }
        if (ch === '"') {
          quote = quote === 1 ? 0 : 1;
          continue;
        }
        if (quote === 1) {
          continue;
        }
        if (ch === "[") {
          bracket++;
          continue;
        }
        if (ch === "]" && bracket > 0) {
          bracket--;
          continue;
        }
        if (bracket > 0) {
          continue;
        }
        if (ch === "(") {
          paren++;
          continue;
        }
        if (ch === ")") {
          paren--;
          if (paren === 0) {
            if (requireEnd === true && i !== pattern.length - 1) {
              return;
            }
            return {
              type: pattern[0],
              body: pattern.slice(2, i),
              end: i
            };
          }
        }
      }
    };
    var getStarExtglobSequenceOutput = (pattern) => {
      let index = 0;
      const chars = [];
      while (index < pattern.length) {
        const match = parseRepeatedExtglob(pattern.slice(index), false);
        if (!match || match.type !== "*") {
          return;
        }
        const branches = splitTopLevel(match.body).map((branch2) => branch2.trim());
        if (branches.length !== 1) {
          return;
        }
        const branch = normalizeSimpleBranch(branches[0]);
        if (!branch || branch.length !== 1) {
          return;
        }
        chars.push(branch);
        index += match.end + 1;
      }
      if (chars.length < 1) {
        return;
      }
      const source = chars.length === 1 ? utils2.escapeRegex(chars[0]) : `[${chars.map((ch) => utils2.escapeRegex(ch)).join("")}]`;
      return `${source}*`;
    };
    var repeatedExtglobRecursion = (pattern) => {
      let depth = 0;
      let value = pattern.trim();
      let match = parseRepeatedExtglob(value);
      while (match) {
        depth++;
        value = match.body.trim();
        match = parseRepeatedExtglob(value);
      }
      return depth;
    };
    var analyzeRepeatedExtglob = (body, options) => {
      if (options.maxExtglobRecursion === false) {
        return { risky: false };
      }
      const max = typeof options.maxExtglobRecursion === "number" ? options.maxExtglobRecursion : constants.DEFAULT_MAX_EXTGLOB_RECURSION;
      const branches = splitTopLevel(body).map((branch) => branch.trim());
      if (branches.length > 1) {
        if (branches.some((branch) => branch === "") || branches.some((branch) => /^[*?]+$/.test(branch)) || hasRepeatedCharPrefixOverlap(branches)) {
          return { risky: true };
        }
      }
      for (const branch of branches) {
        const safeOutput = getStarExtglobSequenceOutput(branch);
        if (safeOutput) {
          return { risky: true, safeOutput };
        }
        if (repeatedExtglobRecursion(branch) > max) {
          return { risky: true };
        }
      }
      return { risky: false };
    };
    var parse = (input, options) => {
      if (typeof input !== "string") {
        throw new TypeError("Expected a string");
      }
      input = REPLACEMENTS[input] || input;
      const opts = { ...options };
      const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
      let len = input.length;
      if (len > max) {
        throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
      }
      const bos = { type: "bos", value: "", output: opts.prepend || "" };
      const tokens = [bos];
      const capture = opts.capture ? "" : "?:";
      const win32 = utils2.isWindows(options);
      const PLATFORM_CHARS = constants.globChars(win32);
      const EXTGLOB_CHARS = constants.extglobChars(PLATFORM_CHARS);
      const {
        DOT_LITERAL,
        PLUS_LITERAL,
        SLASH_LITERAL,
        ONE_CHAR,
        DOTS_SLASH,
        NO_DOT,
        NO_DOT_SLASH,
        NO_DOTS_SLASH,
        QMARK,
        QMARK_NO_DOT,
        STAR,
        START_ANCHOR
      } = PLATFORM_CHARS;
      const globstar = (opts2) => {
        return `(${capture}(?:(?!${START_ANCHOR}${opts2.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
      };
      const nodot = opts.dot ? "" : NO_DOT;
      const qmarkNoDot = opts.dot ? QMARK : QMARK_NO_DOT;
      let star = opts.bash === true ? globstar(opts) : STAR;
      if (opts.capture) {
        star = `(${star})`;
      }
      if (typeof opts.noext === "boolean") {
        opts.noextglob = opts.noext;
      }
      const state = {
        input,
        index: -1,
        start: 0,
        dot: opts.dot === true,
        consumed: "",
        output: "",
        prefix: "",
        backtrack: false,
        negated: false,
        brackets: 0,
        braces: 0,
        parens: 0,
        quotes: 0,
        globstar: false,
        tokens
      };
      input = utils2.removePrefix(input, state);
      len = input.length;
      const extglobs = [];
      const braces = [];
      const stack = [];
      let prev = bos;
      let value;
      const eos = () => state.index === len - 1;
      const peek = state.peek = (n = 1) => input[state.index + n];
      const advance = state.advance = () => input[++state.index] || "";
      const remaining = () => input.slice(state.index + 1);
      const consume = (value2 = "", num = 0) => {
        state.consumed += value2;
        state.index += num;
      };
      const append = (token) => {
        state.output += token.output != null ? token.output : token.value;
        consume(token.value);
      };
      const negate = () => {
        let count = 1;
        while (peek() === "!" && (peek(2) !== "(" || peek(3) === "?")) {
          advance();
          state.start++;
          count++;
        }
        if (count % 2 === 0) {
          return false;
        }
        state.negated = true;
        state.start++;
        return true;
      };
      const increment = (type) => {
        state[type]++;
        stack.push(type);
      };
      const decrement = (type) => {
        state[type]--;
        stack.pop();
      };
      const push = (tok) => {
        if (prev.type === "globstar") {
          const isBrace = state.braces > 0 && (tok.type === "comma" || tok.type === "brace");
          const isExtglob = tok.extglob === true || extglobs.length && (tok.type === "pipe" || tok.type === "paren");
          if (tok.type !== "slash" && tok.type !== "paren" && !isBrace && !isExtglob) {
            state.output = state.output.slice(0, -prev.output.length);
            prev.type = "star";
            prev.value = "*";
            prev.output = star;
            state.output += prev.output;
          }
        }
        if (extglobs.length && tok.type !== "paren") {
          extglobs[extglobs.length - 1].inner += tok.value;
        }
        if (tok.value || tok.output) append(tok);
        if (prev && prev.type === "text" && tok.type === "text") {
          prev.value += tok.value;
          prev.output = (prev.output || "") + tok.value;
          return;
        }
        tok.prev = prev;
        tokens.push(tok);
        prev = tok;
      };
      const extglobOpen = (type, value2) => {
        const token = { ...EXTGLOB_CHARS[value2], conditions: 1, inner: "" };
        token.prev = prev;
        token.parens = state.parens;
        token.output = state.output;
        token.startIndex = state.index;
        token.tokensIndex = tokens.length;
        const output = (opts.capture ? "(" : "") + token.open;
        increment("parens");
        push({ type, value: value2, output: state.output ? "" : ONE_CHAR });
        push({ type: "paren", extglob: true, value: advance(), output });
        extglobs.push(token);
      };
      const extglobClose = (token) => {
        const literal = input.slice(token.startIndex, state.index + 1);
        const body = input.slice(token.startIndex + 2, state.index);
        const analysis = analyzeRepeatedExtglob(body, opts);
        if ((token.type === "plus" || token.type === "star") && analysis.risky) {
          const safeOutput = analysis.safeOutput ? (token.output ? "" : ONE_CHAR) + (opts.capture ? `(${analysis.safeOutput})` : analysis.safeOutput) : void 0;
          const open = tokens[token.tokensIndex];
          open.type = "text";
          open.value = literal;
          open.output = safeOutput || utils2.escapeRegex(literal);
          for (let i = token.tokensIndex + 1; i < tokens.length; i++) {
            tokens[i].value = "";
            tokens[i].output = "";
            delete tokens[i].suffix;
          }
          state.output = token.output + open.output;
          state.backtrack = true;
          push({ type: "paren", extglob: true, value, output: "" });
          decrement("parens");
          return;
        }
        let output = token.close + (opts.capture ? ")" : "");
        let rest;
        if (token.type === "negate") {
          let extglobStar = star;
          if (token.inner && token.inner.length > 1 && token.inner.includes("/")) {
            extglobStar = globstar(opts);
          }
          if (extglobStar !== star || eos() || /^\)+$/.test(remaining())) {
            output = token.close = `)$))${extglobStar}`;
          }
          if (token.inner.includes("*") && (rest = remaining()) && /^\.[^\\/.]+$/.test(rest)) {
            const expression = parse(rest, { ...options, fastpaths: false }).output;
            output = token.close = `)${expression})${extglobStar})`;
          }
          if (token.prev.type === "bos") {
            state.negatedExtglob = true;
          }
        }
        push({ type: "paren", extglob: true, value, output });
        decrement("parens");
      };
      if (opts.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(input)) {
        let backslashes = false;
        let output = input.replace(REGEX_SPECIAL_CHARS_BACKREF, (m, esc, chars, first, rest, index) => {
          if (first === "\\") {
            backslashes = true;
            return m;
          }
          if (first === "?") {
            if (esc) {
              return esc + first + (rest ? QMARK.repeat(rest.length) : "");
            }
            if (index === 0) {
              return qmarkNoDot + (rest ? QMARK.repeat(rest.length) : "");
            }
            return QMARK.repeat(chars.length);
          }
          if (first === ".") {
            return DOT_LITERAL.repeat(chars.length);
          }
          if (first === "*") {
            if (esc) {
              return esc + first + (rest ? star : "");
            }
            return star;
          }
          return esc ? m : `\\${m}`;
        });
        if (backslashes === true) {
          if (opts.unescape === true) {
            output = output.replace(/\\/g, "");
          } else {
            output = output.replace(/\\+/g, (m) => {
              return m.length % 2 === 0 ? "\\\\" : m ? "\\" : "";
            });
          }
        }
        if (output === input && opts.contains === true) {
          state.output = input;
          return state;
        }
        state.output = utils2.wrapOutput(output, state, options);
        return state;
      }
      while (!eos()) {
        value = advance();
        if (value === "\0") {
          continue;
        }
        if (value === "\\") {
          const next = peek();
          if (next === "/" && opts.bash !== true) {
            continue;
          }
          if (next === "." || next === ";") {
            continue;
          }
          if (!next) {
            value += "\\";
            push({ type: "text", value });
            continue;
          }
          const match = /^\\+/.exec(remaining());
          let slashes = 0;
          if (match && match[0].length > 2) {
            slashes = match[0].length;
            state.index += slashes;
            if (slashes % 2 !== 0) {
              value += "\\";
            }
          }
          if (opts.unescape === true) {
            value = advance();
          } else {
            value += advance();
          }
          if (state.brackets === 0) {
            push({ type: "text", value });
            continue;
          }
        }
        if (state.brackets > 0 && (value !== "]" || prev.value === "[" || prev.value === "[^")) {
          if (opts.posix !== false && value === ":") {
            const inner = prev.value.slice(1);
            if (inner.includes("[")) {
              prev.posix = true;
              if (inner.includes(":")) {
                const idx = prev.value.lastIndexOf("[");
                const pre = prev.value.slice(0, idx);
                const rest2 = prev.value.slice(idx + 2);
                const posix = POSIX_REGEX_SOURCE[rest2];
                if (posix) {
                  prev.value = pre + posix;
                  state.backtrack = true;
                  advance();
                  if (!bos.output && tokens.indexOf(prev) === 1) {
                    bos.output = ONE_CHAR;
                  }
                  continue;
                }
              }
            }
          }
          if (value === "[" && peek() !== ":" || value === "-" && peek() === "]") {
            value = `\\${value}`;
          }
          if (value === "]" && (prev.value === "[" || prev.value === "[^")) {
            value = `\\${value}`;
          }
          if (opts.posix === true && value === "!" && prev.value === "[") {
            value = "^";
          }
          prev.value += value;
          append({ value });
          continue;
        }
        if (state.quotes === 1 && value !== '"') {
          value = utils2.escapeRegex(value);
          prev.value += value;
          append({ value });
          continue;
        }
        if (value === '"') {
          state.quotes = state.quotes === 1 ? 0 : 1;
          if (opts.keepQuotes === true) {
            push({ type: "text", value });
          }
          continue;
        }
        if (value === "(") {
          increment("parens");
          push({ type: "paren", value });
          continue;
        }
        if (value === ")") {
          if (state.parens === 0 && opts.strictBrackets === true) {
            throw new SyntaxError(syntaxError("opening", "("));
          }
          const extglob = extglobs[extglobs.length - 1];
          if (extglob && state.parens === extglob.parens + 1) {
            extglobClose(extglobs.pop());
            continue;
          }
          push({ type: "paren", value, output: state.parens ? ")" : "\\)" });
          decrement("parens");
          continue;
        }
        if (value === "[") {
          if (opts.nobracket === true || !remaining().includes("]")) {
            if (opts.nobracket !== true && opts.strictBrackets === true) {
              throw new SyntaxError(syntaxError("closing", "]"));
            }
            value = `\\${value}`;
          } else {
            increment("brackets");
          }
          push({ type: "bracket", value });
          continue;
        }
        if (value === "]") {
          if (opts.nobracket === true || prev && prev.type === "bracket" && prev.value.length === 1) {
            push({ type: "text", value, output: `\\${value}` });
            continue;
          }
          if (state.brackets === 0) {
            if (opts.strictBrackets === true) {
              throw new SyntaxError(syntaxError("opening", "["));
            }
            push({ type: "text", value, output: `\\${value}` });
            continue;
          }
          decrement("brackets");
          const prevValue = prev.value.slice(1);
          if (prev.posix !== true && prevValue[0] === "^" && !prevValue.includes("/")) {
            value = `/${value}`;
          }
          prev.value += value;
          append({ value });
          if (opts.literalBrackets === false || utils2.hasRegexChars(prevValue)) {
            continue;
          }
          const escaped = utils2.escapeRegex(prev.value);
          state.output = state.output.slice(0, -prev.value.length);
          if (opts.literalBrackets === true) {
            state.output += escaped;
            prev.value = escaped;
            continue;
          }
          prev.value = `(${capture}${escaped}|${prev.value})`;
          state.output += prev.value;
          continue;
        }
        if (value === "{" && opts.nobrace !== true) {
          increment("braces");
          const open = {
            type: "brace",
            value,
            output: "(",
            outputIndex: state.output.length,
            tokensIndex: state.tokens.length
          };
          braces.push(open);
          push(open);
          continue;
        }
        if (value === "}") {
          const brace = braces[braces.length - 1];
          if (opts.nobrace === true || !brace) {
            push({ type: "text", value, output: value });
            continue;
          }
          let output = ")";
          if (brace.dots === true) {
            const arr = tokens.slice();
            const range = [];
            for (let i = arr.length - 1; i >= 0; i--) {
              tokens.pop();
              if (arr[i].type === "brace") {
                break;
              }
              if (arr[i].type !== "dots") {
                range.unshift(arr[i].value);
              }
            }
            output = expandRange(range, opts);
            state.backtrack = true;
          }
          if (brace.comma !== true && brace.dots !== true) {
            const out = state.output.slice(0, brace.outputIndex);
            const toks = state.tokens.slice(brace.tokensIndex);
            brace.value = brace.output = "\\{";
            value = output = "\\}";
            state.output = out;
            for (const t of toks) {
              state.output += t.output || t.value;
            }
          }
          push({ type: "brace", value, output });
          decrement("braces");
          braces.pop();
          continue;
        }
        if (value === "|") {
          if (extglobs.length > 0) {
            extglobs[extglobs.length - 1].conditions++;
          }
          push({ type: "text", value });
          continue;
        }
        if (value === ",") {
          let output = value;
          const brace = braces[braces.length - 1];
          if (brace && stack[stack.length - 1] === "braces") {
            brace.comma = true;
            output = "|";
          }
          push({ type: "comma", value, output });
          continue;
        }
        if (value === "/") {
          if (prev.type === "dot" && state.index === state.start + 1) {
            state.start = state.index + 1;
            state.consumed = "";
            state.output = "";
            tokens.pop();
            prev = bos;
            continue;
          }
          push({ type: "slash", value, output: SLASH_LITERAL });
          continue;
        }
        if (value === ".") {
          if (state.braces > 0 && prev.type === "dot") {
            if (prev.value === ".") prev.output = DOT_LITERAL;
            const brace = braces[braces.length - 1];
            prev.type = "dots";
            prev.output += value;
            prev.value += value;
            brace.dots = true;
            continue;
          }
          if (state.braces + state.parens === 0 && prev.type !== "bos" && prev.type !== "slash") {
            push({ type: "text", value, output: DOT_LITERAL });
            continue;
          }
          push({ type: "dot", value, output: DOT_LITERAL });
          continue;
        }
        if (value === "?") {
          const isGroup = prev && prev.value === "(";
          if (!isGroup && opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
            extglobOpen("qmark", value);
            continue;
          }
          if (prev && prev.type === "paren") {
            const next = peek();
            let output = value;
            if (next === "<" && !utils2.supportsLookbehinds()) {
              throw new Error("Node.js v10 or higher is required for regex lookbehinds");
            }
            if (prev.value === "(" && !/[!=<:]/.test(next) || next === "<" && !/<([!=]|\w+>)/.test(remaining())) {
              output = `\\${value}`;
            }
            push({ type: "text", value, output });
            continue;
          }
          if (opts.dot !== true && (prev.type === "slash" || prev.type === "bos")) {
            push({ type: "qmark", value, output: QMARK_NO_DOT });
            continue;
          }
          push({ type: "qmark", value, output: QMARK });
          continue;
        }
        if (value === "!") {
          if (opts.noextglob !== true && peek() === "(") {
            if (peek(2) !== "?" || !/[!=<:]/.test(peek(3))) {
              extglobOpen("negate", value);
              continue;
            }
          }
          if (opts.nonegate !== true && state.index === 0) {
            negate();
            continue;
          }
        }
        if (value === "+") {
          if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
            extglobOpen("plus", value);
            continue;
          }
          if (prev && prev.value === "(" || opts.regex === false) {
            push({ type: "plus", value, output: PLUS_LITERAL });
            continue;
          }
          if (prev && (prev.type === "bracket" || prev.type === "paren" || prev.type === "brace") || state.parens > 0) {
            push({ type: "plus", value });
            continue;
          }
          push({ type: "plus", value: PLUS_LITERAL });
          continue;
        }
        if (value === "@") {
          if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
            push({ type: "at", extglob: true, value, output: "" });
            continue;
          }
          push({ type: "text", value });
          continue;
        }
        if (value !== "*") {
          if (value === "$" || value === "^") {
            value = `\\${value}`;
          }
          const match = REGEX_NON_SPECIAL_CHARS.exec(remaining());
          if (match) {
            value += match[0];
            state.index += match[0].length;
          }
          push({ type: "text", value });
          continue;
        }
        if (prev && (prev.type === "globstar" || prev.star === true)) {
          prev.type = "star";
          prev.star = true;
          prev.value += value;
          prev.output = star;
          state.backtrack = true;
          state.globstar = true;
          consume(value);
          continue;
        }
        let rest = remaining();
        if (opts.noextglob !== true && /^\([^?]/.test(rest)) {
          extglobOpen("star", value);
          continue;
        }
        if (prev.type === "star") {
          if (opts.noglobstar === true) {
            consume(value);
            continue;
          }
          const prior = prev.prev;
          const before = prior.prev;
          const isStart = prior.type === "slash" || prior.type === "bos";
          const afterStar = before && (before.type === "star" || before.type === "globstar");
          if (opts.bash === true && (!isStart || rest[0] && rest[0] !== "/")) {
            push({ type: "star", value, output: "" });
            continue;
          }
          const isBrace = state.braces > 0 && (prior.type === "comma" || prior.type === "brace");
          const isExtglob = extglobs.length && (prior.type === "pipe" || prior.type === "paren");
          if (!isStart && prior.type !== "paren" && !isBrace && !isExtglob) {
            push({ type: "star", value, output: "" });
            continue;
          }
          while (rest.slice(0, 3) === "/**") {
            const after = input[state.index + 4];
            if (after && after !== "/") {
              break;
            }
            rest = rest.slice(3);
            consume("/**", 3);
          }
          if (prior.type === "bos" && eos()) {
            prev.type = "globstar";
            prev.value += value;
            prev.output = globstar(opts);
            state.output = prev.output;
            state.globstar = true;
            consume(value);
            continue;
          }
          if (prior.type === "slash" && prior.prev.type !== "bos" && !afterStar && eos()) {
            state.output = state.output.slice(0, -(prior.output + prev.output).length);
            prior.output = `(?:${prior.output}`;
            prev.type = "globstar";
            prev.output = globstar(opts) + (opts.strictSlashes ? ")" : "|$)");
            prev.value += value;
            state.globstar = true;
            state.output += prior.output + prev.output;
            consume(value);
            continue;
          }
          if (prior.type === "slash" && prior.prev.type !== "bos" && rest[0] === "/") {
            const end = rest[1] !== void 0 ? "|$" : "";
            state.output = state.output.slice(0, -(prior.output + prev.output).length);
            prior.output = `(?:${prior.output}`;
            prev.type = "globstar";
            prev.output = `${globstar(opts)}${SLASH_LITERAL}|${SLASH_LITERAL}${end})`;
            prev.value += value;
            state.output += prior.output + prev.output;
            state.globstar = true;
            consume(value + advance());
            push({ type: "slash", value: "/", output: "" });
            continue;
          }
          if (prior.type === "bos" && rest[0] === "/") {
            prev.type = "globstar";
            prev.value += value;
            prev.output = `(?:^|${SLASH_LITERAL}|${globstar(opts)}${SLASH_LITERAL})`;
            state.output = prev.output;
            state.globstar = true;
            consume(value + advance());
            push({ type: "slash", value: "/", output: "" });
            continue;
          }
          state.output = state.output.slice(0, -prev.output.length);
          prev.type = "globstar";
          prev.output = globstar(opts);
          prev.value += value;
          state.output += prev.output;
          state.globstar = true;
          consume(value);
          continue;
        }
        const token = { type: "star", value, output: star };
        if (opts.bash === true) {
          token.output = ".*?";
          if (prev.type === "bos" || prev.type === "slash") {
            token.output = nodot + token.output;
          }
          push(token);
          continue;
        }
        if (prev && (prev.type === "bracket" || prev.type === "paren") && opts.regex === true) {
          token.output = value;
          push(token);
          continue;
        }
        if (state.index === state.start || prev.type === "slash" || prev.type === "dot") {
          if (prev.type === "dot") {
            state.output += NO_DOT_SLASH;
            prev.output += NO_DOT_SLASH;
          } else if (opts.dot === true) {
            state.output += NO_DOTS_SLASH;
            prev.output += NO_DOTS_SLASH;
          } else {
            state.output += nodot;
            prev.output += nodot;
          }
          if (peek() !== "*") {
            state.output += ONE_CHAR;
            prev.output += ONE_CHAR;
          }
        }
        push(token);
      }
      while (state.brackets > 0) {
        if (opts.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "]"));
        state.output = utils2.escapeLast(state.output, "[");
        decrement("brackets");
      }
      while (state.parens > 0) {
        if (opts.strictBrackets === true) throw new SyntaxError(syntaxError("closing", ")"));
        state.output = utils2.escapeLast(state.output, "(");
        decrement("parens");
      }
      while (state.braces > 0) {
        if (opts.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "}"));
        state.output = utils2.escapeLast(state.output, "{");
        decrement("braces");
      }
      if (opts.strictSlashes !== true && (prev.type === "star" || prev.type === "bracket")) {
        push({ type: "maybe_slash", value: "", output: `${SLASH_LITERAL}?` });
      }
      if (state.backtrack === true) {
        state.output = "";
        for (const token of state.tokens) {
          state.output += token.output != null ? token.output : token.value;
          if (token.suffix) {
            state.output += token.suffix;
          }
        }
      }
      return state;
    };
    parse.fastpaths = (input, options) => {
      const opts = { ...options };
      const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
      const len = input.length;
      if (len > max) {
        throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
      }
      input = REPLACEMENTS[input] || input;
      const win32 = utils2.isWindows(options);
      const {
        DOT_LITERAL,
        SLASH_LITERAL,
        ONE_CHAR,
        DOTS_SLASH,
        NO_DOT,
        NO_DOTS,
        NO_DOTS_SLASH,
        STAR,
        START_ANCHOR
      } = constants.globChars(win32);
      const nodot = opts.dot ? NO_DOTS : NO_DOT;
      const slashDot = opts.dot ? NO_DOTS_SLASH : NO_DOT;
      const capture = opts.capture ? "" : "?:";
      const state = { negated: false, prefix: "" };
      let star = opts.bash === true ? ".*?" : STAR;
      if (opts.capture) {
        star = `(${star})`;
      }
      const globstar = (opts2) => {
        if (opts2.noglobstar === true) return star;
        return `(${capture}(?:(?!${START_ANCHOR}${opts2.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
      };
      const create = (str) => {
        switch (str) {
          case "*":
            return `${nodot}${ONE_CHAR}${star}`;
          case ".*":
            return `${DOT_LITERAL}${ONE_CHAR}${star}`;
          case "*.*":
            return `${nodot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;
          case "*/*":
            return `${nodot}${star}${SLASH_LITERAL}${ONE_CHAR}${slashDot}${star}`;
          case "**":
            return nodot + globstar(opts);
          case "**/*":
            return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${ONE_CHAR}${star}`;
          case "**/*.*":
            return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;
          case "**/.*":
            return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${DOT_LITERAL}${ONE_CHAR}${star}`;
          default: {
            const match = /^(.*?)\.(\w+)$/.exec(str);
            if (!match) return;
            const source2 = create(match[1]);
            if (!source2) return;
            return source2 + DOT_LITERAL + match[2];
          }
        }
      };
      const output = utils2.removePrefix(input, state);
      let source = create(output);
      if (source && opts.strictSlashes !== true) {
        source += `${SLASH_LITERAL}?`;
      }
      return source;
    };
    module2.exports = parse;
  }
});

// node_modules/micromatch/node_modules/picomatch/lib/picomatch.js
var require_picomatch = __commonJS({
  "node_modules/micromatch/node_modules/picomatch/lib/picomatch.js"(exports2, module2) {
    "use strict";
    var path4 = require("path");
    var scan = require_scan();
    var parse = require_parse2();
    var utils2 = require_utils2();
    var constants = require_constants2();
    var isObject2 = (val) => val && typeof val === "object" && !Array.isArray(val);
    var picomatch = (glob, options, returnState = false) => {
      if (Array.isArray(glob)) {
        const fns = glob.map((input) => picomatch(input, options, returnState));
        const arrayMatcher = (str) => {
          for (const isMatch of fns) {
            const state2 = isMatch(str);
            if (state2) return state2;
          }
          return false;
        };
        return arrayMatcher;
      }
      const isState = isObject2(glob) && glob.tokens && glob.input;
      if (glob === "" || typeof glob !== "string" && !isState) {
        throw new TypeError("Expected pattern to be a non-empty string");
      }
      const opts = options || {};
      const posix = utils2.isWindows(options);
      const regex = isState ? picomatch.compileRe(glob, options) : picomatch.makeRe(glob, options, false, true);
      const state = regex.state;
      delete regex.state;
      let isIgnored = () => false;
      if (opts.ignore) {
        const ignoreOpts = { ...options, ignore: null, onMatch: null, onResult: null };
        isIgnored = picomatch(opts.ignore, ignoreOpts, returnState);
      }
      const matcher = (input, returnObject = false) => {
        const { isMatch, match, output } = picomatch.test(input, regex, options, { glob, posix });
        const result = { glob, state, regex, posix, input, output, match, isMatch };
        if (typeof opts.onResult === "function") {
          opts.onResult(result);
        }
        if (isMatch === false) {
          result.isMatch = false;
          return returnObject ? result : false;
        }
        if (isIgnored(input)) {
          if (typeof opts.onIgnore === "function") {
            opts.onIgnore(result);
          }
          result.isMatch = false;
          return returnObject ? result : false;
        }
        if (typeof opts.onMatch === "function") {
          opts.onMatch(result);
        }
        return returnObject ? result : true;
      };
      if (returnState) {
        matcher.state = state;
      }
      return matcher;
    };
    picomatch.test = (input, regex, options, { glob, posix } = {}) => {
      if (typeof input !== "string") {
        throw new TypeError("Expected input to be a string");
      }
      if (input === "") {
        return { isMatch: false, output: "" };
      }
      const opts = options || {};
      const format = opts.format || (posix ? utils2.toPosixSlashes : null);
      let match = input === glob;
      let output = match && format ? format(input) : input;
      if (match === false) {
        output = format ? format(input) : input;
        match = output === glob;
      }
      if (match === false || opts.capture === true) {
        if (opts.matchBase === true || opts.basename === true) {
          match = picomatch.matchBase(input, regex, options, posix);
        } else {
          match = regex.exec(output);
        }
      }
      return { isMatch: Boolean(match), match, output };
    };
    picomatch.matchBase = (input, glob, options, posix = utils2.isWindows(options)) => {
      const regex = glob instanceof RegExp ? glob : picomatch.makeRe(glob, options);
      return regex.test(path4.basename(input));
    };
    picomatch.isMatch = (str, patterns, options) => picomatch(patterns, options)(str);
    picomatch.parse = (pattern, options) => {
      if (Array.isArray(pattern)) return pattern.map((p) => picomatch.parse(p, options));
      return parse(pattern, { ...options, fastpaths: false });
    };
    picomatch.scan = (input, options) => scan(input, options);
    picomatch.compileRe = (state, options, returnOutput = false, returnState = false) => {
      if (returnOutput === true) {
        return state.output;
      }
      const opts = options || {};
      const prepend = opts.contains ? "" : "^";
      const append = opts.contains ? "" : "$";
      let source = `${prepend}(?:${state.output})${append}`;
      if (state && state.negated === true) {
        source = `^(?!${source}).*$`;
      }
      const regex = picomatch.toRegex(source, options);
      if (returnState === true) {
        regex.state = state;
      }
      return regex;
    };
    picomatch.makeRe = (input, options = {}, returnOutput = false, returnState = false) => {
      if (!input || typeof input !== "string") {
        throw new TypeError("Expected a non-empty string");
      }
      let parsed = { negated: false, fastpaths: true };
      if (options.fastpaths !== false && (input[0] === "." || input[0] === "*")) {
        parsed.output = parse.fastpaths(input, options);
      }
      if (!parsed.output) {
        parsed = parse(input, options);
      }
      return picomatch.compileRe(parsed, options, returnOutput, returnState);
    };
    picomatch.toRegex = (source, options) => {
      try {
        const opts = options || {};
        return new RegExp(source, opts.flags || (opts.nocase ? "i" : ""));
      } catch (err) {
        if (options && options.debug === true) throw err;
        return /$^/;
      }
    };
    picomatch.constants = constants;
    module2.exports = picomatch;
  }
});

// node_modules/micromatch/node_modules/picomatch/index.js
var require_picomatch2 = __commonJS({
  "node_modules/micromatch/node_modules/picomatch/index.js"(exports2, module2) {
    "use strict";
    module2.exports = require_picomatch();
  }
});

// node_modules/micromatch/index.js
var require_micromatch = __commonJS({
  "node_modules/micromatch/index.js"(exports2, module2) {
    "use strict";
    var util2 = require("util");
    var braces = require_braces();
    var picomatch = require_picomatch2();
    var utils2 = require_utils2();
    var isEmptyString = (v) => v === "" || v === "./";
    var hasBraces = (v) => {
      const index = v.indexOf("{");
      return index > -1 && v.indexOf("}", index) > -1;
    };
    var micromatch = (list, patterns, options) => {
      patterns = [].concat(patterns);
      list = [].concat(list);
      let omit = /* @__PURE__ */ new Set();
      let keep = /* @__PURE__ */ new Set();
      let items = /* @__PURE__ */ new Set();
      let negatives = 0;
      let onResult = (state) => {
        items.add(state.output);
        if (options && options.onResult) {
          options.onResult(state);
        }
      };
      for (let i = 0; i < patterns.length; i++) {
        let isMatch = picomatch(String(patterns[i]), { ...options, onResult }, true);
        let negated = isMatch.state.negated || isMatch.state.negatedExtglob;
        if (negated) negatives++;
        for (let item of list) {
          let matched = isMatch(item, true);
          let match = negated ? !matched.isMatch : matched.isMatch;
          if (!match) continue;
          if (negated) {
            omit.add(matched.output);
          } else {
            omit.delete(matched.output);
            keep.add(matched.output);
          }
        }
      }
      let result = negatives === patterns.length ? [...items] : [...keep];
      let matches = result.filter((item) => !omit.has(item));
      if (options && matches.length === 0) {
        if (options.failglob === true) {
          throw new Error(`No matches found for "${patterns.join(", ")}"`);
        }
        if (options.nonull === true || options.nullglob === true) {
          return options.unescape ? patterns.map((p) => p.replace(/\\/g, "")) : patterns;
        }
      }
      return matches;
    };
    micromatch.match = micromatch;
    micromatch.matcher = (pattern, options) => picomatch(pattern, options);
    micromatch.isMatch = (str, patterns, options) => picomatch(patterns, options)(str);
    micromatch.any = micromatch.isMatch;
    micromatch.not = (list, patterns, options = {}) => {
      patterns = [].concat(patterns).map(String);
      let result = /* @__PURE__ */ new Set();
      let items = [];
      let onResult = (state) => {
        if (options.onResult) options.onResult(state);
        items.push(state.output);
      };
      let matches = new Set(micromatch(list, patterns, { ...options, onResult }));
      for (let item of items) {
        if (!matches.has(item)) {
          result.add(item);
        }
      }
      return [...result];
    };
    micromatch.contains = (str, pattern, options) => {
      if (typeof str !== "string") {
        throw new TypeError(`Expected a string: "${util2.inspect(str)}"`);
      }
      if (Array.isArray(pattern)) {
        return pattern.some((p) => micromatch.contains(str, p, options));
      }
      if (typeof pattern === "string") {
        if (isEmptyString(str) || isEmptyString(pattern)) {
          return false;
        }
        if (str.includes(pattern) || str.startsWith("./") && str.slice(2).includes(pattern)) {
          return true;
        }
      }
      return micromatch.isMatch(str, pattern, { ...options, contains: true });
    };
    micromatch.matchKeys = (obj, patterns, options) => {
      if (!utils2.isObject(obj)) {
        throw new TypeError("Expected the first argument to be an object");
      }
      let keys = micromatch(Object.keys(obj), patterns, options);
      let res = {};
      for (let key of keys) res[key] = obj[key];
      return res;
    };
    micromatch.some = (list, patterns, options) => {
      let items = [].concat(list);
      for (let pattern of [].concat(patterns)) {
        let isMatch = picomatch(String(pattern), options);
        if (items.some((item) => isMatch(item))) {
          return true;
        }
      }
      return false;
    };
    micromatch.every = (list, patterns, options) => {
      let items = [].concat(list);
      for (let pattern of [].concat(patterns)) {
        let isMatch = picomatch(String(pattern), options);
        if (!items.every((item) => isMatch(item))) {
          return false;
        }
      }
      return true;
    };
    micromatch.all = (str, patterns, options) => {
      if (typeof str !== "string") {
        throw new TypeError(`Expected a string: "${util2.inspect(str)}"`);
      }
      return [].concat(patterns).every((p) => picomatch(p, options)(str));
    };
    micromatch.capture = (glob, input, options) => {
      let posix = utils2.isWindows(options);
      let regex = picomatch.makeRe(String(glob), { ...options, capture: true });
      let match = regex.exec(posix ? utils2.toPosixSlashes(input) : input);
      if (match) {
        return match.slice(1).map((v) => v === void 0 ? "" : v);
      }
    };
    micromatch.makeRe = (...args) => picomatch.makeRe(...args);
    micromatch.scan = (...args) => picomatch.scan(...args);
    micromatch.parse = (patterns, options) => {
      let res = [];
      for (let pattern of [].concat(patterns || [])) {
        for (let str of braces(String(pattern), options)) {
          res.push(picomatch.parse(str, options));
        }
      }
      return res;
    };
    micromatch.braces = (pattern, options) => {
      if (typeof pattern !== "string") throw new TypeError("Expected a string");
      if (options && options.nobrace === true || !hasBraces(pattern)) {
        return [pattern];
      }
      return braces(pattern, options);
    };
    micromatch.braceExpand = (pattern, options) => {
      if (typeof pattern !== "string") throw new TypeError("Expected a string");
      return micromatch.braces(pattern, { ...options, expand: true });
    };
    micromatch.hasBraces = hasBraces;
    module2.exports = micromatch;
  }
});

// node_modules/slash/index.js
var require_slash = __commonJS({
  "node_modules/slash/index.js"(exports2, module2) {
    "use strict";
    module2.exports = (path4) => {
      const isExtendedLengthPath = /^\\\\\?\\/.test(path4);
      const hasNonAscii = /[^\u0000-\u0080]+/.test(path4);
      if (isExtendedLengthPath || hasNonAscii) {
        return path4;
      }
      return path4.replace(/\\/g, "/");
    };
  }
});

// node_modules/stack-utils/node_modules/escape-string-regexp/index.js
var require_escape_string_regexp = __commonJS({
  "node_modules/stack-utils/node_modules/escape-string-regexp/index.js"(exports2, module2) {
    "use strict";
    var matchOperatorsRegex = /[|\\{}()[\]^$+*?.-]/g;
    module2.exports = (string) => {
      if (typeof string !== "string") {
        throw new TypeError("Expected a string");
      }
      return string.replace(matchOperatorsRegex, "\\$&");
    };
  }
});

// node_modules/stack-utils/index.js
var require_stack_utils = __commonJS({
  "node_modules/stack-utils/index.js"(exports2, module2) {
    "use strict";
    var escapeStringRegexp = require_escape_string_regexp();
    var cwd = typeof process === "object" && process && typeof process.cwd === "function" ? process.cwd() : ".";
    var natives = [].concat(
      require("module").builtinModules,
      "bootstrap_node",
      "node"
    ).map((n) => new RegExp(`(?:\\((?:node:)?${n}(?:\\.js)?:\\d+:\\d+\\)$|^\\s*at (?:node:)?${n}(?:\\.js)?:\\d+:\\d+$)`));
    natives.push(
      /\((?:node:)?internal\/[^:]+:\d+:\d+\)$/,
      /\s*at (?:node:)?internal\/[^:]+:\d+:\d+$/,
      /\/\.node-spawn-wrap-\w+-\w+\/node:\d+:\d+\)?$/
    );
    var StackUtils = class _StackUtils {
      constructor(opts) {
        opts = {
          ignoredPackages: [],
          ...opts
        };
        if ("internals" in opts === false) {
          opts.internals = _StackUtils.nodeInternals();
        }
        if ("cwd" in opts === false) {
          opts.cwd = cwd;
        }
        this._cwd = opts.cwd.replace(/\\/g, "/");
        this._internals = [].concat(
          opts.internals,
          ignoredPackagesRegExp(opts.ignoredPackages)
        );
        this._wrapCallSite = opts.wrapCallSite || false;
      }
      static nodeInternals() {
        return [...natives];
      }
      clean(stack, indent3 = 0) {
        indent3 = " ".repeat(indent3);
        if (!Array.isArray(stack)) {
          stack = stack.split("\n");
        }
        if (!/^\s*at /.test(stack[0]) && /^\s*at /.test(stack[1])) {
          stack = stack.slice(1);
        }
        let outdent = false;
        let lastNonAtLine = null;
        const result = [];
        stack.forEach((st) => {
          st = st.replace(/\\/g, "/");
          if (this._internals.some((internal) => internal.test(st))) {
            return;
          }
          const isAtLine = /^\s*at /.test(st);
          if (outdent) {
            st = st.trimEnd().replace(/^(\s+)at /, "$1");
          } else {
            st = st.trim();
            if (isAtLine) {
              st = st.slice(3);
            }
          }
          st = st.replace(`${this._cwd}/`, "");
          if (st) {
            if (isAtLine) {
              if (lastNonAtLine) {
                result.push(lastNonAtLine);
                lastNonAtLine = null;
              }
              result.push(st);
            } else {
              outdent = true;
              lastNonAtLine = st;
            }
          }
        });
        return result.map((line) => `${indent3}${line}
`).join("");
      }
      captureString(limit, fn = this.captureString) {
        if (typeof limit === "function") {
          fn = limit;
          limit = Infinity;
        }
        const { stackTraceLimit } = Error;
        if (limit) {
          Error.stackTraceLimit = limit;
        }
        const obj = {};
        Error.captureStackTrace(obj, fn);
        const { stack } = obj;
        Error.stackTraceLimit = stackTraceLimit;
        return this.clean(stack);
      }
      capture(limit, fn = this.capture) {
        if (typeof limit === "function") {
          fn = limit;
          limit = Infinity;
        }
        const { prepareStackTrace, stackTraceLimit } = Error;
        Error.prepareStackTrace = (obj2, site) => {
          if (this._wrapCallSite) {
            return site.map(this._wrapCallSite);
          }
          return site;
        };
        if (limit) {
          Error.stackTraceLimit = limit;
        }
        const obj = {};
        Error.captureStackTrace(obj, fn);
        const { stack } = obj;
        Object.assign(Error, { prepareStackTrace, stackTraceLimit });
        return stack;
      }
      at(fn = this.at) {
        const [site] = this.capture(1, fn);
        if (!site) {
          return {};
        }
        const res = {
          line: site.getLineNumber(),
          column: site.getColumnNumber()
        };
        setFile(res, site.getFileName(), this._cwd);
        if (site.isConstructor()) {
          Object.defineProperty(res, "constructor", {
            value: true,
            configurable: true
          });
        }
        if (site.isEval()) {
          res.evalOrigin = site.getEvalOrigin();
        }
        if (site.isNative()) {
          res.native = true;
        }
        let typename;
        try {
          typename = site.getTypeName();
        } catch (_) {
        }
        if (typename && typename !== "Object" && typename !== "[object Object]") {
          res.type = typename;
        }
        const fname = site.getFunctionName();
        if (fname) {
          res.function = fname;
        }
        const meth = site.getMethodName();
        if (meth && fname !== meth) {
          res.method = meth;
        }
        return res;
      }
      parseLine(line) {
        const match = line && line.match(re);
        if (!match) {
          return null;
        }
        const ctor = match[1] === "new";
        let fname = match[2];
        const evalOrigin = match[3];
        const evalFile = match[4];
        const evalLine = Number(match[5]);
        const evalCol = Number(match[6]);
        let file = match[7];
        const lnum = match[8];
        const col = match[9];
        const native = match[10] === "native";
        const closeParen = match[11] === ")";
        let method;
        const res = {};
        if (lnum) {
          res.line = Number(lnum);
        }
        if (col) {
          res.column = Number(col);
        }
        if (closeParen && file) {
          let closes = 0;
          for (let i = file.length - 1; i > 0; i--) {
            if (file.charAt(i) === ")") {
              closes++;
            } else if (file.charAt(i) === "(" && file.charAt(i - 1) === " ") {
              closes--;
              if (closes === -1 && file.charAt(i - 1) === " ") {
                const before = file.slice(0, i - 1);
                const after = file.slice(i + 1);
                file = after;
                fname += ` (${before}`;
                break;
              }
            }
          }
        }
        if (fname) {
          const methodMatch = fname.match(methodRe);
          if (methodMatch) {
            fname = methodMatch[1];
            method = methodMatch[2];
          }
        }
        setFile(res, file, this._cwd);
        if (ctor) {
          Object.defineProperty(res, "constructor", {
            value: true,
            configurable: true
          });
        }
        if (evalOrigin) {
          res.evalOrigin = evalOrigin;
          res.evalLine = evalLine;
          res.evalColumn = evalCol;
          res.evalFile = evalFile && evalFile.replace(/\\/g, "/");
        }
        if (native) {
          res.native = true;
        }
        if (fname) {
          res.function = fname;
        }
        if (method && fname !== method) {
          res.method = method;
        }
        return res;
      }
    };
    function setFile(result, filename, cwd2) {
      if (filename) {
        filename = filename.replace(/\\/g, "/");
        if (filename.startsWith(`${cwd2}/`)) {
          filename = filename.slice(cwd2.length + 1);
        }
        result.file = filename;
      }
    }
    function ignoredPackagesRegExp(ignoredPackages) {
      if (ignoredPackages.length === 0) {
        return [];
      }
      const packages = ignoredPackages.map((mod) => escapeStringRegexp(mod));
      return new RegExp(`[/\\\\]node_modules[/\\\\](?:${packages.join("|")})[/\\\\][^:]+:\\d+:\\d+`);
    }
    var re = new RegExp(
      "^(?:\\s*at )?(?:(new) )?(?:(.*?) \\()?(?:eval at ([^ ]+) \\((.+?):(\\d+):(\\d+)\\), )?(?:(.+?):(\\d+):(\\d+)|(native))(\\)?)$"
    );
    var methodRe = /^(.*?) \[as (.*?)\]$/;
    module2.exports = StackUtils;
  }
});

// node_modules/jest-message-util/build/index.js
var require_build7 = __commonJS({
  "node_modules/jest-message-util/build/index.js"(exports2, module2) {
    (() => {
      "use strict";
      var __webpack_exports__ = {};
      (() => {
        var exports3 = __webpack_exports__;
        Object.defineProperty(exports3, "__esModule", {
          value: true
        });
        exports3.formatResultsErrors = exports3.formatPath = exports3.formatExecError = void 0;
        exports3.formatStackTrace = formatStackTrace2;
        exports3.getStackTraceLines = getStackTraceLines2;
        exports3.getTopFrame = getTopFrame2;
        exports3.separateMessageFromStack = exports3.indentAllLines = void 0;
        var path4 = _interopRequireWildcard(require("path"));
        var _url = require("url");
        var _util = require("util");
        var _codeFrame = require_lib2();
        var _chalk = _interopRequireDefault(require_source());
        var fs3 = _interopRequireWildcard(require_graceful_fs());
        var _micromatch = _interopRequireDefault(require_micromatch());
        var _slash = _interopRequireDefault(require_slash());
        var _stackUtils = _interopRequireDefault(require_stack_utils());
        var _prettyFormat = require_build3();
        function _interopRequireDefault(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function _interopRequireWildcard(e, t) {
          if ("function" == typeof WeakMap) var r = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
          return (_interopRequireWildcard = function(e2, t2) {
            if (!t2 && e2 && e2.__esModule) return e2;
            var o, i, f = { __proto__: null, default: e2 };
            if (null === e2 || "object" != typeof e2 && "function" != typeof e2) return f;
            if (o = t2 ? n : r) {
              if (o.has(e2)) return o.get(e2);
              o.set(e2, f);
            }
            for (const t3 in e2) "default" !== t3 && {}.hasOwnProperty.call(e2, t3) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e2, t3)) && (i.get || i.set) ? o(f, t3, i) : f[t3] = e2[t3]);
            return f;
          })(e, t);
        }
        var Symbol2 = globalThis["jest-symbol-do-not-touch"] || globalThis.Symbol;
        var Symbol2 = globalThis["jest-symbol-do-not-touch"] || globalThis.Symbol;
        var jestReadFile = globalThis[Symbol2.for("jest-native-read-file")] || fs3.readFileSync;
        const stackUtils = new _stackUtils.default({
          cwd: "something which does not exist"
        });
        let nodeInternals = [];
        try {
          nodeInternals = _stackUtils.default.nodeInternals();
        } catch {
        }
        const PATH_NODE_MODULES = `${path4.sep}node_modules${path4.sep}`;
        const PATH_JEST_PACKAGES = `${path4.sep}jest${path4.sep}packages${path4.sep}`;
        const JASMINE_IGNORE = /^\s+at(?:(?:.jasmine-)|\s+jasmine\.buildExpectationResult)/;
        const JEST_INTERNALS_IGNORE = /^\s+at.*?jest(-.*?)?(\/|\\)(build|node_modules|packages)(\/|\\)/;
        const ANONYMOUS_FN_IGNORE = /^\s+at <anonymous>.*$/;
        const ANONYMOUS_PROMISE_IGNORE = /^\s+at (new )?Promise \(<anonymous>\).*$/;
        const ANONYMOUS_GENERATOR_IGNORE = /^\s+at Generator.next \(<anonymous>\).*$/;
        const NATIVE_NEXT_IGNORE = /^\s+at next \(native\).*$/;
        const TITLE_INDENT = "  ";
        const MESSAGE_INDENT = "    ";
        const STACK_INDENT = "      ";
        const ANCESTRY_SEPARATOR = " \u203A ";
        const TITLE_BULLET = _chalk.default.bold("\u25CF ");
        const STACK_TRACE_COLOR = _chalk.default.dim;
        const STACK_PATH_REGEXP = /\s*at.*\(?(:\d*:\d*|native)\)?/;
        const EXEC_ERROR_MESSAGE = "Test suite failed to run";
        const NOT_EMPTY_LINE_REGEXP = /^(?!$)/gm;
        const indentAllLines2 = (lines) => lines.replaceAll(NOT_EMPTY_LINE_REGEXP, MESSAGE_INDENT);
        exports3.indentAllLines = indentAllLines2;
        const trim = (string) => (string || "").trim();
        const trimPaths = (string) => STACK_PATH_REGEXP.test(string) ? trim(string) : string;
        const getRenderedCallsite = (fileContent, line, column) => {
          let renderedCallsite = (0, _codeFrame.codeFrameColumns)(fileContent, {
            start: {
              column,
              line
            }
          }, {
            highlightCode: true
          });
          renderedCallsite = indentAllLines2(renderedCallsite);
          renderedCallsite = `
${renderedCallsite}
`;
          return renderedCallsite;
        };
        const blankStringRegexp = /^\s*$/;
        function checkForCommonEnvironmentErrors(error) {
          if (error.includes("ReferenceError: document is not defined") || error.includes("ReferenceError: window is not defined") || error.includes("ReferenceError: navigator is not defined")) {
            return warnAboutWrongTestEnvironment(error, "jsdom");
          } else if (error.includes(".unref is not a function")) {
            return warnAboutWrongTestEnvironment(error, "node");
          }
          return error;
        }
        function warnAboutWrongTestEnvironment(error, env) {
          return _chalk.default.bold.red(`The error below may be caused by using the wrong test environment, see ${_chalk.default.dim.underline("https://jestjs.io/docs/configuration#testenvironment-string")}.
Consider using the "${env}" test environment.

`) + error;
        }
        const formatExecError2 = (error, config, options, testPath, reuseMessage, noTitle) => {
          if (!error || typeof error === "number") {
            error = new Error(`Expected an Error, but "${String(error)}" was thrown`);
            error.stack = "";
          }
          let message, stack;
          let cause = "";
          const subErrors = [];
          if (typeof error === "string" || !error) {
            error ||= "EMPTY ERROR";
            message = "";
            stack = error;
          } else {
            message = error.message;
            stack = typeof error.stack === "string" ? error.stack : `thrown: ${(0, _prettyFormat.format)(error, {
              maxDepth: 3
            })}`;
            if ("cause" in error) {
              const prefix = "\n\nCause:\n";
              if (typeof error.cause === "string" || typeof error.cause === "number") {
                cause += `${prefix}${error.cause}`;
              } else if (_util.types.isNativeError(error.cause) || error.cause instanceof Error) {
                const formatted = formatExecError2(error.cause, config, options, testPath, reuseMessage, true);
                cause += `${prefix}${formatted}`;
              }
            }
            if ("errors" in error && Array.isArray(error.errors)) {
              for (const subError of error.errors) {
                subErrors.push(formatExecError2(subError, config, options, testPath, reuseMessage, true));
              }
            }
          }
          if (cause !== "") {
            cause = indentAllLines2(cause);
          }
          const separated = separateMessageFromStack2(stack || "");
          stack = separated.stack;
          if (separated.message.includes(trim(message))) {
            message = separated.message;
          }
          message = checkForCommonEnvironmentErrors(message);
          message = indentAllLines2(message);
          stack = stack && !options.noStackTrace ? `
${formatStackTrace2(stack, config, options, testPath)}` : "";
          if (typeof stack !== "string" || blankStringRegexp.test(message) && blankStringRegexp.test(stack)) {
            message = `thrown: ${(0, _prettyFormat.format)(error, {
              maxDepth: 3
            })}`;
          }
          let messageToUse;
          if (reuseMessage || noTitle) {
            messageToUse = ` ${message.trim()}`;
          } else {
            messageToUse = `${EXEC_ERROR_MESSAGE}

${message}`;
          }
          const title = noTitle ? "" : `${TITLE_INDENT + TITLE_BULLET}`;
          const subErrorStr = subErrors.length > 0 ? indentAllLines2(`

Errors contained in AggregateError:
${subErrors.join("\n")}`) : "";
          return `${title + messageToUse + stack + cause + subErrorStr}
`;
        };
        exports3.formatExecError = formatExecError2;
        const removeInternalStackEntries = (lines, options) => {
          let pathCounter = 0;
          return lines.filter((line) => {
            if (!line) {
              return false;
            }
            if (ANONYMOUS_FN_IGNORE.test(line)) {
              return false;
            }
            if (ANONYMOUS_PROMISE_IGNORE.test(line)) {
              return false;
            }
            if (ANONYMOUS_GENERATOR_IGNORE.test(line)) {
              return false;
            }
            if (NATIVE_NEXT_IGNORE.test(line)) {
              return false;
            }
            if (nodeInternals.some((internal) => internal.test(line))) {
              return false;
            }
            if (!STACK_PATH_REGEXP.test(line)) {
              return true;
            }
            if (JASMINE_IGNORE.test(line)) {
              return false;
            }
            if (++pathCounter === 1) {
              return true;
            }
            if (options.noStackTrace) {
              return false;
            }
            if (JEST_INTERNALS_IGNORE.test(line)) {
              return false;
            }
            return true;
          });
        };
        const formatPath2 = (line, config, relativeTestPath = null) => {
          const match = line.match(/(^\s*at .*?\(?)([^()]+)(:\d+:\d+\)?.*$)/);
          if (!match) {
            return line;
          }
          let filePath = (0, _slash.default)(path4.relative(config.rootDir, match[2]));
          if (config.testMatch && config.testMatch.length > 0 && (0, _micromatch.default)([filePath], config.testMatch).length > 0 || filePath === relativeTestPath) {
            filePath = _chalk.default.reset.cyan(filePath);
          }
          return STACK_TRACE_COLOR(match[1]) + filePath + STACK_TRACE_COLOR(match[3]);
        };
        exports3.formatPath = formatPath2;
        function getStackTraceLines2(stack, options) {
          options = {
            noCodeFrame: false,
            noStackTrace: false,
            ...options
          };
          return removeInternalStackEntries(stack.split(/\n/), options);
        }
        function getTopFrame2(lines) {
          for (const line of lines) {
            if (line.includes(PATH_NODE_MODULES) || line.includes(PATH_JEST_PACKAGES)) {
              continue;
            }
            const parsedFrame = stackUtils.parseLine(line.trim());
            if (parsedFrame && parsedFrame.file) {
              if (parsedFrame.file.startsWith("file://")) {
                parsedFrame.file = (0, _slash.default)((0, _url.fileURLToPath)(parsedFrame.file));
              }
              return parsedFrame;
            }
          }
          return null;
        }
        function formatStackTrace2(stack, config, options, testPath) {
          const lines = getStackTraceLines2(stack, options);
          let renderedCallsite = "";
          const relativeTestPath = testPath ? (0, _slash.default)(path4.relative(config.rootDir, testPath)) : null;
          if (!options.noStackTrace && !options.noCodeFrame) {
            const topFrame = getTopFrame2(lines);
            if (topFrame) {
              const {
                column,
                file: filename,
                line
              } = topFrame;
              if (line && filename && path4.isAbsolute(filename)) {
                let fileContent;
                try {
                  fileContent = jestReadFile(filename, "utf8");
                  renderedCallsite = getRenderedCallsite(fileContent, line, column);
                } catch {
                }
              }
            }
          }
          const stacktrace = lines.length === 0 ? "" : `
${lines.map((line) => STACK_INDENT + formatPath2(trimPaths(line), config, relativeTestPath)).join("\n")}`;
          return renderedCallsite + stacktrace;
        }
        function isErrorOrStackWithCause(errorOrStack) {
          return typeof errorOrStack !== "string" && "cause" in errorOrStack && (typeof errorOrStack.cause === "string" || _util.types.isNativeError(errorOrStack.cause) || errorOrStack.cause instanceof Error);
        }
        function formatErrorStack(errorOrStack, config, options, testPath) {
          const sourceStack = typeof errorOrStack === "string" ? errorOrStack : errorOrStack.stack || "";
          let {
            message,
            stack
          } = separateMessageFromStack2(sourceStack);
          stack = options.noStackTrace ? "" : `${STACK_TRACE_COLOR(formatStackTrace2(stack, config, options, testPath))}
`;
          message = checkForCommonEnvironmentErrors(message);
          message = indentAllLines2(message);
          let cause = "";
          if (isErrorOrStackWithCause(errorOrStack)) {
            const nestedCause = formatErrorStack(errorOrStack.cause, config, options, testPath);
            cause = `
${MESSAGE_INDENT}Cause:
${nestedCause}`;
          }
          return `${message}
${stack}${cause}`;
        }
        function failureDetailsToErrorOrStack(failureDetails, content) {
          if (!failureDetails) {
            return content;
          }
          if (_util.types.isNativeError(failureDetails) || failureDetails instanceof Error) {
            return failureDetails;
          }
          if (typeof failureDetails === "object" && "error" in failureDetails && (_util.types.isNativeError(failureDetails.error) || failureDetails.error instanceof Error)) {
            return failureDetails.error;
          }
          return content;
        }
        const formatResultsErrors2 = (testResults, config, options, testPath) => {
          const failedResults = testResults.flatMap((result) => result.failureMessages.map((item, index) => ({
            content: item,
            failureDetails: result.failureDetails[index],
            result
          })));
          if (failedResults.length === 0) {
            return null;
          }
          return failedResults.map(({
            result,
            content,
            failureDetails
          }) => {
            const rootErrorOrStack = failureDetailsToErrorOrStack(failureDetails, content);
            const title = `${_chalk.default.bold.red(TITLE_INDENT + TITLE_BULLET + result.ancestorTitles.join(ANCESTRY_SEPARATOR) + (result.ancestorTitles.length > 0 ? ANCESTRY_SEPARATOR : "") + result.title)}
`;
            return `${title}
${formatErrorStack(rootErrorOrStack, config, options, testPath)}`;
          }).join("\n");
        };
        exports3.formatResultsErrors = formatResultsErrors2;
        const errorRegexp = /^Error:?\s*$/;
        const removeBlankErrorLine = (str) => str.split("\n").filter((line) => !errorRegexp.test(line)).join("\n").trimEnd();
        const separateMessageFromStack2 = (content) => {
          if (!content) {
            return {
              message: "",
              stack: ""
            };
          }
          const messageMatch = content.match(/^(?:Error: )?([\S\s]*?(?=\n\s*at\s.*:\d*:\d*)|\s*.*)([\S\s]*)$/);
          if (!messageMatch) {
            throw new Error("If you hit this error, the regex above is buggy.");
          }
          const message = removeBlankErrorLine(messageMatch[1]);
          const stack = removeBlankErrorLine(messageMatch[2]);
          return {
            message,
            stack
          };
        };
        exports3.separateMessageFromStack = separateMessageFromStack2;
      })();
      module2.exports = __webpack_exports__;
    })();
  }
});

// packages/playwright/src/matchers/expect.ts
var expect_exports = {};
__export(expect_exports, {
  expect: () => expect,
  expectConfig: () => expectConfig,
  mergeExpects: () => mergeExpects,
  setExpectConfig: () => setExpectConfig
});
module.exports = __toCommonJS(expect_exports);
var import_path3 = __toESM(require("path"));

// node_modules/@jest/expect-utils/build/index.mjs
var import_index = __toESM(require_build2(), 1);
var equals = import_index.default.equals;
var isA = import_index.default.isA;
var arrayBufferEquality = import_index.default.arrayBufferEquality;
var emptyObject = import_index.default.emptyObject;
var getObjectKeys = import_index.default.getObjectKeys;
var getObjectSubset = import_index.default.getObjectSubset;
var getPath = import_index.default.getPath;
var isError = import_index.default.isError;
var isOneline = import_index.default.isOneline;
var iterableEquality = import_index.default.iterableEquality;
var partition = import_index.default.partition;
var pathAsArray = import_index.default.pathAsArray;
var sparseArrayEquality = import_index.default.sparseArrayEquality;
var subsetEquality = import_index.default.subsetEquality;
var typeEquality = import_index.default.typeEquality;

// node_modules/jest-matcher-utils/build/index.mjs
var build_exports = {};
__export(build_exports, {
  BOLD_WEIGHT: () => BOLD_WEIGHT,
  DIM_COLOR: () => DIM_COLOR,
  EXPECTED_COLOR: () => EXPECTED_COLOR,
  INVERTED_COLOR: () => INVERTED_COLOR,
  RECEIVED_COLOR: () => RECEIVED_COLOR,
  SERIALIZABLE_PROPERTIES: () => SERIALIZABLE_PROPERTIES,
  SUGGEST_TO_CONTAIN_EQUAL: () => SUGGEST_TO_CONTAIN_EQUAL,
  diff: () => diff,
  ensureActualIsNumber: () => ensureActualIsNumber,
  ensureExpectedIsNonNegativeInteger: () => ensureExpectedIsNonNegativeInteger,
  ensureExpectedIsNumber: () => ensureExpectedIsNumber,
  ensureNoExpected: () => ensureNoExpected,
  ensureNumbers: () => ensureNumbers,
  getLabelPrinter: () => getLabelPrinter,
  highlightTrailingWhitespace: () => highlightTrailingWhitespace,
  matcherErrorMessage: () => matcherErrorMessage,
  matcherHint: () => matcherHint,
  pluralize: () => pluralize,
  printDiffOrStringify: () => printDiffOrStringify,
  printExpected: () => printExpected,
  printReceived: () => printReceived,
  printWithType: () => printWithType,
  replaceMatchedToAsymmetricMatcher: () => replaceMatchedToAsymmetricMatcher,
  stringify: () => stringify
});
var import_index2 = __toESM(require_build6(), 1);
var BOLD_WEIGHT = import_index2.default.BOLD_WEIGHT;
var DIM_COLOR = import_index2.default.DIM_COLOR;
var EXPECTED_COLOR = import_index2.default.EXPECTED_COLOR;
var INVERTED_COLOR = import_index2.default.INVERTED_COLOR;
var RECEIVED_COLOR = import_index2.default.RECEIVED_COLOR;
var SERIALIZABLE_PROPERTIES = import_index2.default.SERIALIZABLE_PROPERTIES;
var SUGGEST_TO_CONTAIN_EQUAL = import_index2.default.SUGGEST_TO_CONTAIN_EQUAL;
var diff = import_index2.default.diff;
var ensureActualIsNumber = import_index2.default.ensureActualIsNumber;
var ensureExpectedIsNonNegativeInteger = import_index2.default.ensureExpectedIsNonNegativeInteger;
var ensureExpectedIsNumber = import_index2.default.ensureExpectedIsNumber;
var ensureNoExpected = import_index2.default.ensureNoExpected;
var ensureNumbers = import_index2.default.ensureNumbers;
var getLabelPrinter = import_index2.default.getLabelPrinter;
var highlightTrailingWhitespace = import_index2.default.highlightTrailingWhitespace;
var matcherErrorMessage = import_index2.default.matcherErrorMessage;
var matcherHint = import_index2.default.matcherHint;
var pluralize = import_index2.default.pluralize;
var printDiffOrStringify = import_index2.default.printDiffOrStringify;
var printExpected = import_index2.default.printExpected;
var printReceived = import_index2.default.printReceived;
var printWithType = import_index2.default.printWithType;
var replaceMatchedToAsymmetricMatcher = import_index2.default.replaceMatchedToAsymmetricMatcher;
var stringify = import_index2.default.stringify;

// node_modules/jest-message-util/build/index.mjs
var import_index3 = __toESM(require_build7(), 1);
var formatExecError = import_index3.default.formatExecError;
var formatPath = import_index3.default.formatPath;
var formatResultsErrors = import_index3.default.formatResultsErrors;
var formatStackTrace = import_index3.default.formatStackTrace;
var getStackTraceLines = import_index3.default.getStackTraceLines;
var getTopFrame = import_index3.default.getTopFrame;
var indentAllLines = import_index3.default.indentAllLines;
var separateMessageFromStack = import_index3.default.separateMessageFromStack;

// packages/playwright/src/matchers/expectLibrary.ts
function getType(value) {
  if (value === void 0)
    return "undefined";
  if (value === null)
    return "null";
  if (Array.isArray(value))
    return "array";
  if (typeof value === "boolean")
    return "boolean";
  if (typeof value === "function")
    return "function";
  if (typeof value === "number")
    return "number";
  if (typeof value === "string")
    return "string";
  if (typeof value === "bigint")
    return "bigint";
  if (typeof value === "object") {
    if (value.constructor === RegExp)
      return "regexp";
    if (value.constructor === Map)
      return "map";
    if (value.constructor === Set)
      return "set";
    if (value.constructor === Date)
      return "date";
    return "object";
  }
  if (typeof value === "symbol")
    return "symbol";
  throw new Error(`value of unknown type: ${value}`);
}
var isPrimitive = (value) => Object(value) !== value;
function isPromise(candidate) {
  return candidate !== null && candidate !== void 0 && (typeof candidate === "object" || typeof candidate === "function") && typeof candidate.then === "function";
}
var functionToString = Function.prototype.toString;
function fnNameFor(func) {
  if (func.name)
    return func.name;
  const matches = functionToString.call(func).match(/^(?:async)?\s*function\s*\*?\s*([\w$]+)\s*\(/);
  return matches ? matches[1] : "<anonymous>";
}
var utils = Object.freeze({
  ...build_exports,
  iterableEquality,
  subsetEquality
});
function hasProperty(obj, property) {
  if (!obj)
    return false;
  if (Object.prototype.hasOwnProperty.call(obj, property))
    return true;
  return hasProperty(Object.getPrototypeOf(obj), property);
}
var AsymmetricMatcher = class {
  constructor(sample, inverse = false) {
    this.sample = sample;
    this.inverse = inverse;
    this.$$typeof = Symbol.for("jest.asymmetricMatcher");
  }
  getMatcherContext() {
    return {
      customTesters: [],
      equals,
      isNot: this.inverse,
      utils
    };
  }
};
function buildCustomAsymmetricMatcher(matcherName, matcher) {
  class CustomMatcher extends AsymmetricMatcher {
    constructor(inverse2 = false, ...sample) {
      super(sample, inverse2);
    }
    asymmetricMatch(other) {
      const { pass } = matcher.call(
        this.getMatcherContext(),
        other,
        ...this.sample
      );
      return this.inverse ? !pass : pass;
    }
    toString() {
      return `${this.inverse ? "not." : ""}${matcherName}`;
    }
    getExpectedType() {
      return "any";
    }
    toAsymmetricMatcher() {
      return `${this.toString()}<${this.sample.map(String).join(", ")}>`;
    }
  }
  const positive = (...sample) => new CustomMatcher(false, ...sample);
  const inverse = (...sample) => new CustomMatcher(true, ...sample);
  return { positive, inverse };
}
var Any = class extends AsymmetricMatcher {
  constructor(sample) {
    if (sample === void 0) {
      throw new TypeError(
        "any() expects to be passed a constructor function. Please pass one or use anything() to match any object."
      );
    }
    super(sample);
  }
  asymmetricMatch(other) {
    if (this.sample === String)
      return typeof other === "string" || other instanceof String;
    if (this.sample === Number)
      return typeof other === "number" || other instanceof Number;
    if (this.sample === Function)
      return typeof other === "function" || other instanceof Function;
    if (this.sample === Boolean)
      return typeof other === "boolean" || other instanceof Boolean;
    if (this.sample === BigInt)
      return typeof other === "bigint" || other instanceof BigInt;
    if (this.sample === Symbol)
      return typeof other === "symbol" || other instanceof Symbol;
    if (this.sample === Object)
      return typeof other === "object";
    if (this.sample === Array)
      return Array.isArray(other);
    return other instanceof this.sample;
  }
  toString() {
    return "Any";
  }
  getExpectedType() {
    if (this.sample === String)
      return "string";
    if (this.sample === Number)
      return "number";
    if (this.sample === Function)
      return "function";
    if (this.sample === Object)
      return "object";
    if (this.sample === Boolean)
      return "boolean";
    if (this.sample === Array)
      return "array";
    return fnNameFor(this.sample);
  }
  toAsymmetricMatcher() {
    return `Any<${fnNameFor(this.sample)}>`;
  }
};
var Anything = class extends AsymmetricMatcher {
  asymmetricMatch(other) {
    return other !== null && other !== void 0;
  }
  toString() {
    return "Anything";
  }
  toAsymmetricMatcher() {
    return "Anything";
  }
};
var ArrayContaining = class extends AsymmetricMatcher {
  constructor(sample, inverse = false) {
    super(sample, inverse);
  }
  asymmetricMatch(other) {
    if (!Array.isArray(this.sample)) {
      throw new TypeError(
        `You must provide an array to ${this.toString()}, not '${typeof this.sample}'.`
      );
    }
    const matcherContext = this.getMatcherContext();
    const result = this.sample.length === 0 || Array.isArray(other) && this.sample.every(
      (item) => other.some(
        (another) => equals(item, another, matcherContext.customTesters)
      )
    );
    return this.inverse ? !result : result;
  }
  toString() {
    return `Array${this.inverse ? "Not" : ""}Containing`;
  }
  getExpectedType() {
    return "array";
  }
};
var ArrayOf = class extends AsymmetricMatcher {
  asymmetricMatch(other) {
    const matcherContext = this.getMatcherContext();
    const result = Array.isArray(other) && other.every(
      (item) => equals(this.sample, item, matcherContext.customTesters)
    );
    return this.inverse ? !result : result;
  }
  toString() {
    return `${this.inverse ? "Not" : ""}ArrayOf`;
  }
  getExpectedType() {
    return "array";
  }
};
var ObjectContaining = class extends AsymmetricMatcher {
  constructor(sample, inverse = false) {
    super(sample, inverse);
  }
  asymmetricMatch(other) {
    if (typeof this.sample !== "object") {
      throw new TypeError(
        `You must provide an object to ${this.toString()}, not '${typeof this.sample}'.`
      );
    }
    if (typeof other !== "object" || Array.isArray(other))
      return false;
    let result = true;
    const matcherContext = this.getMatcherContext();
    const objectKeys = getObjectKeys(this.sample);
    for (const key of objectKeys) {
      if (!hasProperty(other, key) || !equals(this.sample[key], other[key], matcherContext.customTesters)) {
        result = false;
        break;
      }
    }
    return this.inverse ? !result : result;
  }
  toString() {
    return `Object${this.inverse ? "Not" : ""}Containing`;
  }
  getExpectedType() {
    return "object";
  }
};
var StringContaining = class extends AsymmetricMatcher {
  constructor(sample, inverse = false) {
    if (!isA("String", sample))
      throw new Error("Expected is not a string");
    super(sample, inverse);
  }
  asymmetricMatch(other) {
    const result = isA("String", other) && other.includes(this.sample);
    return this.inverse ? !result : result;
  }
  toString() {
    return `String${this.inverse ? "Not" : ""}Containing`;
  }
  getExpectedType() {
    return "string";
  }
};
var StringMatching = class extends AsymmetricMatcher {
  constructor(sample, inverse = false) {
    if (!isA("String", sample) && !isA("RegExp", sample))
      throw new Error("Expected is not a String or a RegExp");
    super(new RegExp(sample), inverse);
  }
  asymmetricMatch(other) {
    const result = isA("String", other) && this.sample.test(other);
    return this.inverse ? !result : result;
  }
  toString() {
    return `String${this.inverse ? "Not" : ""}Matching`;
  }
  getExpectedType() {
    return "string";
  }
};
var CloseTo = class extends AsymmetricMatcher {
  constructor(sample, precision = 2, inverse = false) {
    if (!isA("Number", sample))
      throw new Error("Expected is not a Number");
    if (!isA("Number", precision))
      throw new Error("Precision is not a Number");
    super(sample);
    this.inverse = inverse;
    this.precision = precision;
  }
  asymmetricMatch(other) {
    if (!isA("Number", other))
      return false;
    let result = false;
    if (other === Number.POSITIVE_INFINITY && this.sample === Number.POSITIVE_INFINITY)
      result = true;
    else if (other === Number.NEGATIVE_INFINITY && this.sample === Number.NEGATIVE_INFINITY)
      result = true;
    else
      result = Math.abs(this.sample - other) < Math.pow(10, -this.precision) / 2;
    return this.inverse ? !result : result;
  }
  toString() {
    return `Number${this.inverse ? "Not" : ""}CloseTo`;
  }
  getExpectedType() {
    return "number";
  }
  toAsymmetricMatcher() {
    return [
      this.toString(),
      this.sample,
      `(${this.precision} ${this.precision === 1 ? "digit" : "digits"})`
    ].join(" ");
  }
};
var any = (expectedObject) => new Any(expectedObject);
var anything = () => new Anything();
var arrayContaining = (sample) => new ArrayContaining(sample);
var arrayNotContaining = (sample) => new ArrayContaining(sample, true);
var arrayOf = (sample) => new ArrayOf(sample);
var notArrayOf = (sample) => new ArrayOf(sample, true);
var objectContaining = (sample) => new ObjectContaining(sample);
var objectNotContaining = (sample) => new ObjectContaining(sample, true);
var stringContaining = (expected) => new StringContaining(expected);
var stringNotContaining = (expected) => new StringContaining(expected, true);
var stringMatching = (expected) => new StringMatching(expected);
var stringNotMatching = (expected) => new StringMatching(expected, true);
var closeTo = (expected, precision) => new CloseTo(expected, precision);
var notCloseTo = (expected, precision) => new CloseTo(expected, precision, true);
var printSubstring = (val) => val.replace(/"|\\/g, "\\$&");
var printReceivedStringContainExpectedSubstring = (received, start, length) => RECEIVED_COLOR(
  `"${printSubstring(received.slice(0, start))}${INVERTED_COLOR(
    printSubstring(received.slice(start, start + length))
  )}${printSubstring(received.slice(start + length))}"`
);
var printReceivedStringContainExpectedResult = (received, result) => result === null ? printReceived(received) : printReceivedStringContainExpectedSubstring(received, result.index, result[0].length);
var printReceivedArrayContainExpectedItem = (received, index) => RECEIVED_COLOR(
  `[${received.map((item, i) => {
    const stringified = stringify(item);
    return i === index ? INVERTED_COLOR(stringified) : stringified;
  }).join(", ")}]`
);
var printCloseTo = (receivedDiff, expectedDiff, precision, isNot) => {
  const receivedDiffString = stringify(receivedDiff);
  const expectedDiffString = receivedDiffString.includes("e") ? expectedDiff.toExponential(0) : 0 <= precision && precision < 20 ? expectedDiff.toFixed(precision + 1) : stringify(expectedDiff);
  return `Expected precision:  ${isNot ? "    " : ""}  ${stringify(precision)}
Expected difference: ${isNot ? "not " : ""}< ${EXPECTED_COLOR(expectedDiffString)}
Received difference: ${isNot ? "    " : ""}  ${RECEIVED_COLOR(receivedDiffString)}`;
};
var printConstructorName = (label, constructor, isNot, isExpected) => typeof constructor.name === "string" ? constructor.name.length === 0 ? `${label} name is an empty string` : `${label}: ${isNot ? isExpected ? "not " : "    " : ""}${isExpected ? EXPECTED_COLOR(constructor.name) : RECEIVED_COLOR(constructor.name)}` : `${label} name is not a string`;
var printExpectedConstructorName = (label, expected) => `${printConstructorName(label, expected, false, true)}
`;
var printExpectedConstructorNameNot = (label, expected) => `${printConstructorName(label, expected, true, true)}
`;
var printReceivedConstructorName = (label, received) => `${printConstructorName(label, received, false, false)}
`;
var printReceivedConstructorNameNot = (label, received, expected) => typeof expected.name === "string" && expected.name.length > 0 && typeof received.name === "string" && received.name.length > 0 ? `${printConstructorName(label, received, true, false)} ${Object.getPrototypeOf(received) === expected ? "extends" : "extends \u2026 extends"} ${EXPECTED_COLOR(expected.name)}
` : `${printConstructorName(label, received, false, false)}
`;
var EXPECTED_LABEL = "Expected";
var RECEIVED_LABEL = "Received";
var EXPECTED_VALUE_LABEL = "Expected value";
var RECEIVED_VALUE_LABEL = "Received value";
var toStrictEqualTesters = [
  iterableEquality,
  typeEquality,
  sparseArrayEquality,
  arrayBufferEquality
];
var matchers = {
  toBe(received, expected) {
    const matcherName = "toBe";
    const options = {
      comment: "Object.is equality",
      isNot: this.isNot,
      promise: this.promise
    };
    const pass = Object.is(received, expected);
    const message = pass ? () => matcherHint(matcherName, void 0, void 0, options) + `

Expected: not ${printExpected(expected)}` : () => {
      const expectedType = getType(expected);
      let deepEqualityName = null;
      if (expectedType !== "map" && expectedType !== "set") {
        if (equals(received, expected, [...this.customTesters, ...toStrictEqualTesters], true))
          deepEqualityName = "toStrictEqual";
        else if (equals(received, expected, [...this.customTesters, iterableEquality]))
          deepEqualityName = "toEqual";
      }
      return matcherHint(matcherName, void 0, void 0, options) + "\n\n" + (deepEqualityName === null ? "" : `${DIM_COLOR(
        `If it should pass with deep equality, replace "${matcherName}" with "${deepEqualityName}"`
      )}

`) + printDiffOrStringify(expected, received, EXPECTED_LABEL, RECEIVED_LABEL, false);
    };
    return { actual: received, expected, message, name: matcherName, pass };
  },
  toBeCloseTo(received, expected, precision = 2) {
    const matcherName = "toBeCloseTo";
    const secondArgument = arguments.length === 3 ? "precision" : void 0;
    const isNot = this.isNot;
    const options = {
      isNot,
      promise: this.promise,
      secondArgument,
      secondArgumentColor: (arg) => arg
    };
    if (typeof expected !== "number") {
      throw new TypeError(
        matcherErrorMessage(
          matcherHint(matcherName, void 0, void 0, options),
          `${EXPECTED_COLOR("expected")} value must be a number`,
          printWithType("Expected", expected, printExpected)
        )
      );
    }
    if (typeof received !== "number") {
      throw new TypeError(
        matcherErrorMessage(
          matcherHint(matcherName, void 0, void 0, options),
          `${RECEIVED_COLOR("received")} value must be a number`,
          printWithType("Received", received, printReceived)
        )
      );
    }
    let pass = false;
    let expectedDiff = 0;
    let receivedDiff = 0;
    if (received === Number.POSITIVE_INFINITY && expected === Number.POSITIVE_INFINITY) {
      pass = true;
    } else if (received === Number.NEGATIVE_INFINITY && expected === Number.NEGATIVE_INFINITY) {
      pass = true;
    } else {
      expectedDiff = Math.pow(10, -precision) / 2;
      receivedDiff = Math.abs(expected - received);
      pass = receivedDiff < expectedDiff;
    }
    const message = pass ? () => matcherHint(matcherName, void 0, void 0, options) + `

Expected: not ${printExpected(expected)}
` + (receivedDiff === 0 ? "" : `Received:     ${printReceived(received)}

${printCloseTo(receivedDiff, expectedDiff, precision, isNot)}`) : () => matcherHint(matcherName, void 0, void 0, options) + `

Expected: ${printExpected(expected)}
Received: ${printReceived(received)}

` + printCloseTo(receivedDiff, expectedDiff, precision, isNot);
    return { message, pass };
  },
  toBeDefined(received, expected) {
    const matcherName = "toBeDefined";
    const options = { isNot: this.isNot, promise: this.promise };
    ensureNoExpected(expected, matcherName, options);
    const pass = received !== void 0;
    const message = () => matcherHint(matcherName, void 0, "", options) + `

Received: ${printReceived(received)}`;
    return { message, pass };
  },
  toBeFalsy(received, expected) {
    const matcherName = "toBeFalsy";
    const options = { isNot: this.isNot, promise: this.promise };
    ensureNoExpected(expected, matcherName, options);
    const pass = !received;
    const message = () => matcherHint(matcherName, void 0, "", options) + `

Received: ${printReceived(received)}`;
    return { message, pass };
  },
  toBeGreaterThan(received, expected) {
    const matcherName = "toBeGreaterThan";
    const isNot = this.isNot;
    const options = { isNot, promise: this.promise };
    ensureNumbers(received, expected, matcherName, options);
    const pass = received > expected;
    const message = () => matcherHint(matcherName, void 0, void 0, options) + `

Expected:${isNot ? " not" : ""} > ${printExpected(expected)}
Received:${isNot ? "    " : ""}   ${printReceived(received)}`;
    return { message, pass };
  },
  toBeGreaterThanOrEqual(received, expected) {
    const matcherName = "toBeGreaterThanOrEqual";
    const isNot = this.isNot;
    const options = { isNot, promise: this.promise };
    ensureNumbers(received, expected, matcherName, options);
    const pass = received >= expected;
    const message = () => matcherHint(matcherName, void 0, void 0, options) + `

Expected:${isNot ? " not" : ""} >= ${printExpected(expected)}
Received:${isNot ? "    " : ""}    ${printReceived(received)}`;
    return { message, pass };
  },
  toBeInstanceOf(received, expected) {
    const matcherName = "toBeInstanceOf";
    const options = { isNot: this.isNot, promise: this.promise };
    if (typeof expected !== "function") {
      throw new TypeError(
        matcherErrorMessage(
          matcherHint(matcherName, void 0, void 0, options),
          `${EXPECTED_COLOR("expected")} value must be a function`,
          printWithType("Expected", expected, printExpected)
        )
      );
    }
    const pass = received instanceof expected;
    const message = pass ? () => matcherHint(matcherName, void 0, void 0, options) + "\n\n" + printExpectedConstructorNameNot("Expected constructor", expected) + (typeof received.constructor === "function" && received.constructor !== expected ? printReceivedConstructorNameNot("Received constructor", received.constructor, expected) : "") : () => matcherHint(matcherName, void 0, void 0, options) + "\n\n" + printExpectedConstructorName("Expected constructor", expected) + (isPrimitive(received) || Object.getPrototypeOf(received) === null ? `
Received value has no prototype
Received value: ${printReceived(received)}` : typeof received.constructor === "function" ? printReceivedConstructorName("Received constructor", received.constructor) : `
Received value: ${printReceived(received)}`);
    return { message, pass };
  },
  toBeLessThan(received, expected) {
    const matcherName = "toBeLessThan";
    const isNot = this.isNot;
    const options = { isNot, promise: this.promise };
    ensureNumbers(received, expected, matcherName, options);
    const pass = received < expected;
    const message = () => matcherHint(matcherName, void 0, void 0, options) + `

Expected:${isNot ? " not" : ""} < ${printExpected(expected)}
Received:${isNot ? "    " : ""}   ${printReceived(received)}`;
    return { message, pass };
  },
  toBeLessThanOrEqual(received, expected) {
    const matcherName = "toBeLessThanOrEqual";
    const isNot = this.isNot;
    const options = { isNot, promise: this.promise };
    ensureNumbers(received, expected, matcherName, options);
    const pass = received <= expected;
    const message = () => matcherHint(matcherName, void 0, void 0, options) + `

Expected:${isNot ? " not" : ""} <= ${printExpected(expected)}
Received:${isNot ? "    " : ""}    ${printReceived(received)}`;
    return { message, pass };
  },
  toBeNaN(received, expected) {
    const matcherName = "toBeNaN";
    const options = { isNot: this.isNot, promise: this.promise };
    ensureNoExpected(expected, matcherName, options);
    const pass = Number.isNaN(received);
    const message = () => matcherHint(matcherName, void 0, "", options) + `

Received: ${printReceived(received)}`;
    return { message, pass };
  },
  toBeNull(received, expected) {
    const matcherName = "toBeNull";
    const options = { isNot: this.isNot, promise: this.promise };
    ensureNoExpected(expected, matcherName, options);
    const pass = received === null;
    const message = () => matcherHint(matcherName, void 0, "", options) + `

Received: ${printReceived(received)}`;
    return { message, pass };
  },
  toBeTruthy(received, expected) {
    const matcherName = "toBeTruthy";
    const options = { isNot: this.isNot, promise: this.promise };
    ensureNoExpected(expected, matcherName, options);
    const pass = !!received;
    const message = () => matcherHint(matcherName, void 0, "", options) + `

Received: ${printReceived(received)}`;
    return { message, pass };
  },
  toBeUndefined(received, expected) {
    const matcherName = "toBeUndefined";
    const options = { isNot: this.isNot, promise: this.promise };
    ensureNoExpected(expected, matcherName, options);
    const pass = received === void 0;
    const message = () => matcherHint(matcherName, void 0, "", options) + `

Received: ${printReceived(received)}`;
    return { message, pass };
  },
  toContain(received, expected) {
    const matcherName = "toContain";
    const isNot = this.isNot;
    const options = { comment: "indexOf", isNot, promise: this.promise };
    if (received === null || received === void 0) {
      throw new Error(
        matcherErrorMessage(
          matcherHint(matcherName, void 0, void 0, options),
          `${RECEIVED_COLOR("received")} value must not be null nor undefined`,
          printWithType("Received", received, printReceived)
        )
      );
    }
    if (typeof received === "string") {
      const wrongTypeErrorMessage = `${EXPECTED_COLOR("expected")} value must be a string if ${RECEIVED_COLOR("received")} value is a string`;
      if (typeof expected !== "string") {
        throw new TypeError(
          matcherErrorMessage(
            matcherHint(matcherName, received, String(expected), options),
            wrongTypeErrorMessage,
            printWithType("Expected", expected, printExpected) + "\n" + printWithType("Received", received, printReceived)
          )
        );
      }
      const index2 = received.indexOf(String(expected));
      const pass2 = index2 !== -1;
      const message2 = () => {
        const labelExpected = `Expected ${typeof expected === "string" ? "substring" : "value"}`;
        const labelReceived = "Received string";
        const printLabel = getLabelPrinter(labelExpected, labelReceived);
        return matcherHint(matcherName, void 0, void 0, options) + `

${printLabel(labelExpected)}${isNot ? "not " : ""}${printExpected(expected)}
${printLabel(labelReceived)}${isNot ? "    " : ""}${isNot ? printReceivedStringContainExpectedSubstring(received, index2, String(expected).length) : printReceived(received)}`;
      };
      return { message: message2, pass: pass2 };
    }
    const indexable = [...received];
    const index = indexable.indexOf(expected);
    const pass = index !== -1;
    const message = () => {
      const labelExpected = "Expected value";
      const labelReceived = `Received ${getType(received)}`;
      const printLabel = getLabelPrinter(labelExpected, labelReceived);
      return matcherHint(matcherName, void 0, void 0, options) + `

${printLabel(labelExpected)}${isNot ? "not " : ""}${printExpected(expected)}
${printLabel(labelReceived)}${isNot ? "    " : ""}${isNot && Array.isArray(received) ? printReceivedArrayContainExpectedItem(received, index) : printReceived(received)}` + (!isNot && indexable.some(
        (item) => equals(item, expected, [...this.customTesters, iterableEquality])
      ) ? `

${SUGGEST_TO_CONTAIN_EQUAL}` : "");
    };
    return { message, pass };
  },
  toContainEqual(received, expected) {
    const matcherName = "toContainEqual";
    const isNot = this.isNot;
    const options = { comment: "deep equality", isNot, promise: this.promise };
    if (received === null || received === void 0) {
      throw new Error(
        matcherErrorMessage(
          matcherHint(matcherName, void 0, void 0, options),
          `${RECEIVED_COLOR("received")} value must not be null nor undefined`,
          printWithType("Received", received, printReceived)
        )
      );
    }
    const index = [...received].findIndex(
      (item) => equals(item, expected, [...this.customTesters, iterableEquality])
    );
    const pass = index !== -1;
    const message = () => {
      const labelExpected = "Expected value";
      const labelReceived = `Received ${getType(received)}`;
      const printLabel = getLabelPrinter(labelExpected, labelReceived);
      return matcherHint(matcherName, void 0, void 0, options) + `

${printLabel(labelExpected)}${isNot ? "not " : ""}${printExpected(expected)}
${printLabel(labelReceived)}${isNot ? "    " : ""}${isNot && Array.isArray(received) ? printReceivedArrayContainExpectedItem(received, index) : printReceived(received)}`;
    };
    return { message, pass };
  },
  toEqual(received, expected) {
    const matcherName = "toEqual";
    const options = { comment: "deep equality", isNot: this.isNot, promise: this.promise };
    const pass = equals(received, expected, [...this.customTesters, iterableEquality]);
    const message = pass ? () => matcherHint(matcherName, void 0, void 0, options) + `

Expected: not ${printExpected(expected)}
` + (stringify(expected) === stringify(received) ? "" : `Received:     ${printReceived(received)}`) : () => matcherHint(matcherName, void 0, void 0, options) + "\n\n" + printDiffOrStringify(expected, received, EXPECTED_LABEL, RECEIVED_LABEL, false);
    return { actual: received, expected, message, name: matcherName, pass };
  },
  toHaveLength(received, expected) {
    const matcherName = "toHaveLength";
    const isNot = this.isNot;
    const options = { isNot, promise: this.promise };
    if (typeof received?.length !== "number") {
      throw new TypeError(
        matcherErrorMessage(
          matcherHint(matcherName, void 0, void 0, options),
          `${RECEIVED_COLOR("received")} value must have a length property whose value must be a number`,
          printWithType("Received", received, printReceived)
        )
      );
    }
    ensureExpectedIsNonNegativeInteger(expected, matcherName, options);
    const pass = received.length === expected;
    const message = () => {
      const labelExpected = "Expected length";
      const labelReceivedLength = "Received length";
      const labelReceivedValue = `Received ${getType(received)}`;
      const printLabel = getLabelPrinter(labelExpected, labelReceivedLength, labelReceivedValue);
      return matcherHint(matcherName, void 0, void 0, options) + `

${printLabel(labelExpected)}${isNot ? "not " : ""}${printExpected(expected)}
` + (isNot ? "" : `${printLabel(labelReceivedLength)}${printReceived(received.length)}
`) + `${printLabel(labelReceivedValue)}${isNot ? "    " : ""}${printReceived(received)}`;
    };
    return { message, pass };
  },
  toHaveProperty(received, expectedPath, expectedValue) {
    const matcherName = "toHaveProperty";
    const expectedArgument = "path";
    const hasValue = arguments.length === 3;
    const options = {
      isNot: this.isNot,
      promise: this.promise,
      secondArgument: hasValue ? "value" : ""
    };
    if (received === null || received === void 0) {
      throw new Error(
        matcherErrorMessage(
          matcherHint(matcherName, void 0, expectedArgument, options),
          `${RECEIVED_COLOR("received")} value must not be null nor undefined`,
          printWithType("Received", received, printReceived)
        )
      );
    }
    const expectedPathType = getType(expectedPath);
    if (expectedPathType !== "string" && expectedPathType !== "array") {
      throw new Error(
        matcherErrorMessage(
          matcherHint(matcherName, void 0, expectedArgument, options),
          `${EXPECTED_COLOR("expected")} path must be a string or array`,
          printWithType("Expected", expectedPath, printExpected)
        )
      );
    }
    const expectedPathLength = typeof expectedPath === "string" ? pathAsArray(expectedPath).length : expectedPath.length;
    if (expectedPathType === "array" && expectedPathLength === 0) {
      throw new Error(
        matcherErrorMessage(
          matcherHint(matcherName, void 0, expectedArgument, options),
          `${EXPECTED_COLOR("expected")} path must not be an empty array`,
          printWithType("Expected", expectedPath, printExpected)
        )
      );
    }
    const result = getPath(received, expectedPath);
    const { lastTraversedObject, endPropIsDefined, hasEndProp, value } = result;
    const receivedPath = result.traversedPath;
    const hasCompletePath = receivedPath.length === expectedPathLength;
    const receivedValue = hasCompletePath ? result.value : lastTraversedObject;
    const pass = hasValue && endPropIsDefined ? equals(value, expectedValue, [...this.customTesters, iterableEquality]) : Boolean(hasEndProp);
    const message = pass ? () => matcherHint(matcherName, void 0, expectedArgument, options) + "\n\n" + (hasValue ? `Expected path: ${printExpected(expectedPath)}

Expected value: not ${printExpected(expectedValue)}${stringify(expectedValue) === stringify(receivedValue) ? "" : `
Received value:     ${printReceived(receivedValue)}`}` : `Expected path: not ${printExpected(expectedPath)}

Received value: ${printReceived(receivedValue)}`) : () => matcherHint(matcherName, void 0, expectedArgument, options) + `

Expected path: ${printExpected(expectedPath)}
` + (hasCompletePath ? `
${printDiffOrStringify(
      expectedValue,
      receivedValue,
      EXPECTED_VALUE_LABEL,
      RECEIVED_VALUE_LABEL,
      false
    )}` : `Received path: ${printReceived(
      expectedPathType === "array" || receivedPath.length === 0 ? receivedPath : receivedPath.join(".")
    )}

${hasValue ? `Expected value: ${printExpected(expectedValue)}
` : ""}Received value: ${printReceived(receivedValue)}`);
    return { message, pass };
  },
  toMatch(received, expected) {
    const matcherName = "toMatch";
    const options = { isNot: this.isNot, promise: this.promise };
    if (typeof received !== "string") {
      throw new TypeError(
        matcherErrorMessage(
          matcherHint(matcherName, void 0, void 0, options),
          `${RECEIVED_COLOR("received")} value must be a string`,
          printWithType("Received", received, printReceived)
        )
      );
    }
    if (!(typeof expected === "string") && !(expected && typeof expected.test === "function")) {
      throw new Error(
        matcherErrorMessage(
          matcherHint(matcherName, void 0, void 0, options),
          `${EXPECTED_COLOR("expected")} value must be a string or regular expression`,
          printWithType("Expected", expected, printExpected)
        )
      );
    }
    const pass = typeof expected === "string" ? received.includes(expected) : new RegExp(expected).test(received);
    const message = pass ? () => typeof expected === "string" ? matcherHint(matcherName, void 0, void 0, options) + `

Expected substring: not ${printExpected(expected)}
Received string:        ${printReceivedStringContainExpectedSubstring(
      received,
      received.indexOf(expected),
      expected.length
    )}` : matcherHint(matcherName, void 0, void 0, options) + `

Expected pattern: not ${printExpected(expected)}
Received string:      ${printReceivedStringContainExpectedResult(
      received,
      typeof expected.exec === "function" ? expected.exec(received) : null
    )}` : () => {
      const labelExpected = `Expected ${typeof expected === "string" ? "substring" : "pattern"}`;
      const labelReceived = "Received string";
      const printLabel = getLabelPrinter(labelExpected, labelReceived);
      return matcherHint(matcherName, void 0, void 0, options) + `

${printLabel(labelExpected)}${printExpected(expected)}
${printLabel(labelReceived)}${printReceived(received)}`;
    };
    return { message, pass };
  },
  toMatchObject(received, expected) {
    const matcherName = "toMatchObject";
    const options = { isNot: this.isNot, promise: this.promise };
    if (typeof received !== "object" || received === null) {
      throw new Error(
        matcherErrorMessage(
          matcherHint(matcherName, void 0, void 0, options),
          `${RECEIVED_COLOR("received")} value must be a non-null object`,
          printWithType("Received", received, printReceived)
        )
      );
    }
    if (typeof expected !== "object" || expected === null) {
      throw new Error(
        matcherErrorMessage(
          matcherHint(matcherName, void 0, void 0, options),
          `${EXPECTED_COLOR("expected")} value must be a non-null object`,
          printWithType("Expected", expected, printExpected)
        )
      );
    }
    const pass = equals(received, expected, [...this.customTesters, iterableEquality, subsetEquality]);
    const message = pass ? () => matcherHint(matcherName, void 0, void 0, options) + `

Expected: not ${printExpected(expected)}` + (stringify(expected) === stringify(received) ? "" : `
Received:     ${printReceived(received)}`) : () => matcherHint(matcherName, void 0, void 0, options) + "\n\n" + printDiffOrStringify(
      expected,
      getObjectSubset(received, expected, this.customTesters),
      EXPECTED_LABEL,
      RECEIVED_LABEL,
      false
    );
    return { message, pass };
  },
  toStrictEqual(received, expected) {
    const matcherName = "toStrictEqual";
    const options = { comment: "deep equality", isNot: this.isNot, promise: this.promise };
    const pass = equals(received, expected, [...this.customTesters, ...toStrictEqualTesters], true);
    const message = pass ? () => matcherHint(matcherName, void 0, void 0, options) + `

Expected: not ${printExpected(expected)}
` + (stringify(expected) === stringify(received) ? "" : `Received:     ${printReceived(received)}`) : () => matcherHint(matcherName, void 0, void 0, options) + "\n\n" + printDiffOrStringify(expected, received, EXPECTED_LABEL, RECEIVED_LABEL, false);
    return { actual: received, expected, message, name: matcherName, pass };
  }
};
var DID_NOT_THROW = "Received function did not throw";
var getThrown = (e) => {
  const hasMessage = e !== null && e !== void 0 && typeof e.message === "string";
  if (hasMessage && typeof e.name === "string" && typeof e.stack === "string")
    return { hasMessage, isError: true, message: e.message, value: e };
  return {
    hasMessage,
    isError: false,
    message: hasMessage ? e.message : String(e),
    value: e
  };
};
var createThrowMatcher = (matcherName, fromPromise) => function(received, expected) {
  const options = { isNot: this.isNot, promise: this.promise };
  let thrown = null;
  if (fromPromise && isError(received)) {
    thrown = getThrown(received);
  } else {
    if (typeof received === "function") {
      try {
        received();
      } catch (error) {
        thrown = getThrown(error);
      }
    } else if (!fromPromise) {
      const placeholder = expected === void 0 ? "" : "expected";
      throw new Error(
        matcherErrorMessage(
          matcherHint(matcherName, void 0, placeholder, options),
          `${RECEIVED_COLOR("received")} value must be a function`,
          printWithType("Received", received, printReceived)
        )
      );
    }
  }
  if (expected === void 0)
    return toThrow(matcherName, options, thrown);
  if (typeof expected === "function")
    return toThrowExpectedClass(matcherName, options, thrown, expected);
  if (typeof expected === "string")
    return toThrowExpectedString(matcherName, options, thrown, expected);
  if (expected !== null && typeof expected.test === "function")
    return toThrowExpectedRegExp(matcherName, options, thrown, expected);
  if (expected !== null && typeof expected.asymmetricMatch === "function")
    return toThrowExpectedAsymmetric(matcherName, options, thrown, expected);
  if (expected !== null && typeof expected === "object")
    return toThrowExpectedObject(matcherName, options, thrown, expected);
  throw new Error(
    matcherErrorMessage(
      matcherHint(matcherName, void 0, void 0, options),
      `${EXPECTED_COLOR("expected")} value must be a string or regular expression or class or error`,
      printWithType("Expected", expected, printExpected)
    )
  );
};
var toThrowExpectedRegExp = (matcherName, options, thrown, expected) => {
  const pass = thrown !== null && expected.test(thrown.message);
  const message = pass ? () => matcherHint(matcherName, void 0, void 0, options) + "\n\n" + formatExpected("Expected pattern: not ", expected) + (thrown !== null && thrown.hasMessage ? formatReceived("Received message:     ", thrown, "message", expected) + formatStack(thrown) : formatReceived("Received value:       ", thrown, "value")) : () => matcherHint(matcherName, void 0, void 0, options) + "\n\n" + formatExpected("Expected pattern: ", expected) + (thrown === null ? `
${DID_NOT_THROW}` : thrown.hasMessage ? formatReceived("Received message: ", thrown, "message") + formatStack(thrown) : formatReceived("Received value:   ", thrown, "value"));
  return { message, pass };
};
var toThrowExpectedAsymmetric = (matcherName, options, thrown, expected) => {
  const pass = thrown !== null && expected.asymmetricMatch(thrown.value);
  const message = pass ? () => matcherHint(matcherName, void 0, void 0, options) + "\n\n" + formatExpected("Expected asymmetric matcher: not ", expected) + "\n" + (thrown !== null && thrown.hasMessage ? formatReceived("Received name:    ", thrown, "name") + formatReceived("Received message: ", thrown, "message") + formatStack(thrown) : formatReceived("Thrown value: ", thrown, "value")) : () => matcherHint(matcherName, void 0, void 0, options) + "\n\n" + formatExpected("Expected asymmetric matcher: ", expected) + "\n" + (thrown === null ? DID_NOT_THROW : thrown.hasMessage ? formatReceived("Received name:    ", thrown, "name") + formatReceived("Received message: ", thrown, "message") + formatStack(thrown) : formatReceived("Thrown value: ", thrown, "value"));
  return { message, pass };
};
var toThrowExpectedObject = (matcherName, options, thrown, expected) => {
  const expectedMessageAndCause = createMessageAndCause(expected);
  const thrownMessageAndCause = thrown === null ? null : createMessageAndCause(thrown.value);
  const isCompareErrorInstance = thrown?.isError && expected instanceof Error;
  const isExpectedCustomErrorInstance = expected.constructor.name !== Error.name;
  const pass = thrown !== null && thrown.message === expected.message && thrownMessageAndCause === expectedMessageAndCause && (!isCompareErrorInstance || !isExpectedCustomErrorInstance || thrown.value instanceof expected.constructor);
  const message = pass ? () => matcherHint(matcherName, void 0, void 0, options) + "\n\n" + formatExpected(`Expected ${messageAndCause(expected)}: not `, expectedMessageAndCause) + (thrown !== null && thrown.hasMessage ? formatStack(thrown) : formatReceived("Received value:       ", thrown, "value")) : () => matcherHint(matcherName, void 0, void 0, options) + "\n\n" + (thrown === null ? formatExpected(`Expected ${messageAndCause(expected)}: `, expectedMessageAndCause) + "\n" + DID_NOT_THROW : thrown.hasMessage ? printDiffOrStringify(
    expectedMessageAndCause,
    thrownMessageAndCause,
    `Expected ${messageAndCause(expected)}`,
    `Received ${messageAndCause(thrown.value)}`,
    true
  ) + "\n" + formatStack(thrown) : formatExpected(`Expected ${messageAndCause(expected)}: `, expectedMessageAndCause) + formatReceived("Received value:   ", thrown, "value"));
  return { message, pass };
};
var toThrowExpectedClass = (matcherName, options, thrown, expected) => {
  const pass = thrown !== null && thrown.value instanceof expected;
  const message = pass ? () => matcherHint(matcherName, void 0, void 0, options) + "\n\n" + printExpectedConstructorNameNot("Expected constructor", expected) + (thrown !== null && thrown.value !== null && thrown.value !== void 0 && typeof thrown.value.constructor === "function" && thrown.value.constructor !== expected ? printReceivedConstructorNameNot("Received constructor", thrown.value.constructor, expected) : "") + "\n" + (thrown !== null && thrown.hasMessage ? formatReceived("Received message: ", thrown, "message") + formatStack(thrown) : formatReceived("Received value: ", thrown, "value")) : () => matcherHint(matcherName, void 0, void 0, options) + "\n\n" + printExpectedConstructorName("Expected constructor", expected) + (thrown === null ? `
${DID_NOT_THROW}` : `${thrown.value !== null && thrown.value !== void 0 && typeof thrown.value.constructor === "function" ? printReceivedConstructorName("Received constructor", thrown.value.constructor) : ""}
${thrown.hasMessage ? formatReceived("Received message: ", thrown, "message") + formatStack(thrown) : formatReceived("Received value: ", thrown, "value")}`);
  return { message, pass };
};
var toThrowExpectedString = (matcherName, options, thrown, expected) => {
  const pass = thrown !== null && thrown.message.includes(expected);
  const message = pass ? () => matcherHint(matcherName, void 0, void 0, options) + "\n\n" + formatExpected("Expected substring: not ", expected) + (thrown !== null && thrown.hasMessage ? formatReceived("Received message:       ", thrown, "message", expected) + formatStack(thrown) : formatReceived("Received value:         ", thrown, "value")) : () => matcherHint(matcherName, void 0, void 0, options) + "\n\n" + formatExpected("Expected substring: ", expected) + (thrown === null ? `
${DID_NOT_THROW}` : thrown.hasMessage ? formatReceived("Received message:   ", thrown, "message") + formatStack(thrown) : formatReceived("Received value:     ", thrown, "value"));
  return { message, pass };
};
var toThrow = (matcherName, options, thrown) => {
  const pass = thrown !== null;
  const message = pass ? () => matcherHint(matcherName, void 0, "", options) + "\n\n" + (thrown !== null && thrown.hasMessage ? formatReceived("Error name:    ", thrown, "name") + formatReceived("Error message: ", thrown, "message") + formatStack(thrown) : formatReceived("Thrown value: ", thrown, "value")) : () => matcherHint(matcherName, void 0, "", options) + "\n\n" + DID_NOT_THROW;
  return { message, pass };
};
var formatExpected = (label, expected) => `${label + printExpected(expected)}
`;
var formatReceived = (label, thrown, key, expected) => {
  if (thrown === null)
    return "";
  if (key === "message") {
    const message = thrown.message;
    if (typeof expected === "string") {
      const index = message.indexOf(expected);
      if (index !== -1) {
        return `${label + printReceivedStringContainExpectedSubstring(message, index, expected.length)}
`;
      }
    } else if (expected instanceof RegExp) {
      return `${label + printReceivedStringContainExpectedResult(
        message,
        typeof expected.exec === "function" ? expected.exec(message) : null
      )}
`;
    }
    return `${label + printReceived(message)}
`;
  }
  if (key === "name")
    return thrown.isError ? `${label + printReceived(thrown.value.name)}
` : "";
  if (key === "value")
    return thrown.isError ? "" : `${label + printReceived(thrown.value)}
`;
  return "";
};
var formatStack = (thrown) => {
  if (thrown === null || !thrown.isError)
    return "";
  const config = { rootDir: process.cwd(), testMatch: [] };
  const options = { noStackTrace: false };
  if (thrown.value instanceof AggregateError)
    return formatExecError(thrown.value, config, options);
  return formatStackTrace(
    separateMessageFromStack(thrown.value.stack).stack,
    config,
    options
  );
};
function createMessageAndCause(error) {
  if (error.cause) {
    const seen = /* @__PURE__ */ new WeakSet();
    return JSON.stringify(buildSerializeError(error), (_, value) => {
      if (isObject(value)) {
        if (seen.has(value))
          return;
        seen.add(value);
      }
      if (typeof value === "bigint" || value === void 0)
        return String(value);
      return value;
    });
  }
  return error.message;
}
function buildSerializeError(error) {
  if (!isObject(error))
    return error;
  const result = {};
  for (const name of Object.getOwnPropertyNames(error).sort()) {
    if (["stack", "fileName", "lineNumber"].includes(name))
      continue;
    if (name === "cause") {
      result[name] = buildSerializeError(error["cause"]);
      continue;
    }
    result[name] = error[name];
  }
  return result;
}
function isObject(obj) {
  return obj !== null && obj !== void 0 && typeof obj === "object";
}
function messageAndCause(error) {
  return error.cause === void 0 ? "message" : "message and cause";
}
var getMessage = (message) => message && message() || RECEIVED_COLOR("No message was specified for this matcher.");
var validateMatcherResult = (result) => {
  if (typeof result !== "object" || typeof result.pass !== "boolean" || result.message && typeof result.message !== "string" && typeof result.message !== "function") {
    throw new Error(
      `Unexpected return from a matcher function.
Matcher functions should return an object in the following format:
  {message?: string | function, pass: boolean}
'${stringify(result)}' was returned`
    );
  }
};
function createExpectedPromiseMessage(matcherName, isNot, promise, actual) {
  return () => matcherErrorMessage(
    matcherHint(matcherName, void 0, "", { isNot, promise }),
    `${RECEIVED_COLOR("received")} value must be a promise or a function returning a promise`,
    printWithType("Received", actual, printReceived)
  );
}
function createExpectedToResolveMessage(matcherName, isNot, promise, actual) {
  return () => `${matcherHint(matcherName, void 0, "", { isNot, promise })}

Received promise rejected instead of resolved
Rejected to value: ${printReceived(actual)}`;
}
function createExpectedToRejectMessage(matcherName, isNot, promise, actual) {
  return () => `${matcherHint(matcherName, void 0, "", { isNot, promise })}

Received promise resolved instead of rejected
Resolved to value: ${printReceived(actual)}`;
}

// packages/playwright/src/matchers/matcherHint.ts
var import_util = __toESM(require("util"));
var { stringifyStackFrames } = require("playwright-core/lib/coreBundle").iso;
var ExpectError = class extends Error {
  constructor(matcherResult, customMessage, stackFrames) {
    super("");
    this.message = matcherResult.message;
    this.matcherResult = matcherResult;
    if (customMessage)
      this.message = customMessage + "\n\n" + this.message;
    this.stack = this.name + ": " + this.message + "\n" + stringifyStackFrames(stackFrames).join("\n");
  }
};
function expectTypes(receiver, types, matcherName) {
  if (typeof receiver !== "object" || !types.includes(receiver._apiName)) {
    const receiverString = typeof receiver === "object" && receiver !== null ? `${receiver.constructor.name} ${import_util.default.inspect(receiver)}` : String(receiver);
    const commaSeparated = types.slice();
    const lastType = commaSeparated.pop();
    const typesString = commaSeparated.length ? commaSeparated.join(", ") + " or " + lastType : lastType;
    throw new Error(`${matcherName} can be only used with ${typesString} object${types.length > 1 ? "s" : ""}, was called with ${receiverString}`);
  }
}
var printSubstring2 = (val) => val.replace(/"|\\/g, "\\$&");
var printReceivedStringContainExpectedSubstring2 = (utils2, received, start, length) => utils2.RECEIVED_COLOR(
  '"' + printSubstring2(received.slice(0, start)) + utils2.INVERTED_COLOR(printSubstring2(received.slice(start, start + length))) + printSubstring2(received.slice(start + length)) + '"'
);
var printReceivedStringContainExpectedResult2 = (utils2, received, result) => result === null ? utils2.printReceived(received) : printReceivedStringContainExpectedSubstring2(
  utils2,
  received,
  result.index,
  result[0].length
);
function formatMatcherMessage(utils2, details) {
  const receiver = details.receiver ?? (details.locator ? "locator" : "page");
  let message = utils2.DIM_COLOR("expect(") + utils2.RECEIVED_COLOR(receiver) + utils2.DIM_COLOR(")" + (details.promise ? "." + details.promise : "") + (details.isNot ? ".not" : "") + ".") + details.matcherName + utils2.DIM_COLOR("(") + utils2.EXPECTED_COLOR(details.expectation) + utils2.DIM_COLOR(")") + " failed\n\n";
  const diffLines = details.printedDiff?.split("\n");
  if (diffLines?.length === 2) {
    details.printedExpected = diffLines[0];
    details.printedReceived = diffLines[1];
    details.printedDiff = void 0;
  }
  const align = !details.errorMessage && details.printedExpected?.startsWith("Expected:") && (!details.printedReceived || details.printedReceived.startsWith("Received:"));
  if (details.locator)
    message += `Locator: ${align ? " " : ""}${details.locator}
`;
  if (details.printedExpected)
    message += details.printedExpected + "\n";
  if (details.printedReceived)
    message += details.printedReceived + "\n";
  if (details.timedOut && details.timeout)
    message += `Timeout: ${align ? " " : ""}${details.timeout}ms
`;
  if (details.printedDiff)
    message += details.printedDiff + "\n";
  if (details.errorMessage) {
    message += details.errorMessage;
    if (!details.errorMessage.endsWith("\n"))
      message += "\n";
  }
  message += callLogText(utils2, details.log);
  return message;
}
var callLogText = (utils2, log) => {
  if (!log || !log.some((l) => !!l))
    return "";
  return `
Call log:
${utils2.DIM_COLOR(log.join("\n"))}
`;
};

// packages/playwright/src/matchers/toBeTruthy.ts
async function toBeTruthy(matcherName, locator, receiverType, expected, arg, query, options = {}) {
  expectTypes(locator, [receiverType], matcherName);
  const timeout = options.timeout ?? this.timeout;
  const { matches: pass, log, timedOut, received, errorMessage } = await query(!!this.isNot, timeout);
  const receivedValue = received?.value;
  if (pass === !this.isNot) {
    return {
      name: matcherName,
      message: () => "",
      pass,
      expected
    };
  }
  let printedReceived;
  let printedExpected;
  if (pass) {
    printedExpected = `Expected: not ${expected}`;
    printedReceived = errorMessage ? "" : `Received: ${expected}`;
  } else {
    printedExpected = `Expected: ${expected}`;
    printedReceived = errorMessage ? "" : `Received: ${receivedValue}`;
  }
  const message = () => {
    return formatMatcherMessage(this.utils, {
      isNot: this.isNot,
      promise: this.promise,
      matcherName,
      expectation: arg,
      locator: locator.toString(),
      timeout,
      timedOut,
      printedExpected,
      printedReceived,
      errorMessage,
      log
    });
  };
  return {
    message,
    pass,
    actual: receivedValue,
    name: matcherName,
    expected,
    log,
    timeout: timedOut ? timeout : void 0,
    ariaSnapshot: received?.ariaSnapshot
  };
}

// packages/playwright/src/matchers/toEqual.ts
var { isRegExp } = require("playwright-core/lib/coreBundle").iso;
var EXPECTED_LABEL2 = "Expected";
var RECEIVED_LABEL2 = "Received";
async function toEqual(matcherName, locator, receiverType, query, expected, options = {}) {
  expectTypes(locator, [receiverType], matcherName);
  const timeout = options.timeout ?? this.timeout;
  const { matches: pass, received, log, timedOut, errorMessage } = await query(!!this.isNot, timeout);
  const receivedValue = received?.value;
  if (pass === !this.isNot) {
    return {
      name: matcherName,
      message: () => "",
      pass,
      expected
    };
  }
  let printedReceived;
  let printedExpected;
  let printedDiff;
  if (pass) {
    printedExpected = `Expected: not ${this.utils.printExpected(expected)}`;
    printedReceived = errorMessage ? "" : `Received: ${this.utils.printReceived(receivedValue)}`;
  } else if (errorMessage) {
    printedExpected = `Expected: ${this.utils.printExpected(expected)}`;
  } else if (Array.isArray(expected) && Array.isArray(receivedValue)) {
    const normalizedExpected = expected.map((exp, index) => {
      const rec = receivedValue[index];
      if (isRegExp(exp))
        return exp.test(rec) ? rec : exp;
      return exp;
    });
    printedDiff = this.utils.printDiffOrStringify(
      normalizedExpected,
      receivedValue,
      EXPECTED_LABEL2,
      RECEIVED_LABEL2,
      false
    );
  } else {
    printedDiff = this.utils.printDiffOrStringify(
      expected,
      receivedValue,
      EXPECTED_LABEL2,
      RECEIVED_LABEL2,
      false
    );
  }
  const message = () => {
    return formatMatcherMessage(this.utils, {
      isNot: this.isNot,
      promise: this.promise,
      matcherName,
      expectation: "expected",
      locator: locator.toString(),
      timeout,
      timedOut,
      printedExpected,
      printedReceived,
      printedDiff,
      errorMessage,
      log
    });
  };
  return {
    actual: receivedValue,
    expected,
    message,
    name: matcherName,
    pass,
    log,
    timeout: timedOut ? timeout : void 0,
    ariaSnapshot: received?.ariaSnapshot
  };
}

// packages/playwright/src/matchers/toHaveURL.ts
var { urlMatches } = require("playwright-core/lib/coreBundle").iso;
async function toHaveURLWithPredicate(page, expected, options) {
  const matcherName = "toHaveURL";
  const timeout = options?.timeout ?? this.timeout;
  const baseURL = page.context()._options.baseURL;
  let conditionSucceeded = false;
  let lastCheckedURLString = void 0;
  try {
    await page.mainFrame().waitForURL(
      (url) => {
        lastCheckedURLString = url.toString();
        if (options?.ignoreCase) {
          return !this.isNot === urlMatches(
            baseURL?.toLocaleLowerCase(),
            lastCheckedURLString.toLocaleLowerCase(),
            expected
          );
        }
        return !this.isNot === urlMatches(baseURL, lastCheckedURLString, expected);
      },
      { timeout }
    );
    conditionSucceeded = true;
  } catch (e) {
    conditionSucceeded = false;
  }
  if (conditionSucceeded)
    return { name: matcherName, pass: !this.isNot, message: () => "" };
  return {
    name: matcherName,
    pass: this.isNot,
    message: () => toHaveURLMessage(
      this,
      matcherName,
      expected,
      lastCheckedURLString,
      this.isNot,
      true,
      timeout
    ),
    actual: lastCheckedURLString,
    timeout
  };
}
function toHaveURLMessage(state, matcherName, expected, received, pass, timedOut, timeout) {
  const receivedString = received || "";
  let printedReceived;
  let printedExpected;
  let printedDiff;
  if (typeof expected === "function") {
    printedExpected = `Expected: predicate to ${!state.isNot ? "succeed" : "fail"}`;
    printedReceived = `Received: ${state.utils.printReceived(receivedString)}`;
  } else {
    if (pass) {
      printedExpected = `Expected pattern: not ${state.utils.printExpected(expected)}`;
      const formattedReceived = printReceivedStringContainExpectedResult2(state.utils, receivedString, null);
      printedReceived = `Received string: ${formattedReceived}`;
    } else {
      const labelExpected = `Expected ${typeof expected === "string" ? "string" : "pattern"}`;
      printedDiff = state.utils.printDiffOrStringify(expected, receivedString, labelExpected, "Received string", false);
    }
  }
  return formatMatcherMessage(state.utils, {
    isNot: state.isNot,
    promise: state.promise,
    matcherName,
    expectation: "expected",
    timeout,
    timedOut,
    printedExpected,
    printedReceived,
    printedDiff
  });
}

// packages/playwright/src/matchers/toMatchText.ts
async function toMatchText(matcherName, receiver, receiverType, query, expected, options = {}) {
  expectTypes(receiver, [receiverType], matcherName);
  const locator = receiverType === "Locator" ? receiver : void 0;
  if (!(typeof expected === "string") && !(expected && typeof expected.test === "function")) {
    const errorMessage2 = `Error: ${this.utils.EXPECTED_COLOR("expected")} value must be a string or regular expression
${this.utils.printWithType("Expected", expected, this.utils.printExpected)}`;
    throw new Error(formatMatcherMessage(this.utils, { promise: this.promise, isNot: this.isNot, locator: locator?.toString(), matcherName, expectation: "expected", errorMessage: errorMessage2 }));
  }
  const timeout = options.timeout ?? this.timeout;
  const { matches: pass, received, log, timedOut, errorMessage } = await query(!!this.isNot, timeout);
  if (pass === !this.isNot) {
    return {
      name: matcherName,
      message: () => "",
      pass,
      expected
    };
  }
  const expectedSuffix = typeof expected === "string" ? options.matchSubstring ? " substring" : "" : " pattern";
  const receivedSuffix = typeof expected === "string" ? options.matchSubstring ? " string" : "" : " string";
  const receivedValue = received?.value;
  const receivedString = receivedValue || "";
  let printedReceived;
  let printedExpected;
  let printedDiff;
  if (pass) {
    if (typeof expected === "string") {
      printedExpected = `Expected${expectedSuffix}: not ${this.utils.printExpected(expected)}`;
      if (!errorMessage) {
        const formattedReceived = printReceivedStringContainExpectedSubstring2(this.utils, receivedString, receivedString.indexOf(expected), expected.length);
        printedReceived = `Received${receivedSuffix}: ${formattedReceived}`;
      }
    } else {
      printedExpected = `Expected${expectedSuffix}: not ${this.utils.printExpected(expected)}`;
      if (!errorMessage) {
        const formattedReceived = printReceivedStringContainExpectedResult2(this.utils, receivedString, typeof expected.exec === "function" ? expected.exec(receivedString) : null);
        printedReceived = `Received${receivedSuffix}: ${formattedReceived}`;
      }
    }
  } else {
    if (errorMessage)
      printedExpected = `Expected${expectedSuffix}: ${this.utils.printExpected(expected)}`;
    else
      printedDiff = this.utils.printDiffOrStringify(expected, receivedString, `Expected${expectedSuffix}`, `Received${receivedSuffix}`, false);
  }
  const message = () => {
    return formatMatcherMessage(this.utils, {
      promise: this.promise,
      isNot: this.isNot,
      matcherName,
      expectation: "expected",
      locator: locator?.toString(),
      timeout,
      timedOut,
      printedExpected,
      printedReceived,
      printedDiff,
      log,
      errorMessage
    });
  };
  return {
    name: matcherName,
    expected,
    message,
    pass,
    actual: receivedValue,
    log,
    timeout: timedOut ? timeout : void 0,
    ariaSnapshot: received?.ariaSnapshot
  };
}

// packages/playwright/src/matchers/toMatchSnapshot.ts
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
var colors = require("playwright-core/lib/utilsBundle").colors;
var { getMimeTypeForPath } = require("playwright-core/lib/coreBundle").iso;
var { isString } = require("playwright-core/lib/coreBundle").iso;
var { compareBuffersOrStrings, getComparator } = require("playwright-core/lib/coreBundle").utils;
var { addSuffixToFilePath } = require("playwright-core/lib/coreBundle").utils;
var NonConfigProperties = [
  "clip",
  "fullPage",
  "mask",
  "maskColor",
  "omitBackground",
  "timeout"
];
var SnapshotHelper = class {
  constructor(state, testInfo, matcherName, locator, anonymousSnapshotExtension, configOptions, nameOrOptions, optOptions) {
    let name;
    if (Array.isArray(nameOrOptions) || typeof nameOrOptions === "string") {
      name = nameOrOptions;
      this.options = { ...optOptions };
    } else {
      const { name: nameFromOptions, ...options } = nameOrOptions;
      this.options = options;
      name = nameFromOptions;
    }
    this.name = Array.isArray(name) ? name.join(import_path.default.sep) : name || "";
    const resolvedPaths = testInfo._resolveSnapshotPaths(matcherName === "toHaveScreenshot" ? "screenshot" : "snapshot", name, "updateSnapshotIndex", anonymousSnapshotExtension);
    this.expectedPath = resolvedPaths.absoluteSnapshotPath;
    this.attachmentBaseName = resolvedPaths.relativeOutputPath;
    const outputBasePath = testInfo._getOutputPath(resolvedPaths.relativeOutputPath);
    this.legacyExpectedPath = addSuffixToFilePath(outputBasePath, "-expected");
    this.previousPath = addSuffixToFilePath(outputBasePath, "-previous");
    this.actualPath = addSuffixToFilePath(outputBasePath, "-actual");
    this.diffPath = addSuffixToFilePath(outputBasePath, "-diff");
    const filteredConfigOptions = { ...configOptions };
    for (const prop of NonConfigProperties)
      delete filteredConfigOptions[prop];
    this.options = {
      ...filteredConfigOptions,
      ...this.options
    };
    if (this.options._comparator) {
      this.options.comparator = this.options._comparator;
      delete this.options._comparator;
    }
    if (this.options.maxDiffPixels !== void 0 && this.options.maxDiffPixels < 0)
      throw new Error("`maxDiffPixels` option value must be non-negative integer");
    if (this.options.maxDiffPixelRatio !== void 0 && (this.options.maxDiffPixelRatio < 0 || this.options.maxDiffPixelRatio > 1))
      throw new Error("`maxDiffPixelRatio` option value must be between 0 and 1");
    this.matcherName = matcherName;
    this.locator = locator;
    this.updateSnapshots = expectConfig().updateSnapshots;
    this.mimeType = getMimeTypeForPath(import_path.default.basename(this.expectedPath)) ?? "application/octet-stream";
    this.comparator = getComparator(this.mimeType);
    this.testInfo = testInfo;
    this.state = state;
    this.kind = this.mimeType.startsWith("image/") ? "Screenshot" : "Snapshot";
  }
  createMatcherResult(message, pass, log, attachments) {
    const unfiltered = {
      name: this.matcherName,
      expected: this.expectedPath,
      actual: this.actualPath,
      diff: this.diffPath,
      pass,
      message: () => message,
      log,
      attachments
    };
    return Object.fromEntries(Object.entries(unfiltered).filter(([_, v]) => v !== void 0));
  }
  handleMissingNegated() {
    const isWriteMissingMode = this.updateSnapshots !== "none";
    const message = `A snapshot doesn't exist at ${this.expectedPath}${isWriteMissingMode ? `, matchers using ".not" won't write them automatically.` : "."}`;
    return this.createMatcherResult(message, true);
  }
  handleDifferentNegated() {
    return this.createMatcherResult("", false);
  }
  handleMatchingNegated() {
    const message = [
      colors.red(`${this.kind} comparison failed:`),
      "",
      indent("Expected result should be different from the actual one.", "  ")
    ].join("\n");
    return this.createMatcherResult(message, true);
  }
  handleMissing(actual) {
    const attachments = [];
    const isWriteMissingMode = this.updateSnapshots !== "none";
    if (isWriteMissingMode)
      writeFileSync(this.expectedPath, actual);
    attachments.push({ name: addSuffixToFilePath(this.attachmentBaseName, "-expected"), contentType: this.mimeType, path: this.expectedPath });
    writeFileSync(this.actualPath, actual);
    attachments.push({ name: addSuffixToFilePath(this.attachmentBaseName, "-actual"), contentType: this.mimeType, path: this.actualPath });
    const message = `A snapshot doesn't exist at ${this.expectedPath}${isWriteMissingMode ? ", writing actual." : "."}`;
    if (this.updateSnapshots === "all" || this.updateSnapshots === "changed") {
      console.log(message);
      return this.createMatcherResult(message, true, void 0, attachments);
    }
    if (this.updateSnapshots === "missing") {
      return {
        ...this.createMatcherResult("", true, void 0, attachments),
        softError: new Error(message),
        shouldNotRetryTest: true
      };
    }
    return this.createMatcherResult(message, false, void 0, attachments);
  }
  handleDifferent(actual, expected, previous, diff2, header, diffError, log) {
    const output = [`${header}${indent(diffError, "  ")}`];
    if (this.name) {
      output.push("");
      output.push(`  Snapshot: ${this.name}`);
    }
    const attachments = [];
    if (expected !== void 0) {
      writeFileSync(this.legacyExpectedPath, expected);
      attachments.push({ name: addSuffixToFilePath(this.attachmentBaseName, "-expected"), contentType: this.mimeType, path: this.expectedPath });
    }
    if (previous !== void 0) {
      writeFileSync(this.previousPath, previous);
      attachments.push({ name: addSuffixToFilePath(this.attachmentBaseName, "-previous"), contentType: this.mimeType, path: this.previousPath });
    }
    if (actual !== void 0) {
      writeFileSync(this.actualPath, actual);
      attachments.push({ name: addSuffixToFilePath(this.attachmentBaseName, "-actual"), contentType: this.mimeType, path: this.actualPath });
    }
    if (diff2 !== void 0) {
      writeFileSync(this.diffPath, diff2);
      attachments.push({ name: addSuffixToFilePath(this.attachmentBaseName, "-diff"), contentType: this.mimeType, path: this.diffPath });
    }
    if (log?.length)
      output.push(callLogText(this.state.utils, log));
    else
      output.push("");
    return this.createMatcherResult(output.join("\n"), false, log, attachments);
  }
  handleMatching() {
    return this.createMatcherResult("", true);
  }
};
function toMatchSnapshot(received, nameOrOptions = {}, optOptions = {}) {
  const testInfo = expectConfig().testInfo;
  if (!testInfo)
    throw new Error(`toMatchSnapshot() must be called during the test`);
  if (received instanceof Promise)
    throw new Error("An unresolved Promise was passed to toMatchSnapshot(), make sure to resolve it by adding await to it.");
  if (expectConfig().ignoreSnapshots)
    return { pass: !this.isNot, message: () => "", name: "toMatchSnapshot", expected: nameOrOptions };
  const configOptions = expectConfig().toMatchSnapshot || {};
  const helper = new SnapshotHelper(
    this,
    testInfo,
    "toMatchSnapshot",
    void 0,
    "." + determineFileExtension(received),
    configOptions,
    nameOrOptions,
    optOptions
  );
  if (this.isNot) {
    if (!import_fs.default.existsSync(helper.expectedPath))
      return helper.handleMissingNegated();
    const isDifferent = !!helper.comparator(received, import_fs.default.readFileSync(helper.expectedPath), helper.options);
    return isDifferent ? helper.handleDifferentNegated() : helper.handleMatchingNegated();
  }
  if (!import_fs.default.existsSync(helper.expectedPath))
    return helper.handleMissing(received);
  const expected = import_fs.default.readFileSync(helper.expectedPath);
  if (helper.updateSnapshots === "all") {
    if (!compareBuffersOrStrings(received, expected))
      return helper.handleMatching();
    writeFileSync(helper.expectedPath, received);
    console.log(helper.expectedPath + " is not the same, writing actual.");
    return helper.createMatcherResult(helper.expectedPath + " running with --update-snapshots, writing actual.", true);
  }
  if (helper.updateSnapshots === "changed") {
    const result2 = helper.comparator(received, expected, helper.options);
    if (!result2)
      return helper.handleMatching();
    writeFileSync(helper.expectedPath, received);
    console.log(helper.expectedPath + " does not match, writing actual.");
    return helper.createMatcherResult(helper.expectedPath + " running with --update-snapshots, writing actual.", true);
  }
  const result = helper.comparator(received, expected, helper.options);
  if (!result)
    return helper.handleMatching();
  const header = formatMatcherMessage(this.utils, { promise: this.promise, isNot: this.isNot, matcherName: "toMatchSnapshot", receiver: isString(received) ? "string" : "Buffer", expectation: "expected" });
  return helper.handleDifferent(received, expected, void 0, result.diff, header, result.errorMessage, void 0);
}
function toHaveScreenshotStepTitle(nameOrOptions = {}, optOptions = {}) {
  let name;
  if (typeof nameOrOptions === "object" && !Array.isArray(nameOrOptions))
    name = nameOrOptions.name;
  else
    name = nameOrOptions;
  return Array.isArray(name) ? name.join(import_path.default.sep) : name || "";
}
async function toHaveScreenshot(pageOrLocator, nameOrOptions = {}, optOptions = {}) {
  const testInfo = expectConfig().testInfo;
  if (!testInfo)
    throw new Error(`toHaveScreenshot() must be called during the test`);
  if (expectConfig().ignoreSnapshots)
    return { pass: !this.isNot, message: () => "", name: "toHaveScreenshot", expected: nameOrOptions };
  expectTypes(pageOrLocator, ["Page", "Locator"], "toHaveScreenshot");
  const [page, locator] = pageOrLocator._apiName === "Page" ? [pageOrLocator, void 0] : [pageOrLocator.page(), pageOrLocator];
  const configOptions = expectConfig().toHaveScreenshot || {};
  const helper = new SnapshotHelper(this, testInfo, "toHaveScreenshot", locator, void 0, configOptions, nameOrOptions, optOptions);
  if (!helper.expectedPath.toLowerCase().endsWith(".png"))
    throw new Error(`Screenshot name "${import_path.default.basename(helper.expectedPath)}" must have '.png' extension`);
  expectTypes(pageOrLocator, ["Page", "Locator"], "toHaveScreenshot");
  const style = await loadScreenshotStyles(helper.options.stylePath);
  const timeout = helper.options.timeout ?? this.timeout;
  const expectScreenshotOptions = {
    locator,
    animations: helper.options.animations ?? "disabled",
    caret: helper.options.caret ?? "hide",
    clip: helper.options.clip,
    fullPage: helper.options.fullPage,
    mask: helper.options.mask,
    maskColor: helper.options.maskColor,
    omitBackground: helper.options.omitBackground,
    scale: helper.options.scale ?? "css",
    style,
    isNot: !!this.isNot,
    timeout,
    comparator: helper.options.comparator,
    maxDiffPixels: helper.options.maxDiffPixels,
    maxDiffPixelRatio: helper.options.maxDiffPixelRatio,
    threshold: helper.options.threshold
  };
  const hasSnapshot = import_fs.default.existsSync(helper.expectedPath);
  if (this.isNot) {
    if (!hasSnapshot)
      return helper.handleMissingNegated();
  }
  if (!this.isNot && helper.updateSnapshots === "none" && !hasSnapshot)
    return helper.createMatcherResult(`A snapshot doesn't exist at ${helper.expectedPath}.`, false);
  await page.screencast.hideOverlays();
  try {
    if (this.isNot) {
      expectScreenshotOptions.expected = await import_fs.default.promises.readFile(helper.expectedPath);
      const isDifferent = !(await page._expectScreenshot(expectScreenshotOptions)).errorMessage;
      return isDifferent ? helper.handleDifferentNegated() : helper.handleMatchingNegated();
    }
    if (!hasSnapshot) {
      const { actual: actual2, previous: previous2, diff: diff3, errorMessage: errorMessage2, log: log2, timedOut: timedOut2 } = await page._expectScreenshot(expectScreenshotOptions);
      if (errorMessage2) {
        const header2 = formatMatcherMessage(this.utils, { promise: this.promise, isNot: this.isNot, matcherName: "toHaveScreenshot", locator: locator?.toString(), expectation: "expected", timeout, timedOut: timedOut2 });
        return helper.handleDifferent(actual2, void 0, previous2, diff3, header2, errorMessage2, log2);
      }
      return helper.handleMissing(actual2);
    }
    const expected = await import_fs.default.promises.readFile(helper.expectedPath);
    expectScreenshotOptions.expected = helper.updateSnapshots === "all" ? void 0 : expected;
    const { actual, previous, diff: diff2, errorMessage, log, timedOut } = await page._expectScreenshot(expectScreenshotOptions);
    const writeFiles = (actualBuffer) => {
      writeFileSync(helper.expectedPath, actualBuffer);
      writeFileSync(helper.actualPath, actualBuffer);
      console.log(helper.expectedPath + " is re-generated, writing actual.");
      return helper.createMatcherResult(helper.expectedPath + " running with --update-snapshots, writing actual.", true);
    };
    if (!errorMessage) {
      if (helper.updateSnapshots === "all" && actual && compareBuffersOrStrings(actual, expected)) {
        console.log(helper.expectedPath + " is re-generated, writing actual.");
        return writeFiles(actual);
      }
      return helper.handleMatching();
    }
    if (helper.updateSnapshots === "changed" || helper.updateSnapshots === "all") {
      if (actual)
        return writeFiles(actual);
      let header2 = formatMatcherMessage(this.utils, { promise: this.promise, isNot: this.isNot, matcherName: "toHaveScreenshot", locator: locator?.toString(), expectation: "expected", timeout, timedOut });
      header2 += "  Failed to re-generate expected.\n";
      return helper.handleDifferent(actual, expectScreenshotOptions.expected, previous, diff2, header2, errorMessage, log);
    }
    const header = formatMatcherMessage(this.utils, { promise: this.promise, isNot: this.isNot, matcherName: "toHaveScreenshot", locator: locator?.toString(), expectation: "expected", timeout, timedOut });
    return helper.handleDifferent(actual, expectScreenshotOptions.expected, previous, diff2, header, errorMessage, log);
  } finally {
    await page.screencast.showOverlays();
  }
}
function writeFileSync(aPath, content) {
  import_fs.default.mkdirSync(import_path.default.dirname(aPath), { recursive: true });
  import_fs.default.writeFileSync(aPath, content);
}
function indent(lines, tab) {
  return lines.replace(/^(?=.+$)/gm, tab);
}
function determineFileExtension(file) {
  if (typeof file === "string")
    return "txt";
  if (compareMagicBytes(file, [137, 80, 78, 71, 13, 10, 26, 10]))
    return "png";
  if (compareMagicBytes(file, [255, 216, 255]))
    return "jpg";
  return "dat";
}
function compareMagicBytes(file, magicBytes) {
  return Buffer.compare(Buffer.from(magicBytes), file.slice(0, magicBytes.length)) === 0;
}
async function loadScreenshotStyles(stylePath) {
  if (!stylePath)
    return;
  const stylePaths = Array.isArray(stylePath) ? stylePath : [stylePath];
  const styles = await Promise.all(stylePaths.map(async (stylePath2) => {
    const text = await import_fs.default.promises.readFile(stylePath2, "utf8");
    return text.trim();
  }));
  return styles.join("\n").trim() || void 0;
}

// packages/playwright/src/matchers/matchers.ts
var colors2 = require("playwright-core/lib/utilsBundle").colors;
var { asLocatorDescription } = require("playwright-core/lib/coreBundle").iso;
var { isTextualMimeType } = require("playwright-core/lib/coreBundle").iso;
var { isRegExp: isRegExp2 } = require("playwright-core/lib/coreBundle").iso;
var { isString: isString2 } = require("playwright-core/lib/coreBundle").iso;
var { pollAgainstDeadline } = require("playwright-core/lib/coreBundle").iso;
var { constructURLBasedOnBaseURL, isURLPattern } = require("playwright-core/lib/coreBundle").iso;
var { serializeExpectedTextValues } = require("playwright-core/lib/coreBundle").iso;
var { monotonicTime } = require("playwright-core/lib/coreBundle").iso;
function toBeAttached(locator, options) {
  const attached = !options || options.attached === void 0 || options.attached;
  const expected = attached ? "attached" : "detached";
  const arg = attached ? "" : "{ attached: false }";
  return toBeTruthy.call(this, "toBeAttached", locator, "Locator", expected, arg, async (isNot, timeout) => {
    return await locator._expect(attached ? "to.be.attached" : "to.be.detached", { isNot, timeout });
  }, options);
}
function toBeChecked(locator, options) {
  const checked = options?.checked;
  const indeterminate = options?.indeterminate;
  const expectedValue = {
    checked,
    indeterminate
  };
  let expected;
  let arg;
  if (options?.indeterminate) {
    expected = "indeterminate";
    arg = `{ indeterminate: true }`;
  } else {
    expected = options?.checked === false ? "unchecked" : "checked";
    arg = options?.checked === false ? `{ checked: false }` : "";
  }
  return toBeTruthy.call(this, "toBeChecked", locator, "Locator", expected, arg, async (isNot, timeout) => {
    return await locator._expect("to.be.checked", { isNot, timeout, expectedValue });
  }, options);
}
function toBeDisabled(locator, options) {
  return toBeTruthy.call(this, "toBeDisabled", locator, "Locator", "disabled", "", async (isNot, timeout) => {
    return await locator._expect("to.be.disabled", { isNot, timeout });
  }, options);
}
function toBeEditable(locator, options) {
  const editable = !options || options.editable === void 0 || options.editable;
  const expected = editable ? "editable" : "readOnly";
  const arg = editable ? "" : "{ editable: false }";
  return toBeTruthy.call(this, "toBeEditable", locator, "Locator", expected, arg, async (isNot, timeout) => {
    return await locator._expect(editable ? "to.be.editable" : "to.be.readonly", { isNot, timeout });
  }, options);
}
function toBeEmpty(locator, options) {
  return toBeTruthy.call(this, "toBeEmpty", locator, "Locator", "empty", "", async (isNot, timeout) => {
    return await locator._expect("to.be.empty", { isNot, timeout });
  }, options);
}
function toBeEnabled(locator, options) {
  const enabled = !options || options.enabled === void 0 || options.enabled;
  const expected = enabled ? "enabled" : "disabled";
  const arg = enabled ? "" : "{ enabled: false }";
  return toBeTruthy.call(this, "toBeEnabled", locator, "Locator", expected, arg, async (isNot, timeout) => {
    return await locator._expect(enabled ? "to.be.enabled" : "to.be.disabled", { isNot, timeout });
  }, options);
}
function toBeFocused(locator, options) {
  return toBeTruthy.call(this, "toBeFocused", locator, "Locator", "focused", "", async (isNot, timeout) => {
    return await locator._expect("to.be.focused", { isNot, timeout });
  }, options);
}
function toBeHidden(locator, options) {
  return toBeTruthy.call(this, "toBeHidden", locator, "Locator", "hidden", "", async (isNot, timeout) => {
    return await locator._expect("to.be.hidden", { isNot, timeout });
  }, options);
}
function toBeVisible(locator, options) {
  const visible = !options || options.visible === void 0 || options.visible;
  const expected = visible ? "visible" : "hidden";
  const arg = visible ? "" : "{ visible: false }";
  return toBeTruthy.call(this, "toBeVisible", locator, "Locator", expected, arg, async (isNot, timeout) => {
    return await locator._expect(visible ? "to.be.visible" : "to.be.hidden", { isNot, timeout });
  }, options);
}
function toBeInViewport(locator, options) {
  return toBeTruthy.call(this, "toBeInViewport", locator, "Locator", "in viewport", "", async (isNot, timeout) => {
    return await locator._expect("to.be.in.viewport", { isNot, expectedNumber: options?.ratio, timeout });
  }, options);
}
function toContainText(locator, expected, options = {}) {
  if (Array.isArray(expected)) {
    return toEqual.call(this, "toContainText", locator, "Locator", async (isNot, timeout) => {
      const expectedText = serializeExpectedTextValues(expected, { matchSubstring: true, normalizeWhiteSpace: true, ignoreCase: options.ignoreCase });
      return await locator._expect("to.contain.text.array", { expectedText, isNot, useInnerText: options.useInnerText, timeout });
    }, expected, { ...options, contains: true });
  } else {
    return toMatchText.call(this, "toContainText", locator, "Locator", async (isNot, timeout) => {
      const expectedText = serializeExpectedTextValues([expected], { matchSubstring: true, normalizeWhiteSpace: true, ignoreCase: options.ignoreCase });
      return await locator._expect("to.have.text", { expectedText, isNot, useInnerText: options.useInnerText, timeout });
    }, expected, { ...options, matchSubstring: true });
  }
}
function toHaveAccessibleDescription(locator, expected, options) {
  return toMatchText.call(this, "toHaveAccessibleDescription", locator, "Locator", async (isNot, timeout) => {
    const expectedText = serializeExpectedTextValues([expected], { ignoreCase: options?.ignoreCase, normalizeWhiteSpace: true });
    return await locator._expect("to.have.accessible.description", { expectedText, isNot, timeout });
  }, expected, options);
}
function toHaveAccessibleName(locator, expected, options) {
  return toMatchText.call(this, "toHaveAccessibleName", locator, "Locator", async (isNot, timeout) => {
    const expectedText = serializeExpectedTextValues([expected], { ignoreCase: options?.ignoreCase, normalizeWhiteSpace: true });
    return await locator._expect("to.have.accessible.name", { expectedText, isNot, timeout });
  }, expected, options);
}
function toHaveAccessibleErrorMessage(locator, expected, options) {
  return toMatchText.call(this, "toHaveAccessibleErrorMessage", locator, "Locator", async (isNot, timeout) => {
    const expectedText = serializeExpectedTextValues([expected], { ignoreCase: options?.ignoreCase, normalizeWhiteSpace: true });
    return await locator._expect("to.have.accessible.error.message", { expectedText, isNot, timeout });
  }, expected, options);
}
function toHaveAttribute(locator, name, expected, options) {
  if (!options) {
    if (typeof expected === "object" && !isRegExp2(expected)) {
      options = expected;
      expected = void 0;
    }
  }
  if (expected === void 0) {
    return toBeTruthy.call(this, "toHaveAttribute", locator, "Locator", "have attribute", "", async (isNot, timeout) => {
      return await locator._expect("to.have.attribute", { expressionArg: name, isNot, timeout });
    }, options);
  }
  return toMatchText.call(this, "toHaveAttribute", locator, "Locator", async (isNot, timeout) => {
    const expectedText = serializeExpectedTextValues([expected], { ignoreCase: options?.ignoreCase });
    return await locator._expect("to.have.attribute.value", { expressionArg: name, expectedText, isNot, timeout });
  }, expected, options);
}
function toHaveClass(locator, expected, options) {
  if (Array.isArray(expected)) {
    return toEqual.call(this, "toHaveClass", locator, "Locator", async (isNot, timeout) => {
      const expectedText = serializeExpectedTextValues(expected);
      return await locator._expect("to.have.class.array", { expectedText, isNot, timeout });
    }, expected, options);
  } else {
    return toMatchText.call(this, "toHaveClass", locator, "Locator", async (isNot, timeout) => {
      const expectedText = serializeExpectedTextValues([expected]);
      return await locator._expect("to.have.class", { expectedText, isNot, timeout });
    }, expected, options);
  }
}
function toContainClass(locator, expected, options) {
  if (Array.isArray(expected)) {
    if (expected.some((e) => isRegExp2(e)))
      throw new Error(`"expected" argument in toContainClass cannot contain RegExp values`);
    return toEqual.call(this, "toContainClass", locator, "Locator", async (isNot, timeout) => {
      const expectedText = serializeExpectedTextValues(expected);
      return await locator._expect("to.contain.class.array", { expectedText, isNot, timeout });
    }, expected, options);
  } else {
    if (isRegExp2(expected))
      throw new Error(`"expected" argument in toContainClass cannot be a RegExp value`);
    return toMatchText.call(this, "toContainClass", locator, "Locator", async (isNot, timeout) => {
      const expectedText = serializeExpectedTextValues([expected]);
      return await locator._expect("to.contain.class", { expectedText, isNot, timeout });
    }, expected, options);
  }
}
function toHaveCount(locator, expected, options) {
  return toEqual.call(this, "toHaveCount", locator, "Locator", async (isNot, timeout) => {
    return await locator._expect("to.have.count", { expectedNumber: expected, isNot, timeout });
  }, expected, options);
}
function toHaveCSS(locator, name, expected, options) {
  return toMatchText.call(this, "toHaveCSS", locator, "Locator", async (isNot, timeout) => {
    const expectedText = serializeExpectedTextValues([expected]);
    return await locator._expect("to.have.css", { expressionArg: name, expectedText, isNot, pseudo: options?.pseudo, timeout });
  }, expected, options);
}
function toHaveId(locator, expected, options) {
  return toMatchText.call(this, "toHaveId", locator, "Locator", async (isNot, timeout) => {
    const expectedText = serializeExpectedTextValues([expected]);
    return await locator._expect("to.have.id", { expectedText, isNot, timeout });
  }, expected, options);
}
function toHaveJSProperty(locator, name, expected, options) {
  return toEqual.call(this, "toHaveJSProperty", locator, "Locator", async (isNot, timeout) => {
    return await locator._expect("to.have.property", { expressionArg: name, expectedValue: expected, isNot, timeout });
  }, expected, options);
}
function toHaveRole(locator, expected, options) {
  if (!isString2(expected))
    throw new Error(`"role" argument in toHaveRole must be a string`);
  return toMatchText.call(this, "toHaveRole", locator, "Locator", async (isNot, timeout) => {
    const expectedText = serializeExpectedTextValues([expected]);
    return await locator._expect("to.have.role", { expectedText, isNot, timeout });
  }, expected, options);
}
function toHaveText(locator, expected, options = {}) {
  if (Array.isArray(expected)) {
    return toEqual.call(this, "toHaveText", locator, "Locator", async (isNot, timeout) => {
      const expectedText = serializeExpectedTextValues(expected, { normalizeWhiteSpace: true, ignoreCase: options.ignoreCase });
      return await locator._expect("to.have.text.array", { expectedText, isNot, useInnerText: options?.useInnerText, timeout });
    }, expected, options);
  } else {
    return toMatchText.call(this, "toHaveText", locator, "Locator", async (isNot, timeout) => {
      const expectedText = serializeExpectedTextValues([expected], { normalizeWhiteSpace: true, ignoreCase: options.ignoreCase });
      return await locator._expect("to.have.text", { expectedText, isNot, useInnerText: options?.useInnerText, timeout });
    }, expected, options);
  }
}
function toHaveValue(locator, expected, options) {
  return toMatchText.call(this, "toHaveValue", locator, "Locator", async (isNot, timeout) => {
    const expectedText = serializeExpectedTextValues([expected]);
    return await locator._expect("to.have.value", { expectedText, isNot, timeout });
  }, expected, options);
}
function toHaveValues(locator, expected, options) {
  return toEqual.call(this, "toHaveValues", locator, "Locator", async (isNot, timeout) => {
    const expectedText = serializeExpectedTextValues(expected);
    return await locator._expect("to.have.values", { expectedText, isNot, timeout });
  }, expected, options);
}
function toHaveTitle(page, expected, options = {}) {
  return toMatchText.call(this, "toHaveTitle", page, "Page", async (isNot, timeout) => {
    const expectedText = serializeExpectedTextValues([expected], { normalizeWhiteSpace: true });
    return await page.mainFrame()._expect("to.have.title", { expectedText, isNot, timeout });
  }, expected, options);
}
function toHaveURL(page, expected, options) {
  if (isURLPattern(expected))
    return toHaveURLWithPredicate.call(this, page, (url) => expected.test(url.href), options);
  if (typeof expected === "function")
    return toHaveURLWithPredicate.call(this, page, expected, options);
  const baseURL = page.context()._options.baseURL;
  expected = typeof expected === "string" ? constructURLBasedOnBaseURL(baseURL, expected) : expected;
  return toMatchText.call(this, "toHaveURL", page, "Page", async (isNot, timeout) => {
    const expectedText = serializeExpectedTextValues([expected], { ignoreCase: options?.ignoreCase });
    return await page.mainFrame()._expect("to.have.url", { expectedText, isNot, timeout });
  }, expected, options);
}
async function toBeOK(response) {
  const matcherName = "toBeOK";
  expectTypes(response, ["APIResponse"], matcherName);
  const contentType = response.headers()["content-type"];
  const isTextEncoding = contentType && isTextualMimeType(contentType);
  const [log, text] = this.isNot === response.ok() ? await Promise.all([
    response._fetchLog(),
    isTextEncoding ? response.text() : null
  ]) : [];
  const message = () => formatMatcherMessage(this.utils, {
    isNot: this.isNot,
    promise: this.promise,
    matcherName,
    receiver: "response",
    expectation: "",
    log
  }) + (text === null ? "" : `
Response text:
${colors2.dim(text?.substring(0, 1e3) || "")}`);
  const pass = response.ok();
  return { message, pass };
}
async function toPass(callback, options = {}) {
  const testInfo = expectConfig().testInfo;
  const timeout = options.timeout ?? expectConfig().toPass?.timeout ?? 0;
  const intervals = options.intervals ?? expectConfig().toPass?.intervals ?? [100, 250, 500, 1e3];
  const { deadline, timeoutMessage } = deadlineForMatcher(testInfo, timeout);
  const result = await pollAgainstDeadline(async () => {
    if (testInfo && expectConfig().testInfo !== testInfo)
      return { continuePolling: false, result: void 0 };
    try {
      await callback();
      return { continuePolling: !!this.isNot, result: void 0 };
    } catch (e) {
      return { continuePolling: !this.isNot, result: e };
    }
  }, deadline, intervals);
  if (result.timedOut) {
    const message = result.result ? [
      result.result.message,
      "",
      `Call Log:`,
      `- ${timeoutMessage}`
    ].join("\n") : timeoutMessage;
    return { message: () => message, pass: !!this.isNot };
  }
  return { pass: !this.isNot, message: () => "" };
}
function computeMatcherTitleSuffix(matcherName, receiver, args) {
  if (matcherName === "toHaveScreenshot") {
    const title = toHaveScreenshotStepTitle(...args);
    return { short: title ? `(${title})` : "" };
  }
  if (receiver && typeof receiver === "object" && receiver._apiName === "Locator") {
    try {
      return { long: " " + asLocatorDescription("javascript", receiver._selector) };
    } catch {
    }
  }
  return {};
}
function deadlineForMatcher(testInfo, timeout) {
  const startTime = monotonicTime();
  const matcherDeadline = timeout ? startTime + timeout : 0;
  const matcherMessage = `Timeout ${timeout}ms exceeded while waiting on the predicate`;
  if (!testInfo)
    return { deadline: matcherDeadline, timeoutMessage: matcherMessage };
  const { deadline: testDeadline, timeout: testTimeout } = testInfo._deadline();
  const effectiveTestDeadline = testDeadline - 250;
  const testMessage = `Test timeout of ${testTimeout}ms exceeded`;
  if (!matcherDeadline)
    return { deadline: effectiveTestDeadline, timeoutMessage: testMessage };
  return { deadline: Math.min(effectiveTestDeadline, matcherDeadline), timeoutMessage: effectiveTestDeadline < matcherDeadline ? testMessage : matcherMessage };
}

// packages/playwright/src/matchers/toMatchAriaSnapshot.ts
var import_fs2 = __toESM(require("fs"));
var import_path2 = __toESM(require("path"));
var { escapeTemplateString, isString: isString3 } = require("playwright-core/lib/coreBundle").iso;
var { existsAsync } = require("playwright-core/lib/coreBundle").utils;
async function toMatchAriaSnapshot(receiver, expectedParam, options = {}) {
  const matcherName = "toMatchAriaSnapshot";
  expectTypes(receiver, ["Page", "Locator"], matcherName);
  const locator = receiver._apiName === "Page" ? void 0 : receiver;
  const testInfo = expectConfig().testInfo;
  if (!testInfo)
    throw new Error(`${matcherName}() must be called during the test`);
  if (expectConfig().ignoreSnapshots)
    return { pass: !this.isNot, message: () => "", name: "toMatchAriaSnapshot", expected: "" };
  const updateSnapshots = expectConfig().updateSnapshots;
  let expected;
  let timeout;
  let expectedPath;
  if (isString3(expectedParam)) {
    expected = expectedParam;
    timeout = options.timeout ?? this.timeout;
  } else {
    const legacyPath = testInfo._resolveSnapshotPaths("aria", expectedParam?.name, "dontUpdateSnapshotIndex", ".yml").absoluteSnapshotPath;
    expectedPath = testInfo._resolveSnapshotPaths("aria", expectedParam?.name, "updateSnapshotIndex").absoluteSnapshotPath;
    if (!await existsAsync(expectedPath) && await existsAsync(legacyPath))
      expectedPath = legacyPath;
    expected = await import_fs2.default.promises.readFile(expectedPath, "utf8").catch(() => "");
    timeout = expectedParam?.timeout ?? this.timeout;
  }
  const generateMissingBaseline = updateSnapshots === "missing" && !expected;
  if (generateMissingBaseline) {
    if (this.isNot) {
      const message2 = `Matchers using ".not" can't generate new baselines`;
      return { pass: this.isNot, message: () => message2, name: "toMatchAriaSnapshot" };
    } else {
      expected = `- none "Generating new baseline"`;
    }
  }
  expected = unshift(expected);
  const globalChildren = expectConfig().toMatchAriaSnapshot?.children;
  if (globalChildren && !expected.match(/^- \/children:/m))
    expected = `- /children: ${globalChildren}
` + expected;
  const expectParams = { expectedValue: expected, isNot: this.isNot, timeout };
  const { matches: pass, received, log, timedOut, errorMessage } = locator ? await locator._expect("to.match.aria", expectParams) : await receiver.mainFrame()._expect("to.match.aria", expectParams);
  const typedReceived = received?.value;
  const message = () => {
    let printedExpected;
    let printedReceived;
    let printedDiff;
    if (errorMessage) {
      printedExpected = `Expected: ${this.isNot ? "not " : ""}${this.utils.printExpected(expected)}`;
    } else if (pass) {
      const receivedString = printReceivedStringContainExpectedSubstring2(this.utils, typedReceived.raw, typedReceived.raw.indexOf(expected), expected.length);
      printedExpected = `Expected: not ${this.utils.printExpected(expected)}`;
      printedReceived = `Received: ${receivedString}`;
    } else {
      printedDiff = this.utils.printDiffOrStringify(expected, typedReceived.raw, "Expected", "Received", false);
    }
    return formatMatcherMessage(this.utils, {
      isNot: this.isNot,
      promise: this.promise,
      matcherName,
      expectation: "expected",
      locator: locator?.toString(),
      timeout,
      timedOut,
      printedExpected,
      printedReceived,
      printedDiff,
      errorMessage,
      log
    });
  };
  if (errorMessage)
    return { pass: this.isNot, message, name: "toMatchAriaSnapshot", expected };
  if (!this.isNot) {
    if (updateSnapshots === "all" || updateSnapshots === "changed" && pass === this.isNot || generateMissingBaseline) {
      if (expectedPath) {
        await import_fs2.default.promises.mkdir(import_path2.default.dirname(expectedPath), { recursive: true });
        await import_fs2.default.promises.writeFile(expectedPath, typedReceived.regex, "utf8");
        const relativePath = import_path2.default.relative(process.cwd(), expectedPath);
        if (updateSnapshots === "missing") {
          const message3 = `A snapshot doesn't exist at ${relativePath}, writing actual.`;
          return { pass: true, message: () => "", name: "toMatchAriaSnapshot", softError: new Error(message3), shouldNotRetryTest: true };
        }
        const message2 = `A snapshot is generated at ${relativePath}.`;
        console.log(message2);
        return { pass: true, message: () => "", name: "toMatchAriaSnapshot" };
      } else {
        const suggestedRebaseline = `\`
${escapeTemplateString(indent2(typedReceived.regex, "{indent}  "))}
{indent}\``;
        if (updateSnapshots === "missing") {
          const message2 = "A snapshot is not provided, generating new baseline.";
          return { pass: true, message: () => "", name: "toMatchAriaSnapshot", suggestedRebaseline, softError: new Error(message2), shouldNotRetryTest: true };
        }
        return { pass: true, message: () => "", name: "toMatchAriaSnapshot", suggestedRebaseline };
      }
    }
  }
  return {
    name: matcherName,
    expected,
    message,
    pass,
    actual: typedReceived?.raw,
    log,
    timeout: timedOut ? timeout : void 0
  };
}
function unshift(snapshot) {
  const lines = snapshot.split("\n");
  let whitespacePrefixLength = 100;
  for (const line of lines) {
    if (!line.trim())
      continue;
    const match = line.match(/^(\s*)/);
    if (match && match[1].length < whitespacePrefixLength)
      whitespacePrefixLength = match[1].length;
  }
  return lines.filter((t) => t.trim()).map((line) => line.substring(whitespacePrefixLength)).join("\n");
}
function indent2(snapshot, indent3) {
  return snapshot.split("\n").map((line) => indent3 + line).join("\n");
}

// packages/playwright/src/matchers/expect.ts
var { parseStackFrame, captureRawStack } = require("playwright-core/lib/coreBundle").iso;
var { escapeWithQuotes, isString: isString4 } = require("playwright-core/lib/coreBundle").iso;
var { pollAgainstDeadline: pollAgainstDeadline2 } = require("playwright-core/lib/coreBundle").iso;
var { currentZone } = require("playwright-core/lib/coreBundle").utils;
function unfilteredStackTrace(rawStack) {
  return rawStack.map((frame) => parseStackFrame(frame, import_path3.default.sep, !!process.env.PWDEBUGIMPL)).filter((f) => !!f);
}
var _expectConfig = { testInfo: null, filteredStackTrace: unfilteredStackTrace, ignoreSnapshots: false, updateSnapshots: "missing" };
function setExpectConfig(config) {
  _expectConfig = config;
}
function expectConfig() {
  return _expectConfig;
}
var META_INFO = Symbol("expectMetaInfo");
var defaultExpectTimeout = 5e3;
function throwUnsupportedExpectMatcherError() {
  throw new Error("It looks like you are using custom expect matchers that are not compatible with Playwright. See https://aka.ms/playwright/expect-compatibility");
}
var customAsyncMatchers = {
  toBeAttached,
  toBeChecked,
  toBeDisabled,
  toBeEditable,
  toBeEmpty,
  toBeEnabled,
  toBeFocused,
  toBeHidden,
  toBeInViewport,
  toBeOK,
  toBeVisible,
  toContainText,
  toContainClass,
  toHaveAccessibleDescription,
  toHaveAccessibleName,
  toHaveAccessibleErrorMessage,
  toHaveAttribute,
  toHaveClass,
  toHaveCount,
  toHaveCSS,
  toHaveId,
  toHaveJSProperty,
  toHaveRole,
  toHaveText,
  toHaveTitle,
  toHaveURL,
  toHaveValue,
  toHaveValues,
  toHaveScreenshot,
  toMatchAriaSnapshot,
  toPass
};
var allBuiltinMatchers = {
  ...matchers,
  toThrow: createThrowMatcher("toThrow"),
  toThrowError: createThrowMatcher("toThrowError"),
  ...customAsyncMatchers,
  toMatchSnapshot
};
var promiseThrowMatchers = {
  toThrow: createThrowMatcher("toThrow", true),
  toThrowError: createThrowMatcher("toThrowError", true)
};
function createExpect(info) {
  const expectFn = (actual, messageOrOptions) => createMatchers(actual, info, messageOrOptions);
  Object.defineProperty(expectFn, META_INFO, { value: info });
  expectFn.any = any;
  expectFn.anything = anything;
  expectFn.arrayContaining = arrayContaining;
  expectFn.arrayOf = arrayOf;
  expectFn.closeTo = closeTo;
  expectFn.objectContaining = objectContaining;
  expectFn.stringContaining = stringContaining;
  expectFn.stringMatching = stringMatching;
  const notAsymmetric = {
    arrayContaining: arrayNotContaining,
    arrayOf: notArrayOf,
    closeTo: notCloseTo,
    objectContaining: objectNotContaining,
    stringContaining: stringNotContaining,
    stringMatching: stringNotMatching
  };
  expectFn.not = notAsymmetric;
  for (const [name, matcher] of Object.entries(info.userMatchers)) {
    const { positive, inverse } = buildCustomAsymmetricMatcher(name, matcher);
    expectFn[name] = positive;
    notAsymmetric[name] = inverse;
  }
  expectFn.getState = () => ({});
  expectFn.configure = (configuration) => {
    const newInfo = { ...info };
    if ("message" in configuration)
      newInfo.message = configuration.message;
    if ("timeout" in configuration)
      newInfo.timeout = configuration.timeout;
    if ("soft" in configuration)
      newInfo.isSoft = configuration.soft;
    return createExpect(newInfo);
  };
  expectFn.soft = (actual, messageOrOptions) => {
    return createMatchers(actual, { ...info, isSoft: true }, messageOrOptions);
  };
  expectFn.poll = (actual, messageOrOptions) => {
    const poll = isString4(messageOrOptions) ? {} : messageOrOptions || {};
    return createMatchers(actual, { ...info, poll: { timeout: poll.timeout, intervals: poll.intervals } }, messageOrOptions);
  };
  expectFn.extend = (matchers2) => {
    for (const [name, m] of Object.entries(matchers2)) {
      if (typeof m !== "function")
        throw new TypeError(`expect.extend: \`${name}\` is not a valid matcher. Must be a function, is "${typeof m}"`);
    }
    Object.assign(info.userMatchers, matchers2);
    for (const [name, matcher] of Object.entries(matchers2)) {
      const { positive, inverse } = buildCustomAsymmetricMatcher(name, matcher);
      expectFn[name] = positive;
      notAsymmetric[name] = inverse;
    }
    return createExpect({
      ...info,
      userMatchers: { ...info.userMatchers, ...matchers2 }
    });
  };
  return expectFn;
}
function createMatchers(actual, originalInfo, messageOrOptions) {
  const message = isString4(messageOrOptions) ? messageOrOptions : messageOrOptions?.message || originalInfo.message;
  const info = { ...originalInfo, message };
  const result = { not: {}, resolves: { not: {} }, rejects: { not: {} } };
  const notInfo = { ...info, isNot: !info.isNot };
  for (const [name, matcher] of Object.entries({ ...allBuiltinMatchers, ...info.userMatchers })) {
    result[name] = createMatcher(name, info, actual, matcher);
    result.not[name] = createMatcher(name, notInfo, actual, matcher);
    const promiseMatcher = promiseThrowMatchers[name] ?? matcher;
    result.resolves[name] = createMatcher(name, info, actual, promiseMatcher, "resolves");
    result.resolves.not[name] = createMatcher(name, notInfo, actual, promiseMatcher, "resolves");
    result.rejects[name] = createMatcher(name, info, actual, promiseMatcher, "rejects");
    result.rejects.not[name] = createMatcher(name, notInfo, actual, promiseMatcher, "rejects");
  }
  return result;
}
function createMatcher(matcherName, info, actual, matcher, promise) {
  return (...args) => callMatcherAsStep(matcherName, info, actual, matcher, args, promise);
}
function callMatcherAsStep(matcherName, info, actual, matcher, args, promise) {
  const testInfo = expectConfig().testInfo;
  const customMessage = info.message || "";
  const suffixes = computeMatcherTitleSuffix(matcherName, actual, args);
  const defaultTitle = `${info.poll ? "poll " : ""}${info.isSoft ? "soft " : ""}${info.isNot ? "not " : ""}${matcherName}${suffixes.short || ""}`;
  const shortTitle = customMessage || `Expect ${escapeWithQuotes(defaultTitle, '"')}`;
  const longTitle = shortTitle + (suffixes.long || "");
  const apiName = `expect${info.poll ? ".poll " : ""}${info.isSoft ? ".soft " : ""}${info.isNot ? ".not" : ""}.${matcherName}${suffixes.short || ""}`;
  const stackFrames = expectConfig().filteredStackTrace(captureRawStack());
  const stepData = {
    category: "expect",
    apiName,
    title: longTitle,
    shortTitle,
    params: args[0] ? { expected: args[0] } : void 0
  };
  const step = testInfo?._addStep(stepData);
  const handleError = (error, result) => {
    if (info.isSoft && step) {
      step.complete({ ...result, error, softError: error });
    } else {
      step?.complete({ ...result, error });
      throw error;
    }
  };
  const finalizer = (result) => {
    validateMatcherResult(result);
    if (result.pass === !!info.isNot) {
      const error = new ExpectError({ ...result, name: matcherName, message: getMessage(result.message) }, customMessage, stackFrames);
      handleError(error, result);
    } else {
      step?.complete(result);
    }
  };
  try {
    const invoke = () => info.poll ? invokePollMatcher(matcherName, info, matcher, actual, args, promise) : invokeMatcher(matcherName, info, matcher, actual, args, promise);
    const result = step ? currentZone().with("stepZone", step).run(invoke) : invoke();
    if (result instanceof Promise)
      return result.then(finalizer, handleError);
    finalizer(result);
  } catch (error) {
    handleError(error);
  }
}
function invokeMatcher(matcherName, info, matcher, actual, args, promise) {
  const isNot = !!info.isNot;
  const timeout = info.timeout ?? expectConfig().timeout ?? defaultExpectTimeout;
  const matcherContext = {
    customTesters: [],
    isNot,
    promise: promise ?? "",
    utils,
    timeout,
    equals: throwUnsupportedExpectMatcherError
  };
  if (!promise)
    return matcher.call(matcherContext, actual, ...args);
  if (typeof actual === "function")
    actual = actual();
  if (!isPromise(actual))
    return { pass: false, message: createExpectedPromiseMessage(matcherName, isNot, promise, actual) };
  if (promise === "resolves") {
    return actual.then(
      (result) => matcher.call(matcherContext, result, ...args),
      (error) => ({ pass: false, message: createExpectedToResolveMessage(matcherName, isNot, promise, error) })
    );
  } else {
    return actual.then(
      (result) => ({ pass: false, message: createExpectedToRejectMessage(matcherName, isNot, promise, result) }),
      (error) => matcher.call(matcherContext, error, ...args)
    );
  }
}
async function invokePollMatcher(matcherName, info, matcher, actual, args, promise) {
  if (typeof actual !== "function")
    throw new Error("`expect.poll()` accepts only function as a first argument");
  if (promise || customAsyncMatchers[matcherName])
    throw new Error(`\`expect.poll()\` does not support "${promise ?? matcherName}" matcher.`);
  const testInfo = expectConfig().testInfo;
  const poll = info.poll;
  const timeout = poll.timeout ?? info.timeout ?? expectConfig().timeout ?? defaultExpectTimeout;
  const { deadline, timeoutMessage } = deadlineForMatcher(testInfo, timeout);
  const result = await pollAgainstDeadline2(async () => {
    if (testInfo && expectConfig().testInfo !== testInfo)
      return { continuePolling: false, result: void 0 };
    const value = await actual();
    try {
      await callMatcherAsStep(matcherName, { ...info, poll: void 0, isSoft: false }, value, matcher, args);
      return { continuePolling: false, result: void 0 };
    } catch (error) {
      return { continuePolling: true, result: error };
    }
  }, deadline, poll.intervals ?? [100, 250, 500, 1e3]);
  if (result.timedOut) {
    const message = result.result ? [
      result.result.message,
      "",
      `Call Log:`,
      `- ${timeoutMessage}`
    ].join("\n") : timeoutMessage;
    return { pass: !!info.isNot, message: () => message };
  }
  return { pass: !info.isNot, message: () => "" };
}
var expect = createExpect({ userMatchers: {} });
function mergeExpects(...expects) {
  let merged = expect;
  for (const e of expects) {
    const info = e[META_INFO];
    if (!info)
      continue;
    merged = merged.extend(info.userMatchers);
  }
  return merged;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  expect,
  expectConfig,
  mergeExpects,
  setExpectConfig
});
/*! Bundled license information:

@jest/get-type/build/index.js:
@jest/expect-utils/build/index.js:
pretty-format/build/index.js:
@jest/diff-sequences/build/index.js:
jest-diff/build/index.js:
jest-matcher-utils/build/index.js:
jest-message-util/build/index.js:
  (*!
   * /**
   *  * Copyright (c) Meta Platforms, Inc. and affiliates.
   *  *
   *  * This source code is licensed under the MIT license found in the
   *  * LICENSE file in the root directory of this source tree.
   *  * /
   *)

react-is/cjs/react-is.production.min.js:
  (**
   * @license React
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-is/cjs/react-is.development.js:
  (**
   * @license React
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

is-number/index.js:
  (*!
   * is-number <https://github.com/jonschlinkert/is-number>
   *
   * Copyright (c) 2014-present, Jon Schlinkert.
   * Released under the MIT License.
   *)

to-regex-range/index.js:
  (*!
   * to-regex-range <https://github.com/micromatch/to-regex-range>
   *
   * Copyright (c) 2015-present, Jon Schlinkert.
   * Released under the MIT License.
   *)

fill-range/index.js:
  (*!
   * fill-range <https://github.com/jonschlinkert/fill-range>
   *
   * Copyright (c) 2014-present, Jon Schlinkert.
   * Licensed under the MIT License.
   *)
*/
