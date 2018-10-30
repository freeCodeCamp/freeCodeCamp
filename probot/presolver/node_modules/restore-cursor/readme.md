# restore-cursor

> Gracefully restore the CLI cursor on exit

Prevent the cursor you've hidden interactively to remain hidden if the process crashes.


## Install

```sh
$ npm install --save restore-cursor
```


## Usage

```js
var restoreCursor = require('restore-cursor');
restoreCursor();
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
