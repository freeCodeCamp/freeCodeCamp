---
id: 587d78b1367417b2b2512b0a
title: Use a Retina Image for Higher Resolution Displays
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp7VfD'
forumTopicId: 1
localeTitle: 针对高分辨率屏幕应使用视网膜图片
---

## Description
<section id='description'>
随着联网设备的增加，设备的尺寸和规格有所不同，它们使用的显示器在内部和外部可能也不同。像素密度（PPI 或 DPI）就是设备之间的其中一个不同点。最著名的显示器就是最新的 Apple MacBook Pro 笔记本电脑和最近的 iMac 电脑上的“视网膜显示器”。由于“视网膜”和“非视网膜”显示器之间的像素密度不同，某些未考虑高分辨率显示器的图像在高分辨率显示器上渲染时可能看起来“像素化”。

使图像在高分辨率显示器（例如 MacBook Pro 的“视网膜显示器”）上正常显示的最简单方法是将其 width 和 height 值设置为原始文件的一半，如下所示：

```html
<style>
  img { height: 250px; width: 250px; }
</style>
<img src="coolPic500x500" alt="A most excellent picture">
```

</section>

## Instructions
<section id='instructions'>

设置 <code>img</code> 标签的 <code>width</code> 和 <code>height</code> 为它们原始宽高的一半。在这个例子中，原始 <code>height</code> 和原始 <code>width</code> 的值都为 200px。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>img</code> 标签的 <code>width</code> 值应为 100px。'
    testString: assert($('img').css('width') == '100px');
  - text: '<code>img</code> 标签的 <code>height</code> 值应为 100px。'
    testString: assert($('img').css('height') == '100px');

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
              