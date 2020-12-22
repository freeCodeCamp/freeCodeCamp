---
id: 587d781e367417b2b2512acc
title: 固定定位的参照物是浏览器的窗口
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MDNUR'
forumTopicId: 301061
---

# --description--

接下来要介绍的是 `fixed` 定位，它是一种特殊的绝对（absolute）定位，区别是其包含块是浏览器窗口。和绝对定位类似，`fixed` 定位使用 top、bottom、left 和 right 属性来调整元素的位置，并且会将元素从当前的文档流里面移除，其它元素会忽略它的存在。

`fixed` 定位和 `absolute` 定位的最明显的区别是 `fixed` 定位元素不会随着屏幕滚动而移动。

# --instructions--

代码里的导航栏已经添加了值为 `navbar` 的 id。把它的 `position` 设置成`fixed`，设定其 `top`和 `left` 为 0 像素。添加代码之后，滑动预览窗口，观察导航栏的位置。

# --hints--

`>#navbar` 元素应当有一个值为 `fixed` 的 `position` CSS 属性

```js
assert($('#navbar').css('position') == 'fixed');
```

你的 `#navbar` 元素应当有值为 `0px` 的 `top` CSS 属性。

```js
assert($('#navbar').css('top') == '0px');
```

你的 `#navbar` 元素应当有值为 `0px` 的 `left` CSS 属性。

```js
assert($('#navbar').css('left') == '0px');
```

# --solutions--

