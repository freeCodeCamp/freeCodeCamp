---
id: 597f24c1dda4e70f53c79c81
title: Fibonacci-Folge
challengeType: 1
forumTopicId: 302268
dashedName: fibonacci-sequence
---

# --description--

Write a function to generate the <code>n<sup>th</sup></code> Fibonacci number.

Die <code>n<sup>th</sup></code> Fibonacci-Zahl wird angegeben von:

<code>F<sub>n</sub> = F<sub>n-1</sub> + F<sub>n-2</sub></code>

Die ersten beiden Terme der Reihe sind 0 und 1.

Die Reihe lautet demnach: 0, 1, 1, 2, 3, 5, 8, 13...

# --hints--

`fibonacci` sollte eine Funktion sein.

```js
assert(typeof fibonacci === 'function');
```

`fibonacci(2)` sollte eine Zahl zurückgeben.

```js
assert(typeof fibonacci(2) == 'number');
```

`fibonacci(3)` sollte 2 zurückgeben.

```js
assert.equal(fibonacci(3), 2);
```

`fibonacci(5)` sollte 5 zurückgeben.

```js
assert.equal(fibonacci(5), 5);
```

`fibonacci(10)` sollte 55 zurückgeben.

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
