---
title: String.prototype.trim
localeTitle: String.prototype.trim
---
## String.prototype.trim

La función `trim()` elimina cualquier carácter de espacio en blanco tanto del principio como del final de una cadena dada. No modifica la cadena original; produce una nueva.

Ejemplos:

```js
"  Hello, campers. I have spaces on both ends!  ".trim(); 
 // output is "Hello, campers. I have spaces on both ends!" 
```

`trim()` no solo elimina los caracteres de espacio; elimina cualquier carácter de espacio en blanco, como pestañas, saltos de línea, espacios sin interrupción, etc.

Esto es útil, por ejemplo, cuando desea procesar una entrada de texto de un usuario y es posible que hayan enviado una cadena con espacios al final que tal vez no desee.

#### Más información:

*   [String.prototype.trim () en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)