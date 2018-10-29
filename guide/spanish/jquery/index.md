---
title: jQuery
localeTitle: jQuery
---
## jQuery

![logo](https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/JQuery_logo.svg/250px-JQuery_logo.svg.png "logo de jQuery")

jQuery es la biblioteca de JavaScript más utilizada y se utiliza en más de la mitad de los principales sitios web.

jQuery hace que el desarrollo web sea más fácil de usar al proporcionar una serie de funciones "de ayuda". Estos ayudan a los desarrolladores a escribir rápidamente las interacciones DOM (Document Object Model) sin necesidad de escribir manualmente tanto JavaScript por sí mismos.

jQuery agrega una variable global con todos los métodos de bibliotecas adjuntos. La convención de nomenclatura es tener esta variable global como `$` . escribiendo `$.` Tienes a tu disposición todos los métodos de jQuery.

## Ejemplo

Cuando un usuario hace clic en un botón, todos

Se ocultarán los elementos:

```javascript
$(document).ready(function(){ 
    $("button").click(function(){ 
        $("p").hide(); 
    }); 
 }); 
```

#### Más información

*   [jQuery Home Page](https://jquery.com/)