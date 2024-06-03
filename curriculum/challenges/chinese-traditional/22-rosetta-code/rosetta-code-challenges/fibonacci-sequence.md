---
id: 597f24c1dda4e70f53c79c81
title: 斐波那契序列
challengeType: 1
forumTopicId: 302268
dashedName: fibonacci-sequence
---

# --description--

Write a function to generate the <code>n<sup>th</sup></code> Fibonacci number.

第 <code>n<sup>th</sup></code> 個斐波那契數由下式給出：

<code>F<sub>n</sub> = F<sub>n-1</sub> + F<sub>n-2</sub></code>

級數的前兩項是 0 和 1。

因此，該系列是：0, 1, 1, 2, 3, 5, 8, 13...

# --hints--

`fibonacci` 應該是一個函數。

```js
assert(typeof fibonacci === 'function');
```

`fibonacci(2)` 應該返回一個數字。

```js
assert(typeof fibonacci(2) == 'number');
```

`fibonacci(3)` 應該返回 2。

```js
assert.equal(fibonacci(3), 2);
```

`fibonacci(5)` 應該返回 5。

```js
assert.equal(fibonacci(5), 5);
```

`fibonacci(10)` 應該返回 55。

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
