---
id: 587d8251367417b2b2512c65
title: Remove Elements from a Linked List by Index
challengeType: 1
videoUrl: ''
localeTitle: Eliminar elementos de una lista enlazada por índice
---

## Description
<section id="description"> Antes de pasar a otra estructura de datos, obtengamos un par de los últimos bits de práctica con listas vinculadas. Escribamos un método <code>removeAt</code> que elimine el <code>element</code> en un <code>index</code> dado. El método debe llamarse <code>removeAt(index)</code> . Para eliminar un <code>element</code> en un determinado <code>index</code> , deberemos mantener un recuento de cada nodo a medida que avanzamos a lo largo de la lista vinculada. Una técnica común utilizada para recorrer los elementos de una lista enlazada implica un <dfn>&#39;corredor&#39;</dfn> , o centinela, que &#39;apunta&#39; a los nodos que su código está comparando. En nuestro caso, a partir de la <code>head</code> de nuestra lista, comenzamos con una <code>currentIndex</code> variable que comienza en <code>0</code> . El <code>currentIndex</code> debe incrementarse en uno para cada nodo que pasemos. Al igual que con nuestro método <code>remove(element)</code> , debemos tener cuidado de no dejar huérfano al resto de nuestra lista cuando eliminamos el nodo en nuestro método removeAt (índice). Mantenemos nuestros nodos contiguos asegurándonos de que el nodo que tiene referencia al nodo eliminado tenga una referencia al siguiente nodo. </section>

## Instructions
<section id="instructions"> Escriba un <code>removeAt(index)</code> que elimine y devuelva un nodo en un <code>index</code> determinado. El método debe devolver <code>null</code> si el <code>index</code> dado es negativo, o mayor o igual a la <code>length</code> de la lista enlazada. Nota Recuerde mantener la cuenta del <code>currentIndex</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su clase <code>LinkedList</code> debe tener un método <code>removeAt</code> .
    testString: 'assert((function(){var test = new LinkedList(); return (typeof test.removeAt === "function")}()), "Your <code>LinkedList</code> class should have a <code>removeAt</code> method.");'
  - text: Su método <code>removeAt</code> debería reducir la <code>length</code> de la lista enlazada
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog"); test.add("kitten"); test.removeAt(1); return test.size() === 2}()), "Your <code>removeAt</code> method should reduce the <code>length</code> of the linked list");'
  - text: El método <code>removeAt</code> también debe devolver el elemento del nodo eliminado.
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog"); test.add("kitten");  return test.removeAt(1) === "dog"}()), "Your <code>removeAt</code> method should also return the element of the removed node.");'
  - text: El método <code>removeAt</code> también debe devolver un <code>null</code> si el índice dado es menor que <code>0</code>
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog"); test.add("kitten");  return (test.removeAt(-1) === null)}()), "Your <code>removeAt</code> method should also return <code>null</code> if the given index is less than <code>0</code>");'
  - text: El método <code>removeAt</code> también debe devolver un <code>null</code> si el índice dado es igual o mayor que la <code>length</code> de la lista enlazada.
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog"); test.add("kitten");  return (test.removeAt(3) === null)}()), "Your <code>removeAt</code> method should also return <code>null</code> if the given index is equal or more than the <code>length</code> of the linked list.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){ // {1}
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
    var currentNode = head;
    var previousNode;
    if(currentNode.element === element){
        head = currentNode.next;
    } else {
        while(currentNode.element !== element) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        previousNode.next = currentNode.next;
    }

    length --;
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
