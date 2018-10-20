---
title: Semicolons
localeTitle: Punto y coma
---
No se requieren puntos y coma en Javascript. Esto se debe a que Javascript tiene una función llamada "Inserción automática de punto y coma" o ASI, para abreviar. ASI pone los puntos y coma en tu Javascript para ti. Siempre está activo de forma predeterminada y es parte del idioma y no se puede desactivar.

ASI tiene un conjunto de reglas que utiliza para determinar dónde debe insertar puntos y coma. Si ya hay un punto y coma en su lugar, no cambiará nada. Vea [esta respuesta de StackOverflow](http://stackoverflow.com/a/2846298/3467946) para obtener más información sobre cómo funciona ASI.

Solo hay un caso en el que falla ASI: cuando una línea comienza con un corchete de apertura `(` . Para evitar que esto cause errores, cuando una línea comienza con un corchete de apertura, puede poner un punto y coma al principio de la línea que tiene el corchete de apertura :

```js
;(function() { 
  console.log('Hi!') 
 }) 
```

Tenga en cuenta que esto solo es necesario si no usa punto y coma.

Un estilo de codificación consistente hace que el código sea más legible. Decida si utilizará o no los puntos y comas, y hágalo en todas partes.

## Errores que puede encontrar

Cuando se creó Javascript por primera vez, estaba destinado a ayudar a los principiantes a ingresar a la programación. Nadie quiere estar buscando un punto y coma en su código cuando comienzan a programar. Así que se implementó la elección de punto y coma, como se indicó anteriormente, técnicamente están ahí.

Por ejemplo: `javasctipt function foo(x) { return function(y) { return x + y; } } let z = foo(10); z(10)// TypeError z is not a function // Because of Automatic Semicolon Insertion, our inner function does not exist.` Javasctipt implementará punto y coma donde se espera.

### Otros recursos

[Carta abierta a los líderes de JavaScript sobre puntos y comas](http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding)