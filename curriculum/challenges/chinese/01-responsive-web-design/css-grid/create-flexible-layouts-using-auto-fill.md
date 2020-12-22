---
id: 5a94fe5469fb03452672e461
title: 使用 auto-fill 创建弹性布局
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cmzdycW'
forumTopicId: 301126
---

# --description--

重复方法带有一个名为<dfn>自动填充（auto-fill）</dfn>的功能。它的功能是根据容器的大小，尽可能多地放入指定大小的行或列。你可以通过结合`auto-fill`和`minmax`来更灵活地布局。

在最右侧的预览区中，`grid-template-columns`被设置为：

```css
repeat(auto-fill, minmax(60px, 1fr));
```

上面的代码效果：列的宽度会随容器大小改变，在可以插入一个 60px 宽的列之前，当前行的所有列会一直拉伸（译者注：动手试一下你就明白了）。 **注意：** 如果容器无法使所有网格项放在同一行，余下的网格项将移至新的一行。

# --instructions--

在第一个网格中，用`auto-fill`和`repeat`来填充网格，其中列宽的最小值为`60px`，最大值为`1fr`。你可以调整最右侧的预览区大小，查看自动填充效果。

# --hints--

`container`类应该有`grid-template-columns`属性且使用`repeat`和`auto-fill`，以便将最小宽度为`60px`，最大宽度为`1fr`的列填充至网格。

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?auto-fill\s*?,\s*?minmax\s*?\(\s*?60px\s*?,\s*?1fr\s*?\)\s*?\)\s*?;[\s\S]*}/gi
  )
);
```

# --solutions--

