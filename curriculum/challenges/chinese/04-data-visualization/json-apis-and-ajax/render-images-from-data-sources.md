---
id: 587d7fae367417b2b2512be6
title: 渲染数据源的图像
challengeType: 6
forumTopicId: 18265
---

# --description--

前几个挑战中表明，JSON 数组中的每个对象都包含一个`imageLink`键，其值为猫图像的 URL。

当你遍历这些对象的时候，你可以使用`imageLink`属性在`img`元素中显示此图像。

这是执行此操作的代码：

`html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>";`

# --instructions--

添加代码以在`img`标签中使用`imageLink`和`altText`属性。

# --hints--

你应该使用`imageLink`属性来显示图像。

```js
assert(code.match(/val\.imageLink/g));
```

应该用 `altText` 做为图片的 alt 属性。

```js
assert(code.match(/val\.altText/g));
```

# --solutions--

