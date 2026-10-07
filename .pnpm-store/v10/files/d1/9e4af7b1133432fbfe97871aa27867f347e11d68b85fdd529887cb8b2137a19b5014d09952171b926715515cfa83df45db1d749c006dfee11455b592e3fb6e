import { dual } from "../Function.js";
/** @internal */
const BIT_MASK = 0xff;
/** @internal */
const BIT_SHIFT = 0x08;
/** @internal */
export const active = patch => patch & BIT_MASK;
/** @internal */
export const enabled = patch => patch >> BIT_SHIFT & BIT_MASK;
/** @internal */
export const make = (active, enabled) => (active & BIT_MASK) + ((enabled & active & BIT_MASK) << BIT_SHIFT);
/** @internal */
export const empty = /*#__PURE__*/make(0, 0);
/** @internal */
export const enable = flag => make(flag, flag);
/** @internal */
export const disable = flag => make(flag, 0);
/** @internal */
export const isEmpty = patch => patch === 0;
/** @internal */
export const isActive = /*#__PURE__*/dual(2, (self, flag) => (active(self) & flag) !== 0);
/** @internal */
export const isEnabled = /*#__PURE__*/dual(2, (self, flag) => (enabled(self) & flag) !== 0);
/** @internal */
export const isDisabled = /*#__PURE__*/dual(2, (self, flag) => (active(self) & flag) !== 0 && (enabled(self) & flag) === 0);
/** @internal */
export const exclude = /*#__PURE__*/dual(2, (self, flag) => make(active(self) & ~flag, enabled(self)));
/** @internal */
export const both = /*#__PURE__*/dual(2, (self, that) => make(active(self) | active(that), enabled(self) & enabled(that)));
/** @internal */
export const either = /*#__PURE__*/dual(2, (self, that) => make(active(self) | active(that), enabled(self) | enabled(that)));
/** @internal */
export const andThen = /*#__PURE__*/dual(2, (self, that) => self | that);
/** @internal */
export const inverse = patch => make(enabled(patch), invert(active(patch)));
/** @internal */
export const invert = n => ~n >>> 0 & BIT_MASK;
//# sourceMappingURL=runtimeFlagsPatch.js.map