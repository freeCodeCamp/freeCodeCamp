---
id: 597f24c1dda4e70f53c79c81
title: Fibonacci sequence
challengeType: 1
forumTopicId: 302268
dashedName: fibonacci-sequence
---

# --description--

Write a function to generate the <code>n<sup>th</sup></code> Fibonacci number.

The <code>n<sup>th</sup></code> Fibonacci number is given by:

<code>F<sub>n</sub> = F<sub>n-1</sub> + F<sub>n-2</sub></code>

The first two terms of the series are 0 and 1.

Hence, the series is: 0, 1, 1, 2, 3, 5, 8, 13...

# --hints--

`fibonacci` should be a function.

```js
assert(typeof fibonacci === 'function');
```

`fibonacci(2)` should return a number.

```js
assert(typeof fibonacci(2) == 'number');
```

`fibonacci(3)` should return 2.

```js
assert.equal(fibonacci(3), 2);
```

`fibonacci(5)` should return 5.

```js
assert.equal(fibonacci(5), 5);
```

`fibonacci(10)` should return 55.

```js
assert.equal(fibonacci(10), 55);
```

# --seed--

## --seed-contents--

```js
function fibonacci(n) {

}
```

# --solutions--

```js
function fibonacci(n) {
  let a = 0, b = 1, t;
  while (--n >= 0) {
    t = a;
    a = b;
    b += t;
  }
  return a;
}
```
