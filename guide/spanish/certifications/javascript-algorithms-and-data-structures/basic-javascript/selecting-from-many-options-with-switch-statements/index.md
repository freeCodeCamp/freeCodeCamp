---
title: Selecting from Many Options with Switch Statements
localeTitle: Selección de muchas opciones con instrucciones de cambio
---
## Selección de muchas opciones con instrucciones de cambio

_Si tiene muchas opciones para elegir, use una instrucción de `switch` . Una instrucción de `switch` prueba un valor y puede tener muchas declaraciones de `case` que definen varios valores posibles. Las declaraciones se ejecutan desde el primer valor de `case` coincidente hasta que se encuentra una `break` ._

_Aquí hay un ejemplo de pseudocódigo:_

```js
  switch(num) { 
    case value1: 
      statement1; 
      break; 
    case value2: 
      statement2; 
      break; 
    ... 
    case valueN: 
      statementN; 
      break; 
  } 
```

### Un poco más de explicación.

Una sentencia de switch primero evalúa su expresión. Luego busca la primera cláusula de `case` cuya expresión se evalúa con el mismo valor que el resultado de la expresión de entrada (usando la [comparación estricta](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) , ( `===` ) y transfiere el control a esa cláusula, ejecutando las declaraciones asociadas. (Si coinciden varios casos el valor proporcionado, el primer caso que coincide se selecciona, incluso si los casos no son iguales entre sí.)

Si no se encuentra una cláusula de `case` coincidente, el programa busca la cláusula `default` opcional y, si se encuentra, transfiere el control a esa cláusula, ejecutando las declaraciones asociadas. Si no se encuentra una cláusula `default` , el programa continúa la ejecución en la declaración que sigue al final del `switch` . Por convención, la cláusula `default` es la última cláusula, pero no es necesario que lo sea.

La declaración de `break` opcional asociada con cada etiqueta de caso asegura que el programa se salga del conmutador una vez que se ejecute la sentencia coincidente y continúe la ejecución en la sentencia siguiente al conmutador. Si se omite `break` , el programa continúa su ejecución en la siguiente declaración en la instrucción `switch` . [1](#cite1)

### Explicación del problema:

_Escriba una instrucción de conmutación que pruebe `val` y establezca la `answer` para las siguientes condiciones:_

*   `1` - "alfa",
*   `2` - "beta",
*   `3` - "gamma",
*   `4` - "delta".

## Sugerencia 1

Recuerde que los valores de los `case` se prueban con igualdad estricta ( `===` ).

> Intenta resolver el problema ahora!

## Sugerencia 2

No vea las _"condiciones siguientes"_ como una lista ordenada como se ve en la demostración original de freeCodeCamp, sino como valores y declaraciones, como se muestra aquí

> Intenta resolver el problema ahora!

## ¡Alerta de spoiler!

### ¿Estás completamente seguro de lo que quieres ver? ...

## Solución de código básico

```js
function caseInSwitch(val) { 
  var answer = ""; 
  // Only change code below this line 
  switch(val) { 
    case 1: 
      return "alpha"; 
      break; 
    case 2: 
      return "beta"; 
      break; 
    case 3: 
      return "gamma"; 
      break; 
    case 4: 
      return "delta"; 
      break; 
  } 
 
  // Only change code above this line 
  return answer; 
 } 
 
 // Change this value to test 
 caseInSwitch(1); 
```

### Explicación del Código

Es común ignorar que los valores de `case` se prueban con igualdad estricta con cualquier necesidad de otra expresión, como por ejemplo: `case === value`

## Solución de código alternativo:

```javascript
function caseInSwitch(val) { 
  var answer = ""; 
  // Only change code below this line 
  switch (val){ 
    case 1: 
      answer="alpha"; 
      break; 
    case 2: 
      answer="beta"; 
      break; 
    case 3: 
      answer="gamma"; 
      break; 
    case 4: 
      answer="delta"; 
      break; 
  } 
  // Only change code above this line 
  return answer; 
 } 
 // Change this value to test 
 caseInSwitch(1); 
```

· Ejecutar código en [repl.it.](https://repl.it/@AdrianSkar/Basic-JS-Switch-statements)

### Explicación del código

Dado que ya tiene una variable definida al comienzo de la función llamada `answer` y está definida como la última declaración de retorno, puede asignarle nuevos valores para cada caso y devolverá la respuesta esperada según el valor que pase a la función.

### Fuentes

1 . [Descripción de "switch" - _referencia de JavaScript MDN_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch#Description) .