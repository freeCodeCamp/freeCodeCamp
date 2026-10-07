# OpenTelemetry Core

[![NPM Published Version][npm-img]][npm-url]
[![Apache License][license-image]][license-image]

This package provides default implementations of the OpenTelemetry API for trace and metrics. It's intended for use both on the server and in the browser.

## Built-in Implementations

- [OpenTelemetry Core](#opentelemetry-core)
  - [Built-in Implementations](#built-in-implementations)
    - [Built-in Propagators](#built-in-propagators)
      - [W3CTraceContextPropagator Propagator](#w3ctracecontextpropagator-propagator)
      - [Composite Propagator](#composite-propagator)
      - [Baggage Propagator](#baggage-propagator)
  - [Useful links](#useful-links)
  - [License](#license)

### Built-in Propagators

#### W3CTraceContextPropagator Propagator

OpenTelemetry provides a text-based approach to propagate context to remote services using the [W3C Trace Context](https://www.w3.org/TR/trace-context/) HTTP headers.

```js
const api = require("@opentelemetry/api");
const { W3CTraceContextPropagator } = require("@opentelemetry/core");

/* Set Global Propagator */
api.propagation.setGlobalPropagator(new W3CTraceContextPropagator());
```

#### Composite Propagator

Combines multiple propagators into a single propagator.

> This is used as a default Propagator

```js
const api = require("@opentelemetry/api");
const { CompositePropagator } = require("@opentelemetry/core");

/* Set Global Propagator */
api.propagation.setGlobalPropagator(new CompositePropagator());
```

#### Baggage Propagator

Provides a text-based approach to propagate [baggage](https://w3c.github.io/baggage/) to remote services using the [OpenTelemetry Baggage Propagation](https://github.com/open-telemetry/opentelemetry-specification/blob/master/specification/baggage/api.md#baggage-propagation) HTTP headers.

```js
const api = require("@opentelemetry/api");
const { W3CBaggagePropagator } = require("@opentelemetry/core");

/* Set Global Propagator */
api.propagation.setGlobalPropagator(new W3CBaggagePropagator());
```

## Useful links

- For more information on OpenTelemetry, visit: <https://opentelemetry.io/>
- For more about OpenTelemetry JavaScript: <https://github.com/open-telemetry/opentelemetry-js>
- For help or feedback on this project, join us in [GitHub Discussions][discussions-url]

## License

Apache 2.0 - See [LICENSE][license-url] for more information.

[discussions-url]: https://github.com/open-telemetry/opentelemetry-js/discussions
[license-url]: https://github.com/open-telemetry/opentelemetry-js/blob/main/LICENSE
[license-image]: https://img.shields.io/badge/license-Apache_2.0-green.svg?style=flat
[npm-url]: https://www.npmjs.com/package/@opentelemetry/core
[npm-img]: https://badge.fury.io/js/%40opentelemetry%2Fcore.svg
