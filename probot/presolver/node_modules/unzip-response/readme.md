# unzip-response [![Build Status](https://travis-ci.org/sindresorhus/unzip-response.svg?branch=master)](https://travis-ci.org/sindresorhus/unzip-response)

> Unzip a HTTP response if needed

Unzips the response from [`http.request`](https://nodejs.org/api/http.html#http_http_request_options_callback) if it's gzipped/deflated, otherwise just passes it through.


## Install

```
$ npm install --save unzip-response
```


## Usage

```js
const http = require('http');
const unzipResponse = require('unzip-response');

http.get('http://sindresorhus.com', res => {
	res = unzipResponse(res);
});
```


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
