---
title: Falsy Values
localeTitle: Valores de Falsía
---
## Descripción

Un valor falso es algo que se evalúa como FALSO, por ejemplo, al verificar una variable. Solo hay seis valores falsey en JavaScript: `undefined` , `null` , `NaN` , `0` `""` (cadena vacía), y `false` por supuesto.

## Comprobación de valores falsos en variables

Es posible verificar un valor falso en una variable con un condicional simple:

```javascript
if (!variable) { 
  // When the variable has a falsy value the condition is true. 
 } 
```

## Ejemplos generales

```javascript
const string = ""; // <-- falsy

const filledString = "some string in here"; // <-- truthy

const zero = 0; // <-- falsy

const numberGreaterThanZero; // <-- falsy

const emptyArray = []; // <-- truthy, we'll explore more about this next

const emptyObject = {}; // <-- truthy 
```

## Diversión con matrices

```javascript
if ([] == false) // <-- truthy, will run code in if-block 
 
 if ([]) // <-- truthy, will also run code in if-block 
 
 if ([] == true) // <-- falsy, will NOT run code in if-block 
 
 if (![]) // <-- falsy, will also NOT run code in if-block 
```

## Advertencia

Tenga en cuenta el tipo de datos al evaluar un valor en un contexto booleano. Si se pretende que el tipo de datos del valor sea un _número_ , la evaluación de verdad / falsa puede dar como resultado un resultado inesperado:

```javascript
const match = { teamA: 0, teamB: 1 } 
 if (match.teamA) 
  // The following won't run due to the falsy evaluation 
  console.log('Team A: ' + match.teamA); 
 } 
```

Una alternativa al caso de uso anterior es evaluar el valor utilizando `typeof` :

```javascript
const match = { teamA: 0, teamB: 1 } 
 if (typeof match.teamA === 'number') 
  console.log('Team A: ' + match.teamA); 
 } 
```

## Más información

*   **veraz** [Publicación de blog - Truthy & Falsey](http://james.padolsey.com/javascript/truthy-falsey/)
    
*   [Falsía Glosario | MDN](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
    
*   [Verdad y falsedad: cuando todo no es igual en JavaScript](https://www.sitepoint.com/javascript-truthy-falsy/)
