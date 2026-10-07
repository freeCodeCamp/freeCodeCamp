# Redaction

> Redaction is not supported in the browser [#670](https://github.com/pinojs/pino/issues/670)

To redact sensitive information, supply paths to keys that hold sensitive data
using the `redact` option. Note that paths that contain hyphens need to use
brackets to access the hyphenated property:

```js
const logger = require('.')({
  redact: ['key', 'path.to.key', 'stuff.thats[*].secret', 'path["with-hyphen"]']
})

logger.info({
  key: 'will be redacted',
  path: {
    to: {key: 'sensitive', another: 'thing'}
  },
  stuff: {
    thats: [
      {secret: 'will be redacted', logme: 'will be logged'},
      {secret: 'as will this', logme: 'as will this'}
    ]
  }
})
```

This will output:

```JSON
{"level":30,"time":1527777350011,"pid":3186,"hostname":"Davids-MacBook-Pro-3.local","key":"[Redacted]","path":{"to":{"key":"[Redacted]","another":"thing"}},"stuff":{"thats":[{"secret":"[Redacted]","logme":"will be logged"},{"secret":"[Redacted]","logme":"as will this"}]}}
```

The `redact` option can take an array (as shown in the above example) or
an object. This allows control over *how* information is redacted.

For instance, setting the censor:

```js
const logger = require('.')({
  redact: {
    paths: ['key', 'path.to.key', 'stuff.thats[*].secret'],
    censor: '**GDPR COMPLIANT**'
  }
})

logger.info({
  key: 'will be redacted',
  path: {
    to: {key: 'sensitive', another: 'thing'}
  },
  stuff: {
    thats: [
      {secret: 'will be redacted', logme: 'will be logged'},
      {secret: 'as will this', logme: 'as will this'}
    ]
  }
})
```

This will output:

```JSON
{"level":30,"time":1527778563934,"pid":3847,"hostname":"Davids-MacBook-Pro-3.local","key":"**GDPR COMPLIANT**","path":{"to":{"key":"**GDPR COMPLIANT**","another":"thing"}},"stuff":{"thats":[{"secret":"**GDPR COMPLIANT**","logme":"will be logged"},{"secret":"**GDPR COMPLIANT**","logme":"as will this"}]}}
```

The `redact.remove` option also allows for the key and value to be removed from output:

```js
const logger = require('.')({
  redact: {
    paths: ['key', 'path.to.key', 'stuff.thats[*].secret'],
    remove: true
  }
})

logger.info({
  key: 'will be redacted',
  path: {
    to: {key: 'sensitive', another: 'thing'}
  },
  stuff: {
    thats: [
      {secret: 'will be redacted', logme: 'will be logged'},
      {secret: 'as will this', logme: 'as will this'}
    ]
  }
})
```

This will output

```JSON
{"level":30,"time":1527782356751,"pid":5758,"hostname":"Davids-MacBook-Pro-3.local","path":{"to":{"another":"thing"}},"stuff":{"thats":[{"logme":"will be logged"},{"logme":"as will this"}]}}
```

See [pino options in API](/docs/api.md#redact-array-object) for `redact` API details.

<a name="paths"></a>
## Path Syntax

The syntax for paths supplied to the `redact` option conform to the syntax in path lookups
in standard ECMAScript, with two additions:

* paths may start with bracket notation
* paths may contain the asterisk `*` to denote a wildcard
* paths are **case sensitive**

By way of example, the following are all valid paths:

* `a.b.c`
* `a["b-c"].d`
* `["a-b"].c`
* `a.b.*`
* `a[*].b`

## Overhead

Pino's redaction functionality is built on top of [`fast-redact`](https://github.com/davidmarkclements/fast-redact)
which adds about 2% overhead to `JSON.stringify` when using paths without wildcards.

When used with pino logger with a single redacted path, any overhead is within noise -
a way to deterministically measure its effect has not been found. This is because it is not a bottleneck.

However, wildcard redaction does carry a non-trivial cost relative to explicitly declaring the keys
(50% in a case where four keys are redacted across two objects). See
the [`fast-redact` benchmarks](https://github.com/davidmarkclements/fast-redact#benchmarks) for details.

## Safety

The `redact` option is intended as an initialization time configuration option.
Path strings must not originate from user input.
The `fast-redact` module uses a VM context to syntax check the paths, user input
should never be combined with such an approach. See the [`fast-redact` Caveat](https://github.com/davidmarkclements/fast-redact#caveat)
and the [`fast-redact` Approach](https://github.com/davidmarkclements/fast-redact#approach) for in-depth information.
