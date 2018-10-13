---
title: Array.prototype.reduce
localeTitle: Array.prototype.reduce
---
## Array.prototype.reduce

El método reduce `reduce()` reduce una matriz de valores a un solo valor.

El único valor devuelto puede ser de cualquier tipo.

### Ejemplo 1

Transforme una matriz de enteros en la suma de todos los enteros de la matriz.

```js
    var numbers = [1,2,3]; 
    var sum = numbers.reduce(function(total, current){ 
        return total + current; 
    }); 
    console.log(sum); 
```

Esto dará salida `6` a la consola.

### Descripción

El método `reduce()` se ha denominado la navaja suiza, o herramienta múltiple, de los métodos de transformación de matrices. Otros, como `map()` y `filter()` , proporcionan transformaciones más específicas, mientras que `reduce()` se puede usar para transformar arreglos en cualquier salida que desee.

### Sintaxis

```js
    arr.reduce(callback[, initialValue]) 
```

*   El argumento de `callback` es una función que se llamará una vez para cada elemento de la matriz. Esta función toma cuatro argumentos, pero a menudo solo se usan los dos primeros.
    *   _acumulador_ - el valor devuelto de la iteración anterior
    *   _currentValue_ - el elemento actual en la matriz
    *   _índice_ - el índice del elemento actual
    *   _matriz_ - la matriz original en la que se llama reducir
*   El argumento `initialValue` es opcional. Si se proporciona, se utilizará como el valor inicial del acumulador en la primera llamada a la función de devolución de llamada (consulte el Ejemplo 2 a continuación).

### Ejemplo 2

Transforme una matriz de cadenas en un solo objeto que muestre cuántas veces aparece cada cadena en la matriz. Observe que esta llamada para reducir pasa un objeto vacío `{}` como el parámetro `initialValue` . Esto se usará como el valor inicial del acumulador (el primer argumento) pasado a la función de devolución de llamada.

```js
var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit']; 
 
 var petCounts = pets.reduce(function(obj, pet){ 
    if (!obj[pet]) { 
        obj[pet] = 1; 
    } else { 
        obj[pet]++; 
    } 
    return obj; 
 }, {}); 
 
 console.log(petCounts); 
```

Salida: `js { dog: 2, chicken: 3, cat: 1, rabbit: 1 }`

## Más información:

*   [Cómo funciona el método de reducción de JavaScript, cuándo usarlo y algunas de las cosas geniales que puede hacer](https://medium.freecodecamp.org/reduce-f47a7da511a9)
*   [Avanzado Reducir](https://www.youtube.com/watch?v=1DMolJ2FrNY)
*   [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)