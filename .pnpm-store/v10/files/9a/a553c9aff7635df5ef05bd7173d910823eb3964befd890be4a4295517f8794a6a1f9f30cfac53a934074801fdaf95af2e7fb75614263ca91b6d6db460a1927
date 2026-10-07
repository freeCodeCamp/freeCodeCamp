import { pipe } from "./Function.js";
import * as defaultServices from "./internal/defaultServices.js";
import * as layer from "./internal/layer.js";
import * as TestClock from "./TestClock.js";
import * as TestServices from "./TestServices.js";
/** @internal */
export const live = /*#__PURE__*/pipe(/*#__PURE__*/TestServices.annotationsLayer(), /*#__PURE__*/layer.merge(/*#__PURE__*/TestServices.liveLayer()), /*#__PURE__*/layer.merge(/*#__PURE__*/TestServices.sizedLayer(100)), /*#__PURE__*/layer.merge(/*#__PURE__*/pipe(TestClock.defaultTestClock, /*#__PURE__*/layer.provideMerge(/*#__PURE__*/layer.merge(/*#__PURE__*/TestServices.liveLayer(), /*#__PURE__*/TestServices.annotationsLayer())))), /*#__PURE__*/layer.merge(/*#__PURE__*/TestServices.testConfigLayer({
  repeats: 100,
  retries: 100,
  samples: 200,
  shrinks: 1000
})));
/**
 * @since 2.0.0
 */
export const LiveContext = /*#__PURE__*/layer.syncContext(() => defaultServices.liveServices);
/**
 * @since 2.0.0
 */
export const TestContext = /*#__PURE__*/layer.provideMerge(live, LiveContext);
//# sourceMappingURL=TestContext.js.map