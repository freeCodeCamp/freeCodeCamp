---
title: Number isFinite
localeTitle: Número es finito
---
# Número es finito

## Descripción

El método `Number.isFinite()` verifica si el valor pasado es un número finito. Este método fue introducido en ES6.

## Sintaxis

`Number.isFinite(val)`

### Parámetros

**val** - valor para verificar la finitud

## Valor de retorno

Un valor [booleano que](https://guide.freecodecamp.org/javascript/booleans) indica si el valor es un número finito o no.

## Descripción

`Number.isFinite` es diferente del método global [isFinite ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isFinite) , no convierte el valor probado en un número. Esto significa que el valor debe ser un número y finito para que sea verdadero.

## Ejemplos
```
Number.isFinite(Infinity)     // false 
 Number.isFinite(-Infinity)    // false 
 
 Number.isFinite(1234)         // true 
 Number.isFinite(-1.11)        // true 
 Number.isFinite(0)            // true 
 Number.isFinite(3g55)         // true 
 
 Number.isFinite('1234')       // false 
 Number.isFinite('Hi')         // false 
 Number.isFinite('2005/12/12') // false 
 
 Number.isFinite('0');         // false, would've been true with 
                              // global isFinite('0') 
 
 Number.isFinite(null);        // false, would've been true with 
                              // global isFinite(null) 
```

#### Más información:

[ECMA 2015 Docs](https://www.ecma-international.org/ecma-262/6.0/#sec-number.isfinite) [Número.isFinite () Documentos Web MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite)