---
title: Target HTML Elements with Selectors Using jQuery
localeTitle: Целевые элементы HTML с селекторами Использование jQuery
---
*   Селекторы JQuery позволяют вам выбирать и управлять элементами HTML.
*   Эти селекторы начинаются со знака доллара и круглых скобок: $ ()
*   Вы можете «найти» (или выбрать) HTML-элементы на основе их имени, идентификатора, классов, типов, атрибутов, значений атрибутов и т. Д.

## пример

```javascipt
//You can select all <p> elements on a page like this  =  $("p") 
  $(document).ready(function(){ 
    $("button").click(function(){ 
        $("p").hide(); 
    }); 
 }); 
```

## Решение

```javascript
<script> 
  $(document).ready(function() { 
      $("button").addClass("animated bounce"); // We are selecting the button elements and adding "animated bounce" class to them. 
  }); 
 </script> 

```