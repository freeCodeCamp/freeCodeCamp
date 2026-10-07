/**
 * @since 2.0.0
 */
import type * as DefaultServices from "./DefaultServices.js"
import { pipe } from "./Function.js"
import * as defaultServices from "./internal/defaultServices.js"
import * as layer from "./internal/layer.js"
import type * as Layer from "./Layer.js"
import * as TestClock from "./TestClock.js"
import * as TestServices from "./TestServices.js"

/** @internal */
export const live: Layer.Layer<TestServices.TestServices, never, DefaultServices.DefaultServices> = pipe(
  TestServices.annotationsLayer(),
  layer.merge(TestServices.liveLayer()),
  layer.merge(TestServices.sizedLayer(100)),
  layer.merge(pipe(
    TestClock.defaultTestClock,
    layer.provideMerge(
      layer.merge(TestServices.liveLayer(), TestServices.annotationsLayer())
    )
  )),
  layer.merge(TestServices.testConfigLayer({ repeats: 100, retries: 100, samples: 200, shrinks: 1000 }))
)

/**
 * @since 2.0.0
 */
export const LiveContext: Layer.Layer<DefaultServices.DefaultServices> = layer.syncContext(() =>
  defaultServices.liveServices
)

/**
 * @since 2.0.0
 */
export const TestContext: Layer.Layer<TestServices.TestServices> = layer.provideMerge(live, LiveContext)
