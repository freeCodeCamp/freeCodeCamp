"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update = exports.overwrite = exports.make = exports.isTestAnnotationMap = exports.get = exports.empty = exports.combine = exports.annotate = exports.TestAnnotationMapTypeId = void 0;
var _Function = require("./Function.js");
var HashMap = _interopRequireWildcard(require("./HashMap.js"));
var _Predicate = require("./Predicate.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 */

/**
 * @since 2.0.0
 */
const TestAnnotationMapTypeId = exports.TestAnnotationMapTypeId = /*#__PURE__*/Symbol.for("effect/TestAnnotationMap");
/** @internal */
class TestAnnotationMapImpl {
  map;
  [TestAnnotationMapTypeId] = TestAnnotationMapTypeId;
  constructor(map) {
    this.map = map;
  }
}
/**
 * @since 2.0.0
 */
const isTestAnnotationMap = u => (0, _Predicate.hasProperty)(u, TestAnnotationMapTypeId);
/**
 * @since 2.0.0
 */
exports.isTestAnnotationMap = isTestAnnotationMap;
const empty = () => new TestAnnotationMapImpl(HashMap.empty());
/**
 * @since 2.0.0
 */
exports.empty = empty;
const make = map => {
  return new TestAnnotationMapImpl(map);
};
/**
 * @since 2.0.0
 */
exports.make = make;
const overwrite = exports.overwrite = /*#__PURE__*/(0, _Function.dual)(3, (self, key, value) => make(HashMap.set(self.map, key, value)));
/**
 * @since 2.0.0
 */
const update = exports.update = /*#__PURE__*/(0, _Function.dual)(3, (self, key, f) => {
  let value = key.initial;
  if (HashMap.has(self.map, key)) {
    value = HashMap.unsafeGet(self.map, key);
  }
  return overwrite(self, key, f(value));
});
/**
 * Retrieves the annotation of the specified type, or its default value if
 * there is none.
 *
 * @since 2.0.0
 */
const get = exports.get = /*#__PURE__*/(0, _Function.dual)(2, (self, key) => {
  if (HashMap.has(self.map, key)) {
    return HashMap.unsafeGet(self.map, key);
  }
  return key.initial;
});
/**
 * Appends the specified annotation to the annotation map.
 *
 * @since 2.0.0
 */
const annotate = exports.annotate = /*#__PURE__*/(0, _Function.dual)(3, (self, key, value) => update(self, key, _ => key.combine(_, value)));
/**
 * @since 2.0.0
 */
const combine = exports.combine = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => {
  let result = self.map;
  for (const entry of that.map) {
    if (HashMap.has(result, entry[0])) {
      const value = HashMap.get(result, entry[0]);
      result = HashMap.set(result, entry[0], entry[0].combine(value, entry[1]));
    } else {
      result = HashMap.set(result, entry[0], entry[1]);
    }
  }
  return make(result);
});
//# sourceMappingURL=TestAnnotationMap.js.map