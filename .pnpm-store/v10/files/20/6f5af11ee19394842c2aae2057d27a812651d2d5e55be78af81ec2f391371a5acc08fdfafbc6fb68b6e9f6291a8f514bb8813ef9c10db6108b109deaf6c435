/**
 * @since 2.0.0
 */
import * as Context from "./Context.js";
import * as core from "./internal/core.js";
import * as defaultServices from "./internal/defaultServices.js";
/**
 * @since 2.0.0
 */
export const TestLiveTypeId = /*#__PURE__*/Symbol.for("effect/TestLive");
/**
 * @since 2.0.0
 */
export const TestLive = /*#__PURE__*/Context.GenericTag("effect/TestLive");
/** @internal */
class LiveImpl {
  services;
  [TestLiveTypeId] = TestLiveTypeId;
  constructor(services) {
    this.services = services;
  }
  provide(effect) {
    return core.fiberRefLocallyWith(defaultServices.currentServices, Context.merge(this.services))(effect);
  }
}
/**
 * @since 2.0.0
 */
export const make = services => new LiveImpl(services);
//# sourceMappingURL=TestLive.js.map