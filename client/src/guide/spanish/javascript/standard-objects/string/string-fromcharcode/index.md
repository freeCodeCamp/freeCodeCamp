---
title: String fromCharCode
localeTitle: Cadena fromCharCode
---
El `String.fromCharCode()` estático `String.fromCharCode()` devuelve una cadena creada utilizando la secuencia especificada de valores Unicode.

## Sintaxis
```
String.fromCharCode(num1[, ...[, numN]]) 
```

### Parámetros

**num1,…, numN**

Una secuencia de números que son valores de Unicode.

[Enlace MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode) | [Enlace MSDN](https://msdn.microsoft.com/en-us/LIBRary/wb4w0k66%28v=vs.94%29.aspx)

## Descripción

Este método devuelve una cadena y no un objeto de cadena.

Debido a que `fromCharCode()` es un método estático de String, siempre lo utiliza como `String.fromCharCode()` , en lugar de como un método de un objeto String que creó.

## Ejemplos
```
String.fromCharCode(65, 66, 67);  // "ABC" 
 
 var test = String.fromCharCode(112, 108, 97, 105, 110); 
 document.write(test); 
 
 // Output: plain 

```