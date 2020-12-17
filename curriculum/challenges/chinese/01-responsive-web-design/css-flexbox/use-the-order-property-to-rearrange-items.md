---
id: 587d78ae367417b2b2512aff
title: 使用 order 属性重新排列项目
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cMbvNAG'
forumTopicId: 301116
---

# --description--

`order`属性告诉 CSS flex 容器里项目的顺序。默认情况下，项目排列顺序与源 HTML 文件中顺序相同。这个属性接受数字作为参数，可以使用负数。

# --instructions--

给`#box-1`和`#box-2`添加 CSS 属性`order`，`#box-1`的`order`属性值设为 `2`，`#box-2`的`order`属性值设为 `1`。

# --hints--

`#box-1`元素应有`order`属性，其值应为 `2`。

```js
assert($('#box-1').css('order') == '2');
```

`#box-2`元素应有`order`属性，其值应为 `1`。

```js
assert($('#box-2').css('order') == '1');
```

# --solutions--

