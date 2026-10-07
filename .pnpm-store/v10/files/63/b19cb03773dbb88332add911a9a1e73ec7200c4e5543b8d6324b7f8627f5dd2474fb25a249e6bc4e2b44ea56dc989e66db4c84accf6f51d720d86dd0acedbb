import * as Arr from "../Array.js"
import type { Cause } from "../Cause.js"
import { NoSuchElementException } from "../Cause.js"
import type { Channel } from "../Channel.js"
import * as Chunk from "../Chunk.js"
import type { Effect } from "../Effect.js"
import * as Effectable from "../Effectable.js"
import type { Exit } from "../Exit.js"
import { dual } from "../Function.js"
import * as Inspectable from "../Inspectable.js"
import type * as Api from "../Mailbox.js"
import * as Option from "../Option.js"
import { pipeArguments } from "../Pipeable.js"
import { hasProperty } from "../Predicate.js"
import type { Scheduler } from "../Scheduler.js"
import type { Scope } from "../Scope.js"
import type { Stream } from "../Stream.js"
import * as channel from "./channel.js"
import * as channelExecutor from "./channel/channelExecutor.js"
import * as coreChannel from "./core-stream.js"
import * as core from "./core.js"
import * as circular from "./effect/circular.js"
import * as fiberRuntime from "./fiberRuntime.js"
import * as stream from "./stream.js"

/** @internal */
export const TypeId: Api.TypeId = Symbol.for("effect/Mailbox") as Api.TypeId

/** @internal */
export const ReadonlyTypeId: Api.ReadonlyTypeId = Symbol.for("effect/Mailbox/ReadonlyMailbox") as Api.ReadonlyTypeId

/** @internal */
export const isMailbox = (u: unknown): u is Api.Mailbox<unknown, unknown> => hasProperty(u, TypeId)

/** @internal */
export const isReadonlyMailbox = (u: unknown): u is Api.ReadonlyMailbox<unknown, unknown> =>
  hasProperty(u, ReadonlyTypeId)

type MailboxState<A, E> = {
  readonly _tag: "Open"
  readonly takers: Set<(_: Effect<void, E>) => void>
  readonly offers: Set<OfferEntry<A>>
  readonly awaiters: Set<(_: Effect<void, E>) => void>
} | {
  readonly _tag: "Closing"
  readonly takers: Set<(_: Effect<void, E>) => void>
  readonly offers: Set<OfferEntry<A>>
  readonly awaiters: Set<(_: Effect<void, E>) => void>
  readonly exit: Exit<void, E>
} | {
  readonly _tag: "Done"
  readonly exit: Exit<void, E>
}

type OfferEntry<A> = {
  readonly _tag: "Array"
  readonly remaining: Array<A>
  offset: number
  readonly resume: (_: Effect<Chunk.Chunk<A>>) => void
} | {
  readonly _tag: "Single"
  readonly message: A
  readonly resume: (_: Effect<boolean>) => void
}

const empty = Chunk.empty()
const exitEmpty = core.exitSucceed(empty)
const exitFalse = core.exitSucceed(false)
const exitTrue = core.exitSucceed(true)
const constDone = [empty, true] as const

