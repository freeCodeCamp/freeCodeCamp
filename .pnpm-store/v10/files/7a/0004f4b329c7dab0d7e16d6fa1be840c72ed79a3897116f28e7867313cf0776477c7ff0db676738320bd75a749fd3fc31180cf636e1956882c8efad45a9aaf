# express-http-proxy [![NPM version](https://badge.fury.io/js/express-http-proxy.svg)](http://badge.fury.io/js/express-http-proxy) [![Build Status](https://travis-ci.org/villadora/express-http-proxy.svg?branch=master)](https://travis-ci.org/villadora/express-http-proxy) 


Express middleware to proxy request to another host and pass response back to original caller.

## Install

```bash
$ npm install express-http-proxy --save
```

## Usage
```js
proxy(host, options);
```

### Example:
To proxy URLS starting with '/proxy' to the host 'www.google.com':

```js
var proxy = require('express-http-proxy');
var app = require('express')();

app.use('/proxy', proxy('www.google.com'));
```

### Streaming

Proxy requests and user responses are piped/streamed/chunked by default.

If you define a response modifier (userResDecorator, userResHeaderDecorator),
or need to inspect the response before continuing (maybeSkipToNext), streaming
is disabled, and the request and response are buffered.
This can cause performance issues with large payloads.

### Promises

Many function hooks support Promises.
If any Promise is rejected, ```next(x)``` is called in the hosting application, where ```x``` is whatever you pass to ```Promise.reject```;


e.g.
```js
  app.use(proxy('/reject-promise', {
    proxyReqOptDecorator: function() {
      return Promise.reject('An arbitrary rejection message.');
    }
  }));
```

eventually calls

```js
next('An arbitrary rejection messasage');
```

### Host

The first positional argument is for the proxy host;  in many cases you will use a static string here, eg.

```js
app.use('/', proxy('http://google.com'))
```

However, this argument can also be a function, and that function can be
memoized or computed on each request, based on the setting of
```memoizeHost```.

```js
function selectProxyHost() {
  return (new Date() % 2) ? 'http://google.com' : 'http://altavista.com';
}

app.use('/', proxy(selectProxyHost));
```
### Middleware mixing

If you use 'https://www.npmjs.com/package/body-parser' you should declare it AFTER the proxy configuration, otherwise  original 'POST' body could be modified and not proxied correctly.

```

app.use('/proxy', 'http://foo.bar.com')

// Declare use of body-parser AFTER the use of proxy
app.use(bodyParser.foo(bar))
app.use('/api', ...)
```

### Options

#### proxyReqPathResolver (supports Promises)

Note: In ```express-http-proxy```, the ```path``` is considered the portion of
the url after the host, and including all query params.  E.g. for the URL
```http://smoogle.com/search/path?q=123```; the path is
```/search/path?q=123```.   Authors using this resolver must also handle the query parameter portion of the path.

Provide a proxyReqPathResolver function if you'd like to
operate on the path before issuing the proxy request.  Use a Promise for async
operations.

```js
  app.use(proxy('localhost:12345', {
    proxyReqPathResolver: function (req) {
      var parts = req.url.split('?');
      var queryString = parts[1];
      var updatedPath = parts[0].replace(/test/, 'tent');
      return updatedPath + (queryString ? '?' + queryString : '');
    }
  }));
```
Promise form

```js
app.use('/proxy', proxy('localhost:12345', {
  proxyReqPathResolver: function(req) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {   // simulate async
        var parts = req.url.split('?');
        var queryString = parts[1];
        var updatedPath = parts[0].replace(/test/, 'tent');
        var resolvedPathValue = updatedPath + (queryString ? '?' + queryString : '');
        resolve(resolvedPathValue);
      }, 200);
    });
  }
}));
```

#### forwardPath

DEPRECATED.  See proxyReqPathResolver

#### forwardPathAsync

DEPRECATED. See proxyReqPathResolver

#### filter (supports Promises)

