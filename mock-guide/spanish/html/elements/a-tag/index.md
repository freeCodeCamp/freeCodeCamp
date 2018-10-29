---
title: A Tag
localeTitle: Un dia
---
## Una etiqueta

La etiqueta `<a>` o el elemento de _anclaje_ crea un hipervínculo a otra página o archivo. Para enlazar a una página o archivo diferente, la etiqueta `<a>` también debe contener un atributo `href` , que indica el destino del enlace.

El texto entre las etiquetas de apertura y cierre `<a>` convierte en el enlace.

De forma predeterminada, una página vinculada se muestra en la ventana del navegador actual a menos que se especifique otro objetivo.

#### Ejemplo:

```html

  <a href= "https://guide.freecodecamp.org/">freeCodeCamp</a> 
```

Una imagen también se puede convertir en un enlace encerrando la etiqueta `<img>` en una etiqueta `<a>` .

#### Ejemplo:

```html

  <a href= "https://guide.freecodecamp.org/"><img src="logo.svg"></a> 
```

También es posible determinar el objetivo de la etiqueta `<a>` . Esto se hace utilizando el atributo de `target` . El atributo de `target` tiene los siguientes valores disponibles `_blank|_self|_parent|_top|framename` .

`_blank` : abre el enlace en una nueva pestaña o en una nueva ventana según las preferencias del usuario. `_self` : abre el enlace en el mismo marco (comportamiento predeterminado). `_parent` : abre el enlace en el marco principal, por ejemplo, cuando el usuario hace clic en un enlace en un iframe. `_top` : abre el enlace en el cuerpo completo de la ventana. `framename` : abre el enlace en el cuadro especificado.

#### Ejemplo:

```html

  <a href= "https://guide.freecodecamp.org/" target="_blank">freeCodeCamp</a> 
```

[freeCodeCamp](https://guide.freecodecamp.org/) Este enlace se crea de la misma manera que sugiere el bloque de código de ejemplo. Haz clic para ver cómo funciona.

#### Más información:

*   [El elemento HTML <a>: MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)
*   [Una etiqueta: w3schools](https://www.w3schools.com/tags/tag_a.asp)
*   [Una etiqueta: htmlreference.io](http://htmlreference.io/element/a/)