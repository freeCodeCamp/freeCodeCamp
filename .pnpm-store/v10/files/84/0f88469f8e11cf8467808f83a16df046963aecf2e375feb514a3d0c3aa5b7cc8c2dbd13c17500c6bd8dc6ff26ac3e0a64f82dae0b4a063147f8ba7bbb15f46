[![Build Status][ci-img]][ci] [![Coverage Status][cov-img]][cov] [![NPM Published Version][npm-img]][npm] ![Node Version][node-img] [![Join the chat at https://gitter.im/opentracing/opentracing-javascript](https://badges.gitter.im/opentracing/opentracing-javascript.svg)](https://gitter.im/opentracing/opentracing-javascript?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)


# OpenTracing API for JavaScript

This library is a JavaScript implementation of Open Tracing API. It is intended for use both on the server and in the browser.

## Required Reading

To fully understand this platform API, it's helpful to be familiar with the [OpenTracing project](http://opentracing.io) and
[terminology](http://opentracing.io/documentation/pages/spec.html) more specifically.

## Quick Start

Install the package using `npm`:

```bash
npm install --save opentracing
```

### Example

The package contains an example using a naive `MockTracer` implementation. To run the example:

```bash
npm run example
```

The output should look something like:

```
Spans:
    parent_span - 1521ms
        tag 'custom':'tag value'
        tag 'alpha':'1000'
    child_span - 503ms
        tag 'alpha':'200'
        tag 'beta':'50'
```

### Code snippet

In your JavaScript code, add instrumentation to the operations to be tracked. This is composed primarily of using "spans" around operations of interest and adding log statements to capture useful data relevant to those operations.

```js
const http = require('http');
const opentracing = require('opentracing');

// NOTE: the default OpenTracing tracer does not record any tracing information.
// Replace this line with the tracer implementation of your choice.
const tracer = new opentracing.Tracer();

const span = tracer.startSpan('http_request');
const opts = {
    host : 'example.com',
    method: 'GET',
    port : '80',
    path: '/',
};
http.request(opts, res => {
    res.setEncoding('utf8');
    res.on('error', err => {
        // assuming no retries, mark the span as failed
        span.setTag(opentracing.Tags.ERROR, true);
        span.log({'event': 'error', 'error.object': err, 'message': err.message, 'stack': err.stack});
        span.finish();
    });
    res.on('data', chunk => {
        span.log({'event': 'data_received', 'chunk_length': chunk.length});
    });
    res.on('end', () => {
        span.log({'event': 'request_end'});
        span.finish();
    });
}).end();
```

As noted in the source snippet, the default behavior of the `opentracing` package is to act as a "no op" implementation. To capture and make the tracing data actionable, the `tracer` object should be initialized with the OpenTracing implementation of your choice as in the pseudo-code below:

```js
const CustomTracer = require('tracing-implementation-of-your-choice');
const tracer = new CustomTracer();
```

### Usage in the browser

The package contains two bundles built with webpack that can be included using a standard `<script>` tag. The library will be exposed under the global `opentracing` namespace:

* `dist/opentracing-browser.min.js` - minified, no runtime checks
* `dist/opentracing-browser.js` - debug version with runtime checks

### Usage with TypeScript

Since the source is written in TypeScript, if you are using TypeScript, you can just `npm install` the package and it will work out of the box.
This is especially useful for implementors who want to type check their implementation with the base interface.

### Global tracer

The library also provides a global singleton tracer for convenience. This can be set and accessed via the following:

```javascript
opentracing.initGlobalTracer(new CustomTracer());

const tracer = opentracing.globalTracer();
```

Note: `globalTracer()` returns a wrapper on the actual tracer object. This is done for the convenience of use as it ensures that the function will always return a non-null object.  This can be helpful in cases where it is difficult or impossible to know precisely when `initGlobalTracer` is called (for example, when writing a utility library that does not control the initialization process).  For more precise control, individual `Tracer` objects can be used instead of the global tracer.

## API Documentation

There is a hosted copy of the current generated [ESDoc API Documentation here](https://opentracing-javascript.surge.sh).

## Contributing & developer information

See the [OpenTracing website](http://opentracing.io) for general information on contributing to OpenTracing.

The project is written in TypeScript and built using a npm scripts. Run:

* `npm run build` creates the compiled, distributable JavaScript code in `./lib`
* `npm run watch` incrementally compiles on file changes
* `npm run webpack` creates the bundles for the browser in `./dist`
* `npm test` runs the tests
* `npm run typedoc` generates the documentation in `./typedoc`

**Note:** The minimum supported Node version for development is `>=6`. Tests can however be run on any version that this project supports (`>=0.10`).

## OpenTracing tracer implementations

*This section is intended for developers wishing to* ***implement their own tracers***. *Developers who simply wish to* ***use OpenTracing*** *can safely ignore this information.*

### Custom tracer implementation

Implementations can subclass `opentracing.Tracer`, `opentracing.Span`, and the other API classes to build an OpenTracing tracer and implement the underscore prefixed methods such as `_addTag` to pick up a bit of common code implemented in the base classes.

### API compatibility testing

If `mocha` is being used for unit testing, `test/api_compatibility` can be used to test the custom tracer. The file exports a single function that expects as an argument a function that will return a new instance of the tracer.

```javascript
const apiCompatibilityChecks = require('opentracing/lib/test/api_compatibility.js').default;
apiCompatibilityChecks(() => new CustomTracer());
```
## LICENSE 

Apache License 2.0

### MockTracer

A minimal example tracer is provided in the `src/mock_tracer` directory of the source code.

  [ci-img]: https://travis-ci.org/opentracing/opentracing-javascript.svg?branch=master
  [cov-img]: https://coveralls.io/repos/github/opentracing/opentracing-javascript/badge.svg?branch=master
  [npm-img]: https://badge.fury.io/js/opentracing.svg
  [node-img]: http://img.shields.io/node/v/opentracing.svg
  [ci]: https://travis-ci.org/opentracing/opentracing-javascript
  [cov]: https://coveralls.io/github/opentracing/opentracing-javascript?branch=master
  [npm]: https://www.npmjs.com/package/opentracing


