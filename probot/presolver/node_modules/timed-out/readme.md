# timed-out [![Build Status](https://travis-ci.org/floatdrop/timed-out.svg?branch=master)](https://travis-ci.org/floatdrop/timed-out)

> Timeout HTTP/HTTPS requests

Emit Error object with `code` property equal `ETIMEDOUT` or `ESOCKETTIMEDOUT` when ClientRequest is hanged.

## Usage

```js
var get = require('http').get;
var timeout = require('timed-out');

var req = get('http://www.google.ru');
timeout(req, 2000); // Set 2 seconds limit
```

### API

#### timedout(request, time)

##### request

*Required*  
Type: [`ClientRequest`](http://nodejs.org/api/http.html#http_class_http_clientrequest)

The request to watch on.

##### time

*Required*  
Type: `number` or `object`

Time in milliseconds to wait for `connect` event on socket and also time to wait on inactive socket.

Or you can pass Object with following fields:

- `connect` - time to wait for connection
- `socket`  - time to wait for activity on socket

## License

MIT © [Vsevolod Strukchinsky](floatdrop@gmail.com)
