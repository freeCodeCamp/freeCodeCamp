---
id: 587d78a5367417b2b2512ad9
title: 使用 CSS Transform scale 属性可以更改元素的大小
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MZVSg'
forumTopicId: 301076
---

# --description--

CSS 属性 `transform` 里面的 `scale()` 函数可以用来改变元素的显示比例。下面的例子把页面的 `p` 元素放大到了原来的 2 倍：

```css
p {
  transform: scale(2);
}
```

# --instructions--

把 id 为 `ball2` 的元素放大到原始大小的 1.5 倍。

# --hints--

`#ball2` 的 `transform` 属性应该为原始大小的 1.5 倍。

```js
assert(
  code.match(
    /#ball2\s*?{\s*?left:\s*?65%;\s*?transform:\s*?scale\(1\.5\);\s*?}|#ball2\s*?{\s*?transform:\s*?scale\(1\.5\);\s*?left:\s*?65%;\s*?}/gi
  )
);
```

# --solutions--

