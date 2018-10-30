# cli-cursor [![Build Status](https://travis-ci.org/sindresorhus/cli-cursor.svg?branch=master)](https://travis-ci.org/sindresorhus/cli-cursor)

> Toggle the CLI cursor

The cursor is [gracefully restored](https://github.com/sindresorhus/restore-cursor) if the process exits.


## Install

```
$ npm install --save cli-cursor
```


## Usage

```js
const cliCursor = require('cli-cursor');

cliCursor.hide();

const unicornsAreAwesome = true;
cliCursor.toggle(unicornsAreAwesome);
```


## API

### .show()

### .hide()

### .toggle(force)

`force` is useful to show or hide the cursor based an a boolean.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
