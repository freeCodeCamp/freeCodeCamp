# math-random

math-random is an drop-in replacement for Math.random that uses cryptographically secure random number generation, where available. It works in both browser and node environments.

[![Build status](https://travis-ci.org/michaelrhodes/math-random.svg?branch=master)](https://travis-ci.org/michaelrhodes/math-random)

## Install

```sh
npm install math-random
```

### Usage

```js
var random = require('math-random')

console.log(random())
=> 0.584293719381094

console.log(random.cryptographic)
=> true || undefined
```

### License
[MIT](http://opensource.org/licenses/MIT)
