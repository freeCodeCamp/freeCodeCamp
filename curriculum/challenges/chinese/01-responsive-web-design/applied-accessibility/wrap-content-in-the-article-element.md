---
id: 587d774e367417b2b2512aa0
title: 使用 article 元素包裹文章内容
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp79S3'
forumTopicId: 301029
---

# --description--

`article`是另一个具有语义化特性的 HTML5 新标签。`article`是一个分段标签，用于呈现独立及完整的内容。这个标签适用于博客入口、论坛帖子或者新闻文章。

有些技巧可以用来判断内容是否独立，像是如果内容脱离了上下文，是否仍然有意义？类似地，对于 RSS 提要中的文本，它是否有意义？

请牢记，使用辅助设备的用户依赖组织良好的、语义化的标签来获取页面中的信息。

**请注意`section`和`div`的区别：**  
`section`也是一个 HTML5 新标签，与`article`标签的语义含义略有不同。`article`用于独立的、完整的内容，而`section`用于对与主题相关的内容进行分组。它们可以根据需要嵌套着使用。举个例子：如果一本书是一个`article`的话，那么每个章节就是`section`。当内容组之间没有联系时，可以使用`div`。

```html
<div> - groups content
<section> - groups related content
<article> - groups independent, self-contained content
```

# --instructions--

Camper Cat 打算使用`article`标签来呈现他的博客页面里的帖子，但是他忘记在顶部的帖子上使用它。请使用`article`标签来代替`div`标签。

# --hints--

你的代码中应该有 3 个`article`标签。

```js
assert($('article').length == 3);
```

你的代码不应包含`div`标签。

```js
assert($('div').length == 0);
```

# --solutions--

