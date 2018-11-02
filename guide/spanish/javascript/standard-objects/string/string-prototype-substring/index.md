---
title: String.prototype.substring
localeTitle: String.prototype.substring
---
## String.prototype.substring

La función `substring()` _extrae_ una secuencia de caracteres de otra cadena dada. No altera la cadena original.

Se define la secuencia a extraer con un _índice de caracteres inicial y final_ . Estos índices se pasan a la función `substring()` como parámetros. La subcadena se forma a partir del carácter del índice de inicio hasta el carácter del índice final. Ambos índices se cuentan desde el principio de la cadena, a partir de `0` .

Ejemplos:

```js
"Hello, campers".substring(7, 14); 
 // output is "campers" 
 
 "Hello, world".substring(0, 5); 
 // output is "Hello" 
```

También puede omitir el último parámetro de índice de caracteres, y la secuencia de subcadenas se extraerá del índice de inicio hasta el final de la cadena. Ejemplo:

```js
"Hello, campers!".substring(7); 
 // output is "campers!" 
```

#### Más información:

*   [String.prototype.substring () en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring)