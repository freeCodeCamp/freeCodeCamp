---
id: 5a90374338fddaf9a66b5d3a
title: 使用 justify-self 水平对齐项目
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cJbpKHq'
forumTopicId: 301122
---

# --description--

在 CSS 网格中，每个网格项的内容分别位于被称为<dfn>单元格（cell）</dfn>的框内。你可以使用网格项的`justify-self`属性，设置其内容的位置在单元格内沿行轴对齐的方式。默认情况下，这个属性的值是`stretch`，这将使内容占满整个单元格的宽度。该 CSS 网格属性也可以使用其他的值：

`start`：使内容在单元格左侧对齐，

`center`：使内容在单元格居中对齐，

`end`：使内容在单元格右侧对齐，

# --instructions--

使用`justify-self`属性让类为`item2`的网格项居中。

# --hints--

`item2`类应该有`justify-self`属性且值为`center`。

```js
assert(
  code.match(/.item2\s*?{[\s\S]*justify-self\s*?:\s*?center\s*?;[\s\S]*}/gi)
);
```

# --solutions--

