---
title: Logical Operators
localeTitle: Operadores logicos
---
# Operadores logicos

Los operadores lógicos comparan valores booleanos y devuelven una respuesta booleana. Hay dos tipos de operadores lógicos: AND lógico y OR lógico. Estos operadores se escriben a menudo como && para AND, y || para OR.

#### Y lógico (&&)

El operador AND compara dos expresiones. Si la primera se evalúa como ["veraz"](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) , la declaración devolverá el valor de la segunda expresión. Si la primera se evalúa como ["falsa"](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) , la declaración devolverá el valor de la primera expresión.

Cuando solo involucra valores booleanos (ya sea `true` o `false` ), devuelve verdadero si solo si ambas expresiones son verdaderas. Si una o ambas expresiones son falsas, toda la declaración devolverá falsa.

```js
true && true //returns  the second value, true 
 true && false //returns the second value, false 
 false && false //returns the first value, false 
 123 && 'abc' // returns the second value, 'abc' 
 'abc' && null //returns the second value, null 
 undefined && 'abc' //returns the first value, undefined 
 0 && false //returns the first value, 0 
```

#### OR lógico (||)

El operador OR compara dos expresiones. Si la primera se evalúa como "falsa", la declaración devolverá el valor de la segunda segunda expresión. Si la primera se evalúa como "veraz", la declaración devolverá el valor de la primera expresión.

Cuando solo involucra valores booleanos (ya sea `true` o `false` ), devuelve verdadero si cualquiera de las expresiones es verdadera. Ambas expresiones pueden ser verdaderas, pero solo se necesita una para ser verdaderas como resultado.

```js
true || true //returns the first value, true 
 true || false //returns the first value, true 
 false || false //returns the second value, false 
 123 || 'abc' // returns the first value, 123 
 'abc' || null //returns the first value, 'abc' 
 undefined || 'abc' //returns the second value, 'abc' 
 0 || false //returns the second value, false 
```

#### Evaluación de cortocircuito

&& y || comportarse como un operador de cortocircuito.

En el caso del AND lógico, si el primer operando devuelve falso, el segundo operando nunca se evalúa y el primer operando se devuelve.

En el caso del OR lógico, si el primer valor devuelve verdadero, el segundo valor nunca se evalúa y se devuelve el primer operando.

#### Lógica NO (!)

El operador NOT no hace ninguna comparación como los operadores AND y OR. Además, se opera solo en 1 operando.

Un '!' El signo de exclamación se utiliza para representar el operador NOT.

###### Uso de operadores NO

1.  Conversión de la expresión en booleano.
2.  devuelve el inverso del valor booleano obtenido en el último paso.

```js
var spam = 'rinki'; //spam may be equal to any non empty string 
 var booSpam = !spam; 
 /*returns false 
  since when a non-empty string when converted to boolean returns true 
  inverse of which is evaluated to false. 
 */ 
 
 var spam2 = ''; //spam2 here is equal to empty string 
 var booSpam2 = !spam2; 
 /*returns true 
  since when a empty string when converted to boolean returns false 
  inverse of which is evaluated to true. 
 */ 
```

#### Consejos:

Ambos operadores lógicos devolverán el valor de la última expresión evaluada. Por ejemplo:

```js
"cat" && "dog" //returns "dog" 
 "cat" && false //returns false 
 0 && "cat"  //returns 0 (which is a falsy value) 
 
 "cat" || "dog" //returns "cat" 
 "cat" || false //returns "cat" 
 0 || "cat" //returns "cat" 
```

Tenga en cuenta que donde `&&` devuelve el primer valor, `||` Devuelve el segundo valor y viceversa.

#### Más información:

*   [Tabla de verdad de Javascript](https://guide.freecodecamp.org/javascript/truth-table)
    
*   [MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Logical_Operators)