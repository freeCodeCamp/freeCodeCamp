---
id: 587d7b88367417b2b2512b46
title: 设置函数的默认参数
challengeType: 1
forumTopicId: 301209
dashedName: set-default-parameters-for-your-functions
---

# --description--

ES6 里允许给函数传入<dfn>默认参数</dfn>，来构建更加灵活的函数。

请看以下代码：

```js
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());
```

控制台将显示字符串 `Hello John` 和 `Hello Anonymous`。

默认参数会在参数没有被指定（值为 undefined）的时候起作用。 在上面的例子中，参数 `name` 会在没有得到新的值的时候，默认使用值 `Anonymous`。 你还可以给多个参数赋予默认值。

# --instructions--

给函数 `increment` 传入默认参数，使得在 `value` 没有被赋值的时候，默认给 `number` 加上 1。

# --hints--

`increment(5, 2)` 的结果应该是 `7`。

```js
assert(increment(5, 2) === 7);
```

`increment(5)` 的结果应该是 `6`。

```js
assert(increment(5) === 6);
```

参数 `value` 的默认值是 `1`。

```js
assert(code.match(/value\s*=\s*1/g));
```

# --seed--

## --seed-contents--

```js
// Only change code below this line
const increment = (number, value) => number + value;
// Only change code above this line
```

# --solutions--

```js
const increment = (number, value = 1) => number + value;
```
