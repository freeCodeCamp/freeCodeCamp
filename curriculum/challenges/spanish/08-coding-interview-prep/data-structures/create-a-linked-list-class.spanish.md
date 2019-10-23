---
id: 587d8251367417b2b2512c62
title: Create a Linked List Class
challengeType: 1
videoUrl: ''
localeTitle: Crear una clase de lista enlazada
---

## Description
<section id="description"> Vamos a crear una clase de <code>linked list</code> . Cada lista vinculada debe comenzar con unas pocas propiedades básicas: una <code>head</code> (el primer elemento de su lista) y una <code>length</code> (número de elementos en su lista). A veces, verás implementaciones de listas vinculadas que incorporan una <code>tail</code> para el último elemento de la lista, pero por ahora solo nos quedaremos con estos dos. Cada vez que agregamos un elemento a la lista vinculada, nuestra propiedad de <code>length</code> debe incrementarse en uno. Queremos tener una forma de agregar elementos a nuestra lista vinculada, por lo que el primer método que querremos crear es el método de <code>add</code> . Si nuestra lista está vacía, agregar un elemento a nuestra lista vinculada es lo suficientemente simple: simplemente envolvemos ese elemento en una clase de <code>Node</code> , y asignamos ese nodo al <code>head</code> de nuestra lista vinculada. Pero, ¿y si nuestra lista ya tiene uno o más miembros? ¿Cómo agregamos un elemento a la lista? Recuerde que cada nodo en una lista vinculada tiene una propiedad <code>next</code> . Para agregar un nodo a la lista, busque el último nodo en la lista y apunte la <code>next</code> propiedad del último nodo a nuestro nuevo nodo. (Sugerencia: sabe que ha llegado al final de una lista vinculada cuando la <code>next</code> propiedad de un nodo es <code>null</code> ). </section>

## Instructions
<section id="instructions"> Escriba un método de adición que asigne el primer nodo que empuja a la lista vinculada al <code>head</code> ; después de eso, cada vez que agregue un nodo, cada nodo debe ser referenciado por la <code>next</code> propiedad del nodo anterior. Nota La <code>length</code> su lista debe aumentar en uno cada vez que se agregue un elemento a la lista vinculada. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su clase <code>LinkedList</code> debe tener un método de <code>add</code> .
    testString: 'assert((function(){var test = new LinkedList(); return (typeof test.add === "function")}()), "Your <code>LinkedList</code> class should have a <code>add</code> method.");'
  - text: Su clase <code>LinkedList</code> debe asignar <code>head</code> al primer nodo agregado.
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); return test.head().element === "cat"}()), "Your <code>LinkedList</code> class should assign <code>head</code> to the first node added.");'
  - text: El <code>node</code> anterior en su clase <code>LinkedList</code> debe tener referencia al nodo más reciente creado.
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog"); return test.head().next.element === "dog"}()), "The previous <code>node</code> in your <code>LinkedList</code> class should have reference to the newest node created.");'
  - text: El <code>size</code> de su clase <code>LinkedList</code> debe ser igual a la cantidad de nodos en la lista vinculada.
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog"); return test.size() === 2}()), "The  <code>size</code> of your <code>LinkedList</code> class should equal the amount of nodes in the linked list.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.head = function(){
    return head;
  };

  this.size = function(){
    return length;
  };

  this.add = function(element){
    // Only change code below this line

    // Only change code above this line
  };
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
