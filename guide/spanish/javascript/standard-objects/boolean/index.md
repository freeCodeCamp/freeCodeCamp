---
title: Boolean
localeTitle: Booleano
---
## Booleano

El objeto booleano es un envoltorio de objeto para un valor booleano (verdadero o falso). Puede definir explícitamente un booleano como `new Boolean([value])` . El argumento de `value` opcional se convierte en un valor booleano. Si no se especifica el valor, `0` , `-0` , `null` , `false` , `NaN` , `undefined` o la cadena vacía ( `""` ), el objeto se establece en falso. Todos los demás valores, incluido cualquier objeto o la cadena "falsa", crean un objeto con un valor de verdadero. Una excepción interesante es cuando `document.all` de DOM se pasa como un argumento al constructor `Boolean` , se evalúa como `false` 1 .

El valor primitivo booleano ( `true` y `false` ) no es lo mismo que `Boolean` valores de objeto `Boolean` ( `true` y `false` ).

#### Más información:

[La diferencia entre los objetos booleanos y los primitivos booleanos en JavaScript: un goteo de JavaScript](http://adripofjavascript.com/blog/drips/the-difference-between-boolean-objects-and-boolean-primitives-in-javascript.html)

### Fuentes

1.  [Usted no sabe JavaScript, capítulo 4](https://github.com/getify/You-Dont-Know-JS/blob/master/types%20&%20grammar/ch4.md) , línea: 364. Accedido el 31 de octubre de 2017.