class MailboxImpl<A, E> extends Effectable.Class<readonly [messages: Chunk.Chunk<A>, done: boolean], E>
  implements Api.Mailbox<A, E>
{
  readonly [TypeId]: Api.TypeId = TypeId
  readonly [ReadonlyTypeId]: Api.ReadonlyTypeId = ReadonlyTypeId
  private state: MailboxState<A, E> = {
    _tag: "Open",
    takers: new Set(),
    offers: new Set(),
    awaiters: new Set()
  }
  private messages: Array<A> = []
  private messagesChunk = Chunk.empty<A>()
  constructor(
    readonly scheduler: Scheduler,
    private capacity: number,
    readonly strategy: "suspend" | "dropping" | "sliding"
  ) {
    super()
  }

  offer(message: A): Effect<boolean> {
    return core.suspend(() => {
      if (this.state._tag !== "Open") {
        return exitFalse
      } else if (this.messages.length + this.messagesChunk.length >= this.capacity) {
        switch (this.strategy) {
          case "dropping":
            return exitFalse
          case "suspend":
            if (this.capacity <= 0 && this.state.takers.size > 0) {
              this.messages.push(message)
              this.releaseTaker()
              return exitTrue
            }
            return this.offerRemainingSingle(message)
          case "sliding":
            this.unsafeTake()
            this.messages.push(message)
            return exitTrue
        }
      }
      this.messages.push(message)
      this.scheduleReleaseTaker()
      return exitTrue
    })
  }
  unsafeOffer(message: A): boolean {
    if (this.state._tag !== "Open") {
      return false
    } else if (this.messages.length + this.messagesChunk.length >= this.capacity) {
      if (this.strategy === "sliding") {
        this.unsafeTake()
        this.messages.push(message)
        return true
      } else if (this.capacity <= 0 && this.state.takers.size > 0) {
        this.messages.push(message)
        this.releaseTaker()
        return true
      }
      return false
    }
    this.messages.push(message)
    this.scheduleReleaseTaker()
    return true
  }
  offerAll(messages: Iterable<A>): Effect<Chunk.Chunk<A>> {
    return core.suspend(() => {
      if (this.state._tag !== "Open") {
        return core.succeed(Chunk.fromIterable(messages))
      }
      const remaining = this.unsafeOfferAllArray(messages)
      if (remaining.length === 0) {
        return exitEmpty
      } else if (this.strategy === "dropping") {
        return core.succeed(Chunk.unsafeFromArray(remaining))
      }
      return this.offerRemainingArray(remaining)
    })
  }
  unsafeOfferAll(messages: Iterable<A>): Chunk.Chunk<A> {
    return Chunk.unsafeFromArray(this.unsafeOfferAllArray(messages))
  }
  unsafeOfferAllArray(messages: Iterable<A>): Array<A> {
    if (this.state._tag !== "Open") {
      return Arr.fromIterable(messages)
    } else if (this.capacity === Number.POSITIVE_INFINITY || this.strategy === "sliding") {
      if (this.messages.length > 0) {
        this.messagesChunk = Chunk.appendAll(this.messagesChunk, Chunk.unsafeFromArray(this.messages))
      }
      if (this.strategy === "sliding") {
        this.messagesChunk = this.messagesChunk.pipe(
          Chunk.appendAll(Chunk.fromIterable(messages)),
          Chunk.takeRight(this.capacity)
        )
      } else if (Chunk.isChunk(messages)) {
        this.messagesChunk = Chunk.appendAll(this.messagesChunk, messages)
      } else {
        this.messages = Arr.fromIterable(messages)
      }
      this.scheduleReleaseTaker()
      return []
    }
    const free = this.capacity <= 0
      ? this.state.takers.size
      : this.capacity - this.messages.length - this.messagesChunk.length
    if (free === 0) {
      return Arr.fromIterable(messages)
    }
    const remaining: Array<A> = []
    let i = 0
    for (const message of messages) {
      if (i < free) {
        this.messages.push(message)
      } else {
        remaining.push(message)
      }
      i++
    }
    this.scheduleReleaseTaker()
    return remaining
  }
  fail(error: E) {
    return this.done(core.exitFail(error))
  }
  failCause(cause: Cause<E>) {
    return this.done(core.exitFailCause(cause))
  }
  unsafeDone(exit: Exit<void, E>): boolean {
    if (this.state._tag !== "Open") {
      return false
    } else if (this.state.offers.size === 0 && this.messages.length === 0 && this.messagesChunk.length === 0) {
      this.finalize(exit)
      return true
    }
    this.state = { ...this.state, _tag: "Closing", exit }
    return true
  }
  shutdown: Effect<boolean> = core.sync(() => {
    if (this.state._tag === "Done") {
      return true
    }
    this.messages = []
    this.messagesChunk = empty
    const offers = this.state.offers
    this.finalize(this.state._tag === "Open" ? core.exitVoid : this.state.exit)
    if (offers.size > 0) {
      for (const entry of offers) {
        if (entry._tag === "Single") {
          entry.resume(exitFalse)
        } else {
          entry.resume(core.exitSucceed(Chunk.unsafeFromArray(entry.remaining.slice(entry.offset))))
        }
      }
      offers.clear()
    }
    return true
  })
  done(exit: Exit<void, E>) {
    return core.sync(() => this.unsafeDone(exit))
  }
  end = this.done(core.exitVoid)
  clear: Effect<Chunk.Chunk<A>, E> = core.suspend(() => {
    if (this.state._tag === "Done") {
      return core.exitAs(this.state.exit, empty)
    }
    const messages = this.unsafeTakeAll()
    this.releaseCapacity()
    return core.succeed(messages)
  })
  takeAll: Effect<readonly [messages: Chunk.Chunk<A>, done: boolean], E> = core.suspend(() => {
    if (this.state._tag === "Done") {
      return core.exitAs(this.state.exit, constDone)
    }
    const messages = this.unsafeTakeAll()
    if (messages.length === 0) {
      return core.zipRight(this.awaitTake, this.takeAll)
    }
    return core.succeed([messages, this.releaseCapacity()])
  })
  takeN(n: number): Effect<readonly [messages: Chunk.Chunk<A>, done: boolean], E> {
    return core.suspend(() => {
      if (this.state._tag === "Done") {
        return core.exitAs(this.state.exit, constDone)
      } else if (n <= 0) {
        return core.succeed([empty, false])
      }
      n = Math.min(n, this.capacity)
      let messages: Chunk.Chunk<A>
      if (n <= this.messagesChunk.length) {
        messages = Chunk.take(this.messagesChunk, n)
        this.messagesChunk = Chunk.drop(this.messagesChunk, n)
      } else if (n <= this.messages.length + this.messagesChunk.length) {
        this.messagesChunk = Chunk.appendAll(this.messagesChunk, Chunk.unsafeFromArray(this.messages))
        this.messages = []
        messages = Chunk.take(this.messagesChunk, n)
        this.messagesChunk = Chunk.drop(this.messagesChunk, n)
      } else {
        return core.zipRight(this.awaitTake, this.takeN(n))
      }
      return core.succeed([messages, this.releaseCapacity()])
    })
  }
  unsafeTake(): Exit<A, E | NoSuchElementException> | undefined {
    if (this.state._tag === "Done") {
      return core.exitZipRight(this.state.exit, core.exitFail(new NoSuchElementException()))
    }
    let message: A
    if (this.messagesChunk.length > 0) {
      message = Chunk.unsafeHead(this.messagesChunk)
      this.messagesChunk = Chunk.drop(this.messagesChunk, 1)
    } else if (this.messages.length > 0) {
      message = this.messages[0]
      this.messagesChunk = Chunk.drop(Chunk.unsafeFromArray(this.messages), 1)
      this.messages = []
    } else if (this.capacity <= 0 && this.state.offers.size > 0) {
      this.capacity = 1
      this.releaseCapacity()
      this.capacity = 0
      return this.messages.length > 0 ? core.exitSucceed(this.messages.pop()!) : undefined
    } else {
      return undefined
    }
    this.releaseCapacity()
    return core.exitSucceed(message)
  }
  take: Effect<A, E | NoSuchElementException> = core.suspend(() =>
    this.unsafeTake() ?? core.zipRight(this.awaitTake, this.take)
  )
  await: Effect<void, E> = core.asyncInterrupt<void, E>((resume) => {
    if (this.state._tag === "Done") {
      return resume(this.state.exit)
    }
    this.state.awaiters.add(resume)
    return core.sync(() => {
      if (this.state._tag !== "Done") {
        this.state.awaiters.delete(resume)
      }
    })
  })
  unsafeSize(): Option.Option<number> {
    const size = this.messages.length + this.messagesChunk.length
    return this.state._tag === "Done" ? Option.none() : Option.some(size)
  }
  size = core.sync(() => this.unsafeSize())

  commit() {
    return this.takeAll
  }
  pipe() {
    return pipeArguments(this, arguments)
  }
  toJSON() {
    return {
      _id: "effect/Mailbox",
      state: this.state._tag,
      size: this.unsafeSize().toJSON()
    }
  }
  toString(): string {
    return Inspectable.format(this)
  }
  [Inspectable.NodeInspectSymbol]() {
    return Inspectable.format(this)
  }

  private offerRemainingSingle(message: A) {
    return core.asyncInterrupt<boolean>((resume) => {
      if (this.state._tag !== "Open") {
        return resume(exitFalse)
      }
      const entry: OfferEntry<A> = { _tag: "Single", message, resume }
      this.state.offers.add(entry)
      return core.sync(() => {
        if (this.state._tag === "Open") {
          this.state.offers.delete(entry)
        }
      })
    })
  }
  private offerRemainingArray(remaining: Array<A>) {
    return core.asyncInterrupt<Chunk.Chunk<A>>((resume) => {
      if (this.state._tag !== "Open") {
        return resume(core.exitSucceed(Chunk.unsafeFromArray(remaining)))
      }
      const entry: OfferEntry<A> = { _tag: "Array", remaining, offset: 0, resume }
      this.state.offers.add(entry)
      return core.sync(() => {
        if (this.state._tag === "Open") {
          this.state.offers.delete(entry)
        }
      })
    })
  }
  private releaseCapacity(): boolean {
    if (this.state._tag === "Done") {
      return this.state.exit._tag === "Success"
    } else if (this.state.offers.size === 0) {
      if (this.state._tag === "Closing" && this.messages.length === 0 && this.messagesChunk.length === 0) {
        this.finalize(this.state.exit)
        return this.state.exit._tag === "Success"
      }
      return false
    }
    let n = this.capacity - this.messages.length - this.messagesChunk.length
    for (const entry of this.state.offers) {
      if (n === 0) return false
      else if (entry._tag === "Single") {
        this.messages.push(entry.message)
        n--
        entry.resume(exitTrue)
        this.state.offers.delete(entry)
      } else {
        for (; entry.offset < entry.remaining.length; entry.offset++) {
          if (n === 0) return false
          this.messages.push(entry.remaining[entry.offset])
          n--
        }
        entry.resume(exitEmpty)
        this.state.offers.delete(entry)
      }
    }
    return false
  }
  private awaitTake = core.asyncInterrupt<void, E>((resume) => {
    if (this.state._tag === "Done") {
      return resume(this.state.exit)
    }
    this.state.takers.add(resume)
    return core.sync(() => {
      if (this.state._tag !== "Done") {
        this.state.takers.delete(resume)
      }
    })
  })

  private scheduleRunning = false
  private scheduleReleaseTaker() {
    if (this.scheduleRunning) {
      return
    }
    this.scheduleRunning = true
    this.scheduler.scheduleTask(this.releaseTaker, 0)
  }
  private releaseTaker = () => {
    this.scheduleRunning = false
    if (this.state._tag === "Done") {
      return
    } else if (this.state.takers.size === 0) {
      return
    }
    for (const taker of this.state.takers) {
      this.state.takers.delete(taker)
      taker(core.exitVoid)
      if (this.messages.length + this.messagesChunk.length === 0) {
        break
      }
    }
  }

  private unsafeTakeAll() {
    if (this.messagesChunk.length > 0) {
      const messages = this.messages.length > 0 ?
        Chunk.appendAll(this.messagesChunk, Chunk.unsafeFromArray(this.messages)) :
        this.messagesChunk
      this.messagesChunk = empty
      this.messages = []
      return messages
    } else if (this.messages.length > 0) {
      const messages = Chunk.unsafeFromArray(this.messages)
      this.messages = []
      return messages
    } else if (this.state._tag !== "Done" && this.state.offers.size > 0) {
      this.capacity = 1
      this.releaseCapacity()
      this.capacity = 0
      return Chunk.of(this.messages.pop()!)
    }
    return empty
  }

  private finalize(exit: Exit<void, E>) {
    if (this.state._tag === "Done") {
      return
    }
    const openState = this.state
    this.state = { _tag: "Done", exit }
    for (const taker of openState.takers) {
      taker(exit)
    }
    openState.takers.clear()
    for (const awaiter of openState.awaiters) {
      awaiter(exit)
    }
    openState.awaiters.clear()
  }
}