The ```filter``` option can be used to limit what requests are proxied.  Return
```true``` to continue to execute proxy; return false-y to skip proxy for this
request.

For example, if you only want to proxy get request:

```js
app.use('/proxy', proxy('www.google.com', {
  filter: function(req, res) {
     return req.method == 'GET';
  }
}));
```

Promise form:

```js
  app.use(proxy('localhost:12346', {
    filter: function (req, res) { 
      return new Promise(function (resolve) { 
        resolve(req.method === 'GET');
      }); 
    }
  }));
```

Note that in the previous example, `resolve(false)` will execute the happy path
for filter here (skipping the rest of the proxy, and calling `next()`).
`reject()` will also skip the rest of proxy and call `next()`. 

#### userResDecorator (was: intercept) (supports Promise)

You can modify the proxy's response before sending it to the client.

```js
app.use('/proxy', proxy('www.google.com', {
  userResDecorator: function(proxyRes, proxyResData, userReq, userRes) {
    data = JSON.parse(proxyResData.toString('utf8'));
    data.newProperty = 'exciting data';
    return JSON.stringify(data);
  }
}));
```

```js
app.use(proxy('httpbin.org', {
  userResDecorator: function(proxyRes, proxyResData) {
    return new Promise(function(resolve) {
      proxyResData.funkyMessage = 'oi io oo ii';
      setTimeout(function() {
        resolve(proxyResData);
      }, 200);
    });
  }
}));
```

##### 304 - Not Modified

When your proxied service returns 304, not modified, this step will be skipped, since there is no body to decorate.

##### exploiting references
The intent is that this be used to modify the proxy response data only.

Note:
The other arguments (proxyRes, userReq, userRes) are passed by reference, so
you *can* currently exploit this to modify either response's headers, for
instance, but this is not a reliable interface. I expect to close this
exploit in a future release, while providing an additional hook for mutating
the userRes before sending.

##### gzip responses

If your proxy response is gzipped, this program will automatically unzip
it before passing to your function, then zip it back up before piping it to the
user response.  There is currently no way to short-circuit this behavior.

#### limit

