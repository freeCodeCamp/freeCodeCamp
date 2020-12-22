---
id: 587d781a367417b2b2512ab9
title: 使用 em 标签强调文本
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJRBtp'
forumTopicId: 301078
---

# --description--

术语：emphasis => em => 强调。

你可以使用 `em` 标签来强调文本。由于浏览器会自动给元素应用 `font-style: italic;`，所以文本会显示为斜体。

# --instructions--

在 `p` 标签里面嵌套 `em` 标签来强调文本。

# --hints--

你应该添加一个 `em` 标签。

```js
assert($('em').length == 1);
```

`em` 标签应该嵌套在 `p` 标签里面。

```js
assert($('p').children().length == 1 && $('em').children().length == 2);
```

# --solutions--

