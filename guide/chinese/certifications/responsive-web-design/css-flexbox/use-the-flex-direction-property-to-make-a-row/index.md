---
title: Use the flex-direction Property to Make a Row
localeTitle: 使用flex-direction属性创建一行
---
## 使用flex-direction属性创建一行

一旦你有一个flex容器，通过添加_display：flex;_在父容器中，您可以通过添加以下内容指定是否要将子项堆叠在一行中：

```css
#box-container { 
    display: flex; /* This makes the flex container */ 
    height: 500px; 
    flex-direction: row-reverse; /* This makes the direction be a row with reversed elements */ 
  } 
```

您会注意到颜色如何切换位置，因为Flex容器的默认方向是行，您可能已经从[tweet示例中](https://github.com/freecodecamp/guides/tree/master/src/pages/responsive-web-design/css-flexbox/add-flex-superpowers-to-the-tweet-embed/index.md)注意到了这一点。