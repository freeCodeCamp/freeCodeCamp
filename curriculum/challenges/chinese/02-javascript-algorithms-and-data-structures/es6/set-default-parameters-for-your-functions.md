---
id: 587d7b88367417b2b2512b46
title: 设置函数的默认参数
challengeType: 1
forumTopicId: 301209
---

# --description--

ES6 里允许给函数传入<dfn>默认参数</dfn>，来构建更加灵活的函数。

请看以下代码：

```js
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous
```

默认参数会在参数没有被指定（值为 undefined ）的时候起作用。在上面的例子中，参数`name`会在没有得到新的值的时候，默认使用值 "Anonymous"。你还可以给多个参数赋予默认值。

# --instructions--

给函数`increment`加上默认参数，使得在`value`没有被赋值的时候，默认给`number`加1。

# --hints--

`increment(5, 2)`的结果应该为`7`。

```js
assert(increment(5, 2) === 7);
```

`increment(5)`的结果应该为`6`。

```js
assert(increment(5) === 6);
```

参数`value`的默认值应该为`1`。

```js
assert(code.match(/value\s*=\s*1/g));
```

# --solutions--

