import type * as TRef from "../../TRef.js"
import * as Versioned from "./versioned.js"

/** @internal */
export interface Entry {
  readonly ref: TRef.TRef<any>
  readonly expected: Versioned.Versioned<any>
  isChanged: boolean // mutable by design
  readonly isNew: boolean
  newValue: any // mutable by design
}

/** @internal */
export const make = <A>(ref: TRef.TRef<A>, isNew: boolean): Entry => ({
  ref,
  isNew,
  isChanged: false,
  expected: ref.versioned,
  newValue: ref.versioned.value
})

export const unsafeGet = (self: Entry): unknown => {
  return self.newValue
}

/** @internal */
export const unsafeSet = (self: Entry, value: unknown): void => {
  self.isChanged = true
  self.newValue = value
}

/** @internal */
export const commit = (self: Entry): void => {
  self.ref.versioned = new Versioned.Versioned(self.newValue)
}

/** @internal */
export const copy = (self: Entry): Entry => ({
  ref: self.ref,
  isNew: self.isNew,
  isChanged: self.isChanged,
  expected: self.expected,
  newValue: self.newValue
})

/** @internal */
export const isValid = (self: Entry): boolean => {
  return self.ref.versioned === self.expected
}

/** @internal */
export const isInvalid = (self: Entry): boolean => {
  return self.ref.versioned !== self.expected
}

/** @internal */
export const isChanged = (self: Entry): boolean => {
  return self.isChanged
}
