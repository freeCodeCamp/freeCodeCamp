---
id: 587d78a4367417b2b2512ad5
title: 调整颜色的色调
challengeType: 0
videoUrl: 'https://scrimba.com/c/cEDJvT7'
forumTopicId: 301038
---

# --description--

`hsl()` 使 CSS 更改色调更方便。给纯色添加白色可以创造更浅的色调，添加黑色可以创造更深的色调。另外，还可以通过给纯色添加灰色来同时改变颜色的深浅和明暗。回忆下 `hsl()` 里面的 ‘s’ 和 ‘l’ 分辨代表饱和度和亮度。饱和度代表灰色的占比，亮度代表白色和黑色的占比。这在当你有了一个基色调却需要微调时非常有用。

# --instructions--

页面的导航栏目前继承了 `header` 的 `background-color`。改变 `nav` 元素的 `background-color`，保留基色蓝绿色，调整它的色调和明暗使它具有 80% 的饱和度以及 25% 的亮度。

# --hints--

`nav` 元素应该有一个使用 `hsl()` 属性调节蓝绿色调的 `background-color` CSS 属性。

```js
assert(
  code.match(/nav\s*?{\s*?background-color:\s*?hsl\(180,\s*?80%,\s*?25%\)/gi)
);
```

# --solutions--

