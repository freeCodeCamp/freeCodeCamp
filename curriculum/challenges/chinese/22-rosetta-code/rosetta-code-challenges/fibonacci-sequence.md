---
id: 597f24c1dda4e70f53c79c81
title: 斐波那契序列
challengeType: 1
forumTopicId: 302268
dashedName: fibonacci-sequence
---

# --description--

Write a function to generate the <code>n<sup>th</sup></code> Fibonacci number.

第 <code>n<sup>th</sup></code> 个斐波那契数由下式给出：

<code>F<sub>n</sub> = F<sub>n-1</sub> + F<sub>n-2</sub></code>

级数的前两项是 0 和 1。

因此，该系列是：0, 1, 1, 2, 3, 5, 8, 13...

# --hints--

`fibonacci` 应该是一个函数。

```js
assert(typeof fibonacci === 'function');
```

`fibonacci(2)` 应该返回一个数字。

```js
assert(typeof fibonacci(2) == 'number');
```

`fibonacci(3)` 应该返回 2。

```js
assert.equal(fibonacci(3), 2);
```

`fibonacci(5)` 应该返回 5。

```js
assert.equal(fibonacci(5), 5);
```

`fibonacci(10)` 应该返回 55。

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
