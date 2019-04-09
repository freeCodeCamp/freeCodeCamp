---
id: 587d8251367417b2b2512c64
title: Search within a Linked List
challengeType: 1
videoUrl: ''
localeTitle: Pesquisar em uma lista vinculada
---

## Description
<section id="description"> Vamos adicionar alguns métodos mais úteis à nossa classe de lista vinculada. Não seria útil se pudéssemos dizer se a nossa lista estava vazia ou não, como nas nossas classes <code>Stack</code> e <code>Queue</code> ? Também devemos encontrar elementos específicos em nossa lista vinculada. Percorrer estruturas de dados é algo com o qual você vai querer praticar bastante! Vamos criar um método <code>indexOf</code> que <code>indexOf</code> um <code>element</code> como argumento e retorne o <code>index</code> desse elemento na lista vinculada. Se o elemento não for encontrado na lista vinculada, retorne <code>-1</code> . Vamos também implementar um método que faça o oposto: um método <code>elementAt</code> que usa um <code>index</code> como um argumento e retorna o <code>element</code> no <code>index</code> fornecido. Se nenhum <code>element</code> for encontrado, retorne <code>undefined</code> . </section>

## Instructions
<section id="instructions"> Escreva um método <code>isEmpty</code> que verifique se a lista vinculada está vazia, um método <code>indexOf</code> que retorna o <code>index</code> de um determinado elemento e um <code>elementAt</code> que retorna um <code>element</code> em um determinado <code>index.</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Sua classe <code>LinkedList</code> deve ter um método <code>indexOf</code> .
    testString: 'assert((function(){var test = new LinkedList(); return (typeof test.indexOf === "function")}()), "Your <code>LinkedList</code> class should have a <code>indexOf</code> method.");'
  - text: Sua classe <code>LinkedList</code> deve ter um método <code>elementAt</code> .
    testString: 'assert((function(){var test = new LinkedList(); return (typeof test.elementAt === "function")}()), "Your <code>LinkedList</code> class should have a <code>elementAt</code> method.");'
  - text: Seu método de <code>size</code> deve retornar o tamanho da lista vinculada
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog"); test.add("kitten"); return test.size() === 3}()), "Your <code>size</code> method should return the length of the linked list");'
  - text: Seu método <code>indexOf</code> deve retornar o índice do elemento especificado.
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog"); test.add("kitten"); return test.indexOf("kitten") === 2}()), "Your <code>indexOf</code> method should return the index of the given element.");'
  - text: Seu método <code>elementAt</code> deve retornar no elemento em um determinado índice.
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
