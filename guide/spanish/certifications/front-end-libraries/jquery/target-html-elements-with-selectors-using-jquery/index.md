---
title: Target HTML Elements with Selectors Using jQuery
localeTitle: Destinar elementos HTML con selectores utilizando jQuery
---
*   Los selectores JQuery le permiten seleccionar y manipular elementos HTML.
*   Estos selectores comienzan con el signo de dólar y los paréntesis: $ ()
*   Puede "encontrar" (o seleccionar) elementos HTML según su nombre, id, clases, tipos, atributos, valores de atributos y mucho más.

## Ejemplo

```javascipt
//You can select all <p> elements on a page like this  =  $("p") 
  $(document).ready(function(){ 
    $("button").click(function(){ 
        $("p").hide(); 
    }); 
 }); 
```

## Solución

```javascript
<script> 
  $(document).ready(function() { 
      $("button").addClass("animated bounce"); // We are selecting the button elements and adding "animated bounce" class to them. 
  }); 
 </script> 

```