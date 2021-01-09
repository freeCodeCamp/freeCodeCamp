---
id: 5a94fe6269fb03452672e462
title: 使用 auto-fit 创建弹性布局
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/c3dPph8'
forumTopicId: 301127
---

# --description--

`auto-fit` 效果几乎和 `auto-fill` 一样。不同点仅在于，当容器的大小大于各网格项之和时，`auto-fill` 会持续地在一端放入空行或空列，这样就会使所有网格项挤到另一边；而 `auto-fit` 则不会在一端放入空行或空列，而是会将所有网格项拉伸至合适的大小。

**注意：**如果容器宽度不足以将所有网格项放在同一行，余下的网格项将会移至新的一行。

# --instructions--

在第二个网格中，请用 `auto-fit` 和 `repeat` 来填充网格，其中列宽的最小值为 `60px`，最大值为`1fr`。你可以调整最右侧的预览区来查看效果。

# --hints--

class 为 `container2` 的元素应具有 `grid-template-columns` 属性，且属性值应使用 `repeat` 和 `auto-fit`，以便将最小宽度为 `60px`、最大宽度为 `1fr` 的列填充至网格。

```js
assert(
  code.match(
    /.container2\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?auto-fit\s*?,\s*?minmax\s*?\(\s*?60px\s*?,\s*?1fr\s*?\)\s*?\)\s*?;[\s\S]*}/gi
  )
);
```

# --solutions--

