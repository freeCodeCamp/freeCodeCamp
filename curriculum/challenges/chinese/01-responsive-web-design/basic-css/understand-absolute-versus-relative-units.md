---
id: bad82fee1322bd9aedf08721
title: 理解绝对单位与相对单位
challengeType: 0
videoUrl: 'https://scrimba.com/c/cN66JSL'
forumTopicId: 301089
---

# --description--

最近的几个挑战都是设置元素的内边距和外边距的`px`值。像素`px`是一种长度单位，来告诉浏览器应该如何调整元素大小和空间大小。其实除了像素，CSS 也有其他不同的长度单位供我们使用。

单位长度的类型可以分成 2 种，一种是相对的，一种是绝对的。例如，`in`和`mm`分别代表着英寸和毫米。绝对长度单位会接近屏幕上的实际测量值，不过不同屏幕的分辨率会存在差异，可能会导致一些误差。

相对单位长度，就像`em`和`rem`，它们会依赖其他长度的值。就好像`em`的大小基于元素的字体的`font-size`值，如果你使用`em`单位来设置`font-size`值，它的值会跟随父元素的`font-size`值来改变。

**注意：**  
有些单位长度选项是相对视窗大小来改变值的，符合了响应式 web 的设计原则。

# --instructions--

给`red-box` class 添加`padding`属性，并设置为`1.5em`。

# --hints--

`red-box` class 应该含有`padding`属性。

```js
assert(
  $('.red-box').css('padding-top') != '0px' &&
    $('.red-box').css('padding-right') != '0px' &&
    $('.red-box').css('padding-bottom') != '0px' &&
    $('.red-box').css('padding-left') != '0px'
);
```

`red-box` class 的`padding`值应为 1.5em。

```js
assert(code.match(/\.red-box\s*?{[\s\S]*padding:\s*?1\.5em/gi));
```

# --solutions--

