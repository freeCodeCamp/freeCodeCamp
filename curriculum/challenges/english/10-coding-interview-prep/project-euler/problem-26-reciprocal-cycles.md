---
id: 5900f3861000cf542c50fe99
title: 'Problem 26: Reciprocal cycles'
challengeType: 5
forumTopicId: 301908
dashedName: problem-26-reciprocal-cycles
---

# --description--

A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:

<div style='padding-left: 4em; display: inline-grid; grid-template-rows: auto; row-gap: 7px;'><div><sup>1</sup>/<sub>2</sub> = 0.5</div><div><sup>1</sup>/<sub>3</sub> = 0.(3)</div><div><sup>1</sup>/<sub>4</sub> = 0.25</div><div><sup>1</sup>/<sub>5</sub> = 0.2</div><div><sup>1</sup>/<sub>6</sub> = 0.1(6)</div><div><sup>1</sup>/<sub>7</sub> = 0.(142857)</div><div><sup>1</sup>/<sub>8</sub> = 0.125</div><div><sup>1</sup>/<sub>9</sub> = 0.(1)</div><div><sup>1</sup>/<sub>10</sub> = 0.1</div></div>

Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that <sup>1</sup>/<sub>7</sub> has a 6-digit recurring cycle.

Find the value of `d` &lt; `n` for which <sup>1</sup>/<sub>d</sub> contains the longest recurring cycle in its decimal fraction part.

# --hints--

`reciprocalCycles(700)` should return a number.

```js
assert(typeof reciprocalCycles(700) === 'number');
```

`reciprocalCycles(700)` should return 659.

```js
assert(reciprocalCycles(700) == 659);
```

`reciprocalCycles(800)` should return 743.

```js
assert(reciprocalCycles(800) == 743);
```

`reciprocalCycles(900)` should return 887.

```js
assert(reciprocalCycles(900) == 887);
```

`reciprocalCycles(1000)` should return 983.

```js
assert(reciprocalCycles(1000) == 983);
```

# --seed--

## --seed-contents--

```js
function reciprocalCycles(n) {

  return n;
}

reciprocalCycles(1000);
```

# --solutions--

```js
// solution required
```
