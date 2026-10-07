# OpenTelemetry Tracing SDK

[![NPM Published Version][npm-img]][npm-url]
[![Apache License][license-image]][license-image]

The `tracing` module contains the foundation for all tracing SDKs of [opentelemetry-js](https://github.com/open-telemetry/opentelemetry-js).

Used standalone, this module provides methods for manual instrumentation of code, offering full control over span creation for client-side JavaScript (browser) and Node.js.

It does **not** provide automated instrumentation of known libraries, context propagation or distributed-context out-of-the-box.

For a `TracerProvider` that includes default context management and propagation for Node.js, please see
[@opentelemetry/sdk-trace-node](https://github.com/open-telemetry/opentelemetry-js/tree/main/packages/opentelemetry-sdk-trace-node).

For a `TracerProvider` that includes default context management and propagation for Browser, please see
[@opentelemetry/sdk-trace-web](https://github.com/open-telemetry/opentelemetry-js/tree/main/packages/opentelemetry-sdk-trace-web).

## Installation

```bash
npm install --save @opentelemetry/api
npm install --save @opentelemetry/sdk-trace-base
```

## Usage

```js
const { trace } = require('@opentelemetry/api');
const { BasicTracerProvider } = require('@opentelemetry/sdk-trace-base');

// To start a trace, you first need to initialize the Tracer provider.
// NOTE: The default OpenTelemetry tracer provider does not record any tracing information.
//       Registering a working tracer provider allows the API methods to record traces.
trace.setGlobalTracerProvider(new BasicTracerProvider());

// Important: requires a context manager and propagator to be registered manually.
// propagation.setGlobalPropagator(propagator);     // replace `propagator` with your `TextMapPropagator`, for example: `W3CTraceContextPropagator` from `@openetelemetry/core`
// context.setGlobalContextManager(contextManager); // replace `contextManager` with your `ContextManager`: `AsyncLocalStorageContextManager` from `@openetelemetry/async-hooks`

// To create a span in a trace, we used the global singleton tracer to start a new span.
const span = trace.getTracer('default').startSpan('foo');

// Set a span attribute
span.setAttribute('key', 'value');

// We must end the spans so they become available for exporting.
span.end();
```

## Config

Tracing configuration is a merge of user supplied configuration with both the default
configuration as specified in [config.ts](./src/config.ts) and an
environmentally configurable sampling (via `OTEL_TRACES_SAMPLER` and `OTEL_TRACES_SAMPLER_ARG`).

## Built-in Samplers

Sampler is used to make decisions on `Span` sampling.

### AlwaysOn Sampler

Samples every trace regardless of upstream sampling decisions.

> This is used as a default Sampler

```js
const {
  AlwaysOnSampler,
  BasicTracerProvider,
} = require("@opentelemetry/sdk-trace-base");

const tracerProvider = new BasicTracerProvider({
  sampler: new AlwaysOnSampler()
});
```

### AlwaysOff Sampler

Doesn't sample any trace, regardless of upstream sampling decisions.

```js
const {
  AlwaysOffSampler,
  BasicTracerProvider,
} = require("@opentelemetry/sdk-trace-base");

const tracerProvider = new BasicTracerProvider({
  sampler: new AlwaysOffSampler()
});
```

### TraceIdRatioBased Sampler

Samples some percentage of traces, calculated deterministically using the trace ID.
Any trace that would be sampled at a given percentage will also be sampled at any higher percentage.

The `TraceIDRatioSampler` may be used with the `ParentBasedSampler` to respect the sampled flag of an incoming trace.

```js
const {
  BasicTracerProvider,
  TraceIdRatioBasedSampler,
} = require("@opentelemetry/sdk-trace-base");

const tracerProvider = new BasicTracerProvider({
  // See details of ParentBasedSampler below
  sampler: new ParentBasedSampler({
    // Trace ID Ratio Sampler accepts a positional argument
    // which represents the percentage of traces which should
    // be sampled.
    root: new TraceIdRatioBasedSampler(0.5)
  });
});
```

### ParentBased Sampler

- This is a composite sampler. `ParentBased` helps distinguished between the
following cases:
  - No parent (root span).
  - Remote parent with `sampled` flag `true`
  - Remote parent with `sampled` flag `false`
  - Local parent with `sampled` flag `true`
  - Local parent with `sampled` flag `false`

Required parameters:

- `root(Sampler)` - Sampler called for spans with no parent (root spans)

Optional parameters:

- `remoteParentSampled(Sampler)` (default: `AlwaysOn`)
- `remoteParentNotSampled(Sampler)` (default: `AlwaysOff`)
- `localParentSampled(Sampler)` (default: `AlwaysOn`)
- `localParentNotSampled(Sampler)` (default: `AlwaysOff`)

|Parent|parent.isRemote()|parent.isSampled()|Invoke sampler|
|---|---|---|---|
|absent|n/a|n/a|`root()`|
|present|true|true|`remoteParentSampled()`|
|present|true|false|`remoteParentNotSampled()`|
|present|false|true|`localParentSampled()`|
|present|false|false|`localParentNotSampled()`|

```js
const {
  AlwaysOffSampler,
  BasicTracerProvider,
  ParentBasedSampler,
  TraceIdRatioBasedSampler,
} = require("@opentelemetry/sdk-trace-base");

const tracerProvider = new BasicTracerProvider({
  sampler: new ParentBasedSampler({
    // By default, the ParentBasedSampler will respect the parent span's sampling
    // decision. This is configurable by providing a different sampler to use
    // based on the situation. See configuration details above.
    //
    // This will delegate the sampling decision of all root traces (no parent)
    // to the TraceIdRatioBasedSampler.
    // See details of TraceIdRatioBasedSampler above.
    root: new TraceIdRatioBasedSampler(0.5)
  })
});
```

## Example

See [examples/basic-tracer-node](https://github.com/open-telemetry/opentelemetry-js/tree/main/examples/basic-tracer-node) for an end-to-end example, including exporting created spans.

## Useful links

- For more information on OpenTelemetry, visit: <https://opentelemetry.io/>
- For more about OpenTelemetry JavaScript: <https://github.com/open-telemetry/opentelemetry-js>
- For help or feedback on this project, join us in [GitHub Discussions][discussions-url]

## License

Apache 2.0 - See [LICENSE][license-url] for more information.

[discussions-url]: https://github.com/open-telemetry/opentelemetry-js/discussions
[license-url]: https://github.com/open-telemetry/opentelemetry-js/blob/main/LICENSE
[license-image]: https://img.shields.io/badge/license-Apache_2.0-green.svg?style=flat
[npm-url]: https://www.npmjs.com/package/@opentelemetry/sdk-trace-base
[npm-img]: https://badge.fury.io/js/%40opentelemetry%2Fsdk-trace-base.svg
