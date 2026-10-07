# OpenTelemetry Semantic Conventions

[![NPM Published Version][npm-img]][npm-url]
[![Apache License][license-image]][license-image]

Semantic Convention constants for use with the OpenTelemetry SDK/APIs. [This document][trace-semantic_conventions] defines standard attributes for traces.

## Installation

```bash
npm install --save @opentelemetry/semantic-conventions
```

## Import Structure

This package has 2 separate entry-points:

- The main entry-point, `@opentelemetry/semantic-conventions`, includes only stable semantic conventions.
  This entry-point follows semantic versioning 2.0: it will not include breaking changes except with a change in the major version number.
- The "incubating" entry-point, `@opentelemetry/semantic-conventions/incubating`, contains unstable semantic conventions (sometimes called "experimental") and, for convenience, a re-export of the stable semantic conventions.
  This entry-point is _NOT_ subject to the restrictions of semantic versioning and _MAY_ contain breaking changes in minor releases. See below for suggested usage of this entry-point.

Exported constants follow this naming scheme:

- `ATTR_${attributeName}` for attributes
- `${attributeName}_VALUE_{$enumValue}` for enumerations of attribute values
- `METRIC_${metricName}` for metric names
- `EVENT_${eventName}` for event names

The `ATTR`, `METRIC`, `EVENT`, and `VALUE` static strings were used to facilitate readability and filtering in auto-complete lists in IDEs.

## Usage

### Stable SemConv

```bash
npm install --save @opentelemetry/semantic-conventions
```

```ts
import {
  ATTR_NETWORK_PEER_ADDRESS,
  ATTR_NETWORK_PEER_PORT,
  ATTR_NETWORK_PROTOCOL_NAME,
  ATTR_NETWORK_PROTOCOL_VERSION,
  NETWORK_TRANSPORT_VALUE_TCP,
} from '@opentelemetry/semantic-conventions';

const span = tracer.startSpan(spanName, spanOptions)
  .setAttributes({
    [ATTR_NETWORK_PEER_ADDRESS]: 'localhost',
    [ATTR_NETWORK_PEER_PORT]: 8080,
    [ATTR_NETWORK_PROTOCOL_NAME]: 'http',
    [ATTR_NETWORK_PROTOCOL_VERSION]: '1.1',
    [ATTR_NETWORK_TRANSPORT]: NETWORK_TRANSPORT_VALUE_TCP,
  });
```

### Unstable SemConv

<!-- Dev Note: ^^ This '#unstable-semconv' anchor is being used in jsdoc links in the code. -->

