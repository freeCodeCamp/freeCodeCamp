---
id: 594810f028c0303b75339ad5
title: 和组合
challengeType: 5
videoUrl: ''
---

# --description--

<p>在严格的<a href='https://en.wikipedia.org/wiki/Functional programming' title='wp：函数式编程'>函数编程</a>和<a href='https://en.wikipedia.org/wiki/lambda calculus' title='wp：lambda演算'>lambda演算中</a> ，函数（lambda表达式）没有状态，只允许引用封闭函数的参数。这排除了递归函数的通常定义，其中函数与变量的状态相关联，并且该变量的状态在函数体中使用。 </p><p> <a href='http://mvanier.livejournal.com/2897.html'>Y组合</a>器本身是一个无状态函数，当应用于另一个无状态函数时，它返回函数的递归版本。 Y组合器是这类函数中最简单的一种，称为<a href='https://en.wikipedia.org/wiki/Fixed-point combinator' title='wp：定点组合器'>定点组合器</a> 。 </p>任务： <pre> <code>Define the stateless Y combinator function and use it to compute &#x3C;a href="https://en.wikipedia.org/wiki/Factorial" title="wp: factorial">factorial&#x3C;/a>.</code> </pre><p> <code>factorial(N)</code>功能已经给你了。另见<a href='http://vimeo.com/45140590'>Jim Weirich：功能编程中的冒险</a> 。 </p>

# --hints--

Y必须返回一个函数

```js
assert.equal(typeof Y((f) => (n) => n), 'function');
```

factorial（1）必须返回1。

```js
assert.equal(factorial(1), 1);
```

factorial（2）必须返回2。

```js
assert.equal(factorial(2), 2);
```

factorial（3）必须返回6。

```js
assert.equal(factorial(3), 6);
```

factorial（4）必须返回24。

```js
assert.equal(factorial(4), 24);
```

factorial（10）必须返回3628800。

```js
assert.equal(factorial(10), 3628800);
```

# --solutions--

