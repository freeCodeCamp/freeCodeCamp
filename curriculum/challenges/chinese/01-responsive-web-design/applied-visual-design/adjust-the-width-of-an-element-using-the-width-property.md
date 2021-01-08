---
id: 587d7791367417b2b2512ab4
title: 使用 width 属性调整元素的宽度
challengeType: 0
videoUrl: 'https://scrimba.com/c/cvVLPtN'
forumTopicId: 301039
---

# --description--

你可以使用 CSS 里的 `width` 属性来指定元素的宽度。属性值可以是相对单位（比如 em）、绝对单位（比如 px）、或者其父元素宽度的百分比。下面这段代码可以把图片的宽度设置为 220px：

```css
img {
  width: 220px;
}
```

# --instructions--

请使用 `fullCard` class 来选择卡片元素，为它添加 `width` 属性，并将它的宽度设置为 245px。

# --hints--

应使用 `fullCard` class 选择器将卡片的 `width` 属性值设置为 `245px`。

```js
const fullCard = code.match(/\.fullCard\s*{[\s\S]+?[^}]}/g);
assert(
  fullCard &&
    /width\s*:\s*245px\s*(;|})/gi.test(fullCard[0]) &&
    $('.fullCard').css('maxWidth') === 'none'
);
```

# --solutions--

