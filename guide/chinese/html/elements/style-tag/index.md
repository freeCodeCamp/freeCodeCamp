---
title: Style Tag
localeTitle: 样式标签
---
## 样式标签

样式标记的使用类似于css文件，除了HTML内部，如下所示：
```
    <head> 
      <title>Your Title</title> 
      <style> 
        p { 
          color:red; 
        } 
      </style> 
    </head> 
```

这会使段落标记的颜色变为红色。如果你只是想放一些代码，它会很有用，但如果你想要一个非常长的样式表，那么我建议你只使用`<link />` 。

#### 更多信息：

[W3C学校](https://www.w3schools.com/tags/tag_style.asp)

更多信息：

样式标记用于为文档内的Web页面设置任何CSS样式。样式标记应嵌套在html文档的head部分中：

```html

<head> 
  <style> 
  h1 { 
     text-align: center; 
     font-family: sans-serif; 
     } 
  </style> 
 </head> 
```

您可以根据其语法在样式标记内编写任何CSS代码。