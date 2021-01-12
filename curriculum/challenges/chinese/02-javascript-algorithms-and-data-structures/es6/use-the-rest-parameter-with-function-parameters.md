---
id: 587d7b88367417b2b2512b47
title: 将 rest 操作符与函数参数一起使用
challengeType: 1
forumTopicId: 301221
dashedName: use-the-rest-parameter-with-function-parameters
---

# --description--

ES6 推出了用于函数参数的<dfn>rest 操作符</dfn>帮助我们创建更加灵活的函数。在`rest`操作符的帮助下，你可以创建有一个变量来接受多个参数的函数。这些参数被储存在一个可以在函数内部读取的数组中。

请看以下代码：

```js
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // You have passed 3 arguments.
console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments.
```

`rest`操作符可以避免查看`args`数组的需求，并且允许我们在参数数组上使用`map()`、`fiter()` 和 `reduce()`。

# --instructions--

修改`sum`函数，来让它使用`rest`操作符，并且它可以在有任何数量的参数时以相同的形式工作。

# --hints--

`sum(0,1,2)`的返回结果应该为3。

```js
assert(sum(0, 1, 2) === 3);
```

`sum(1,2,3,4)`的返回结果应该为10。

```js
assert(sum(1, 2, 3, 4) === 10);
```

`sum(5)`的返回结果应该为5。

```js
assert(sum(5) === 5);
```

`sum()`的返回结果应该为 0。

```js
assert(sum() === 0);
```

对`sum`函数的`args`参数使用了`...`展开操作符。

```js
assert(code.replace(/\s/g, '').match(/sum=\(\.\.\.args\)=>/));
```

# --seed--

## --seed-contents--

```js
const sum = (x, y, z) => {
  const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
}
```

# --solutions--

```js
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}
```
