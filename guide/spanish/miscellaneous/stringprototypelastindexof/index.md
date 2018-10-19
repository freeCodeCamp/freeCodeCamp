---
title: String.prototype.lastIndexOf
localeTitle: String.prototype.lastIndexOf
---
El método `lastIndexOf()` devuelve el índice dentro del objeto String de llamada de la última aparición del valor especificado, o -1 si no se encuentra. La cadena de llamada se busca hacia atrás, comenzando en `fromIndex` .

## Sintaxis
```
str.lastIndexOf(searchValue<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf' target='_blank' rel='nofollow'>, fromIndex]) 
```

## Parámetros

**búsquedaValor**

Una cadena que representa el valor a buscar.

**desde el índice**

Opcional. La ubicación dentro de la cadena de llamada para iniciar la búsqueda, indexada de izquierda a derecha. Puede ser cualquier entero. El valor predeterminado es `str.length` . Si es negativo, se trata como 0. Si `fromIndex > str.length` , `fromIndex` se trata como `str.length` .

\[Enlace MDN | [Enlace MSDN](https://msdn.microsoft.com/en-us/LIBRary/6d20k718%28v=vs.94%29.aspx)

## Devoluciones

Devuelve la última aparición de una subcadena en la cadena.

## Descripción

Los caracteres en una cadena se indexan de izquierda a derecha. El índice del primer carácter es 0, y el índice del último carácter es `stringName.length - 1` .

El método `lastIndexOf()` mayúsculas y minúsculas. Por ejemplo, la siguiente expresión devuelve `-1` :

## Ejemplos
```
'canal'.lastIndexOf('a');     // returns 3 
 'canal'.lastIndexOf('a', 2);  // returns 1 
 'canal'.lastIndexOf('a', 0);  // returns -1 
 'canal'.lastIndexOf('x');     // returns -1 
 'Blue Whale, Killer Whale'.lastIndexOf('blue'); // returns -1 
 
 var anyString = 'Brave new world'; 
 
 console.log('The index of the first w from the beginning is ' + anyString.indexOf('w')); 
 // logs 8 
 console.log('The index of the first w from the end is ' + anyString.lastIndexOf('w')); 
 // logs 10 
 console.log('The index of "new" from the beginning is ' + anyString.indexOf('new')); 
 // logs 6 
 console.log('The index of "new" from the end is ' + anyString.lastIndexOf('new')); 
 // logs 6 
 
 var str = "time, time"; 
 
 var s = ""; 
 s += "time is at position " + str.lastIndexOf("time"); 
 s += "<br />"; 
 s += "abc is at position " + str.lastIndexOf("abc"); 
 
 document.write(s); 
 
 // Output: 
 // time is at position 6 
 // abc is at position -1 

```