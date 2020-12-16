---
id: bad87fee1348bd9aede08807
title: 设置元素的字体家族
challengeType: 0
videoUrl: 'https://scrimba.com/c/c3bvpCg'
forumTopicId: 18278
---

# --description--

通过`font-family`属性，可以设置元素里面的字体样式。

如果你想设置`h2`元素的字体为`sans-serif`，你可以用以下的 CSS 规则：

```css
h2 {
  font-family: sans-serif;
}
```

# --instructions--

确保`p`元素使用`monospace`字体。

# --hints--

`p`元素应该使用`monospace`字体。

```js
assert(
  $('p')
    .not('.red-text')
    .css('font-family')
    .match(/monospace/i)
);
```

# --solutions--

