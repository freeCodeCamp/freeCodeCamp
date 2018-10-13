---
title: Multiple Identical Options in Switch Statements
localeTitle: Múltiples opciones idénticas en declaraciones de cambio
---
## Múltiples opciones idénticas en declaraciones de cambio

### Explicación del problema

_Si la declaración de interrupción se omite en el caso de una instrucción de cambio, se ejecutan las siguientes instrucciones de caso hasta que se encuentra una interrupción. Si tiene varias entradas con la misma salida, puede representarlas en una declaración de cambio como esta:_

```javascript
switch(val) { 
  case 1: 
  case 2: 
  case 3: 
    result = "1, 2, or 3"; 
    break; 
  case 4: 
    result = "4 alone"; 
 } 
```

_Los casos para 1, 2 y 3 producirán el mismo resultado._

_Escriba una instrucción de cambio para establecer la respuesta para los siguientes rangos:_ `1-3` - "Bajo"  
`4-6` - "Mid"  
`7-9` - "Alto"

_Nota: Deberá tener una declaración de caso para cada número en el rango._

## ¡Alerta de spoiler!

**¡Solución por delante!**

## Solución de código:

```javascript
function sequentialSizes(val) { 
  var answer = ""; 
  // Only change code below this line 
  switch(val) { 
    case 1: 
    case 2: 
    case 3: 
      return "Low"; 
      break; 
    case 4: 
    case 5: 
    case 6: 
      return "Mid"; 
      break; 
    case 7: 
    case 8: 
    case 9: 
      return "High"; 
      break; 
  } 
  // Only change code above this line 
  return answer; 
 } 
 // Change this value to test 
 sequentialSizes(1); 
```

## Solución de código alternativo:

```javascript
function sequentialSizes(val) { 
  var answer = ""; 
  // Only change code below this line 
  switch(val){ 
    case 1: case 2: case 3: 
      answer = "Low"; 
      break; 
    case 4: case 5: case 6: 
      answer = "Mid"; 
      break; 
    case 7: case 8: case 9: 
      answer = "High"; 
  } 
  // Only change code above this line 
  return answer; 
 } 
 // Change this value to test 
 sequentialSizes(1); 
```

· Ejecutar código en [repl.it.](https://repl.it/@AdrianSkar/Basic-JS-Multiple-opts-in-switch)

### Explicación del código

Como ya tiene una variable llamada `answer` definida y la función la devuelve, solo puede modificar su valor en cada grupo de declaraciones de casos para que se ajusten a los requisitos del ejercicio.

### Recursos

*   ["Switch: Métodos para el caso de criterios múltiples" - _MDN Referencia de Javascript_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)