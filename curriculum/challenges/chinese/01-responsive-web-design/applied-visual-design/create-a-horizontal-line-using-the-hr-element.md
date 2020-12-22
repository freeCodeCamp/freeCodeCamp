---
id: 587d781b367417b2b2512abb
title: 使用 hr 标签创建水平线
challengeType: 0
videoUrl: 'https://scrimba.com/c/c3bR8t7'
forumTopicId: 301049
---

# --description--

术语：Horizontal Rule => hr => 水平线。

你可以用 `hr` 标签来创建一条宽度撑满父元素的水平线。它一般用来表示文档主题的改变，在视觉上将文档分隔成几个部分。

# --instructions--

在包含卡片标题的 `h4` 下面添加一个 `hr` 标签。

**注意**  
在 HTML 里，`hr` 是自关闭标签，所以不需要一个单独的关闭标签。

# --hints--

你应该添加一个 `hr` 标签。

```js
assert($('hr').length == 1);
```

`hr` 标签应该在标题和段落之间。

```js
assert(code.match(/<\/h4>\s*?<hr(>|\s*?\/>)\s*?<p>/gi));
```

# --solutions--

