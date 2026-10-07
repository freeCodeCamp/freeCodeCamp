# mimic-response [![Build Status](https://travis-ci.com/sindresorhus/mimic-response.svg?branch=master)](https://travis-ci.com/sindresorhus/mimic-response)

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

**Note #1:** The `from.destroy(error)` function is not proxied. You have to call it manually:

```js
const stream = require('stream');
const mimicResponse = require('mimic-response');

const responseStream = getHttpResponseStream();

const myStream = new stream.PassThrough({
	destroy(error, callback) {
		responseStream.destroy();

		callback(error);
	}
});

myStream.destroy();
```

Please note that `myStream` and `responseStream` never throws. The error is passed to the request instead.

#### from

Type: `Stream`

[Node.js HTTP response stream.](https://nodejs.org/api/http.html#http_class_http_incomingmessage)

#### to

Type: `Stream`

Any stream.

## Related

- [mimic-fn](https://github.com/sindresorhus/mimic-fn) - Make a function mimic another one
- [clone-response](https://github.com/lukechilds/clone-response) - Clone a Node.js response stream

---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-mimic-response?utm_source=npm-mimic-response&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>
