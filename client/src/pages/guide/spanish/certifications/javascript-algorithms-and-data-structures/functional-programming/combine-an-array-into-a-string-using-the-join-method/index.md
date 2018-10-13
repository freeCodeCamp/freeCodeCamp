---
title: Combine an Array into a String Using the join Method
localeTitle: Combina una matriz en una cadena usando el método de unión
---
## Combina una matriz en una cadena usando el método de unión

### Explicación del problema

Use el método de `join` (entre otros) dentro de la función de `sentensify` para hacer una oración de las palabras en la cadena `str` . La función debe devolver una cadena. Por ejemplo, "I-like-Star-Wars" se convertiría a "Me gusta Star Wars". Para este desafío, no utilice el método de `replace` .

#### Enlaces relevantes:

*   [Array.prototype.join ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
*   [String.prototype.split ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
*   [Expresiones regulares](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

### Hint1

Es posible que deba convertir la cadena a una matriz primero.

### Hint2

Es posible que necesite usar una expresión regular para dividir la cadena.

### Solución:

```javascript
function sentensify(str) { 
  // Add your code below this line 
  return str.split(/\W/).join(' '); 
  // Add your code above this line 
 } 
 sentensify("May-the-force-be-with-you"); 

```