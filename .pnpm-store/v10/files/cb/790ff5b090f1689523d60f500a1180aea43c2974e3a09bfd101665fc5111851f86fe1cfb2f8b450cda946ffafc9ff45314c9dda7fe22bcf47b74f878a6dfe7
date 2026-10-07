import * as Chunk from "../../Chunk.js"
import type { Context } from "../../Context.js"
import type { Differ } from "../../Differ.js"
import * as Equal from "../../Equal.js"
import * as Dual from "../../Function.js"
import { makeContext } from "../context.js"
import { Structural } from "../data.js"

/** @internal */
export const ContextPatchTypeId: Differ.Context.TypeId = Symbol.for(
  "effect/DifferContextPatch"
) as Differ.Context.TypeId

function variance<A, B>(a: A): B {
  return a as unknown as B
}

/** @internal */
const PatchProto = {
  ...Structural.prototype,
  [ContextPatchTypeId]: {
    _Value: variance,
    _Patch: variance
  }
}

interface Empty<Input, Output> extends Differ.Context.Patch<Input, Output> {
  readonly _tag: "Empty"
}

const EmptyProto = Object.assign(Object.create(PatchProto), {
  _tag: "Empty"
})

const _empty = Object.create(EmptyProto)

/**
 * @internal
 */
export const empty = <Input, Output>(): Differ.Context.Patch<Input, Output> => _empty

/** @internal */
export interface AndThen<in out Input, in out Output, in out Output2> extends Differ.Context.Patch<Input, Output2> {
  readonly _tag: "AndThen"
  readonly first: Differ.Context.Patch<Input, Output>
  readonly second: Differ.Context.Patch<Output, Output2>
}

const AndThenProto = Object.assign(Object.create(PatchProto), {
  _tag: "AndThen"
})

const makeAndThen = <Input, Output, Output2>(
  first: Differ.Context.Patch<Input, Output>,
  second: Differ.Context.Patch<Output, Output2>
): Differ.Context.Patch<Input, Output2> => {
  const o = Object.create(AndThenProto)
  o.first = first
  o.second = second
  return o
}

/** @internal */
export interface AddService<in out Env, in out T, in out I> extends Differ.Context.Patch<Env, Env | I> {
  readonly _tag: "AddService"
  readonly key: string
  readonly service: T
}

const AddServiceProto = Object.assign(Object.create(PatchProto), {
  _tag: "AddService"
})

const makeAddService = <Env, I, T>(
  key: string,
  service: T
): Differ.Context.Patch<Env, Env | I> => {
  const o = Object.create(AddServiceProto)
  o.key = key
  o.service = service
  return o
}

/** @internal */
export interface RemoveService<in out Env, in out I> extends Differ.Context.Patch<Env, Exclude<Env, I>> {
  readonly _tag: "RemoveService"
  readonly key: string
}

const RemoveServiceProto = Object.assign(Object.create(PatchProto), {
  _tag: "RemoveService"
})

const makeRemoveService = <Env, I>(
  key: string
): Differ.Context.Patch<Env, Exclude<Env, I>> => {
  const o = Object.create(RemoveServiceProto)
  o.key = key
  return o
}

/** @internal */
export interface UpdateService<in out Env, in out T, in out I> extends Differ.Context.Patch<Env | I, Env | I> {
  readonly _tag: "UpdateService"
  readonly key: string
  update(service: T): T
}

const UpdateServiceProto = Object.assign(Object.create(PatchProto), {
  _tag: "UpdateService"
})

const makeUpdateService = <Env, I, T>(
  key: string,
  update: (service: T) => T
): Differ.Context.Patch<Env | I, Env | I> => {
  const o = Object.create(UpdateServiceProto)
  o.key = key
  o.update = update
  return o
}

type Instruction =
  | Empty<any, any>
  | AndThen<any, any, any>
  | AddService<any, any, any>
  | RemoveService<any, any>
  | UpdateService<any, any, any>

/** @internal */
export const diff = <Input, Output>(
  oldValue: Context<Input>,
  newValue: Context<Output>
): Differ.Context.Patch<Input, Output> => {
  const missingServices = new Map(oldValue.unsafeMap)
  let patch = empty<any, any>()
  for (const [tag, newService] of newValue.unsafeMap.entries()) {
    if (missingServices.has(tag)) {
      const old = missingServices.get(tag)!
      missingServices.delete(tag)
      if (!Equal.equals(old, newService)) {
        patch = combine(makeUpdateService(tag, () => newService))(patch)
      }
    } else {
      missingServices.delete(tag)
      patch = combine(makeAddService(tag, newService))(patch)
    }
  }
  for (const [tag] of missingServices.entries()) {
    patch = combine(makeRemoveService(tag))(patch)
  }
  return patch
}

/** @internal */
export const combine = Dual.dual<
  <Output, Output2>(
    that: Differ.Context.Patch<Output, Output2>
  ) => <Input>(
    self: Differ.Context.Patch<Input, Output>
  ) => Differ.Context.Patch<Input, Output2>,
  <Input, Output, Output2>(
    self: Differ.Context.Patch<Input, Output>,
    that: Differ.Context.Patch<Output, Output2>
  ) => Differ.Context.Patch<Input, Output2>
>(2, (self, that) => makeAndThen(self, that))

/** @internal */
export const patch = Dual.dual<
  <Input>(
    context: Context<Input>
  ) => <Output>(
    self: Differ.Context.Patch<Input, Output>
  ) => Context<Output>,
  <Input, Output>(
    self: Differ.Context.Patch<Input, Output>,
    context: Context<Input>
  ) => Context<Output>
>(2, <Input, Output>(self: Differ.Context.Patch<Input, Output>, context: Context<Input>) => {
  if ((self as Instruction)._tag === "Empty") {
    return context as any
  }
  let wasServiceUpdated = false
  let patches: Chunk.Chunk<Differ.Context.Patch<unknown, unknown>> = Chunk.of(
    self as Differ.Context.Patch<unknown, unknown>
  )
  const updatedContext: Map<string, unknown> = new Map(context.unsafeMap)
  while (Chunk.isNonEmpty(patches)) {
    const head: Instruction = Chunk.headNonEmpty(patches) as Instruction
    const tail = Chunk.tailNonEmpty(patches)
    switch (head._tag) {
      case "Empty": {
        patches = tail
        break
      }
      case "AddService": {
        updatedContext.set(head.key, head.service)
        patches = tail
        break
      }
      case "AndThen": {
        patches = Chunk.prepend(Chunk.prepend(tail, head.second), head.first)
        break
      }
      case "RemoveService": {
        updatedContext.delete(head.key)
        patches = tail
        break
      }
      case "UpdateService": {
        updatedContext.set(head.key, head.update(updatedContext.get(head.key)))
        wasServiceUpdated = true
        patches = tail
        break
      }
    }
  }
  if (!wasServiceUpdated) {
    return makeContext(updatedContext) as Context<Output>
  }
  const map = new Map()
  for (const [tag] of context.unsafeMap) {
    if (updatedContext.has(tag)) {
      map.set(tag, updatedContext.get(tag))
      updatedContext.delete(tag)
    }
  }
  for (const [tag, s] of updatedContext) {
    map.set(tag, s)
  }
  return makeContext(map) as Context<Output>
})
