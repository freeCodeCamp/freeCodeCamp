---
id: 58a7a6ebf9a6318348e2d5aa
title: 修改动画的填充模式
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJDmcE'
forumTopicId: 301064
---

# --description--

太棒了，但是现在还不完美。注意动画在 `500ms` 之后重置了，所以按钮又变成了之前的颜色。而我们想要的效果是按钮在悬停时始终高亮。

这可以通过把 `animation-fill-mode` 设置成 `forwards` 来实现。`animation-fill-mode` 指定了在动画结束时元素的样式。你可以向这样设置它：

`animation-fill-mode: forwards;`

# --instructions--

设置 `button:hover` 的 `animation-fill-mode`，使按钮悬停时保持高亮。

# --hints--

`button:hover` 应该有一个值为 `forwards` 的 `animation-fill-mode` 的属性。

```js
assert(
  code.match(
    /button\s*?:\s*?hover\s*?{[\s\S]*animation-fill-mode\s*?:\s*?forwards\s*?;[\s\S]*}/gi
  ) &&
    code.match(
      /button\s*?:\s*?hover\s*?{[\s\S]*animation-name\s*?:\s*?background-color\s*?;[\s\S]*}/gi
    ) &&
    code.match(
      /button\s*?:\s*?hover\s*?{[\s\S]*animation-duration\s*?:\s*?500ms\s*?;[\s\S]*}/gi
    )
);
```

# --solutions--

