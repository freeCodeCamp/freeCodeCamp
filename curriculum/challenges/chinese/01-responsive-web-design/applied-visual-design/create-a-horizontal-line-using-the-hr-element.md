---
id: 587d781b367417b2b2512abb
title: 使用 hr 标签创建水平线
challengeType: 0
videoUrl: 'https://scrimba.com/c/c3bR8t7'
forumTopicId: 301049
---

# --description--

术语：Horizontal Rule => hr => 水平线。

你可以用 `hr` 标签来创建一条宽度撑满父元素的水平线。这种水平分割线一般用来表示内容主题的改变，或在视觉上将文档分隔成几个部分。

# --instructions--

在卡片标题元素 `h4` 下方添加一个 `hr` 标签。

**注意：**HTML 中的 `hr` 是自闭合标签，所以我们不需要为它添加结束标签。

# --hints--

应存在一个 `hr` 标签。

```js
assert($('hr').length == 1);
```

`hr` 标签应该在标题和段落之间。

```js
assert(code.match(/<\/h4>\s*?<hr(>|\s*?\/>)\s*?<p>/gi));
```

# --solutions--

