import * as Versioned from "./versioned.js";
/** @internal */
export const make = (ref, isNew) => ({
  ref,
  isNew,
  isChanged: false,
  expected: ref.versioned,
  newValue: ref.versioned.value
});
export const unsafeGet = self => {
  return self.newValue;
};
/** @internal */
export const unsafeSet = (self, value) => {
  self.isChanged = true;
  self.newValue = value;
};
/** @internal */
export const commit = self => {
  self.ref.versioned = new Versioned.Versioned(self.newValue);
};
/** @internal */
export const copy = self => ({
  ref: self.ref,
  isNew: self.isNew,
  isChanged: self.isChanged,
  expected: self.expected,
  newValue: self.newValue
});
/** @internal */
export const isValid = self => {
  return self.ref.versioned === self.expected;
};
/** @internal */
export const isInvalid = self => {
  return self.ref.versioned !== self.expected;
};
/** @internal */
export const isChanged = self => {
  return self.isChanged;
};
//# sourceMappingURL=entry.js.map