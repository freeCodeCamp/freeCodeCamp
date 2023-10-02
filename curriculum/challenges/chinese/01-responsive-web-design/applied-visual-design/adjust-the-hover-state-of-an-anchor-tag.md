---
id: 587d781d367417b2b2512ac8
title: 调整锚点的悬停状态
challengeType: 0
videoUrl: 'https://scrimba.com/c/cakRGcm'
forumTopicId: 301035
dashedName: adjust-the-hover-state-of-an-anchor-tag
---

# --description--

本挑战将要涉及到伪类。 伪类是可以添加到选择器上的关键字，用来选择特定状态的元素。

比如，可以使用 `:hover` 伪类选择器来选取超链接的悬停状态。 下面的代码可以在鼠标悬停在超链接上时将其 `color` 变成红色：

```css
a:hover {
  color: red;
}
```

# --instructions--

代码编辑器里面已经有了一个 CSS 规则把所有的 `a` 标签定义成了黑色。 请添加一个规则，使得用户悬停在 `a` 标签时，标签的 `color` 变成蓝色。

# --hints--

超链接的 `color` 应该保持黑色，应只添加 `:hover` CSS 规则。

```js
assert($('a').css('color') == 'rgb(0, 0, 0)');
```

悬停超链接时超链接的 `color` 应该变成蓝色。

```js
assert(
  code.match(
    /a:hover\s*?{\s*?color:\s*?(blue|rgba\(\s*?0\s*?,\s*?0\s*?,\s*?255\s*?,\s*?1\s*?\)|#00F|rgb\(\s*?0\s*?,\s*?0\s*?,\s*?255\s*?\))\s*?;\s*?}/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  a {
    color: #000;
  }



</style>
<a href="https://freecatphotoapp.com/" target="_blank">CatPhotoApp</a>
```

# --solutions--

```html
<style>
  a {
    color: #000;
  }
  a:hover {
    color: rgba(0,0,255,1);
  }
</style>
<a href="https://freecatphotoapp.com/" target="_blank">CatPhotoApp</a>
```
