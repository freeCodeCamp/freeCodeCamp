---
id: 587d8251367417b2b2512c64
title: Search within a Linked List
challengeType: 1
videoUrl: ''
localeTitle: Buscar dentro de una lista enlazada
---

## Description
<section id="description"> Agreguemos algunos métodos más útiles a nuestra clase de lista vinculada. ¿No sería útil si pudiéramos decir si nuestra lista estaba vacía o no, al igual que con nuestras clases de <code>Stack</code> y <code>Queue</code> ? También deberíamos poder encontrar elementos específicos en nuestra lista enlazada. ¡Recorrer a través de estructuras de datos es algo con lo que querrás practicar mucho! Vamos a crear un método <code>indexOf</code> que tome un <code>element</code> como un argumento y devuelva el <code>index</code> ese elemento en la lista enlazada. Si el elemento no se encuentra en la lista enlazada, devuelva <code>-1</code> . También implementemos un método que haga lo contrario: un método <code>elementAt</code> que toma un <code>index</code> como argumento y devuelve el <code>element</code> en el <code>index</code> dado. Si no se encuentra ningún <code>element</code> , devuelva <code>undefined</code> . </section>

## Instructions
<section id="instructions"> Escriba un método <code>isEmpty</code> que compruebe si la lista enlazada está vacía, un método <code>indexOf</code> que devuelve el <code>index</code> de un elemento dado y un <code>elementAt</code> que devuelve un <code>element</code> en un <code>index.</code> determinado <code>index.</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su clase <code>LinkedList</code> debe tener un método <code>indexOf</code> .
    testString: 'assert((function(){var test = new LinkedList(); return (typeof test.indexOf === "function")}()), "Your <code>LinkedList</code> class should have a <code>indexOf</code> method.");'
  - text: Tu clase <code>LinkedList</code> debe tener un método <code>elementAt</code> .
    testString: 'assert((function(){var test = new LinkedList(); return (typeof test.elementAt === "function")}()), "Your <code>LinkedList</code> class should have a <code>elementAt</code> method.");'
  - text: Su método de <code>size</code> debe devolver la longitud de la lista enlazada
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog"); test.add("kitten"); return test.size() === 3}()), "Your <code>size</code> method should return the length of the linked list");'
  - text: Su método <code>indexOf</code> debe devolver el índice del elemento dado.
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog"); test.add("kitten"); return test.indexOf("kitten") === 2}()), "Your <code>indexOf</code> method should return the index of the given element.");'
  - text: Su método <code>elementAt</code> debería regresar al elemento en un índice dado.
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog"); test.add("kitten"); return test.elementAt(1) === "dog"}()), "Your <code>elementAt</code> method should return at element at a given index.");'

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

  this.size = function() {
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
