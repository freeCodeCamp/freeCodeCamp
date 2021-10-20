---
id: 587d781e367417b2b2512ac9
title: 更改元素的相对位置
challengeType: 0
videoUrl: 'https://scrimba.com/c/czVmMtZ'
forumTopicId: 301044
dashedName: change-an-elements-relative-position
---

# --description--

在 CSS 里一切 HTML 元素皆为盒子，也就是通常所说的<dfn>盒模型</dfn>。 块级元素自动从新的一行开始（比如标题、段落以及 div），行内元素排列在上一个元素后（比如图片以及 span）。 元素默认按照这种方式布局称为文档的<dfn>普通流</dfn>，同时 CSS 提供了 position 属性来覆盖它。

当元素的定位设置为 `relative` 时，它允许你通过 CSS 指定该元素在当前文档流页面下的*相对*偏移量。 CSS 里控制各个方向偏移量的属性是 `left`、`right`、`top` 和 `bottom`。 它们代表从原来位置向远离该方向*偏移*指定的像素、百分比或者 em。 下面的例子展示了段落向上偏移 10px：

```css
p {
  position: relative;
  bottom: 10px;
}
```

把元素的位置设置成相对，并不会改变该元素在布局中所占的位置，也不会对其它元素的位置产生影响。

**注意：** 定位可以使页面布局更灵活、高效。 不管元素的定位是怎样的，HTML 标记在从上到下阅读起来时应该是整洁的、有意义的。 这样可以让视障人士（重度依赖辅助设备比如屏幕阅读软件的人们）也能够无障碍地浏览你的网页。

# --instructions--

把 `h2` 的 `position` 设置成 `relative`，使用相应的 CSS 属性调整它的位置，使其相对 `top` 偏移 15px，同时还在文档流中处于原来的位置。 这不会对 h1 和 p 元素的位置产生影响。

# --hints--

`h2` 元素应有一个值为 `relative` 的 `position` 属性。

```js
assert($('h2').css('position') == 'relative');
```

你应该使用 CSS 属性调整 `h2` 的位置，使其从原来的位置相对 `top` 偏移 15px。

```js
assert($('h2').css('top') == '15px');
```

# --seed--

## --seed-contents--

```html
<style>
  h2 {


  }
</style>
<body>
  <h1>On Being Well-Positioned</h1>
  <h2>Move me!</h2>
  <p>I still think the h2 is where it normally sits.</p>
</body>
```

# --solutions--

```html
<style>
  h2 {
    position: relative;
    top: 15px;
  }
</style>
<body>
  <h1>On Being Well-Positioned</h1>
  <h2>Move me!</h2>
  <p>I still think the h2 is where it normally sits.</p>
</body>
```
