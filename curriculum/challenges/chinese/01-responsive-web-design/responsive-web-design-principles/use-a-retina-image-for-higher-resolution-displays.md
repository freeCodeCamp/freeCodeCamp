---
id: 587d78b1367417b2b2512b0a
title: 针对高分辨率屏幕应使用视网膜图片
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp7VfD'
forumTopicId: 1
dashedName: use-a-retina-image-for-higher-resolution-displays
---

# --description--

随着联网设备的增加，设备间的区别不仅发生在尺寸和规格上，还发生在用于显示的设备上。像素密度就是区分不同显示设备的一个指标，它一般会以 PPI（Pixel Per Inch，即每英寸像素）或 DPI（每英寸点数）为计量单位。最著名的显示器就是 Apple MacBook Pro 笔记本电脑上的“视网膜显示屏”（现亦用于 iMac）。由于“视网膜显示屏”和“非视网膜显示屏”显示器之间像素密度的不同，某些未考虑高分辨率显示器的图像在高分辨率显示器上渲染时，可能因出现“像素化”而不够清晰。

要让图像在高分辨率显示器（例如 MacBook Pro 的“视网膜显示屏”）上正常显示，最简单的方法是将其 width 和 height 值设置为原始文件的一半，如下所示：

```html
<style>
  img { height: 250px; width: 250px; }
</style>
<img src="coolPic500x500" alt="A most excellent picture">
```

# --instructions--

请将 `img` 标签的 `width` 和 `height` 设置为它们原始宽高的一半。在这个例子中，原始 `height` 和 `width` 的值都为 200px。

# --hints--

`img` 标签的 `width` 属性值应为 100px。

```js
assert($('img').css('width') == '100px');
```

`img` 标签的 `height` 属性值应为 100px。

```js
assert($('img').css('height') == '100px');
```

# --seed--

## --seed-contents--

```html
<style>

</style>

<img src="https://s3.amazonaws.com/freecodecamp/FCCStickers-CamperBot200x200.jpg" alt="freeCodeCamp sticker that says 'Because CamperBot Cares'">
```

# --solutions--

```html
<style>
  img { 
    height: 100px; 
    width: 100px; 
  }
</style>

<img src="https://s3.amazonaws.com/freecodecamp/FCCStickers-CamperBot200x200.jpg" alt="freeCodeCamp sticker that says 'Because CamperBot Cares'">
```
