---
title: Target Elements by Class Using jQuery
localeTitle: Целевые элементы по классам Использование jQuery
---
## Целевые элементы по классам Использование jQuery

*   Вы можете найти элементы с селектором класса jQuery. // $ (. className)
*   В этом примере он позволяет вам выбирать элементы с классом «.well»,

## Решение

```javascript
<script> 
  $(document).ready(function() { 
    $(".well").addClass("animated bounce"); 
    $(".well").addClass("shake"); 
  }); 
 </script> 

```