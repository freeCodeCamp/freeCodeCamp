# readable-stream

***Node.js core streams for userland*** [![Build Status](https://travis-ci.com/nodejs/readable-stream.svg?branch=master)](https://travis-ci.com/nodejs/readable-stream)


[![NPM](https://nodei.co/npm/readable-stream.png?downloads=true&downloadRank=true)](https://nodei.co/npm/readable-stream/)
[![NPM](https://nodei.co/npm-dl/readable-stream.png?&months=6&height=3)](https://nodei.co/npm/readable-stream/)


[![Sauce Test Status](https://saucelabs.com/browser-matrix/readabe-stream.svg)](https://saucelabs.com/u/readabe-stream)

```bash
npm install --save readable-stream
```

This package is a mirror of the streams implementations in Node.js.

Full documentation may be found on the [Node.js website](https://nodejs.org/dist/v10.18.1/docs/api/stream.html).

If you want to guarantee a stable streams base, regardless of what version of
Node you, or the users of your libraries are using, use **readable-stream** *only* and avoid the *"stream"* module in Node-core, for background see [this blogpost](http://r.va.gg/2014/06/why-i-dont-use-nodes-core-stream-module.html).

As of version 2.0.0 **readable-stream** uses semantic versioning.

## Version 3.x.x

v3.x.x of `readable-stream` is a cut from Node 10. This version supports Node 6, 8, and 10, as well as evergreen browsers, IE 11 and latest Safari. The breaking changes introduced by v3 are composed by the combined breaking changes in [Node v9](https://nodejs.org/en/blog/release/v9.0.0/) and [Node v10](https://nodejs.org/en/blog/release/v10.0.0/), as follows:

1. Error codes: https://github.com/nodejs/node/pull/13310,
   https://github.com/nodejs/node/pull/13291,
   https://github.com/nodejs/node/pull/16589,
   https://github.com/nodejs/node/pull/15042,
   https://github.com/nodejs/node/pull/15665,
   https://github.com/nodejs/readable-stream/pull/344
2. 'readable' have precedence over flowing
   https://github.com/nodejs/node/pull/18994
3. make virtual methods errors consistent
   https://github.com/nodejs/node/pull/18813
4. updated streams error handling
   https://github.com/nodejs/node/pull/18438
5. writable.end should return this.
   https://github.com/nodejs/node/pull/18780
6. readable continues to read when push('')
   https://github.com/nodejs/node/pull/18211
7. add custom inspect to BufferList
   https://github.com/nodejs/node/pull/17907
8. always defer 'readable' with nextTick
   https://github.com/nodejs/node/pull/17979

## Version 2.x.x
v2.x.x of `readable-stream` is a cut of the stream module from Node 8 (there have been no semver-major changes from Node 4 to 8). This version supports all Node.js versions from 0.8, as well as evergreen browsers and IE 10 & 11.

### Big Thanks

Cross-browser Testing Platform and Open Source <3 Provided by [Sauce Labs][sauce]

# Usage

You can swap your `require('stream')` with `require('readable-stream')`
without any changes, if you are just using one of the main classes and
functions.

```js
const {
  Readable,
  Writable,
  Transform,
  Duplex,
  pipeline,
  finished
} = require('readable-stream')
````

Note that `require('stream')` will return `Stream`, while
`require('readable-stream')` will return `Readable`. We discourage using
whatever is exported directly, but rather use one of the properties as
shown in the example above.

# Streams Working Group

`readable-stream` is maintained by the Streams Working Group, which
oversees the development and maintenance of the Streams API within
Node.js. The responsibilities of the Streams Working Group include:

* Addressing stream issues on the Node.js issue tracker.
* Authoring and editing stream documentation within the Node.js project.
* Reviewing changes to stream subclasses within the Node.js project.
* Redirecting changes to streams from the Node.js project to this
  project.
* Assisting in the implementation of stream providers within Node.js.
* Recommending versions of `readable-stream` to be included in Node.js.
* Messaging about the future of streams to give the community advance
  notice of changes.

<a name="members"></a>
## Team Members

* **Calvin Metcalf** ([@calvinmetcalf](https://github.com/calvinmetcalf)) &lt;calvin.metcalf@gmail.com&gt;
  - Release GPG key: F3EF5F62A87FC27A22E643F714CE4FF5015AA242
* **Mathias Buus** ([@mafintosh](https://github.com/mafintosh)) &lt;mathiasbuus@gmail.com&gt;
* **Matteo Collina** ([@mcollina](https://github.com/mcollina)) &lt;matteo.collina@gmail.com&gt;
  - Release GPG key: 3ABC01543F22DD2239285CDD818674489FBC127E
* **Irina Shestak** ([@lrlna](https://github.com/lrlna)) &lt;shestak.irina@gmail.com&gt;
* **Yoshua Wyuts** ([@yoshuawuyts](https://github.com/yoshuawuyts)) &lt;yoshuawuyts@gmail.com&gt;

[sauce]: https://saucelabs.com
