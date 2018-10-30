# SuperAgent [![Build Status](https://travis-ci.org/visionmedia/superagent.svg?branch=master)](https://travis-ci.org/visionmedia/superagent)

[![Sauce Test Status](https://saucelabs.com/browser-matrix/shtylman-superagent.svg)](https://saucelabs.com/u/shtylman-superagent)

SuperAgent is a small progressive __client-side__ HTTP request library, and __Node.js__ module with the same API, sporting many high-level HTTP client features. View the [docs](http://visionmedia.github.io/superagent/).

![super agent](http://f.cl.ly/items/3d282n3A0h0Z0K2w0q2a/Screenshot.png)

## Installation

node:

```
$ npm install superagent
```

Works with [browserify](https://github.com/substack/node-browserify) and [webpack](https://github.com/visionmedia/superagent/wiki/SuperAgent-for-Webpack).

```js
request
  .post('/api/pet')
  .send({ name: 'Manny', species: 'cat' }) // sends a JSON post body
  .set('X-API-Key', 'foobar')
  .set('accept', 'json')
  .end((err, res) => {
    // Calling the end function will send the request
  });
```

## Supported browsers and Node versions

Tested browsers:

- Latest Firefox, Chrome, Safari
- Latest Android, iPhone
- IE10 through latest. IE9 with polyfills. Even though IE9 is supported, a polyfill for `window.FormData` is required for `.field()`.

Node 4 or later is required.

## Plugins

SuperAgent is easily extended via plugins.

```js
const nocache = require('superagent-no-cache');
const request = require('superagent');
const prefix = require('superagent-prefix')('/static');

request
  .get('/some-url')
  .query({ action: 'edit', city: 'London' }) // query string
  .use(prefix) // Prefixes *only* this request
  .use(nocache) // Prevents caching of *only* this request
  .end((err, res) => {
    // Do something
  });
```

Existing plugins:
 * [superagent-no-cache](https://github.com/johntron/superagent-no-cache) - prevents caching by including Cache-Control header
 * [superagent-prefix](https://github.com/johntron/superagent-prefix) - prefixes absolute URLs (useful in test environment)
 * [superagent-suffix](https://github.com/timneutkens1/superagent-suffix) - suffix URLs with a given path
 * [superagent-mock](https://github.com/M6Web/superagent-mock) - simulate HTTP calls by returning data fixtures based on the requested URL
 * [superagent-mocker](https://github.com/shuvalov-anton/superagent-mocker) — simulate REST API
 * [superagent-cache](https://github.com/jpodwys/superagent-cache) - A global SuperAgent patch with built-in, flexible caching
  * [superagent-cache-plugin](https://github.com/jpodwys/superagent-cache-plugin) - A SuperAgent plugin with built-in, flexible caching
 * [superagent-jsonapify](https://github.com/alex94puchades/superagent-jsonapify) - A lightweight [json-api](http://jsonapi.org/format/) client addon for superagent
 * [superagent-serializer](https://github.com/zzarcon/superagent-serializer) - Converts server payload into different cases
 * [superagent-use](https://github.com/koenpunt/superagent-use) - A client addon to apply plugins to all requests.
 * [superagent-httpbackend](https://www.npmjs.com/package/superagent-httpbackend) - stub out requests using AngularJS' $httpBackend syntax
 * [superagent-throttle](https://github.com/leviwheatcroft/superagent-throttle) - queues and intelligently throttles requests
 * [superagent-charset](https://github.com/magicdawn/superagent-charset) - add charset support for node's SuperAgent
 * [superagent-verbose-errors](https://github.com/jcoreio/superagent-verbose-errors) - include response body in error messages for failed requests

Please prefix your plugin with `superagent-*` so that it can easily be found by others.

For SuperAgent extensions such as couchdb and oauth visit the [wiki](https://github.com/visionmedia/superagent/wiki).

## Upgrading from previous versions:

Our breaking changes are mostly in rarely used functionality and from stricter error handling.

* [2.x to 3.x](https://github.com/visionmedia/superagent/releases/tag/v3.0.0):
  - Ensure you're running Node 4 or later. We dropped support for Node 0.x.
  - Test code that calls `.send()` multiple times. Invalid calls to `.send()` will now throw instead of sending garbage.
* [1.x to 2.x](https://github.com/visionmedia/superagent/releases/tag/v2.0.0):
  - If you use `.parse()` in the *browser* version, rename it to `.serialize()`.
  - If you rely on `undefined` in query-string values being sent literally as the text "undefined", switch to checking for missing value instead. `?key=undefined` is now `?key` (without a value).
  - If you use `.then()` in Internet Explorer, ensure that you have a polyfill that adds a global `Promise` object.
* 0.x to 1.x:
  - Use `.end(function(err, res){})`. 1-argument version is no longer supported.

## Running node tests

Install dependencies:

```shell
$ npm install
```
Run em!

```shell
$ make test
```

## Running browser tests

Install dependencies:

```shell
$ npm install
```

Start the test runner:

```shell
$ make test-browser-local
```

Visit `http://localhost:4000/__zuul` in your browser.

Edit tests and refresh your browser. You do not have to restart the test runner.


## Packaging Notes for Developers

**npm (for node)** is configured via the `package.json` file and the `.npmignore` file. Key metadata in the `package.json` file is the `version` field which should be changed according to semantic versioning and have a 1-1 correspondence with git tags. So for example, if you were to `git show v1.5.0:package.json | grep version`, you should see `"version": "1.5.0",` and this should hold true for every release. This can be handled via the `npm version` command. Be aware that when publishing, npm will presume the version being published should also be tagged in npm as `latest`, which is OK for normal incremental releases. For betas and minor/patch releases to older versions, be sure to include `--tag` appropriately to avoid an older release getting tagged as `latest`.

**npm (for browser standalone)** When we publish versions to npm, we run `make superagent.js` which generates the standalone `superagent.js` file via `browserify`, and this file is included in the package published to npm (but this file is never checked into the git repository). If users want to install via npm but serve a single `.js` file directly to the browser, the `node_modules/superagent/superagent.js` is a standalone browserified file ready to go for that purpose. It is not minified.

**npm (for browserify)** is handled via the `package.json` `browser` field which allows users to install SuperAgent via npm, reference it from their browser code with `require('superagent')`, and then build their own application bundle via `browserify`, which will use `lib/client.js` as the SuperAgent entrypoint.

**bower** is configured via the `bower.json` file. Bower installs files directly from git/github without any transformation, so you *must* use Browserify or Webpack (or use npm).

## License

MIT
