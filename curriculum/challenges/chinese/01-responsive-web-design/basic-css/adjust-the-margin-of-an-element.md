---
id: bad87fee1348bd9aedf08822
title: 调整元素的外边距
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJarHW'
forumTopicId: 16654
---

# --description--

`margin（外边距）` 用来控制元素的边框与其他元素之间的距离。

在这里，我们可以看到蓝色框和红色框都在黄色框里。请注意，红色框的 `margin` 值要比蓝色框的大，因此红色框看起来比蓝色框要小。

如果你增加蓝色的 `margin` 值，它也会增加元素边框到其他周围元素的距离。

# --instructions--

请将蓝色框的 `margin` 值设置成和红色框 `margin` 值一样的大小。

# --hints--

class 为 `blue-box` 的元素的 `margin` 值应为 `20px`。

```js
assert($('.blue-box').css('margin-top') === '20px');
```

# --solutions--

