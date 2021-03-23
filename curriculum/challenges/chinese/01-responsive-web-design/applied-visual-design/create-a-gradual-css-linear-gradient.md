---
id: 587d78a5367417b2b2512ad6
title: 创建一个 CSS 线性渐变
challengeType: 0
videoUrl: 'https://scrimba.com/c/cg4dpt9'
forumTopicId: 301047
dashedName: create-a-gradual-css-linear-gradient
---

# --description--

HTML 元素的背景色并不局限于单色。 CSS 还为我们提供了颜色渐变。 可通过 `background` 里的 `linear-gradient()` 实现线性渐变， 以下是它的语法：

```css
background: linear-gradient(gradient_direction, color 1, color 2, color 3, ...);
```

第一个参数指定了颜色过渡的方向——它的值是角度，`90deg` 表示垂直渐变（从左到右），`45deg` 表示沿对角线渐变（从左下方到右上方）。 其他参数指定了渐变颜色的顺序：

例如：

```css
background: linear-gradient(90deg, red, yellow, rgb(204, 204, 255));
```

# --instructions--

使用 `linear-gradient()` 给 `div` 元素添加 `background` 渐变色，渐变角度为 35 度，从 `#CCFFFF` 过渡到 `#FFCCCC`。

# --hints--

`div` 元素应有一个指定方向和颜色的 `linear-gradient` `background`。

```js
assert(
  $('div')
    .css('background-image')
    .match(
      /linear-gradient\(35deg, rgb\(204, 255, 255\), rgb\(255, 204, 204\)\)/gi
    )
);
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin: 50px auto;

  }

</style>

<div></div>
```

# --solutions--

```html
<style>
  div {
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin: 50px auto;
    background: linear-gradient(35deg, #CCFFFF, #FFCCCC);
  }
</style>
<div></div>
```
