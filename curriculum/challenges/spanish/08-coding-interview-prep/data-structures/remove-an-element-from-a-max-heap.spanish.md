---
id: 587d825b367417b2b2512c8b
title: Remove an Element from a Max Heap
challengeType: 1
videoUrl: ''
localeTitle: Eliminar un elemento de un montón máximo
---

## Description
<section id="description"> Ahora que podemos agregar elementos a nuestro montón, veamos cómo podemos eliminar elementos. Eliminar e insertar elementos requiere una lógica similar. En un montón máximo, normalmente querrá eliminar el mayor valor, por lo que esto implica simplemente extraerlo de la raíz de nuestro árbol. Esto romperá la propiedad del montón de nuestro árbol, por lo que debemos restablecerla de alguna manera. Normalmente, para un montón máximo, esto se hace de la siguiente manera: Mueva el último elemento del montón a la posición raíz. Si cualquiera de los hijos de la raíz es mayor, intercambie la raíz con el hijo de mayor valor. Continúa intercambiando hasta que el padre sea mayor que ambos hijos o hasta que alcances el último nivel del árbol. Instrucciones: Agregue un método a nuestro montón máximo llamado eliminar. Este método debe devolver el mayor valor que se ha agregado a nuestro montón máximo y eliminarlo del montón. También debe reordenar el montón para que se mantenga la propiedad de montón. Después de eliminar un elemento, el siguiente elemento más grande que quede en el montón debe convertirse en la raíz. Agregue su método de inserción de nuevo aquí también. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: La estructura de datos MaxHeap existe.
    testString: 'assert((function() { var test = false; if (typeof MaxHeap !== "undefined") { test = new MaxHeap() }; return (typeof test == "object")})(), "The MaxHeap data structure exists.");'
  - text: MaxHeap tiene un método llamado imprimir.
    testString: 'assert((function() { var test = false; if (typeof MaxHeap !== "undefined") { test = new MaxHeap() } else { return false; }; return (typeof test.print == "function")})(), "MaxHeap has a method called print.");'
  - text: MaxHeap tiene un método llamado insertar.
    testString: 'assert((function() { var test = false; if (typeof MaxHeap !== "undefined") { test = new MaxHeap() } else { return false; }; return (typeof test.insert == "function")})(), "MaxHeap has a method called insert.");'
  - text: MaxHeap tiene un método llamado eliminar.
    testString: 'assert((function() { var test = false; if (typeof MaxHeap !== "undefined") { test = new MaxHeap() } else { return false; }; return (typeof test.remove == "function")})(), "MaxHeap has a method called remove.");'
  - text: El método de eliminación elimina el elemento más grande de la pila máxima y mantiene la propiedad de pila máxima.
    testString: 'assert((function() { var test = false; if (typeof MaxHeap !== "undefined") { test = new MaxHeap() } else { return false; }; test.insert(30); test.insert(300); test.insert(500); test.insert(10); let result = []; result.push(test.remove()); result.push(test.remove()); result.push(test.remove()); result.push(test.remove());  return (result.join("") == "5003003010") })(), "The remove method removes the greatest element from the max heap while maintaining the max heap property.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var MaxHeap = function() {
  // change code below this line
  // change code above this line
};

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
