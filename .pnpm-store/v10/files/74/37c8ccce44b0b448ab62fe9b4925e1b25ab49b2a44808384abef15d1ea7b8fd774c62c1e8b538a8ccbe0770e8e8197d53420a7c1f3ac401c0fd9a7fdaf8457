# OpenTelemetry Logs Bridge API for JavaScript

[![NPM Published Version][npm-img]][npm-url]
[![Apache License][license-image]][license-image]

**Note: This is an experimental package under active development. New releases may include breaking changes.**

This package provides everything needed to interact with the unstable OpenTelemetry Logs Bridge API, including all TypeScript interfaces, enums, and no-op implementations. It is intended for use both on the server and in the browser.

**Note: This module defines a log backend API. The API is not intended to be called by application developers directly.
It is provided for logging library authors to build log appenders, which use this API to bridge between existing
logging libraries and the OpenTelemetry log data model.**

## Alpha Software - Use at your own risk

The Logs Bridge API is considered alpha software and there is no guarantee of stability or long-term support. When the API is stabilized, it will be made available and supported long-term in the `@opentelemetry/api` package and this package will be deprecated.

## Quick Start

Purposefully left blank until SDK is available.

## Version Compatibility

Because the npm installer and node module resolution algorithm could potentially allow two or more copies of any given package to exist within the same `node_modules` structure, the OpenTelemetry API takes advantage of a variable on the `global` object to store the global API. When an API method in the API package is called, it checks if this `global` API exists and proxies calls to it if and only if it is a compatible API version. This means if a package has a dependency on an OpenTelemetry API version which is not compatible with the API used by the end user, the package will receive a no-op implementation of the API.

## Advanced Use

### API Methods

If you are writing an instrumentation library, or prefer to call the API methods directly rather than using the `register` method on the Tracer/Meter/Logger Provider, OpenTelemetry provides direct access to the underlying API methods through the `@opentelemetry/api-logs` package. API entry points are defined as global singleton objects `trace`, `metrics`, `logs`, `propagation`, and `context` which contain methods used to initialize SDK implementations and acquire resources from the API.

- [Logs API Documentation][logs-api-docs]

```javascript
const api = require("@opentelemetry/api-logs");

/* A specific implementation of LoggerProvider comes from an SDK */
const loggerProvider = createLoggerProvider();

/* Initialize LoggerProvider */
api.logs.setGlobalLoggerProvider(loggerProvider);
/* returns loggerProvider (no-op if a working provider has not been initialized) */
api.logs.getLoggerProvider();
/* returns a logger from the registered global logger provider (no-op if a working provider has not been initialized) */
const logger = api.logs.getLogger(name, version);

// logging a log record in a log appender
logger.emit({ severityNumber: SeverityNumber.TRACE, body: 'log data' });
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
[npm-url]: https://www.npmjs.com/package/@opentelemetry/api-logs
[npm-img]: https://badge.fury.io/js/%40opentelemetry%2Fapi-logs.svg
[logs-api-docs]: https://open-telemetry.github.io/opentelemetry-js/modules/_opentelemetry_api_logs.html
