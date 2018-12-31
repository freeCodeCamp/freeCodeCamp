---
title: Finders Keepers
localeTitle: Buscadores guardianes
---
## Explicación del problema

Necesitamos devolver el elemento desde una matriz que pasa una función. Tanto la `function` como la `array` se pasan a nuestra función `findElement(arr, func)` .

## Sugerencia: 1

Mirando a través de la matriz se puede hacer con un bucle `for` .

> _intenta resolver el problema ahora_

## Sugerencia: 2

`num` se pasa a la función. Tendremos que establecerlo en los elementos que queremos verificar con la función.

> _intenta resolver el problema ahora_

## Sugerencia: 3

No se olvide, si ninguno de los números en la matriz pasa la prueba, debe regresar `undefined` .

> _intenta resolver el problema ahora_

## Solucion basica

```javascript
function findElement(arr, func) { 
  let num = 0; 
 
  for(var i = 0; i < arr.length; i++) { 
    num = arr[i]; 
    if (func(num)) { 
      return num; 
    } 
  } 
 
  return undefined; 
 } 
```

## Explicación del Código

*   El desafío nos pide que miremos a través de la matriz. Esto se hace usando un bucle `for` .
*   La variable `num` se está pasando a la función, por lo que la establecemos en cada índice de nuestra matriz.
*   La función predefinida ya verifica cada número por nosotros, por lo que si es "verdadero", devolvemos ese número.
*   Si ninguno de los números en la matriz pasa la prueba de la función, devolvemos undefined.