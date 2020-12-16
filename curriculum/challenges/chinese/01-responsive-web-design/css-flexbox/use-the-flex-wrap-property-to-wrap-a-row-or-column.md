---
id: 587d78ad367417b2b2512afa
title: 使用 flex-wrap 属性包裹一行或一列
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cQv9ZtG'
forumTopicId: 301114
---

# --description--

CSS flexbox 有一个把 flex 子元素拆分为多行（或多列）的特性。默认情况下，flex 容器会调整项目大小，把它们都塞到一起。如果是行的话，所有项目都会在一条直线上。

不过，使用`flex-wrap`属性可以使项目换行。这意味着多出来的项目会被移到新的行或列。换行发生的断点由项目和容器的大小决定。

换行方向的可选值有这些：

<ul><li><code>nowrap</code>：默认值，不换行。</li><li><code>wrap</code>：行从上到下排，列从左到又排。</li><li><code>wrap-reverse</code>：行从下到上排，列从左到右排。</li></ul>

# --instructions--

现在的布局一行里面元素太多了，在`#box-container`元素添加 CSS 属性`flex-wrap`，把值设为 `wrap`。

# --hints--

`#box-container`元素应有`flex-wrap`属性，其值应为 `wrap`。

```js
assert($('#box-container').css('flex-wrap') == 'wrap');
```

# --solutions--

