---
id: 587d8250367417b2b2512c60
title: Create a Queue Class
challengeType: 1
videoUrl: ''
localeTitle: Crear una clase de cola
---

## Description
<section id="description"> Al igual que las pilas, las colas son una colección de elementos. Pero a diferencia de las pilas, las colas siguen el principio FIFO (primero en entrar, primero en salir). Los elementos agregados a una cola se empujan a la cola, o al final, de la cola, y solo se permite eliminar el elemento en la parte delantera de la cola. Podríamos usar una matriz para representar una cola, pero al igual que las pilas, queremos limitar la cantidad de control que tenemos sobre nuestras colas. Los dos métodos principales de una clase de cola son la puesta en cola y el método de salida. El método de puesta en cola empuja un elemento a la cola de la cola, y el método de salida de cola elimina y devuelve el elemento en la parte delantera de la cola. Otros métodos útiles son los métodos de frente, tamaño e isEmpty. Instrucciones Escriba un método de puesta en cola que empuja un elemento a la cola de la cola, un método de salida de cola que elimina y devuelve el elemento frontal, un método frontal que nos permite ver el elemento frontal, un método de tamaño que muestra la longitud y un método isEmpty para comprobar si la cola está vacía. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su clase de <code>Queue</code> debe tener un método de <code>enqueue</code> en <code>enqueue</code> .
    testString: 'assert((function(){var test = new Queue();  return (typeof test.enqueue === "function")}()), "Your <code>Queue</code> class should have a <code>enqueue</code> method.");'
  - text: Tu clase de <code>Queue</code> debe tener un método de <code>dequeue</code> .
    testString: 'assert((function(){var test = new Queue();  return (typeof test.dequeue === "function")}()), "Your <code>Queue</code> class should have a <code>dequeue</code> method.");'
  - text: Tu clase de <code>Queue</code> debe tener un método <code>front</code> .
    testString: 'assert((function(){var test = new Queue();  return (typeof test.front === "function")}()), "Your <code>Queue</code> class should have a <code>front</code> method.");'
  - text: Tu clase de <code>Queue</code> debe tener un método de <code>size</code> .
    testString: 'assert((function(){var test = new Queue();  return (typeof test.size === "function")}()), "Your <code>Queue</code> class should have a <code>size</code> method.");'
  - text: Tu clase de <code>Queue</code> debe tener un método <code>isEmpty</code> .
    testString: 'assert((function(){var test = new Queue();  return (typeof test.isEmpty === "function")}()), "Your <code>Queue</code> class should have an <code>isEmpty</code> method.");'
  - text: El método de <code>dequeue</code> debe eliminar y devolver el elemento frontal de la cola
    testString: 'assert((function(){var test = new Queue();  test.enqueue("Smith"); return (test.dequeue() === "Smith")}()), "The <code>dequeue</code> method should remove and return the front element of the queue");'
  - text: El método <code>front</code> debe devolver el valor del elemento frontal de la cola
    testString: 'assert((function(){var test = new Queue();  test.enqueue("Smith"); test.enqueue("John"); return (test.front() === "Smith")}()), "The <code>front</code> method should return value of the front element of the queue");'
  - text: El método de <code>size</code> debe devolver la longitud de la cola
    testString: 'assert((function(){var test = new Queue();  test.enqueue("Smith"); return (test.size() === 1)}()), "The <code>size</code> method should return the length of the queue");'
  - text: El método <code>isEmpty</code> debería devolver <code>false</code> si hay elementos en la cola
    testString: 'assert((function(){var test = new Queue();  test.enqueue("Smith"); return !(test.isEmpty())}()), "The <code>isEmpty</code> method should return <code>false</code> if there are elements in the queue");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Queue () {
    var collection = [];
    this.print = function() {
        console.log(collection);
    };
    // Only change code below this line

    // Only change code above this line
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
