![banner](pino-banner.png)

# pino
[![npm version](https://img.shields.io/npm/v/pino)](https://www.npmjs.com/package/pino)
[![Build Status](https://img.shields.io/github/actions/workflow/status/pinojs/pino/ci.yml)](https://github.com/pinojs/pino/actions)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://standardjs.com/)

[Very low overhead](#low-overhead) JavaScript logger.

## Documentation

* [Benchmarks ⇗](/docs/benchmarks.md)
* [API ⇗](/docs/api.md)
* [Browser API ⇗](/docs/browser.md)
* [Redaction ⇗](/docs/redaction.md)
* [Child Loggers ⇗](/docs/child-loggers.md)
* [Transports ⇗](/docs/transports.md)
* [Diagnostics ⇗](/docs/diagnostics.md)
* [Web Frameworks ⇗](/docs/web.md)
* [Pretty Printing ⇗](/docs/pretty.md)
* [Asynchronous Logging ⇗](/docs/asynchronous.md)
* [Ecosystem ⇗](/docs/ecosystem.md)
* [Help ⇗](/docs/help.md)
* [Long Term Support Policy ⇗](/docs/lts.md)

## Runtimes

### Node.js

Pino is built to run on [Node.js](http://nodejs.org).

### Bare

Pino works on [Bare](https://github.com/holepunchto/bare) with the [`pino-bare`](https://github.com/pinojs/pino-bare) compatability module.

### Pear

Pino works on [Pear](https://docs.pears.com), which is built on [Bare](https://github.com/holepunchto/bare), with the [`pino-bare`](https://github.com/pinojs/pino-bare) compatibility module.


## Install

Using NPM:
```
$ npm install pino
```

Using YARN:
```
$ yarn add pino
```

If you would like to install pino v6, refer to https://github.com/pinojs/pino/tree/v6.x.

## Usage

```js
const logger = require('pino')()

logger.info('hello world')

const child = logger.child({ a: 'property' })
child.info('hello child!')
```

This produces:

```
{"level":30,"time":1531171074631,"msg":"hello world","pid":657,"hostname":"Davids-MBP-3.fritz.box"}
{"level":30,"time":1531171082399,"msg":"hello child!","pid":657,"hostname":"Davids-MBP-3.fritz.box","a":"property"}
```

For using Pino with a web framework see:

* [Pino with Fastify](docs/web.md#fastify)
* [Pino with Express](docs/web.md#express)
* [Pino with Hapi](docs/web.md#hapi)
* [Pino with Restify](docs/web.md#restify)
* [Pino with Koa](docs/web.md#koa)
* [Pino with Node core `http`](docs/web.md#http)
* [Pino with Nest](docs/web.md#nest)
* [Pino with Hono](docs/web.md#hono)

<a name="essentials"></a>
## Essentials

### Development Formatting

The [`pino-pretty`](https://github.com/pinojs/pino-pretty) module can be used to
format logs during development:

![pretty demo](pretty-demo.png)

### Transports & Log Processing

Due to Node's single-threaded event-loop, it's highly recommended that sending,
alert triggering, reformatting, and all forms of log processing
are conducted in a separate process or thread.

In Pino terminology, we call all log processors "transports" and recommend that the
transports be run in a worker thread using our `pino.transport` API.

For more details see our [Transports⇗](docs/transports.md) document.

### Low overhead

Using minimum resources for logging is very important. Log messages
tend to get added over time and this can lead to a throttling effect
on applications – such as reduced requests per second.

In many cases, Pino is over 5x faster than alternatives.

See the [Benchmarks](docs/benchmarks.md) document for comparisons.

### Bundling support

Pino supports being bundled using tools like webpack or esbuild. 

See [Bundling](docs/bundling.md) document for more information.

<a name="team"></a>
## The Team

### Matteo Collina

<https://github.com/mcollina>

<https://www.npmjs.com/~matteo.collina>

<https://twitter.com/matteocollina>

### David Mark Clements

<https://github.com/davidmarkclements>

<https://www.npmjs.com/~davidmarkclements>

<https://twitter.com/davidmarkclem>

### James Sumners

<https://github.com/jsumners>

<https://www.npmjs.com/~jsumners>

<https://twitter.com/jsumners79>

### Thomas Watson Steen

<https://github.com/watson>

<https://www.npmjs.com/~watson>

<https://twitter.com/wa7son>

## Contributing

Pino is an **OPEN Open Source Project**. This means that:

> Individuals making significant and valuable contributions are given commit-access to the project to contribute as they see fit. This project is more like an open wiki than a standard guarded open source project.

See the [CONTRIBUTING.md](https://github.com/pinojs/pino/blob/main/CONTRIBUTING.md) file for more details.

<a name="acknowledgments"></a>
## Acknowledgments

This project was kindly sponsored by [nearForm](https://nearform.com).
This project is kindly sponsored by [Platformatic](https://platformatic.dev).

Logo and identity designed by Cosmic Fox Design: https://www.behance.net/cosmicfox.

## License

Licensed under [MIT](./LICENSE).

[elasticsearch]: https://www.elastic.co/products/elasticsearch
[kibana]: https://www.elastic.co/products/kibana
