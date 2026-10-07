<div align="center">
  <img src="logo.png" alt="mrmime" width="320" />
</div>

<div align="center">
  <a href="https://npmjs.org/package/mrmime">
    <img src="https://badgen.now.sh/npm/v/mrmime" alt="version" />
  </a>
  <a href="https://github.com/lukeed/mrmime/actions">
    <img src="https://github.com/lukeed/mrmime/workflows/CI/badge.svg" alt="CI" />
  </a>
  <a href="https://licenses.dev/npm/mrmime">
    <img src="https://licenses.dev/b/npm/mrmime" alt="licenses" />
  </a>
  <a href="https://npmjs.org/package/mrmime">
    <img src="https://badgen.now.sh/npm/dm/mrmime" alt="downloads" />
  </a>
  <a href="https://packagephobia.now.sh/result?p=mrmime">
    <img src="https://packagephobia.now.sh/badge?p=mrmime" alt="install size" />
  </a>
</div>

<div align="center">
  A tiny (2.8kB) and fast utility for getting a MIME type from an extension or filename
</div>


## Features

* Lightweight – 2.8kB gzip<br>
  _Only includes standard mime types; all experimental and vendor-specific mimetypes removed._

* [Performant](#benchmarks)<br>
  _All lookups are O(1) with minimal processing._

* Comprehensive Dictionary<br>
  _Generated from [`mime-db`](https://github.com/jshttp/mime-db), which aggregates the IANA, NGINX, and Apache datasets._

* Customizable<br>
  _Exposes the `mimes` dictionary for easy additions or overrides._

* Supports Native ESM and [Deno](https://deno.land/x/mrmime)<br>
  _Ships with CommonJS and ESM support!_


## Install

```
$ npm install --save mrmime
```


## Usage

```js
import { lookup, mimes } from 'mrmime';

// Get a MIME type
// ---
lookup('txt'); //=> "text/plain"
lookup('.txt'); //=> "text/plain"
lookup('a.txt'); //=> "text/plain"

// Unknown extension
// ---
lookup('.xyz'); //=> undefined

// Add extension to dictionary
// ---
mimes['xyz'] = 'hello/world';
lookup('xyz'); //=> "hello/world"
```


## API

### lookup(input)
Returns: `string` or `undefined`

#### input
Type: `string`

The extension or filename to lookup.

> **Important:**
>   * Any `input` value is cast to string, lowercased, and trimmed.
>   * If a filename or filepath is provided, only the extension will be used.


## Benchmarks

> Running on Node v16.8.0

```
Load times:
  mrmime     0.963ms
  mime/lite  3.281ms
  mime       6.751ms

Benchmark :: plain ("ext")
  mime          x 598,849 ops/sec ±0.28% (94 runs sampled)
  mime/lite     x 536,643 ops/sec ±0.11% (97 runs sampled)
  mrmime        x 835,885 ops/sec ±0.20% (97 runs sampled)

Benchmark :: leading (".ext")
  mime          x 368,656 ops/sec ±0.19% (99 runs sampled)
  mime/lite     x 368,318 ops/sec ±0.13% (97 runs sampled)
  mrmime        x 533,643 ops/sec ±0.10% (96 runs sampled)

Benchmark :: filename ("file.ext")
  mime          x 326,907 ops/sec ±0.17% (95 runs sampled)
  mime/lite     x 327,479 ops/sec ±0.12% (98 runs sampled)
  mrmime        x 512,823 ops/sec ±0.12% (99 runs sampled)
```


## Credits

Of course, a thank-you to [`mime`](https://github.com/broofa/mime) serving the community all these years & for being a all-encompassing MIME type library. I've only ever needed lookup/`getType` functionality – and now ESM support – so `mrmime` can only ever support 1/3 of what `mime` offers, at best.

This would not be possible without the team behind [`mime-db`](https://github.com/jshttp/mime-db), who have painstakingly maintained an amazing database for 7+ years.

Artwork created by [mintinol](https://www.deviantart.com/mintinol), which I found [here](https://www.deviantart.com/mintinol/art/Mr-Mime-373927920).

Finally, thanks to [Tim Branyen](https://github.com/tbranyen) for donating the package name :)


## License

MIT © [Luke Edwards](https://lukeed.com)
