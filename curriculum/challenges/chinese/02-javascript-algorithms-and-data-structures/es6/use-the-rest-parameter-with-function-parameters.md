---
id: 587d7b88367417b2b2512b47
title: 将 rest 操作符与函数参数一起使用
challengeType: 1
forumTopicId: 301221
dashedName: use-the-rest-parameter-with-function-parameters
---

# --description--

ES6 推出了用于函数参数的 <dfn>rest 操作符</dfn>帮助我们创建更加灵活的函数。 rest 操作符可以用于创建有一个变量来接受多个参数的函数。 这些参数被储存在一个可以在函数内部读取的数组中。

请看以下代码：

```js
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));
```

控制台将显示字符串 `You have passed 3 arguments.` 和 `You have passed 4 arguments.`。

rest 参数使我们不需要使用 `arguments` 对象，允许我们对传递给函数 `howMany` 的参数数组使用数组方法。

# --instructions--

修改 `sum` 函数，使用 rest 参数，使 `sum` 函数可以接收任意数量的参数，并返回它们的总和。

# --hints--

`sum(0,1,2)` 的结果应是 3。

```js
assert(sum(0, 1, 2) === 3);
```

`sum(1,2,3,4)` 的结果应是 10。

```js
assert(sum(1, 2, 3, 4) === 10);
```

`sum(5)` 的结果应是 5。

```js
assert(sum(5) === 5);
```

`sum()` 的结果应是 0。

```js
assert(sum() === 0);
```

`sum` 应是一个箭头函数，对 `args` 参数使用 rest 操作符语法（`...`）。

```js
assert(__helpers.removeWhiteSpace(code).match(/sum=\(\.\.\.args\)=>/));
```

# --seed--

## --seed-contents--

```js
const sum = (x, y, z) => {
  const args = [x, y, z];
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}
```

# --solutions--

```js
const sum = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}
```
