import * as Arr from "../Array.js"
import * as Context from "../Context.js"
import * as FiberRefs from "../FiberRefs.js"
import type { LazyArg } from "../Function.js"
import { constVoid, dual } from "../Function.js"
import { globalValue } from "../GlobalValue.js"
import * as HashMap from "../HashMap.js"
import * as Inspectable from "../Inspectable.js"
import * as List from "../List.js"
import type * as Logger from "../Logger.js"
import type * as LogLevel from "../LogLevel.js"
import * as Option from "../Option.js"
import { pipeArguments } from "../Pipeable.js"
import * as Cause from "./cause.js"
import * as defaultServices from "./defaultServices.js"
import { consoleTag } from "./defaultServices/console.js"
import * as fiberId_ from "./fiberId.js"
import * as logSpan_ from "./logSpan.js"

/** @internal */
const LoggerSymbolKey = "effect/Logger"

/** @internal */
export const LoggerTypeId: Logger.LoggerTypeId = Symbol.for(
  LoggerSymbolKey
) as Logger.LoggerTypeId

const loggerVariance = {
  /* c8 ignore next */
  _Message: (_: unknown) => _,
  /* c8 ignore next */
  _Output: (_: never) => _
}

/** @internal */
export const makeLogger = <Message, Output>(
  log: (options: Logger.Logger.Options<Message>) => Output
): Logger.Logger<Message, Output> => ({
  [LoggerTypeId]: loggerVariance,
  log,
  pipe() {
    return pipeArguments(this, arguments)
  }
})

/** @internal */
export const mapInput = dual<
  <Message, Message2>(
    f: (message: Message2) => Message
  ) => <Output>(self: Logger.Logger<Message, Output>) => Logger.Logger<Message2, Output>,
  <Output, Message, Message2>(
    self: Logger.Logger<Message, Output>,
    f: (message: Message2) => Message
  ) => Logger.Logger<Message2, Output>
>(2, (self, f) =>
  makeLogger(
    (options) => self.log({ ...options, message: f(options.message) })
  ))

/** @internal */
export const mapInputOptions = dual<
  <Message, Message2>(
    f: (options: Logger.Logger.Options<Message2>) => Logger.Logger.Options<Message>
  ) => <Output>(self: Logger.Logger<Message, Output>) => Logger.Logger<Message2, Output>,
  <Output, Message, Message2>(
    self: Logger.Logger<Message, Output>,
    f: (options: Logger.Logger.Options<Message2>) => Logger.Logger.Options<Message>
  ) => Logger.Logger<Message2, Output>
>(2, (self, f) => makeLogger((options) => self.log(f(options))))

/** @internal */
export const filterLogLevel = dual<
  (
    f: (logLevel: LogLevel.LogLevel) => boolean
  ) => <Message, Output>(self: Logger.Logger<Message, Output>) => Logger.Logger<Message, Option.Option<Output>>,
  <Message, Output>(
    self: Logger.Logger<Message, Output>,
    f: (logLevel: LogLevel.LogLevel) => boolean
  ) => Logger.Logger<Message, Option.Option<Output>>
>(2, (self, f) =>
  makeLogger((options) =>
    f(options.logLevel)
      ? Option.some(self.log(options))
      : Option.none()
  ))

/** @internal */
export const map = dual<
  <Output, Output2>(
    f: (output: Output) => Output2
  ) => <Message>(self: Logger.Logger<Message, Output>) => Logger.Logger<Message, Output2>,
  <Message, Output, Output2>(
    self: Logger.Logger<Message, Output>,
    f: (output: Output) => Output2
  ) => Logger.Logger<Message, Output2>
>(2, (self, f) => makeLogger((options) => f(self.log(options))))

/** @internal */
export const none: Logger.Logger<unknown, void> = {
  [LoggerTypeId]: loggerVariance,
  log: constVoid,
  pipe() {
    return pipeArguments(this, arguments)
  }
} as Logger.Logger<unknown, void>

/** @internal */
export const simple = <A, B>(log: (a: A) => B): Logger.Logger<A, B> => ({
  [LoggerTypeId]: loggerVariance,
  log: ({ message }) => log(message),
  pipe() {
    return pipeArguments(this, arguments)
  }
})

