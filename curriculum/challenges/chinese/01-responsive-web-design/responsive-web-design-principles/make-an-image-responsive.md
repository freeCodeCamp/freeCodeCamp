---
id: 587d78b1367417b2b2512b09
title: Make an Image Responsive
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp7VfD'
forumTopicId: 1
localeTitle: 使图片根据设备尺寸自如响应
---

## Description
<section id='description'>
用 CSS 来让图片自适应其实很简单。你只需要给图片添加这些属性:

```css
img {
  max-width: 100%;
  height: auto;
}
```

设置 `max-width` 值为 `100%` 可确保图片不超出父容器的范围。设置 `height `属性为 `auto` 保持图片的原始宽高比。
</section>

## Instructions
<section id='instructions'>

给 `responsive-img` 添加样式规则，使其成为响应式。它不应该超出父容器（在本例中，即预览窗口）的范围，并保持宽高比不变。添加代码后，拖动浏览器窗口，看看图片发生什么变化。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>responsive-img</code> 类应设置 <code>max-width</code> 为 <code>100%</code>。
    testString: assert(getComputedStyle($('.responsive-img')[0]).maxWidth === '100%');
  - text: <code>responsive-img</code> 类应设置 <code>height</code> 为 <code>auto</code>。
    testString: assert(code.match(/height:\s*?auto;/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
.responsive-img {


}

img {
  width: 600px;
}
</style>

<img class="responsive-img" src="https://s3.amazonaws.com/freecodecamp/FCCStickerPack.jpg" alt="freeCodeCamp stickers set">
<img src="https://s3.amazonaws.com/freecodecamp/FCCStickerPack.jpg" alt="freeCodeCamp stickers set">
```



</div>



</section>

## Solution
<section id='solution'>

```html
<style>
.responsive-img {
  max-width: 100%;
  height: auto;
}

img {
  width: 600px;
}
</style>

<img class="responsive-img" src="https://s3.amazonaws.com/freecodecamp/FCCStickerPack.jpg" alt="freeCodeCamp stickers set">
<img src="https://s3.amazonaws.com/freecodecamp/FCCStickerPack.jpg" alt="freeCodeCamp stickers set">
```

</section>
              