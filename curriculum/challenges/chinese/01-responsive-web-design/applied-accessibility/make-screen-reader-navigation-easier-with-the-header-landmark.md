---
id: 587d7787367417b2b2512aa1
title: 使用 header 元素使屏幕阅读器更容易导航
challengeType: 0
videoUrl: 'https://scrimba.com/c/cB76vtv'
forumTopicId: 301023
---

# --description--

`header`也是一个具有语义化的、提升页面可访问性的 HTML5 标签。它可以为父级标签呈现简介信息或者导航链接，适用于那些在多个页面顶部重复出现的内容。

与`main`类似，`header`的语义化特性也可以使辅助技术快速定位到它的内容。

**注意：**  
`header`用在 HTML 文档的`body`标签中。这点与包含页面标题、元信息的`head`标签不同。

# --instructions--

Camper Cat 正在写一些训练忍者的精彩文章，并为它们建立一个新的页面。请使用`header`替换页面顶端包含`h1`的`div`标签。

# --hints--

你的代码应该包含 1 个`header`标签。

```js
assert($('header').length == 1);
```

你的`header`标签应该包含`h1`。

```js
assert($('header').children('h1').length == 1);
```

你的代码不应有任何`div`标签。

```js
assert($('div').length == 0);
```

确保你的`header`标签是闭合的。

```js
assert(
  code.match(/<\/header>/g) &&
    code.match(/<\/header>/g).length === code.match(/<header>/g).length
);
```

# --solutions--

