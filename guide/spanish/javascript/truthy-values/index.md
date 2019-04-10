---
title: Truthy Value
localeTitle: Valor de verdad
---
Un valor **verdadero** es un valor que se traduce en **verdadero** cuando se evalúa en un contexto _booleano_ .

Todos los valores son **veraces a** menos que se definan como **falsos** (es decir, excepto `false` , `0` , `""` , `null` , `undefined` y `NaN` ).

Algunos valores de **verdad** interesantes son:

'0' (una cadena que contiene un solo cero) 'falso' (una cadena que contiene el texto "falso") \[\] (una matriz vacía) {} (un objeto vacío) función () {} (una función "vacía")

Por lo tanto, se puede utilizar un solo valor dentro de las condiciones, por ejemplo,

si (valor) { // el valor es veraz } else { // el valor es falsy // podría ser falso, 0, '', nulo, indefinido o NaN }

Ver también: falsy | [MDN](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)