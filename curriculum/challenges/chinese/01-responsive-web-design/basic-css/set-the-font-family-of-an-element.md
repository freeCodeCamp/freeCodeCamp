---
id: bad87fee1348bd9aede08807
title: 设置元素的字体族名
challengeType: 0
videoUrl: 'https://scrimba.com/c/c3bvpCg'
forumTopicId: 18278
---

# --description--

通过 `font-family` 属性，我们可以设置元素里的字体族名。

如果你想将 `h2` 元素的字体设置为 `sans-serif`，可以这样写：

```css
h2 {
  font-family: sans-serif;
}
```

# --instructions--

请将 `p` 元素的字体设置为 `monospace`。

# --hints--

`p` 元素应使用 `monospace` 作为字体。

```js
assert(
  $('p')
    .not('.red-text')
    .css('font-family')
    .match(/monospace/i)
);
```

# --solutions--

