# Asynchronous Logging

Asynchronous logging enables the minimum overhead of Pino.
Asynchronous logging works by buffering log messages and writing them in larger chunks.

```js
const pino = require('pino')
const logger = pino(pino.destination({
  dest: './my-file', // omit for stdout
  minLength: 4096, // Buffer before writing
  sync: false // Asynchronous logging
}))
```

It's always possible to turn on synchronous logging by passing `sync: true`. 
In this mode of operation, log messages are directly written to the
output stream as the messages are generated with a _blocking_ operation.

* See [`pino.destination`](/docs/api.md#pino-destination)
* `pino.destination` is implemented on [`sonic-boom` ⇗](https://github.com/mcollina/sonic-boom).

### AWS Lambda

Asynchronous logging is disabled by default on AWS Lambda or any other environment
that modifies `process.stdout`. If forcefully turned on, we recommend calling `dest.flushSync()` at the end
of each function execution to avoid losing data.

## Caveats

Asynchronous logging has a couple of important caveats:

* As opposed to the synchronous mode, there is not a one-to-one relationship between
  calls to logging methods (e.g. `logger.info`) and writes to a log file
* There is a possibility of the most recently buffered log messages being lost
  in case of a system failure, e.g. a power cut.

See also:

* [`pino.destination` API](/docs/api.md#pino-destination)
* [`destination` parameter](/docs/api.md#destination)
