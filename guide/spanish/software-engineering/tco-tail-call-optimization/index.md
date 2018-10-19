---
title: TCO Tail Call Optimization
localeTitle: TCO Tail Call Optimization
---
## Optimización de llamadas de cola (TCO)

Tail Call Optimization ( **TCO** ) es una solución al problema de los desbordamientos de pila al realizar la recursión.

### El problema

Cada llamada a una función es empujada a una pila en la memoria de la computadora. Cuando la función termina, se saca de la pila. En recursión, la función se llama a sí misma por lo que continúa agregando a la pila hasta que todas esas funciones terminen. Hay, por supuesto, un límite para esta pila. Cuando hay demasiadas funciones llamadas, se agregan demasiadas llamadas a la pila. Cuando la pila está llena y se llama a una función, esto se traduce en un **desbordamiento de pila** porque la pila ya está llena. La función recursiva no terminará y dará como resultado un error.

#### Ejemplo

Este es un ejemplo de una función factorial de JavaScript que utiliza la recursión **sin** TCO:

```javascript
  function fact(x) { 
    if (x <= 1) { 
      return 1; 
    } else { 
      return x * fact(x-1); 
    } 
  } 
 
  console.log(fact(10)); // 3628800 
  console.log(fact(10000)); // RangeError: Maximum call stack size exceeded 
```

Tenga en cuenta que la ejecución de un `fact` con un argumento de 10000 dará como resultado un **desbordamiento de pila** .

### Usando TCO para resolver el problema

Para resolver esto utilizando la optimización de llamadas de cola, la declaración donde la función se llama a sí misma debe estar en una posición de cola. La posición de cola es la última instrucción que se ejecutará en una función. Por lo tanto, la llamada de la función a sí misma debería ser la última cosa llamada antes de que la función termine.

En el ejemplo anterior, la operación de multiplicación se ejecuta en último lugar en la `return x * fact(x-1)` , por lo que no fue la operación final de la función. Por lo tanto, no es cola llamada optimizada. Para que se optimice la llamada de cola, debe realizar la llamada a sí mismo la última operación de la función.

#### Ejemplo

Este es un ejemplo de una función factorial de JavaScript (ES5) que utiliza la recursión **con** TCO.

```javascript
  function fact(n) { 
      return factTCO(n, 1); 
  } 
 
  function factTCO(x, acc) { 
      if (x <= 1) { 
          return acc; 
      } else { 
          return factTCO(x-1, x*acc); 
      } 
  } 
 
  console.log(fact(10)); // 3628800 
  console.log(fact(10000)); // Infinity - Number too large, but unlike the unoptimized factorial, this does not result in stack overflow. 
```

Tenga en cuenta que la ejecución de `fact` en 10000 esta vez **no provocará un desbordamiento de pila** cuando se _ejecute en un navegador que admita ES6_ porque la llamada a `factTCO` es la última operación de la función.

### Porque esto funciona

Cuando el compilador o el intérprete notan que la auto-llamada es la última operación de la función, hace estallar la función actual y empuja la auto-llamada a la pila. De esta manera el tamaño de la pila no cambia. Por lo tanto, la pila no se desborda debido a la función.

### Notas

#### Más información:

*   [¿Qué es la optimización de llamadas de cola?](https://stackoverflow.com/questions/310974/what-is-tail-call-optimization) (Desbordamiento de pila)
*   [Optimización de llamadas de cola en ECMAScript 6](http://2ality.com/2015/06/tail-call-optimization.html) (2ality - blog del Dr. Axel Rauschmayer)