import { dual, pipe } from "../Function.js";
import * as Option from "../Option.js";
import * as core from "./core.js";
/** @internal */
export const getAndUpdateEffect = /*#__PURE__*/dual(2, (self, f) => self.modifyEffect(value => core.map(f(value), result => [value, result])));
/** @internal */
export const getAndUpdateSomeEffect = /*#__PURE__*/dual(2, (self, pf) => self.modifyEffect(value => {
  const result = pf(value);
  switch (result._tag) {
    case "None":
      {
        return core.succeed([value, value]);
      }
    case "Some":
      {
        return core.map(result.value, newValue => [value, newValue]);
      }
  }
}));
/** @internal */
export const modify = /*#__PURE__*/dual(2, (self, f) => self.modify(f));
/** @internal */
export const modifyEffect = /*#__PURE__*/dual(2, (self, f) => self.modifyEffect(f));
/** @internal */
export const modifySomeEffect = /*#__PURE__*/dual(3, (self, fallback, pf) => self.modifyEffect(value => pipe(pf(value), Option.getOrElse(() => core.succeed([fallback, value])))));
/** @internal */
export const updateEffect = /*#__PURE__*/dual(2, (self, f) => self.modifyEffect(value => core.map(f(value), result => [undefined, result])));
/** @internal */
export const updateAndGetEffect = /*#__PURE__*/dual(2, (self, f) => self.modifyEffect(value => core.map(f(value), result => [result, result])));
/** @internal */
export const updateSomeEffect = /*#__PURE__*/dual(2, (self, pf) => self.modifyEffect(value => {
  const result = pf(value);
  switch (result._tag) {
    case "None":
      {
        return core.succeed([void 0, value]);
      }
    case "Some":
      {
        return core.map(result.value, a => [void 0, a]);
      }
  }
}));
//# sourceMappingURL=synchronizedRef.js.map