# Nock

[![Build Status](https://travis-ci.org/nock/nock.svg?branch=master)](https://travis-ci.org/nock/nock)
[![Coverage Status](https://coveralls.io/repos/github/nock/nock/badge.svg?branch=master)](https://coveralls.io/github/nock/nock?branch=master)
[![Greenkeeper](https://badges.greenkeeper.io/nock/nock.svg)](https://greenkeeper.io/)
[![Backers on Open Collective](https://opencollective.com/nock/backers/badge.svg)](#backers)
[![Sponsors on Open Collective](https://opencollective.com/nock/sponsors/badge.svg)](#sponsors)

> HTTP server mocking and expectations library for Node.js

Nock can be used to test modules that perform HTTP requests in isolation.

For instance, if a module performs HTTP requests to a CouchDB server or makes HTTP requests to the Amazon API, you can test that module in isolation.

**Table of Contents**

<!-- toc -->

- [How does it work?](#how-does-it-work)
- [Install](#install)
  * [Node version support](#node-version-support)
- [Usage](#usage)
  * [READ THIS! - About interceptors](#read-this---about-interceptors)
  * [Specifying hostname](#specifying-hostname)
  * [Specifying path](#specifying-path)
  * [Specifying request body](#specifying-request-body)
  * [Specifying request query string](#specifying-request-query-string)
  * [Specifying replies](#specifying-replies)
      - [Access original request and headers](#access-original-request-and-headers)
    + [Replying with errors](#replying-with-errors)
  * [Specifying headers](#specifying-headers)
    + [Header field names are case-insensitive](#header-field-names-are-case-insensitive)
    + [Specifying Request Headers](#specifying-request-headers)
    + [Specifying Reply Headers](#specifying-reply-headers)
    + [Default Reply Headers](#default-reply-headers)
    + [Including Content-Length Header Automatically](#including-content-length-header-automatically)
    + [Including Date Header Automatically](#including-date-header-automatically)
  * [HTTP Verbs](#http-verbs)
  * [Support for HTTP and HTTPS](#support-for-http-and-https)
  * [Non-standard ports](#non-standard-ports)
  * [Repeat response n times](#repeat-response-n-times)
  * [Delay the response body](#delay-the-response-body)
  * [Delay the response](#delay-the-response)
  * [Delay the connection](#delay-the-connection)
  * [Socket timeout](#socket-timeout)
  * [Chaining](#chaining)
  * [Scope filtering](#scope-filtering)
  * [Path filtering](#path-filtering)
  * [Request Body filtering](#request-body-filtering)
  * [Request Headers Matching](#request-headers-matching)
  * [Optional Requests](#optional-requests)
  * [Allow __unmocked__ requests on a mocked hostname](#allow-__unmocked__-requests-on-a-mocked-hostname)
- [Expectations](#expectations)
  * [.isDone()](#isdone)
  * [.cleanAll()](#cleanall)
  * [.persist()](#persist)
  * [.pendingMocks()](#pendingmocks)
  * [.activeMocks()](#activemocks)
  * [.isActive()](#isactive)
- [Logging](#logging)
- [Restoring](#restoring)
- [Activating](#activating)
- [Turning Nock Off (experimental!)](#turning-nock-off-experimental)
- [Enable/Disable real HTTP requests](#enabledisable-real-http-requests)
  * [Disabling requests](#disabling-requests)
  * [Enabling requests](#enabling-requests)
  * [Resetting NetConnect](#resetting-netconnect)
- [Recording](#recording)
  * [`dont_print` option](#dont_print-option)
  * [`output_objects` option](#output_objects-option)
  * [`enable_reqheaders_recording` option](#enable_reqheaders_recording-option)
  * [`logging` option](#logging-option)
  * [`use_separator` option](#use_separator-option)
  * [.removeInterceptor()](#removeinterceptor)
- [Events](#events)
  * [Global no match event](#global-no-match-event)
- [Nock Back](#nock-back)
  * [Setup](#setup)
    + [Options](#options)
  * [Usage](#usage-1)
    + [Options](#options-1)
    + [Modes](#modes)
- [Debugging](#debugging)
- [Contributing](#contributing)
- [Backers](#backers)
- [Sponsors](#sponsors)
- [License](#license)

<!-- tocstop -->

## How does it work?

Nock works by overriding Node's `http.request` function. Also, it overrides `http.ClientRequest` too to cover for modules that use it directly.

## Install

```sh
$ npm install --save nock
```

### Node version support

The latest version of nock supports all currently maintained Node versions, see [Node Release Schedule](https://github.com/nodejs/Release#release-schedule)

Here is a list of past nock versions with respective node version support

| node | nock |
|---|---|
| 0.10 | up to 8.x |
| 0.11 | up to 8.x |
| 0.12 | up to 8.x |
| 4 | up to 9.x |
| 5 | up to 8.x |
| 7 | up to 9.x |
| 9 | up to 9.x |

## Usage

On your test, you can setup your mocking object like this:

```js
var nock = require('nock');

var couchdb = nock('http://myapp.iriscouch.com')
                .get('/users/1')
                .reply(200, {
                  _id: '123ABC',
                  _rev: '946B7D1C',
                  username: 'pgte',
                  email: 'pedro.teixeira@gmail.com'
                 });
```

This setup says that we will intercept every HTTP call to `http://myapp.iriscouch.com`.

It will intercept an HTTP GET request to '/users/1' and reply with a status 200, and the body will contain a user representation in JSON.

Then the test can call the module, and the module will do the HTTP requests.

### READ THIS! - About interceptors

When you setup an interceptor for a URL and that interceptor is used, it is removed from the interceptor list.
This means that you can intercept 2 or more calls to the same URL and return different things on each of them.
It also means that you must setup one interceptor for each request you are going to have, otherwise nock will throw an error because that URL was not present in the interceptor list.
If you don’t want interceptors to be removed as they are used, you can use the [.persist()](#persist) method.

### Specifying hostname

The request hostname can be a string or a RegExp.

```js
var scope = nock('http://www.example.com')
    .get('/resource')
    .reply(200, 'domain matched');
```

```js
var scope = nock(/example\.com/)
    .get('/resource')
    .reply(200, 'domain regex matched');
```

> Note: You can choose to include or not the protocol in the hostname matching.

### Specifying path

The request path can be a string, a RegExp or a filter function and you can use any [HTTP verb](#http-verbs).

Using a string:

```js
var scope = nock('http://www.example.com')
    .get('/resource')
    .reply(200, 'path matched');
```

Using a regular expression:

```js
var scope = nock('http://www.example.com')
    .get(/source$/)
    .reply(200, 'path using regex matched');
```

Using a function:

```js
var scope = nock('http://www.example.com')
    .get(function(uri) {
      return uri.indexOf('cats') >= 0;
    })
    .reply(200, 'path using function matched');
```

### Specifying request body

You can specify the request body to be matched as the second argument to the `get`, `post`, `put` or `delete` specifications. There are five types of second argument allowed:

**String**: nock will exact match the stringified request body with the provided string

```js
nock('http://www.example.com')
  .post('/login', 'username=pgte&password=123456')
  .reply(200, { id: '123ABC' });
```

**Buffer**: nock will exact match the stringified request body with the provided buffer

```js
nock('http://www.example.com')
  .post('/login', Buffer.from([0xff, 0x11]))
  .reply(200, { id: '123ABC' });
```

**RegExp**: nock will test the stringified request body against the provided RegExp

```js
nock('http://www.example.com')
  .post('/login', /username=\w+/gi)
  .reply(200, { id: '123ABC' });
```

**JSON object**: nock will exact match the request body with the provided object. In order to increase flexibility, nock also supports RegExp as an attribute value for the keys:

```js
nock('http://www.example.com')
  .post('/login', { username: 'pgte', password: /.+/i })
  .reply(200, { id: '123ABC' });
```

**Function**: nock will evaluate the function providing the request body object as first argument. Return true if it should be considered a match:

```js
nock('http://www.example.com')
  .post('/login', function(body) {
    return body.username && body.password;
  })
  .reply(200, { id: '123ABC' });
```

In case you need to perform a partial matching on a complex, nested request body you should have a look at libraries like [lodash.matches](https://lodash.com/docs/#matches). Indeed, partial matching can be achieved as:

```js
nock('http://www.example.com')
  .post('/user', _.matches({ address: { country: 'US' } }))
  .reply(200, { id: '123ABC' });
```


### Specifying request query string

Nock understands query strings. Instead of placing the entire URL, you can specify the query part as an object:

```js
nock('http://example.com')
  .get('/users')
  .query({name: 'pedro', surname: 'teixeira'})
  .reply(200, {results: [{id: 'pgte'}]});
```

Nock supports array-style/object-style query parameters. The encoding format matches with request module.

```js
nock('http://example.com')
  .get('/users')
  .query({
      names: ['alice', 'bob'],
      tags: {
        alice: ['admin', 'tester'],
        bob: ['tester']
      }
  })
  .reply(200, {results: [{id: 'pgte'}]});
```

Nock supports passing a function to query. The function determines if the actual query matches or not.

```js
nock('http://example.com')
  .get('/users')
  .query(function(actualQueryObject){
    // do some compare with the actual Query Object
    // return true for matched
    // return false for not matched
    return true;
  })
  .reply(200, {results: [{id: 'pgte'}]});
```

To mock the entire url regardless of the passed query string:

```js
nock('http://example.com')
  .get('/users')
  .query(true)
  .reply(200, {results: [{id: 'pgte'}]});
```

### Specifying replies

You can specify the return status code for a path on the first argument of reply like this:

```js
var scope = nock('http://myapp.iriscouch.com')
                .get('/users/1')
                .reply(404);
```

You can also specify the reply body as a string:

```js
var scope = nock('http://www.google.com')
                .get('/')
                .reply(200, 'Hello from Google!');
```

or as a JSON-encoded object:

```js
var scope = nock('http://myapp.iriscouch.com')
                .get('/')
                .reply(200, {
                  username: 'pgte',
                  email: 'pedro.teixeira@gmail.com',
                  _id: '4324243fsd'
                });
```

or even as a file:

```js
var scope = nock('http://myapp.iriscouch.com')
                .get('/')
                .replyWithFile(200, __dirname + '/replies/user.json', { 'Content-Type': 'application/json' });
```

Instead of an object or a buffer you can also pass in a callback to be evaluated for the value of the response body:

```js
var scope = nock('http://www.google.com')
   .filteringRequestBody(/.*/, '*')
   .post('/echo', '*')
   .reply(201, function(uri, requestBody) {
     return requestBody;
   });
```

An asynchronous function that gets an error-first callback as last argument also works:

```js
var scope = nock('http://www.google.com')
   .filteringRequestBody(/.*/, '*')
   .post('/echo', '*')
   .reply(201, function(uri, requestBody, cb) {
     fs.readFile('cat-poems.txt' , cb); // Error-first callback
   });
```

> Note: When using a callback, if you call back with an error as first argument, that error will be sent in the response body, with a 500 HTTP response status code.

You can also return the status code and body using just one function:

```js
var scope = nock('http://www.google.com')
   .filteringRequestBody(/.*/, '*')
   .post('/echo', '*')
   .reply(function(uri, requestBody) {
     return [
       201,
       'THIS IS THE REPLY BODY',
       {'header': 'value'} // optional headers
     ];
   });
```

or, use an error-first callback that also gets the status code:

```js
var scope = nock('http://www.google.com')
   .filteringRequestBody(/.*/, '*')
   .post('/echo', '*')
   .reply(function(uri, requestBody, cb) {
     setTimeout(function() {
       cb(null, [201, 'THIS IS THE REPLY BODY'])
     }, 1e3);
   });
```

A Stream works too:
```js
var scope = nock('http://www.google.com')
   .get('/cat-poems')
   .reply(200, function(uri, requestBody) {
     return fs.createReadStream('cat-poems.txt');
   });
```

##### Access original request and headers

If you're using the reply callback style, you can access the original client request using `this.req`  like this:

```js
var scope = nock('http://www.google.com')
   .get('/cat-poems')
   .reply(function(uri, requestBody) {
     console.log('path:', this.req.path);
     console.log('headers:', this.req.headers);
     // ...
   });
```

#### Replying with errors

You can reply with an error like this:

```js
nock('http://www.google.com')
   .get('/cat-poems')
   .replyWithError('something awful happened');
```

JSON error responses are allowed too:

```js
nock('http://www.google.com')
  .get('/cat-poems')
  .replyWithError({'message': 'something awful happened', 'code': 'AWFUL_ERROR'});
```

> Note: This will emit an `error` event on the `request` object, not the reply.


### Specifying headers

#### Header field names are case-insensitive

Per [HTTP/1.1 4.2 Message Headers](http://www.w3.org/Protocols/rfc2616/rfc2616-sec4.html#sec4.2) specification, all message headers are case insensitive and thus internally Nock uses lower-case for all field names even if some other combination of cases was specified either in mocking specification or in mocked requests themselves.

#### Specifying Request Headers

You can specify the request headers like this:

```js
var scope = nock('http://www.example.com', {
      reqheaders: {
        'authorization': 'Basic Auth'
      }
    })
    .get('/')
    .reply(200);
```

Or you can use a Regular Expression or Function check the header values. The function will be
passed the header value.

```js
var scope = nock('http://www.example.com', {
      reqheaders: {
        'X-My-Headers': function (headerValue) {
           if (headerValue) {
             return true;
           }
           return false;
         },
         'X-My-Awesome-Header': /Awesome/i
      }
    })
    .get('/')
    .reply(200);
```

If `reqheaders` is not specified or if `host` is not part of it, Nock will automatically add `host` value to request header.

If no request headers are specified for mocking then Nock will automatically skip matching of request headers. Since `host` header is a special case which may get automatically inserted by Nock, its matching is skipped unless it was *also* specified in the request being mocked.

You can also have Nock fail the request if certain headers are present:

```js
var scope = nock('http://www.example.com', {
    badheaders: ['cookie', 'x-forwarded-for']
  })
  .get('/')
  .reply(200);
```

When invoked with this option, Nock will not match the request if any of the `badheaders` are present.

Basic authentication can be specified as follows:

```js
var scope = nock('http://www.example.com')
    .get('/')
    .basicAuth({
      user: 'john',
      pass: 'doe'
    })
    .reply(200);
```

#### Specifying Reply Headers

You can specify the reply headers like this:

```js
var scope = nock('http://www.headdy.com')
   .get('/')
   .reply(200, 'Hello World!', {
     'X-My-Headers': 'My Header value'
   });
```

Or you can use a function to generate the headers values. The function will be
passed the request, response, and body (if available). The body will be either a
buffer, a stream, or undefined.

```js
var scope = nock('http://www.headdy.com')
   .get('/')
   .reply(200, 'Hello World!', {
     'X-My-Headers': function (req, res, body) {
       return body.toString();
     }
   });
```

#### Default Reply Headers

You can also specify default reply headers for all responses like this:

```js
var scope = nock('http://www.headdy.com')
  .defaultReplyHeaders({
    'X-Powered-By': 'Rails',
    'Content-Type': 'application/json'
  })
  .get('/')
  .reply(200, 'The default headers should come too');
```

Or you can use a function to generate the default headers values:

```js
var scope = nock('http://www.headdy.com')
  .defaultReplyHeaders({
    'Content-Length': function (req, res, body) {
      return body.length;
    }
  })
  .get('/')
  .reply(200, 'The default headers should come too');
```

#### Including Content-Length Header Automatically

When using `scope.reply()` to set a response body manually, you can have the
`Content-Length` header calculated automatically.

```js
var scope = nock('http://www.headdy.com')
  .replyContentLength()
  .get('/')
  .reply(200, { hello: 'world' });
```

**NOTE:** this does not work with streams or other advanced means of specifying
the reply body.

#### Including Date Header Automatically

You can automatically append a `Date` header to your mock reply:

```js
var scope = nock('http://www.headdy.com')
  .replyDate(new Date(2015, 0, 1)) // defaults to now, must use a Date object
  .get('/')
  .reply(200, { hello: 'world' });
```

### HTTP Verbs

Nock supports any HTTP verb, and it has convenience methods for the GET, POST, PUT, HEAD, DELETE, PATCH and MERGE HTTP verbs.

You can intercept any HTTP verb using `.intercept(path, verb [, requestBody [, options]])`:

```js
var scope = nock('http://my.domain.com')
  .intercept('/path', 'PATCH')
  .reply(304);
```

### Support for HTTP and HTTPS

By default nock assumes HTTP. If you need to use HTTPS you can specify the `https://` prefix like this:

```js
var scope = nock('https://secure.my.server.com')
   // ...
```

### Non-standard ports

You are able to specify a non-standard port like this:

```js
var scope = nock('http://my.server.com:8081')
  ...
```

### Repeat response n times

You are able to specify the number of times to repeat the same response.

```js
nock('http://zombo.com').get('/').times(4).reply(200, 'Ok');

http.get('http://zombo.com/'); // respond body "Ok"
http.get('http://zombo.com/'); // respond body "Ok"
http.get('http://zombo.com/'); // respond body "Ok"
http.get('http://zombo.com/'); // respond body "Ok"
http.get('http://zombo.com/'); // respond with zombo.com result
```

Sugar syntax

```js
nock('http://zombo.com').get('/').once().reply(200, 'Ok');
nock('http://zombo.com').get('/').twice().reply(200, 'Ok');
nock('http://zombo.com').get('/').thrice().reply(200, 'Ok');
```

### Delay the response body
You are able to specify the number of milliseconds that the response body should be delayed. Response header will be replied immediately.
`delayBody(1000)` is equivalent to `delay({body: 1000})`.


```js
nock('http://my.server.com')
  .get('/')
  .delayBody(2000) // 2 seconds
  .reply(200, '<html></html>')
```

NOTE: the [`'response'`](http://nodejs.org/api/http.html#http_event_response) event will occur immediately, but the [IncomingMessage](http://nodejs.org/api/http.html#http_http_incomingmessage) will not emit its `'end'` event until after the delay.

### Delay the response

You are able to specify the number of milliseconds that your reply should be delayed.

```js
nock('http://my.server.com')
  .get('/')
  .delay(2000) // 2 seconds delay will be applied to the response header.
  .reply(200, '<html></html>')
```

`delay()` could also be used as

 ```
 delay({
    head: headDelayInMs,
    body: bodyDelayInMs
 })
 ```

 for example

```js
nock('http://my.server.com')
  .get('/')
  .delay({
    head: 2000, // header will be delayed for 2 seconds, i.e. the whole response will be delayed for 2 seconds.
    body: 3000  // body will be delayed for another 3 seconds after header is sent out.
  })
  .reply(200, '<html></html>')
```

### Delay the connection

`delayConnection(1000)` is equivalent to `delay({head: 1000})`.

### Socket timeout

You are able to specify the number of milliseconds that your connection should be idle, to simulate a socket timeout.

```js
nock('http://my.server.com')
  .get('/')
  .socketDelay(2000) // 2 seconds
  .reply(200, '<html></html>')
```

To test a request like the following:

```js
req = http.request('http://my.server.com', function(res) {
  ...
});
req.setTimeout(1000, function() {
  req.abort();
});
req.end();
```

NOTE: the timeout will be fired immediately, and will not leave the simulated connection idle for the specified period of time.

### Chaining

You can chain behaviour like this:

```js
var scope = nock('http://myapp.iriscouch.com')
                .get('/users/1')
                .reply(404)
                .post('/users', {
                  username: 'pgte',
                  email: 'pedro.teixeira@gmail.com'
                })
                .reply(201, {
                  ok: true,
                  id: '123ABC',
                  rev: '946B7D1C'
                })
                .get('/users/123ABC')
                .reply(200, {
                  _id: '123ABC',
                  _rev: '946B7D1C',
                  username: 'pgte',
                  email: 'pedro.teixeira@gmail.com'
                });
```

### Scope filtering

You can filter the scope (protocol, domain or port) of nock through a function. The filtering function is accepted at the `filteringScope` field of the `options` argument.

This can be useful if you have a node module that randomly changes subdomains to which it sends requests, e.g., the Dropbox node module behaves like this.

```js
var scope = nock('https://api.dropbox.com', {
    filteringScope: function(scope) {
      return /^https:\/\/api[0-9]*.dropbox.com/.test(scope);
    }
  })
  .get('/1/metadata/auto/Photos?include_deleted=false&list=true')
  .reply(200);
```

### Path filtering

You can also filter the URLs based on a function.

This can be useful, for instance, if you have random or time-dependent data in your URL.

You can use a regexp for replacement, just like String.prototype.replace:

```js
var scope = nock('http://api.myservice.com')
                .filteringPath(/password=[^&]*/g, 'password=XXX')
                .get('/users/1?password=XXX')
                .reply(200, 'user');
```

Or you can use a function:

```js
var scope = nock('http://api.myservice.com')
                .filteringPath(function(path) {
                   return '/ABC';
                 })
                .get('/ABC')
                .reply(200, 'user');
```

Note that `scope.filteringPath` is not cumulative: it should only be used once per scope.

### Request Body filtering

You can also filter the request body based on a function.

This can be useful, for instance, if you have random or time-dependent data in your request body.

You can use a regexp for replacement, just like String.prototype.replace:

```js
var scope = nock('http://api.myservice.com')
                .filteringRequestBody(/password=[^&]*/g, 'password=XXX')
                .post('/users/1', 'data=ABC&password=XXX')
                .reply(201, 'OK');
```

Or you can use a function to transform the body:

```js
var scope = nock('http://api.myservice.com')
                .filteringRequestBody(function(body) {
                   return 'ABC';
                 })
                .post('/', 'ABC')
                .reply(201, 'OK');
```

If you don't want to match the request body you can return a wildcard match:

```js
var scope = nock('http://api.myservice.com')
  .filteringRequestBody(function(body) {
    return '*';
  })
  .post('/some_uri', '*')
  .reply(200, 'OK');
```

### Request Headers Matching

If you need to match requests only if certain request headers match, you can.

```js
var scope = nock('http://api.myservice.com')
                .matchHeader('accept', 'application/json')
                .get('/')
                .reply(200, {
                  data: 'hello world'
                })
```

You can also use a regexp for the header body.

```js
var scope = nock('http://api.myservice.com')
                .matchHeader('User-Agent', /Mozilla\/.*/)
                .get('/')
                .reply(200, {
                  data: 'hello world'
                })
```

You can also use a function for the header body.

```js
var scope = nock('http://api.myservice.com')
                .matchHeader('content-length', function (val) {
                  return val >= 1000;
                })
                .get('/')
                .reply(200, {
                  data: 'hello world'
                })
```

### Optional Requests

By default every mocked request is expected to be made exactly once, and until it is it'll appear in `scope.pendingMocks()`, and `scope.isDone()` will return false (see [expectations](#expectations)). In many cases this is fine, but in some (especially cross-test setup code) it's useful to be able to mock a request that may or may not happen. You can do this with `optionally()`. Optional requests are consumed just like normal ones once matched, but they do not appear in `pendingMocks()`, and `isDone()` will return true for scopes with only optional requests pending.

```js
var example = nock("http://example.com");
example.pendingMocks() // []
example.get("/pathA").reply(200);
example.pendingMocks() // ["GET http://example.com:80/path"]

// ...After a request to example.com/pathA:
example.pendingMocks() // []

example.get("/pathB").optionally().reply(200);
example.pendingMocks() // []

// You can also pass a boolean argument to `optionally()`. This
// is useful if you want to conditionally make a mocked request
// optional.
var getMock = function(optional) {
  return example.get("/pathC").optionally(optional).reply(200);
}

getMock(true);
example.pendingMocks() // []
getMock(false);
example.pendingMocks() // ["GET http://example.com:80/pathC"]

```

### Allow __unmocked__ requests on a mocked hostname

If you need some request on the same host name to be mocked and some others to **really** go through the HTTP stack, you can use the `allowUnmocked` option like this:

```js
options = {allowUnmocked: true};
var scope = nock('http://my.existing.service.com', options)
  .get('/my/url')
  .reply(200, 'OK!');

 // GET /my/url => goes through nock
 // GET /other/url => actually makes request to the server
```

> Note: When applying `{allowUnmocked: true}`, if the request is made to the real server, no interceptor is removed.

## Expectations

Every time an HTTP request is performed for a scope that is mocked, Nock expects to find a handler for it. If it doesn't, it will throw an error.

Calls to nock() return a scope which you can assert by calling `scope.done()`. This will assert that all specified calls on that scope were performed.

Example:

```js
var google = nock('http://google.com')
                .get('/')
                .reply(200, 'Hello from Google!');

// do some stuff

setTimeout(function() {
  google.done(); // will throw an assertion error if meanwhile a "GET http://google.com" was not performed.
}, 5000);
```

### .isDone()

You can call `isDone()` on a single expectation to determine if the expectation was met:

```js
var scope = nock('http://google.com')
  .get('/')
  .reply(200);

scope.isDone(); // will return false
```

It is also available in the global scope, which will determine if all expectations have been met:

```js
nock.isDone();
```

### .cleanAll()

You can cleanup all the prepared mocks (could be useful to cleanup some state after a failed test) like this:

```js
nock.cleanAll();
```
### .persist()

You can make all the interceptors for a scope persist by calling `.persist()` on it:

```js
var scope = nock('http://persisssists.con')
  .persist()
  .get('/')
  .reply(200, 'Persisting all the way');
```

Note that while a persisted scope will always intercept the requests, it is considered "done" after the first interception.

If you want to stop persisting a persistent nock you can call `persist(false)`:

```js
var scope = nock('http://example.com').persist().get('/').reply(200, 'ok');
// do some tests ...
scope.persist(false);
```

### .pendingMocks()

If a scope is not done, you can inspect the scope to infer which ones are still pending using the `scope.pendingMocks()` function:

```js
if (!scope.isDone()) {
  console.error('pending mocks: %j', scope.pendingMocks());
}
```

It is also available in the global scope:

```js
console.error('pending mocks: %j', nock.pendingMocks());
```

### .activeMocks()

You can see every mock that is currently active (i.e. might potentially reply to requests) in a scope using `scope.activeMocks()`. A mock is active if it is pending, optional but not yet completed, or persisted. Mocks that have intercepted their requests and are no longer doing anything are the only mocks which won't appear here.

You probably don't need to use this - it mainly exists as a mechanism to recreate the previous (now-changed) behavior of `pendingMocks()`.

```js
console.error('active mocks: %j', scope.activeMocks());
```

It is also available in the global scope:

```js
console.error('active mocks: %j', nock.activeMocks());
```

### .isActive()

Your tests may sometimes want to deactivate the nock interceptor.
Once deactivated, nock needs to be re-activated to work.
You can check if nock interceptor is active or not by using `nock.isActive()`.
Sample:

```js
if (!nock.isActive()) nock.activate()
```

## Logging

Nock can log matches if you pass in a log function like this:

```js
var google = nock('http://google.com')
                .log(console.log)
                ...
```

## Restoring

You can restore the HTTP interceptor to the normal unmocked behaviour by calling:

```js
nock.restore();
```
**note 1**: restore does not clear the interceptor list. Use [nock.cleanAll()](#cleanall) if you expect the interceptor list to be empty.

**note 2**: restore will also remove the http interceptor itself. You need to run [nock.activate()](#activating) to re-activate the http interceptor. Without re-activation, nock will not intercept any calls.

## Activating

Only for cases where nock has been deactivated using [nock.restore()](#restoring), you can reactivate the HTTP interceptor to start intercepting HTTP calls using:

```js
nock.activate();
```

**note**: To check if nock HTTP interceptor is active or deactive, use [nock.isActive()](#isactive).

## Turning Nock Off (experimental!)

You can bypass Nock completely by setting `NOCK_OFF` environment variable to `"true"`.

This way you can have your tests hit the real servers just by switching on this environment variable.

```js
$ NOCK_OFF=true node my_test.js
```

## Enable/Disable real HTTP requests

By default, any requests made to a host that is not mocked will be executed normally. If you want to block these requests, nock allows you to do so.

### Disabling requests

For disabling real http requests.

```js
nock.disableNetConnect();
```

So, if you try to request any host not 'nocked', it will throw a `NetConnectNotAllowedError`.

```js
nock.disableNetConnect();
var req = http.get('http://google.com/');
req.on('error', function(err){
    console.log(err);
});
// The returned `http.ClientRequest` will emit an error event (or throw if you're not listening for it)
// This code will log a NetConnectNotAllowedError with message:
// Nock: Disallowed net connect for "google.com:80"
```

### Enabling requests

For enabling any real HTTP requests (the default behavior):

```js
nock.enableNetConnect();
```

You could allow real HTTP requests for certain host names by providing a string or a regular expression for the hostname:

```js
// Using a string
nock.enableNetConnect('amazon.com');

// Or a RegExp
nock.enableNetConnect(/(amazon|github)\.com/);

http.get('http://www.amazon.com/');
http.get('http://github.com/');

http.get('http://google.com/');
// This will throw NetConnectNotAllowedError with message:
// Nock: Disallowed net connect for "google.com:80"
```

A common use case when testing local endpoints would be to disable all but localhost, then add in additional nocks for external requests:

```js
nock.disableNetConnect();
// Allow localhost connections so we can test local routes and mock servers.
nock.enableNetConnect('127.0.0.1');
```

### Resetting NetConnect

When you're done with the test, you probably want to set everything back to normal:

```js
nock.cleanAll();
nock.enableNetConnect();
```

## Recording

This is a cool feature:

Guessing what the HTTP calls are is a mess, especially if you are introducing nock on your already-coded tests.

For these cases where you want to mock an existing live system you can record and playback the HTTP calls like this:

```js
nock.recorder.rec();
// Some HTTP calls happen and the nock code necessary to mock
// those calls will be outputted to console
```

Recording relies on intercepting real requests and answers and then persisting them for later use.

In order to stop recording you should call `nock.restore()` and recording will stop.

**ATTENTION!:** when recording is enabled, nock does no validation, nor will any mocks be enabled.  Please be sure to turn off recording before attempting to use any mocks in your tests.

### `dont_print` option

If you just want to capture the generated code into a var as an array you can use:

```js
nock.recorder.rec({
  dont_print: true
});
// ... some HTTP calls
var nockCalls = nock.recorder.play();
```

The `nockCalls` var will contain an array of strings representing the generated code you need.

Copy and paste that code into your tests, customize at will, and you're done! You can call `nock.recorder.reset()` to remove already recorded calls from the array that `nock.recorder.play()` returns.

(Remember that you should do this one test at a time).

### `output_objects` option

In case you want to generate the code yourself or use the test data in some other way, you can pass the `output_objects` option to `rec`:

```js
nock.recorder.rec({
  output_objects: true
});
// ... some HTTP calls
var nockCallObjects = nock.recorder.play();
```

The returned call objects have the following properties:

* `scope` - the scope of the call including the protocol and non-standard ports (e.g. `'https://github.com:12345'`)
* `method` - the HTTP verb of the call (e.g. `'GET'`)
* `path` - the path of the call (e.g. `'/pgte/nock'`)
* `body` - the body of the call, if any
* `status` - the HTTP status of the reply (e.g. `200`)
* `response` - the body of the reply which can be a JSON, string, hex string representing binary buffers or an array of such hex strings (when handling `content-encoded` in reply header)
* `headers` - the headers of the reply
* `reqheader` - the headers of the request

If you save this as a JSON file, you can load them directly through `nock.load(path)`. Then you can post-process them before using them in the tests for example to add them request body filtering (shown here fixing timestamps to match the ones captured during recording):

```js
nocks = nock.load(pathToJson);
nocks.forEach(function(nock) {
  nock.filteringRequestBody = function(body, aRecordedBody) {
    if (typeof(body) !== 'string' || typeof(aRecordedBody) !== 'string') {
      return body;
    }

    var recordedBodyResult = /timestamp:([0-9]+)/.exec(aRecordedBody);
    if (!recordedBodyResult) {
      return body;
    }

    var recordedTimestamp = recordedBodyResult[1];
    return body.replace(/(timestamp):([0-9]+)/g, function(match, key, value) {
      return key + ':' + recordedTimestamp;
    });
  };
});
```

Alternatively, if you need to pre-process the captured nock definitions before using them (e.g. to add scope filtering) then you can use `nock.loadDefs(path)` and `nock.define(nockDefs)`. Shown here is scope filtering for Dropbox node module which constantly changes the subdomain to which it sends the requests:

```js
//  Pre-process the nock definitions as scope filtering has to be defined before the nocks are defined (due to its very hacky nature).
var nockDefs = nock.loadDefs(pathToJson);
nockDefs.forEach(function(def) {
  //  Do something with the definition object e.g. scope filtering.
  def.options = def.options || {};
  def.options.filteringScope = function(scope) {
    return /^https:\/\/api[0-9]*.dropbox.com/.test(scope);
  };
}

//  Load the nocks from pre-processed definitions.
var nocks = nock.define(nockDefs);
```

### `enable_reqheaders_recording` option

Recording request headers by default is deemed more trouble than it's worth as some of them depend on the timestamp or other values that may change after the tests have been recorder thus leading to complex postprocessing of recorded tests. Thus by default the request headers are not recorded.

The genuine use cases for recording request headers (e.g. checking authorization) can be handled manually or by using `enable_reqheaders_recording` in `recorder.rec()` options.

```js
nock.recorder.rec({
  dont_print: true,
  output_objects: true,
  enable_reqheaders_recording: true
});
```

Note that even when request headers recording is enabled Nock will never record `user-agent` headers. `user-agent` values change with the version of Node and underlying operating system and are thus useless for matching as all that they can indicate is that the user agent isn't the one that was used to record the tests.

### `logging` option

Nock will print using `console.log` by default (assuming that `dont_print` is `false`).  If a different function is passed into `logging`, nock will send the log string (or object, when using `output_objects`) to that function.  Here's a basic example.

```js
var appendLogToFile = function(content) {
  fs.appendFile('record.txt', content);
}
nock.recorder.rec({
  logging: appendLogToFile,
});
```

### `use_separator` option

By default, nock will wrap its output with the separator string `<<<<<<-- cut here -->>>>>>` before and after anything it prints, whether to the console or a custom log function given with the `logging` option.

To disable this, set `use_separator` to false.

```js
nock.recorder.rec({
  use_separator: false
});
```

### .removeInterceptor()
This allows removing a specific interceptor. This can be either an interceptor instance or options for a url. It's useful when there's a list of common interceptors shared between tests, where an individual test requires one of the shared interceptors to behave differently.

Examples:
```js
nock.removeInterceptor({
  hostname : 'localhost',
  path : '/mockedResource'
});
```

```js
nock.removeInterceptor({
  hostname : 'localhost',
  path : '/login'
  method: 'POST'
  proto : 'https'
});
```

```js
var interceptor = nock('http://example.org')
  .get('somePath');
nock.removeInterceptor(interceptor);
```

## Events

A scope emits the following events:

* `emit('request', function(req, interceptor, body))`;
* `emit('replied', function(req, interceptor))`;

### Global no match event

You can also listen for no match events like this:

```js
nock.emitter.on('no match', function(req) {

});
```

## Nock Back

Fixture recording support and playback.

### Setup

You must specify a fixture directory before using, for example:

In your test helper

```javascript
var nockBack = require('nock').back;

nockBack.fixtures = '/path/to/fixtures/';
nockBack.setMode('record');
```

#### Options

- `nockBack.fixtures` : path to fixture directory
- `nockBack.setMode()` : the mode to use


### Usage

By default if the fixture doesn't exist, a `nockBack` will create a new fixture and save the recorded output
for you. The next time you run the test, if the fixture exists, it will be loaded in.

The `this` context of the callback function will have a property `scopes` to access all of the loaded
nock scopes.

```javascript
var nockBack = require('nock').back;
var request = require('request');
nockBack.setMode('record');

nockBack.fixtures = __dirname + '/nockFixtures'; //this only needs to be set once in your test helper

var before = function(scope) {
  scope.filteringRequestBody = function(body, aRecordedBody) {
    if (typeof(body) !== 'string' || typeof(aRecordedBody) !== 'string') {
      return body;
    }

    var recordedBodyResult = /timestamp:([0-9]+)/.exec(aRecordedBody);
    if (!recordedBodyResult) {
      return body;
    }

    var recordedTimestamp = recordedBodyResult[1];
    return body.replace(/(timestamp):([0-9]+)/g, function(match, key, value) {
      return key + ':' + recordedTimestamp;
    });
  };
}

// recording of the fixture
nockBack('zomboFixture.json', function(nockDone) {
  request.get('http://zombo.com', function(err, res, body) {
    nockDone();


    // usage of the created fixture
    nockBack('zomboFixture.json', function (nockDone) {
      http.get('http://zombo.com/').end(); // respond body "Ok"

      this.assertScopesFinished(); //throws an exception if all nocks in fixture were not satisfied
      http.get('http://zombo.com/').end(); // throws exception because someFixture.json only had one call

      nockDone(); //never gets here
    });
  });
});
```

If your tests are using promises then use `nockBack` like this:

```
return nockBack('promisedFixture.json')
  .then(({nockDone, context}) => {
    //  do your tests returning a promise and chain it with
    //  `.then(nockDone);`
  });
});
```

#### Options

As an optional second parameter you can pass the following options

- `before`: a preprocessing function, gets called before nock.define
- `after`: a postprocessing function, gets called after nock.define
- `afterRecord`: a postprocessing function, gets called after recording. Is passed the array of scopes recorded and should return the array scopes to save to the fixture
- `recorder`: custom options to pass to the recorder


#### Modes

to set the mode call `nockBack.setMode(mode)` or run the tests with the `NOCK_BACK_MODE` environment variable set before loading nock. If the mode needs to be changed programatically, the following is valid: `nockBack.setMode(nockBack.currentMode)`

- wild: all requests go out to the internet, don't replay anything, doesn't record anything

- dryrun: The default, use recorded nocks, allow http calls, doesn't record anything, useful for writing new tests

- record: use recorded nocks, record new nocks

- lockdown: use recorded nocks, disables all http calls even when not nocked, doesn't record

## Debugging

Nock uses [`debug`](https://github.com/visionmedia/debug), so just run with environmental variable `DEBUG` set to `nock.*`.

```js
$ DEBUG=nock.* node my_test.js
```

## Contributing

Thanks for wanting to contribute! Take a look at our [Contributing Guide](CONTRIBUTING.md) for notes on our commit message conventions and how to run tests.

Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md).
By participating in this project you agree to abide by its terms.

## Backers

Thank you to all our backers! 🙏 [[Become a backer](https://opencollective.com/nock#backer)]

<a href="https://opencollective.com/nock#backers" target="_blank"><img src="https://opencollective.com/nock/backers.svg?width=890"></a>

## Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://opencollective.com/nock#sponsor)]

<a href="https://opencollective.com/nock/sponsor/0/website" target="_blank"><img src="https://opencollective.com/nock/sponsor/0/avatar.svg"></a>
<a href="https://opencollective.com/nock/sponsor/1/website" target="_blank"><img src="https://opencollective.com/nock/sponsor/1/avatar.svg"></a>
<a href="https://opencollective.com/nock/sponsor/2/website" target="_blank"><img src="https://opencollective.com/nock/sponsor/2/avatar.svg"></a>
<a href="https://opencollective.com/nock/sponsor/3/website" target="_blank"><img src="https://opencollective.com/nock/sponsor/3/avatar.svg"></a>
<a href="https://opencollective.com/nock/sponsor/4/website" target="_blank"><img src="https://opencollective.com/nock/sponsor/4/avatar.svg"></a>
<a href="https://opencollective.com/nock/sponsor/5/website" target="_blank"><img src="https://opencollective.com/nock/sponsor/5/avatar.svg"></a>
<a href="https://opencollective.com/nock/sponsor/6/website" target="_blank"><img src="https://opencollective.com/nock/sponsor/6/avatar.svg"></a>
<a href="https://opencollective.com/nock/sponsor/7/website" target="_blank"><img src="https://opencollective.com/nock/sponsor/7/avatar.svg"></a>
<a href="https://opencollective.com/nock/sponsor/8/website" target="_blank"><img src="https://opencollective.com/nock/sponsor/8/avatar.svg"></a>
<a href="https://opencollective.com/nock/sponsor/9/website" target="_blank"><img src="https://opencollective.com/nock/sponsor/9/avatar.svg"></a>

## License

[MIT](LICENSE)

Copyright (c) 2011-2017 [Pedro Teixeira](http://about.me/pedroteixeira) and other [contributors](https://github.com/nock/nock/graphs/contributors).
