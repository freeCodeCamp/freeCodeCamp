import * as Cause from "../Cause.js";
import * as Chunk from "../Chunk.js";
import * as Effect from "../Effect.js";
import * as Exit from "../Exit.js";
import { constFalse, constTrue, dual, pipe } from "../Function.js";
import * as Option from "../Option.js";
import { pipeArguments } from "../Pipeable.js";
/** @internal */
const TakeSymbolKey = "effect/Take";
/** @internal */
export const TakeTypeId = /*#__PURE__*/Symbol.for(TakeSymbolKey);
const takeVariance = {
  /* c8 ignore next */
  _A: _ => _,
  /* c8 ignore next */
  _E: _ => _
};
/** @internal */
export class TakeImpl {
  exit;
  [TakeTypeId] = takeVariance;
  constructor(exit) {
    this.exit = exit;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
}
/** @internal */
export const chunk = chunk => new TakeImpl(Exit.succeed(chunk));
/** @internal */
export const die = defect => new TakeImpl(Exit.die(defect));
/** @internal */
export const dieMessage = message => new TakeImpl(Exit.die(new Cause.RuntimeException(message)));
/** @internal */
export const done = self => Effect.suspend(() => self.exit);
/** @internal */
export const end = /*#__PURE__*/new TakeImpl(/*#__PURE__*/Exit.fail(/*#__PURE__*/Option.none()));
/** @internal */
export const fail = error => new TakeImpl(Exit.fail(Option.some(error)));
/** @internal */
export const failCause = cause => new TakeImpl(Exit.failCause(pipe(cause, Cause.map(Option.some))));
/** @internal */
export const fromEffect = effect => Effect.matchCause(effect, {
  onFailure: failCause,
  onSuccess: of
});
/** @internal */
export const fromExit = exit => new TakeImpl(pipe(exit, Exit.mapBoth({
  onFailure: Option.some,
  onSuccess: Chunk.of
})));
/** @internal */
export const fromPull = pull => Effect.matchCause(pull, {
  onFailure: cause => Option.match(Cause.flipCauseOption(cause), {
    onNone: () => end,
    onSome: failCause
  }),
  onSuccess: chunk
});
/** @internal */
export const isDone = self => Exit.match(self.exit, {
  onFailure: cause => Option.isNone(Cause.flipCauseOption(cause)),
  onSuccess: constFalse
});
/** @internal */
export const isFailure = self => Exit.match(self.exit, {
  onFailure: cause => Option.isSome(Cause.flipCauseOption(cause)),
  onSuccess: constFalse
});
/** @internal */
export const isSuccess = self => Exit.match(self.exit, {
  onFailure: constFalse,
  onSuccess: constTrue
});
/** @internal */
export const make = exit => new TakeImpl(exit);
/** @internal */
export const match = /*#__PURE__*/dual(2, (self, {
  onEnd,
  onFailure,
  onSuccess
}) => Exit.match(self.exit, {
  onFailure: cause => Option.match(Cause.flipCauseOption(cause), {
    onNone: onEnd,
    onSome: onFailure
  }),
  onSuccess
}));
/** @internal */
export const matchEffect = /*#__PURE__*/dual(2, (self, {
  onEnd,
  onFailure,
  onSuccess
}) => Exit.matchEffect(self.exit, {
  onFailure: cause => Option.match(Cause.flipCauseOption(cause), {
    onNone: () => onEnd,
    onSome: onFailure
  }),
  onSuccess
}));
/** @internal */
export const map = /*#__PURE__*/dual(2, (self, f) => new TakeImpl(pipe(self.exit, Exit.map(Chunk.map(f)))));
/** @internal */
export const of = value => new TakeImpl(Exit.succeed(Chunk.of(value)));
/** @internal */
export const tap = /*#__PURE__*/dual(2, (self, f) => pipe(self.exit, Exit.forEachEffect(f), Effect.asVoid));
//# sourceMappingURL=take.js.map