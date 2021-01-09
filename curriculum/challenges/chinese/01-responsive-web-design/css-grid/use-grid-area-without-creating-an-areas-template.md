---
id: 5a94fe2669fb03452672e45e
title: 使用 grid-area 创建区域模板
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/c6N7VhK'
forumTopicId: 301135
---

# --description--

我们在上一次挑战中学到的 `grid-area` 属性还有另一种使用方式。如果网格中没有定义区域模板，你也可以像这样为它添加一个模板：

```css
item1 { grid-area: 1/1/2/4; }
```

这里使用了你之前学习的网格线编号来定义网格项的区域。上例中数字代表这些值：

```css
grid-area: 起始的水平网格线 / 起始的垂直网格线 / 结束的水平网格线 / 结束的垂直网格线;
```

因此，示例中的网格项将占用第 1 条水平网格线（起始）和第 2 条水平网格线（终止）之间的行，及第 1 条垂直网格线（起始）和第 4 条垂直网格线（终止）之间的列。

# --instructions--

请用 `grid-area` 属性将 `class` 为 `item5` 的元素放置在第 3 条和第 4 条水平网格线，以及第 1 条和第 4 条垂直网格线之间的区域内。

# --hints--

`class` 为 `item5` 的元素应具有 `grid-area` 属性且属性值应为 `3/1/4/4`。

```js
assert(
  code.match(
    /.item5\s*?{[\s\S]*grid-area\s*?:\s*?3\s*?\/\s*?1\s*?\/\s*?4\s*?\/\s*?4\s*?;[\s\S]*}/gi
  )
);
```

# --solutions--

