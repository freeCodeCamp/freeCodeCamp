---
id: bad88fee1348bd9aedf08825
title: 调整元素的内边距
challengeType: 0
videoUrl: 'https://scrimba.com/c/cED8ZC2'
forumTopicId: 301083
---

# --description--

我们先暂时把猫咪图片放在一边，让我们去学习更多 HTML 相关样式。

你可能已经注意到了，所有的 HTML 元素基本都是以矩形为基础。

每个 HTML 元素周围的矩形空间由三个重要的属性来控制：`padding（内边距）`，`margin（外边距）`和`border（边框）`。

`padding`控制着元素内容与`border`之间的空隙大小。

在这里，我们可以看到蓝色框和红色框都在黄色框里面。可以发现，红色框比蓝色框有着更多的`padding`填充空间。

当你增加蓝色框的`padding`值，文本内容与边框的距离会逐渐拉大。

# --instructions--

蓝色的框`padding`的值要跟红色框的一样大小。

# --hints--

`blue-box` class 的`padding`值应为`20px`。

```js
assert($('.blue-box').css('padding-top') === '20px');
```

# --solutions--

