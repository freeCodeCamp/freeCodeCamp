---
id: 597f24c1dda4e70f53c79c81
title: Послідовність Фібоначчі
challengeType: 1
forumTopicId: 302268
dashedName: fibonacci-sequence
---

# --description--

Напишіть функцію для створення числа Фібоначчі <code>n<sup>th</sup></code>.

Число Фібоначчі <code>n<sup>th</sup></code>задається:

<code>F<sub>n</sub> = F<sub>n-1</sub> + F<sub>n-2</sub></code>

Першими двома членами послідовностей є 0 і 1.

Отже, послідовність наступна: 0, 1, 1, 2, 3, 5, 8, 13...

# --hints--

`fibonacci` має бути функцією.

```js
assert(typeof fibonacci === 'function');
```

`fibonacci(2)` має повернути число.

```js
assert(typeof fibonacci(2) == 'number');
```

`fibonacci(3)` має повернути число 2.

```js
assert.equal(fibonacci(3), 2);
```

`fibonacci(5)` має повернути число 5.

```js
assert.equal(fibonacci(5), 5);
```

`fibonacci(10)` має повернути число 55.

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
