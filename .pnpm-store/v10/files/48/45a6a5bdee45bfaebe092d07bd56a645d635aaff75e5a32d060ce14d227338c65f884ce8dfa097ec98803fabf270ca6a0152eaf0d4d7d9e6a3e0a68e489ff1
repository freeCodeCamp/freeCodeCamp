/* eslint-disable no-console */
import type * as Console from "../../Console.js"
import * as Context from "../../Context.js"
import * as core from "../core.js"

/** @internal */
export const TypeId: Console.TypeId = Symbol.for("effect/Console") as Console.TypeId

/** @internal */
export const consoleTag: Context.Tag<Console.Console, Console.Console> = Context.GenericTag<Console.Console>(
  "effect/Console"
)

/** @internal */
export const defaultConsole: Console.Console = {
  [TypeId]: TypeId,
  assert(condition, ...args) {
    return core.sync(() => {
      console.assert(condition, ...args)
    })
  },
  clear: core.sync(() => {
    console.clear()
  }),
  count(label) {
    return core.sync(() => {
      console.count(label)
    })
  },
  countReset(label) {
    return core.sync(() => {
      console.countReset(label)
    })
  },
  debug(...args) {
    return core.sync(() => {
      console.debug(...args)
    })
  },
  dir(item, options) {
    return core.sync(() => {
      console.dir(item, options)
    })
  },
  dirxml(...args) {
    return core.sync(() => {
      console.dirxml(...args)
    })
  },
  error(...args) {
    return core.sync(() => {
      console.error(...args)
    })
  },
  group(options) {
    return options?.collapsed ?
      core.sync(() => console.groupCollapsed(options?.label)) :
      core.sync(() => console.group(options?.label))
  },
  groupEnd: core.sync(() => {
    console.groupEnd()
  }),
  info(...args) {
    return core.sync(() => {
      console.info(...args)
    })
  },
  log(...args) {
    return core.sync(() => {
      console.log(...args)
    })
  },
  table(tabularData, properties) {
    return core.sync(() => {
      console.table(tabularData, properties)
    })
  },
  time(label) {
    return core.sync(() => console.time(label))
  },
  timeEnd(label) {
    return core.sync(() => console.timeEnd(label))
  },
  timeLog(label, ...args) {
    return core.sync(() => {
      console.timeLog(label, ...args)
    })
  },
  trace(...args) {
    return core.sync(() => {
      console.trace(...args)
    })
  },
  warn(...args) {
    return core.sync(() => {
      console.warn(...args)
    })
  },
  unsafe: console
}
