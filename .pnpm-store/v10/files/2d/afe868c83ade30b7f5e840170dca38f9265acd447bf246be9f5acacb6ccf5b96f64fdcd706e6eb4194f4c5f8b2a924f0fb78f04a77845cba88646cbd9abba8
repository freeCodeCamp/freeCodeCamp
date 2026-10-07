"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unprepend = void 0;
/**
 * @since 2.0.0
 */
/**
 * @category getters
 * @since 2.0.0
 */
const unprepend = self => {
  const iterator = self[Symbol.iterator]();
  const next = iterator.next();
  if (next.done) {
    throw new Error("BUG: NonEmptyIterator should not be empty - please report an issue at https://github.com/Effect-TS/effect/issues");
  }
  return [next.value, iterator];
};
exports.unprepend = unprepend;
//# sourceMappingURL=NonEmptyIterable.js.map