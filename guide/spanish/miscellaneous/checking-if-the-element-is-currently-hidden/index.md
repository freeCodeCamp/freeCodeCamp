---
title: Checking if the Element Is Currently Hidden
localeTitle: Comprobando si el elemento está actualmente oculto
---
Si necesita verificar el estado de visibilidad de algún elemento de la página, puede hacerlo fácilmente con la biblioteca jQuery con el simple bloque de código como el que se muestra a continuación.
```
var display = ( jQuery('#someElement').is(':visible') ); 
 var visibility = ( jQuery('#someElement').css('visibility') != 'hidden' ); 
 var status = ( display && visibility ); 
 console.log( status ); 
```

Por lo tanto, si el elemento está actualmente visible en la página, **`console.log(status)`** devolverá `true` y, en cualquier otro caso, devolverá `false` . La declaración `false` sería devuelta para estos dos casos:

*   si el elemento tiene `display:none;`
*   Si el elemento tiene `visibility: hidden`

y para una verificación más avanzada como esta: **es el elemento visible en la ventana** [gráfica](http://benpickles.github.io/onScreen/) **ahora,** yo recomendaría usar el [complemento jQuery onScreen](http://benpickles.github.io/onScreen/)