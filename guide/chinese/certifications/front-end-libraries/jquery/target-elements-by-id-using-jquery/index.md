---
title: Target Elements by id Using jQuery
localeTitle: id的目标元素使用jQuery
---
## id的目标元素使用jQuery

## 解

```javascript
<script> 
  $(document).ready(function() { 
    $("button").addClass("animated bounce"); 
    $(".well").addClass("animated shake"); 
    $("#target3").addClass("fadeOut"); // Target elements with the id "target3" and add the class "fadeOut" to them. 
  }); 
 </script> 

```