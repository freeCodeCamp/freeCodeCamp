import type * as C from "../Context.js"
import * as Equal from "../Equal.js"
import type { LazyArg } from "../Function.js"
import { dual } from "../Function.js"
import { globalValue } from "../GlobalValue.js"
import * as Hash from "../Hash.js"
import { format, NodeInspectSymbol, toJSON } from "../Inspectable.js"
import type * as O from "../Option.js"
import { pipeArguments } from "../Pipeable.js"
import { hasProperty } from "../Predicate.js"
import type * as STM from "../STM.js"
import type { NoInfer } from "../Types.js"
import { EffectPrototype, effectVariance } from "./effectable.js"
import * as option from "./option.js"

/** @internal */
export const TagTypeId: C.TagTypeId = Symbol.for("effect/Context/Tag") as C.TagTypeId

/** @internal */
export const ReferenceTypeId: C.ReferenceTypeId = Symbol.for("effect/Context/Reference") as C.ReferenceTypeId

/** @internal */
const STMSymbolKey = "effect/STM"

/** @internal */
export const STMTypeId: STM.STMTypeId = Symbol.for(
  STMSymbolKey
) as STM.STMTypeId

/** @internal */
export const TagProto: any = {
  ...EffectPrototype,
  _op: "Tag",
  [STMTypeId]: effectVariance,
  [TagTypeId]: {
    _Service: (_: unknown) => _,
    _Identifier: (_: unknown) => _
  },
  toString() {
    return format(this.toJSON())
  },
  toJSON<I, A>(this: C.Tag<I, A>) {
    return {
      _id: "Tag",
      key: this.key,
      stack: this.stack
    }
  },
  [NodeInspectSymbol]() {
    return this.toJSON()
  },
  of<Service>(self: Service): Service {
    return self
  },
  context<Identifier, Service>(
    this: C.Tag<Identifier, Service>,
    self: Service
  ): C.Context<Identifier> {
    return make(this, self)
  }
}

export const ReferenceProto: any = {
  ...TagProto,
  [ReferenceTypeId]: ReferenceTypeId
}

/** @internal */
export const makeGenericTag = <Identifier, Service = Identifier>(key: string): C.Tag<Identifier, Service> => {
  const limit = Error.stackTraceLimit
  Error.stackTraceLimit = 2
  const creationError = new Error()
  Error.stackTraceLimit = limit
  const tag = Object.create(TagProto)
  Object.defineProperty(tag, "stack", {
    get() {
      return creationError.stack
    }
  })
  tag.key = key
  return tag
}

/** @internal */
export const Tag = <const Id extends string>(id: Id) => <Self, Shape>(): C.TagClass<Self, Id, Shape> => {
  const limit = Error.stackTraceLimit
  Error.stackTraceLimit = 2
  const creationError = new Error()
  Error.stackTraceLimit = limit

  function TagClass() {}
  Object.setPrototypeOf(TagClass, TagProto)
  TagClass.key = id
  Object.defineProperty(TagClass, "stack", {
    get() {
      return creationError.stack
    }
  })
  return TagClass as any
}

/** @internal */
export const Reference = <Self>() =>
<const Id extends string, Service>(id: Id, options: {
  readonly defaultValue: () => Service
}): C.ReferenceClass<Self, Id, Service> => {
  const limit = Error.stackTraceLimit
  Error.stackTraceLimit = 2
  const creationError = new Error()
  Error.stackTraceLimit = limit

  function ReferenceClass() {}
  Object.setPrototypeOf(ReferenceClass, ReferenceProto)
  ReferenceClass.key = id
  ReferenceClass.defaultValue = options.defaultValue
  Object.defineProperty(ReferenceClass, "stack", {
    get() {
      return creationError.stack
    }
  })
  return ReferenceClass as any
}

/** @internal */
export const TypeId: C.TypeId = Symbol.for("effect/Context") as C.TypeId

