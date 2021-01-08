---
id: 587d78ac367417b2b2512af7
title: 在推文中使用 justify-content 属性
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/c43GgTa'
forumTopicId: 301115
---

# --description--

上一项挑战展示了 `justify-content` 属性的作用。如果我们想对齐推文内的子元素，可以把 `justify-content` 应用在 `.profile-name` 上。

# --instructions--

请在 header 中的 `.profile-name` 元素添加 CSS 属性 `justify-content`，把它的属性值设为上面挑战提到的任意可用值。

# --hints--

`.profile-name` 元素的 `justify-content` 可选用以下属性值：`center`、`flex-start`、`flex-end`、`space-between`、`space-around`。

```js
assert(
  code.match(
    /header\s.profile-name\s*{\s*?.*?\s*?.*?\s*?\s*?.*?\s*?justify-content\s*:\s*(center|flex-start|flex-end|space-between|space-around|space-evenly)\s*;/g
  )
);
```

# --solutions--

