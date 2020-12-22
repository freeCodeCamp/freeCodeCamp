---
id: 5a94fe0569fb03452672e45c
title: 将网格划分为区域模板
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cLLpGAy'
forumTopicId: 301130
---

# --description--

你可以将网格中的一些网格单元格组合成一个<dfn>区域（area）</dfn>，并为该区域指定一个自定义名称。你可以通过给容器加上`grid-template-areas`来实现：

```css
grid-template-areas:
  "header header header"
  "advert content content"
  "footer footer footer";
```

上面的代码将顶部三个单元格合并成一个名为`header`的区域，将底部三个单元格合并为一个名为`footer`的区域，并在中间行生成两个区域————`advert`和`content`。 **注意：**  
在代码中，每个单词代表一个网格单元格，每对引号代表一行。 除了自定义标签，你还能使用句点（`.`）来表示一个空单元格。

# --instructions--

请放置区域模板，让名为`advert`的区域变成空单元格。

# --hints--

`container`类应该有类似于最右侧预览区的`grid-template-areas`属性且用`.`代替`advert`。

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-template-areas\s*?:\s*?"\s*?header\s*?header\s*?header\s*?"\s*?"\s*?.\s*?content\s*?content\s*?"\s*?"\s*?footer\s*?footer\s*?footer\s*?"\s*?;[\s\S]*}/gi
  )
);
```

# --solutions--

