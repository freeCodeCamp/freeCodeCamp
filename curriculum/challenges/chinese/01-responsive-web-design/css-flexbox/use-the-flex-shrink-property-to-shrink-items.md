---
id: 587d78ad367417b2b2512afb
title: 使用 flex-shrink 属性收缩项目
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cd3PBfr'
forumTopicId: 301113
---

# --description--

目前为止，挑战里的提到的属性都应用于 flex 容器（flex 子元素的父元素）。除此之外，flex 子元素也有很多实用属性。

首先介绍的是`flex-shrink`属性。使用之后，如果 flex 容器太小，该项目会自动缩小。当容器的宽度小于里面所有项目的宽度，项目就会自动压缩。

项目的`flex-shrink`属性接受 number 类型的值。数值越大，该项目与其他项目相比会被压缩得更厉害。例如，如果一个项目的`flex-shrink`属性值为 `1`，另一个项目的`flex-shrink`属性值为 `3`，那么后者相比前者会受到 `3` 倍压缩。

# --instructions--

为`#box-1`和`#box-2`添加 CSS 属性`flex-shrink`，`#box-1`的值设为 `1`，`#box-2`的值设为 `2`。

# --hints--

`#box-1`元素应有`flex-shrink`属性，其值应为 `1`.

```js
assert($('#box-1').css('flex-shrink') == '1');
```

`#box-2`元素应有`flex-shrink`属性，其值应为 `2`.

```js
assert($('#box-2').css('flex-shrink') == '2');
```

# --solutions--

