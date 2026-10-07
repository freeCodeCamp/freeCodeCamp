import * as Chunk from "../../Chunk.js";
import * as Equal from "../../Equal.js";
import * as Dual from "../../Function.js";
import { makeContext } from "../context.js";
import { Structural } from "../data.js";
/** @internal */
export const ContextPatchTypeId = /*#__PURE__*/Symbol.for("effect/DifferContextPatch");
function variance(a) {
  return a;
}
/** @internal */
const PatchProto = {
  ...Structural.prototype,
  [ContextPatchTypeId]: {
    _Value: variance,
    _Patch: variance
  }
};
const EmptyProto = /*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(PatchProto), {
  _tag: "Empty"
});
const _empty = /*#__PURE__*/Object.create(EmptyProto);
/**
 * @internal
 */
export const empty = () => _empty;
const AndThenProto = /*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(PatchProto), {
  _tag: "AndThen"
});
const makeAndThen = (first, second) => {
  const o = Object.create(AndThenProto);
  o.first = first;
  o.second = second;
  return o;
};
const AddServiceProto = /*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(PatchProto), {
  _tag: "AddService"
});
const makeAddService = (key, service) => {
  const o = Object.create(AddServiceProto);
  o.key = key;
  o.service = service;
  return o;
};
const RemoveServiceProto = /*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(PatchProto), {
  _tag: "RemoveService"
});
const makeRemoveService = key => {
  const o = Object.create(RemoveServiceProto);
  o.key = key;
  return o;
};
const UpdateServiceProto = /*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(PatchProto), {
  _tag: "UpdateService"
});
const makeUpdateService = (key, update) => {
  const o = Object.create(UpdateServiceProto);
  o.key = key;
  o.update = update;
  return o;
};
/** @internal */
export const diff = (oldValue, newValue) => {
  const missingServices = new Map(oldValue.unsafeMap);
  let patch = empty();
  for (const [tag, newService] of newValue.unsafeMap.entries()) {
    if (missingServices.has(tag)) {
      const old = missingServices.get(tag);
      missingServices.delete(tag);
      if (!Equal.equals(old, newService)) {
        patch = combine(makeUpdateService(tag, () => newService))(patch);
      }
    } else {
      missingServices.delete(tag);
      patch = combine(makeAddService(tag, newService))(patch);
    }
  }
  for (const [tag] of missingServices.entries()) {
    patch = combine(makeRemoveService(tag))(patch);
  }
  return patch;
};
/** @internal */
export const combine = /*#__PURE__*/Dual.dual(2, (self, that) => makeAndThen(self, that));
/** @internal */
export const patch = /*#__PURE__*/Dual.dual(2, (self, context) => {
  if (self._tag === "Empty") {
    return context;
  }
  let wasServiceUpdated = false;
  let patches = Chunk.of(self);
  const updatedContext = new Map(context.unsafeMap);
  while (Chunk.isNonEmpty(patches)) {
    const head = Chunk.headNonEmpty(patches);
    const tail = Chunk.tailNonEmpty(patches);
    switch (head._tag) {
      case "Empty":
        {
          patches = tail;
          break;
        }
      case "AddService":
        {
          updatedContext.set(head.key, head.service);
          patches = tail;
          break;
        }
      case "AndThen":
        {
          patches = Chunk.prepend(Chunk.prepend(tail, head.second), head.first);
          break;
        }
      case "RemoveService":
        {
          updatedContext.delete(head.key);
          patches = tail;
          break;
        }
      case "UpdateService":
        {
          updatedContext.set(head.key, head.update(updatedContext.get(head.key)));
          wasServiceUpdated = true;
          patches = tail;
          break;
        }
    }
  }
  if (!wasServiceUpdated) {
    return makeContext(updatedContext);
  }
  const map = new Map();
  for (const [tag] of context.unsafeMap) {
    if (updatedContext.has(tag)) {
      map.set(tag, updatedContext.get(tag));
      updatedContext.delete(tag);
    }
  }
  for (const [tag, s] of updatedContext) {
    map.set(tag, s);
  }
  return makeContext(map);
});
//# sourceMappingURL=contextPatch.js.map