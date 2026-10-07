# hexoid [![build status](https://badgen.net/github/status/lukeed/hexoid)](https://github.com/lukeed/hexoid/actions) [![codecov](https://badgen.now.sh/codecov/c/github/lukeed/hexoid)](https://codecov.io/gh/lukeed/hexoid)

> A tiny (190B) and [extremely fast](#benchmarks) utility to generate random IDs of fixed length

_**Hexadecimal object IDs.** Available for Node.js and the browser._<br>Generate randomized output strings of fixed length using lowercased hexadecimal pairs.

> **Notice:** Please note that this is not a cryptographically secure (CSPRNG) generator.

Additionally, this module is delivered as:

* **CommonJS**: [`dist/index.js`](https://unpkg.com/hexoid/dist/index.js)
* **ES Module**: [`dist/index.mjs`](https://unpkg.com/hexoid/dist/index.mjs)
* **UMD**: [`dist/index.min.js`](https://unpkg.com/hexoid/dist/index.min.js)

## Install

```
$ npm install --save hexoid
```


## Usage

```js
import hexoid from 'hexoid';

const toID = hexoid();
// length = 16 (default)
toID(); //=> '52032fedb951da00'
toID(); //=> '52032fedb951da01'
toID(); //=> '52032fedb951da02'

// customize length
hexoid(25)(); //=> '065359875047c63a037200e00'
hexoid(32)(); //=> 'ca8e4aec7f139d94fcab9cab2eb89f00'
hexoid(48)(); //=> 'c19a4deb5cdeca68534930e67bd0a2f4ed45988724d8d200'
```


## API

### hexoid(length?)
Returns: `() => string`

Creates the function that will generate strings.

#### length
Type: `Number`<br>
Default: `16`

Then length of the output string.

> **Important:** Your risk of collisions decreases with longer strings!<br>Please be aware of the [Birthday Problem](https://betterexplained.com/articles/understanding-the-birthday-paradox/)! You may need more combinations than you'd expect.

The **maximum combinations** are known given the following formula:

```js
const combos = 256 ** (len/2);
```


## Benchmarks

> Running on Node.js v10.13.0

```
Validation (length = 16):
  ✔ hashids/fixed        (example: "LkQWjnegYbwZ1p0G")
  ✔ nanoid/non-secure    (example: "sLlVL5X3M5k2fo58")
  ✔ uid                  (example: "3d0ckwcnjiuu91hj")
  ✔ hexoid               (example: "de96b62e663ef300")
Benchmark (length = 16):
  hashids/fixed        x     349,462 ops/sec ±0.28% (93 runs sampled)
  nanoid/non-secure    x   3,337,573 ops/sec ±0.28% (96 runs sampled)
  uid                  x   3,553,482 ops/sec ±0.51% (90 runs sampled)
  hexoid               x  81,081,364 ops/sec ±0.18% (96 runs sampled)


Validation (length = 25):
  ✔ cuid                 (example: "ck7lj5hbf00000v7c9gox6yfh")
  ✔ hashids/fixed        (example: "r9JOyLkQWjnegYbwZ1p0GDXNm")
  ✔ nanoid/non-secure    (example: "hI202PVPJQRNrP6o6z4pXz4m0")
  ✔ uid                  (example: "9904e9w130buxaw7n8358mn2f")
  ✔ hexoid               (example: "01dfab2c14e37768eb7605a00")
Benchmark (length = 25):
  cuid                 x     161,636 ops/sec ±1.36% (89 runs sampled)
  hashids/fixed        x     335,439 ops/sec ±2.40% (94 runs sampled)
  nanoid/non-secure    x   2,254,073 ops/sec ±0.23% (96 runs sampled)
  uid                  x   2,483,275 ops/sec ±0.38% (95 runs sampled)
  hexoid               x  75,715,843 ops/sec ±0.27% (95 runs sampled)


Validation (length = 36):
  ✔ uuid/v1              (example: "c3dc1ed0-629a-11ea-8bfb-8ffc49585f54")
  ✔ uuid/v4              (example: "8c89f0ca-f01e-4c84-bd71-e645bab84552")
  ✔ hashids/fixed        (example: "EVq3Pr9JOyLkQWjnegYbwZ1p0GDXNmRBlAxg")
  ✔ @lukeed/uuid         (example: "069ad676-48f9-4452-b11d-f20c3872dc1f")
  ✔ nanoid/non-secure    (example: "jAZjrcDmHH6P1rT9EFdCdHUpF440SjAKwb2A")
  ✔ uid                  (example: "5mhi30lgy5d0glmuy81llelbzdko518ow1sx")
  ✔ hexoid               (example: "615209331f0b4630acf69999ccfc95a23200")
Benchmark (length = 36):
  uuid/v1              x   1,487,947 ops/sec ±0.18% (98 runs sampled)
  uuid/v4              x     334,868 ops/sec ±1.08% (90 runs sampled)
  @lukeed/uuid         x   6,352,445 ops/sec ±0.27% (91 runs sampled)
  hashids/fixed        x     322,914 ops/sec ±0.27% (93 runs sampled)
  nanoid/non-secure    x   1,592,708 ops/sec ±0.25% (91 runs sampled)
  uid                  x   1,789,492 ops/sec ±0.29% (92 runs sampled)
  hexoid               x  71,746,692 ops/sec ±0.29% (93 runs sampled)
```

## Related

- [uid](https://github.com/lukeed/uid) - A smaller (134B) but slower variant of this module with a different API
- [@lukeed/uuid](https://github.com/lukeed/uuid) - A tiny (230B), fast, and cryptographically secure UUID (V4) generator for Node and the browser


## License

MIT © [Luke Edwards](https://lukeed.com)