/** @internal */
export const ContextProto: Omit<C.Context<unknown>, "unsafeMap"> = {
  [TypeId]: {
    _Services: (_: unknown) => _
  },
  [Equal.symbol]<A>(this: C.Context<A>, that: unknown): boolean {
    if (isContext(that)) {
      if (this.unsafeMap.size === that.unsafeMap.size) {
        for (const k of this.unsafeMap.keys()) {
          if (!that.unsafeMap.has(k) || !Equal.equals(this.unsafeMap.get(k), that.unsafeMap.get(k))) {
            return false
          }
        }
        return true
      }
    }
    return false
  },
  [Hash.symbol]<A>(this: C.Context<A>): number {
    return Hash.cached(this, Hash.number(this.unsafeMap.size))
  },
  pipe<A>(this: C.Context<A>) {
    return pipeArguments(this, arguments)
  },
  toString() {
    return format(this.toJSON())
  },
  toJSON<A>(this: C.Context<A>) {
    return {
      _id: "Context",
      services: Array.from(this.unsafeMap).map(toJSON)
    }
  },
  [NodeInspectSymbol]() {
    return (this as any).toJSON()
  }
}

/** @internal */
export const makeContext = <Services>(unsafeMap: Map<string, any>): C.Context<Services> => {
  const context = Object.create(ContextProto)
  context.unsafeMap = unsafeMap
  return context
}

const serviceNotFoundError = (tag: C.Tag<any, any>) => {
  const error = new Error(`Service not found${tag.key ? `: ${String(tag.key)}` : ""}`)
  if (tag.stack) {
    const lines = tag.stack.split("\n")
    if (lines.length > 2) {
      const afterAt = lines[2].match(/at (.*)/)
      if (afterAt) {
        error.message = error.message + ` (defined at ${afterAt[1]})`
      }
    }
  }
  if (error.stack) {
    const lines = error.stack.split("\n")
    lines.splice(1, 3)
    error.stack = lines.join("\n")
  }
  return error
}

/** @internal */
export const isContext = (u: unknown): u is C.Context<never> => hasProperty(u, TypeId)

/** @internal */
export const isTag = (u: unknown): u is C.Tag<any, any> => hasProperty(u, TagTypeId)

/** @internal */
export const isReference = (u: unknown): u is C.Reference<any, any> => hasProperty(u, ReferenceTypeId)

const _empty = makeContext(new Map())

/** @internal */
export const empty = (): C.Context<never> => _empty

/** @internal */
export const make = <I, S>(tag: C.Tag<I, S>, service: NoInfer<S>): C.Context<I> =>
  makeContext(new Map([[tag.key, service]]))

/** @internal */
export const add = dual<
  <I, S>(
    tag: C.Tag<I, S>,
    service: NoInfer<S>
  ) => <Services>(
    self: C.Context<Services>
  ) => C.Context<Services | I>,
  <Services, I, S>(
    self: C.Context<Services>,
    tag: C.Tag<I, S>,
    service: NoInfer<S>
  ) => C.Context<Services | I>
>(3, (self, tag, service) => {
  const map = new Map(self.unsafeMap)
  map.set(tag.key, service)
  return makeContext(map)
})

const defaultValueCache = globalValue("effect/Context/defaultValueCache", () => new Map<string, any>())
const getDefaultValue = (tag: C.Reference<any, any>) => {
  if (defaultValueCache.has(tag.key)) {
    return defaultValueCache.get(tag.key)
  }
  const value = tag.defaultValue()
  defaultValueCache.set(tag.key, value)
  return value
}

/** @internal */
export const unsafeGetReference = <Services, I, S>(self: C.Context<Services>, tag: C.Reference<I, S>): S => {
  return self.unsafeMap.has(tag.key) ? self.unsafeMap.get(tag.key) : getDefaultValue(tag)
}

