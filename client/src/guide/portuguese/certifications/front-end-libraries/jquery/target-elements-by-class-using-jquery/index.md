---
title: Target Elements by Class Using jQuery
localeTitle: Elementos de destino por classe usando jQuery
---
## Elementos de destino por classe usando jQuery

*   Você pode encontrar elementos com o seletor de classe jQuery. // $ (. className)
*   Neste exemplo, permite selecionar elementos com a classe ".well"

## Solução

```javascript
<script> 
  $(document).ready(function() { 
    $(".well").addClass("animated bounce"); 
    $(".well").addClass("shake"); 
  }); 
 </script> 

```