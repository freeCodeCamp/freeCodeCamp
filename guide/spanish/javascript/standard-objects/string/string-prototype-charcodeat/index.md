---
title: String.prototype.charCodeAt
localeTitle: String.prototype.charCodeAt
---
El método `charCodeAt()` devuelve el valor numérico Unicode del carácter en el índice dado (excepto para puntos de código Unicode> 0x10000).

## Sintaxis
```
str.charCodeAt(index) 
```

### Parámetros

**índice**

Un entero mayor o igual que 0 y menor que la longitud de la cadena; si no es un número, el valor predeterminado es 0.

[Enlace MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt) | [Enlace MSDN](https://msdn.microsoft.com/en-us/LIBRary/hza4d04f%28v=vs.94%29.aspx)

## Descripción

Tenga en cuenta que `charCodeAt()` siempre devolverá un valor inferior a 65536. Esto se debe a que los puntos de código más altos están representados por un par de pseudo-caracteres "sustitutos" (valor inferior) que se utilizan para comprender el carácter real. Debido a esto, para examinar o reproducir el carácter completo para caracteres individuales de valor 65536 y superior, para tales caracteres, es necesario recuperar no solo `charCodeAt(i)` , sino también `charCodeAt(i+1)` (como si examinara / Reproduciendo una cuerda con dos letras). Vea los ejemplos 2 y 3 a continuación.

`charCodeAt()` devuelve `NaN` si el `index` dado es menor que 0 o es igual o mayor que la longitud de la cadena.

## Ejemplos
```
'ABC'.charCodeAt(0); // returns 65 
 
 var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
 document.write(str.charCodeAt(str.length - 1)); 
 
 // Output: 90 

```