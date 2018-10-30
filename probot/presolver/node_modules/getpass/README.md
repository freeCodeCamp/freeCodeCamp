## getpass

Get a password from the terminal. Sounds simple? Sounds like the `readline`
module should be able to do it? NOPE.

## Install and use it

```bash
npm install --save getpass
```

```javascript
const mod_getpass = require('getpass');
```

## API

### `mod_getpass.getPass([options, ]callback)`

Gets a password from the terminal. If available, this uses `/dev/tty` to avoid
interfering with any data being piped in or out of stdio.

This function prints a prompt (by default `Password:`) and then accepts input
without echoing.

Parameters:

 * `options`, an Object, with properties:
   * `prompt`, an optional String
 * `callback`, a `Func(error, password)`, with arguments:
   * `error`, either `null` (no error) or an `Error` instance
   * `password`, a String
