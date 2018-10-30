# is-stream [![Build Status](https://travis-ci.org/sindresorhus/is-stream.svg?branch=master)](https://travis-ci.org/sindresorhus/is-stream)

> Check if something is a [Node.js stream](https://nodejs.org/api/stream.html)


## Install

```
$ npm install --save is-stream
```


## Usage

```js
const fs = require('fs');
const isStream = require('is-stream');

isStream(fs.createReadStream('unicorn.png'));
//=> true

isStream({});
//=> false
```


## API

### isStream(stream)

#### isStream.writable(stream)

#### isStream.readable(stream)

#### isStream.duplex(stream)

#### isStream.transform(stream)


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
