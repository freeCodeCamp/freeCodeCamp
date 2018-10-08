---
id: 587d8255367417b2b2512c75
title: Create a Circular Queue
localeTitle: Crear una cola circular
challengeType: 1
---

## Description
<section id='description'> 
En este desafío estarás creando una Cola Circular. Una cola circular es básicamente una cola que se escribe al final de una colección y luego comienza a escribirse al principio de la colección. Este es un tipo de estructura de datos que tiene algunas aplicaciones útiles en ciertas situaciones. Por ejemplo, una cola circular se puede utilizar para transmitir medios. Una vez que la cola está llena, los nuevos datos de medios simplemente comienzan a sobrescribir los datos antiguos. 
Una buena manera de ilustrar este concepto es con una matriz: 
<blockquote>[1, 2, 3, 4, 5]<br> ^Read @ 0<br> ^Write @ 0</blockquote> 
Aquí tanto la lectura como la escritura están en la posición <code>0</code> . Ahora la cola obtiene 3 nuevos registros <code>a</code> , <code>b</code> , y <code>c</code> . Nuestra cola ahora se ve como: 
<blockquote>[a, b, c, 4, 5]<br> ^Read @ 0<br>       ^Write @ 3</blockquote> 
Mientras la cabeza de lectura lee, puede eliminar valores o mantenerlos: 
<blockquote>[null, null, null, 4, 5]<br>                   ^Read @ 3<br>                   ^Write @ 3</blockquote> 
Una vez que la escritura llega al final de la matriz, vuelve al principio: 
<blockquote>[f, null, null, d, e]<br>                ^Read @ 3<br> ^Write @ 1</blockquote> 
Este enfoque requiere una cantidad constante de memoria, pero permite procesar archivos de un tamaño mucho mayor. 
Instrucciones: 
En este desafío implementaremos una cola circular. La cola circular debe proporcionar métodos de <code>dequeue</code> <code>enqueue</code> y <code>dequeue</code> <code>enqueue</code> que le permitan leer y escribir en la cola. La clase en sí también debe aceptar un número entero que puede usar para especificar el tamaño de la cola cuando la cree. Hemos escrito la versión inicial de esta clase para usted en el editor de código. Cuando pone en cola elementos en la cola, el puntero de escritura debe avanzar y volver al principio una vez que llega al final de la cola. Del mismo modo, el puntero de lectura debe avanzar hacia adelante a medida que se retiran de la cola los elementos. No se debe permitir que el puntero de escritura se mueva más allá del puntero de lectura (nuestra clase no le permitirá sobrescribir datos que aún no ha leído) y el puntero de lectura no debe poder avanzar los datos pasados ​​que haya escrito. 
Además, el método de <code>enqueue</code> debe devolver el elemento que ha puesto en <code>enqueue</code> si tiene éxito y, de lo contrario, devolver el <code>null</code> . De manera similar, cuando saca de la cola un artículo, debe devolverse y, si no puede sacar la cola, debe devolver un <code>null</code> . 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El método de <code>enqueue</code> agrega elementos a la cola circular.
    testString: 'assert((function(){ var test = new CircularQueue(3); test.enqueue(17); test.enqueue(32); test.enqueue(591); var print = test.print(); return print[0] === 17 && print[1] === 32 && print[2] === 591; })(), "The <code>enqueue</code> method adds items to the circular queue.");'
  - text: No puede poner en cola elementos más allá del puntero de lectura.
    testString: 'assert((function(){ var test = new CircularQueue(3); test.enqueue(17); test.enqueue(32); test.enqueue(591); test.enqueue(13); test.enqueue(25); test.enqueue(59); var print = test.print(); return print[0] === 17 && print[1] === 32 && print[2] === 591; })(), "You cannot enqueue items past the read pointer.");'
  - text: La <code>dequeue</code> método de Retiros de cola elementos de la cola.
    testString: 'assert((function(){ var test = new CircularQueue(3); test.enqueue(17); test.enqueue(32); test.enqueue(591); return test.dequeue() === 17 && test.dequeue() === 32 && test.dequeue() === 591; })(), "The <code>dequeue</code> method dequeues items from the queue.");'
  - text: Después de que un elemento se haya retirado de su posición en la cola, se debe restablecer en <code>null</code> .
    testString: 'assert((function(){ var test = new CircularQueue(3); test.enqueue(17); test.enqueue(32); test.enqueue(672); test.dequeue(); test.dequeue(); var print = test.print(); return print[0] === null && print[1] === null && print[2] === 672; })(), "After an item is dequeued its position in the queue should be reset to <code>null</code>.");'
  - text: Intentar sacar de la cola más allá del puntero de escritura devuelve un <code>null</code> y no avanza el puntero de escritura.
    testString: 'assert((function(){ var test = new CircularQueue(3); test.enqueue(17); test.enqueue(32); test.enqueue(591); return test.dequeue() === 17 && test.dequeue() === 32 && test.dequeue() === 591 && test.dequeue() === null && test.dequeue() === null && test.dequeue() === null && test.dequeue() === null && test.enqueue(100) === 100 && test.dequeue() === 100; })(), "Trying to dequeue past the write pointer returns <code>null</code> and does not advance the write pointer.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
class CircularQueue {
   constructor(size) {

     this.queue = [];
     this.read = 0;
     this.write = 0;
     this.max = size - 1;

     while (size > 0) {
        this.queue.push(null);
        size--;
     }

   }

   print() {
     return this.queue;
   }


   enqueue(item) {
    // Only change code below this line

    // Only change code above this line
   }

   dequeue() {
    // Only change code below this line

    // Only change code above this line
   }
}
```

</div>



</section>

## Solution
<section id='solution'>


```js
class CircularQueue {
 constructor(size) {
 this.queue = [];
 this.read = 0;
 this.write = 0;
 this.max = size - 1;
 while (size > 0) {
 this.queue.push(null);
 size--;
 }
 }
 print() {
 return this.queue;
 }
 enqueue(item) {
 if (this.queue[this.write] === null) {
 this.queue[this.write] = item;
 if (this.write === this.max) {
 this.write = 0;
 } else {
 this.write++;
 }
 return item;
 }
 return null;
 }
 dequeue() {
 if (this.queue[this.read] !== null) {
 var item = this.queue[this.read];
 this.queue[this.read] = null;
 if (this.read === this.max) {
 this.read = 0;
 } else {
 this.read++;
 }
 return item;
 } else {
 return null;
 }
 }
 }
```

</section>
