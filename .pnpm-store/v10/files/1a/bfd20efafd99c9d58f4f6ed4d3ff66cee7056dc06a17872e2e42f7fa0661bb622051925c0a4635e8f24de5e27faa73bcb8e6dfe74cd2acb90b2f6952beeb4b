"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.windDown = exports.toSet = exports.runtimeMetrics = exports.renderPatch = exports.render = exports.patch = exports.opSupervision = exports.none = exports.make = exports.isEnabled = exports.isDisabled = exports.interruption = exports.interruptible = exports.enabledSet = exports.enableAll = exports.enable = exports.disabledSet = exports.disableAll = exports.disable = exports.differ = exports.diff = exports.cooperativeYielding = exports.allFlags = exports.WindDown = exports.RuntimeMetrics = exports.OpSupervision = exports.None = exports.Interruption = exports.CooperativeYielding = void 0;
var _Function = require("../Function.js");
var internalDiffer = _interopRequireWildcard(require("./differ.js"));
var runtimeFlagsPatch = _interopRequireWildcard(require("./runtimeFlagsPatch.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const None = exports.None = 0;
/** @internal */
const Interruption = exports.Interruption = 1 << 0;
/** @internal */
const OpSupervision = exports.OpSupervision = 1 << 1;
/** @internal */
const RuntimeMetrics = exports.RuntimeMetrics = 1 << 2;
/** @internal */
const WindDown = exports.WindDown = 1 << 4;
/** @internal */
const CooperativeYielding = exports.CooperativeYielding = 1 << 5;
/** @internal */
const allFlags = exports.allFlags = [None, Interruption, OpSupervision, RuntimeMetrics, WindDown, CooperativeYielding];
const print = flag => {
  switch (flag) {
    case CooperativeYielding:
      {
        return "CooperativeYielding";
      }
    case WindDown:
      {
        return "WindDown";
      }
    case RuntimeMetrics:
      {
        return "RuntimeMetrics";
      }
    case OpSupervision:
      {
        return "OpSupervision";
      }
    case Interruption:
      {
        return "Interruption";
      }
    case None:
      {
        return "None";
      }
  }
};
/** @internal */
const cooperativeYielding = self => isEnabled(self, CooperativeYielding);
/** @internal */
exports.cooperativeYielding = cooperativeYielding;
const disable = exports.disable = /*#__PURE__*/(0, _Function.dual)(2, (self, flag) => self & ~flag);
/** @internal */
const disableAll = exports.disableAll = /*#__PURE__*/(0, _Function.dual)(2, (self, flags) => self & ~flags);
/** @internal */
const enable = exports.enable = /*#__PURE__*/(0, _Function.dual)(2, (self, flag) => self | flag);
/** @internal */
const enableAll = exports.enableAll = /*#__PURE__*/(0, _Function.dual)(2, (self, flags) => self | flags);
/** @internal */
const interruptible = self => interruption(self) && !windDown(self);
/** @internal */
exports.interruptible = interruptible;
const interruption = self => isEnabled(self, Interruption);
/** @internal */
exports.interruption = interruption;
const isDisabled = exports.isDisabled = /*#__PURE__*/(0, _Function.dual)(2, (self, flag) => !isEnabled(self, flag));
/** @internal */
const isEnabled = exports.isEnabled = /*#__PURE__*/(0, _Function.dual)(2, (self, flag) => (self & flag) !== 0);
/** @internal */
const make = (...flags) => flags.reduce((a, b) => a | b, 0);
/** @internal */
exports.make = make;
const none = exports.none = /*#__PURE__*/make(None);
/** @internal */
const opSupervision = self => isEnabled(self, OpSupervision);
/** @internal */
exports.opSupervision = opSupervision;
const render = self => {
  const active = [];
  allFlags.forEach(flag => {
    if (isEnabled(self, flag)) {
      active.push(`${print(flag)}`);
    }
  });
  return `RuntimeFlags(${active.join(", ")})`;
};
/** @internal */
exports.render = render;
const runtimeMetrics = self => isEnabled(self, RuntimeMetrics);
/** @internal */
exports.runtimeMetrics = runtimeMetrics;
const toSet = self => new Set(allFlags.filter(flag => isEnabled(self, flag)));
exports.toSet = toSet;
const windDown = self => isEnabled(self, WindDown);
// circular with RuntimeFlagsPatch
/** @internal */
exports.windDown = windDown;
const enabledSet = self => toSet(runtimeFlagsPatch.active(self) & runtimeFlagsPatch.enabled(self));
/** @internal */
exports.enabledSet = enabledSet;
const disabledSet = self => toSet(runtimeFlagsPatch.active(self) & ~runtimeFlagsPatch.enabled(self));
/** @internal */
exports.disabledSet = disabledSet;
const diff = exports.diff = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => runtimeFlagsPatch.make(self ^ that, that));
/** @internal */
const patch = exports.patch = /*#__PURE__*/(0, _Function.dual)(2, (self, patch) => self & (runtimeFlagsPatch.invert(runtimeFlagsPatch.active(patch)) | runtimeFlagsPatch.enabled(patch)) | runtimeFlagsPatch.active(patch) & runtimeFlagsPatch.enabled(patch));
/** @internal */
const renderPatch = self => {
  const enabled = Array.from(enabledSet(self)).map(flag => print(flag)).join(", ");
  const disabled = Array.from(disabledSet(self)).map(flag => print(flag)).join(", ");
  return `RuntimeFlagsPatch(enabled = (${enabled}), disabled = (${disabled}))`;
};
/** @internal */
exports.renderPatch = renderPatch;
const differ = exports.differ = /*#__PURE__*/internalDiffer.make({
  empty: runtimeFlagsPatch.empty,
  diff: (oldValue, newValue) => diff(oldValue, newValue),
  combine: (first, second) => runtimeFlagsPatch.andThen(second)(first),
  patch: (_patch, oldValue) => patch(oldValue, _patch)
});
//# sourceMappingURL=runtimeFlags.js.map