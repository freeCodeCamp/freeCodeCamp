---
id: 587d78ab367417b2b2512af2
title: 使用 flex-direction 属性创建一行
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cBEkbfJ'
forumTopicId: 301110
---

# --description--

给元素添加`display: flex`属性使其变成 flex 容器。只要给父元素添加`flex-direction`属性，并把属性值设置为 row 或 column，即可横排或竖排它的子元素。设为 row 可以让子元素水平排列，设为 column 可以让子元素垂直排列。

`flex-direction`的其他可选值还有 row-reverse 和 column-reverse。

**注意**  
`flex-direction`的默认值为 row。

# --instructions--

为`#box-container`添加 CSS 属性`flex-direction`，其值设为 row-reverse。

# --hints--

`#box-container`应有`flex-direction`属性，其值应为 row-reverse。

```js
assert($('#box-container').css('flex-direction') == 'row-reverse');
```

# --solutions--

