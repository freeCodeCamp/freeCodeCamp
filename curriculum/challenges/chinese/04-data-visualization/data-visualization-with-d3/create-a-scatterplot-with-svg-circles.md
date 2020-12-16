---
id: 587d7fab367417b2b2512bd7
title: 使用 SVG Circles 创建散点图
challengeType: 6
forumTopicId: 301484
---

# --description--

散点图是另一种形式的可视化。它用圆圈来映射数据点，每个数据点有两个值，这两个值和 `x` 和 `y` 轴相关联，在可视化中用来给圆圈定位。

SVG 用 `circle` 标签来创建圆形，它和之前用来构建条形图的 `rect` 非常相像。

# --instructions--

使用 `data()`、`enter()`、`append()` 方法将 `dataset` 和新添加到 SVG 画布上的 `circle` 元素绑定起来。

**注意**  
circles 并不可见，因为我们还没有设置它们的属性。我们会在下一个挑战来设置它。

# --hints--

你应该有 10 个 `circle` 元素。

```js
assert($('circle').length == 10);
```

# --solutions--

