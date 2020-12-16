---
id: 587d7b7a367417b2b2512b12
title: 使用 slice() 拷贝数组项目
challengeType: 1
forumTopicId: 301158
---

# --description--

接下来我们要介绍`slice()`方法。`slice()`并不修改数组，而是复制或者说*提取（extract）*给定数量的元素到一个新数组里，而调用方法的数组则保持不变。`slice()`只接受 2 个输入参数—第一个是开始提取元素的位置（索引），第二个是结束提取元素的位置（索引）。slice 方法会提取直到截止索引的元素，但被提取的元素不包括截止索引对应的元素。请看以下例子：

```js
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);
// todaysWeather 等于 ['snow', 'sleet'];
// weatherConditions 仍然等于 ['rain', 'snow', 'sleet', 'hail', 'clear']
```

现在我们从一个已有的数组中提取了一些元素，并用这些元素创建了一个新数组。

# --instructions--

我们已经定义了一个`forecast`函数，它接受一个数组作为参数。请修改这个函数，利用`slice()`来从输入的数组中提取信息，并返回一个包含元素`'warm'`和`'sunny'` 的新数组。

# --hints--

`forecast`应该返回`["warm", "sunny"]`

```js
assert.deepEqual(
  forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']),
  ['warm', 'sunny']
);
```

`forecast`函数应该使用`slice()`方法

```js
assert(/\.slice\(/.test(code));
```

# --solutions--

