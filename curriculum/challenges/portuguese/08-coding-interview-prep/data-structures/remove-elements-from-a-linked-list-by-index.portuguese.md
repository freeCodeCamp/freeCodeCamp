---
id: 587d8251367417b2b2512c65
title: Remove Elements from a Linked List by Index
challengeType: 1
videoUrl: ''
localeTitle: Remover elementos de uma lista vinculada por índice
---

## Description
<section id="description"> Antes de passarmos para outra estrutura de dados, vamos obter alguns dos últimos passos de prática com listas vinculadas. Vamos escrever um método <code>removeAt</code> que remova o <code>element</code> em um determinado <code>index</code> . O método deve ser chamado de <code>removeAt(index)</code> . Para remover um <code>element</code> em um determinado <code>index</code> , precisaremos manter uma contagem em execução de cada nó à medida que nos movemos ao longo da lista vinculada. Uma técnica comum usada para percorrer os elementos de uma lista vinculada envolve um <dfn>&#39;runner&#39;</dfn> ou sentinel que &#39;aponta&#39; nos nós que seu código está comparando. No nosso caso, a partir da <code>head</code> da nossa lista, começamos com um <code>currentIndex</code> variável que começa em <code>0</code> . O <code>currentIndex</code> deve incrementar em um para cada nó que passamos. Assim como nosso método <code>remove(element)</code> , precisamos ter cuidado para não deixar o restante da nossa lista órfão quando removemos o nó em nosso método removeAt (index). Mantemos nossos nós contíguos, certificando-nos de que o nó que tenha referência ao nó removido tenha uma referência ao próximo nó. </section>

## Instructions
<section id="instructions"> Escreva um <code>removeAt(index)</code> que remova e retorne um nó em um determinado <code>index</code> . O método deve retornar <code>null</code> se o <code>index</code> fornecido for negativo ou maior que ou igual ao <code>length</code> da lista vinculada. Nota Lembre-se de manter a contagem do <code>currentIndex</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Sua classe <code>LinkedList</code> deve ter um método <code>removeAt</code> .
    testString: 'assert((function(){var test = new LinkedList(); return (typeof test.removeAt === "function")}()), "Your <code>LinkedList</code> class should have a <code>removeAt</code> method.");'
  - text: Seu método <code>removeAt</code> deve reduzir o <code>length</code> da lista vinculada
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog"); test.add("kitten"); test.removeAt(1); return test.size() === 2}()), "Your <code>removeAt</code> method should reduce the <code>length</code> of the linked list");'
  - text: Seu método <code>removeAt</code> também deve retornar o elemento do nó removido.
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog"); test.add("kitten");  return test.removeAt(1) === "dog"}()), "Your <code>removeAt</code> method should also return the element of the removed node.");'
  - text: Seu método <code>removeAt</code> também deve retornar <code>null</code> se o índice fornecido for menor que <code>0</code>
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog"); test.add("kitten");  return (test.removeAt(-1) === null)}()), "Your <code>removeAt</code> method should also return <code>null</code> if the given index is less than <code>0</code>");'
  - text: Seu método <code>removeAt</code> também deve retornar <code>null</code> se o índice fornecido for igual ou maior que o <code>length</code> da lista vinculada.
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
