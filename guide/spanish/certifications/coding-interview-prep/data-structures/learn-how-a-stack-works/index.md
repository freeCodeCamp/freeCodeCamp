---
title: Learn how a Stack Works
localeTitle: Aprende cómo funciona una pila
---
## Aprende cómo funciona una pila

### Método:

*   Las pilas son estructuras de datos abstractos.
*   Siguen el principio LIFO (último en entrar, primero en salir) o FILO (primero en entrar en último lugar).
*   Las operaciones de inserción y eliminación de la pila son de complejidad **O (1) en el** tiempo.
*   En Javascript, los arreglos pueden tratarse como una Pila, ya que los `.push()` y `.pop()` tienen una complejidad de tiempo de **O (1)** .
*   En este desafío necesitamos `.pop()` y luego `.push()` en la pila.

### Solución:

```js
var homeworkStack = ["BIO12","HIS80","MAT122","PSY44"]; 
 
 homeworkStack.pop(); 
 homeworkStack.push("CS50"); 
```

### Referencia:

*   [Wikipedia](https://en.wikipedia.org/wiki/Stack_(abstract_data_type))
*   Video de [Hackerrank](https://www.youtube.com/watch?v=wjI1WNcIntg)