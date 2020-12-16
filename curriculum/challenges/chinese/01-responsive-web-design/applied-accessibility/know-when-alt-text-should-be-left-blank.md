---
id: 587d774c367417b2b2512a9d
title: 知道 Alt 文本何时应该留空
challengeType: 0
videoUrl: 'https://scrimba.com/c/cM9P4t2'
forumTopicId: 301019
---

# --description--

在上一个挑战中，我们了解到`img`标签必须有一个`alt`属性。在图片已经有了文字说明，或者仅仅为了美化页面的情况下，`alt`属性似乎有些多余。

即便如此，我们仍然需要为`img`标签添加`alt`属性，这时可以把它设为空，例如：

`<img src="visualDecoration.jpeg" alt="">`

背景图片通常起装饰作用，而且含有 CSS 类，所以屏幕阅读器无法读取。

**注意：**  
对于有标题的图片，我们依然需要添加`alt`属性，因为这样有助于搜索引擎记录图片内容。

# --instructions--

Camper Cat 已经大体写好了博客页面。他打算使用忍者刀图片作为两篇文章之间的分割线，并为图片添加一个空的`alt`属性（注意：这里`img`标签的`src`属性提供的链接是无效的，因此页面上可能不会显示图片，不用担心）。

# --hints--

你的`img`标签应该包含`alt`属性。

```js
assert(!($('img').attr('alt') == undefined));
```

`alt`属性对应的值应该为空。

```js
assert($('img').attr('alt') == '');
```

# --solutions--

