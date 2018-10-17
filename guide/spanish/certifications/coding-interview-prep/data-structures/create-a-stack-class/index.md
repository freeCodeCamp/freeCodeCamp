---
title: Create a Stack Class
localeTitle: Crear una clase de pila
---
## Crear una clase de pila

### Método:

*   La pila es una estructura de datos abstracta.
*   La pila sigue el principio LIFO / FILO.

## \- En este desafío, debemos agregar los `.push()` , `.pop()` , `.peek()` , `.isEmpty()` y `.clear()` a la clase.

*   `push()` método `push()` empuja el valor a la pila.
*   `pop()` método `pop()` saca el primer valor de la pila.
*   `peek()` método `peek()` devuelve el primer valor de la pila.
*   `isEmpty()` método `isEmpty()` verifica si esta pila está vacía.

## \- `.clear()` método `.clear()` elimina todos los elementos de la pila.

| DS | Acceso | Búsqueda | Insertar | Eliminar | | ----- | ------ | ------ | ------ | ------ | | Pila | n | n | 1 | 1 |

### Solución:

#### BASIC:

```js
function Stack() { 
    var collection = []; 
    this.print = function() { 
        console.log(collection); 
    }; 
    this.push = function(val){ 
        return collection.push(val); 
    } 
    this.pop = function(){ 
        return collection.pop(); 
    } 
    this.peek = function(){ 
        return collection[collection.length-1]; 
    } 
    this.isEmpty = function(){ 
        return collection.length === 0; 
    } 
    this.clear = function(){ 
        collection.length = 0; 
    } 
 } 
```

#### Avanzado - Sintaxis de la clase ES6:

```js
class Stack { 
    constructor() { 
        this.collection = []; 
    } 
    print(){ 
        console.log(this.collection); 
    } 
    push(val){ 
        retiurn this.collection.push(val); 
    } 
    pop(){ 
        return this.collection.pop(); 
    } 
    peek(){ 
        return this.collection[this.collection.length-1]; 
    } 
    isEmpty(){ 
        return this.collection.length === 0; 
    } 
    clear(){ 
        return this.collection.length = 0; 
    } 
 } 
```

\### Recursos:

*   [Wikipedia](https://en.wikipedia.org/wiki/Stack_(abstract_data_type))