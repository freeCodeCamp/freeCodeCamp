---
id: 587d7787367417b2b2512aa1
title: 使用 header 元素来让屏幕阅读器更容易进行导航
challengeType: 0
videoUrl: 'https://scrimba.com/c/cB76vtv'
forumTopicId: 301023
---

# --description--

`header` 也是一个具有语义化的、可以提升页面可访问性的 HTML5 标签。它可以为父级标签呈现简介信息或者导航链接，适用于那些在多个页面顶部重复出现的内容。

与 `main` 类似，`header` 的语义化特性也可以让辅助工具快速定位到它的内容。

**注意：**`header` 应当在 HTML 文档的 `body` 标签内使用。请注意，`header` 标签与包含页面标题、元信息的 `head` 标签本不相同。

# --instructions--

Camper Cat 正在创作一些训练忍者的精彩文章，并打算为这些文章创建一个新的页面。请把包含 `h1` 的 `div` 标签替换为 `header` 标签。

# --hints--

应该存在一个 `header` 标签。

```js
assert($('header').length == 1);
```

`header` 标签中应包含 `h1`。

```js
assert($('header').children('h1').length == 1);
```

不应存在 `div` 标签。

```js
assert($('div').length == 0);
```

确保 `header` 标签是闭合的。

```js
assert(
  code.match(/<\/header>/g) &&
    code.match(/<\/header>/g).length === code.match(/<header>/g).length
);
```

# --solutions--

