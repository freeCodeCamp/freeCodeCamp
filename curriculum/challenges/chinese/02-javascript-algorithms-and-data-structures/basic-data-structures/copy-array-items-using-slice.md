---
id: 587d7b7a367417b2b2512b12
title: 使用 slice() 复制数组元素
challengeType: 1
forumTopicId: 301158
---

# --description--

接下来我们要介绍 `slice()` 方法。`slice()` 不会修改数组，而是会复制，或者说*提取（extract）*给定数量的元素到一个新数组。同时，调用方法的数组保持不变。`slice()` 只接收 2 个输入参数：第一个是开始提取元素的位置（索引），第二个是提取元素的结束位置（索引）。`slice()` 提取的元素中不包括第二个参数所对应的元素。请看以下例子：

```js
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);
// todaysWeather 等于 ['snow', 'sleet'];
// weatherConditions 仍然等于 ['rain', 'snow', 'sleet', 'hail', 'clear']
```

在上面的代码中，我们从一个数组中提取了一些元素，并用这些元素创建了一个新数组。

# --instructions--

我们已经定义了一个 `forecast` 函数，它接受一个数组作为参数。请修改这个函数，利用 `slice()` 从输入的数组中提取信息，最终返回一个包含元素 `'warm'` 和 `'sunny'` 的新数组。

# --hints--

`forecast` 应返回 `["warm", "sunny"]`。

```js
assert.deepEqual(
  forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']),
  ['warm', 'sunny']
);
```

`forecast` 函数中应使用 `slice()` 方法。

```js
assert(/\.slice\(/.test(code));
```

# --solutions--

