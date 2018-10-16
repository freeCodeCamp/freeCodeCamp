---
title: String Length
localeTitle: Longitud de la cuerda
---
La propiedad `length` representa la longitud de una cadena.

## Sintaxis
```
str.length 
```

[Enlace MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length) | [Enlace MSDN](https://msdn.microsoft.com/en-us/LIBRary/3d616214%28v=vs.94%29.aspx)

## Descripción

Esta propiedad devuelve el número de unidades de código en la cadena. UTF-16, el formato de cadena utilizado por JavaScript, utiliza una sola unidad de código de 16 bits para representar los caracteres más comunes, pero necesita usar dos unidades de código para los caracteres menos usados ​​comúnmente, por lo que es posible que el valor devuelto por longitud no coincide con el número real de caracteres en la cadena.

Para una cadena vacía, la longitud es 0.

La propiedad estática `String.length` devuelve el valor 1.

## Ejemplos
```
var x = 'Mozilla'; 
 var empty = ''; 
 
 console.log('Mozilla is ' + x.length + ' code units long'); 
 /* "Mozilla is 7 code units long" */ 
 
 console.log('The empty string has a length of ' + empty.length); 
 /* "The empty string has a length of 0" */ 
 
 var str = "every good boy does fine"; 
        var start = 0; 
        var end = str.length - 1; 
        var tmp = ""; 
        var arr = new Array(end); 
 
        while (end >= 0) { 
            arr[start++] = str.charAt(end--); 
        } 
 
 // Join the elements of the array with a 
        var str2 = arr.join(''); 
        document.write(str2); 
 
 // Output: enif seod yob doog yreve 

```