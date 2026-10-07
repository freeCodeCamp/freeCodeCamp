<h1>
  <img src="https://raw.githubusercontent.com/dubzzz/pure-rand/main/assets/logo.svg" alt="pure-rand logo" />
</h1>

Fast Pseudorandom number generators (aka PRNG) with purity in mind!

[![Build Status](https://github.com/dubzzz/pure-rand/workflows/Build%20Status/badge.svg?branch=main)](https://github.com/dubzzz/pure-rand/actions)
[![NPM Version](https://badge.fury.io/js/pure-rand.svg)](https://badge.fury.io/js/pure-rand)
[![Monthly Downloads](https://img.shields.io/npm/dm/pure-rand)](https://www.npmjs.com/package/pure-rand)

[![Codecov](https://codecov.io/gh/dubzzz/pure-rand/branch/main/graph/badge.svg)](https://codecov.io/gh/dubzzz/pure-rand)
[![Package Quality](https://packagequality.com/shield/pure-rand.svg)](https://packagequality.com/#?package=pure-rand)
[![Snyk Package Quality](https://snyk.io/advisor/npm-package/pure-rand/badge.svg)](https://snyk.io/advisor/npm-package/pure-rand)

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/dubzzz/pure-rand/labels/good%20first%20issue)
[![License](https://img.shields.io/npm/l/pure-rand.svg)](https://github.com/dubzzz/pure-rand/blob/main/LICENSE)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/dubzzz/pure-rand.svg?style=social)](https://twitter.com/intent/tweet?text=Check%20out%20pure-rand%20by%20%40ndubien%20https%3A%2F%2Fgithub.com%2Fdubzzz%2Fpure-rand%20%F0%9F%91%8D)

## Getting started

**Install it in node via:**

`npm install pure-rand` or `yarn add pure-rand`

**Use it in browser by doing:**

`import * as prand from 'https://unpkg.com/pure-rand/lib/esm/pure-rand.js';`

## Usage

**Simple usage**

```javascript
import prand from 'pure-rand';

const seed = 42;
const rng = prand.xoroshiro128plus(seed);
const firstDiceValue = prand.unsafeUniformIntDistribution(1, 6, rng); // value in {1..6}, here: 2
const secondDiceValue = prand.unsafeUniformIntDistribution(1, 6, rng); // value in {1..6}, here: 4
const thirdDiceValue = prand.unsafeUniformIntDistribution(1, 6, rng); // value in {1..6}, here: 6
```

**Pure usage**

Pure means that the instance `rng` will never be altered in-place. It can be called again and again and it will always return the same value. But it will also return the next `rng`. Here is an example showing how the code above can be translated into its pure version:

```javascript
import prand from 'pure-rand';

const seed = 42;
const rng1 = prand.xoroshiro128plus(seed);
const [firstDiceValue, rng2] = prand.uniformIntDistribution(1, 6, rng1); // value in {1..6}, here: 2
const [secondDiceValue, rng3] = prand.uniformIntDistribution(1, 6, rng2); // value in {1..6}, here: 4
const [thirdDiceValue, rng4] = prand.uniformIntDistribution(1, 6, rng3); // value in {1..6}, here: 6

// You can call: prand.uniformIntDistribution(1, 6, rng1);
// over and over it will always give you back the same value along with a new rng (always producing the same values too).
```

**Independent simulations**

In order to produce independent simulations it can be tempting to instanciate several PRNG based on totally different seeds. While it would produce distinct set of values, the best way to ensure fully unrelated sequences is rather to use jumps. Jump just consists into moving far away from the current position in the generator (eg.: jumping in Xoroshiro 128+ will move you 2<sup>64</sup> generations away from the current one on a generator having a sequence of 2<sup>128</sup> elements).

```javascript
import prand from 'pure-rand';

const seed = 42;
const rngSimulation1 = prand.xoroshiro128plus(seed);
const rngSimulation2 = rngSimulation1.jump(); // not in-place, creates a new instance
const rngSimulation3 = rngSimulation2.jump(); // not in-place, creates a new instance

const diceSim1Value = prand.unsafeUniformIntDistribution(1, 6, rngSimulation1); // value in {1..6}, here: 2
const diceSim2Value = prand.unsafeUniformIntDistribution(1, 6, rngSimulation2); // value in {1..6}, here: 5
const diceSim3Value = prand.unsafeUniformIntDistribution(1, 6, rngSimulation3); // value in {1..6}, here: 6
```

**Non-uniform usage**

While not recommended as non-uniform distribution implies that one or several values from the range will be more likely than others, it might be tempting for people wanting to maximize the throughput.

```javascript
import prand from 'pure-rand';

const seed = 42;
const rng = prand.xoroshiro128plus(seed);
const rand = (min, max) => {
  const out = (rng.unsafeNext() >>> 0) / 0x100000000;
  return min + Math.floor(out * (max - min + 1));
};
const firstDiceValue = rand(1, 6); // value in {1..6}, here: 6
```

**Select your seed**

While not perfect, here is a rather simple way to generate a seed for your PNRG.

```javascript
const seed = Date.now() ^ (Math.random() * 0x100000000);
```

## Documentation

### Pseudorandom number generators

In computer science most random number generators<sup>(1)</sup> are [pseudorandom number generators](https://en.wikipedia.org/wiki/Pseudorandom_number_generator) (abbreviated: PRNG). In other words, they are fully deterministic and given the original seed one can rebuild the whole sequence.

Each PRNG algorithm has to deal with tradeoffs in terms of randomness quality, speed, length of the sequence<sup>(2)</sup>... In other words, it's important to compare relative speed of libraries with that in mind. Indeed, a Mersenne Twister PRNG will not have the same strenghts and weaknesses as a Xoroshiro PRNG, so depending on what you need exactly you might prefer one PRNG over another even if it will be slower.

4 PRNGs come with pure-rand:

- `congruential32`: Linear Congruential generator — \[[more](https://en.wikipedia.org/wiki/Linear_congruential_generator)\]
- `mersenne`: Mersenne Twister generator — \[[more](https://en.wikipedia.org/wiki/Mersenne_Twister)\]
- `xorshift128plus`: Xorshift 128+ generator — \[[more](https://en.wikipedia.org/wiki/Xorshift)\]
- `xoroshiro128plus`: Xoroshiro 128+ generator — \[[more](https://en.wikipedia.org/wiki/Xorshift)\]

Our recommendation is `xoroshiro128plus`. But if you want to use another one, you can replace it by any other PRNG provided by pure-rand in the examples above.

### Distributions

Once you are able to generate random values, next step is to scale them into the range you want. Indeed, you probably don't want a floating point value between 0 (included) and 1 (excluded) but rather an integer value between 1 and 6 if you emulate a dice or any other range based on your needs.

At this point, simple way would be to do `min + floor(random() * (max - min + 1))` but actually it will not generate the values with equal probabilities even if you use the best PRNG in the world to back `random()`. In order to have equal probabilities you need to rely on uniform distributions<sup>(3)</sup> which comes built-in in some PNRG libraries.

pure-rand provides 3 built-in functions for uniform distributions of values:

- `uniformIntDistribution(min, max, rng)`
- `uniformBigIntDistribution(min, max, rng)` - with `min` and `max` being `bigint`
- `uniformArrayIntDistribution(min, max, rng)` - with `min` and `max` being instances of `ArrayInt = {sign, data}` ie. sign either 1 or -1 and data an array of numbers between 0 (included) and 0xffffffff (included)

And their unsafe equivalents to change the PRNG in-place.

### Extra helpers

Some helpers are also provided in order to ease the use of `RandomGenerator` instances:

- `prand.generateN(rng: RandomGenerator, num: number): [number[], RandomGenerator]`: generates `num` random values using `rng` and return the next `RandomGenerator`
- `prand.skipN(rng: RandomGenerator, num: number): RandomGenerator`: skips `num` random values and return the next `RandomGenerator`

## Comparison

### Summary

The chart has been split into three sections:

- section 1: native `Math.random()`
- section 2: without uniform distribution of values
- section 3: with uniform distribution of values (not supported by all libraries)

<img src="https://raw.githubusercontent.com/dubzzz/pure-rand/main/perf/comparison.svg" alt="Comparison against other libraries" />

### Process

In order to compare the performance of the libraries, we aked them to shuffle an array containing 1,000,000 items (see [code](https://github.com/dubzzz/pure-rand/blob/556ec331c68091c5d56e9da1266112e8ea222b2e/perf/compare.cjs)).

We then split the measurements into two sections:

- one for non-uniform distributions — _known to be slower as it implies re-asking for other values to the PRNG until the produced value fall into the acceptable range of values_
- one for uniform distributions

The recommended setup for pure-rand is to rely on our Xoroshiro128+. It provides a long enough sequence of random values, has built-in support for jump, is really efficient while providing a very good quality of randomness.

### Performance

**Non-Uniform**

| Library                  | Algorithm         | Mean time (ms) | Compared to pure-rand |
| ------------------------ | ----------------- | -------------- | --------------------- |
| native \(node 16.19.1\)  | Xorshift128+      | 33.3           | 1.4x slower           |
| **pure-rand _@6.0.0_**   | **Xoroshiro128+** | **24.5**       | **reference**         |
| pure-rand _@6.0.0_       | Xorshift128+      | 25.0           | similar               |
| pure-rand _@6.0.0_       | Mersenne Twister  | 30.8           | 1.3x slower           |
| pure-rand _@6.0.0_       | Congruential‍     | 22.6           | 1.1x faster           |
| seedrandom _@3.0.5_      | Alea              | 28.1           | 1.1x slower           |
| seedrandom _@3.0.5_      | Xorshift128       | 28.8           | 1.2x slower           |
| seedrandom _@3.0.5_      | Tyche-i           | 28.6           | 1.2x slower           |
| seedrandom _@3.0.5_      | Xorwow            | 32.0           | 1.3x slower           |
| seedrandom _@3.0.5_      | Xor4096           | 32.2           | 1.3x slower           |
| seedrandom _@3.0.5_      | Xorshift7         | 33.5           | 1.4x slower           |
| @faker-js/faker _@7.6.0_ | Mersenne Twister  | 109.1          | 4.5x slower           |
| chance _@1.1.10_         | Mersenne Twister  | 142.9          | 5.8x slower           |

**Uniform**

| Library                | Algorithm         | Mean time (ms) | Compared to pure-rand |
| ---------------------- | ----------------- | -------------- | --------------------- |
| **pure-rand _@6.0.0_** | **Xoroshiro128+** | **53.5**       | **reference**         |
| pure-rand _@6.0.0_     | Xorshift128+      | 52.2           | similar               |
| pure-rand _@6.0.0_     | Mersenne Twister  | 61.6           | 1.2x slower           |
| pure-rand _@6.0.0_     | Congruential‍     | 57.6           | 1.1x slower           |
| random-js @2.1.0       | Mersenne Twister  | 119.6          | 2.2x slower           |

> System details:
>
> - OS: Linux 5.15 Ubuntu 22.04.2 LTS 22.04.2 LTS (Jammy Jellyfish)
> - CPU: (2) x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz
> - Memory: 5.88 GB / 6.78 GB
> - Container: Yes
> - Node: 16.19.1 - /opt/hostedtoolcache/node/16.19.1/x64/bin/node
>
> _Executed on default runners provided by GitHub Actions_

---

(1) — Not all as there are also [hardware-based random number generator](https://en.wikipedia.org/wiki/Hardware_random_number_generator).

(2) — How long it takes to reapeat itself?

(3) — While most users don't really think of it, uniform distribution is key! Without it entries might be biased towards some values and make some others less probable. The naive `rand() % numValues` is a good example of biased version as if `rand()` is uniform in `0, 1, 2` and `numValues` is `2`, the probabilities are: `P(0) = 67%`, `P(1) = 33%` causing `1` to be less probable than `0`
