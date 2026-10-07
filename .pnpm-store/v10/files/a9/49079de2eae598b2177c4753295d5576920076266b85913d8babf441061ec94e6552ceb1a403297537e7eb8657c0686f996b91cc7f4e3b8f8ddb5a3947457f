# yargs-unparser

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]

[npm-url]:https://npmjs.org/package/yargs-unparser
[npm-image]:http://img.shields.io/npm/v/yargs-unparser.svg
[downloads-image]:http://img.shields.io/npm/dm/yargs-unparser.svg

Converts back a `yargs` argv object to its original array form.

Probably the unparser word doesn't even exist, but it sounds nice and goes well with [yargs-parser](https://github.com/yargs/yargs-parser).

The code originally lived in [MOXY](https://github.com/moxystudio)'s GitHub but was later moved here for discoverability.


## Installation

`$ npm install yargs-unparser`


## Usage

```js
const parse = require('yargs-parser');
const unparse = require('yargs-unparser');

const argv = parse(['--no-boolean', '--number', '4', '--string', 'foo'], {
    boolean: ['boolean'],
    number: ['number'],
    string: ['string'],
});
// { boolean: false, number: 4, string: 'foo', _: [] }

const unparsedArgv = unparse(argv);
// ['--no-boolean', '--number', '4', '--string', 'foo'];
```

The second argument of `unparse` accepts an options object:

- `alias`: The [aliases](https://github.com/yargs/yargs-parser#requireyargs-parserargs-opts) so that duplicate options aren't generated
- `default`: The [default](https://github.com/yargs/yargs-parser#requireyargs-parserargs-opts) values so that the options with default values are omitted
- `command`: The [command](https://github.com/yargs/yargs/blob/master/docs/advanced.md#commands) first argument so that command names and positional arguments are handled correctly

### Example with `command` options

```js
const yargs = require('yargs');
const unparse = require('yargs-unparser');

const argv = yargs
    .command('my-command <positional>', 'My awesome command', (yargs) =>
        yargs
        .option('boolean', { type: 'boolean' })
        .option('number', { type: 'number' })
        .option('string', { type: 'string' })
    )
    .parse(['my-command', 'hello', '--no-boolean', '--number', '4', '--string', 'foo']);
// { positional: 'hello', boolean: false, number: 4, string: 'foo', _: ['my-command'] }

const unparsedArgv = unparse(argv, {
    command: 'my-command <positional>',
});
// ['my-command', 'hello', '--no-boolean', '--number', '4', '--string', 'foo'];
```

### Caveats

The returned array can be parsed again by `yargs-parser` using the default configuration. If you used custom configuration that you want `yargs-unparser` to be aware, please fill an [issue](https://github.com/yargs/yargs-unparser/issues).

If you `coerce` in weird ways, things might not work correctly.


## Tests

`$ npm test`   
`$ npm test -- --watch` during development

## Supported Node.js Versions

Libraries in this ecosystem make a best effort to track
[Node.js' release schedule](https://nodejs.org/en/about/releases/). Here's [a
post on why we think this is important](https://medium.com/the-node-js-collection/maintainers-should-consider-following-node-js-release-schedule-ab08ed4de71a).

## License

[MIT License](http://opensource.org/licenses/MIT)