/** @internal */
export const succeed = <A>(value: A): Logger.Logger<unknown, A> => {
  return simple(() => value)
}

/** @internal */
export const sync = <A>(evaluate: LazyArg<A>): Logger.Logger<unknown, A> => {
  return simple(evaluate)
}

/** @internal */
export const zip = dual<
  <Message2, Output2>(
    that: Logger.Logger<Message2, Output2>
  ) => <Message, Output>(
    self: Logger.Logger<Message, Output>
  ) => Logger.Logger<Message & Message2, [Output, Output2]>,
  <Message, Output, Message2, Output2>(
    self: Logger.Logger<Message, Output>,
    that: Logger.Logger<Message2, Output2>
  ) => Logger.Logger<Message & Message2, [Output, Output2]>
>(2, (self, that) => makeLogger((options) => [self.log(options), that.log(options)]))

/** @internal */
export const zipLeft = dual<
  <Message2, Output2>(
    that: Logger.Logger<Message2, Output2>
  ) => <Message, Output>(
    self: Logger.Logger<Message, Output>
  ) => Logger.Logger<Message & Message2, Output>,
  <Message, Output, Message2, Output2>(
    self: Logger.Logger<Message, Output>,
    that: Logger.Logger<Message2, Output2>
  ) => Logger.Logger<Message & Message2, Output>
>(2, (self, that) => map(zip(self, that), (tuple) => tuple[0]))

/** @internal */
export const zipRight = dual<
  <Message2, Output2>(
    that: Logger.Logger<Message2, Output2>
  ) => <Message, Output>(
    self: Logger.Logger<Message, Output>
  ) => Logger.Logger<Message & Message2, Output2>,
  <Message, Output, Message2, Output2>(
    self: Logger.Logger<Message, Output>,
    that: Logger.Logger<Message2, Output2>
  ) => Logger.Logger<Message & Message2, Output2>
>(2, (self, that) => map(zip(self, that), (tuple) => tuple[1]))

/**
 * Match strings that do not contain any whitespace characters, double quotes,
 * or equal signs.
 *
 * @internal
 */
