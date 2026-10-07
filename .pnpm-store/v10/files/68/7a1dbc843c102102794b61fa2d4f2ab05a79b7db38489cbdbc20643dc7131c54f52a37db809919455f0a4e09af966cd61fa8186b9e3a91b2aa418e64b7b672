argparse
========

[![Build Status](https://secure.travis-ci.org/nodeca/argparse.svg?branch=master)](http://travis-ci.org/nodeca/argparse)
[![NPM version](https://img.shields.io/npm/v/argparse.svg)](https://www.npmjs.org/package/argparse)

CLI arguments parser for node.js, with [sub-commands](https://docs.python.org/3.9/library/argparse.html#sub-commands) support. Port of python's [argparse](http://docs.python.org/dev/library/argparse.html) (version [3.9.0](https://github.com/python/cpython/blob/v3.9.0rc1/Lib/argparse.py)).

**Difference with original.**

- JS has no keyword arguments support.
  -  Pass options instead: `new ArgumentParser({ description: 'example', add_help: true })`.
- JS has no python's types `int`, `float`, ...
  - Use string-typed names: `.add_argument('-b', { type: 'int', help: 'help' })`.
- `%r` format specifier uses `require('util').inspect()`.

More details in [doc](./doc).


Example
-------

`test.js` file:

```javascript
#!/usr/bin/env node
'use strict';

const { ArgumentParser } = require('argparse');
const { version } = require('./package.json');

const parser = new ArgumentParser({
  description: 'Argparse example'
});

parser.add_argument('-v', '--version', { action: 'version', version });
parser.add_argument('-f', '--foo', { help: 'foo bar' });
parser.add_argument('-b', '--bar', { help: 'bar foo' });
parser.add_argument('--baz', { help: 'baz bar' });

console.dir(parser.parse_args());
```

Display help:

```
$ ./test.js -h
usage: test.js [-h] [-v] [-f FOO] [-b BAR] [--baz BAZ]

Argparse example

optional arguments:
  -h, --help         show this help message and exit
  -v, --version      show program's version number and exit
  -f FOO, --foo FOO  foo bar
  -b BAR, --bar BAR  bar foo
  --baz BAZ          baz bar
```

Parse arguments:

```
$ ./test.js -f=3 --bar=4 --baz 5
{ foo: '3', bar: '4', baz: '5' }
```


API docs
--------

Since this is a port with minimal divergence, there's no separate documentation.
Use original one instead, with notes about difference.

1. [Original doc](https://docs.python.org/3.9/library/argparse.html).
2. [Original tutorial](https://docs.python.org/3.9/howto/argparse.html).
3. [Difference with python](./doc).


argparse for enterprise
-----------------------

Available as part of the Tidelift Subscription

The maintainers of argparse and thousands of other packages are working with Tidelift to deliver commercial support and maintenance for the open source dependencies you use to build your applications. Save time, reduce risk, and improve code health, while paying the maintainers of the exact dependencies you use. [Learn more.](https://tidelift.com/subscription/pkg/npm-argparse?utm_source=npm-argparse&utm_medium=referral&utm_campaign=enterprise&utm_term=repo)
