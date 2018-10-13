---
title: Change the CSS of an Element Using jQuery
localeTitle: 使用jQuery更改元素的CSS
---
我们也可以使用jQuery直接更改HTML元素的CSS。

Query有一个名为`.css()`的函数，它允许您更改元素的CSS。
```
<script> 
  $(document).ready(function() { 
    $("#target1").css("color", "red"); 
 
  }); 
 </script> 

```