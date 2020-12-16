---
id: 587d781e367417b2b2512acb
title: 绝对定位的参照物是元素的父元素
challengeType: 0
videoUrl: 'https://scrimba.com/c/cyLJ7c3'
forumTopicId: 301060
---

# --description--

接下来要介绍 CSS `position` 属性的取值选项 `absolute`，`absolute` 相对于其包含块定位。和 `relative` 定位不一样，`absolute` 定位会将元素从当前的文档流里面移除，周围的元素会忽略它。可以用 CSS 的 top、bottom、left 和 right 属性来调整元素的位置。

`absolute` 定位比较特殊的一点是元素的定位参照于最近的已定位祖先元素。如果它的父元素没有添加定位规则（默认是 `position:relative;`）,浏览器会继续寻找直到默认的 body 标签。

# --instructions--

通过声明 `position` 为 `absolute`，固定 `#searchbar` 元素到它父元素 `section` 的右上角。即设定其 `top` 和 `right` 为 50 像素。

# --hints--

`#searchbar` 元素应当有一个值为 `absolute` 的 `position` CSS 属性。

```js
assert($('#searchbar').css('position') == 'absolute');
```

你的 `#searchbar` 元素应当有值为 `50px` 的 `top` CSS 属性。

```js
assert($('#searchbar').css('top') == '50px');
```

你的 `#searchbar` 元素应当有值为 `50px` 的 `right` CSS 属性。

```js
assert($('#searchbar').css('right') == '50px');
```

# --solutions--

