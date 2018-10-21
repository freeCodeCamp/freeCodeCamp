---
title: Change Text Inside an Element Using jQuery
localeTitle: 使用jQuery更改元素内的文本
---
使用jQuery，您可以更改元素的开始和结束标记之间的文本。您甚至可以更改HTML标记。

jQuery有一个名为`.html()`的函数，它允许您在元素中添加HTML标记和文本。之前在元素中的任何内容都将完全替换为您使用此功能提供的内容。

以下是如何重写和斜体化标题的文本：
```
$("h3").html("<em>jQuery Funhouse</em>"); 
```

jQuery也有一个类似的函数`.text()` ，它只改变文本而不添加标签。因此，当使用`.html()`请记住您将编辑整个标记而不仅仅是文本。