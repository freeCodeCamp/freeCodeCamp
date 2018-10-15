---
title: Target HTML Elements with Selectors Using jQuery
localeTitle: Alvo de elementos HTML com seletores usando jQuery
---
*   Os seletores JQuery permitem selecionar e manipular elementos HTML.
*   Esses seletores começam com o cifrão e parênteses: $ ()
*   Você pode "encontrar" (ou selecionar) elementos HTML com base em seus nomes, id, classes, tipos, atributos, valores de atributos e muito mais.

## Exemplo

```javascipt
//You can select all <p> elements on a page like this  =  $("p") 
  $(document).ready(function(){ 
    $("button").click(function(){ 
        $("p").hide(); 
    }); 
 }); 
```

## Solução

```javascript
<script> 
  $(document).ready(function() { 
      $("button").addClass("animated bounce"); // We are selecting the button elements and adding "animated bounce" class to them. 
  }); 
 </script> 

```