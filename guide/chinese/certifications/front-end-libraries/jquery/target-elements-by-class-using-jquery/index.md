---
title: Target Elements by Class Using jQuery
localeTitle: 使用jQuery按类目标元素
---
## 使用jQuery按类目标元素

*   您可以使用jQuery类选择器查找元素。 // $（。className）
*   在此示例中，它允许您选择类“.well”的元素

## 解

```javascript
<script> 
  $(document).ready(function() { 
    $(".well").addClass("animated bounce"); 
    $(".well").addClass("shake"); 
  }); 
 </script> 

```