/** @internal */
export const unsafeGet = dual<
  <S, I>(tag: C.Tag<I, S>) => <Services>(self: C.Context<Services>) => S,
  <Services, S, I>(self: C.Context<Services>, tag: C.Tag<I, S>) => S
>(2, (self, tag) => {
  if (!self.unsafeMap.has(tag.key)) {
    if (ReferenceTypeId in tag) return getDefaultValue(tag as any)
    throw serviceNotFoundError(tag)
  }
  return self.unsafeMap.get(tag.key)! as any
})

/** @internal */
export const get: {
  <I, S>(tag: C.Reference<I, S>): <Services>(self: C.Context<Services>) => S
  <Services, I extends Services, S>(tag: C.Tag<I, S>): (self: C.Context<Services>) => S
  <Services, I, S>(self: C.Context<Services>, tag: C.Reference<I, S>): S
  <Services, I extends Services, S>(self: C.Context<Services>, tag: C.Tag<I, S>): S
} = unsafeGet as any

/** @internal */
export const getOrElse = dual<
  <S, I, B>(tag: C.Tag<I, S>, orElse: LazyArg<B>) => <Services>(self: C.Context<Services>) => S | B,
  <Services, S, I, B>(self: C.Context<Services>, tag: C.Tag<I, S>, orElse: LazyArg<B>) => S | B
>(3, (self, tag, orElse) => {
  if (!self.unsafeMap.has(tag.key)) {
    return isReference(tag) ? getDefaultValue(tag) : orElse()
  }
  return self.unsafeMap.get(tag.key)! as any
})

/** @internal */
export const getOption = dual<
  <S, I>(tag: C.Tag<I, S>) => <Services>(self: C.Context<Services>) => O.Option<S>,
  <Services, S, I>(self: C.Context<Services>, tag: C.Tag<I, S>) => O.Option<S>
>(2, (self, tag) => {
  if (!self.unsafeMap.has(tag.key)) {
    return isReference(tag) ? option.some(getDefaultValue(tag)) : option.none
  }
  return option.some(self.unsafeMap.get(tag.key)! as any)
})

/** @internal */
export const merge = dual<
  <R1>(that: C.Context<R1>) => <Services>(self: C.Context<Services>) => C.Context<Services | R1>,
  <Services, R1>(self: C.Context<Services>, that: C.Context<R1>) => C.Context<Services | R1>
>(2, (self, that) => {
  const map = new Map(self.unsafeMap)
  for (const [tag, s] of that.unsafeMap) {
    map.set(tag, s)
  }
  return makeContext(map)
})

/** @internal */
export const mergeAll = <T extends Array<unknown>>(
  ...ctxs: [...{ [K in keyof T]: C.Context<T[K]> }]
): C.Context<T[number]> => {
  const map = new Map()
  for (let i = 0; i < ctxs.length; i++) {
    ctxs[i].unsafeMap.forEach((value, key) => {
      map.set(key, value)
    })
  }
  return makeContext(map)
}

/** @internal */
export const pick =
  <Tags extends ReadonlyArray<C.Tag<any, any>>>(...tags: Tags) =>
  <Services>(self: C.Context<Services>): C.Context<
    Services & C.Tag.Identifier<Tags[number]>
  > => {
    const tagSet = new Set<string>(tags.map((_) => _.key))
    const newEnv = new Map()
    for (const [tag, s] of self.unsafeMap.entries()) {
      if (tagSet.has(tag)) {
        newEnv.set(tag, s)
      }
    }
    return makeContext(newEnv)
  }

/** @internal */
export const omit =
  <Tags extends ReadonlyArray<C.Tag<any, any>>>(...tags: Tags) =>
  <Services>(self: C.Context<Services>): C.Context<
    Exclude<Services, C.Tag.Identifier<Tags[number]>>
  > => {
    const newEnv = new Map(self.unsafeMap)
    for (const tag of tags) {
      newEnv.delete(tag.key)
    }
    return makeContext(newEnv)
  }
