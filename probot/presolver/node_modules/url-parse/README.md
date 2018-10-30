# url-parse

[![Made by unshift](https://img.shields.io/badge/made%20by-unshift-00ffcc.svg?style=flat-square)](http://unshift.io)[![Version npm](https://img.shields.io/npm/v/url-parse.svg?style=flat-square)](https://www.npmjs.com/package/url-parse)[![Build Status](https://img.shields.io/travis/unshiftio/url-parse/master.svg?style=flat-square)](https://travis-ci.org/unshiftio/url-parse)[![Dependencies](https://img.shields.io/david/unshiftio/url-parse.svg?style=flat-square)](https://david-dm.org/unshiftio/url-parse)[![Coverage Status](https://img.shields.io/coveralls/unshiftio/url-parse/master.svg?style=flat-square)](https://coveralls.io/r/unshiftio/url-parse?branch=master)[![IRC channel](https://img.shields.io/badge/IRC-irc.freenode.net%23unshift-00a8ff.svg?style=flat-square)](https://webchat.freenode.net/?channels=unshift)

[![Sauce Test Status](https://saucelabs.com/browser-matrix/url-parse.svg)](https://saucelabs.com/u/url-parse)

The `url-parse` method exposes two different API interfaces. The
[`url`](https://nodejs.org/api/url.html) interface that you know from Node.js
and the new [`URL`](https://developer.mozilla.org/en-US/docs/Web/API/URL/URL)
interface that is available in the latest browsers.

In version `0.1` we moved from a DOM based parsing solution, using the `<a>`
element, to a full Regular Expression solution. The main reason for this was
to make the URL parser available in different JavaScript environments as you
don't always have access to the DOM. An example of such environment is the
[`Worker`](https://developer.mozilla.org/en/docs/Web/API/Worker) interface.
The RegExp based solution didn't work well as it required a lot of lookups
causing major problems in FireFox. In version `1.0.0` we ditched the RegExp
based solution in favor of a pure string parsing solution which chops up the
URL into smaller pieces. This module still has a really small footprint as it
has been designed to be used on the client side.

In addition to URL parsing we also expose the bundled `querystringify` module.

## Installation

This module is designed to be used using either browserify or Node.js it's
released in the public npm registry and can be installed using:

```
npm install url-parse
```

## Usage

All examples assume that this library is bootstrapped using:

```js
'use strict';

var URL = require('url-parse');
```

To parse an URL simply call the `URL` method with the URL that needs to be
transformed into an object.

```js
var url = new URL('https://github.com/foo/bar');
```

The `new` keyword is optional but it will save you an extra function invocation.
The constructor takes the following arguments:

- `url` (`String`): A string representing an absolute or relative URL.
- `baseURL` (`Object` | `String`): An object or string representing
  the base URL to use in case `url` is a relative URL. This argument is
  optional and defaults to [`location`](https://developer.mozilla.org/en-US/docs/Web/API/Location)
  in the browser.
- `parser` (`Boolean` | `Function`): This argument is optional and specifies
  how to parse the query string. By default it is `false` so the query string
  is not parsed. If you pass `true` the query string is parsed using the
  embedded `querystringify` module. If you pass a function the query string
  will be parsed using this function.

As said above we also support the Node.js interface so you can also use the
library in this way:

```js
'use strict';

var parse = require('url-parse')
  , url = parse('https://github.com/foo/bar', true);
```

The returned `url` instance contains the following properties:

- `protocol`: The protocol scheme of the URL (e.g. `http:`).
- `slashes`: A boolean which indicates whether the `protocol` is followed by two
  forward slashes (`//`).
- `auth`: Authentication information portion (e.g. `username:password`).
- `username`: Username of basic authentication.
- `password`: Password of basic authentication.
- `host`: Host name with port number.
- `hostname`: Host name without port number.
- `port`: Optional port number.
- `pathname`: URL path.
- `query`: Parsed object containing query string, unless parsing is set to false.
- `hash`: The "fragment" portion of the URL including the pound-sign (`#`).
- `href`: The full URL.
- `origin`: The origin of the URL.

Note that when `url-parse` is used in a browser environment, it will default to
using the browser's current window location as the base URL when parsing all
inputs. To parse an input independently of the browser's current URL (e.g. for
functionality parity with the library in a Node environment), pass an empty
location object as the second parameter:

```js
var parse = require('url-parse');
parse('hostname', {});
```

### URL.set(key, value)

A simple helper function to change parts of the URL and propagating it through
all properties. When you set a new `host` you want the same value to be applied
to `port` if has a different port number, `hostname` so it has a correct name
again and `href` so you have a complete URL.

```js
var parsed = parse('http://google.com/parse-things');

parsed.set('hostname', 'yahoo.com');
console.log(parsed.href); // http://yahoo.com/parse-things
```

It's aware of default ports so you cannot set a port 80 on an URL which has
`http` as protocol.

### URL.toString()

The returned `url` object comes with a custom `toString` method which will
generate a full URL again when called. The method accepts an extra function
which will stringify the query string for you. If you don't supply a function we
will use our default method.

```js
var location = url.toString(); // http://example.com/whatever/?qs=32
```

You would rarely need to use this method as the full URL is also available as
`href` property. If you are using the `URL.set` method to make changes, this
will automatically update.

## Testing

The testing of this module is done in 3 different ways:

1. We have unit tests that run under Node.js. You can run these tests with the
  `npm test` command.
2. Code coverage can be run manually using `npm run coverage`.
3. For browser testing we use Sauce Labs and `zuul`. You can run browser tests
  using the `npm run test-browser` command.

## License

[MIT](LICENSE)
