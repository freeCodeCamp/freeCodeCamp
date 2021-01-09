---
id: 587d774c367417b2b2512a9d
title: 了解 Alt 文本留空的情景
challengeType: 0
videoUrl: 'https://scrimba.com/c/cM9P4t2'
forumTopicId: 301019
---

# --description--

在上一个挑战中，我们了解到 `img` 标签必须有一个 `alt` 属性。不过在图片已经有标题作为文字说明，或者图片仅用作装饰的情况下，`alt` 属性似乎有些多余。

即便如此，我们仍然需要为 `img` 标签添加 `alt` 属性，但这时我们应把它的属性值设为空，例如：

`<img src="visualDecoration.jpeg" alt="">`

比如，背景图片通常起装饰作用。但这些图片通常都是通过 CSS 规则而非 HTML 引入的，因此屏幕阅读器无法读取。

**注意：**对于有标题的图片，我们依然需要添加 `alt` 属性，因为这样有助于搜索引擎记录图片内容。

# --instructions--

Camper Cat 已经大体写好了博客页面。他打算使用忍者刀图片作为两篇文章之间的分割线，并为图片添加一个空的 `alt` 属性（注意：这里 `img` 标签的 `src` 属性提供的链接是无效的，因此页面上不会显示任何忍者刀的图片，不用担心）。

# --hints--

`img` 标签应具有 `alt` 属性。

```js
assert(!($('img').attr('alt') == undefined));
```

`alt` 的属性值应为空。

```js
assert($('img').attr('alt') == '');
```

# --solutions--

