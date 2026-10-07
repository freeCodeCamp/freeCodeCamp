import * as RA from "../Array.js"
import type * as Cause from "../Cause.js"
import type * as ConfigError from "../ConfigError.js"
import * as Either from "../Either.js"
import { constFalse, constTrue, dual, pipe } from "../Function.js"
import { hasProperty } from "../Predicate.js"
import * as OpCodes from "./opCodes/configError.js"

/** @internal */
const ConfigErrorSymbolKey = "effect/ConfigError"

/** @internal */
export const ConfigErrorTypeId: ConfigError.ConfigErrorTypeId = Symbol.for(
  ConfigErrorSymbolKey
) as ConfigError.ConfigErrorTypeId

/** @internal */
export const proto = {
  _tag: "ConfigError",
  [ConfigErrorTypeId]: ConfigErrorTypeId
}

/** @internal */
export const And = (self: ConfigError.ConfigError, that: ConfigError.ConfigError): ConfigError.ConfigError => {
  const error = Object.create(proto)
  error._op = OpCodes.OP_AND
  error.left = self
  error.right = that
  Object.defineProperty(error, "toString", {
    enumerable: false,
    value(this: ConfigError.And) {
      return `${this.left} and ${this.right}`
    }
  })
  Object.defineProperty(error, "message", {
    enumerable: false,
    get(this: ConfigError.And) {
      return this.toString()
    }
  })
  return error
}

/** @internal */
export const Or = (self: ConfigError.ConfigError, that: ConfigError.ConfigError): ConfigError.ConfigError => {
  const error = Object.create(proto)
  error._op = OpCodes.OP_OR
  error.left = self
  error.right = that
  Object.defineProperty(error, "toString", {
    enumerable: false,
    value(this: ConfigError.Or) {
      return `${this.left} or ${this.right}`
    }
  })
  Object.defineProperty(error, "message", {
    enumerable: false,
    get(this: ConfigError.Or) {
      return this.toString()
    }
  })
  return error
}

/** @internal */
export const InvalidData = (
  path: ReadonlyArray<string>,
  message: string,
  options: ConfigError.Options = { pathDelim: "." }
): ConfigError.ConfigError => {
  const error = Object.create(proto)
  error._op = OpCodes.OP_INVALID_DATA
  error.path = path
  error.message = message
  Object.defineProperty(error, "toString", {
    enumerable: false,
    value(this: ConfigError.InvalidData) {
      const path = pipe(this.path, RA.join(options.pathDelim))
      return `(Invalid data at ${path}: "${this.message}")`
    }
  })
  return error
}

/** @internal */
export const MissingData = (
  path: ReadonlyArray<string>,
  message: string,
  options: ConfigError.Options = { pathDelim: "." }
): ConfigError.ConfigError => {
  const error = Object.create(proto)
  error._op = OpCodes.OP_MISSING_DATA
  error.path = path
  error.message = message
  Object.defineProperty(error, "toString", {
    enumerable: false,
    value(this: ConfigError.MissingData) {
      const path = pipe(this.path, RA.join(options.pathDelim))
      return `(Missing data at ${path}: "${this.message}")`
    }
  })
  return error
}

/** @internal */
export const SourceUnavailable = (
  path: ReadonlyArray<string>,
  message: string,
  cause: Cause.Cause<unknown>,
  options: ConfigError.Options = { pathDelim: "." }
): ConfigError.ConfigError => {
  const error = Object.create(proto)
  error._op = OpCodes.OP_SOURCE_UNAVAILABLE
  error.path = path
  error.message = message
  error.cause = cause
  Object.defineProperty(error, "toString", {
    enumerable: false,
    value(this: ConfigError.SourceUnavailable) {
      const path = pipe(this.path, RA.join(options.pathDelim))
      return `(Source unavailable at ${path}: "${this.message}")`
    }
  })
  return error
}

/** @internal */
export const Unsupported = (
  path: ReadonlyArray<string>,
  message: string,
  options: ConfigError.Options = { pathDelim: "." }
): ConfigError.ConfigError => {
  const error = Object.create(proto)
  error._op = OpCodes.OP_UNSUPPORTED
  error.path = path
  error.message = message
  Object.defineProperty(error, "toString", {
    enumerable: false,
    value(this: ConfigError.Unsupported) {
      const path = pipe(this.path, RA.join(options.pathDelim))
      return `(Unsupported operation at ${path}: "${this.message}")`
    }
  })
  return error
}

/** @internal */
export const isConfigError = (u: unknown): u is ConfigError.ConfigError => hasProperty(u, ConfigErrorTypeId)

/** @internal */
export const isAnd = (self: ConfigError.ConfigError): self is ConfigError.And => self._op === OpCodes.OP_AND

/** @internal */
export const isOr = (self: ConfigError.ConfigError): self is ConfigError.Or => self._op === OpCodes.OP_OR

/** @internal */
export const isInvalidData = (self: ConfigError.ConfigError): self is ConfigError.InvalidData =>
  self._op === OpCodes.OP_INVALID_DATA

/** @internal */
export const isMissingData = (self: ConfigError.ConfigError): self is ConfigError.MissingData =>
  self._op === OpCodes.OP_MISSING_DATA

