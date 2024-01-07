---
id: 587d78a5367417b2b2512ada
title: 使用CSS Transform scale 屬性在懸停時縮放元素
challengeType: 0
videoUrl: 'https://scrimba.com/c/cyLPJuM'
forumTopicId: 301077
dashedName: use-the-css-transform-scale-property-to-scale-an-element-on-hover
---

# --description--

`transform` 屬性有很多函數可以調用，可以對元素進行調整大小、移動、旋轉、翻轉等操作。 當使用僞類選取元素的指定狀態（如 `:hover`）時，我們可以通過 `transform` 屬性非常方便地給元素添加交互。

下面是當用戶懸停在段落元素時，段落大小縮放到原始大小 2.1 倍的例子：

```css
p:hover {
  transform: scale(2.1);
}
```

**注意：** 給 `div` 元素添加 transform 也會影響這個 div 包裹的子元素。

# --instructions--

通過僞類，給 `div` 的 `hover` 狀態添加 `transform` 屬性，使 `div` 當鼠標懸停時大小縮放到原始大小的 1.1 倍。

# --hints--

`div` 元素在懸停時大小應該縮放到原始大小的 1.1 倍。

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