const textOnly = /^[^\s"=]*$/

/**
 * Used by both {@link stringLogger} and {@link logfmtLogger} to render a log
 * message.
 *
 * @internal
 */
const format = (quoteValue: (s: string) => string, whitespace?: number | string | undefined) =>
(
  { annotations, cause, date, fiberId, logLevel, message, spans }: Logger.Logger.Options<unknown>
): string => {
  const formatValue = (value: string): string => value.match(textOnly) ? value : quoteValue(value)
  const format = (label: string, value: string): string => `${logSpan_.formatLabel(label)}=${formatValue(value)}`
  const append = (label: string, value: string): string => " " + format(label, value)

  let out = format("timestamp", date.toISOString())
  out += append("level", logLevel.label)
  out += append("fiber", fiberId_.threadName(fiberId))

  const messages = Arr.ensure(message)
  for (let i = 0; i < messages.length; i++) {
    out += append("message", Inspectable.toStringUnknown(messages[i], whitespace))
  }

  if (!Cause.isEmptyType(cause)) {
    out += append("cause", Cause.pretty(cause, { renderErrorCause: true }))
  }

  for (const span of spans) {
    out += " " + logSpan_.render(date.getTime())(span)
  }

  for (const [label, value] of annotations) {
    out += append(label, Inspectable.toStringUnknown(value, whitespace))
  }

  return out
}

/** @internal */
const escapeDoubleQuotes = (s: string) => `"${s.replace(/\\([\s\S])|(")/g, "\\$1$2")}"`

/** @internal */
export const stringLogger: Logger.Logger<unknown, string> = makeLogger(format(escapeDoubleQuotes))

/** @internal */
export const logfmtLogger: Logger.Logger<unknown, string> = makeLogger(format(JSON.stringify, 0))

/** @internal */
export const structuredLogger = makeLogger<unknown, {
  readonly logLevel: string
  readonly fiberId: string
  readonly timestamp: string
  readonly message: unknown
  readonly cause: string | undefined
  readonly annotations: Record<string, unknown>
  readonly spans: Record<string, number>
}>(
  ({ annotations, cause, date, fiberId, logLevel, message, spans }) => {
    const now = date.getTime()
    const annotationsObj: Record<string, unknown> = {}
    const spansObj: Record<string, number> = {}

    if (HashMap.size(annotations) > 0) {
      for (const [k, v] of annotations) {
        annotationsObj[k] = structuredMessage(v)
      }
    }

    if (List.isCons(spans)) {
      for (const span of spans) {
        spansObj[span.label] = now - span.startTime
      }
    }

    const messageArr = Arr.ensure(message)
    return {
      message: messageArr.length === 1 ? structuredMessage(messageArr[0]) : messageArr.map(structuredMessage),
      logLevel: logLevel.label,
      timestamp: date.toISOString(),
      cause: Cause.isEmpty(cause) ? undefined : Cause.pretty(cause, { renderErrorCause: true }),
      annotations: annotationsObj,
      spans: spansObj,
      fiberId: fiberId_.threadName(fiberId)
    }
  }
)

/** @internal */
export const structuredMessage = (u: unknown): unknown => {
  switch (typeof u) {
    case "bigint":
    case "function":
    case "symbol": {
      return String(u)
    }
    default: {
      return Inspectable.toJSON(u)
    }
  }
}

/** @internal */
export const jsonLogger = map(structuredLogger, Inspectable.stringifyCircular)

/** @internal */
export const isLogger = (u: unknown): u is Logger.Logger<unknown, unknown> => {
  return typeof u === "object" && u != null && LoggerTypeId in u
}

const withColor = (text: string, ...colors: ReadonlyArray<string>) => {
  let out = ""
  for (let i = 0; i < colors.length; i++) {
    out += `\x1b[${colors[i]}m`
  }
  return out + text + "\x1b[0m"
}
const withColorNoop = (text: string, ..._colors: ReadonlyArray<string>) => text
const colors = {
  bold: "1",
  red: "31",
  green: "32",
  yellow: "33",
  blue: "34",
  cyan: "36",
  white: "37",
  gray: "90",
  black: "30",
  bgBrightRed: "101"
} as const

const logLevelColors: Record<LogLevel.LogLevel["_tag"], ReadonlyArray<string>> = {
  None: [],
  All: [],
  Trace: [colors.gray],
  Debug: [colors.blue],
  Info: [colors.green],
  Warning: [colors.yellow],
  Error: [colors.red],
  Fatal: [colors.bgBrightRed, colors.black]
}
const logLevelStyle: Record<LogLevel.LogLevel["_tag"], string> = {
  None: "",
  All: "",
  Trace: "color:gray",
  Debug: "color:blue",
  Info: "color:green",
  Warning: "color:orange",
  Error: "color:red",
  Fatal: "background-color:red;color:white"
}

const defaultDateFormat = (date: Date): string =>
  `${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}:${
    date.getSeconds().toString().padStart(2, "0")
  }.${date.getMilliseconds().toString().padStart(3, "0")}`

const hasProcessStdout = typeof process === "object" &&
  process !== null &&
  typeof process.stdout === "object" &&
  process.stdout !== null
const processStdoutIsTTY = hasProcessStdout &&
  process.stdout.isTTY === true
const hasProcessStdoutOrDeno = hasProcessStdout || "Deno" in globalThis

/** @internal */
export const prettyLogger = (options?: {
  readonly colors?: "auto" | boolean | undefined
  readonly stderr?: boolean | undefined
  readonly formatDate?: ((date: Date) => string) | undefined
  readonly mode?: "browser" | "tty" | "auto" | undefined
}) => {
  const mode_ = options?.mode ?? "auto"
  const mode = mode_ === "auto" ? (hasProcessStdoutOrDeno ? "tty" : "browser") : mode_
  const isBrowser = mode === "browser"
  const showColors = typeof options?.colors === "boolean" ? options.colors : processStdoutIsTTY || isBrowser
  const formatDate = options?.formatDate ?? defaultDateFormat
  return isBrowser
    ? prettyLoggerBrowser({ colors: showColors, formatDate })
    : prettyLoggerTty({ colors: showColors, formatDate, stderr: options?.stderr === true })
}

const prettyLoggerTty = (options: {
  readonly colors: boolean
  readonly stderr: boolean
  readonly formatDate: (date: Date) => string
}) => {
  const color = options.colors ? withColor : withColorNoop
  return makeLogger<unknown, void>(
    ({ annotations, cause, context, date, fiberId, logLevel, message: message_, spans }) => {
      const services = FiberRefs.getOrDefault(context, defaultServices.currentServices)
      const console = Context.get(services, consoleTag).unsafe
      const log = options.stderr === true ? console.error : console.log

      const message = Arr.ensure(message_)

      let firstLine = color(`[${options.formatDate(date)}]`, colors.white)
        + ` ${color(logLevel.label, ...logLevelColors[logLevel._tag])}`
        + ` (${fiberId_.threadName(fiberId)})`

      if (List.isCons(spans)) {
        const now = date.getTime()
        const render = logSpan_.render(now)
        for (const span of spans) {
          firstLine += " " + render(span)
        }
      }

      firstLine += ":"
      let messageIndex = 0
      if (message.length > 0) {
        const firstMaybeString = structuredMessage(message[0])
        if (typeof firstMaybeString === "string") {
          firstLine += " " + color(firstMaybeString, colors.bold, colors.cyan)
          messageIndex++
        }
      }

      log(firstLine)
      console.group()

      if (!Cause.isEmpty(cause)) {
        log(Cause.pretty(cause, { renderErrorCause: true }))
      }

      if (messageIndex < message.length) {
        for (; messageIndex < message.length; messageIndex++) {
          log(Inspectable.redact(message[messageIndex]))
        }
      }

      if (HashMap.size(annotations) > 0) {
        for (const [key, value] of annotations) {
          log(color(`${key}:`, colors.bold, colors.white), Inspectable.redact(value))
        }
      }

      console.groupEnd()
    }
  )
}

const prettyLoggerBrowser = (options: {
  readonly colors: boolean
  readonly formatDate: (date: Date) => string
}) => {
  const color = options.colors ? "%c" : ""
  return makeLogger<unknown, void>(
    ({ annotations, cause, context, date, fiberId, logLevel, message: message_, spans }) => {
      const services = FiberRefs.getOrDefault(context, defaultServices.currentServices)
      const console = Context.get(services, consoleTag).unsafe
      const message = Arr.ensure(message_)

      let firstLine = `${color}[${options.formatDate(date)}]`
      const firstParams = []
      if (options.colors) {
        firstParams.push("color:gray")
      }
      firstLine += ` ${color}${logLevel.label}${color} (${fiberId_.threadName(fiberId)})`
      if (options.colors) {
        firstParams.push(logLevelStyle[logLevel._tag], "")
      }
      if (List.isCons(spans)) {
        const now = date.getTime()
        const render = logSpan_.render(now)
        for (const span of spans) {
          firstLine += " " + render(span)
        }
      }

      firstLine += ":"

      let messageIndex = 0
      if (message.length > 0) {
        const firstMaybeString = structuredMessage(message[0])
        if (typeof firstMaybeString === "string") {
          firstLine += ` ${color}${firstMaybeString}`
          if (options.colors) {
            firstParams.push("color:deepskyblue")
          }
          messageIndex++
        }
      }

      console.groupCollapsed(firstLine, ...firstParams)

      if (!Cause.isEmpty(cause)) {
        console.error(...Cause.prettyErrors(cause))
      }

      if (messageIndex < message.length) {
        for (; messageIndex < message.length; messageIndex++) {
          console.log(Inspectable.redact(message[messageIndex]))
        }
      }

      if (HashMap.size(annotations) > 0) {
        for (const [key, value] of annotations) {
          const redacted = Inspectable.redact(value)
          if (options.colors) {
            console.log(`%c${key}:`, "color:gray", redacted)
          } else {
            console.log(`${key}:`, redacted)
          }
        }
      }

      console.groupEnd()
    }
  )
}

/** @internal */
export const prettyLoggerDefault = globalValue("effect/Logger/prettyLoggerDefault", () => prettyLogger())
