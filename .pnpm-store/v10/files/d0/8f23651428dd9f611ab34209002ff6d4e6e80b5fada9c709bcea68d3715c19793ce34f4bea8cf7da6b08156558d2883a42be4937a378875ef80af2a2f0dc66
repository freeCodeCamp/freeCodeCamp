"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toStream = exports.toChannel = exports.make = exports.isReadonlyMailbox = exports.isMailbox = exports.into = exports.fromStream = exports.TypeId = exports.ReadonlyTypeId = void 0;
var Arr = _interopRequireWildcard(require("../Array.js"));
var _Cause = require("../Cause.js");
var Chunk = _interopRequireWildcard(require("../Chunk.js"));
var Effectable = _interopRequireWildcard(require("../Effectable.js"));
var _Function = require("../Function.js");
var Inspectable = _interopRequireWildcard(require("../Inspectable.js"));
var Option = _interopRequireWildcard(require("../Option.js"));
var _Pipeable = require("../Pipeable.js");
var _Predicate = require("../Predicate.js");
var channel = _interopRequireWildcard(require("./channel.js"));
var channelExecutor = _interopRequireWildcard(require("./channel/channelExecutor.js"));
var coreChannel = _interopRequireWildcard(require("./core-stream.js"));
var core = _interopRequireWildcard(require("./core.js"));
var circular = _interopRequireWildcard(require("./effect/circular.js"));
var fiberRuntime = _interopRequireWildcard(require("./fiberRuntime.js"));
var stream = _interopRequireWildcard(require("./stream.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const TypeId = exports.TypeId = /*#__PURE__*/Symbol.for("effect/Mailbox");
/** @internal */
const ReadonlyTypeId = exports.ReadonlyTypeId = /*#__PURE__*/Symbol.for("effect/Mailbox/ReadonlyMailbox");
/** @internal */
const isMailbox = u => (0, _Predicate.hasProperty)(u, TypeId);
/** @internal */
exports.isMailbox = isMailbox;
const isReadonlyMailbox = u => (0, _Predicate.hasProperty)(u, ReadonlyTypeId);
exports.isReadonlyMailbox = isReadonlyMailbox;
const empty = /*#__PURE__*/Chunk.empty();
const exitEmpty = /*#__PURE__*/core.exitSucceed(empty);
const exitFalse = /*#__PURE__*/core.exitSucceed(false);
const exitTrue = /*#__PURE__*/core.exitSucceed(true);
const constDone = [empty, true];
class MailboxImpl extends Effectable.Class {
  scheduler;
  capacity;
  strategy;
  [TypeId] = TypeId;
  [ReadonlyTypeId] = ReadonlyTypeId;
  state = {
    _tag: "Open",
    takers: /*#__PURE__*/new Set(),
    offers: /*#__PURE__*/new Set(),
    awaiters: /*#__PURE__*/new Set()
  };
  messages = [];
  messagesChunk = /*#__PURE__*/Chunk.empty();
  constructor(scheduler, capacity, strategy) {
    super();
    this.scheduler = scheduler;
    this.capacity = capacity;
    this.strategy = strategy;
  }
  offer(message) {
    return core.suspend(() => {
      if (this.state._tag !== "Open") {
        return exitFalse;
      } else if (this.messages.length + this.messagesChunk.length >= this.capacity) {
        switch (this.strategy) {
          case "dropping":
            return exitFalse;
          case "suspend":
            if (this.capacity <= 0 && this.state.takers.size > 0) {
              this.messages.push(message);
              this.releaseTaker();
              return exitTrue;
            }
            return this.offerRemainingSingle(message);
          case "sliding":
            this.unsafeTake();
            this.messages.push(message);
            return exitTrue;
        }
      }
      this.messages.push(message);
      this.scheduleReleaseTaker();
      return exitTrue;
    });
  }
  unsafeOffer(message) {
    if (this.state._tag !== "Open") {
      return false;
    } else if (this.messages.length + this.messagesChunk.length >= this.capacity) {
      if (this.strategy === "sliding") {
        this.unsafeTake();
        this.messages.push(message);
        return true;
      } else if (this.capacity <= 0 && this.state.takers.size > 0) {
        this.messages.push(message);
        this.releaseTaker();
        return true;
      }
      return false;
    }
    this.messages.push(message);
    this.scheduleReleaseTaker();
    return true;
  }
  offerAll(messages) {
    return core.suspend(() => {
      if (this.state._tag !== "Open") {
        return core.succeed(Chunk.fromIterable(messages));
      }
      const remaining = this.unsafeOfferAllArray(messages);
      if (remaining.length === 0) {
        return exitEmpty;
      } else if (this.strategy === "dropping") {
        return core.succeed(Chunk.unsafeFromArray(remaining));
      }
      return this.offerRemainingArray(remaining);
    });
  }
  unsafeOfferAll(messages) {
    return Chunk.unsafeFromArray(this.unsafeOfferAllArray(messages));
  }
  unsafeOfferAllArray(messages) {
    if (this.state._tag !== "Open") {
      return Arr.fromIterable(messages);
    } else if (this.capacity === Number.POSITIVE_INFINITY || this.strategy === "sliding") {
      if (this.messages.length > 0) {
        this.messagesChunk = Chunk.appendAll(this.messagesChunk, Chunk.unsafeFromArray(this.messages));
      }
      if (this.strategy === "sliding") {
        this.messagesChunk = this.messagesChunk.pipe(Chunk.appendAll(Chunk.fromIterable(messages)), Chunk.takeRight(this.capacity));
      } else if (Chunk.isChunk(messages)) {
        this.messagesChunk = Chunk.appendAll(this.messagesChunk, messages);
      } else {
        this.messages = Arr.fromIterable(messages);
      }
      this.scheduleReleaseTaker();
      return [];
    }
    const free = this.capacity <= 0 ? this.state.takers.size : this.capacity - this.messages.length - this.messagesChunk.length;
    if (free === 0) {
      return Arr.fromIterable(messages);
    }
    const remaining = [];
    let i = 0;
    for (const message of messages) {
      if (i < free) {
        this.messages.push(message);
      } else {
        remaining.push(message);
      }
      i++;
    }
    this.scheduleReleaseTaker();
    return remaining;
  }
  fail(error) {
    return this.done(core.exitFail(error));
  }
  failCause(cause) {
    return this.done(core.exitFailCause(cause));
  }
  unsafeDone(exit) {
    if (this.state._tag !== "Open") {
      return false;
    } else if (this.state.offers.size === 0 && this.messages.length === 0 && this.messagesChunk.length === 0) {
      this.finalize(exit);
      return true;
    }
    this.state = {
      ...this.state,
      _tag: "Closing",
      exit
    };
    return true;
  }
  shutdown = /*#__PURE__*/core.sync(() => {
    if (this.state._tag === "Done") {
      return true;
    }
    this.messages = [];
    this.messagesChunk = empty;
    const offers = this.state.offers;
    this.finalize(this.state._tag === "Open" ? core.exitVoid : this.state.exit);
    if (offers.size > 0) {
      for (const entry of offers) {
        if (entry._tag === "Single") {
          entry.resume(exitFalse);
        } else {
          entry.resume(core.exitSucceed(Chunk.unsafeFromArray(entry.remaining.slice(entry.offset))));
        }
      }
      offers.clear();
    }
    return true;
  });
  done(exit) {
    return core.sync(() => this.unsafeDone(exit));
  }
  end = /*#__PURE__*/this.done(core.exitVoid);
  clear = /*#__PURE__*/core.suspend(() => {
    if (this.state._tag === "Done") {
      return core.exitAs(this.state.exit, empty);
    }
    const messages = this.unsafeTakeAll();
    this.releaseCapacity();
    return core.succeed(messages);
  });
  takeAll = /*#__PURE__*/core.suspend(() => {
    if (this.state._tag === "Done") {
      return core.exitAs(this.state.exit, constDone);
    }
    const messages = this.unsafeTakeAll();
    if (messages.length === 0) {
      return core.zipRight(this.awaitTake, this.takeAll);
    }
    return core.succeed([messages, this.releaseCapacity()]);
  });
  takeN(n) {
    return core.suspend(() => {
      if (this.state._tag === "Done") {
        return core.exitAs(this.state.exit, constDone);
      } else if (n <= 0) {
        return core.succeed([empty, false]);
      }
      n = Math.min(n, this.capacity);
      let messages;
      if (n <= this.messagesChunk.length) {
        messages = Chunk.take(this.messagesChunk, n);
        this.messagesChunk = Chunk.drop(this.messagesChunk, n);
      } else if (n <= this.messages.length + this.messagesChunk.length) {
        this.messagesChunk = Chunk.appendAll(this.messagesChunk, Chunk.unsafeFromArray(this.messages));
        this.messages = [];
        messages = Chunk.take(this.messagesChunk, n);
        this.messagesChunk = Chunk.drop(this.messagesChunk, n);
      } else {
        return core.zipRight(this.awaitTake, this.takeN(n));
      }
      return core.succeed([messages, this.releaseCapacity()]);
    });
  }
  unsafeTake() {
    if (this.state._tag === "Done") {
      return core.exitZipRight(this.state.exit, core.exitFail(new _Cause.NoSuchElementException()));
    }
    let message;
    if (this.messagesChunk.length > 0) {
      message = Chunk.unsafeHead(this.messagesChunk);
      this.messagesChunk = Chunk.drop(this.messagesChunk, 1);
    } else if (this.messages.length > 0) {
      message = this.messages[0];
      this.messagesChunk = Chunk.drop(Chunk.unsafeFromArray(this.messages), 1);
      this.messages = [];
    } else if (this.capacity <= 0 && this.state.offers.size > 0) {
      this.capacity = 1;
      this.releaseCapacity();
      this.capacity = 0;
      return this.messages.length > 0 ? core.exitSucceed(this.messages.pop()) : undefined;
    } else {
      return undefined;
    }
    this.releaseCapacity();
    return core.exitSucceed(message);
  }
  take = /*#__PURE__*/core.suspend(() => this.unsafeTake() ?? core.zipRight(this.awaitTake, this.take));
  await = /*#__PURE__*/core.asyncInterrupt(resume => {
    if (this.state._tag === "Done") {
      return resume(this.state.exit);
    }
    this.state.awaiters.add(resume);
    return core.sync(() => {
      if (this.state._tag !== "Done") {
        this.state.awaiters.delete(resume);
      }
    });
  });
  unsafeSize() {
    const size = this.messages.length + this.messagesChunk.length;
    return this.state._tag === "Done" ? Option.none() : Option.some(size);
  }
  size = /*#__PURE__*/core.sync(() => this.unsafeSize());
  commit() {
    return this.takeAll;
  }
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
  toJSON() {
    return {
      _id: "effect/Mailbox",
      state: this.state._tag,
      size: this.unsafeSize().toJSON()
    };
  }
  toString() {
    return Inspectable.format(this);
  }
  [Inspectable.NodeInspectSymbol]() {
    return Inspectable.format(this);
  }
  offerRemainingSingle(message) {
    return core.asyncInterrupt(resume => {
      if (this.state._tag !== "Open") {
        return resume(exitFalse);
      }
      const entry = {
        _tag: "Single",
        message,
        resume
      };
      this.state.offers.add(entry);
      return core.sync(() => {
        if (this.state._tag === "Open") {
          this.state.offers.delete(entry);
        }
      });
    });
  }
  offerRemainingArray(remaining) {
    return core.asyncInterrupt(resume => {
      if (this.state._tag !== "Open") {
        return resume(core.exitSucceed(Chunk.unsafeFromArray(remaining)));
      }
      const entry = {
        _tag: "Array",
        remaining,
        offset: 0,
        resume
      };
      this.state.offers.add(entry);
      return core.sync(() => {
        if (this.state._tag === "Open") {
          this.state.offers.delete(entry);
        }
      });
    });
  }
  releaseCapacity() {
    if (this.state._tag === "Done") {
      return this.state.exit._tag === "Success";
    } else if (this.state.offers.size === 0) {
      if (this.state._tag === "Closing" && this.messages.length === 0 && this.messagesChunk.length === 0) {
        this.finalize(this.state.exit);
        return this.state.exit._tag === "Success";
      }
      return false;
    }
    let n = this.capacity - this.messages.length - this.messagesChunk.length;
    for (const entry of this.state.offers) {
      if (n === 0) return false;else if (entry._tag === "Single") {
        this.messages.push(entry.message);
        n--;
        entry.resume(exitTrue);
        this.state.offers.delete(entry);
      } else {
        for (; entry.offset < entry.remaining.length; entry.offset++) {
          if (n === 0) return false;
          this.messages.push(entry.remaining[entry.offset]);
          n--;
        }
        entry.resume(exitEmpty);
        this.state.offers.delete(entry);
      }
    }
    return false;
  }
  awaitTake = /*#__PURE__*/core.asyncInterrupt(resume => {
    if (this.state._tag === "Done") {
      return resume(this.state.exit);
    }
    this.state.takers.add(resume);
    return core.sync(() => {
      if (this.state._tag !== "Done") {
        this.state.takers.delete(resume);
      }
    });
  });
  scheduleRunning = false;
  scheduleReleaseTaker() {
    if (this.scheduleRunning) {
      return;
    }
    this.scheduleRunning = true;
    this.scheduler.scheduleTask(this.releaseTaker, 0);
  }
  releaseTaker = () => {
    this.scheduleRunning = false;
    if (this.state._tag === "Done") {
      return;
    } else if (this.state.takers.size === 0) {
      return;
    }
    for (const taker of this.state.takers) {
      this.state.takers.delete(taker);
      taker(core.exitVoid);
      if (this.messages.length + this.messagesChunk.length === 0) {
        break;
      }
    }
  };
  unsafeTakeAll() {
    if (this.messagesChunk.length > 0) {
      const messages = this.messages.length > 0 ? Chunk.appendAll(this.messagesChunk, Chunk.unsafeFromArray(this.messages)) : this.messagesChunk;
      this.messagesChunk = empty;
      this.messages = [];
      return messages;
    } else if (this.messages.length > 0) {
      const messages = Chunk.unsafeFromArray(this.messages);
      this.messages = [];
      return messages;
    } else if (this.state._tag !== "Done" && this.state.offers.size > 0) {
      this.capacity = 1;
      this.releaseCapacity();
      this.capacity = 0;
      return Chunk.of(this.messages.pop());
    }
    return empty;
  }
  finalize(exit) {
    if (this.state._tag === "Done") {
      return;
    }
    const openState = this.state;
    this.state = {
      _tag: "Done",
      exit
    };
    for (const taker of openState.takers) {
      taker(exit);
    }
    openState.takers.clear();
    for (const awaiter of openState.awaiters) {
      awaiter(exit);
    }
    openState.awaiters.clear();
  }
}
/** @internal */
const make = capacity => core.withFiberRuntime(fiber => core.succeed(new MailboxImpl(fiber.currentScheduler, typeof capacity === "number" ? capacity : capacity?.capacity ?? Number.POSITIVE_INFINITY, typeof capacity === "number" ? "suspend" : capacity?.strategy ?? "suspend")));
/** @internal */
exports.make = make;
const into = exports.into = /*#__PURE__*/(0, _Function.dual)(2, (effect, self) => core.uninterruptibleMask(restore => core.matchCauseEffect(restore(effect), {
  onFailure: cause => self.failCause(cause),
  onSuccess: _ => self.end
})));
/** @internal */
const toChannel = self => {
  const loop = coreChannel.flatMap(self.takeAll, ([messages, done]) => done ? messages.length === 0 ? coreChannel.void : coreChannel.write(messages) : channel.zipRight(coreChannel.write(messages), loop));
  return loop;
};
/** @internal */
exports.toChannel = toChannel;
const toStream = self => stream.fromChannel(toChannel(self));
/** @internal */
exports.toStream = toStream;
const fromStream = exports.fromStream = /*#__PURE__*/(0, _Function.dual)(args => stream.isStream(args[0]), (self, options) => core.tap(fiberRuntime.acquireRelease(make(options), mailbox => mailbox.shutdown), mailbox => {
  const writer = coreChannel.readWithCause({
    onInput: input => coreChannel.flatMap(mailbox.offerAll(input), () => writer),
    onFailure: cause => mailbox.failCause(cause),
    onDone: () => mailbox.end
  });
  return fiberRuntime.scopeWith(scope => stream.toChannel(self).pipe(coreChannel.pipeTo(writer), channelExecutor.runIn(scope), circular.forkIn(scope)));
}));
//# sourceMappingURL=mailbox.js.map