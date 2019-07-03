---
id: 587d78b1367417b2b2512b0a
title: Use a Retina Image for Higher Resolution Displays
challengeType: 0

videoUrl: ''
localeTitle: Use a Retina Image for Higher Resolution Displays
---

## Description
<section id='description'>
为优化图片在高分辨率设备下的显示效果，最简单的方式是定义它们的 <code>width</code> 和 <code>height</code> 值为源文件宽高的一半。
这是一个图片宽高设置为源文件一半的例子：
<blockquote>&lt;style&gt;<br>&nbsp;&nbsp;img { height: 250px; width: 250px; }<br>&lt;/style&gt;<br>&lt;img src=&quot;coolPic500x500&quot; alt=&quot;一张高质量的图片&quot;&gt;</blockquote>
</section>

## Instructions
<section id='instructions'>
设置 <code>img</code> 标签的 <code>width</code> 和 <code>height</code> 为它们原始宽高的一半。在这个例子中，原始 <code>height</code> 和原始 <code>width</code> 的值都为 200px。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>img</code> 标签的 <code>width</code> 值应为 100px。
    testString: assert($('img').css('width') == '100px', '<code>img</code> 标签的 <code>width</code> 值应为 100px。');
  - text: <code>img</code> 标签的 <code>height</code> 值应为 100px。
    testString: assert($('img').css('height') == '100px', '<code>img</code> 标签的 <code>height</code> 值应为 100px。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

    <div id='html-seed'>
```html
<style>,  ,</style>,,<img src="https://s3.amazonaws.com/freecodecamp/FCCStickers-CamperBot200x200.jpg" alt="freeCodeCamp sticker that says 'Because CamperBot Cares'">
```





</div>





</section>

              