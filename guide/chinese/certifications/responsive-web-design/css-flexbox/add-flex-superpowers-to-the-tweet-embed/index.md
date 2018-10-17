---
title: Add Flex Superpowers to the Tweet Embed
localeTitle: 添加Flex Superpowers到Tweet Embed
---
## 添加Flex Superpowers到Tweet Embed

[在前一个挑战的基础上](https://github.com/freecodecamp/guides/tree/master/src/pages/responsive-web-design/css-flexbox/use-display-flex-to-position-two-boxes/index.md) ，您需要将属性添加到正确的选择器中。这里的诀窍是识别正确的选择器然后你需要添加_display：flex;_属性。

标题将确保图片，名称，句柄和跟随按钮在水平方向上重新定位。

```CSS
header { 
    display: flex; 
 } 
```

将名称和句柄对齐，看起来像一个句子。

```CSS
header .profile-name { 
    display:flex; 
    margin-left: 10px; 
  } 
```

将属性添加到跟随按钮以及边距将使按钮居中到正确的大小。

```CSS
header .follow-btn { 
    display:flex; 
    margin: 0 0 0 auto; 
  } 
```

在页脚元素上使用相同的想法。