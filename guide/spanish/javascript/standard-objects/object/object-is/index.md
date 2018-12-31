---
title: Object Is
localeTitle: Objeto es
---
# Objeto es

## Descripción

El método `object.is()` se usa para determinar si dos valores tienen el mismo valor. Este método fue introducido en ES6.

## Sintaxis

`Object.is(val1, val2)`

### Parámetros

**val1** - primer valor para comparar

**val2** - segundo valor para comparar

## Valor de retorno

Un valor [booleano que](https://guide.freecodecamp.org/javascript/booleans) indica si los dos argumentos tienen el mismo valor

## Descripción

`Object.is()` compara dos valores para la igualdad, devolviéndose `true` si ambos valores cumplen una de las siguientes condiciones:

*   `undefined`
*   `null`
*   Ambos `true` o ambos `false`
*   Cadena de la misma longitud y mismos caracteres.
*   Mismo objeto
*   Ambos números y:
*   Ambos `+0` o ambos `-0`
*   Ambos `NaN`
*   o ambos un número que no es cero y no `NaN`

## Ejemplos

\`\` \`

Object.is ('string', 'string'); // cierto Object.is (indefinido, indefinido); // cierto Object.is (nulo, nulo); // cierto

Object.is ('string,' word '); // falso Object.is (verdadero, falso); // falso Object.is (\[\], \[\]); //falso

var obj = {nombre: Jane}; Object.is (obj, obj); // cierto

Object.is (NaN, NaN); // cierto

Object.is (+0, -0); // falso Object.is (-0, -0); // cierto

\`\` \`

#### Más información:

[Object.is () Documentos Web de MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is) [Operador de igualdad estricta `===`](https://guide.freecodecamp.org/certificates/comparison-with-the-strict-equality-operator)