---
id: 587d78a4367417b2b2512ad5
title: 调整颜色的色调
challengeType: 0
videoUrl: 'https://scrimba.com/c/cEDJvT7'
forumTopicId: 301038
---

# --description--

`hsl()` 使 CSS 更改颜色色调更加方便。比如，给一个纯色添加白色可以调出更浅的色调；添加黑色可以创造更深的色调。另外，还可以通过给纯色添加灰色来同时改变颜色的深浅和明暗。回忆下 `hsl()` 里面的 ‘s’ 和 ‘l’ 分辨代表饱和度和亮度。饱和度代表灰色的占比，亮度代表白色和黑色的占比。`hsl()` 在你想获取一个基准色的变种的情景下会十分有用。

# --instructions--

所有元素的默认 `background-color` 都是透明色。当前页面的导航栏 `nav` 背景色之所以看起来是蓝绿色，是因为它背后的 `header` 的 `background-color` 属性值为 `cyan`。请将 `nav` 的 `background-color` 也设置为 `cyan`，但把它的饱和度调整为 80%，亮度调整为 25%。

# --hints--

`nav` 元素应该有一个使用 `hsl()` 属性调节蓝绿色调的 `background-color` 属性。

```js
assert(
  code.match(/nav\s*?{\s*?background-color:\s*?hsl\(180,\s*?80%,\s*?25%\)/gi)
);
```

# --solutions--

