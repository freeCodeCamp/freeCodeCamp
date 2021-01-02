---
id: 587d781a367417b2b2512ab7
title: 使用 strong 标签加粗文本
challengeType: 0
videoUrl: 'https://scrimba.com/c/ceJNBSb'
forumTopicId: 1
---

# --description--

你可以使用 `strong` 标签来加粗文字。粗体文字一般用来吸引读者注意或用来表示强调。添加了 `strong` 标签后，浏览器会自动给元素添加这段样式：`font-weight:bold;`。

# --instructions--

给 `p` 标签里的 "Stanford University" 内容文本添加 `strong` 标签。

# --hints--

应添加一个 `strong` 标签。

```js
assert($('strong').length == 1);
```

`strong` 标签应在 `p` 标签里。

```js
assert($('p').children('strong').length == 1);
```

`strong` 标签的内容文本应为 `Stanford University`。

```js
assert(
  $('strong')
    .text()
    .match(/^Stanford University$/gi)
);
```

# --solutions--

