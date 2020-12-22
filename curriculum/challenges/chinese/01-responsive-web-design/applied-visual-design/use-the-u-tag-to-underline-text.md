---
id: 587d781a367417b2b2512ab8
title: 使用 u 标签给文本添加下划线
challengeType: 0
videoUrl: 'https://scrimba.com/c/cN6aQCL'
forumTopicId: 301082
---

# --description--

术语：Underline => u => 下划线。

你可以使用 `u` 标签来给文字添加下划线。添加了 `u` 标签后，浏览器会自动给元素应用 `text-decoration: underline;`。

# --instructions--

给 “理工博士” 添加 `u` 标签，不要给整个 class 为 `cardText` 的父 `div` 添加。

**注意：** 锚点默认给文本添加下划线，如果 `u` 标签的下划线和页面的锚点混淆，请避免使用它。

# --hints--

你应该有一个 `u` 标签。

```js
assert($('u').length === 1);
```

`u` 标签应该包围 “理工博士”。

```js
assert($('u').text() === '理工博士');
```

# --solutions--

