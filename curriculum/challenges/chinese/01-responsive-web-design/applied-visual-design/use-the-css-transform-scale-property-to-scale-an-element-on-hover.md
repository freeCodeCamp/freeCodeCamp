---
id: 587d78a5367417b2b2512ada
title: 使用CSS Transform scale 属性在悬停时缩放元素
challengeType: 0
videoUrl: 'https://scrimba.com/c/cyLPJuM'
forumTopicId: 301077
dashedName: use-the-css-transform-scale-property-to-scale-an-element-on-hover
---

# --description--

`transform` 属性有很多函数可以调用，可以对元素进行调整大小、移动、旋转、翻转等操作。 当使用伪类选取元素的指定状态（如 `:hover`）时，我们可以通过 `transform` 属性非常方便地给元素添加交互。

下面是当用户悬停在段落元素时，段落大小缩放到原始大小 2.1 倍的例子：

```css
p:hover {
  transform: scale(2.1);
}
```

**注意：** 给 `div` 元素添加 transform 也会影响这个 div 包裹的子元素。

# --instructions--

通过伪类，给 `div` 的 `hover` 状态添加 `transform` 属性，使 `div` 当鼠标悬停时大小缩放到原始大小的 1.1 倍。

# --hints--

`div` 元素在悬停时大小应该缩放到原始大小的 1.1 倍。

```js
assert(code.match(/div:hover\s*?{\s*?transform:\s*?scale\(1\.1\);/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin:  50px auto;
    background: linear-gradient(
      53deg,
      #ccfffc,
      #ffcccf
    );
  }



</style>

<div></div>
```

# --solutions--

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin:  50px auto;
    background: linear-gradient(
      53deg,
      #ccfffc,
      #ffcccf
    );
  }
  div:hover {
    transform: scale(1.1);
  }
</style>
<div></div>
```
