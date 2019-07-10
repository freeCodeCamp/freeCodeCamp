---
id: 587d8252367417b2b2512c67
title: Add Elements at a Specific Index in a Linked List
challengeType: 1
videoUrl: ''
localeTitle: Agregar elementos a un índice específico en una lista enlazada
---

## Description
<section id="description"> Vamos a crear un método addAt (índice, elemento) que agregue un elemento a un índice dado. Al igual que con la forma en que eliminamos los elementos en un índice determinado, debemos realizar un seguimiento del índice actual mientras recorremos la lista enlazada. Cuando el currentIndex coincida con el índice dado, deberíamos reasignar la siguiente propiedad del nodo anterior para hacer referencia al nuevo nodo agregado. Y el nuevo nodo debe hacer referencia al siguiente nodo en el currentIndex. Volviendo al ejemplo de la línea de conga, una nueva persona quiere unirse a la línea, pero quiere unirse en el medio. Estás en el medio de la línea, así que quitas las manos de la persona que está delante de ti. La nueva persona se acerca y pone sus manos sobre la persona que una vez tuvo, y ahora tiene las manos sobre la nueva persona. Instrucciones Cree un método addAt (índice, elemento) que agregue un elemento a un índice determinado. Devuelve false si un elemento no se pudo agregar. Nota Recuerde verificar si el índice dado es negativo o más largo que la longitud de la lista enlazada. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su método <code>addAt</code> debe reasignar la <code>head</code> al nuevo nodo cuando el índice dado sea 0.
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog"); test.addAt(0,"cat"); return test.head().element === "cat"}()), "Your <code>addAt</code> method should reassign <code>head</code> to the new node when the given index is 0.");'
  - text: Su método <code>addAt</code> debe aumentar la longitud de la lista vinculada en uno por cada nuevo nodo agregado a la lista vinculada.
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog"); test.addAt(0,"cat"); return test.size() === 3}()), "Your <code>addAt</code> method should increase the length of the linked list by one for each new node added to the linked list.");'
  - text: Su método <code>addAt</code> debería devolver <code>false</code> si no se pudo agregar un nodo.
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog"); return (test.addAt(4,"cat") === false); }()), "Your <code>addAt</code> method should return <code>false</code> if a node was unable to be added.");'

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
    if (head === null){
        head = node;
    } else {
      var currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }
    length++;
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