/** @internal */
export const make = <A, E = never>(
  capacity?: number | {
    readonly capacity?: number | undefined
    readonly strategy?: "suspend" | "dropping" | "sliding" | undefined
  } | undefined
): Effect<Api.Mailbox<A, E>> =>
  core.withFiberRuntime((fiber) =>
    core.succeed(
      new MailboxImpl<A, E>(
        fiber.currentScheduler,
        typeof capacity === "number" ? capacity : capacity?.capacity ?? Number.POSITIVE_INFINITY,
        typeof capacity === "number" ? "suspend" : capacity?.strategy ?? "suspend"
      )
    )
  )

/** @internal */
export const into: {
  <A, E>(
    self: Api.Mailbox<A, E>
  ): <AX, EX extends E, RX>(effect: Effect<AX, EX, RX>) => Effect<boolean, never, RX>
  <AX, E, EX extends E, RX, A>(
    effect: Effect<AX, EX, RX>,
    self: Api.Mailbox<A, E>
  ): Effect<boolean, never, RX>
} = dual(
  2,
  <AX, E, EX extends E, RX, A>(
    effect: Effect<AX, EX, RX>,
    self: Api.Mailbox<A, E>
  ): Effect<boolean, never, RX> =>
    core.uninterruptibleMask((restore) =>
      core.matchCauseEffect(restore(effect), {
        onFailure: (cause) => self.failCause(cause),
        onSuccess: (_) => self.end
      })
    )
)

