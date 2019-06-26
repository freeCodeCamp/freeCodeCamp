---
id: 587d78b1367417b2b2512b09
title: Make an Image Responsive
challengeType: 0
videoUrl: ''
localeTitle: 使图像响应
---

## Description
<section id="description">使用CSS响应图像实际上非常简单。而不是对元素应用绝对宽度： <code>img { width: 720px; }</code>您可以使用： <blockquote> img { <br>最大宽度：100％; <br>显示：块; <br>身高：自动; <br> } </blockquote> 100％的<code>max-width</code>属性会缩放图像以适合其容器的宽度，但图像的拉伸宽度不会超过其原始宽度。将<code>display</code>属性设置为block会将图像从内联元素（默认值）更改为其自身行上的块元素。 auto的<code>height</code>属性保持图像的原始宽高比。 </section>

## Instructions
<section id="instructions">添加<code>img</code>标记的样式规则，使其响应其容器的大小。它应该显示为块级元素，它应该适合其容器的整个宽度而不拉伸，并且它应该保持其原始的宽高比。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 測試文本
    testString: assert(true);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>

</style>

<img src="https://s3.amazonaws.com/freecodecamp/FCCStickerPack.jpg" alt="freeCodeCamp stickers set">

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
