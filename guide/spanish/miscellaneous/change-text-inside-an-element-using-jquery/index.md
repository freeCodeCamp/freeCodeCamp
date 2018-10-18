---
title: Change Text Inside an Element Using jQuery
localeTitle: Cambiar texto dentro de un elemento usando jQuery
---
Con jQuery, puede cambiar el texto entre las etiquetas de inicio y fin de un elemento. Incluso puedes cambiar el formato HTML.

jQuery tiene una función llamada `.html()` que le permite agregar etiquetas HTML y texto dentro de un elemento. Cualquier contenido previamente dentro del elemento será reemplazado completamente con el contenido que proporcione utilizando esta función.

A continuación le indicamos cómo reescribiría y poner en cursiva el texto de nuestro encabezado:
```
$("h3").html("<em>jQuery Funhouse</em>"); 
```

jQuery también tiene una función similar llamada `.text()` que solo altera el texto sin agregar etiquetas. Por lo tanto, cuando use `.html()` , recuerde que editará todo el formato y no solo el texto.