Because the "incubating" entry-point may include breaking changes in minor versions, it is recommended that instrumentation libraries **not** import `@opentelemetry/semantic-conventions/incubating` in runtime code, but instead **copy relevant definitions into their own code base**. (This is the same [recommendation](https://opentelemetry.io/docs/specs/semconv/non-normative/code-generation/#stability-and-versioning) as for other languages.)

For example, create a "src/semconv.ts" (or "lib/semconv.js" if implementing in JavaScript) file that copies from [experimental_attributes.ts](./src/experimental_attributes.ts) or [experimental_metrics.ts](./src/experimental_metrics.ts):

```ts
// src/semconv.ts
export const ATTR_DB_NAMESPACE = 'db.namespace';
export const ATTR_DB_OPERATION_NAME = 'db.operation.name';
```

```ts
// src/instrumentation.ts
import {
  ATTR_SERVER_PORT,
  ATTR_SERVER_ADDRESS,
} from '@opentelemetry/semantic-conventions';
import {
  ATTR_DB_NAMESPACE,
  ATTR_DB_OPERATION_NAME,
} from './semconv';

span.setAttributes({
  [ATTR_DB_NAMESPACE]: ...,
  [ATTR_DB_OPERATION_NAME]: ...,
  [ATTR_SERVER_PORT]: ...,
  [ATTR_SERVER_ADDRESS]: ...,
})
```

Occasionally, one should review changes to `@opentelemetry/semantic-conventions` to see if any used unstable conventions have changed or been stabilized. However, an update to a newer minor version of the package will never be breaking.

#### Why not pin the version?

A considered alternative for using unstable exports is to **pin** the version. I.e., depend on an exact version, rather than on a version range.

```bash
npm install --save-exact @opentelemetry/semantic-conventions  # Don't do this.
```

Then, import directly from `@opentelemetry/semantic-conventions/incubating`.
This is **not** recommended.

In some languages having multiple versions of a package in a single application is not possible. This _is_ possible in JavaScript. The primary argument against pinning this package is that it can easily lead to many copies being installed in an application's `node_modules/...`, which can cause significant disk usage. In a disk-constrained environment, such as AWS Lambda Layers, that can be a blocker.

## Deprecations

There are two main types of deprecations in this package:

1. "semconv deprecations": The process of defining the OpenTelemetry [Semantic Conventions][semconv-docs] sometimes involves deprecating a particular field name as conventions are [stabilized][semconv-stability]. For example, the [stabilization of HTTP conventions][semconv-http-stabilization] included deprecating the `http.url` span attribute in favor of `url.full`. When using this JS package, that appears as a deprecation of the `ATTR_HTTP_URL` export in favour of `ATTR_URL_FULL`.
2. "JS package deprecations": Independently, this JavaScript package has twice changed how it exports the Semantic Conventions constants, e.g. `ATTR_HTTP_URL` instead of `SEMATTRS_HTTP_URL`. The two older forms are still included in 1.x versions of this package for backwards compatibility. The rest of this section shows how to migrate to the latest form.

### Migrating from `SEMATTRS_*`, `SEMRESATTRS_*`, ...

Deprecated as of `@opentelemetry/semantic-conventions@1.26.0`.

Before v1.26.0, constants for each semconv attribute were exported, prefixed with `SEMRESATTRS_` (if defined as a Resource Attribute) or `SEMATTRS_`. As well, constants were exported for each value in an enumeration, of the form `${attributeName}VALUES_${enumValue}`. For example:

**Deprecated usage:**

```js
import {
  SEMRESATTRS_SERVICE_NAME,
  SEMATTRS_HTTP_ROUTE,
  SEMATTRS_DB_SYSTEM,
  DBSYSTEMVALUES_POSTGRESQL
} from '@opentelemetry/semantic-conventions';

// 'service.name' resource attribute
console.log(SEMRESATTRS_SERVICE_NAME); // migrate to 'ATTR_SERVICE_NAME'

// 'http.route' attribute
console.log(SEMATTRS_HTTP_ROUTE); // migrate to 'ATTR_HTTP_ROUTE'

// 'db.system' attribute
console.log(SEMATTRS_DB_SYSTEM); // migrate to 'ATTR_DB_SYSTEM' (in incubating [*])

// 'postgresql' enum value for 'db.system' attribute
console.log(DBSYSTEMVALUES_POSTGRESQL); // migrate to 'DB_SYSTEM_VALUE_POSTGRESQL' (in incubating [*])
```

See [Migrated usage](#migrated-usage) below.

### Migrating from `SemanticAttributes.*`, `SemanticResourceAttributes.*`, ...

Deprecated as of `@opentelemetry/semantic-conventions@1.0.0`.

Before v1.0.0, constants were exported in namespace objects `SemanticResourceAttributes` and `SemanticAttributes`, and a namespace object for enumerated values for some fields (e.g. `DbSystemValues` for values of the 'db.system' enum). For example:

**Deprecated usage:**

```js
import {
  SemanticAttributes,
  SemanticResourceAttributes,
  DbSystemValues,
} from '@opentelemetry/semantic-conventions';

// 'service.name' resource attribute
console.log(SemanticResourceAttributes.SERVICE_NAME); // migrate to 'ATTR_SERVICE_NAME'

// 'http.route' attribute
console.log(SemanticAttributes.HTTP_ROUTE); // migrate to 'ATTR_HTTP_ROUTE'

// 'db.system' attribute
console.log(SemanticAttributes.DB_SYSTEM); // migrate to 'ATTR_DB_SYSTEM' (in incubating [*])

// 'postgresql' enum value for 'db.system' attribute
console.log(DbSystemValues.POSTGRESQL); // migrate to 'DB_SYSTEM_VALUE_POSTGRESQL' (in incubating [*])
```

See [Migrated usage](#migrated-usage) below.

### Migrated usage

If using any unstable conventions, copy the relevant definitions into your code base (e.g. to "src/semconv.ts", see [above](#unstable-semconv)):

```ts
// src/semconv.ts
export const ATTR_DB_SYSTEM = 'db.system' as const;
export const DB_SYSTEM_VALUE_POSTGRESQL = "postgresql" as const;
```

then:

```js
import {
  ATTR_SERVICE_NAME,
  ATTR_HTTP_ROUTE,
  METRIC_HTTP_CLIENT_REQUEST_DURATION
} from '@opentelemetry/semantic-conventions'; // stable semconv
import {
  ATTR_DB_SYSTEM,
  DB_SYSTEM_VALUE_POSTGRESQL
} from './semconv'; // unstable semconv

console.log(ATTR_SERVICE_NAME); // 'service.name'
console.log(ATTR_HTTP_ROUTE);   // 'http.route'

// Bonus: the older exports did not include metric names from semconv.
// 'http.client.request.duration' metric name
console.log(METRIC_HTTP_CLIENT_REQUEST_DURATION);

console.log(ATTR_DB_SYSTEM);    // 'db.system'
// 'postgresql' enum value for 'db.system' attribute
console.log(DB_SYSTEM_VALUE_POSTGRESQL);
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
[npm-url]: https://www.npmjs.com/package/@opentelemetry/semantic-conventions
[npm-img]: https://badge.fury.io/js/%40opentelemetry%2Fsemantic-conventions.svg
[semconv-docs]: https://github.com/open-telemetry/semantic-conventions/blob/main/docs/README.md
[semconv-stability]: https://opentelemetry.io/docs/specs/otel/versioning-and-stability/#semantic-conventions-stability
[semconv-http-stabilization]: https://opentelemetry.io/blog/2023/http-conventions-declared-stable/
[trace-semantic_conventions]: https://github.com/open-telemetry/semantic-conventions/tree/main/specification/trace/semantic_conventions
