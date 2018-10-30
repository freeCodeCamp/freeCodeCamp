Needle
======

[![NPM](https://nodei.co/npm/needle.png)](https://nodei.co/npm/needle/)

The leanest and most handsome HTTP client in the Nodelands.

```js
var needle = require('needle');

needle.get('http://www.google.com', function(error, response) {
  if (!error && response.statusCode == 200)
    console.log(response.body);
});
```

Callbacks not floating your boat? Needle got your back.

``` js
var data = {
  file: '/home/johnlennon/walrus.png',
  content_type: 'image/png'
};

// the callback is optional, and needle returns a `readableStream` object
// that triggers a 'done' event when the request/response process is complete.
needle
  .post('https://my.server.com/foo', data, { multipart: true })
  .on('readable', function() { /* eat your chunks */ })
  .on('done', function(err, resp) {
    console.log('Ready-o!');
  })
```

From version 2.0.x up, Promises are also supported. Just call `needle()` directly and you'll get a native Promise object.

```js
needle('put', 'https://hacking.the.gibson/login', { password: 'god' })
  .then(function(response) {
    return doSomethingWith(response)
  })
  .catch(function(err) {
    console.log('Call the locksmith!')
  })
```

With only two real dependencies, Needle supports:

 - HTTP/HTTPS requests, with the usual verbs you would expect
 - All of Node's native TLS options, such as 'rejectUnauthorized' (see below)
 - Basic & Digest authentication with auto-detection
 - Multipart form-data (e.g. file uploads)
 - HTTP Proxy forwarding, optionally with authentication
 - Streaming gzip or deflate decompression
 - Automatic XML & JSON parsing
 - 301/302/303 redirect following, with fine-grained tuning, and
 - Streaming non-UTF-8 charset decoding, via `iconv-lite`

And yes, Mr. Wayne, it does come in black.

This makes Needle an ideal alternative for performing quick HTTP requests in Node, either for API interaction, downloading or uploading streams of data, and so on. If you need OAuth, AWS support or anything fancier, you should check out mikeal's request module.

Install
-------

```
$ npm install needle
```

Usage
-----

```js
// using promises
needle('get', 'https://server.com/posts/12')
  .then(function(resp) {
    // ...
  })
  .catch(function(err) {
    // ...
  })
});

// with callback
needle.get('ifconfig.me/all.json', function(error, response, body) {
  if (error) throw error;

  // body is an alias for `response.body`,
  // that in this case holds a JSON-decoded object.
  console.log(body.ip_addr);
});

// no callback, using streams
var out = fs.createWriteStream('logo.png');
needle.get('https://google.com/images/logo.png').pipe(out).on('finish', function() {
  console.log('Pipe finished!');
});
```

As you can see, you can use Needle with Promises or without them. When using Promises or when a callback is passed, the response's body will be buffered and written to `response.body`, and the callback will be fired when all of the data has been collected and processed (e.g. decompressed, decoded and/or parsed).

When no callback is passed, however, the buffering logic will be skipped but the response stream will still go through Needle's processing pipeline, so you get all the benefits of post-processing while keeping the streamishness we all love from Node.

Response pipeline
-----------------

Depending on the response's Content-Type, Needle will either attempt to parse JSON or XML streams, or, if a text response was received, will ensure that the final encoding you get is UTF-8.

You can also request a gzip/deflated response, which, if sent by the server, will be processed before parsing or decoding is performed.

```js
needle.get('http://stackoverflow.com/feeds', { compressed: true }, function(err, resp) {
  console.log(resp.body); // this little guy won't be a Gzipped binary blob
                          // but a nice object containing all the latest entries
});
```

Or in anti-callback mode, using a few other options:

```js
var options = {
  compressed         : true, // sets 'Accept-Encoding' to 'gzip,deflate'
  follow_max         : 5,    // follow up to five redirects
  rejectUnauthorized : true  // verify SSL certificate
}

var stream = needle.get('https://backend.server.com/everything.html', options);

// read the chunks from the 'readable' event, so the stream gets consumed.
stream.on('readable', function() {
  while (data = this.read()) {
    console.log(data.toString());
  }
})

stream.on('done', function(err) {
  // if our request had an error, our 'done' event will tell us.
  if (!err) console.log('Great success!');
})
```

API
---

### needle(method, url[, data][, options][, callback]) `(> 2.0.x)`

Calling `needle()` directly returns a Promise. Besides `method` and `url`, all parameters are optional, although when sending a `post`, `put` or `patch` request you will get an error if `data` is not present.

```js
needle('get', 'http://some.url.com')
  .then(function(resp) { console.log(resp.body) })
  .catch(function(err) { console.error(err) })
})
```

Except from the above, all of Needle's request methods return a Readable stream, and both `options` and `callback` are optional. If passed, the callback will return three arguments: `error`, `response` and `body`, which is basically an alias for `response.body`.

### needle.head(url[, options][, callback])

```js
needle.head('https://my.backend.server.com', {
  open_timeout: 5000 // if we're not able to open a connection in 5 seconds, boom.
}, function(err, resp) {
  if (err)
    console.log('Shoot! Something is wrong: ' + err.message)
  else
    console.log('Yup, still alive.')
})
```

### needle.get(url[, options][, callback])

```js
needle.get('google.com/search?q=syd+barrett', function(err, resp) {
  // if no http:// is found, Needle will automagically prepend it.
});
```

### needle.post(url, data[, options][, callback])

```js
var options = {
  headers: { 'X-Custom-Header': 'Bumbaway atuna' }
}

needle.post('https://my.app.com/endpoint', 'foo=bar', options, function(err, resp) {
  // you can pass params as a string or as an object.
});
```

### needle.put(url, data[, options][, callback])

```js
var nested = {
  params: {
    are: {
      also: 'supported'
    }
  }
}

needle.put('https://api.app.com/v2', nested, function(err, resp) {
  console.log('Got ' + resp.bytes + ' bytes.') // another nice treat from this handsome fella.
});
```

### needle.patch(url, data[, options][, callback])

Same behaviour as PUT.

### needle.delete(url, data[, options][, callback])

```js
var options = {
  username: 'fidelio',
  password: 'x'
}

needle.delete('https://api.app.com/messages/123', null, options, function(err, resp) {
  // in this case, data may be null, but you need to explicity pass it.
});
```

### needle.request(method, url, data[, options][, callback])

Generic request. This not only allows for flexibility, but also lets you perform a GET request with data, in which case will be appended to the request as a query string, unless you pass a `json: true` option (read below).

```js
var params = {
  q    : 'a very smart query',
  page : 2
}

needle.request('get', 'forum.com/search', params, function(err, resp) {
  if (!err && resp.statusCode == 200)
    console.log(resp.body); // here you go, mister.
});
```

Now, if you set pass `json: true` among the options, Needle won't set your params as a querystring but instead send a JSON representation of your data through the request's body, as well as set the `Content-Type` and `Accept` headers to `application/json`.

```js
needle.request('get', 'forum.com/search', params, { json: true }, function(err, resp) {
  if (resp.statusCode == 200) console.log('It worked!');
});
```

Events
------

The [Readable stream](https://nodejs.org/api/stream.html#stream_class_stream_readable) object returned by the above request methods emits the following events, in addition to the regular ones (e.g. `end`, `close`, `data`, `pipe`, `readable`).

### Event: `'response'`

 - `response <http.IncomingMessage>`

Emitted when the underlying [http.ClientRequest](https://nodejs.org/api/http.html#http_class_http_clientrequest) emits a response event. This is after the connection is established and the header received, but before any of it is processed (e.g. authorization required or redirect to be followed). No data has been consumed at this point.

### Event: `'redirect'`

 - `location <String>`

Indicates that the a redirect is being followed. This means that the response code was a redirect (`301`, `302`, `303`, `307`) and the given [redirect options](#redirect-options) allowed following the URL received in the `Location` header.

### Event: `'header'`

 - `statusCode <Integer>`
 - `headers <Object>`

Triggered after the header has been processed, and just before the data is to be consumed. This implies that no redirect was followed and/or authentication header was received. In other words, we got a "valid" response.

### Event: `'done'` (previously 'end')

 - `exception <Error>` (optional)

Emitted when the request/response process has finished, either because all data was consumed or an error ocurred somewhere in between. Unlike a regular stream's `end` event, Needle's `done` will be fired either on success or on failure, which is why the first argument may be an Error object. In other words:

```js
var resp = needle.get('something.worthy/of/being/streamed/by/needle');
resp.pipe(someWritableStream);

resp.on('done', function(err) {
  if (err) console.log('An error ocurred: ' + err.message);
  else console.log('Great success!');
})
```

### Event: `'err'`

 - `exception <Error>`

Emitted when an error ocurrs. This should only happen once in the lifecycle of a Needle request.

### Event: `'timeout'`

 - `type <String>`

Emitted when an timeout error occurs. Type can be either 'open', 'response', or 'read'. This will called right before aborting the request, which will also trigger an `err` event, a described above, with an `ECONNRESET` (Socket hang up) exception.

Request options
---------------

For information about options that've changed, there's always [the changelog](https://github.com/tomas/needle/releases).

 - `agent`       : Uses an [http.Agent](https://nodejs.org/api/http.html#http_class_http_agent) of your choice, instead of the global, default one. Useful for tweaking the behaviour at the connection level, such as when doing tunneling (see below for an example).
 - `json`        : When `true`, sets content type to `application/json` and sends request body as JSON string, instead of a query string.
 - `open_timeout`: (or `timeout`) Returns error if connection takes longer than X milisecs to establish. Defaults to `10000` (10 secs). `0` means no timeout.
 - `response_timeout`: Returns error if no response headers are received in X milisecs, counting from when the connection is opened. Defaults to `0` (no response timeout).
 - `read_timeout`: Returns error if data transfer takes longer than X milisecs, once response headers are received. Defaults to `0` (no timeout).
 - `follow_max`  : (or `follow`) Number of redirects to follow. Defaults to `0`. See below for more redirect options.
 - `multipart`   : Enables multipart/form-data encoding. Defaults to `false`. Use it when uploading files.
 - `proxy`       : Forwards request through HTTP(s) proxy. Eg. `proxy: 'http://user:pass@proxy.server.com:3128'`. For more advanced proxying/tunneling use a custom `agent`, as described below.
 - `headers`     : Object containing custom HTTP headers for request. Overrides defaults described below.
 - `auth`        : Determines what to do with provided username/password. Options are `auto`, `digest` or `basic` (default). `auto` will detect the type of authentication depending on the response headers.
 - `stream_length`: When sending streams, this lets you manually set the Content-Length header --if the stream's bytecount is known beforehand--, preventing ECONNRESET (socket hang up) errors on some servers that misbehave when receiving payloads of unknown size. Set it to `0` and Needle will get and set the stream's length for you, or leave unset for the default behaviour, which is no Content-Length header for stream payloads.

Response options
----------------

 - `decode_response` : (or `decode`) Whether to decode the text responses to UTF-8, if Content-Type header shows a different charset. Defaults to `true`.
 - `parse_response`  : (or `parse`) Whether to parse XML or JSON response bodies automagically. Defaults to `true`. You can also set this to 'xml' or 'json' in which case Needle will *only* parse the response if the content type matches.
 - `output`          : Dump response output to file. This occurs after parsing and charset decoding is done.
 - `parse_cookies`   : Whether to parse response’s `Set-Cookie` header. Defaults to `true`. If parsed, response cookies will be available at `resp.cookies`.

HTTP Header options
-------------------

These are basically shortcuts to the `headers` option described above.

 - `cookies`   : Builds and sets a Cookie header from a `{ key: 'value' }` object.
 - `compressed`: If `true`, sets 'Accept-Encoding' header to 'gzip,deflate', and inflates content if zipped. Defaults to `false`.
 - `username`  : For HTTP basic auth.
 - `password`  : For HTTP basic auth. Requires username to be passed, but is optional.
 - `accept`    : Sets 'Accept' HTTP header. Defaults to `*/*`.
 - `connection`: Sets 'Connection' HTTP header. Not set by default, unless running Node < 0.11.4 in which case it defaults to `close`. More info about this below.
 - `user_agent`: Sets the 'User-Agent' HTTP header. Defaults to `Needle/{version} (Node.js {node_version})`.
 - `content_type`: Sets the 'Content-Type' header. Unset by default, unless you're sending data in which case it's set accordingly to whatever is being sent (`application/x-www-form-urlencoded`, `application/json` or `multipart/form-data`). That is, of course, unless the option is passed, either here or through `options.headers`. You're the boss.

Node.js TLS Options
-------------------

These options are passed directly to `https.request` if present. Taken from the [original documentation](http://nodejs.org/docs/latest/api/https.html):

 - `pfx`                : Certificate, Private key and CA certificates to use for SSL.
 - `key`                : Private key to use for SSL.
 - `passphrase`         : A string of passphrase for the private key or pfx.
 - `cert`               : Public x509 certificate to use.
 - `ca`                 : An authority certificate or array of authority certificates to check the remote host against.
 - `ciphers`            : A string describing the ciphers to use or exclude.
 - `rejectUnauthorized` : If true, the server certificate is verified against the list of supplied CAs. An 'error' event is emitted if verification fails. Verification happens at the connection level, before the HTTP request is sent.
 - `secureProtocol`     : The SSL method to use, e.g. SSLv3_method to force SSL version 3.

Redirect options
----------------

These options only apply if the `follow_max` (or `follow`) option is higher than 0.

 - `follow_set_cookies`      : Sends the cookies received in the `set-cookie` header as part of the following request. `false` by default.
 - `follow_set_referer`      : Sets the 'Referer' header to the requested URI when following a redirect. `false` by default.
 - `follow_keep_method`      : If enabled, resends the request using the original verb instead of being rewritten to `get` with no data. `false` by default.
 - `follow_if_same_host`     : When true, Needle will only follow redirects that point to the same host as the original request. `false` by default.
 - `follow_if_same_protocol` : When true, Needle will only follow redirects that point to the same protocol as the original request. `false` by default.

Overriding Defaults
-------------------

Yes sir, we have it. Needle includes a `defaults()` method, that lets you override some of the defaults for all future requests. Like this:

```js
needle.defaults({
  open_timeout: 60000,
  user_agent: 'MyApp/1.2.3',
  parse_response: false });
```

This will override Needle's default user agent and 10-second timeout, and disable response parsing, so you don't need to pass those options in every other request.

More advanced Proxy support
---------------------------

Since you can pass a custom HTTPAgent to Needle you can do all sorts of neat stuff. For example, if you want to use the [`tunnel`](https://github.com/koichik/node-tunnel) module for HTTPS proxying, you can do this:

```js
var tunnel = require('tunnel');
var myAgent = tunnel.httpOverHttp({
  proxy: { host: 'localhost' }
});

needle.get('foobar.com', { agent: myAgent });
```

Regarding the 'Connection' header
---------------------------------

Unless you're running an old version of Node (< 0.11.4), by default Needle won't set the Connection header on requests, yielding Node's default behaviour of keeping the connection alive with the target server. This speeds up inmensely the process of sending several requests to the same host.

On older versions, however, this has the unwanted behaviour of preventing the runtime from exiting, either because of a bug or 'feature' that was changed on 0.11.4. To overcome this Needle does set the 'Connection' header to 'close' on those versions, however this also means that making new requests to the same host doesn't benefit from Keep-Alive.

So if you're stuck on 0.10 or even lower and want full speed, you can simply set the Connection header to 'Keep-Alive' by using `{ connection: 'Keep-Alive' }`. Please note, though, that an event loop handler will prevent the runtime from exiting so you'll need to manually call `process.exit()` or the universe will collapse.

Examples Galore
---------------

### HTTPS GET with Basic Auth

```js
needle.get('https://api.server.com', { username: 'you', password: 'secret' },
  function(err, resp) {
    // used HTTP auth
});
```

Or use [RFC-1738](http://tools.ietf.org/html/rfc1738#section-3.1) basic auth URL syntax:

```js
needle.get('https://username:password@api.server.com', function(err, resp) {
    // used HTTP auth from URL
});
```

### Digest Auth

```js
needle.get('other.server.com', { username: 'you', password: 'secret', auth: 'digest' },
  function(err, resp, body) {
    // needle prepends 'http://' to your URL, if missing
});
```

### Custom Accept header, deflate

```js
var options = {
  compressed : true,
  follow     : 10,
  accept     : 'application/vnd.github.full+json'
}

needle.get('api.github.com/users/tomas', options, function(err, resp, body) {
  // body will contain a JSON.parse(d) object
  // if parsing fails, you'll simply get the original body
});
```

### GET XML object

```js
needle.get('https://news.ycombinator.com/rss', function(err, resp, body) {
  // you'll get a nice object containing the nodes in the RSS
});
```

### GET binary, output to file

```js
needle.get('http://upload.server.com/tux.png', { output: '/tmp/tux.png' }, function(err, resp, body) {
  // you can dump any response to a file, not only binaries.
});
```

### GET through proxy

```js
needle.get('http://search.npmjs.org', { proxy: 'http://localhost:1234' }, function(err, resp, body) {
  // request passed through proxy
});
```

### GET a very large document in a stream (from 0.7+)

```js
var stream = needle.get('http://www.as35662.net/100.log');

stream.on('readable', function() {
  var chunk;
  while (chunk = this.read()) {
    console.log('got data: ', chunk);
  }
});
```

### GET JSON object in a stream (from 0.7+)

```js
var stream = needle.get('http://jsonplaceholder.typicode.com/db', { parse: true });

stream.on('readable', function() {
  var node;

  // our stream will only emit a single JSON root node.
  while (node = this.read()) {
    console.log('got data: ', node);
  }
});
```

### GET JSONStream flexible parser with search query (from 0.7+)

```js

 // The 'data' element of this stream will be the string representation
 // of the titles of all posts.

needle.get('http://jsonplaceholder.typicode.com/db', { parse: true })
      .pipe(new JSONStream.parse('posts.*.title'));
      .on('data', function (obj) {
        console.log('got post title: %s', obj);
      });
```

### File upload using multipart, passing file path

```js
var data = {
  foo: 'bar',
  image: { file: '/home/tomas/linux.png', content_type: 'image/png' }
}

needle.post('http://my.other.app.com', data, { multipart: true }, function(err, resp, body) {
  // needle will read the file and include it in the form-data as binary
});
```

### Stream upload, PUT or POST

``` js
needle.put('https://api.app.com/v2', fs.createReadStream('myfile.txt'), function(err, resp, body) {
  // stream content is uploaded verbatim
});
```

### Multipart POST, passing data buffer

```js
var buffer = fs.readFileSync('/path/to/package.zip');

var data = {
  zip_file: {
    buffer       : buffer,
    filename     : 'mypackage.zip',
    content_type : 'application/octet-stream'
  }
}

needle.post('http://somewhere.com/over/the/rainbow', data, { multipart: true }, function(err, resp, body) {
  // if you see, when using buffers we need to pass the filename for the multipart body.
  // you can also pass a filename when using the file path method, in case you want to override
  // the default filename to be received on the other end.
});
```

### Multipart with custom Content-Type

```js
var data = {
  token: 'verysecret',
  payload: {
    value: JSON.stringify({ title: 'test', version: 1 }),
    content_type: 'application/json'
  }
}

needle.post('http://test.com/', data, { timeout: 5000, multipart: true }, function(err, resp, body) {
  // in this case, if the request takes more than 5 seconds
  // the callback will return a [Socket closed] error
});
```

For even more examples, check out the examples directory in the repo.

### Testing

To run tests, you need to generate a self-signed SSL certificate in the `test` directory. After cloning the repository, run the following commands:

    $ mkdir -p test/keys
    $ openssl genrsa -out test/keys/ssl.key 2048
    $ openssl req -new -key test/keys/ssl.key -x509 -days 999 -out test/keys/ssl.cert

Then you should be able to run `npm test` once you have the dependencies in place.

> Note: Tests currently only work on linux-based environments that have `/proc/self/fd`. They *do not* work on MacOS environments.
> You can use Docker to run tests by creating a container and mounting the needle project directory on `/app`
> `docker create --name Needle -v /app -w /app -v /app/node_modules -i node:argon`

Credits
-------

Written by Tomás Pollak, with the help of contributors.

Copyright
---------

(c) Fork Ltd. Licensed under the MIT license.
