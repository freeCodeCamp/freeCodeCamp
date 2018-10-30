# EventSource [![npm version](http://img.shields.io/npm/v/eventsource.svg?style=flat-square)](http://browsenpm.org/package/eventsource)[![Build Status](http://img.shields.io/travis/EventSource/eventsource/master.svg?style=flat-square)](https://travis-ci.org/EventSource/eventsource)[![NPM Downloads](https://img.shields.io/npm/dm/eventsource.svg?style=flat-square)](http://npm-stat.com/charts.html?package=eventsource&from=2015-09-01)[![Dependencies](https://img.shields.io/david/EventSource/eventsource.svg?style=flat-square)](https://david-dm.org/EventSource/eventsource)

This library is a pure JavaScript implementation of the [EventSource](https://html.spec.whatwg.org/multipage/server-sent-events.html#server-sent-events) client. The API aims to be W3C compatible.

You can use it with Node.js or as a browser polyfill for
[browsers that don't have native `EventSource` support](http://caniuse.com/#feat=eventsource).

## Install

    npm install eventsource

## Example

    npm install
    node ./example/sse-server.js
    node ./example/sse-client.js    # Node.js client
    open http://localhost:8080      # Browser client - both native and polyfill
    curl http://localhost:8080/sse  # Enjoy the simplicity of SSE

## Browser Polyfill

Just add `example/eventsource-polyfill.js` file to your web page:

```html
<script src=/eventsource-polyfill.js></script>
```

Now you will have two global constructors:

```javascript
window.EventSourcePolyfill
window.EventSource // Unchanged if browser has defined it. Otherwise, same as window.EventSourcePolyfill
```

If you're using [webpack](https://webpack.github.io/) or [browserify](http://browserify.org/)
you can of course build your own. (The `example/eventsource-polyfill.js` is built with webpack).

## Extensions to the W3C API

### Setting HTTP request headers

You can define custom HTTP headers for the initial HTTP request. This can be useful for e.g. sending cookies
or to specify an initial `Last-Event-ID` value.

HTTP headers are defined by assigning a `headers` attribute to the optional `eventSourceInitDict` argument:

```javascript
var eventSourceInitDict = {headers: {'Cookie': 'test=test'}};
var es = new EventSource(url, eventSourceInitDict);
```

### Allow unauthorized HTTPS requests

By default, https requests that cannot be authorized will cause the connection to fail and an exception
to be emitted. You can override this behaviour, along with other https options:

```javascript
var eventSourceInitDict = {https: {rejectUnauthorized: false}};
var es = new EventSource(url, eventSourceInitDict);
```

Note that for Node.js < v0.10.x this option has no effect - unauthorized HTTPS requests are *always* allowed.

### HTTP status code on error events

Unauthorized and redirect error status codes (for example 401, 403, 301, 307) are available in the `status` property in the error event.

```javascript
es.onerror = function (err) {
  if (err) {
    if (err.status === 401 || err.status === 403) {
      console.log('not authorized');
    }
  }
};
```

### HTTP/HTTPS proxy

You can define a `proxy` option for the HTTP request to be used. This is typically useful if you are behind a corporate firewall.

```javascript
var es = new EventSource(url, {proxy: 'http://your.proxy.com'});
```


## License

MIT-licensed. See LICENSE
