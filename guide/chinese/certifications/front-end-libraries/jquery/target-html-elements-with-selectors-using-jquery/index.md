---
title: Target HTML Elements with Selectors Using jQuery
localeTitle: 使用选择器使用jQuery定位HTML元素
---
*   JQuery选择器允许您选择和操作HTML元素。
*   这些选择器以美元符号和括号开头：$（）
*   您可以根据名称，ID，类，类型，属性，属性值等“查找”（或选择）HTML元素。

## 例

```javascipt
//You can select all <p> elements on a page like this  =  $("p") 
  $(document).ready(function(){ 
    $("button").click(function(){ 
        $("p").hide(); 
    }); 
 }); 
```

## 解

```javascript
<script> 
  $(document).ready(function() { 
      $("button").addClass("animated bounce"); // We are selecting the button elements and adding "animated bounce" class to them. 
  }); 
 </script> 

```