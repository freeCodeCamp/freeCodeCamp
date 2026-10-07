import { dual } from "../../Function.js"
import * as Option from "../../Option.js"
import type { Pipeable } from "../../Pipeable.js"
import { pipeArguments } from "../../Pipeable.js"
import type * as STM from "../../STM.js"
import type * as TRef from "../../TRef.js"
import * as core from "./core.js"
import * as Entry from "./entry.js"
import type * as Journal from "./journal.js"
import type * as TxnId from "./txnId.js"
import * as Versioned from "./versioned.js"

/** @internal */
const TRefSymbolKey = "effect/TRef"

/** @internal */
export const TRefTypeId: TRef.TRefTypeId = Symbol.for(
  TRefSymbolKey
) as TRef.TRefTypeId

export const tRefVariance = {
  /* c8 ignore next */
  _A: (_: any) => _
}

/** @internal */
export class TRefImpl<in out A> implements TRef.TRef<A>, Pipeable {
  readonly [TRefTypeId] = tRefVariance
  /** @internal */
  todos: Map<TxnId.TxnId, Journal.Todo>
  /** @internal */
  versioned: Versioned.Versioned<A>
  constructor(value: A) {
    this.versioned = new Versioned.Versioned(value)
    this.todos = new Map()
  }
  modify<B>(f: (a: A) => readonly [B, A]): STM.STM<B> {
    return core.effect<never, B>((journal) => {
      const entry = getOrMakeEntry(this, journal)
      const [retValue, newValue] = f(Entry.unsafeGet(entry) as A)
      Entry.unsafeSet(entry, newValue)
      return retValue
    })
  }
  pipe() {
    return pipeArguments(this, arguments)
  }
}

/** @internal */
export const make = <A>(value: A): STM.STM<TRef.TRef<A>> =>
  core.effect<never, TRef.TRef<A>>((journal) => {
    const ref = new TRefImpl(value)
    journal.set(ref, Entry.make(ref, true))
    return ref
  })

/** @internal */
export const get = <A>(self: TRef.TRef<A>) => self.modify((a) => [a, a])

/** @internal */
export const set = dual<
  <A>(value: A) => (self: TRef.TRef<A>) => STM.STM<void>,
  <A>(self: TRef.TRef<A>, value: A) => STM.STM<void>
>(
  2,
  <A>(self: TRef.TRef<A>, value: A): STM.STM<void> => self.modify((): [void, A] => [void 0, value])
)

/** @internal */
export const getAndSet = dual<
  <A>(value: A) => (self: TRef.TRef<A>) => STM.STM<A>,
  <A>(self: TRef.TRef<A>, value: A) => STM.STM<A>
>(2, (self, value) => self.modify((a) => [a, value]))

/** @internal */
export const getAndUpdate = dual<
  <A>(f: (a: A) => A) => (self: TRef.TRef<A>) => STM.STM<A>,
  <A>(self: TRef.TRef<A>, f: (a: A) => A) => STM.STM<A>
>(2, (self, f) => self.modify((a) => [a, f(a)]))

/** @internal */
export const getAndUpdateSome = dual<
  <A>(f: (a: A) => Option.Option<A>) => (self: TRef.TRef<A>) => STM.STM<A>,
  <A>(self: TRef.TRef<A>, f: (a: A) => Option.Option<A>) => STM.STM<A>
>(2, (self, f) =>
  self.modify((a) =>
    Option.match(f(a), {
      onNone: () => [a, a],
      onSome: (b) => [a, b]
    })
  ))

/** @internal */
export const setAndGet = dual<
  <A>(value: A) => (self: TRef.TRef<A>) => STM.STM<A>,
  <A>(self: TRef.TRef<A>, value: A) => STM.STM<A>
>(2, (self, value) => self.modify(() => [value, value]))

/** @internal */
export const modify = dual<
  <A, B>(f: (a: A) => readonly [B, A]) => (self: TRef.TRef<A>) => STM.STM<B>,
  <A, B>(self: TRef.TRef<A>, f: (a: A) => readonly [B, A]) => STM.STM<B>
>(2, (self, f) => self.modify(f))

/** @internal */
export const modifySome = dual<
  <A, B>(fallback: B, f: (a: A) => Option.Option<readonly [B, A]>) => (self: TRef.TRef<A>) => STM.STM<B>,
  <A, B>(self: TRef.TRef<A>, fallback: B, f: (a: A) => Option.Option<readonly [B, A]>) => STM.STM<B>
>(3, (self, fallback, f) =>
  self.modify((a) =>
    Option.match(f(a), {
      onNone: () => [fallback, a],
      onSome: (b) => b
    })
  ))

/** @internal */
export const update = dual<
  <A>(f: (a: A) => A) => (self: TRef.TRef<A>) => STM.STM<void>,
  <A>(self: TRef.TRef<A>, f: (a: A) => A) => STM.STM<void>
>(2, (self, f) => self.modify((a) => [void 0, f(a)]))

/** @internal */
export const updateAndGet = dual<
  <A>(f: (a: A) => A) => (self: TRef.TRef<A>) => STM.STM<A>,
  <A>(self: TRef.TRef<A>, f: (a: A) => A) => STM.STM<A>
>(2, (self, f) =>
  self.modify((a) => {
    const b = f(a)
    return [b, b]
  }))

/** @internal */
export const updateSome = dual<
  <A>(f: (a: A) => Option.Option<A>) => (self: TRef.TRef<A>) => STM.STM<void>,
  <A>(self: TRef.TRef<A>, f: (a: A) => Option.Option<A>) => STM.STM<void>
>(
  2,
  (self, f) =>
    self.modify((a) => [
      void 0,
      Option.match(f(a), {
        onNone: () => a,
        onSome: (b) => b
      })
    ])
)

/** @internal */
export const updateSomeAndGet = dual<
  <A>(f: (a: A) => Option.Option<A>) => (self: TRef.TRef<A>) => STM.STM<A>,
  <A>(self: TRef.TRef<A>, f: (a: A) => Option.Option<A>) => STM.STM<A>
>(
  2,
  (self, f) =>
    self.modify((a) =>
      Option.match(f(a), {
        onNone: () => [a, a],
        onSome: (b) => [b, b]
      })
    )
)

/** @internal */
const getOrMakeEntry = <A>(self: TRef.TRef<A>, journal: Journal.Journal): Entry.Entry => {
  if (journal.has(self)) {
    return journal.get(self)!
  }
  const entry = Entry.make(self, false)
  journal.set(self, entry)
  return entry
}

/** @internal */
export const unsafeGet: {
  (journal: Journal.Journal): <A>(self: TRef.TRef<A>) => A
  <A>(self: TRef.TRef<A>, journal: Journal.Journal): A
} = dual<
  (journal: Journal.Journal) => <A>(self: TRef.TRef<A>) => A,
  <A>(self: TRef.TRef<A>, journal: Journal.Journal) => A
>(2, <A>(self: TRef.TRef<A>, journal: Journal.Journal) => Entry.unsafeGet(getOrMakeEntry(self, journal)) as A)

/** @internal */
export const unsafeSet: {
  <A>(value: A, journal: Journal.Journal): (self: TRef.TRef<A>) => void
  <A>(self: TRef.TRef<A>, value: A, journal: Journal.Journal): void
} = dual<
  <A>(value: A, journal: Journal.Journal) => (self: TRef.TRef<A>) => void,
  <A>(self: TRef.TRef<A>, value: A, journal: Journal.Journal) => void
>(3, (self, value, journal) => {
  const entry = getOrMakeEntry(self, journal)
  Entry.unsafeSet(entry, value)
  return undefined
})
