---
title: String.prototype.charAt
localeTitle: String.prototype.charAt
---
El método `charAt()` devuelve el carácter especificado de una cadena.

## Sintaxis
```
str.charAt(index) 
```

## Parámetros

**índice**

Un entero entre 0 y 1 menos que la longitud de la cadena.

[Enlace MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt) | [Enlace MSDN](https://msdn.microsoft.com/en-us/LIBRary/65zt5h10%28v=vs.94%29.aspx)

## Descripción

Los caracteres en una cadena se indexan de izquierda a derecha. El índice del primer carácter es 0, y el índice del último carácter en una cadena llamada `stringName` es `stringName.length - 1` . Si el índice que proporciona está fuera de rango, JavaScript devuelve una cadena vacía.

## Ejemplos
```
var anyString = 'Brave new world'; 
 
 console.log("The character at index 0   is '" + anyString.charAt(0)   + "'"); // 'B' 
 console.log("The character at index 1   is '" + anyString.charAt(1)   + "'"); // 'r' 
 console.log("The character at index 2   is '" + anyString.charAt(2)   + "'"); // 'a' 
 console.log("The character at index 3   is '" + anyString.charAt(3)   + "'"); // 'v' 
 console.log("The character at index 4   is '" + anyString.charAt(4)   + "'"); // 'e' 
 console.log("The character at index 999 is '" + anyString.charAt(999) + "'"); // '' 
 
 var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
 document.write(str.charAt(str.length - 1)); 
 
 // Output: Z 

```