# matchit [![Build Status](https://travis-ci.org/lukeed/matchit.svg?branch=master)](https://travis-ci.org/lukeed/matchit)

> Quickly parse & match URLs

## Install

```
$ npm install --save matchit
```


## Usage

```js
const { exec, match, parse } = require('matchit');

parse('/foo/:bar/:baz?');
//=> [
//=>   { old:'/foo/:bar', type:0, val:'foo' },
//=>   { old:'/foo/:bar', type:1, val:'bar' },
//=>   { old:'/foo/:bar', type:3, val:'baz' }
//=> ]

const routes = ['/', '/foo', 'bar', '/baz', '/baz/:title','/bat/*'].map(parse);

match('/', routes);
//=> [{ old:'/', type:0, val:'/' }]

match('/foo', routes);
//=> [{ old:'/foo', type:0, val:'foo' }]

match('/bar', routes);
//=> [{ old:'bar', type:0, val:'bar' }]

match('/baz', routes);
//=> [{ old:'/baz', type:0, val:'baz' }]

let a = match('/baz/hello', routes);
//=> [{...}, {...}]
let b = exec('/baz/hello', a);
//=> { title:'hello' }

match('/bat/quz/qut', routes);
//=> [
//=>   { old:'/bat/*', type:0, val:'bat' },
//=>   { old:'/bat/*', type:2, val:'*' }
//=> ]
```


## API

### matchit.parse(route)

Returns: `Array`

The `route` is `split` and parsed into a "definition" array of objects. Each object ("segment") contains a `val`, `type`, and `old` key:

* `old` &mdash; The [`route`](#route)'s original value
* `type` &mdash; An numerical representation of the segment type.
    * `0` - static
    * `1` - parameter
    * `2` - any/wildcard
    * `3` - optional param
* `val` &mdash; The current segment's value. This is either a static value of the name of a parameter

#### route

Type: `String`

A single URL pattern.

> **Note:** Input will be stripped of all leading & trailing `/` characters, so there's no need to normalize your own URLs before passing it to `parse`!


### matchit.match(url, routes)

Returns: `Array`

Returns the [`route`](#route)'s encoded definition. See [`matchit.parse`](#matchitparseroute).

#### url

Type: `String`

The true URL you want to be matched.

#### routes

Type: `Array`

_All_ "parsed" route definitions, via [`matchit.parse`](#matchitparseroute).

> **Important:** Multiple routes will require an Array of `matchit.parse` outputs.


### matchit.exec(url, match)

Returns: `Object`

Returns an object an object of `key:val` pairs, as defined by your [`route`](#route) pattern.

#### url

Type: `String`

The URL (`pathname`) to evaluate.

> **Important:** This should be `pathname`s only as any `querystring`s will be included the response.

#### match

Type: `Array`

The route definition to use, via [`matchit.match`](#matchitmatchurl-routes).


## Benchmarks

> Running Node v10.13.0

```
# Parsing
  matchit               x 1,489,482 ops/sec ±2.89% (97 runs sampled)
  regexparam            x   406,824 ops/sec ±1.38% (96 runs sampled)
  path-to-regexp        x    83,439 ops/sec ±0.89% (96 runs sampled)
  path-to-regexp.parse  x   421,266 ops/sec ±0.13% (97 runs sampled)

# Match (index)
  matchit                x 132,338,546 ops/sec ±0.14% (96 runs sampled)
  regexparam             x  49,889,162 ops/sec ±0.21% (95 runs sampled)
  path-to-regexp.exec    x   7,176,721 ops/sec ±1.23% (94 runs sampled)
  path-to-regexp.tokens  x     102,021 ops/sec ±0.21% (96 runs sampled)

# Match (param)
  matchit                x 2,700,618 ops/sec ±0.92% (95 runs sampled)
  regexparam             x 6,924,653 ops/sec ±0.33% (94 runs sampled)
  path-to-regexp.exec    x 4,715,483 ops/sec ±0.28% (96 runs sampled)
  path-to-regexp.tokens  x    98,182 ops/sec ±0.45% (93 runs sampled)

# Match (optional)
  matchit                x 2,816,313 ops/sec ±0.64% (93 runs sampled)
  regexparam             x 8,437,064 ops/sec ±0.41% (93 runs sampled)
  path-to-regexp.exec    x 5,909,510 ops/sec ±0.22% (97 runs sampled)
  path-to-regexp.tokens  x   101,832 ops/sec ±0.43% (98 runs sampled)

# Match (wildcard)
  matchit                x 3,409,100 ops/sec ±0.34% (98 runs sampled)
  regexparam             x 9,740,429 ops/sec ±0.49% (95 runs sampled)
  path-to-regexp.exec    x 8,740,590 ops/sec ±0.43% (89 runs sampled)
  path-to-regexp.tokens  x   102,109 ops/sec ±0.35% (96 runs sampled)

# Exec
  matchit         x 1,558,321 ops/sec ±0.33% (96 runs sampled)
  regexparam      x 6,966,297 ops/sec ±0.21% (97 runs sampled)
  path-to-regexp  x   102,250 ops/sec ±0.45% (95 runs sampled)
```

## Related

- [regexparam](https://github.com/lukeed/regexparam) - A similar (285B) utility, but relies on `RegExp` instead of String comparisons.


## License

MIT © [Luke Edwards](https://lukeed.com)
