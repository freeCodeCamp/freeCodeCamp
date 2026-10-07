# http-timer
> Timings for HTTP requests

[![Build Status](https://travis-ci.org/szmarczak/http-timer.svg?branch=master)](https://travis-ci.org/szmarczak/http-timer)
[![Coverage Status](https://coveralls.io/repos/github/szmarczak/http-timer/badge.svg?branch=master)](https://coveralls.io/github/szmarczak/http-timer?branch=master)
[![install size](https://packagephobia.now.sh/badge?p=@szmarczak/http-timer)](https://packagephobia.now.sh/result?p=@szmarczak/http-timer)

Inspired by the [`request` package](https://github.com/request/request).

## Installation

NPM:

> `npm install @szmarczak/http-timer`

Yarn:

> `yarn add @szmarczak/http-timer`

## Usage
**Note:**
> - The measured events resemble Node.js events, not the kernel ones.
> - Sending a chunk greater than [`highWaterMark`](https://nodejs.org/api/stream.html#stream_new_stream_writable_options) will result in invalid `upload` and `response` timings. You can avoid this by splitting the payload into smaller chunks.

```js
const https = require('https');
const timer = require('@szmarczak/http-timer');

const request = https.get('https://httpbin.org/anything');
timer(request);

request.once('response', response => {
	response.resume();
	response.once('end', () => {
		console.log(response.timings); // You can use `request.timings` as well
	});
});

// {
//   start: 1572712180361,
//   socket: 1572712180362,
//   lookup: 1572712180415,
//   connect: 1572712180571,
//   upload: 1572712180884,
//   response: 1572712181037,
//   end: 1572712181039,
//   error: undefined,
//   abort: undefined,
//   phases: {
//     wait: 1,
//     dns: 53,
//     tcp: 156,
//     request: 313,
//     firstByte: 153,
//     download: 2,
//     total: 678
//   }
// }
```

## API

### timer(request)

Returns: `Object`

**Note**: The time is a `number` representing the milliseconds elapsed since the UNIX epoch.

- `start` - Time when the request started.
- `socket` - Time when a socket was assigned to the request.
- `lookup` - Time when the DNS lookup finished.
- `connect` - Time when the socket successfully connected.
- `secureConnect` - Time when the socket securely connected.
- `upload` - Time when the request finished uploading.
- `response` - Time when the request fired `response` event.
- `end` - Time when the response fired `end` event.
- `error` - Time when the request fired `error` event.
- `abort` - Time when the request fired `abort` event.
- `phases`
	- `wait` - `timings.socket - timings.start`
	- `dns` - `timings.lookup - timings.socket`
	- `tcp` - `timings.connect - timings.lookup`
	- `tls` - `timings.secureConnect - timings.connect`
	- `request` - `timings.upload - (timings.secureConnect || timings.connect)`
	- `firstByte` - `timings.response - timings.upload`
	- `download` - `timings.end - timings.response`
	- `total` - `(timings.end || timings.error || timings.abort) - timings.start`

If something has not been measured yet, it will be `undefined`.

## License

MIT
