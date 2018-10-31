---
id: 587d78b1367417b2b2512b0a
title: Use a Retina Image for Higher Resolution Displays
challengeType: 0
videoUrl: ''
localeTitle: 使用Retina图像获得更高分辨率的显示
---

## Description
<section id="description">使图像显示为“视网膜”（并为视网膜显示进行优化）的最简单方法是将其<code>width</code>和<code>height</code>值定义为原始文件的一半。以下是仅使用原始高度和宽度的一半的图像示例： <blockquote> &lt;风格&gt; <br> img {身高：250px;宽度：250px; } <br> &lt;/样式&gt; <br> &lt;img src =“coolPic500x500”alt =“最精彩的图片”&gt; </blockquote></section>

## Instructions
<section id="instructions">将<code>img</code>标记的<code>width</code>和<code>height</code>设置为原始值的一半。在这种情况下，原始<code>height</code>和原始<code>width</code>都是200px。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的<code>img</code>标签应该有100像素的<code>width</code> 。
    testString: 'assert($("img").css("width") == "100px", "Your <code>img</code> tag should have a <code>width</code> of 100 pixels.");'
  - text: 你的<code>img</code>标签应该有100像素的<code>height</code> 。
    testString: 'assert($("img").css("height") == "100px", "Your <code>img</code> tag should have a <code>height</code> of 100 pixels.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>

</style>

<img src="https://s3.amazonaws.com/freecodecamp/FCCStickers-CamperBot200x200.jpg" alt="freeCodeCamp sticker that says 'Because CamperBot Cares'">

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
