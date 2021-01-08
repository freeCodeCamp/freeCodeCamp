---
id: 587d781e367417b2b2512acc
title: 固定定位的参照物是浏览器的窗口
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MDNUR'
forumTopicId: 301061
---

# --description--

接下来要介绍的是 `fixed` 定位，它是一种特殊的绝对（absolute）定位，区别是其包含块是浏览器窗口。和绝对定位类似，在 `fixed` 定位的元素中，我们也可以使用 top、bottom、left、right 属性来调整元素的位置，并且也会将元素从当前的文档流里面移除，其它元素会忽略它的存在。

但 `fixed` 和 `absolute` 的最明显的区别在于，`fixed` 定位元素不会随着屏幕滚动而移动。

# --instructions--

我们已经将代码里导航栏的 id 设置为了 `navbar`。请把它的 `position` 设置成 `fixed`，同时分别设定其 `top` 和 `left` 属性值为 0 像素。修改后，你可以滑动预览窗口，观察导航栏的位置。

# --hints--

`#navbar` 元素的 `position` 属性值应为 `fixed`。

```js
assert($('#navbar').css('position') == 'fixed');
```

`#navbar` 元素的 `top` 属性值应为 `0px`。

```js
assert($('#navbar').css('top') == '0px');
```

`#navbar` 元素的 `left` 属性值应为 `0px`。

```js
assert($('#navbar').css('left') == '0px');
```

# --solutions--

