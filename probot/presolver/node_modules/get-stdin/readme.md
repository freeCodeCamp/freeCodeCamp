# get-stdin [![Build Status](https://travis-ci.org/sindresorhus/get-stdin.svg?branch=master)](https://travis-ci.org/sindresorhus/get-stdin)

> Get [stdin](https://nodejs.org/api/process.html#process_process_stdin) as a string or buffer


## Install

```
$ npm install --save get-stdin
```


## Usage

```js
// example.js
const getStdin = require('get-stdin');

getStdin().then(str => {
	console.log(str);
	//=> 'unicorns'
});
```

```
$ echo unicorns | node example.js
unicorns
```


## API

Both methods returns a promise that is resolved when the `end` event fires on the `stdin` stream, indicating that there is no more data to be read.

### getStdin()

Get `stdin` as a string.

In a TTY context, a promise that resolves to an empty string is returned.

### getStdin.buffer()

Get `stdin` as a buffer.

In a TTY context, a promise that resolves to an empty buffer is returned.


## Related

- [get-stream](https://github.com/sindresorhus/get-stream) - Get a stream as a string or buffer


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
