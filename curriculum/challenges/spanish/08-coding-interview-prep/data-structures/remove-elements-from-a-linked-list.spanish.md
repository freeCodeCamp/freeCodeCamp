---
id: 587d8251367417b2b2512c63
title: Remove Elements from a Linked List
challengeType: 1
videoUrl: ''
localeTitle: Eliminar elementos de una lista enlazada
---

## Description
<section id="description"> El siguiente método importante que necesitará cualquier implementación de una lista vinculada es un método de <code>remove</code> . Este método debe tomar el elemento que queremos eliminar como argumento y luego buscar en la lista para encontrar y eliminar el nodo que contiene ese elemento. Cada vez que eliminamos un nodo de una lista vinculada, es importante que no dejemos huérfanos accidentalmente al hacerlo. Recuerde que la <code>next</code> propiedad de cada nodo apunta al nodo que lo sigue en la lista. Si estamos eliminando el elemento medio, por ejemplo, vamos a querer asegurarse de que tenemos una conexión desde previa del nodo de ese elemento <code>next</code> propiedad para el elemento medio <code>next</code> propiedad (que es el siguiente nodo en la lista!) Esto puede sonar realmente confuso, así que volvamos al ejemplo de la línea de conga para tener un buen modelo conceptual. Imagínate a ti mismo en una línea de conga, y la persona que está directamente delante de ti deja la línea. La persona que acaba de dejar la línea ya no tiene a sus manos sobre nadie, y usted ya no tiene las manos sobre la persona que se fue. Da un paso adelante y pone sus manos sobre la siguiente persona que ve. Si el elemento que queremos eliminar es el elemento <code>head</code> , reasignamos la <code>head</code> al segundo nodo de la lista enlazada. </section>

## Instructions
<section id="instructions"> Escriba un método de <code>remove</code> que toma un elemento y lo elimina de la lista vinculada. Nota La <code>length</code> de la lista debería disminuir en uno cada vez que se elimine un elemento de la lista vinculada. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su clase <code>LinkedList</code> debe tener un método de <code>remove</code> .
    testString: 'assert((function(){var test = new LinkedList(); return (typeof test.remove === "function")}()), "Your <code>LinkedList</code> class should have a <code>remove</code> method.");'
  - text: Su método de <code>remove</code> debe reasignar la <code>head</code> al segundo nodo cuando se elimina el primer nodo.
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog"); test.remove("cat"); return test.head().element === "dog"}()), "Your <code>remove</code> method should reassign <code>head</code> to the second node when the first node is removed.");'
  - text: Su método de <code>remove</code> debe disminuir la <code>length</code> de la lista enlazada en uno por cada nodo eliminado.
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog"); test.remove("cat"); return test.size() === 1})(), "Your <code>remove</code> method should decrease the <code>length</code> of the linked list by one for every node removed.");'
  - text: El método de <code>remove</code> debe reasignar la referencia del nodo anterior del nodo eliminado a la <code>next</code> referencia del nodo eliminado.
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog");test.add("kitten"); test.remove("dog"); return test.head().next.element === "kitten"})(), "Your <code>remove</code> method should reassign the reference of the previous node of the removed node to the removed node&apos;s <code>next</code> reference.");'

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

  this.size = function(){
    return length;
  };

  this.head = function(){
    return head;
  };

  this.add = function(element){
    var node = new Node(element);
    if(head === null){
        head = node;
    } else {
        var currentNode = head;

        while(currentNode.next){
            currentNode  = currentNode.next;
        }

        currentNode.next = node;
    }

    length++;
  };

  this.remove = function(element){
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
