# mimic-response [![Build Status](https://travis-ci.org/sindresorhus/mimic-response.svg?branch=master)](https://travis-ci.org/sindresorhus/mimic-response)

> Mimic a [Node.js HTTP response stream](https://nodejs.org/api/http.html#http_class_http_incomingmessage)


## Install

```
$ npm install mimic-response
```


## Usage

```js
const stream = require('stream');
const mimicResponse = require('mimic-response');

const responseStream = getHttpResponseStream();
const myStream = new stream.PassThrough();

mimicResponse(responseStream, myStream);

console.log(myStream.statusCode);
//=> 200
```


## API

### mimicResponse(from, to)

#### from

Type: `Stream`

[Node.js HTTP response stream.](https://nodejs.org/api/http.html#http_class_http_incomingmessage)

#### to

Type: `Stream`

Any stream.


## Related

- [mimic-fn](https://github.com/sindresorhus/mimic-fn) - Make a function mimic another one
- [clone-response](https://github.com/lukechilds/clone-response) - Clone a Node.js response stream


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
