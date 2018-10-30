# safer-buffer [![travis][travis-image]][travis-url] [![npm][npm-image]][npm-url] [![javascript style guide][standard-image]][standard-url] [![Security Responsible Disclosure][secuirty-image]][secuirty-url]

[travis-image]: https://travis-ci.org/ChALkeR/safer-buffer.svg?branch=master
[travis-url]: https://travis-ci.org/ChALkeR/safer-buffer
[npm-image]: https://img.shields.io/npm/v/safer-buffer.svg
[npm-url]: https://npmjs.org/package/safer-buffer
[standard-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[standard-url]: https://standardjs.com
[secuirty-image]: https://img.shields.io/badge/Security-Responsible%20Disclosure-green.svg
[secuirty-url]: https://github.com/nodejs/security-wg/blob/master/processes/responsible_disclosure_template.md

Modern Buffer API polyfill without footguns, working on Node.js from 0.8 to current.

## How to use?

First, port all `Buffer()` and `new Buffer()` calls to `Buffer.alloc()` and `Buffer.from()` API.

Then, to achieve compatibility with outdated Node.js versions (`<4.5.0` and 5.x `<5.9.0`), use
`const Buffer = require('safer-buffer').Buffer` in all files where you make calls to the new
Buffer API. _Use `var` instead of `const` if you need that for your Node.js version range support._

Also, see the
[porting Buffer](https://github.com/ChALkeR/safer-buffer/blob/master/Porting-Buffer.md) guide.

## Do I need it?

Hopefully, not — dropping support for outdated Node.js versions should be fine nowdays, and that
is the recommended path forward. You _do_ need to port to the `Buffer.alloc()` and `Buffer.from()`
though.

See the [porting guide](https://github.com/ChALkeR/safer-buffer/blob/master/Porting-Buffer.md)
for a better description.

## Why not [safe-buffer](https://npmjs.com/safe-buffer)?

_In short: while `safe-buffer` serves as a polyfill for the new API, it allows old API usage and
itself contains footguns._

`safe-buffer` could be used safely to get the new API while still keeping support for older
Node.js versions (like this module), but while analyzing ecosystem usage of the old Buffer API
I found out that `safe-buffer` is itself causing problems in some cases.

For example, consider the following snippet:

```console
$ cat example.unsafe.js
console.log(Buffer(20))
$ ./node-v6.13.0-linux-x64/bin/node example.unsafe.js
<Buffer 0a 00 00 00 00 00 00 00 28 13 de 02 00 00 00 00 05 00 00 00>
$ standard example.unsafe.js
standard: Use JavaScript Standard Style (https://standardjs.com)
  /home/chalker/repo/safer-buffer/example.unsafe.js:2:13: 'Buffer()' was deprecated since v6. Use 'Buffer.alloc()' or 'Buffer.from()' (use 'https://www.npmjs.com/package/safe-buffer' for '<4.5.0') instead.
```

This is allocates and writes to console an uninitialized chunk of memory.
[standard](https://www.npmjs.com/package/standard) linter (among others) catch that and warn people
to avoid using unsafe API.

Let's now throw in `safe-buffer`!

```console
$ cat example.safe-buffer.js
const Buffer = require('safe-buffer').Buffer
console.log(Buffer(20))
$ standard example.safe-buffer.js
$ ./node-v6.13.0-linux-x64/bin/node example.safe-buffer.js
<Buffer 08 00 00 00 00 00 00 00 28 58 01 82 fe 7f 00 00 00 00 00 00>
```

See the problem? Adding in `safe-buffer` _magically removes the lint warning_, but the behavior
remains identiсal to what we had before, and when launched on Node.js 6.x LTS — this dumps out
chunks of uninitialized memory.
_And this code will still emit runtime warnings on Node.js 10.x and above._

That was done by design. I first considered changing `safe-buffer`, prohibiting old API usage or
emitting warnings on it, but that significantly diverges from `safe-buffer` design. After some
discussion, it was decided to move my approach into a separate package, and _this is that separate
package_.

This footgun is not imaginary — I observed top-downloaded packages doing that kind of thing,
«fixing» the lint warning by blindly including `safe-buffer` without any actual changes.

Also in some cases, even if the API _was_ migrated to use of safe Buffer API — a random pull request
can bring unsafe Buffer API usage back to the codebase by adding new calls — and that could go
unnoticed even if you have a linter prohibiting that (becase of the reason stated above), and even
pass CI. _I also observed that being done in popular packages._

Some examples:
 * [webdriverio](https://github.com/webdriverio/webdriverio/commit/05cbd3167c12e4930f09ef7cf93b127ba4effae4#diff-124380949022817b90b622871837d56cR31)
   (a module with 548 759 downloads/month),
 * [websocket-stream](https://github.com/maxogden/websocket-stream/commit/c9312bd24d08271687d76da0fe3c83493871cf61)
   (218 288 d/m, fix in [maxogden/websocket-stream#142](https://github.com/maxogden/websocket-stream/pull/142)),
 * [node-serialport](https://github.com/node-serialport/node-serialport/commit/e8d9d2b16c664224920ce1c895199b1ce2def48c)
   (113 138 d/m, fix in [node-serialport/node-serialport#1510](https://github.com/node-serialport/node-serialport/pull/1510)),
 * [karma](https://github.com/karma-runner/karma/commit/3d94b8cf18c695104ca195334dc75ff054c74eec)
   (3 973 193 d/m, fix in [karma-runner/karma#2947](https://github.com/karma-runner/karma/pull/2947)),
 * [spdy-transport](https://github.com/spdy-http2/spdy-transport/commit/5375ac33f4a62a4f65bcfc2827447d42a5dbe8b1)
   (5 970 727 d/m, fix in [spdy-http2/spdy-transport#53](https://github.com/spdy-http2/spdy-transport/pull/53)).
 * And there are a lot more over the ecosystem.

I filed a PR at
[mysticatea/eslint-plugin-node#110](https://github.com/mysticatea/eslint-plugin-node/pull/110) to
partially fix that (for cases when that lint rule is used), but it is a semver-major change for
linter rules and presets, so it would take significant time for that to reach actual setups.
_It also hasn't been released yet (2018-03-20)._

Also, `safer-buffer` discourages the usage of `.allocUnsafe()`, which is often done by a mistake.
It still supports it with an explicit concern barier, by placing it under
`require('safer-buffer/dangereous')`.

## But isn't throwing bad?

Not really. It's an error that could be noticed and fixed early, instead of causing havoc later like
unguarded `new Buffer()` calls that end up receiving user input can do.

This package affects only the files where `var Buffer = require('safer-buffer').Buffer` was done, so
it is really simple to keep track of things and make sure that you don't mix old API usage with that.
Also, CI should hint anything that you might have missed.

New commits, if tested, won't land new usage of unsafe Buffer API this way.
_Node.js 10.x also deals with that by printing a runtime depecation warning._

### Would it affect third-party modules?

No, unless you explicitly do an awful thing like monkey-patching or overriding the built-in `Buffer`.
Don't do that.

### But I don't want throwing…

That is also fine!

Also, it could be better in some cases when you don't comprehensive enough test coverage.

In that case — just don't override `Buffer` and use
`var SaferBuffer = require('safer-buffer').Buffer` instead.

That way, everything using `Buffer` natively would still work, but there would be two drawbacks:

* `Buffer.from`/`Buffer.alloc` won't be polyfilled — use `SaferBuffer.from` and
  `SaferBuffer.alloc` instead.
* You are still open to accidentally using the insecure deprecated API — use a linter to catch that.

Note that using a linter to catch accidential `Buffer` constructor usage in this case is strongly
recommended. `Buffer` is not overriden in this usecase, so linters won't get confused.

## «Without footguns»?

Well, it is still possible to do _some_ things with `Buffer` API, e.g. accessing `.buffer` property
on older versions and duping things from there. You shouldn't do that in your code, probabably.

The intention is to remove the most significant footguns that affect lots of packages in the
ecosystem, and to do it in the proper way.

Also, this package doesn't protect against security issues affecting some Node.js versions, so for
usage in your own production code, it is still recommended to update to a Node.js version
[supported by upstream](https://github.com/nodejs/release#release-schedule).
