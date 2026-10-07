# Help

* [Log rotation](#rotate)
* [Reopening log files](#reopening)
* [Saving to multiple files](#multiple)
* [Log filtering](#filter-logs)
* [Transports and systemd](#transport-systemd)
* [Log to different streams](#multi-stream)
* [Duplicate keys](#dupe-keys)
* [Log levels as labels instead of numbers](#level-string)
* [Pino with `debug`](#debug)
* [Unicode and Windows terminal](#windows)
* [Mapping Pino Log Levels to Google Cloud Logging (Stackdriver) Severity Levels](#stackdriver)
* [Using Grafana Loki to evaluate pino logs in a kubernetes cluster](#grafana-loki)
* [Avoid Message Conflict](#avoid-message-conflict)
* [Best performance for logging to `stdout`](#best-performance-for-stdout)
* [Testing](#testing)

<a id="rotate"></a>
## Log rotation

Use a separate tool for log rotation:
We recommend [logrotate](https://github.com/logrotate/logrotate).
Consider we output our logs to `/var/log/myapp.log` like so:

```
$ node server.js > /var/log/myapp.log
```

We would rotate our log files with logrotate, by adding the following to `/etc/logrotate.d/myapp`:

```
/var/log/myapp.log {
       su root
       daily
       rotate 7
       delaycompress
       compress
       notifempty
       missingok
       copytruncate
}
```

The `copytruncate` configuration has a very slight possibility of lost log lines due
to a gap between copying and truncating - the truncate may occur after additional lines
have been written. To perform log rotation without `copytruncate`, see the [Reopening log files](#reopening)
help.

<a id="reopening"></a>
## Reopening log files

In cases where a log rotation tool doesn't offer copy-truncate capabilities,
or where using them is deemed inappropriate, `pino.destination`
can reopen file paths after a file has been moved away.

One way to use this is to set up a `SIGUSR2` or `SIGHUP` signal handler that
reopens the log file destination, making sure to write the process PID out
somewhere so the log rotation tool knows where to send the signal.

```js
// write the process pid to a well known location for later
const fs = require('node:fs')
fs.writeFileSync('/var/run/myapp.pid', process.pid)

const dest = pino.destination('/log/file')
const logger = require('pino')(dest)
process.on('SIGHUP', () => dest.reopen())
```

The log rotation tool can then be configured to send this signal to the process
after a log rotation event has occurred.

Given a similar scenario as in the [Log rotation](#rotate) section a basic
`logrotate` config that aligns with this strategy would look similar to the following:

```
/var/log/myapp.log {
       su root
       daily
       rotate 7
       delaycompress
       compress
       notifempty
       missingok
       postrotate
           kill -HUP `cat /var/run/myapp.pid`
       endscript
}
```

<a id="multiple"></a>
## Saving to multiple files

See [`pino.multistream`](/docs/api.md#pino-multistream).

<a id="filter-logs"></a>
## Log Filtering
The Pino philosophy advocates common, preexisting, system utilities.

Some recommendations in line with this philosophy are:

1. Use [`grep`](https://linux.die.net/man/1/grep):
    ```sh
    $ # View all "INFO" level logs
    $ node app.js | grep '"level":30'
    ```
1. Use [`jq`](https://stedolan.github.io/jq/):
    ```sh
    $ # View all "ERROR" level logs
    $ node app.js | jq 'select(.level == 50)'
    ```

<a id="transport-systemd"></a>
## Transports and systemd
`systemd` makes it complicated to use pipes in services. One method for overcoming
this challenge is to use a subshell:

```
ExecStart=/bin/sh -c '/path/to/node app.js | pino-transport'
```

<a id="multi-stream"></a>
## Log to different streams

Pino's default log destination is the singular destination of `stdout`. While
not recommended for performance reasons, multiple destinations can be targeted
by using [`pino.multistream`](/docs/api.md#pino-multistream).

In this example, we use `stderr` for `error` level logs and `stdout` as default
for all other levels (e.g. `debug`, `info`, and `warn`).

```js
const pino = require('pino')
var streams = [
  {level: 'debug', stream: process.stdout},
  {level: 'error', stream: process.stderr},
  {level: 'fatal', stream: process.stderr}
]

const logger = pino({
  name: 'my-app',
  level: 'debug', // must be the lowest level of all streams
}, pino.multistream(streams))
```

<a id="dupe-keys"></a>
## How Pino handles duplicate keys

Duplicate keys are possibly when a child logger logs an object with a key that
collides with a key in the child loggers bindings.

See the [child logger duplicate keys caveat](/docs/child-loggers.md#duplicate-keys-caveat)
for information on this is handled.

<a id="level-string"></a>
## Log levels as labels instead of numbers
Pino log lines are meant to be parsable. Thus, Pino's default mode of operation
is to print the level value instead of the string name. 
However, you can use the [`formatters`](/docs/api.md#formatters-object) option 
with a [`level`](/docs/api.md#level) function to print the string name instead of the level value :

```js
const pino = require('pino')

const log = pino({
  formatters: {
    level: (label) => {
      return {
        level: label
      }
    }
  }
})

log.info('message')

// {"level":"info","time":1661632832200,"pid":18188,"hostname":"foo","msg":"message"}
```

Although it works, we recommend using one of these options instead if you are able:

1. If the only change desired is the name then a transport can be used. One such
transport is [`pino-text-level-transport`](https://npm.im/pino-text-level-transport).
1. Use a prettifier like [`pino-pretty`](https://npm.im/pino-pretty) to make
the logs human friendly.

<a id="debug"></a>
## Pino with `debug`

The popular [`debug`](https://npm.im/debug) is used in many modules across the ecosystem.

The [`pino-debug`](https://github.com/pinojs/pino-debug) module
can capture calls to `debug` loggers and run them
through `pino` instead. This results in a 10x (20x in asynchronous mode)
performance improvement - even though `pino-debug` is logging additional
data and wrapping it in JSON.

To quickly enable this install [`pino-debug`](https://github.com/pinojs/pino-debug)
and preload it with the `-r` flag, enabling any `debug` logs with the
`DEBUG` environment variable:

```sh
$ npm i pino-debug
$ DEBUG=* node -r pino-debug app.js
```

[`pino-debug`](https://github.com/pinojs/pino-debug) also offers fine-grain control to map specific `debug`
namespaces to `pino` log levels. See [`pino-debug`](https://github.com/pinojs/pino-debug)
for more.

<a id="windows"></a>
## Unicode and Windows terminal

Pino uses [sonic-boom](https://github.com/mcollina/sonic-boom) to speed
up logging. Internally, it uses [`fs.write`](https://nodejs.org/dist/latest-v10.x/docs/api/fs.html#fs_fs_write_fd_string_position_encoding_callback) to write log lines directly to a file
descriptor. On Windows, Unicode output is not handled properly in the
terminal (both `cmd.exe` and PowerShell), and as such the output could
be visualized incorrectly if the log lines include utf8 characters. It
is possible to configure the terminal to visualize those characters
correctly with the use of [`chcp`](https://ss64.com/nt/chcp.html) by
executing in the terminal `chcp 65001`. This is a known limitation of
Node.js.

<a id="stackdriver"></a>
## Mapping Pino Log Levels to Google Cloud Logging (Stackdriver) Severity Levels

Google Cloud Logging uses `severity` levels instead of log levels. As a result, all logs may show as INFO
level logs while completely ignoring the level set in the pino log. Google Cloud Logging also prefers that
log data is present inside a `message` key instead of the default `msg` key that Pino uses. Use a technique
similar to the one below to retain log levels in Google Cloud Logging

```js
const pino = require('pino')

// https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#logseverity
const PinoLevelToSeverityLookup = {
  trace: 'DEBUG',
  debug: 'DEBUG',
  info: 'INFO',
  warn: 'WARNING',
  error: 'ERROR',
  fatal: 'CRITICAL',
};

const defaultPinoConf = {
  messageKey: 'message',
  formatters: {
    level(label, number) {
      return {
        severity: PinoLevelToSeverityLookup[label] || PinoLevelToSeverityLookup['info'],
        level: number,
      }
    }
  },
}

module.exports = function createLogger(options) {
  return pino(Object.assign({}, options, defaultPinoConf))
}
```

A library that configures Pino for
[Google Cloud Structured Logging](https://cloud.google.com/logging/docs/structured-logging)
is available at:
[@google-cloud/pino-logging-gcp-config](https://www.npmjs.com/package/@google-cloud/pino-logging-gcp-config)

This library has the following features:

+ Converts Pino log levels to Google Cloud Logging log levels, as above
+ Uses `message` instead of `msg` for the message key, as above
+ Adds a millisecond-granularity timestamp in the 
  [structure](https://cloud.google.com/logging/docs/agent/logging/configuration#timestamp-processing)
  recognised by Google Cloud Logging eg: \
  `"timestamp":{"seconds":1445470140,"nanos":123000000}`
+ Adds a sequential
  [`insertId`](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#FIELDS.insert_id)
  to ensure log messages with identical timestamps are ordered correctly.
+ Logs including an `Error` object have the
  [`stack_trace`](https://cloud.google.com/error-reporting/docs/formatting-error-messages#log-error)
  property set so that the error is forwarded to Google Cloud Error Reporting.
+ Includes a
  [`ServiceContext`](https://cloud.google.com/error-reporting/reference/rest/v1beta1/ServiceContext)
  object in the logs for Google Cloud Error Reporting, auto detected from the
  environment if not specified
+ Maps the OpenTelemetry properties `span_id`, `trace_id`, and `trace_flags`
  to the equivalent Google Cloud Logging fields.

<a id="grafana-loki"></a>
## Using Grafana Loki to evaluate pino logs in a kubernetes cluster

To get pino logs into Grafana Loki there are two options:

1. **Push:** Use [pino-loki](https://github.com/Julien-R44/pino-loki) to send logs directly to Loki.
1. **Pull:** Configure Grafana Promtail to read and properly parse the logs before sending them to Loki.  
   Similar to Google Cloud logging, this involves remapping the log levels. See this [article](https://medium.com/@janpaepke/structured-logging-in-the-grafana-monitoring-stack-8aff0a5af2f5) for details.

<a id="avoid-message-conflict"></a>
## Avoid Message Conflict

As described in the [`message` documentation](/docs/api.md#message), when a log
is written like `log.info({ msg: 'a message' }, 'another message')` then the
final output JSON will have `"msg":"another message"` and the `'a message'`
string will be lost. To overcome this, the [`logMethod` hook](/docs/api.md#logmethod)
can be used:

```js
'use strict'

const log = require('pino')({
  level: 'debug',
  hooks: {
    logMethod (inputArgs, method) {
      if (inputArgs.length === 2 && inputArgs[0].msg) {
       inputArgs[0].originalMsg = inputArgs[0].msg
      }
      return method.apply(this, inputArgs)
    }
  }
})

log.info('no original message')
log.info({ msg: 'mapped to originalMsg' }, 'a message')

// {"level":30,"time":1596313323106,"pid":63739,"hostname":"foo","msg":"no original message"}
// {"level":30,"time":1596313323107,"pid":63739,"hostname":"foo","msg":"a message","originalMsg":"mapped to originalMsg"}
```

<a id="best-performance-for-stdout"></a>
## Best performance for logging to `stdout`

The best performance for logging directly to stdout is _usually_ achieved by using the
default configuration:

```js
const log = require('pino')();
```

You should only have to configure custom transports or other settings
if you have broader logging requirements.

<a id="testing"></a>
## Testing

See [`pino-test`](https://github.com/pinojs/pino-test).
