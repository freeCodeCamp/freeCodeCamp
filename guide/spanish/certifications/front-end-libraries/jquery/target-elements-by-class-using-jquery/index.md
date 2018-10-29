---
title: Target Elements by Class Using jQuery
localeTitle: Elementos de destino por clase usando jQuery
---
## Elementos de destino por clase usando jQuery

*   Puedes encontrar elementos con el selector de clase jQuery. // $ (. className)
*   En este ejemplo, le permite seleccionar elementos con la clase ".well"

## Solución

```javascript
<script> 
  $(document).ready(function() { 
    $(".well").addClass("animated bounce"); 
    $(".well").addClass("shake"); 
  }); 
 </script> 

```