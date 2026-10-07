import { invariant } from "outvariant";
const kSiblingHandlers = Symbol("kSiblingHandlers");
function attachSiblingHandlers(owner, siblings) {
  invariant(
    getSiblingHandlers(owner).length === 0,
    'Failed to merge handlers: the owner "%s" handler is already merged',
    owner.kind
  );
  Object.defineProperty(owner, kSiblingHandlers, {
    value: siblings,
    enumerable: false,
    writable: false,
    configurable: false
  });
  return owner;
}
function getSiblingHandlers(owner) {
  return Reflect.get(owner, kSiblingHandlers) || [];
}
export {
  attachSiblingHandlers,
  getSiblingHandlers
};
//# sourceMappingURL=attachSiblingHandlers.mjs.map