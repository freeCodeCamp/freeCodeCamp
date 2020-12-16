---
id: 587d78af367417b2b2512b00
title: 使用 align-self 属性
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cMbvzfv'
forumTopicId: 301107
---

# --description--

flex 子项目的最后一个属性是`align-self`。这个属性允许你调整每个项目自己的对齐方式，而不是一次性设置全部项目。因为`float`、`clear`和`vertical-align`等调整对齐方式的属性都不能应用于 flex 子元素，所以这个属性显得十分有用。

`align-self`可设置的值与`align-items`的一样，并且它会覆盖`align-items`的值。

# --instructions--

在`#box-1`和`#box-2`添加 CSS 属性`align-self`。`#box-1`设为 center，`#box-2`设为 `flex-end`。

# --hints--

`#box-1`元素应有`align-self`属性，其值应为 `center`。

```js
assert($('#box-1').css('align-self') == 'center');
```

`#box-2`元素应有`align-self`属性，其值应为 `flex-end`。

```js
assert($('#box-2').css('align-self') == 'flex-end');
```

# --solutions--

