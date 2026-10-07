import * as Cause from "../../Cause.js";
import * as Deferred from "../../Deferred.js";
import * as Effect from "../../Effect.js";
import * as Either from "../../Either.js";
import * as Exit from "../../Exit.js";
import { pipe } from "../../Function.js";
import * as Ref from "../../Ref.js";
/** @internal */
const OP_STATE_EMPTY = "Empty";
/** @internal */
const OP_STATE_EMIT = "Emit";
/** @internal */
const OP_STATE_ERROR = "Error";
/** @internal */
const OP_STATE_DONE = "Done";
/** @internal */
const stateEmpty = notifyProducer => ({
  _tag: OP_STATE_EMPTY,
  notifyProducer
});
/** @internal */
const stateEmit = notifyConsumers => ({
  _tag: OP_STATE_EMIT,
  notifyConsumers
});
/** @internal */
const stateError = cause => ({
  _tag: OP_STATE_ERROR,
  cause
});
/** @internal */
const stateDone = done => ({
  _tag: OP_STATE_DONE,
  done
});
/** @internal */
class SingleProducerAsyncInputImpl {
  ref;
  constructor(ref) {
    this.ref = ref;
  }
  awaitRead() {
    return Effect.flatten(Ref.modify(this.ref, state => state._tag === OP_STATE_EMPTY ? [Deferred.await(state.notifyProducer), state] : [Effect.void, state]));
  }
  get close() {
    return Effect.fiberIdWith(fiberId => this.error(Cause.interrupt(fiberId)));
  }
  done(value) {
    return Effect.flatten(Ref.modify(this.ref, state => {
      switch (state._tag) {
        case OP_STATE_EMPTY:
          {
            return [Deferred.await(state.notifyProducer), state];
          }
        case OP_STATE_EMIT:
          {
            return [Effect.forEach(state.notifyConsumers, deferred => Deferred.succeed(deferred, Either.left(value)), {
              discard: true
            }), stateDone(value)];
          }
        case OP_STATE_ERROR:
          {
            return [Effect.interrupt, state];
          }
        case OP_STATE_DONE:
          {
            return [Effect.interrupt, state];
          }
      }
    }));
  }
  emit(element) {
    return Effect.flatMap(Deferred.make(), deferred => Effect.flatten(Ref.modify(this.ref, state => {
      switch (state._tag) {
        case OP_STATE_EMPTY:
          {
            return [Deferred.await(state.notifyProducer), state];
          }
        case OP_STATE_EMIT:
          {
            const notifyConsumer = state.notifyConsumers[0];
            const notifyConsumers = state.notifyConsumers.slice(1);
            if (notifyConsumer !== undefined) {
              return [Deferred.succeed(notifyConsumer, Either.right(element)), notifyConsumers.length === 0 ? stateEmpty(deferred) : stateEmit(notifyConsumers)];
            }
            throw new Error("Bug: Channel.SingleProducerAsyncInput.emit - Queue was empty! please report an issue at https://github.com/Effect-TS/effect/issues");
          }
        case OP_STATE_ERROR:
          {
            return [Effect.interrupt, state];
          }
        case OP_STATE_DONE:
          {
            return [Effect.interrupt, state];
          }
      }
    })));
  }
  error(cause) {
    return Effect.flatten(Ref.modify(this.ref, state => {
      switch (state._tag) {
        case OP_STATE_EMPTY:
          {
            return [Deferred.await(state.notifyProducer), state];
          }
        case OP_STATE_EMIT:
          {
            return [Effect.forEach(state.notifyConsumers, deferred => Deferred.failCause(deferred, cause), {
              discard: true
            }), stateError(cause)];
          }
        case OP_STATE_ERROR:
          {
            return [Effect.interrupt, state];
          }
        case OP_STATE_DONE:
          {
            return [Effect.interrupt, state];
          }
      }
    }));
  }
  get take() {
    return this.takeWith(cause => Exit.failCause(Cause.map(cause, Either.left)), elem => Exit.succeed(elem), done => Exit.fail(Either.right(done)));
  }
  takeWith(onError, onElement, onDone) {
    return Effect.flatMap(Deferred.make(), deferred => Effect.flatten(Ref.modify(this.ref, state => {
      switch (state._tag) {
        case OP_STATE_EMPTY:
          {
            return [Effect.zipRight(Deferred.succeed(state.notifyProducer, void 0), Effect.matchCause(Deferred.await(deferred), {
              onFailure: onError,
              onSuccess: Either.match({
                onLeft: onDone,
                onRight: onElement
              })
            })), stateEmit([deferred])];
          }
        case OP_STATE_EMIT:
          {
            return [Effect.matchCause(Deferred.await(deferred), {
              onFailure: onError,
              onSuccess: Either.match({
                onLeft: onDone,
                onRight: onElement
              })
            }), stateEmit([...state.notifyConsumers, deferred])];
          }
        case OP_STATE_ERROR:
          {
            return [Effect.succeed(onError(state.cause)), state];
          }
        case OP_STATE_DONE:
          {
            return [Effect.succeed(onDone(state.done)), state];
          }
      }
    })));
  }
}
/** @internal */
export const make = () => pipe(Deferred.make(), Effect.flatMap(deferred => Ref.make(stateEmpty(deferred))), Effect.map(ref => new SingleProducerAsyncInputImpl(ref)));
//# sourceMappingURL=singleProducerAsyncInput.js.map