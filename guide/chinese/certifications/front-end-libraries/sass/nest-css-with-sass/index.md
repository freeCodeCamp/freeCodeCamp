---
title: Nest CSS with Sass
localeTitle: 使用Sass嵌套CSS
---
## 使用Sass嵌套CSS

*   在Sass中，嵌套CSS规则允许定义层次结构选择器。
*   您可以通过嵌套CSS规则来组织样式表。

## 例

```sass
.title{ 
  strong{} 
  em{} 
 } 
 
 // This will be compiled into: 
 
 .title{} 
 .title strong{} 
 .title em{} 
```

## 提示1：

*   您可能想要在第4行更改“}”的位置。

## 解

```sass
<style type='text/sass'> 
  .blog-post { 
    h1 { 
     text-align: center; 
     color: blue; 
    } 
    p { 
        font-size: 20px; 
    } 
  } 
 </style> 

```