/** @internal */
export const isSourceUnavailable = (self: ConfigError.ConfigError): self is ConfigError.SourceUnavailable =>
  self._op === OpCodes.OP_SOURCE_UNAVAILABLE

/** @internal */
export const isUnsupported = (self: ConfigError.ConfigError): self is ConfigError.Unsupported =>
  self._op === OpCodes.OP_UNSUPPORTED

/** @internal */
export const prefixed: {
  (prefix: ReadonlyArray<string>): (self: ConfigError.ConfigError) => ConfigError.ConfigError
  (self: ConfigError.ConfigError, prefix: ReadonlyArray<string>): ConfigError.ConfigError
} = dual<
  (prefix: ReadonlyArray<string>) => (self: ConfigError.ConfigError) => ConfigError.ConfigError,
  (self: ConfigError.ConfigError, prefix: ReadonlyArray<string>) => ConfigError.ConfigError
>(2, (self, prefix) => {
  switch (self._op) {
    case OpCodes.OP_AND: {
      return And(prefixed(self.left, prefix), prefixed(self.right, prefix))
    }
    case OpCodes.OP_OR: {
      return Or(prefixed(self.left, prefix), prefixed(self.right, prefix))
    }
    case OpCodes.OP_INVALID_DATA: {
      return InvalidData([...prefix, ...self.path], self.message)
    }
    case OpCodes.OP_MISSING_DATA: {
      return MissingData([...prefix, ...self.path], self.message)
    }
    case OpCodes.OP_SOURCE_UNAVAILABLE: {
      return SourceUnavailable([...prefix, ...self.path], self.message, self.cause)
    }
    case OpCodes.OP_UNSUPPORTED: {
      return Unsupported([...prefix, ...self.path], self.message)
    }
  }
})

/** @internal */
const IsMissingDataOnlyReducer: ConfigError.ConfigErrorReducer<unknown, boolean> = {
  andCase: (_, left, right) => left && right,
  orCase: (_, left, right) => left && right,
  invalidDataCase: constFalse,
  missingDataCase: constTrue,
  sourceUnavailableCase: constFalse,
  unsupportedCase: constFalse
}

/** @internal */
type ConfigErrorCase = AndCase | OrCase

/** @internal */
interface AndCase {
  readonly _op: "AndCase"
}

/** @internal */
interface OrCase {
  readonly _op: "OrCase"
}

/** @internal */
export const reduceWithContext = dual<
  <C, Z>(context: C, reducer: ConfigError.ConfigErrorReducer<C, Z>) => (self: ConfigError.ConfigError) => Z,
  <C, Z>(self: ConfigError.ConfigError, context: C, reducer: ConfigError.ConfigErrorReducer<C, Z>) => Z
>(3, <C, Z>(self: ConfigError.ConfigError, context: C, reducer: ConfigError.ConfigErrorReducer<C, Z>) => {
  const input: Array<ConfigError.ConfigError> = [self]
  const output: Array<Either.Either<Z, ConfigErrorCase>> = []
  while (input.length > 0) {
    const error = input.pop()!
    switch (error._op) {
      case OpCodes.OP_AND: {
        input.push(error.right)
        input.push(error.left)
        output.push(Either.left({ _op: "AndCase" }))
        break
      }
      case OpCodes.OP_OR: {
        input.push(error.right)
        input.push(error.left)
        output.push(Either.left({ _op: "OrCase" }))
        break
      }
      case OpCodes.OP_INVALID_DATA: {
        output.push(Either.right(reducer.invalidDataCase(context, error.path, error.message)))
        break
      }
      case OpCodes.OP_MISSING_DATA: {
        output.push(Either.right(reducer.missingDataCase(context, error.path, error.message)))
        break
      }
      case OpCodes.OP_SOURCE_UNAVAILABLE: {
        output.push(Either.right(reducer.sourceUnavailableCase(context, error.path, error.message, error.cause)))
        break
      }
      case OpCodes.OP_UNSUPPORTED: {
        output.push(Either.right(reducer.unsupportedCase(context, error.path, error.message)))
        break
      }
    }
  }
  const accumulator: Array<Z> = []
  while (output.length > 0) {
    const either = output.pop()!
    switch (either._op) {
      case "Left": {
        switch (either.left._op) {
          case "AndCase": {
            const left = accumulator.pop()!
            const right = accumulator.pop()!
            const value = reducer.andCase(context, left, right)
            accumulator.push(value)
            break
          }
          case "OrCase": {
            const left = accumulator.pop()!
            const right = accumulator.pop()!
            const value = reducer.orCase(context, left, right)
            accumulator.push(value)
            break
          }
        }
        break
      }
      case "Right": {
        accumulator.push(either.right)
        break
      }
    }
  }
  if (accumulator.length === 0) {
    throw new Error(
      "BUG: ConfigError.reduceWithContext - please report an issue at https://github.com/Effect-TS/effect/issues"
    )
  }
  return accumulator.pop()!
})

/** @internal */
export const isMissingDataOnly = (self: ConfigError.ConfigError): boolean =>
  reduceWithContext(self, void 0, IsMissingDataOnlyReducer)
