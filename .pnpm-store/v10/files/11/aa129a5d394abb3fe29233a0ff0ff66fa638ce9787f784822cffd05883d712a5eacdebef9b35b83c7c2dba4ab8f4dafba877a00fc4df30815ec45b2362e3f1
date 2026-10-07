import type * as Clock from "../Clock.js"
import * as Context from "../Context.js"
import * as Duration from "../Duration.js"
import type * as Effect from "../Effect.js"
import { constFalse } from "../Function.js"
import * as core from "./core.js"

/** @internal */
const ClockSymbolKey = "effect/Clock"

/** @internal */
export const ClockTypeId: Clock.ClockTypeId = Symbol.for(ClockSymbolKey) as Clock.ClockTypeId

/** @internal */
export const clockTag: Context.Tag<Clock.Clock, Clock.Clock> = Context.GenericTag("effect/Clock")

/** @internal */
export const MAX_TIMER_MILLIS = 2 ** 31 - 1

/** @internal */
export const globalClockScheduler: Clock.ClockScheduler = {
  unsafeSchedule(task: Clock.Task, duration: Duration.Duration): Clock.CancelToken {
    const millis = Duration.toMillis(duration)
    // If the duration is greater than the value allowable by the JS timer
    // functions, treat the value as an infinite duration
    if (millis > MAX_TIMER_MILLIS) {
      return constFalse
    }
    let completed = false
    const handle = setTimeout(() => {
      completed = true
      task()
    }, millis)
    return () => {
      clearTimeout(handle)
      return !completed
    }
  }
}

const performanceNowNanos = (function() {
  const bigint1e6 = BigInt(1_000_000)
  if (typeof performance === "undefined" || typeof performance.now !== "function") {
    return () => BigInt(Date.now()) * bigint1e6
  }
  let origin: bigint
  return () => {
    if (origin === undefined) {
      origin = (BigInt(Date.now()) * bigint1e6) - BigInt(Math.round(performance.now() * 1_000_000))
    }
    return origin + BigInt(Math.round(performance.now() * 1000000))
  }
})()
const processOrPerformanceNow = (function() {
  const processHrtime =
    typeof process === "object" && "hrtime" in process && typeof process.hrtime.bigint === "function" ?
      process.hrtime :
      undefined
  if (!processHrtime) {
    return performanceNowNanos
  }
  const origin = performanceNowNanos() - processHrtime.bigint()
  return () => origin + processHrtime.bigint()
})()

/** @internal */
class ClockImpl implements Clock.Clock {
  readonly [ClockTypeId]: Clock.ClockTypeId = ClockTypeId

  unsafeCurrentTimeMillis(): number {
    return Date.now()
  }

  unsafeCurrentTimeNanos(): bigint {
    return processOrPerformanceNow()
  }

  currentTimeMillis: Effect.Effect<number> = core.sync(() => this.unsafeCurrentTimeMillis())

  currentTimeNanos: Effect.Effect<bigint> = core.sync(() => this.unsafeCurrentTimeNanos())

  scheduler(): Effect.Effect<Clock.ClockScheduler> {
    return core.succeed(globalClockScheduler)
  }

  sleep(duration: Duration.Duration): Effect.Effect<void> {
    return core.async<void>((resume) => {
      const canceler = globalClockScheduler.unsafeSchedule(() => resume(core.void), duration)
      return core.asVoid(core.sync(canceler))
    })
  }
}

/** @internal */
export const make = (): Clock.Clock => new ClockImpl()
