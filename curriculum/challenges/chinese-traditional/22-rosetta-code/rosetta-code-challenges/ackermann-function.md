---
id: 594810f028c0303b75339acf
title: 阿克曼函數
challengeType: 1
forumTopicId: 302223
dashedName: ackermann-function
---

# --description--

The Ackermann function is a classic example of a recursive function, notable especially because it is not a primitive recursive function. It grows very quickly in value, as does the size of its call tree.

阿克曼函數通常定義如下：

$A(m, n) = \\begin{cases} n+1 & \\mbox{if } m = 0 \\\\ A(m-1, 1) & \\mbox{if } m > 0 \\mbox{ and } n = 0 \\\\ A(m-1, A(m, n-1)) & \\mbox{if } m > 0 \\mbox{ and } n > 0. \\end{cases}$

它的參數從不是負的，而且總是有終點。

# --instructions--

編寫一個函數，返回 $A(m, n)$ 的值。 任意精度是首選（因爲函數增長如此之快），但不是必需的。

# --hints--

`ack` 應該是一個函數。

```js
assert(typeof ack === 'function');
```

`ack(0, 0)` 應該返回 1。

```js
assert(ack(0, 0) === 1);
```

`ack(1, 1)` 應該返回 3。

```js
assert(ack(1, 1) === 3);
```

`ack(2, 5)` 應該返回 13。

```js
assert(ack(2, 5) === 13);
```

`ack(3, 3)` 應該返回 61。

```js
assert(ack(3, 3) === 61);
```

# --seed--

## --seed-contents--

```js
function ack(m, n) {

}
```

# --solutions--

```js
function ack(m, n) {
  return m === 0 ? n + 1 : ack(m - 1, n === 0 ? 1 : ack(m, n - 1));
}
```
