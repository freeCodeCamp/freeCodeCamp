---
id: 587d7788367417b2b2512aa2
title: 使用 nav 元素使屏幕阅读器更容易导航
challengeType: 0
videoUrl: 'https://scrimba.com/c/czVwWSv'
forumTopicId: 301024
---

# --description--

`nav` 也是一个具有语义化特性的 HTML5 标签，用于呈现页面中的主导航链接。它可以使屏幕阅读器快速识别出页面中的导航信息。

对于在多个页面底部出现的站点链接，我们不需要使用 `nav` 标签。此时，使用 `footer` 标签会更好。我们将会在下个挑战中学习 `footer` 标签的使用。

# --instructions--

Camper Cat 在他的忍者训练页面顶端放置了多个导航链接，但这些链接都写在了 `div` 中。请将 `div` 标签更改为 `nav` 标签，以提升页面的可访问性。

# --hints--

应存在一个 `nav` 标签。

```js
assert($('nav').length == 1);
```

`nav` 标签应包含 `ul` 标签及其列表项。

```js
assert($('nav').children('ul').length == 1);
```

不应存在 `div` 标签。

```js
assert($('div').length == 0);
```

确保 `nav` 标签是闭合的。

```js
assert(
  code.match(/<\/nav>/g) &&
    code.match(/<\/nav>/g).length === code.match(/<nav>/g).length
);
```

# --solutions--