This sets the body size limit (default: `1mb`). If the body size is larger than the specified (or default) limit,
a `413 Request Entity Too Large`  error will be returned. See [bytes.js](https://www.npmjs.com/package/bytes) for
a list of supported formats.

```js
app.use('/proxy', proxy('www.google.com', {
  limit: '5mb'
}));
```

#### memoizeHost

Defaults to ```true```.

When true, the ```host``` argument will be parsed on first request, and
memoized for subsequent requests.

When ```false```, ```host``` argument will be parsed on each request.

E.g.,

```js

  function coinToss() { return Math.random() > .5 }
  function getHost() { return coinToss() ? 'http://yahoo.com' : 'http://google.com' }

  app.use(proxy(getHost, {
    memoizeHost: false
  }))
```

In this example, when ```memoizeHost:false```, the coinToss occurs on each
request, and each request could get either value.

Conversely, When ```memoizeHost:true```,  the coinToss would occur on the first
request, and all additional requests would return the value resolved on the
first request.


### userResHeaderDecorator

When a `userResHeaderDecorator` is defined, the return of this method will replace (rather than be merged on to) the headers for `userRes`.

```js
app.use('/proxy', proxy('www.google.com', {
  userResHeaderDecorator(headers, userReq, userRes, proxyReq, proxyRes) {
    // recieves an Object of headers, returns an Object of headers.
    return headers;
  }
}));
```


#### decorateRequest

REMOVED:  See ```proxyReqOptDecorator``` and ```proxyReqBodyDecorator```.


#### skipToNextHandlerFilter(supports Promise form)
(experimental: this interface may change in upcoming versions)

Allows you to inspect the proxy response, and decide if you want to continue processing (via express-http-proxy) or call ```next()``` to return control to express.

```js
app.use('/proxy', proxy('www.google.com', {
  skipToNextHandlerFilter: function(proxyRes) {
    return proxyRes.statusCode === 404;
  }
}));
```

### proxyErrorHandler

By default, ```express-http-proxy``` will pass any errors except ECONNRESET to
next, so that your application can handle or react to them, or just drop
through to your default error handling.   ECONNRESET errors are immediately
returned to the user for historical reasons.

If you would like to modify this behavior, you can provide your own ```proxyErrorHandler```.


```js
// Example of skipping all error handling.

app.use(proxy('localhost:12346', {
  proxyErrorHandler: function(err, res, next) {
    next(err);
  }
}));


// Example of rolling your own

app.use(proxy('localhost:12346', {
  proxyErrorHandler: function(err, res, next) {
    switch (err && err.code) {
      case 'ECONNRESET':    { return res.status(405).send('504 became 405'); }
      case 'ECONNREFUSED':  { return res.status(200).send('gotcher back'); }
      default:              { next(err); }
    }
}}));
```



#### proxyReqOptDecorator  (supports Promise form)

You can override most request options before issuing the proxyRequest.
proxyReqOpt represents the options argument passed to the (http|https).request
module.

NOTE:  req.path cannot be changed via this method;  use ```proxyReqPathResolver``` instead.   (see https://github.com/villadora/express-http-proxy/issues/243)

```js
app.use('/proxy', proxy('www.google.com', {
  proxyReqOptDecorator: function(proxyReqOpts, srcReq) {
    // you can update headers
    proxyReqOpts.headers['Content-Type'] = 'text/html';
    // you can change the method
    proxyReqOpts.method = 'GET';
    return proxyReqOpts;
  }
}));
```

You can use a Promise for async style.

```js
app.use('/proxy', proxy('www.google.com', {
  proxyReqOptDecorator: function(proxyReqOpts, srcReq) {
    return new Promise(function(resolve, reject) {
      proxyReqOpts.headers['Content-Type'] = 'text/html';
      resolve(proxyReqOpts);
    })
  }
}));
```

#### proxyReqBodyDecorator  (supports Promise form)

You can mutate the body content before sending the proxyRequest.

```js
app.use('/proxy', proxy('www.google.com', {
  proxyReqBodyDecorator: function(bodyContent, srcReq) {
    return bodyContent.split('').reverse().join('');
  }
}));
```

You can use a Promise for async style.

```js
app.use('/proxy', proxy('www.google.com', {
  proxyReqBodyDecorator: function(proxyReq, srcReq) {
    return new Promise(function(resolve, reject) {
      http.get('http://dev/null', function (err, res) {
        if (err) { reject(err); }
        resolve(res);
      });
    })
  }
}));
```

#### https

Normally, your proxy request will be made on the same protocol as the `host`
parameter.  If you'd like to force the proxy request to be https, use this
option.

```js
app.use('/proxy', proxy('www.google.com', {
  https: true
}));
```

#### preserveHostHdr

You can copy the host HTTP header to the proxied express server using the `preserveHostHdr` option.

```js
app.use('/proxy', proxy('www.google.com', {
  preserveHostHdr: true
}));
```

#### parseReqBody

The ```parseReqBody``` option allows you to control parsing the request body.
For example, disabling body parsing is useful for large uploads where it would be inefficient
to hold the data in memory.

##### Note: this setting is required for binary uploads.   A future version of this library may handle this for you.

This defaults to true in order to preserve legacy behavior.

When false, no action will be taken on the body and accordingly ```req.body``` will no longer be set.

Note that setting this to false overrides ```reqAsBuffer``` and ```reqBodyEncoding``` below.

```js
app.use('/proxy', proxy('www.google.com', {
  parseReqBody: false
}));
```

#### reqAsBuffer

Note: this is an experimental feature.  ymmv

The ```reqAsBuffer``` option allows you to ensure the req body is encoded as a Node
```Buffer``` when sending a proxied request.   Any value for this is truthy.

This defaults to to false in order to preserve legacy behavior. Note that
the value of ```reqBodyEnconding``` is used as the encoding when coercing strings
(and stringified JSON) to Buffer.

Ignored if ```parseReqBody``` is set to false.

```js
app.use('/proxy', proxy('www.google.com', {
  reqAsBuffer: true
}));
```

#### reqBodyEncoding

Encoding used to decode request body. Defaults to ```utf-8```.

Use ```null``` to preserve as Buffer when proxied request body is a Buffer. (e.g image upload)
Accept any values supported by [raw-body](https://www.npmjs.com/package/raw-body#readme).

The same encoding is used in the intercept method.

Ignored if ```parseReqBody``` is set to false.

```js
app.use('/post', proxy('httpbin.org', {
  reqBodyEncoding: null
}));
```

#### timeout

By default, node does not express a timeout on connections.
Use timeout option to impose a specific timeout.
Timed-out requests will respond with 504 status code and a X-Timeout-Reason header.

```js
app.use('/', proxy('httpbin.org', {
  timeout: 2000  // in milliseconds, two seconds
}));
```

##  Trace debugging

The node-debug module is used to provide a trace debugging capability.

```
DEBUG=express-http-proxy npm run YOUR_PROGRAM
DEBUG=express-http-proxy npm run YOUR_PROGRAM  | grep 'express-http-proxy'   # to filter down to just these messages
```

Will trace the execution of the express-http-proxy module in order to aide debugging.




## Upgrade to 1.0, transition guide and breaking changes

1.
```decorateRequest``` has been REMOVED, and will generate an error when called.  See ```proxyReqOptDecorator``` and ```proxyReqBodyDecorator```.

Resolution:  Most authors will simply need to change the method name for their
decorateRequest method;  if author was decorating reqOpts and reqBody in the
same method, this will need to be split up.


2.
```intercept``` has been REMOVED, and will generate an error when called.  See ```userResDecorator```.

Resolution:  Most authors will simply need to change the method name from ```intercept``` to ```userResDecorator```, and exit the method by returning the value, rather than passing it to a callback.   E.g.:

Before:

```js
app.use('/proxy', proxy('www.google.com', {
  intercept: function(proxyRes, proxyResData, userReq, userRes, cb) {
    data = JSON.parse(proxyResData.toString('utf8'));
    data.newProperty = 'exciting data';
    cb(null,  JSON.stringify(data));
  }
}));
```

Now:

```js
app.use('/proxy', proxy('www.google.com', {
  userResDecorator: function(proxyRes, proxyResData, userReq, userRes) {
    data = JSON.parse(proxyResData.toString('utf8'));
    data.newProperty = 'exciting data';
    return JSON.stringify(data);
  }
}));
```

3.
```forwardPath``` and ```forwardPathAsync``` have been DEPRECATED and will generate a warning when called.  See ```proxyReqPathResolver```.

Resolution:  Simple update the name of either ```forwardPath``` or ```forwardPathAsync``` to ```proxyReqPathResolver```.

## When errors occur on your proxy server

When your proxy server responds with an error, express-http-proxy returns a response with the same status code.  See ```test/catchingErrors``` for syntax details.

When your proxy server times out, express-http-proxy will continue to wait indefinitely for a response, unless you define a ```timeout``` as described above.


## Questions

### Q: Does it support https proxy?

The library will automatically use https if the provided path has 'https://' or ':443'.  You may also set option ```https``` to true to always use https.

You can use ```proxyReqOptDecorator``` to ammend any auth or challenge headers required to succeed https.

### Q: How can I support non-standard certificate chains?

You can use the ability to decorate the proxy request prior to sending.    See ```proxyReqOptDecorator``` for more details.

```js
app.use('/', proxy('internalhost.example.com', {
  proxyReqOptDecorator: function(proxyReqOpts, originalReq) {
    proxyReqOpts.ca =  [caCert, intermediaryCert]
    return proxyReqOpts;
  }
})
```

### Q: How to ignore self-signed certificates ?

You can set the `rejectUnauthorized` value in proxy request options prior to sending.    See ```proxyReqOptDecorator``` for more details.

```js
app.use('/', proxy('internalhost.example.com', {
  proxyReqOptDecorator: function(proxyReqOpts, originalReq) {
    proxyReqOpts.rejectUnauthorized = false
    return proxyReqOpts;
  }
}))
```


## Release Notes

| Release | Notes |
| --- | --- |
| 1.6.3 | [#453] Author should be able to delete headers in userResHeaderDecorator.
| 1.6.2 | Update node.js versions used by ci. |
| 1.6.1 | Minor bug fixes and documentation. |
| 1.6.0 | Do gzip and gunzip aysyncronously.   Test and documentation improvements, dependency updates. |
| 1.5.1 | Fixes bug in stringifying debug messages. |
| 1.5.0 | Fixes bug in `filter` signature.  Fix bug in skipToNextHandler, add expressHttpProxy value to user res when skipped.  Add tests for host as ip address. |
| 1.4.0 | DEPRECATED. Critical bug in the `filter` api.| 
| 1.3.0 | DEPRECATED. Critical bug in the `filter` api. `filter` now supports Promises.  Update linter to eslint.  |
| 1.2.0 | Auto-stream when no decorations are made to req/res. Improved docs, fixes issues in maybeSkipToNexthandler,  allow authors to manage error handling. | 
| 1.1.0 | Add step to allow response headers to be modified.
| 1.0.7 | Update dependencies.  Improve docs on promise rejection.   Fix promise rejection on body limit.   Improve debug output. |
| 1.0.6 | Fixes preserveHostHdr not working, skip userResDecorator on 304, add maybeSkipToNext, test improvements and cleanup. |
| 1.0.5 | Minor documentation and  test patches |
| 1.0.4 | Minor documentation, test, and package fixes |
| 1.0.3 | Fixes 'limit option is not taken into account |
| 1.0.2 | Minor docs corrections. |
| 1.0.1 | Minor docs adjustments. |
| 1.0.0 | Major revision.  <br > REMOVE decorateRequest, ADD proxyReqOptDecorator and proxyReqBodyDecorator. <br />  REMOVE intercept, ADD userResDecorator <br />  userResDecorator supports a Promise form for async operations.  <br /> General cleanup of structure and application of hooks.  Documentation improvements.   Update all dependencies.  Re-organize code as a series of workflow steps, each (potentially) supporting a promise, and creating a reusable pattern for future development. |
| 0.11.0 | Allow author to prevent host from being memoized between requests.   General program cleanup. |
| 0.10.1| Fixed issue where 'body encoding' was being incorrectly set to the character encoding. <br />  Dropped explicit support for node 0.10. <br />   Intercept can now deal with gziped responses. <br />   Author can now 'force https', even if the original request is over http. <br />  Do not call next after ECONNRESET catch. |
| 0.10.0 | Fix regression in forwardPath implementation. |
| 0.9.1 | Documentation updates.  Set 'Accept-Encoding' header to match bodyEncoding. |
| 0.9.0 | Better handling for request body when body is JSON. |
| 0.8.0 | Features:  add forwardPathAsync option <br />Updates:  modernize dependencies <br />Fixes: Exceptions parsing proxied response causes error: Can't set headers after they are sent. (#111) <br />If client request aborts, proxied request is aborted too (#107) |
| 0.7.4 | Move jscs to devDependencies to avoid conflict with nsp. |
| 0.7.3 | Adds a timeout option.   Code organization and small bug fixes. |
| 0.7.2 | Collecting many minor documentation and test improvements. |
| 0.4.0 | Signature of `intercept` callback changed from `function(data, req, res, callback)` to `function(rsp, data, req, res, callback)` where `rsp` is the original response from the target |

## Licence

MIT
<!-- do not want to make nodeinit to complicated, you can edit this whenever you want. -->
