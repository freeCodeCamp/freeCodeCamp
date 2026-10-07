# AbortController polyfill for abortable fetch()

[![npm version](https://badge.fury.io/js/abortcontroller-polyfill.svg)](https://badge.fury.io/js/abortcontroller-polyfill)

Minimal stubs so that the AbortController DOM API for terminating ```fetch()``` requests can be used
in browsers that doesn't yet implement it. This "polyfill" doesn't actually close the connection
when the request is aborted, but it will call ```.catch()``` with ```err.name == 'AbortError'```
instead of ```.then()```.

```js
const controller = new AbortController();
const signal = controller.signal;
fetch('/some/url', {signal})
  .then(res => res.json())
  .then(data => {
    // do something with "data"
  }).catch(err => {
    if (err.name == 'AbortError') {
      return;
    }
  });
// controller.abort(); // can be called at any time
```

You can read about the [AbortController](https://dom.spec.whatwg.org/#aborting-ongoing-activities) API in the DOM specification.

# How to use

```shell
$ npm install --save abortcontroller-polyfill
```

If you're using webpack or similar, you then import it early in your client entrypoint .js file using

```js
import 'abortcontroller-polyfill/dist/polyfill-patch-fetch'
// or:
require('abortcontroller-polyfill/dist/polyfill-patch-fetch')
```

## Using it on browsers without fetch

If you need to support browsers where fetch is not available at all (for example
Internet Explorer 11), you first need to install a fetch polyfill and then
import the ```abortcontroller-polyfill``` afterwards.

The [unfetch](https://www.npmjs.com/package/unfetch) npm package offers a minimal ```fetch()```
implementation (though it does not offer for example a ```Request``` class). If you need a polyfill that
implements the full Fetch specification, use the
[whatwg-fetch](https://www.npmjs.com/package/whatwg-fetch) npm package instead. Typically you will
also need to load a polyfill that implements ES6 promises, for example
[promise-polyfill](https://www.npmjs.com/package/promise-polyfill), and of course you need to avoid
ES6 arrow functions and template literals.

Example projects showing abortable fetch setup so that it works even in Internet Explorer 11, using
both unfetch and GitHub fetch, is available
[here](https://github.com/mo/abortcontroller-polyfill-examples).

## Using it along with 'create-react-app'

create-react-app enforces the no-undef eslint rule at compile time so if your
version of eslint does not list ```AbortController``` etc as a known global for
the ```browser``` environment, then you might run into an compile error like:

```
  'AbortController' is not defined  no-undef
```

This can be worked around by (temporarily, details [here](https://github.com/mo/abortcontroller-polyfill/issues/10)) adding a declaration like:

```js
  const AbortController = window.AbortController;
```

## Using the AbortController/AbortSignal without patching fetch

If you just want to polyfill AbortController/AbortSignal without patching fetch
you can use:

```js
import 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only'
```

# Using it on Node.js

You can either import it as a [ponyfill](https://ponyfill.com/) without modifying globals:

```js
const { AbortController, abortableFetch } = require('abortcontroller-polyfill/dist/cjs-ponyfill');
const { fetch } = abortableFetch(require('node-fetch'));
// or
// import { AbortController, abortableFetch } from 'abortcontroller-polyfill/dist/cjs-ponyfill';
// import _fetch from 'node-fetch';
// const { fetch } = abortableFetch(_fetch);
```
or if you're lazy
```js
global.fetch = require('node-fetch');
require('abortcontroller-polyfill/dist/polyfill-patch-fetch');
```

If you also need a ```Request``` class with support for aborting you can do:

```js
const { AbortController, abortableFetch } = require('abortcontroller-polyfill/dist/cjs-ponyfill');
const _nodeFetch = require('node-fetch');
const { fetch, Request } = abortableFetch({fetch: _nodeFetch, Request: _nodeFetch.Request});

const controller = new AbortController();
const signal = controller.signal;
controller.abort();
fetch(Request("http://api.github.com", {signal}))
  .then(r => r.json())
  .then(j => console.log(j))
  .catch(err => {
      if (err.name === 'AbortError') {
          console.log('aborted');
      }
  })
```

See also Node.js examples [here](https://github.com/mo/abortcontroller-polyfill-examples/tree/master/node)

# Using it on Internet Explorer 11 (MSIE11)

The ```abortcontroller-polyfill``` works on Internet Explorer 11. However, to use it you must first
install separate polyfills for promises and for ```fetch()```. For the promise polyfill, you can
use the ```promise-polyfill``` package from npm, and for ```fetch()``` you can use either the ```whatwg-fetch``` npm package (complete fetch implementation) or the ```unfetch``` npm package (not a complete polyfill but it's only 500 bytes large and covers a lot of the basic use cases).

If you choose ```unfetch```, the imports should be done in this order for example:

```js
import 'promise-polyfill/src/polyfill';
import 'unfetch/polyfill';
import 'abortcontroller-polyfill';
```

See example code [here](https://github.com/mo/abortcontroller-polyfill-examples/tree/master/create-react-app-msie11).

# Using it on Internet Explorer 8 (MSIE8)

The ```abortcontroller-polyfill``` works on Internet Explorer 8. However, since ```github-fetch```
only supports IE 10+ you need to use the ```fetch-ie8``` npm package instead and also note that IE 8 only
implements ES 3 so you need to use the ```es5-shim``` package (or similar). Finally, just like with
IE 11 you also need to polyfill promises. One caveat is that CORS requests will not work out of the box on IE 8.

Here is a basic example of [abortable fetch running in IE 8](https://github.com/mo/abortcontroller-polyfill-examples/tree/master/plain-javascript-fetch-ie8).

# Using it on Legacy Webview

The ```abortcontroller-polyfill``` works on Legacy Webview. However, to use it you must first confirm that the native AbortController and AbortSignal already exist in the environment. Otherwise, it is recommended to use the other solutions mentioned above.

```js
import 'abortcontroller-polyfill/dist/abortsignal-polyfill-only';
```

# Contributors
* [Martin Olsson](https://github.com/mo)
* [Jimmy Wärting](https://github.com/jimmywarting)
* [silverwind](https://github.com/silverwind)
* [Rasmus Jacobsen](https://github.com/rmja)
* [João Vieira](https://github.com/joaovieira)
* [Cyril Auburtin](https://github.com/caub)
* [Leonardo Apiwan](https://github.com/homer0)
* [Jake Champion](https://github.com/JakeChampion)
* [Sai Srinivasan](https://github.com/SairamSrinivasan)
* [Ambar Lee](https://github.com/ambar)
* [Sebastian Silbermann](https://github.com/eps1lon)
* [Yao Shi](https://github.com/TechQuery)
* [Ray Hao](https://github.com/l246804)

# License

MIT
