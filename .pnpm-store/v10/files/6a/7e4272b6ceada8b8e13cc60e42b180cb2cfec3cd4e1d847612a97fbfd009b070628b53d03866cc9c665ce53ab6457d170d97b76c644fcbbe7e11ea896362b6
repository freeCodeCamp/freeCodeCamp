"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.make = void 0;
var Cause = _interopRequireWildcard(require("../../Cause.js"));
var Deferred = _interopRequireWildcard(require("../../Deferred.js"));
var Effect = _interopRequireWildcard(require("../../Effect.js"));
var Either = _interopRequireWildcard(require("../../Either.js"));
var Exit = _interopRequireWildcard(require("../../Exit.js"));
var _Function = require("../../Function.js");
var Ref = _interopRequireWildcard(require("../../Ref.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
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
const make = () => (0, _Function.pipe)(Deferred.make(), Effect.flatMap(deferred => Ref.make(stateEmpty(deferred))), Effect.map(ref => new SingleProducerAsyncInputImpl(ref)));
exports.make = make;
//# sourceMappingURL=singleProducerAsyncInput.js.map