---
title: Override All Other Styles by using Important
localeTitle: 使用重要覆盖所有其他样式
---
## 使用重要覆盖所有其他样式

您可以使用`!important`覆盖CSS中的所有其他样式。

此覆盖被认为是最重要的，并且优先于其余部分。

最重要和最不重要的列表如下： \`\`\`

1.  重要的（重要的）
2.  内联样式
3.  id声明
4.  类声明
```
Here is an example of how to write/apply !important: 
```

CSS 颜色：黑色！重要;
```
To apply these in context and see `!important` take precedence, here is an example: 
```

HTML

body { font-family: Helvetica; color: purple; } #violet-text { color: violet; } .black-text { color: black !important; } .blue-text { color: blue; }

# 示例文本

\`\`\`

此结果将以`Example Text`为黑色结束，因为`!important`添加到`color: black` 。