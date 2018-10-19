---
title: Change the CSS of an Element Using jQuery
localeTitle: Изменение CSS элемента с помощью jQuery
---
Мы также можем изменить CSS элемента HTML непосредственно с помощью jQuery.

Query имеет функцию под названием `.css()` которая позволяет вам изменять CSS элемента.
```
<script> 
  $(document).ready(function() { 
    $("#target1").css("color", "red"); 
 
  }); 
 </script> 

```