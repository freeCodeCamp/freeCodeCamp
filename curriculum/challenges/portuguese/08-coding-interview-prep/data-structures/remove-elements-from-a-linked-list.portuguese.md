---
id: 587d8251367417b2b2512c63
title: Remove Elements from a Linked List
challengeType: 1
videoUrl: ''
localeTitle: Remover elementos de uma lista vinculada
---

## Description
<section id="description"> O próximo método importante que qualquer implementação de uma lista vinculada precisará é um método <code>remove</code> . Esse método deve pegar o elemento que queremos remover como argumento e, em seguida, pesquisar a lista para localizar e remover o nó que contém esse elemento. Sempre que removemos um nó de uma lista vinculada, é importante que não tornemos o restante da lista acidentalmente órfão. Lembre-se de que a <code>next</code> propriedade de cada nó aponta para o nó que o segue na lista. Se estamos removendo o elemento do meio, digamos, que vai querer se certificar de que temos uma ligação a partir do nó anterior desse elemento <code>next</code> propriedade para o elemento do meio <code>next</code> da propriedade (que é o próximo nó na lista!) Isto pode parecer realmente confuso, então vamos voltar ao exemplo da linha de conga, então temos um bom modelo conceitual. Imagine-se em uma fila de conga, e a pessoa diretamente à sua frente deixa a linha. A pessoa que acabou de sair da linha não tem mais as mãos em ninguém na fila - e você não tem mais as mãos na pessoa que saiu. Você dá um passo à frente e coloca as mãos na próxima pessoa que vê. Se o elemento que desejamos remover é o elemento <code>head</code> , reatribuímos a <code>head</code> ao segundo nó da lista encadeada. </section>

## Instructions
<section id="instructions"> Escreva um método <code>remove</code> que use um elemento e remova-o da lista vinculada. Nota O <code>length</code> da lista deve diminuir em um a cada vez que um elemento é removido da lista vinculada. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Sua classe <code>LinkedList</code> deve ter um método <code>remove</code> .
    testString: 'assert((function(){var test = new LinkedList(); return (typeof test.remove === "function")}()), "Your <code>LinkedList</code> class should have a <code>remove</code> method.");'
  - text: Seu método <code>remove</code> deve reatribuir a <code>head</code> para o segundo nó quando o primeiro nó for removido.
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog"); test.remove("cat"); return test.head().element === "dog"}()), "Your <code>remove</code> method should reassign <code>head</code> to the second node when the first node is removed.");'
  - text: Seu método <code>remove</code> deve diminuir o <code>length</code> da lista vinculada em um para cada nó removido.
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog"); test.remove("cat"); return test.size() === 1})(), "Your <code>remove</code> method should decrease the <code>length</code> of the linked list by one for every node removed.");'
  - text: Seu método <code>remove</code> deve reatribuir a referência do nó anterior do nó removido à <code>next</code> referência do nó removido.
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
