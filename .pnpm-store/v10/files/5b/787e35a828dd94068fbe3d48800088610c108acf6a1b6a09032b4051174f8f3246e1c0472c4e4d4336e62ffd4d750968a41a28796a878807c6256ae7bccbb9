import * as FiberId from "../FiberId.js";
import { globalValue } from "../GlobalValue.js";
import * as FiberMessage from "./fiberMessage.js";
/** @internal */
const FiberScopeSymbolKey = "effect/FiberScope";
/** @internal */
export const FiberScopeTypeId = /*#__PURE__*/Symbol.for(FiberScopeSymbolKey);
/** @internal */
class Global {
  [FiberScopeTypeId] = FiberScopeTypeId;
  fiberId = FiberId.none;
  roots = /*#__PURE__*/new Set();
  add(_runtimeFlags, child) {
    this.roots.add(child);
    child.addObserver(() => {
      this.roots.delete(child);
    });
  }
}
/** @internal */
class Local {
  fiberId;
  parent;
  [FiberScopeTypeId] = FiberScopeTypeId;
  constructor(fiberId, parent) {
    this.fiberId = fiberId;
    this.parent = parent;
  }
  add(_runtimeFlags, child) {
    this.parent.tell(FiberMessage.stateful(parentFiber => {
      parentFiber.addChild(child);
      child.addObserver(() => {
        parentFiber.removeChild(child);
      });
    }));
  }
}
/** @internal */
export const unsafeMake = fiber => {
  return new Local(fiber.id(), fiber);
};
/** @internal */
export const globalScope = /*#__PURE__*/globalValue(/*#__PURE__*/Symbol.for("effect/FiberScope/Global"), () => new Global());
//# sourceMappingURL=fiberScope.js.map