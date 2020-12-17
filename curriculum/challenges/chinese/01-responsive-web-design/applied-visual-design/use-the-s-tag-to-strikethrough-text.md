---
id: 587d781b367417b2b2512aba
title: 使用 s 标签给文本添加删除线
challengeType: 0
videoUrl: ''
forumTopicId: 301079
---

# --description--

术语：Strikethrough => s => 删除线。

你可以用 `s` 标签来给文字添加删除线，~~我是明晃晃的删除线~~，它代表着这段文字不再有效。添加了 `s` 标签后，浏览器会自动给元素应用 `text-decoration: line-through;`。

# --instructions--

在 `h4` 标签里的 “Google” 外添加 `s` 标签，然后在 `s` 标签外面添加单词 Alphabet，Alphabet 不要有删除线格式。

# --hints--

你应该添加一个 `s` 标签。

```js
assert($('s').length == 1);
```

`s` 标签应该在 `h4` 标签内的 Google 文字外面，它不应该包含单词 Alphabet。

```js
assert(
  $('h4 > s')
    .text()
    .match(/Google/gi) &&
    !$('h4 > s')
      .text()
      .match(/Alphabet/gi)
);
```

`h4` 标签内应该有单词 Alphabet，Alphabet 应该没有删除线样式。

```js
assert(
  $('h4')
    .html()
    .match(/Alphabet/gi)
);
```

# --solutions--

