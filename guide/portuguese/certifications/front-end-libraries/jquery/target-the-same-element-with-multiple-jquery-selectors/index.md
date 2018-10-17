---
title: Target the Same Element with Multiple jQuery Selectors
localeTitle: Segmente o mesmo elemento com vários seletores jQuery
---
## Segmente o mesmo elemento com vários seletores jQuery

## Solução

```javascript
<script> 
  $(document).ready(function() { 
    $("button").addClass("animated"); // Target elements with type "button" and add the class "animated" to them. 
    $(".btn").addClass("shake"); // Target elements with class ".btn" and add the class "shake" to them. 
    $("#target1").addClass("btn-primary"); // Target elements with id "#target1" and add the class "btn-primary" to them. 
  }); 
 </script> 

```