---
id: 587d7fae367417b2b2512be7
title: 预先过滤 JSON 以获得所需的数据
challengeType: 6
forumTopicId: 18257
---

# --description--

如果你不希望渲染每张从 freeCodeCamp Cat Photo API 取回的猫照片，你可以在循环先预先过滤 JSON 数据。

鉴于 JSON 数据都存储在数组中，你可以使用`filter`方法过滤掉 "id" 键值为 1 的猫。

这是执行此操作的代码：

```js
json = json.filter(function(val) {
  return (val.id !== 1);
});
```

# --instructions--

将`filter`代码添加到 JSON 数据中来移除 "id" 值为 1 的猫。

# --hints--

你的代码应该使用`filter`方法。

```js
assert(code.match(/json\.filter/g));
```

# --solutions--

