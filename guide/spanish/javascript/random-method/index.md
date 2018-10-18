---
title: Random Method
localeTitle: Método aleatorio
---
## Método aleatorio

El `Math.random()` JavaScript `Math.random()` es un excelente método incorporado para producir números aleatorios. Cuando se `Math.random()` , devuelve un número aleatorio que puede estar en cualquier lugar entre 0 y 1. El 0 se incluye y 1 se excluye.

### Generando un número de punto flotante al azar entre 0 y 1

El método `Math.random()` devolverá un número de coma flotante (decimal) mayor o igual a 0 y menor que (pero nunca igual a) 1. En otras palabras, `0 <= x < 1` . Por ejemplo:

```JavaScript
console.log(Math.random()); 
 // 0.7069207248635578 
 
 console.log(Math.random()); 
 // 0.765046694794209 
 
 console.log(Math.random()); 
 // 0.14069121642698246 
```

(Por supuesto, los números que se devuelven serán diferentes cada vez. Esto se asumirá para todos los ejemplos siguientes: se producirán resultados diferentes en cada pase).

Para obtener un número aleatorio entre un rango mayor, multiplique el resultado de `Math.random()` por un número.

### Generar un número de punto flotante aleatorio entre 0 y un máximo especificado

Por lo general, no necesita números aleatorios entre 0 y 1, necesita números más grandes o incluso números enteros.

Por ejemplo, si desea un número de punto flotante aleatorio entre 0 y 10, podría usar:

```JavaScript
var x = Math.random()*10; 
 
 console.log(x); 
 // 4.133793901445541 
```

### Generando un número de punto flotante al azar dentro de un rango

Si necesita un número de punto flotante aleatorio que oscile entre dos números específicos, podría hacer algo como esto:

```JavaScript
var min = 83.1; 
 var max = 193.36; 
 
 var x = Math.random()*(max - min)+min; 
 
 console.log(x); 
 // 126.94014012699063 
```

### Generando un entero aleatorio entre 0 y un máximo

A menudo se necesitan números enteros. Para hacer esto, tendrá que usar algunos otros métodos del objeto `Math` , `Math.floor()` (redondea al entero más cercano) y `Math.ceil()` (redondea al entero más cercano).

Por ejemplo, si necesita seleccionar al azar de una matriz de 10 elementos, necesitará un número aleatorio entre 0 y 9 inclusive (recuerde que las matrices están indexadas en cero).

```JavaScript
var x = Math.floor(Math.random()*10); 
 
 console.log(x); 
 // 7 
```

(Recuerde que `Math.random()` nunca devolverá exactamente 1, por lo que `Math.random()*10` nunca devolverá exactamente 10. Esto significa que después de redondear hacia abajo, el resultado siempre será 9 o menos).

### Generando un entero aleatorio entre 1 y un máximo

Si necesita un número aleatorio con un número mínimo de 1 (por ejemplo, elegir un día aleatorio en enero), puede usar el método `Math.ceil()` .

```JavaScript
var x = Math.ceil(Math.random()*31); 
 
 console.log(x); 
 // 23 
```

Otra forma habría sido usar la función anterior (usando `Math.floor()` ) y agregarle 1:

```JavaScript
var x = Math.floor(Math.random()*31)+1; 
 
 console.log(x); 
 // 17 
```

### Generando un entero aleatorio dentro de un rango

Por último, ocasionalmente necesitas un entero aleatorio entre dos enteros específicos. Por ejemplo, si está intentando recoger boletos de la rifa y conoce los números del número más bajo y más grande:

```JavaScript
var min = 1718; 
 var max = 3429; 
 
 var x = Math.floor(Math.random()*(max-min+1)+min); 
 
 console.log(x); 
 //2509 
```

### ¿Qué tan aleatorio es Math.random ()?

Puede señalarse que el número devuelto por `Math.random()` es un número pseudoaleatorio ya que ninguna computadora puede generar un número verdaderamente aleatorio, que muestre aleatoriedad en todas las escalas y en todos los tamaños de conjuntos de datos. Sin embargo, el número pseudoaleatorio generado por `Math.random()` suele ser suficiente para las necesidades de casi cualquier programa que pueda escribir. La no aleatoriedad real solo se hace evidente en conjuntos de números astronómicamente grandes o cuando se necesitan decimales extraordinariamente precisos.

### Más información:

*   Documentación: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)