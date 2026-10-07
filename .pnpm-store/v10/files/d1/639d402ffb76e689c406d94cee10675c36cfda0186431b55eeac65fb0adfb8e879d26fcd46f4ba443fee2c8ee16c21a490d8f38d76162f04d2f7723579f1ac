.. :changelog:

History
-------

0.14.7
-------------------
- rollback v0.14.6 back to v0.14.6, see https://github.com/opentracing/opentracing-javascript/issues/172


0.14.5
-------------------
- Fix circular dependency in mock_context (#154) -- thanks Jonathan Moody


0.14.4
-------------------
- Add trace identifiers to the `SpanContext`

0.14.3
-------------------

- Removed the dependency on `lodash` in the API compatibility checks as it was causing errors when the tests were run if `lodash` was not explicitly installed.


0.14.2
-------------------

- `SpanOptions` is now exported from the library.
- `MockTracer` is now exported from the library.
- The `checkBaggageValues` option has been replaced with `skipBaggageChecks` and the `skipInjectExtractChecks` option has been added in the API compatibility checks.


0.14.1
-------------------

- The `globalTracer` delegate will now correctly call `startSpan`, `inject` and `extract` with the configured global tracer as `this`.


0.14.0
-------------------

- TypeScript rewrite: Now brings TypeScript typings out of the box
- Removed `lib-debug` and runtime type checks
- Removed `spanOptions.operationName`
- The main entry point can no longer be imported with a default import

If you previously used a default import like this:

::

    import opentracing from 'opentracing'

change it to

::

    import * as opentracing from 'opentracing'

0.13.1
-------------------

- `BinaryCarrier` now fulfills the API contract that binary carrier objects have a `buffer` property.


0.13.0 (2016-10-14)
-------------------

 **Contains API breaking changes for both library users and tracing implementations**

- Introduces key-value logging API


0.12.1 (2016-08-23)
-------------------

 **Contains API breaking changes for both library users and tracing implementations**

- The package no longer exports the singleton, global tracer by default. `globalTracer()` should be used to access the global tracer
- Implementation no longer use a `TracerImp` object. Implementations should instead subclass from `opentracing.Tracer`, `opentracing.Span`, etc.
- The removal of the `TracerImp` object implies there is no longer an `imp()` method. Implementation-specific methods now exist in undifferentiated form on the tracer object.  Note: the OpenTracing library no longer forces the user to be explicit when calling implementation-specific methods; this has the downside that it is less obvious when an application becomes dependent on a specific tracing implementation.
- `initNewTracer()` has been removed. The Tracer implementation object should be created directly by the library user.
- The default no-op `Tracer.extract()` implementation now returns an empty SpanContext rather than null
- `childOf` and `followFrom` have been moved from `Tracer` to standalone functions
- `Tracer.flush` has been removed. It is not part of the OpenTracing spec.
- Support for the `Tracer.startSpan(fields)` signature has been removed. It must always be called as `Tracer.startSpan(name, [fields])`

*Non-breaking changes*

- A `MockTracer` implementation has been added to the source code
- Adds a naive example, runnable via `make example`


0.12.0 (2016-08-22)
-------------------

- Renamed the browser global symbol from `Tracer` to `opentracing`

0.10.3 (2016-06-12)
-------------------

- Use the `referee` terminology within `Reference`


0.10.2 (2016-06-12)
-------------------

- Fix a bug with the treatment of `startSpan`'s `fields.childOf`


0.10.1 (2016-06-12)
-------------------

- Move to SpanContext, Reference, and `s/join/extract/g`


0.10.0
------

This release makes the `opentracing-javascript` package conformant with the ideas proposed in https://github.com/opentracing/opentracing.github.io/issues/99. The API changes can be summarized as follows:

- Every `Span` has a `SpanContext`, available via `Span.context()`. The `SpanContext` represents the subset of `Span` state that must propagate across process boundaries in-band along with the application data.
- `Span.setBaggageItem()` and `Span.getBaggageItem()` have moved to `SpanContext`. Calls can be migrated trivially: `Span.context().{set,get}BaggageItem()`.
- The first parameter to `Tracer.inject()` is now a `SpanContext`. As a convenience, a `Span` may be passed instead.
- There is a new concept called a `Reference`; a reference describes a relationship between a newly started `Span` and some other `Span` (via a `SpanContext`). The common case is to describe a reference to a parent `Span` that depends on the child `Span` ('REFERENCE_CHILD_OF`).
- `Tracer.startSpan(operation, fields)` no longer accepts `fields.parent`; it now accepts either `fields.childOf`, a `SpanContext` or `Span` instance, or `fields.references`, an array of one or more `Reference` objects. The former is just a shorthand for the latter.
- `Tracer.join(operationName, format, carrier)` has been removed from the API. In its place, use `Tracer.extract(format, carrier)` which returns a `SpanContext`, and pass that `SpanContext` as a reference in `Tracer.startSpan()`.

TL;DR, to start a child span, do this:

::

    let parentSpan = ...;
    let childSpan = Tracer.startSpan('child op', { childOf : parentSpan });

... and to continue a trace from the server side of an RPC, do this:

::

    let format = ...;  // same as for Tracer.join()
    let carrier = ...;  // same as for Tracer.join()
    let extractedCtx = Tracer.extract(format, carrier);
    let serverSpan = Tracer.startSpan('...', { childOf : extractedCtx });
