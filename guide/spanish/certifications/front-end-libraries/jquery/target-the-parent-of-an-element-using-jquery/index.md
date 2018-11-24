---
title: Target the Parent of an Element Using jQuery
localeTitle: Apunta al padre de un elemento usando jQuery
---
## Apunta al padre de un elemento usando jQuery

## Solución

```js
<script> 
  $(document).ready(function() { 
    $("#target1").parent().css("background-color", "red"); // Selects the parent of #target1 and changes its background-color to red 
  }); 
 </script> 

```