/** @internal */
export const toChannel = <A, E>(self: Api.ReadonlyMailbox<A, E>): Channel<Chunk.Chunk<A>, unknown, E> => {
  const loop: Channel<Chunk.Chunk<A>, unknown, E> = coreChannel.flatMap(self.takeAll, ([messages, done]) =>
    done
      ? messages.length === 0 ? coreChannel.void : coreChannel.write(messages)
      : channel.zipRight(coreChannel.write(messages), loop))
  return loop
}

/** @internal */
export const toStream = <A, E>(self: Api.ReadonlyMailbox<A, E>): Stream<A, E> => stream.fromChannel(toChannel(self))

/** @internal */
export const fromStream: {
  (options?: {
    readonly capacity?: number | undefined
    readonly strategy?: "suspend" | "dropping" | "sliding" | undefined
  }): <A, E, R>(self: Stream<A, E, R>) => Effect<Api.ReadonlyMailbox<A, E>, never, R | Scope>
  <A, E, R>(
    self: Stream<A, E, R>,
    options?: {
      readonly capacity?: number | undefined
      readonly strategy?: "suspend" | "dropping" | "sliding" | undefined
    }
  ): Effect<Api.ReadonlyMailbox<A, E>, never, R | Scope>
} = dual((args) => stream.isStream(args[0]), <A, E, R>(
  self: Stream<A, E, R>,
  options?: {
    readonly capacity?: number | undefined
    readonly strategy?: "suspend" | "dropping" | "sliding" | undefined
  }
): Effect<Api.ReadonlyMailbox<A, E>, never, R | Scope> =>
  core.tap(
    fiberRuntime.acquireRelease(
      make<A, E>(options),
      (mailbox) => mailbox.shutdown
    ),
    (mailbox) => {
      const writer: Channel<never, Chunk.Chunk<A>, never, E> = coreChannel.readWithCause({
        onInput: (input: Chunk.Chunk<A>) => coreChannel.flatMap(mailbox.offerAll(input), () => writer),
        onFailure: (cause: Cause<E>) => mailbox.failCause(cause),
        onDone: () => mailbox.end
      })
      return fiberRuntime.scopeWith((scope) =>
        stream.toChannel(self).pipe(
          coreChannel.pipeTo(writer),
          channelExecutor.runIn(scope),
          circular.forkIn(scope)
        )
      )
    }
  ))
