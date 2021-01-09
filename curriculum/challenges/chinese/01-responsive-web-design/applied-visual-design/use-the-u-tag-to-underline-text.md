---
id: 587d781a367417b2b2512ab8
title: 使用 u 标签给文本添加下划线
challengeType: 0
videoUrl: 'https://scrimba.com/c/cN6aQCL'
forumTopicId: 301082
---

# --description--

你可以使用 `u` 标签来给文字添加下划线。下划线通常用来表示重要内容或需要记忆的内容。添加了 `u` 标签后，浏览器会自动给元素添加这段样式：`text-decoration: underline;`。

# --instructions--

给 "Ph.D. students" 添加 `u` 标签。

**注意：**HTML 的 `<a>` 标签默认也会给文本添加下划线。如果使用 `u` 标签添加下划线会造成与 `<a>` 标签混淆，则应避免使用 `u` 标签。

# --hints--

应添加一个 `u` 标签。

```js
assert($('u').length === 1);
```

`u` 标签的内容文本应为 `Ph.D. students`。

```js
assert($('u').text() === 'Ph.D. students');
```

# --solutions--

