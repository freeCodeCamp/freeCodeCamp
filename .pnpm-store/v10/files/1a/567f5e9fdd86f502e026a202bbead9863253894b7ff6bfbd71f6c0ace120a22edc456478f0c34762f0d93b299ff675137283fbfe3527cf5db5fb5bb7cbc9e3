import { dual } from "../Function.js";
/** @internal */
export const let_ = map => dual(3, (self, name, f) => map(self, a => ({
  ...a,
  [name]: f(a)
})));
/** @internal */
export const bindTo = map => dual(2, (self, name) => map(self, a => ({
  [name]: a
})));
/** @internal */
export const bind = (map, flatMap) => dual(3, (self, name, f) => flatMap(self, a => map(f(a), b => ({
  ...a,
  [name]: b
}))));
//# sourceMappingURL=doNotation.js.map