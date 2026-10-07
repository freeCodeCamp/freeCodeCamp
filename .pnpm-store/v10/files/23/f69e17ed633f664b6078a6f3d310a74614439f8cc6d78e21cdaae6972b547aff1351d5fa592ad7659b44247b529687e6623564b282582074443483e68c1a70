"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tagged = exports.retried = exports.repeated = exports.make = exports.isTestAnnotation = exports.ignored = exports.fibers = exports.compose = exports.TestAnnotationTypeId = void 0;
var Chunk = _interopRequireWildcard(require("./Chunk.js"));
var Either = _interopRequireWildcard(require("./Either.js"));
var Equal = _interopRequireWildcard(require("./Equal.js"));
var _Function = require("./Function.js");
var Hash = _interopRequireWildcard(require("./Hash.js"));
var HashSet = _interopRequireWildcard(require("./HashSet.js"));
var _errors = require("./internal/errors.js");
var _Predicate = require("./Predicate.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 */

/** @internal */
const TestAnnotationSymbolKey = "effect/TestAnnotation";
/**
 * @since 2.0.0
 */
const TestAnnotationTypeId = exports.TestAnnotationTypeId = /*#__PURE__*/Symbol.for(TestAnnotationSymbolKey);
/** @internal */
class TestAnnotationImpl {
  identifier;
  initial;
  combine;
  [TestAnnotationTypeId] = {
    _A: _ => _
  };
  constructor(identifier, initial, combine) {
    this.identifier = identifier;
    this.initial = initial;
    this.combine = combine;
  }
  [Hash.symbol]() {
    return (0, _Function.pipe)(Hash.hash(TestAnnotationSymbolKey), Hash.combine(Hash.hash(this.identifier)), Hash.cached(this));
  }
  [Equal.symbol](that) {
    return isTestAnnotation(that) && this.identifier === that.identifier;
  }
}
/**
 * @since 2.0.0
 */
const isTestAnnotation = u => (0, _Predicate.hasProperty)(u, TestAnnotationTypeId);
/**
 * @since 2.0.0
 */
exports.isTestAnnotation = isTestAnnotation;
const make = (identifier, initial, combine) => {
  return new TestAnnotationImpl(identifier, initial, combine);
};
/**
 * @since 2.0.0
 */
exports.make = make;
const compose = (left, right) => {
  if (Either.isLeft(left) && Either.isLeft(right)) {
    return Either.left(left.left + right.left);
  }
  if (Either.isRight(left) && Either.isRight(right)) {
    return Either.right((0, _Function.pipe)(left.right, Chunk.appendAll(right.right)));
  }
  if (Either.isRight(left) && Either.isLeft(right)) {
    return right;
  }
  if (Either.isLeft(left) && Either.isRight(right)) {
    return right;
  }
  throw new Error((0, _errors.getBugErrorMessage)("TestAnnotation.compose"));
};
/**
 * @since 2.0.0
 */
exports.compose = compose;
const fibers = exports.fibers = /*#__PURE__*/make("fibers", /*#__PURE__*/Either.left(0), compose);
/**
 * An annotation which counts ignored tests.
 *
 * @since 2.0.0
 */
const ignored = exports.ignored = /*#__PURE__*/make("ignored", 0, (a, b) => a + b);
/**
 * An annotation which counts repeated tests.
 *
 * @since 2.0.0
 */
const repeated = exports.repeated = /*#__PURE__*/make("repeated", 0, (a, b) => a + b);
/**
 * An annotation which counts retried tests.
 *
 * @since 2.0.0
 */
const retried = exports.retried = /*#__PURE__*/make("retried", 0, (a, b) => a + b);
/**
 * An annotation which tags tests with strings.
 *
 * @since 2.0.0
 */
const tagged = exports.tagged = /*#__PURE__*/make("tagged", /*#__PURE__*/HashSet.empty(), (a, b) => (0, _Function.pipe)(a, HashSet.union(b)));
//# sourceMappingURL=TestAnnotation.js.map