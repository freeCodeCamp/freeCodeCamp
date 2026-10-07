/**
 * @since 2.0.0
 */

import type * as Either from "../Either.js"
import * as Equal from "../Equal.js"
import { dual } from "../Function.js"
import * as Hash from "../Hash.js"
import { format, NodeInspectSymbol, toJSON } from "../Inspectable.js"
import type { Option } from "../Option.js"
import { hasProperty } from "../Predicate.js"
import { EffectPrototype } from "./effectable.js"
import * as option from "./option.js"

/**
 * @internal
 */
export const TypeId: Either.TypeId = Symbol.for("effect/Either") as Either.TypeId

const CommonProto = {
  ...EffectPrototype,
  [TypeId]: {
    _R: (_: never) => _
  },
  [NodeInspectSymbol]<L, R>(this: Either.Either<R, L>) {
    return this.toJSON()
  },
  toString<L, R>(this: Either.Left<L, R>) {
    return format(this.toJSON())
  }
}

const RightProto = Object.assign(Object.create(CommonProto), {
  _tag: "Right",
  _op: "Right",
  [Equal.symbol]<L, R>(this: Either.Right<L, R>, that: unknown): boolean {
    return isEither(that) && isRight(that) && Equal.equals(this.right, that.right)
  },
  [Hash.symbol]<L, R>(this: Either.Right<L, R>) {
    return Hash.combine(Hash.hash(this._tag))(Hash.hash(this.right))
  },
  toJSON<L, R>(this: Either.Right<L, R>) {
    return {
      _id: "Either",
      _tag: this._tag,
      right: toJSON(this.right)
    }
  }
})

const LeftProto = Object.assign(Object.create(CommonProto), {
  _tag: "Left",
  _op: "Left",
  [Equal.symbol]<L, R>(this: Either.Left<L, R>, that: unknown): boolean {
    return isEither(that) && isLeft(that) && Equal.equals(this.left, that.left)
  },
  [Hash.symbol]<L, R>(this: Either.Left<L, R>) {
    return Hash.combine(Hash.hash(this._tag))(Hash.hash(this.left))
  },
  toJSON<E, A>(this: Either.Left<E, A>) {
    return {
      _id: "Either",
      _tag: this._tag,
      left: toJSON(this.left)
    }
  }
})

/** @internal */
export const isEither = (input: unknown): input is Either.Either<unknown, unknown> => hasProperty(input, TypeId)

/** @internal */
export const isLeft = <R, L>(ma: Either.Either<R, L>): ma is Either.Left<L, R> => ma._tag === "Left"

/** @internal */
export const isRight = <R, L>(ma: Either.Either<R, L>): ma is Either.Right<L, R> => ma._tag === "Right"

/** @internal */
export const left = <L>(left: L): Either.Either<never, L> => {
  const a = Object.create(LeftProto)
  a.left = left
  return a
}

/** @internal */
export const right = <R>(right: R): Either.Either<R> => {
  const a = Object.create(RightProto)
  a.right = right
  return a
}

/** @internal */
export const getLeft = <R, L>(
  self: Either.Either<R, L>
): Option<L> => (isRight(self) ? option.none : option.some(self.left))

/** @internal */
export const getRight = <R, L>(
  self: Either.Either<R, L>
): Option<R> => (isLeft(self) ? option.none : option.some(self.right))

/** @internal */
export const fromOption: {
  <L>(onNone: () => L): <R>(self: Option<R>) => Either.Either<R, L>
  <R, L>(self: Option<R>, onNone: () => L): Either.Either<R, L>
} = dual(
  2,
  <R, L>(self: Option<R>, onNone: () => L): Either.Either<R, L> =>
    option.isNone(self) ? left(onNone()) : right(self.value)
)
