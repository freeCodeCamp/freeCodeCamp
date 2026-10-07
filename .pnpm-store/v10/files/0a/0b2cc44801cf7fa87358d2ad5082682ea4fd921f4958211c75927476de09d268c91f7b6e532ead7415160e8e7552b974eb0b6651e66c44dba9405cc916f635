import * as Cause from "../../Cause.js"
import * as Chunk from "../../Chunk.js"
import * as Effect from "../../Effect.js"
import * as Exit from "../../Exit.js"
import { pipe } from "../../Function.js"
import * as Option from "../../Option.js"
import type * as Queue from "../../Queue.js"
import type * as Scheduler from "../../Scheduler.js"
import type * as Emit from "../../StreamEmit.js"

/** @internal */
export const make = <R, E, A, B>(
  emit: (f: Effect.Effect<Chunk.Chunk<A>, Option.Option<E>, R>) => Promise<B>
): Emit.Emit<R, E, A, B> => {
  const ops: Emit.EmitOps<R, E, A, B> = {
    chunk(this: Emit.Emit<R, E, A, B>, as: Chunk.Chunk<A>) {
      return this(Effect.succeed(as))
    },
    die<Err>(this: Emit.Emit<R, E, A, B>, defect: Err) {
      return this(Effect.die(defect))
    },
    dieMessage(this: Emit.Emit<R, E, A, B>, message: string) {
      return this(Effect.dieMessage(message))
    },
    done(this: Emit.Emit<R, E, A, B>, exit: Exit.Exit<A, E>) {
      return this(Effect.suspend(() => Exit.mapBoth(exit, { onFailure: Option.some, onSuccess: Chunk.of })))
    },
    end(this: Emit.Emit<R, E, A, B>) {
      return this(Effect.fail(Option.none()))
    },
    fail(this: Emit.Emit<R, E, A, B>, e: E) {
      return this(Effect.fail(Option.some(e)))
    },
    fromEffect(this: Emit.Emit<R, E, A, B>, effect: Effect.Effect<A, E, R>) {
      return this(Effect.mapBoth(effect, { onFailure: Option.some, onSuccess: Chunk.of }))
    },
    fromEffectChunk(this: Emit.Emit<R, E, A, B>, effect: Effect.Effect<Chunk.Chunk<A>, E, R>) {
      return this(pipe(effect, Effect.mapError(Option.some)))
    },
    halt(this: Emit.Emit<R, E, A, B>, cause: Cause.Cause<E>) {
      return this(Effect.failCause(pipe(cause, Cause.map(Option.some))))
    },
    single(this: Emit.Emit<R, E, A, B>, value: A) {
      return this(Effect.succeed(Chunk.of(value)))
    }
  }
  return Object.assign(emit, ops)
}

/** @internal */
export const makePush = <E, A>(
  queue: Queue.Queue<Array<A> | Exit.Exit<void, E>>,
  scheduler: Scheduler.Scheduler
): Emit.EmitOpsPush<E, A> => {
  let finished = false
  let buffer: Array<A> = []
  let running = false
  function array(items: ReadonlyArray<A>) {
    if (finished) return false
    if (items.length <= 50_000) {
      buffer.push.apply(buffer, items as Array<A>)
    } else {
      for (let i = 0; i < items.length; i++) {
        buffer.push(items[0])
      }
    }
    if (!running) {
      running = true
      scheduler.scheduleTask(flush, 0)
    }
    return true
  }
  function flush() {
    running = false
    if (buffer.length > 0) {
      queue.unsafeOffer(buffer)
      buffer = []
    }
  }
  function done(exit: Exit.Exit<A, E>) {
    if (finished) return
    finished = true
    if (exit._tag === "Success") {
      buffer.push(exit.value)
    }
    flush()
    queue.unsafeOffer(exit._tag === "Success" ? Exit.void : exit)
  }
  return {
    single(value: A) {
      if (finished) return false
      buffer.push(value)
      if (!running) {
        running = true
        scheduler.scheduleTask(flush, 0)
      }
      return true
    },
    array,
    chunk(chunk) {
      return array(Chunk.toReadonlyArray(chunk))
    },
    done,
    end() {
      if (finished) return
      finished = true
      flush()
      queue.unsafeOffer(Exit.void)
    },
    halt(cause: Cause.Cause<E>) {
      return done(Exit.failCause(cause))
    },
    fail(error: E) {
      return done(Exit.fail(error))
    },
    die<Err>(defect: Err): void {
      return done(Exit.die(defect))
    },
    dieMessage(message: string): void {
      return done(Exit.die(new Error(message)))
    }
  }
}
