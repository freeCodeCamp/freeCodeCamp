"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makePush = exports.make = void 0;
var Cause = _interopRequireWildcard(require("../../Cause.js"));
var Chunk = _interopRequireWildcard(require("../../Chunk.js"));
var Effect = _interopRequireWildcard(require("../../Effect.js"));
var Exit = _interopRequireWildcard(require("../../Exit.js"));
var _Function = require("../../Function.js");
var Option = _interopRequireWildcard(require("../../Option.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const make = emit => {
  const ops = {
    chunk(as) {
      return this(Effect.succeed(as));
    },
    die(defect) {
      return this(Effect.die(defect));
    },
    dieMessage(message) {
      return this(Effect.dieMessage(message));
    },
    done(exit) {
      return this(Effect.suspend(() => Exit.mapBoth(exit, {
        onFailure: Option.some,
        onSuccess: Chunk.of
      })));
    },
    end() {
      return this(Effect.fail(Option.none()));
    },
    fail(e) {
      return this(Effect.fail(Option.some(e)));
    },
    fromEffect(effect) {
      return this(Effect.mapBoth(effect, {
        onFailure: Option.some,
        onSuccess: Chunk.of
      }));
    },
    fromEffectChunk(effect) {
      return this((0, _Function.pipe)(effect, Effect.mapError(Option.some)));
    },
    halt(cause) {
      return this(Effect.failCause((0, _Function.pipe)(cause, Cause.map(Option.some))));
    },
    single(value) {
      return this(Effect.succeed(Chunk.of(value)));
    }
  };
  return Object.assign(emit, ops);
};
/** @internal */
exports.make = make;
const makePush = (queue, scheduler) => {
  let finished = false;
  let buffer = [];
  let running = false;
  function array(items) {
    if (finished) return false;
    if (items.length <= 50_000) {
      buffer.push.apply(buffer, items);
    } else {
      for (let i = 0; i < items.length; i++) {
        buffer.push(items[0]);
      }
    }
    if (!running) {
      running = true;
      scheduler.scheduleTask(flush, 0);
    }
    return true;
  }
  function flush() {
    running = false;
    if (buffer.length > 0) {
      queue.unsafeOffer(buffer);
      buffer = [];
    }
  }
  function done(exit) {
    if (finished) return;
    finished = true;
    if (exit._tag === "Success") {
      buffer.push(exit.value);
    }
    flush();
    queue.unsafeOffer(exit._tag === "Success" ? Exit.void : exit);
  }
  return {
    single(value) {
      if (finished) return false;
      buffer.push(value);
      if (!running) {
        running = true;
        scheduler.scheduleTask(flush, 0);
      }
      return true;
    },
    array,
    chunk(chunk) {
      return array(Chunk.toReadonlyArray(chunk));
    },
    done,
    end() {
      if (finished) return;
      finished = true;
      flush();
      queue.unsafeOffer(Exit.void);
    },
    halt(cause) {
      return done(Exit.failCause(cause));
    },
    fail(error) {
      return done(Exit.fail(error));
    },
    die(defect) {
      return done(Exit.die(defect));
    },
    dieMessage(message) {
      return done(Exit.die(new Error(message)));
    }
  };
};
exports.makePush = makePush;
//# sourceMappingURL=emit.js.map