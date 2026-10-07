import * as Either from "../../Either.js";
import { dual } from "../../Function.js";
import * as Option from "../../Option.js";
import * as core from "./core.js";
import * as stm from "./stm.js";
import * as tRef from "./tRef.js";
/** @internal */
const TDeferredSymbolKey = "effect/TDeferred";
/** @internal */
export const TDeferredTypeId = /*#__PURE__*/Symbol.for(TDeferredSymbolKey);
/** @internal */
const tDeferredVariance = {
  /* c8 ignore next */
  _A: _ => _,
  /* c8 ignore next */
  _E: _ => _
};
/** @internal */
class TDeferredImpl {
  ref;
  [TDeferredTypeId] = tDeferredVariance;
  constructor(ref) {
    this.ref = ref;
  }
}
/** @internal */
export const _await = self => stm.flatten(stm.collect(tRef.get(self.ref), option => Option.isSome(option) ? Option.some(stm.fromEither(option.value)) : Option.none()));
/** @internal */
export const done = /*#__PURE__*/dual(2, (self, either) => core.flatMap(tRef.get(self.ref), Option.match({
  onNone: () => core.zipRight(tRef.set(self.ref, Option.some(either)), core.succeed(true)),
  onSome: () => core.succeed(false)
})));
/** @internal */
export const fail = /*#__PURE__*/dual(2, (self, error) => done(self, Either.left(error)));
/** @internal */
export const make = () => core.map(tRef.make(Option.none()), ref => new TDeferredImpl(ref));
/** @internal */
export const poll = self => tRef.get(self.ref);
/** @internal */
export const succeed = /*#__PURE__*/dual(2, (self, value) => done(self, Either.right(value)));
//# sourceMappingURL=tDeferred.js.map