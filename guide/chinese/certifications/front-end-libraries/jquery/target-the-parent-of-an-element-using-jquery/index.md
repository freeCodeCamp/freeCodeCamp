---
title: Target the Parent of an Element Using jQuery
localeTitle: 使用jQuery定位元素的父级
---
## 使用jQuery定位元素的父级

## 解

```js
<script> 
  $(document).ready(function() { 
    $("#target1").parent().css("background-color", "red"); // Selects the parent of #target1 and changes its background-color to red 
  }); 
 </script> 

```