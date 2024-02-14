---
id: 597f24c1dda4e70f53c79c81
title: フィボナッチ数列
challengeType: 1
forumTopicId: 302268
dashedName: fibonacci-sequence
---

# --description--

Write a function to generate the <code>n<sup>th</sup></code> Fibonacci number.

<code>n</code> 番目のフィボナッチ数は以下のように計算されます。

<code>F<sub>n</sub> = F<sub>n-1</sub> + F<sub>n-2</sub></code>

級数の最初の 2 つの項は 0 と 1 です。

したがって、級数は 0、1、1、2、3、5、8、13 です。

# --hints--

`fibonacci` という関数です。

```js
assert(typeof fibonacci === 'function');
```

`fibonacci(2)` は数字を返します。

```js
assert(typeof fibonacci(2) == 'number');
```

`fibonacci(3)` は 2 を返します。

```js
assert.equal(fibonacci(3), 2);
```

`fibonacci(5)` は 5 を返します。

```js
assert.equal(fibonacci(5), 5);
```

`fibonacci(10)` は 55 を返します。

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
