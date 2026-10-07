<p align="center">
  <a href="https://sentry.io/?utm_source=github&utm_medium=logo" target="_blank">
    <img src="https://sentry-brand.storage.googleapis.com/sentry-wordmark-dark-280x84.png" alt="Sentry" width="280" height="84">
  </a>
</p>

# Official Sentry SDK for OpenTelemetry

[![npm version](https://img.shields.io/npm/v/@sentry/opentelemetry.svg)](https://www.npmjs.com/package/@sentry/opentelemetry)
[![npm dm](https://img.shields.io/npm/dm/@sentry/opentelemetry.svg)](https://www.npmjs.com/package/@sentry/opentelemetry)
[![npm dt](https://img.shields.io/npm/dt/@sentry/opentelemetry.svg)](https://www.npmjs.com/package/@sentry/opentelemetry)

This package allows you to send your OpenTelemetry trace data to Sentry via OpenTelemetry SpanProcessors.

If you are using `@sentry/node`, OpenTelemetry support is included out of the box. This package is only necessary if you
are setting up OpenTelemetry support for Sentry yourself.

## Installation

```bash
npm install @sentry/opentelemetry

# Or yarn
yarn add @sentry/opentelemetry
```

Note that `@sentry/opentelemetry` depends on the following peer dependencies:

- `@opentelemetry/api` version `1.0.0` or greater
- `@opentelemetry/core` version `1.0.0` or greater
- `@opentelemetry/semantic-conventions` version `1.0.0` or greater
- `@opentelemetry/sdk-trace-base` version `1.0.0` or greater, or a package that implements that, like
  `@opentelemetry/sdk-node`.

## Usage

This package exposes a few building blocks you can add to your OpenTelemetry setup in order to capture OpenTelemetry
traces to Sentry.

This is how you can use this in your app:

1. Initialize Sentry, e.g. `@sentry/node`!
2. Call `setupEventContextTrace(client)`
3. Add `SentrySampler` as sampler
4. Add `SentrySpanProcessor` as span processor
5. Register the Sentry context manager (`SentryAsyncLocalStorageContextManager`, or `wrapContextManagerClass` for a custom base)
6. Add `SentryPropagator` as propagator
7. Setup OTEL-powered async context strategy for Sentry via `setOpenTelemetryContextAsyncContextStrategy()`

For example, you could set this up as follows:

```js
import * as Sentry from '@sentry/node';
import {
  SentryAsyncLocalStorageContextManager,
  SentryPropagator,
  SentrySampler,
  SentrySpanProcessor,
  setupEventContextTrace,
  setOpenTelemetryContextAsyncContextStrategy,
} from '@sentry/opentelemetry';
import { context, propagation, trace } from '@opentelemetry/api';

function setupSentry() {
  Sentry.init({
    dsn: 'xxx',
  });

  const client = Sentry.getClient();
  setupEventContextTrace(client);

  const provider = new BasicTracerProvider({
    sampler: new SentrySampler(client),
  });
  provider.addSpanProcessor(new SentrySpanProcessor());

  // Initialize the provider
  trace.setGlobalTracerProvider(provider);
  propagation.setGlobalPropagator(new SentryPropagator());
  context.setGlobalContextManager(new SentryAsyncLocalStorageContextManager());

  setOpenTelemetryContextAsyncContextStrategy();
}
```

A full setup example can be found in
[node-experimental](https://github.com/getsentry/sentry-javascript/blob/develop/packages/node-experimental).

## Links

- [Official SDK Docs](https://docs.sentry.io/quickstart/)
