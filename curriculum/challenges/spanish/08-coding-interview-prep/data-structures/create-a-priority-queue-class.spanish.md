---
id: 587d8255367417b2b2512c74
title: Create a Priority Queue Class
localeTitle: Crear una clase de cola de prioridad
challengeType: 1
---

## Description
<section id='description'> 
En este desafío crearás una cola de prioridad. Una cola de prioridad es un tipo especial de cola en la que los elementos pueden tener información adicional que especifica su prioridad. Esto podría ser representado simplemente con un número entero. La prioridad de los elementos anulará el orden de colocación para determinar si los elementos de la secuencia se eliminan. Si un elemento con una prioridad más alta se pone en cola después de los elementos con una prioridad más baja, el elemento de mayor prioridad se eliminará de la cola antes que todos los demás. 
Por ejemplo, imaginemos que tenemos una cola de prioridad con tres elementos: 
<code>[[&#39;kitten&#39;, 2], [&#39;dog&#39;, 2], [&#39;rabbit&#39;, 2]]</code> 
Aquí el segundo valor (un entero) representa la prioridad del elemento. Si ponemos en cola <code>[&#39;human&#39;, 1]</code> con una prioridad de <code>1</code> (suponiendo que se da prioridad a las prioridades más bajas) sería el primer elemento que se eliminará de la cola. A la colección le gustaría esto: 
<code>[[&#39;human&#39;, 1], [&#39;kitten&#39;, 2], [&#39;dog&#39;, 2], [&#39;rabbit&#39;, 2]]</code> . 
Hemos empezado a escribir un <code>PriorityQueue</code> en el editor de código. Necesitará agregar un método de <code>enqueue</code> en <code>enqueue</code> para agregar elementos con una prioridad, un método de <code>dequeue</code> para eliminar elementos, un método de <code>size</code> para devolver el número de elementos en la cola, un método <code>front</code> para devolver el elemento al frente de la cola y finalmente, un método <code>isEmpty</code> que devolverá <code>true</code> si la cola está vacía o <code>false</code> si no lo está. 
La <code>enqueue</code> debe aceptar elementos con el formato que se muestra arriba ( <code>[&#39;human&#39;, 1]</code> ) donde <code>1</code> representa la prioridad. La <code>dequeue</code> debe devolver solo el elemento actual, no su prioridad. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su clase de <code>Queue</code> debe tener un método de <code>enqueue</code> en <code>enqueue</code> .
    testString: 'assert((function(){var test = new PriorityQueue();  return (typeof test.enqueue === "function")}()), "Your <code>Queue</code> class should have a <code>enqueue</code> method.");'
  - text: Tu clase de <code>Queue</code> debe tener un método de <code>dequeue</code> .
    testString: 'assert((function(){var test = new PriorityQueue();  return (typeof test.dequeue === "function")}()), "Your <code>Queue</code> class should have a <code>dequeue</code> method.");'
  - text: Tu clase de <code>Queue</code> debe tener un método de <code>size</code> .
    testString: 'assert((function(){var test = new PriorityQueue();  return (typeof test.size === "function")}()), "Your <code>Queue</code> class should have a <code>size</code> method.");'
  - text: Tu clase de <code>Queue</code> debe tener un método <code>isEmpty</code> .
    testString: 'assert((function(){var test = new PriorityQueue();  return (typeof test.isEmpty === "function")}()), "Your <code>Queue</code> class should have an <code>isEmpty</code> method.");'
  - text: Su PriorityQueue debe realizar un seguimiento correcto del número actual de elementos utilizando el método de <code>size</code> , ya que los elementos se ponen en cola y se eliminan de la cola.
    testString: 'assert((function(){var test = new PriorityQueue(); test.enqueue(["David Brown", 2]); test.enqueue(["Jon Snow", 1]); var size1 = test.size(); test.dequeue(); var size2 = test.size(); test.enqueue(["A", 3]); test.enqueue(["B", 3]); test.enqueue(["C", 3]); return (size1 === 2 && size2 === 1 && test.size() === 4)}()), "Your PriorityQueue should correctly keep track of the current number of items using the <code>size</code> method as items are enqueued and dequeued.");'
  - text: El método <code>isEmpty</code> debería devolver <code>true</code> cuando la cola está vacía.
    testString: 'assert((function(){var test = new PriorityQueue(); test.enqueue(["A", 1]); test.enqueue(["B", 1]); test.dequeue(); var first = test.isEmpty(); test.dequeue(); return (!first && test.isEmpty()); }()), "The <code>isEmpty</code> method should return <code>true</code> when the queue is empty.");'
  - text: La cola de prioridad debe devolver los elementos con una prioridad más alta antes de los elementos con una prioridad más baja y devolver los elementos en el orden de primero en entrar, primero en salir, de lo contrario
    testString: 'assert((function(){var test = new PriorityQueue(); test.enqueue(["A", 5]); test.enqueue(["B", 5]); test.enqueue(["C", 5]); test.enqueue(["D", 3]); test.enqueue(["E", 1]); test.enqueue(["F", 7]); var result = []; result.push(test.dequeue()); result.push(test.dequeue()); result.push(test.dequeue()); result.push(test.dequeue()); result.push(test.dequeue()); result.push(test.dequeue()); return result.join("") === "EDABCF";}()), "The priority queue should return items with a higher priority before items with a lower priority and return items in first-in-first-out order otherwise.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function PriorityQueue () {
    this.collection = [];
    this.printCollection = function() {
      console.log(this.collection);
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
function PriorityQueue () {
 this.collection = [];
 this.printCollection = function(){
 console.log(this.collection);
 };
 this.size = function() {
 return this.collection.length;
 };
 this.isEmpty = function() {
 return this.size() > 0 ? false : true;
 };
 this.enqueue = function (newitem) {
  if (this.isEmpty()) {
    return this.collection.push(newitem);
  }

  this.collection = this.collection.reverse();
  var found_index = this.collection.findIndex(function (item) {
    return newitem[1] >= item[1];
  });
  if (found_index === -1) {
    this.collection.push(newitem);
  } else {
    this.collection.splice(found_index, 0, newitem);
  }
  this.collection = this.collection.reverse();
};
 this.dequeue = function() {
 if (!this.isEmpty()) {
 return this.collection.shift()[0];
 } else {
 return 'The queue is empty.'
 }
 };
 }
```

</section>
