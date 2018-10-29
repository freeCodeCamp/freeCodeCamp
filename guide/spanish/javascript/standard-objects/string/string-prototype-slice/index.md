---
title: String.prototype.slice
localeTitle: String.prototype.slice
---
El método de cadena de JavaScript `.slice()` extrae una parte de una cadena y devuelve una nueva cadena.

## Sintaxis
```
str.slice(beginSliceIndex [, endSliceIndex]); 
```

## Parámetros

**beginSliceIndex**

El índice de base cero donde debe comenzar la división. Si beginSliceIndex es un número negativo, `.slice()` cuenta hacia atrás desde el final de la cadena para determinar dónde comenzar la división.

**endSliceIndex**

Opcional. El índice de base cero donde debe terminar la división. Si se omite, `.slice()` extrae hasta el final de la cadena.

[Enlace MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)

## Descripción

`.slice()` corta el texto de una cadena y devuelve una nueva cadena.

## Ejemplos

**Usando `.slice()` para crear una nueva cadena**
```
var string1 = "Hello World!"; 
 var string2 = string1.slice(3); 
 console.log(string2);                           // Will log "lo World!" 
 
 var string3 = string1.slice(3, 7); 
 console.log(string3);                           // Will log "lo W" 
```

**Utilizando `.slice()` con índices negativos**
```
var string = "Hello World!" 
 str.slice(-3);                                  // Returns "ld!" 
 str.slice(-3, -1);                              // Returns "ld" 
 str.slice(0, -1);                               // Returns "Hello World" 

```