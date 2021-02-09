---
id: 5900f5201000cf542c510032
title: 'Problem 435: Polynomials of Fibonacci numbers'
challengeType: 5
forumTopicId: 302106
dashedName: problem-435-polynomials-of-fibonacci-numbers
---

# --description--

The Fibonacci numbers {fn, n ≥ 0} are defined recursively as fn = fn-1 + fn-2 with base cases f0 = 0 and f1 = 1.

Define the polynomials {Fn, n ≥ 0} as Fn(x) = ∑fixi for 0 ≤ i ≤ n.

For example, F7(x) = x + x2 + 2x3 + 3x4 + 5x5 + 8x6 + 13x7, and F7(11) = 268357683.

Let n = 1015. Find the sum \[∑0≤x≤100 Fn(x)] mod 1307674368000 (= 15!).

# --hints--

`euler435()` should return 252541322550.

```js
assert.strictEqual(euler435(), 252541322550);
```

# --seed--

## --seed-contents--

```js
function euler435() {

  return true;
}

euler435();
```

# --solutions--

```js
// solution required
```
