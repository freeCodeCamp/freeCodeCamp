"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.make = exports.isTestAnnotations = exports.TestAnnotationsTypeId = exports.TestAnnotations = void 0;
var RA = _interopRequireWildcard(require("./Array.js"));
var Context = _interopRequireWildcard(require("./Context.js"));
var Equal = _interopRequireWildcard(require("./Equal.js"));
var _Function = require("./Function.js");
var effect = _interopRequireWildcard(require("./internal/core-effect.js"));
var core = _interopRequireWildcard(require("./internal/core.js"));
var fiber = _interopRequireWildcard(require("./internal/fiber.js"));
var MutableRef = _interopRequireWildcard(require("./MutableRef.js"));
var _Predicate = require("./Predicate.js");
var Ref = _interopRequireWildcard(require("./Ref.js"));
var SortedSet = _interopRequireWildcard(require("./SortedSet.js"));
var TestAnnotation = _interopRequireWildcard(require("./TestAnnotation.js"));
var TestAnnotationMap = _interopRequireWildcard(require("./TestAnnotationMap.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 */

/**
 * @since 2.0.0
 */
const TestAnnotationsTypeId = exports.TestAnnotationsTypeId = /*#__PURE__*/Symbol.for("effect/TestAnnotations");
/** @internal */
class AnnotationsImpl {
  ref;
  [TestAnnotationsTypeId] = TestAnnotationsTypeId;
  constructor(ref) {
    this.ref = ref;
  }
  get(key) {
    return core.map(Ref.get(this.ref), TestAnnotationMap.get(key));
  }
  annotate(key, value) {
    return Ref.update(this.ref, TestAnnotationMap.annotate(key, value));
  }
  get supervisedFibers() {
    return effect.descriptorWith(descriptor => core.flatMap(this.get(TestAnnotation.fibers), either => {
      switch (either._tag) {
        case "Left":
          {
            return core.succeed(SortedSet.empty(fiber.Order));
          }
        case "Right":
          {
            return (0, _Function.pipe)(either.right, core.forEachSequential(ref => core.sync(() => MutableRef.get(ref))), core.map(RA.reduce(SortedSet.empty(fiber.Order), (a, b) => SortedSet.union(a, b))), core.map(SortedSet.filter(fiber => !Equal.equals(fiber.id(), descriptor.id))));
          }
      }
    }));
  }
}
/**
 * @since 2.0.0
 */
const TestAnnotations = exports.TestAnnotations = /*#__PURE__*/Context.GenericTag("effect/Annotations");
/**
 * @since 2.0.0
 */
const isTestAnnotations = u => (0, _Predicate.hasProperty)(u, TestAnnotationsTypeId);
/**
 * @since 2.0.0
 */
exports.isTestAnnotations = isTestAnnotations;
const make = ref => new AnnotationsImpl(ref);
exports.make = make;
//# sourceMappingURL=TestAnnotations.js.map