---
title: Target the Parent of an Element Using jQuery
localeTitle: استهداف أصل عنصر باستخدام jQuery
---
## استهداف أصل عنصر باستخدام jQuery

## حل

 `<script> 
  $(document).ready(function() { 
    $("#target1").parent().css("background-color", "red"); // Selects the parent of #target1 and changes its background-color to red 
  }); 
 </script> 
`