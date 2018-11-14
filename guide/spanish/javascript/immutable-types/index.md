---
title: Immutable Types
localeTitle: Tipos inmutables
---
> Inmutable significa inmutable, es decir, no se puede cambiar.

Javascript tiene muchos tipos inmutables, por ejemplo, tipo de `string` primitiva. Intenta esto en tu consola.
```
s = "red"; 
 console.log(s[1]); //→ "e" 
 s[1] = "x"; 
 console.log(s) //→ "red" 
```

¡La `s` no cambió! WAT !

## Detalles

Algunos métodos de cadena como `String.replace` devuelven una cadena nueva.

JavaScript tiene un tipo de datos complejo, el tipo de datos Objeto, y tiene cinco tipos de datos simples: Número, Cadena, Booleano, No definido y Nulo. Estos tipos de datos simples (primitivos) son inmutables (no se pueden cambiar), mientras que los objetos son mutables (se pueden cambiar).