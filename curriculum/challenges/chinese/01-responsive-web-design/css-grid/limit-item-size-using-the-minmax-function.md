---
id: 5a94fe4469fb03452672e460
title: 使用 minmax 函数限制项目大小
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cD97RTv'
forumTopicId: 301131
---

# --description--

此外，内置函数`minmax`也可以可用于设置`grid-template-columns`和`grid-template-rows`的值。它的作用是在网格容器改变大小时限制网格项的大小。为此，你需要指定网格项允许的尺寸范围。例如：

```css
grid-template-columns: 100px minmax(50px, 200px);
```

在上面的代码中，通过`grid-template-columns`添加两列，第一列宽度为 100px，第二列宽度最小值是 50px，最大值是 200px。

# --instructions--

用`minmax`函数替换`repeat`函数中的`1fr`，限定其最小值为`90px`，最大值为`1fr`，你可以调整最右侧的预览面板查看效果。

# --hints--

`container`类应该有`grid-template-columns`属性且设置重复 3 列，每列宽度最小值为`90px`，最大值为`1fr`。

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?3\s*?,\s*?minmax\s*?\(\s*?90px\s*?,\s*?1fr\s*?\)\s*?\)\s*?;[\s\S]*}/gi
  )
);
```

# --solutions--

