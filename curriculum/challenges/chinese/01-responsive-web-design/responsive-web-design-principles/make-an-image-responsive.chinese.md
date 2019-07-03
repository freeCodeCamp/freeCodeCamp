---
id: 587d78b1367417b2b2512b09
title: Make an Image Responsive
challengeType: 0

videoUrl: ''
localeTitle: Make an Image Responsive
---

## Description
<section id='description'>
用 CSS 来让图片自适应其实很简单。不要使用绝对单位：
<code>img { width: 720px; }</code>
你应该使用：
<blockquote>img {<br>&nbsp;&nbsp;max-width: 100%;<br>&nbsp;&nbsp;display: block;<br>&nbsp;&nbsp;height: auto;<br>}</blockquote>
<code>max-width</code> 属性能让图片以 100% 的最大宽度适应其父容器的宽度，但图片不会拉伸得比原始宽度还宽。将 <code>display</code> 属性设置为 <code>block</code> 可以让 image 标签从内联元素（默认值）更改为块级元素。设置 <code>height</code> 属性为 auto 保持图片的原始宽高比。
</section>

## Instructions
<section id='instructions'>
给 <code>img</code> 标签增加样式规则使它自适应容器尺寸。应声明为块级元素，应适应它容器的宽度，应保持原本的宽高比。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>img</code> 标签应设置 <code>max-width</code> 为 100%。
    testString: 'assert(code.match(/max-width:\s*?100%;/g), "<code>img</code> 标签应设置 <code>max-width</code> 为 100%。");'
  - text: <code>img</code> 标签应设置 <code>display</code> 为 block。
    testString: assert($('img').css('display') == 'block', '<code>img</code> 标签应设置 <code>display</code> 为 block。');
  - text: <code>img</code> 标签应设置 <code>height</code> 为 auto。
    testString: 'assert(code.match(/height:\s*?auto;/g), "<code>img</code> 标签应设置 <code>height</code> 为 auto。");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

    <div id='html-seed'>
```html
<style>,  ,</style>,,<img src="https://s3.amazonaws.com/freecodecamp/FCCStickerPack.jpg" alt="freeCodeCamp stickers set">
```





</div>





</section>

              