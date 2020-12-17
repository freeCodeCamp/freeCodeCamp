---
id: 594810f028c0303b75339acf
title: 阿克曼功能
challengeType: 5
videoUrl: ''
---

# --description--

<p> Ackermann函数是递归函数的典型示例，尤其值得注意的是它不是原始递归函数。它的值增长非常快，其调用树的大小也是如此。 </p><p> Ackermann函数通常定义如下： </p> $$ A（m，n）= \\ begin {cases} n + 1＆\\ mbox {if} m = 0 \\\\ A（m-1,1）＆\\ mbox {if} m> 0 \\ mbox {和} n = 0 \\\\ A（m-1，A（m，n-1））＆\\ mbox {if} m> 0 \\ mbox {和} n> 0. \\ end {cases} $$ <p>它的论点永远不会消极，它总是终止。编写一个返回$ A（m，n）$的值的函数。任意精度是首选（因为函数增长如此之快），但不是必需的。 </p>

# --hints--

`ack`是一个功能。

```js
assert(typeof ack === 'function');
```

`ack(0, 0)`应该返回1。

```js
assert(ack(0, 0) === 1);
```

`ack(1, 1)`应该返回3。

```js
assert(ack(1, 1) === 3);
```

`ack(2, 5)`应该返回13。

```js
assert(ack(2, 5) === 13);
```

`ack(3, 3)`应该返回61。

```js
assert(ack(3, 3) === 61);
```

# --solutions--

