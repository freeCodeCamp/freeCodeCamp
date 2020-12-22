---
id: 587d7791367417b2b2512ab5
title: 使用 height 属性调整元素的宽度
challengeType: 0
videoUrl: 'https://scrimba.com/c/cEDaDTN'
forumTopicId: 301034
---

# --description--

和 `width` 属性类似，你可以使用 CSS 里面的 `height` 属性来指定元素的高度。下面这个例子把图片的高度设置为 20px：

```css
img {
  height: 20px;
}
```

# --instructions--

给 `h4` 标签添加 `height` 属性并设置值为 25px。

**注意：** 可能需要将浏览器的缩放比调整为 100% 才能通过这一挑战。

# --hints--

你应该设置 `h4` 的 `height` 属性，使其值为 `25px`。

```js
assert(
  Math.round(document.querySelector('h4').getBoundingClientRect().height) ===
    25 &&
    /h4{\S*height:25px(;\S*}|})/.test($('style').text().replace(/\s/g, ''))
);
```

# --solutions--

