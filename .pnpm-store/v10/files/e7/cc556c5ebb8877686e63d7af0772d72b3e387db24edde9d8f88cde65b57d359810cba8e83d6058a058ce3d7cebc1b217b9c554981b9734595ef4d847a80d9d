# Transports

Pino transports can be used for both transmitting and transforming log output.

The way Pino generates logs:

1. Reduces the impact of logging on an application to the absolute minimum.
2. Gives greater flexibility in how logs are processed and stored.

It is recommended that any log transformation or transmission is performed either
in a separate thread or a separate process.

Before Pino v7 transports would ideally operate in a separate process - these are
now referred to as [Legacy Transports](#legacy-transports).

From Pino v7 and upwards transports can also operate inside a [Worker Thread][worker-thread]
and can be used or configured via the options object passed to `pino` on initialization.
In this case the transports would always operate asynchronously (unless `options.sync` is set to `true` in transport options), and logs would be
flushed as quickly as possible (there is nothing to do).

[worker-thread]: https://nodejs.org/dist/latest-v14.x/docs/api/worker_threads.html

## v7+ Transports

A transport is a module that exports a default function that returns a writable stream:

```js
import { createWriteStream } from 'node:fs'

export default (options) => {
  return createWriteStream(options.destination)
}
```

Let's imagine the above defines our "transport" as the file `my-transport.mjs`
(ESM files are supported even if the project is written in CJS).

We would set up our transport by creating a transport stream with `pino.transport`
and passing it to the `pino` function:

```js
const pino = require('pino')
const transport = pino.transport({
  target: '/absolute/path/to/my-transport.mjs'
})
pino(transport)
```

The transport code will be executed in a separate worker thread. The main thread
will write logs to the worker thread, which will write them to the stream returned
from the function exported from the transport file/module.

The exported function can also be async. If we use an async function we can throw early
if the transform could not be opened. As an example:

```js
import fs from 'node:fs'
import { once } from 'events'
export default async (options) => {
  const stream = fs.createWriteStream(options.destination)
  await once(stream, 'open')
  return stream
}
```

While initializing the stream we're able to use `await` to perform asynchronous operations. In this
case, waiting for the write streams `open` event.

Let's imagine the above was published to npm with the module name `some-file-transport`.

The `options.destination` value can be set when creating the transport stream with `pino.transport` like so:

```js
const pino = require('pino')
const transport = pino.transport({
  target: 'some-file-transport',
  options: { destination: '/dev/null' }
})
pino(transport)
```

Note here we've specified a module by package rather than by relative path. The options object we provide
is serialized and injected into the transport worker thread, then passed to the module's exported function.
This means that the options object can only contain types that are supported by the
[Structured Clone Algorithm][sca] which is used to (de)serialize objects between threads.

What if we wanted to use both transports, but send only error logs to `my-transport.mjs` while
sending all logs to `some-file-transport`? We can use the `pino.transport` function's `level` option:

```js
const pino = require('pino')
const transport = pino.transport({
  targets: [
    { target: '/absolute/path/to/my-transport.mjs', level: 'error' },
    { target: 'some-file-transport', options: { destination: '/dev/null' }}
  ]
})
pino(transport)
```

If we're using custom levels, they should be passed in when using more than one transport.
```js
const pino = require('pino')
const transport = pino.transport({
  targets: [
    { target: '/absolute/path/to/my-transport.mjs', level: 'error' },
    { target: 'some-file-transport', options: { destination: '/dev/null' }
  ],
  levels: { foo: 35 }
})
pino(transport)
```

It is also possible to use the `dedupe` option to send logs only to the stream with the higher level.
```js
const pino = require('pino')
const transport = pino.transport({
  targets: [
    { target: '/absolute/path/to/my-transport.mjs', level: 'error' },
    { target: 'some-file-transport', options: { destination: '/dev/null' }
  ],
  dedupe: true
})
pino(transport)
```

To make pino log synchronously, pass `sync: true` to transport options.
```js
const pino = require('pino')
const transport = pino.transport({
  targets: [
    { target: '/absolute/path/to/my-transport.mjs', level: 'error' },
  ],
  dedupe: true,
  sync: true,
});
pino(transport);
```

For more details on `pino.transport` see the [API docs for `pino.transport`][pino-transport].

[pino-transport]: /docs/api.md#pino-transport
[sca]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm

<a id="writing"></a>
### Writing a Transport

The module [pino-abstract-transport](https://github.com/pinojs/pino-abstract-transport) provides
a simple utility to parse each line.  Its usage is highly recommended.

You can see an example using an async iterator with ESM:

```js
import build from 'pino-abstract-transport'
import SonicBoom from 'sonic-boom'
import { once } from 'events'

export default async function (opts) {
  // SonicBoom is necessary to avoid loops with the main thread.
  // It is the same of pino.destination().
  const destination = new SonicBoom({ dest: opts.destination || 1, sync: false })
  await once(destination, 'ready')

  return build(async function (source) {
    for await (let obj of source) {
      const toDrain = !destination.write(obj.msg.toUpperCase() + '\n')
      // This block will handle backpressure
      if (toDrain) {
        await once(destination, 'drain')
      }
    }
  }, {
    async close (err) {
      destination.end()
      await once(destination, 'close')
    }
  })
}
```

or using Node.js streams and CommonJS:

```js
'use strict'

const build = require('pino-abstract-transport')
const SonicBoom = require('sonic-boom')

module.exports = function (opts) {
  const destination = new SonicBoom({ dest: opts.destination || 1, sync: false })
  return build(function (source) {
    source.pipe(destination)
  }, {
    close (err, cb) {
      destination.end()
      destination.on('close', cb.bind(null, err))
    }
  })
}
```

(It is possible to use the async iterators with CommonJS and streams with ESM.)

To consume async iterators in batches, consider using the [hwp](https://github.com/mcollina/hwp) library.

The `close()` function is needed to make sure that the stream is closed and flushed when its
callback is called or the returned promise resolves. Otherwise, log lines will be lost.

### Writing to a custom transport & stdout

In case you want to both use a custom transport, and output the log entries with default processing to STDOUT, you can use 'pino/file' transport configured with `destination: 1`:

```js
    const transports = [
      {
        target: 'pino/file',
        options: { destination: 1 } // this writes to STDOUT
      },
      {
        target: 'my-custom-transport',
        options: { someParameter: true } 
      }
    ]

    const logger = pino(pino.transport({ targets: transports }))
```

### Creating a transport pipeline

As an example, the following transport returns a `Transform` stream:

```js
import build from 'pino-abstract-transport'
import { pipeline, Transform } from 'node:stream'
export default async function (options) {
  return build(function (source) {
    const myTransportStream = new Transform({
      // Make sure autoDestroy is set,
      // this is needed in Node v12 or when using the
      // readable-stream module.
      autoDestroy: true,

      objectMode: true,
      transform (chunk, enc, cb) {

        // modifies the payload somehow
        chunk.service = 'pino'

        // stringify the payload again
        this.push(`${JSON.stringify(chunk)}\n`)
        cb()
      }
    })
    pipeline(source, myTransportStream, () => {})
    return myTransportStream
  }, {
    // This is needed to be able to pipeline transports.
    enablePipelining: true
  })
}
```

Then you can pipeline them with:

```js
import pino from 'pino'

const logger = pino({
  transport: {
    pipeline: [{
      target: './my-transform.js'
    }, {
      // Use target: 'pino/file' with STDOUT descriptor 1 to write
      // logs without any change.
      target: 'pino/file',
      options: { destination: 1 }
    }]
  }
})

logger.info('hello world')
```

__NOTE: there is no "default" destination for a pipeline but
a terminating target, i.e. a `Writable` stream.__

### TypeScript compatibility

Pino provides basic support for transports written in TypeScript.

Ideally, they should be transpiled to ensure maximum compatibility, but sometimes
you might want to use tools such as TS-Node, to execute your TypeScript
code without having to go through an explicit transpilation step.

You can use your TypeScript code without explicit transpilation, but there are
some known caveats:
- For "pure" TypeScript code, ES imports are still not supported (ES imports are
  supported once the code is transpiled).
- Only TS-Node is supported for now, there's no TSM support.
- Running transports TypeScript code on TS-Node seems to be problematic on
  Windows systems, there's no official support for that yet.

### Notable transports

#### `pino/file`

The `pino/file` transport routes logs to a file (or file descriptor).

The `options.destination` property may be set to specify the desired file destination.

```js
const pino = require('pino')
const transport = pino.transport({
  target: 'pino/file',
  options: { destination: '/path/to/file' }
})
pino(transport)
```

By default, the `pino/file` transport assumes the directory of the destination file exists. If it does not exist, the transport will throw an error when it attempts to open the file for writing. The `mkdir` option may be set to `true` to configure the transport to create the directory, if it does not exist, before opening the file for writing.

```js
const pino = require('pino')
const transport = pino.transport({
  target: 'pino/file',
  options: { destination: '/path/to/file', mkdir: true }
})
pino(transport)
```

By default, the `pino/file` transport appends to the destination file if it exists. The `append` option may be set to `false` to configure the transport to truncate the file upon opening it for writing.

```js
const pino = require('pino')
const transport = pino.transport({
  target: 'pino/file',
  options: { destination: '/path/to/file', append: false }
})
pino(transport)
```

The `options.destination` property may also be a number to represent a file descriptor. Typically this would be `1` to write to STDOUT or `2` to write to STDERR. If `options.destination` is not set, it defaults to `1` which means logs will be written to STDOUT. If `options.destination` is a string integer, e.g. `'1'`, it will be coerced to a number and used as a file descriptor. If this is not desired, provide a full path, e.g. `/tmp/1`.

The difference between using the `pino/file` transport builtin and using `pino.destination` is that `pino.destination` runs in the main thread, whereas `pino/file` sets up `pino.destination` in a worker thread.

#### `pino-pretty`

The [`pino-pretty`][pino-pretty] transport prettifies logs.

By default the `pino-pretty` builtin logs to STDOUT.

The `options.destination` property may be set to log pretty logs to a file descriptor or file. The following would send the prettified logs to STDERR:

```js
const pino = require('pino')
const transport = pino.transport({
  target: 'pino-pretty',
  options: { destination: 1 } // use 2 for stderr
})
pino(transport)
```

### Asynchronous startup

The new transports boot asynchronously and calling `process.exit()` before the transport
starts will cause logs to not be delivered.

```js
const pino = require('pino')
const transport = pino.transport({
  targets: [
    { target: '/absolute/path/to/my-transport.mjs', level: 'error' },
    { target: 'some-file-transport', options: { destination: '/dev/null' } }
  ]
})
const logger = pino(transport)

logger.info('hello')

// If logs are printed before the transport is ready when process.exit(0) is called,
// they will be lost.
transport.on('ready', function () {
  process.exit(0)
})
```

## Legacy Transports

A legacy Pino "transport" is a supplementary tool that consumes Pino logs.

Consider the following example for creating a transport:

```js
const { pipeline, Writable } = require('node:stream')
const split = require('split2')

const myTransportStream = new Writable({
  write (chunk, enc, cb) {
  // apply a transform and send to STDOUT
  console.log(chunk.toString().toUpperCase())
  cb()
  }
})

pipeline(process.stdin, split(JSON.parse), myTransportStream)
```

The above defines our "transport" as the file `my-transport-process.js`.

Logs can now be consumed using shell piping:

```sh
node my-app-which-logs-stuff-to-stdout.js | node my-transport-process.js
```

Ideally, a transport should consume logs in a separate process to the application,
Using transports in the same process causes unnecessary load and slows down
Node's single-threaded event loop.

## Known Transports

PRs to this document are welcome for any new transports!

### Pino v7+ Compatible

+ [@axiomhq/pino](#@axiomhq/pino)
+ [@logtail/pino](#@logtail/pino)
+ [@macfja/pino-fingers-crossed](#macfja-pino-fingers-crossed)
+ [@openobserve/pino-openobserve](#pino-openobserve)
+ [pino-airbrake-transport](#pino-airbrake-transport)
+ [pino-axiom](#pino-axiom)
+ [pino-datadog-transport](#pino-datadog-transport)
+ [pino-discord-webhook](#pino-discord-webhook)
+ [pino-elasticsearch](#pino-elasticsearch)
+ [pino-hana](#pino-hana)
+ [pino-logflare](#pino-logflare)
+ [pino-logfmt](#pino-logfmt)
+ [pino-loki](#pino-loki)
+ [pino-opentelemetry-transport](#pino-opentelemetry-transport)
+ [pino-pretty](#pino-pretty)
+ [pino-roll](#pino-roll)
+ [pino-seq-transport](#pino-seq-transport)
+ [pino-sentry-transport](#pino-sentry-transport)
+ [pino-slack-webhook](#pino-slack-webhook)
+ [pino-telegram-webhook](#pino-telegram-webhook)
+ [pino-yc-transport](#pino-yc-transport)

### Legacy

+ [pino-applicationinsights](#pino-applicationinsights)
+ [pino-azuretable](#pino-azuretable)
+ [pino-cloudwatch](#pino-cloudwatch)
+ [pino-couch](#pino-couch)
+ [pino-datadog](#pino-datadog)
+ [pino-gelf](#pino-gelf)
+ [pino-http-send](#pino-http-send)
+ [pino-kafka](#pino-kafka)
+ [pino-logdna](#pino-logdna)
+ [pino-loki](#pino-loki)
+ [pino-mq](#pino-mq)
+ [pino-mysql](#pino-mysql)
+ [pino-papertrail](#pino-papertrail)
+ [pino-pg](#pino-pg)
+ [pino-redis](#pino-redis)
+ [pino-sentry](#pino-sentry)
+ [pino-seq](#pino-seq)
+ [pino-socket](#pino-socket)
+ [pino-stackdriver](#pino-stackdriver)
+ [pino-syslog](#pino-syslog)
+ [pino-websocket](#pino-websocket)


<a id="@axiomhq/pino"></a>
### @axiomhq/pino

[@axiomhq/pino](https://www.npmjs.com/package/@axiomhq/pino) is the official [Axiom](https://axiom.co/) transport for Pino, using [axiom-js](https://github.com/axiomhq/axiom-js).

```javascript
import pino from 'pino';

const logger = pino(
  { level: 'info' },
  pino.transport({
    target: '@axiomhq/pino',
    options: {
      dataset: process.env.AXIOM_DATASET,
      token: process.env.AXIOM_TOKEN,
    },
  }),
);
```

then you can use the logger as usual:

```js
logger.info('Hello from pino!');
```

For further examples, head over to the [examples](https://github.com/axiomhq/axiom-js/tree/main/examples/pino) directory.

<a id="@logtail/pino"></a>
### @logtail/pino

The [@logtail/pino](https://www.npmjs.com/package/@logtail/pino) NPM package is a transport that forwards logs to [Logtail](https://logtail.com) by [Better Stack](https://betterstack.com).

[Quick start guide ⇗](https://betterstack.com/docs/logs/javascript/pino)

<a id="macfja-pino-fingers-crossed"></a>
### @macfja/pino-fingers-crossed

[@macfja/pino-fingers-crossed](https://github.com/MacFJA/js-pino-fingers-crossed) is a Pino v7+ transport that holds logs until a log level is reached, allowing to only have logs when it matters.

```js
const pino = require('pino');
const { default: fingersCrossed, enable } = require('@macfja/pino-fingers-crossed')

const logger = pino(fingersCrossed());

logger.info('Will appear immedialty')
logger.error('Will appear immedialty')

logger.setBindings({ [enable]: 50 })
logger.info('Will NOT appear immedialty')
logger.info('Will NOT appear immedialty')
logger.error('Will appear immedialty as well as the 2 previous messages') // error log are level 50
logger.info('Will NOT appear')
logger.info({ [enable]: false }, 'Will appear immedialty')
logger.info('Will NOT appear')
```
<a id="pino-openobserve"></a>
### @openobserve/pino-openobserve

[@openobserve/pino-openobserve](https://github.com/openobserve/pino-openobserve) is a 
Pino v7+ transport that will send logs to an 
[OpenObserve](https://openobserve.ai) instance.

```
const pino = require('pino');
const OpenobserveTransport = require('@openobserve/pino-openobserve');

const logger = pino({
  level: 'info',
  transport: {
    target: OpenobserveTransport,
    options: {
      url: 'https://your-openobserve-server.com',
      organization: 'your-organization',
      streamName: 'your-stream',
      auth: {
        username: 'your-username',
        password: 'your-password',
      },
    },
  },
});
```

For full documentation check the [README](https://github.com/openobserve/pino-openobserve).

<a id="pino-airbrake-transport"></a>
### pino-airbrake-transport

[pino-airbrake-transport][pino-airbrake-transport] is a Pino v7+ compatible transport to forward log events to [Airbrake][Airbrake]
from a dedicated worker:

```js
const pino = require('pino')
const transport = pino.transport({
  target: 'pino-airbrake-transport',
  options: {
    airbrake: {
      projectId: 1,
      projectKey: "REPLACE_ME",
      environment: "production",
      // additional options for airbrake
      performanceStats: false,
    },
  },
  level: "error", // minimum log level that should be sent to airbrake
})
pino(transport)
```

[pino-airbrake-transport]: https://github.com/enricodeleo/pino-airbrake-transport
[Airbrake]: https://airbrake.io/

<a id="pino-applicationinsights"></a>
### pino-applicationinsights
The [pino-applicationinsights](https://www.npmjs.com/package/pino-applicationinsights) module is a transport that will forward logs to [Azure Application Insights](https://docs.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview).

Given an application `foo` that logs via pino, you would use `pino-applicationinsights` like so:

``` sh
$ node foo | pino-applicationinsights --key blablabla
```

For full documentation of command line switches read [README](https://github.com/ovhemert/pino-applicationinsights#readme)

<a id="pino-axiom"></a>
### pino-axiom

[pino-axiom](https://www.npmjs.com/package/pino-axiom) is a transport that will forward logs to [Axiom](https://axiom.co).

```javascript
const pino = require('pino')
const transport = pino.transport({
  target: 'pino-axiom',
  options: {
    orgId: 'YOUR-ORG-ID', 
    token: 'YOUR-TOKEN', 
    dataset: 'YOUR-DATASET', 
  },
})
pino(transport)
```

<a id="pino-azuretable"></a>
### pino-azuretable
The [pino-azuretable](https://www.npmjs.com/package/pino-azuretable) module is a transport that will forward logs to the [Azure Table Storage](https://azure.microsoft.com/en-us/services/storage/tables/).

Given an application `foo` that logs via pino, you would use `pino-azuretable` like so:

``` sh
$ node foo | pino-azuretable --account storageaccount --key blablabla
```

For full documentation of command line switches read [README](https://github.com/ovhemert/pino-azuretable#readme)

<a id="pino-cloudwatch"></a>
### pino-cloudwatch

[pino-cloudwatch][pino-cloudwatch] is a transport that buffers and forwards logs to [Amazon CloudWatch][].

```sh
$ node app.js | pino-cloudwatch --group my-log-group
```

[pino-cloudwatch]: https://github.com/dbhowell/pino-cloudwatch
[Amazon CloudWatch]: https://aws.amazon.com/cloudwatch/

<a id="pino-couch"></a>
### pino-couch

[pino-couch][pino-couch] uploads each log line as a [CouchDB][CouchDB] document.

```sh
$ node app.js | pino-couch -U https://couch-server -d mylogs
```

[pino-couch]: https://github.com/IBM/pino-couch
[CouchDB]: https://couchdb.apache.org

<a id="pino-datadog"></a>
### pino-datadog
The [pino-datadog](https://www.npmjs.com/package/pino-datadog) module is a transport that will forward logs to [DataDog](https://www.datadoghq.com/) through its API.

Given an application `foo` that logs via pino, you would use `pino-datadog` like so:

``` sh
$ node foo | pino-datadog --key blablabla
```

For full documentation of command line switches read [README](https://github.com/ovhemert/pino-datadog#readme)

<a id="pino-datadog-transport"></a>
### pino-datadog-transport

[pino-datadog-transport][pino-datadog-transport] is a Pino v7+ compatible transport to forward log events to [Datadog][Datadog]
from a dedicated worker:

```js
const pino = require('pino')
const transport = pino.transport({
  target: 'pino-datadog-transport',
  options: {
    ddClientConf: {
      authMethods: {
        apiKeyAuth: <your datadog API key>
      }
    },
  },
  level: "error", // minimum log level that should be sent to datadog
})
pino(transport)
```

[pino-datadog-transport]: https://github.com/theogravity/datadog-transports
[Datadog]: https://www.datadoghq.com/

#### Logstash

The [pino-socket][pino-socket] module can also be used to upload logs to
[Logstash][logstash] via:

```
$ node app.js | pino-socket -a 127.0.0.1 -p 5000 -m tcp
```

Assuming logstash is running on the same host and configured as
follows:

```
input {
  tcp {
    port => 5000
  }
}

filter {
  json {
    source => "message"
  }
}

output {
  elasticsearch {
    hosts => "127.0.0.1:9200"
  }
}
```

See <https://www.elastic.co/guide/en/kibana/current/setup.html> to learn
how to setup [Kibana][kibana].

For Docker users, see
https://github.com/deviantony/docker-elk to setup an ELK stack.

<a id="pino-discord-webhook"></a>
### pino-discord-webhook

[pino-discord-webhook](https://github.com/fabulousgk/pino-discord-webhook) is a  Pino v7+ compatible transport to forward log events to a [Discord](http://discord.com) webhook from a dedicated worker. 

```js
import pino from 'pino'

const logger = pino({
  transport: {
    target: 'pino-discord-webhook',
    options: {
      webhookUrl: 'https://discord.com/api/webhooks/xxxx/xxxx',
    }
  }
})
```

<a id="pino-elasticsearch"></a>
### pino-elasticsearch

[pino-elasticsearch][pino-elasticsearch] uploads the log lines in bulk
to [Elasticsearch][elasticsearch], to be displayed in [Kibana][kibana].

It is extremely simple to use and setup

```sh
$ node app.js | pino-elasticsearch
```

Assuming Elasticsearch is running on localhost.

To connect to an external Elasticsearch instance (recommended for production):

* Check that `network.host` is defined in the `elasticsearch.yml` configuration file. See [Elasticsearch Network Settings documentation](https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-network.html#common-network-settings) for more details.
* Launch:

```sh
$ node app.js | pino-elasticsearch --node http://192.168.1.42:9200
```

Assuming Elasticsearch is running on `192.168.1.42`.

To connect to AWS Elasticsearch:

```sh
$ node app.js | pino-elasticsearch --node https://es-url.us-east-1.es.amazonaws.com --es-version 6
```

Then [create an index pattern](https://www.elastic.co/guide/en/kibana/current/setup.html) on `'pino'` (the default index key for `pino-elasticsearch`) on the Kibana instance.

[pino-elasticsearch]: https://github.com/pinojs/pino-elasticsearch
[elasticsearch]: https://www.elastic.co/products/elasticsearch
[kibana]: https://www.elastic.co/products/kibana

<a id="pino-gelf"></a>
### pino-gelf

Pino GELF ([pino-gelf]) is a transport for the Pino logger. Pino GELF receives Pino logs from stdin and transforms them into [GELF format][gelf] before sending them to a remote [Graylog server][graylog] via UDP.

```sh
$ node your-app.js | pino-gelf log
```

[pino-gelf]: https://github.com/pinojs/pino-gelf
[gelf]: https://docs.graylog.org/en/2.1/pages/gelf.html
[graylog]: https://www.graylog.org/

<a id="pino-hana"></a>
### pino-hana
[pino-hana](https://github.com/HiImGiovi/pino-hana) is a Pino v7+ transport that save pino logs to a SAP HANA database.
```js
const pino = require('pino')
const logger = pino({
  transport: {
    target: 'pino-hana',
    options: {
      connectionOptions: {
        host: <hana db host>,
        port: <hana db port>,
        user: <hana db user>,
        password: <hana db password>,
      },
      schema: <schema of the table in which you want to save the logs>,
      table: <table in which you want to save the logs>,
    },
  },
})

logger.info('hi') // this log will be saved into SAP HANA
```
For more detailed information about its usage please check the official [documentation](https://github.com/HiImGiovi/pino-hana#readme).

<a id="pino-http-send"></a>
### pino-http-send

[pino-http-send](https://npmjs.com/package/pino-http-send) is a configurable and low overhead
transport that will batch logs and send to a specified URL.

```console
$ node app.js | pino-http-send -u http://localhost:8080/logs
```

<a id="pino-kafka"></a>
### pino-kafka

[pino-kafka](https://github.com/ayZagen/pino-kafka) transport to send logs to [Apache Kafka](https://kafka.apache.org/).

```sh
$ node index.js | pino-kafka -b 10.10.10.5:9200 -d mytopic
```

<a id="pino-logdna"></a>
### pino-logdna

[pino-logdna](https://github.com/logdna/pino-logdna) transport to send logs to [LogDNA](https://logdna.com).

```sh
$ node index.js | pino-logdna --key YOUR_INGESTION_KEY
```

Tags and other metadata can be included using the available command line options. See the [pino-logdna README](https://github.com/logdna/pino-logdna#options) for a full list.

<a id="pino-logflare"></a>
### pino-logflare

[pino-logflare](https://github.com/Logflare/pino-logflare) transport to send logs to a [Logflare](https://logflare.app) `source`.

```sh
$ node index.js | pino-logflare --key YOUR_KEY --source YOUR_SOURCE
```

<a id="pino-logfmt"></a>
### pino-logfmt

[pino-logfmt](https://github.com/botflux/pino-logfmt) is a Pino v7+ transport that formats logs into [logfmt](https://brandur.org/logfmt). This transport can output the formatted logs to stdout or file.

```js
import pino from 'pino'

const logger = pino({
  transport: {
    target: 'pino-logfmt'
  }
})
```

<a id="pino-loki"></a>
### pino-loki
pino-loki is a transport that will forwards logs into [Grafana Loki](https://grafana.com/oss/loki/).
Can be used in CLI version in a separate process or in a dedicated worker:

CLI :
```console
node app.js | pino-loki --hostname localhost:3100 --labels='{ "application": "my-application"}' --user my-username --password my-password
```

Worker :
```js
const pino = require('pino')
const transport = pino.transport({
  target: 'pino-loki',
  options: { host: 'localhost:3100' }
})
pino(transport)
```

For full documentation and configuration, see the [README](https://github.com/Julien-R44/pino-loki).

<a id="pino-mq"></a>
### pino-mq

The `pino-mq` transport will take all messages received on `process.stdin` and send them over a message bus using JSON serialization.

This is useful for:

* moving backpressure from application to broker
* transforming messages pressure to another component

```
node app.js | pino-mq -u "amqp://guest:guest@localhost/" -q "pino-logs"
```

Alternatively, a configuration file can be used:

```
node app.js | pino-mq -c pino-mq.json
```

A base configuration file can be initialized with:

```
pino-mq -g
```

For full documentation of command line switches and configuration see [the `pino-mq` README](https://github.com/itavy/pino-mq#readme)

<a id="pino-mysql"></a>
### pino-mysql

[pino-mysql][pino-mysql] loads pino logs into [MySQL][MySQL] and [MariaDB][MariaDB].

```sh
$ node app.js | pino-mysql -c db-configuration.json
```

`pino-mysql` can extract and save log fields into corresponding database fields
and/or save the entire log stream as a [JSON Data Type][JSONDT].

For full documentation and command line switches read the [README][pino-mysql].

[pino-mysql]: https://www.npmjs.com/package/pino-mysql
[MySQL]: https://www.mysql.com/
[MariaDB]: https://mariadb.org/
[JSONDT]: https://dev.mysql.com/doc/refman/8.0/en/json.html

<a id="pino-opentelemetry-transport"></a>
### pino-opentelemetry-transport

[pino-opentelemetry-transport](https://www.npmjs.com/package/pino-opentelemetry-transport) is a transport that will forward logs to an [OpenTelemetry log collector](https://opentelemetry.io/docs/collector/) using [OpenTelemetry JS instrumentation](https://opentelemetry.io/docs/instrumentation/js/).

```javascript
const pino = require('pino')

const transport = pino.transport({
  target: 'pino-opentelemetry-transport',
  options: {
    resourceAttributes: {
      'service.name': 'test-service',
      'service.version': '1.0.0'
    }
  }
})

pino(transport)
```

Documentation on running a minimal example is available in the [README](https://github.com/Vunovati/pino-opentelemetry-transport#minimalistic-example).

<a id="pino-papertrail"></a>
### pino-papertrail
pino-papertrail is a transport that will forward logs to the [papertrail](https://papertrailapp.com) log service through an UDPv4 socket.

Given an application `foo` that logs via pino, and a papertrail destination that collects logs on port UDP `12345` on address `bar.papertrailapp.com`, you would use `pino-papertrail`
like so:

```
node yourapp.js | pino-papertrail --host bar.papertrailapp.com --port 12345 --appname foo
```


for full documentation of command line switches read [README](https://github.com/ovhemert/pino-papertrail#readme)

<a id="pino-pg"></a>
### pino-pg
[pino-pg](https://www.npmjs.com/package/pino-pg) stores logs into PostgreSQL.
Full documentation in the [README](https://github.com/Xstoudi/pino-pg).

<a id="pino-redis"></a>
### pino-redis

[pino-redis][pino-redis] loads pino logs into [Redis][Redis].

```sh
$ node app.js | pino-redis -U redis://username:password@localhost:6379
```

[pino-redis]: https://github.com/buianhthang/pino-redis
[Redis]: https://redis.io/

<a id="pino-roll"></a>
### pino-roll

`pino-roll` is a Pino transport that automatically rolls your log files based on size or time frequency.

```js
import { join } from 'path';
import pino from 'pino';

const transport = pino.transport({
  target: 'pino-roll',
  options: { file: join('logs', 'log'), frequency: 'daily', mkdir: true }
});

const logger = pino(transport);
```

then you can use the logger as usual:

```js
logger.info('Hello from pino-roll!');
```
For full documentation check the [README](https://github.com/mcollina/pino-roll?tab=readme-ov-file#pino-roll).

<a id="pino-sentry"></a>
### pino-sentry

[pino-sentry][pino-sentry] loads pino logs into [Sentry][Sentry].

```sh
$ node app.js | pino-sentry --dsn=https://******@sentry.io/12345
```

For full documentation of command line switches see the [pino-sentry README](https://github.com/aandrewww/pino-sentry/blob/master/README.md).

[pino-sentry]: https://www.npmjs.com/package/pino-sentry
[Sentry]: https://sentry.io/

<a id="pino-sentry-transport"></a>
### pino-sentry-transport

[pino-sentry-transport][pino-sentry-transport] is a Pino v7+ compatible transport to forward log events to [Sentry][Sentry]
from a dedicated worker:

```js
const pino = require('pino')
const transport = pino.transport({
  target: 'pino-sentry-transport',
  options: {
    sentry: {
      dsn: 'https://******@sentry.io/12345',
    }
  }
})
pino(transport)
```

[pino-sentry-transport]: https://github.com/tomer-yechiel/pino-sentry-transport
[Sentry]: https://sentry.io/

<a id="pino-seq"></a>
### pino-seq

[pino-seq][pino-seq] supports both out-of-process and in-process log forwarding to [Seq][Seq].

```sh
$ node app.js | pino-seq --serverUrl http://localhost:5341 --apiKey 1234567890 --property applicationName=MyNodeApp
```

[pino-seq]: https://www.npmjs.com/package/pino-seq
[Seq]: https://datalust.co/seq

<a id="pino-seq-transport"></a>
### pino-seq-transport

[pino-seq-transport][pino-seq-transport] is a Pino v7+ compatible transport to forward log events to [Seq][Seq]
from a dedicated worker:

```js
const pino = require('pino')
const transport = pino.transport({
  target: '@autotelic/pino-seq-transport',
  options: { serverUrl: 'http://localhost:5341' }
})
pino(transport)
```

[pino-seq-transport]: https://github.com/autotelic/pino-seq-transport
[Seq]: https://datalust.co/seq

<a id="pino-slack-webhook"></a>
### pino-slack-webhook

[pino-slack-webhook][pino-slack-webhook] is a Pino v7+ compatible transport to forward log events to [Slack][Slack]
from a dedicated worker:

```js
const pino = require('pino')
const transport = pino.transport({
  target: '@youngkiu/pino-slack-webhook',
  options: {
    webhookUrl: 'https://hooks.slack.com/services/xxx/xxx/xxx',
    channel: '#pino-log',
    username: 'webhookbot',
    icon_emoji: ':ghost:'
  }
})
pino(transport)
```

[pino-slack-webhook]: https://github.com/youngkiu/pino-slack-webhook
[Slack]: https://slack.com/

[pino-pretty]: https://github.com/pinojs/pino-pretty

For full documentation of command line switches read the [README](https://github.com/abeai/pino-websocket#readme).

<a id="pino-socket"></a>
### pino-socket

[pino-socket][pino-socket] is a transport that will forward logs to an IPv4
UDP or TCP socket.

As an example, use `socat` to fake a listener:

```sh
$ socat -v udp4-recvfrom:6000,fork exec:'/bin/cat'
```

Then run an application that uses `pino` for logging:

```sh
$ node app.js | pino-socket -p 6000
```

Logs from the application should be observed on both consoles.

[pino-socket]: https://www.npmjs.com/package/pino-socket

<a id="pino-stackdriver"></a>
### pino-stackdriver
The [pino-stackdriver](https://www.npmjs.com/package/pino-stackdriver) module is a transport that will forward logs to the [Google Stackdriver](https://cloud.google.com/logging/) log service through its API.

Given an application `foo` that logs via pino, a stackdriver log project `bar`, and credentials in the file `/credentials.json`, you would use `pino-stackdriver`
like so:

``` sh
$ node foo | pino-stackdriver --project bar --credentials /credentials.json
```

For full documentation of command line switches read [README](https://github.com/ovhemert/pino-stackdriver#readme)

<a id="pino-syslog"></a>
### pino-syslog

[pino-syslog][pino-syslog] is a transforming transport that converts
`pino` NDJSON logs to [RFC3164][rfc3164] compatible log messages. The `pino-syslog` module does not
forward the logs anywhere, it merely re-writes the messages to `stdout`. But
when used in combination with `pino-socket` the log messages can be relayed to a syslog server:

```sh
$ node app.js | pino-syslog | pino-socket -a syslog.example.com
```

Example output for the "hello world" log:

```
<134>Apr  1 16:44:58 MacBook-Pro-3 none[94473]: {"pid":94473,"hostname":"MacBook-Pro-3","level":30,"msg":"hello world","time":1459529098958}
```

[pino-syslog]: https://www.npmjs.com/package/pino-syslog
[rfc3164]: https://tools.ietf.org/html/rfc3164
[logstash]: https://www.elastic.co/products/logstash

<a id="pino-telegram-webhook"></a>
### pino-telegram-webhook

[pino-telegram-webhook](https://github.com/Jhon-Mosk/pino-telegram-webhook) is a Pino v7+ transport for sending messages to [Telegram](https://telegram.org/). 

```js
const pino = require('pino');

const logger = pino({
  transport: {
    target: 'pino-telegram-webhook',
    level: 'error',
    options: {
      chatId: -1234567890,
      botToken: "123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11",
      extra: {
              parse_mode: "HTML",
            },
    },
  },
})

logger.error('<b>test log!</b>');
```

The `extra` parameter is optional. Parameters that the method [`sendMessage`](https://core.telegram.org/bots/api#sendmessage) supports can be passed to it.

<a id="pino-websocket"></a>
### pino-websocket

[pino-websocket](https://www.npmjs.com/package/@abeai/pino-websocket) is a transport that will forward each log line to a websocket server.

```sh
$ node app.js | pino-websocket -a my-websocket-server.example.com -p 3004
```

For full documentation of command line switches read the [README](https://github.com/abeai/pino-websocket#readme).

<a id="pino-yc-transport"></a>
### pino-yc-transport

[pino-yc-transport](https://github.com/Jhon-Mosk/pino-yc-transport) is a Pino v7+ transport for writing to [Yandex Cloud Logging](https://yandex.cloud/ru/services/logging) from serveless functions or containers.

```js
const pino = require("pino");

const config = {
  level: "debug",
  transport: {
    target: "pino-yc-transport",
  },
};

const logger = pino(config);

logger.debug("some message")
logger.debug({ foo: "bar" });
logger.debug("some message %o, %s", { foo: "bar" }, "baz");
logger.info("info");
logger.warn("warn");
logger.error("error");
logger.error(new Error("error"));
logger.fatal("fatal");
```

<a id="communication-between-pino-and-transport"></a>
## Communication between Pino and Transports
Here we discuss some technical details of how Pino communicates with its [worker threads](https://nodejs.org/api/worker_threads.html).

Pino uses [`thread-stream`](https://github.com/pinojs/thread-stream) to create a stream for transports.
When we create a stream with `thread-stream`, `thread-stream` spawns a [worker](https://github.com/pinojs/thread-stream/blob/f19ac8dbd602837d2851e17fbc7dfc5bbc51083f/index.js#L50-L60) (an independent JavaScript execution thread).

### Error messages
How are error messages propagated from a transport worker to Pino?

Let's assume we have a transport with an error listener:
```js
// index.js
const transport = pino.transport({
  target: './transport.js'
})

transport.on('error', err => {
  console.error('error caught', err)
})

const log = pino(transport)
```

When our worker emits an error event, the worker has listeners for it: [error](https://github.com/pinojs/thread-stream/blob/f19ac8dbd602837d2851e17fbc7dfc5bbc51083f/lib/worker.js#L59-L70) and [unhandledRejection](https://github.com/pinojs/thread-stream/blob/f19ac8dbd602837d2851e17fbc7dfc5bbc51083f/lib/worker.js#L135-L141). These listeners send the error message to the main thread where Pino is present.

When Pino receives the error message, it further [emits](https://github.com/pinojs/thread-stream/blob/f19ac8dbd602837d2851e17fbc7dfc5bbc51083f/index.js#L349) the error message. Finally, the error message arrives at our `index.js` and is caught by our error listener.
