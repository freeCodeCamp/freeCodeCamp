---
id: 587d781a367417b2b2512ab7
title: 使用 strong 标签加粗文本
challengeType: 0
videoUrl: 'https://scrimba.com/c/ceJNBSb'
forumTopicId: 1
---

# --description--

术语：Strong => s => 加粗。

你可以使用 `strong` 标签来加粗文字。添加了 `strong` 标签后，浏览器会自动给元素应用 `font-weight:bold;`。

# --instructions--

在 `p` 标签里的 “斯坦福大学” 外面添加 `strong` 标签。

# --hints--

你应该有一个 `strong` 标签。

```js
assert($('strong').length == 1);
```

`strong` 标签应该在 `p` 标签里。

```js
assert($('p').children('strong').length == 1);
```

`strong` 标签应该包围 “斯坦福大学”。

```js
assert(
  $('strong')
    .text()
    .match(/^Stanford University$/gi)
);
```

# --solutions--

