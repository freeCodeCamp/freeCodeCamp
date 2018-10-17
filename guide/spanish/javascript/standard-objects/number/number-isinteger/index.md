---
title: Number isInteger
localeTitle: Número isInteger
---
# Número isInteger

## Descripción

El método `Number.isInteger()` determina si el valor pasado es un entero. Este método fue introducido en ES6.

## Sintaxis

`Number.isInteger(val)`

### Parámetros

**val** - valor para verificar que sea un entero

## Valor de retorno

Un valor [booleano que](https://guide.freecodecamp.org/javascript/booleans) indica si el valor es un entero o no.

## Descripción

El método devuelve `true` si el valor pasado es un entero, de lo contrario, devuelve `false` . Los valores infinitos y `NaN` devuelven `false` .

## Ejemplos
```
Number.isInteger(0);         // true 
 Number.isInteger(-0);        // true 
 Number.isInteger(1);         // true 
 Number.isInteger(2);         // true 
 Number.isInteger(-100001);   // true 
 Number.isInteger(999999999999999999999999); // true 
 
 Number.isInteger(0.1);       // false 
 Number.isInteger(0.3);       // false 
 Number.isInteger(Math.PI);   // false 
 
 Number.isInteger(NaN);       // false 
 Number.isInteger(Infinity);  // false 
 Number.isInteger(-Infinity); // false 
 Number.isInteger('10');      // false 
 Number.isInteger(true);      // false 
 Number.isInteger(false);     // false 
 Number.isInteger([1]);       // false 
```

#### Más información:

[ECMA 2015 Docs](https://www.ecma-international.org/ecma-262/6.0/#sec-number.isinteger) [Number.isInteger () Documentos Web MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger)