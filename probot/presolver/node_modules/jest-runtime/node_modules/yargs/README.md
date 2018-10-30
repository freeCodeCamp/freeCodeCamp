# Yargs

[![Build Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![NPM version][npm-image]][npm-url]
[![Windows Tests][windows-image]][windows-url]
[![js-standard-style][standard-image]][standard-url]
[![Conventional Commits][conventional-commits-image]][conventional-commits-url]
[![Slack][slack-image]][slack-url]

_Having problems? want to contribute? join our [community slack](http://devtoolscommunity.herokuapp.com)_.

> Yargs be a node.js library fer hearties tryin' ter parse optstrings.

<img width="250" src="/yargs-logo.png">

Yargs helps you build interactive command line tools, by parsing arguments and generating an elegant user interface. It gives you:

* commands and (grouped) options (`my-program.js serve --port=5000`).
* a dynamically generated help menu based on your arguments.

> <img width="400" src="/screen.png">

* bash-completion shortcuts for commands and options.
* and [tons more](/docs/api.md).

## Installation

```bash
npm i yargs --save
```

## Simple Example

````javascript
#!/usr/bin/env node
const argv = require('yargs').argv

if (argv.ships > 3 && argv.distance < 53.5) {
  console.log('Plunder more riffiwobbles!')
} else {
  console.log('Retreat from the xupptumblers!')
}
````

```bash
$ ./plunder.js --ships=4 --distance=22
Plunder more riffiwobbles!

$ ./plunder.js --ships 12 --distance 98.7
Retreat from the xupptumblers!
```

## Complex Example

```js
#!/usr/bin/env node
require('yargs') // eslint-disable-line
  .command('serve [port]', 'start the server', (yargs) => {
    yargs
      .positional('port', {
        describe: 'port to bind on',
        default: 5000
      })
  }, (argv) => {
    if (argv.verbose) console.info(`start server on :${argv.port}`)
    serve(argv.port)
  })
  .option('verbose', {
    alias: 'v',
    default: false
  })
  .argv
```

Run the example above with `--help` to see the help for the application.

## Table of Contents

* [Yargs' API](/docs/api.md)
* [Examples](/docs/examples.md)
* [Parsing Tricks](/docs/tricks.md)
  * [Stop the Parser](/docs/tricks.md#stop)
  * [Negating Boolean Arguments](/docs/tricks.md#negate)
  * [Numbers](/docs/tricks.md#numbers)
  * [Arrays](/docs/tricks.md#arrays)
  * [Objects](/docs/tricks.md#objects)
* [Advanced Topics](/docs/advanced.md)
  * [Composing Your App Using Commands](/docs/advanced.md#commands)
  * [Building Configurable CLI Apps](/docs/advanced.md#configuration)
  * [Customizing Yargs' Parser](/docs/advanced.md#customizing)
* [Contributing](/contributing.md)

[travis-url]: https://travis-ci.org/yargs/yargs
[travis-image]: https://img.shields.io/travis/yargs/yargs/master.svg
[coveralls-url]: https://coveralls.io/github/yargs/yargs
[coveralls-image]: https://img.shields.io/coveralls/yargs/yargs.svg
[npm-url]: https://www.npmjs.com/package/yargs
[npm-image]: https://img.shields.io/npm/v/yargs.svg
[windows-url]: https://ci.appveyor.com/project/bcoe/yargs-ljwvf
[windows-image]: https://img.shields.io/appveyor/ci/bcoe/yargs-ljwvf/master.svg?label=Windows%20Tests
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standard-url]: http://standardjs.com/
[conventional-commits-image]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg
[conventional-commits-url]: https://conventionalcommits.org/
[slack-image]: http://devtoolscommunity.herokuapp.com/badge.svg
[slack-url]: http://devtoolscommunity.herokuapp.com
