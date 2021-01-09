---
id: 587d781e367417b2b2512ac9
title: 更改元素的相对位置
challengeType: 0
videoUrl: 'https://scrimba.com/c/czVmMtZ'
forumTopicId: 301044
---

# --description--

在 CSS 里一切 HTML 元素皆为盒子，也就是通常所说的<dfn>盒模型</dfn>。块级元素自动从新的一行开始（比如标题、段落以及 div），行内元素排列在上一个元素后（比如图片以及 span）。元素默认按照这种方式布局称为文档的<dfn>普通流</dfn>，同时 CSS 提供了 position 属性来覆盖它。

当元素的 position 设置为 `relative` 时，它允许你通过 CSS 指定该元素在当前普通流页面下的相对偏移量。CSS 里控制各个方向偏移量的属性是 `left`、`right`、`top` 和 `bottom`。它们代表从原来位置向远离该方向偏移指定的像素、百分比或者 em。下面的例子展示了段落向上偏移 10 像素：

```css
p {
  position: relative;
  bottom: 10px;
}
```

把元素的 position 设置成 relative 并不会改变该元素在普通流布局所占的位置，也不会对其它元素的位置产生影响。 **注意：**定位可以让你在页面布局上更灵活、高效。注意不管元素的定位是怎样，内部的 HTML 代码阅读起来应该是整洁、有意义的。这样也可以让视障人员（他们重度依赖辅助设备比如屏幕阅读软件）也能够无障碍地浏览你的网页。

# --instructions--

把 `h2` 的 `position` 属性值设置成 `relative`，使用相应的 CSS 属性调整 `h2` 的位置，使其相对原本的位置向下偏移 15 像素。注意不要对 h1 和 p 元素的位置产生影响。

# --hints--

`h2` 元素应该添加 `position` 属性，其属性值应为 `relative`。

```js
assert($('h2').css('position') == 'relative');
```

你应该使用 CSS 属性调整 `h2` 的位置使其从原来的位置向下偏移 `15px`。

```js
assert($('h2').css('top') == '15px');
```

# --solutions--

