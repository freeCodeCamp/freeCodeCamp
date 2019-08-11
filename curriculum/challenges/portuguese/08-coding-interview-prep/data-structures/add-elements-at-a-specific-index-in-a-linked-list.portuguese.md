---
id: 587d8252367417b2b2512c67
title: Add Elements at a Specific Index in a Linked List
challengeType: 1
videoUrl: ''
localeTitle: Adicionar elementos em um índice específico em uma lista vinculada
---

## Description
<section id="description"> Vamos criar um método addAt (index, element) que adiciona um elemento em um determinado índice. Assim como removemos elementos em um determinado índice, precisamos acompanhar o currentIndex à medida que percorremos a lista vinculada. Quando o currentIndex corresponde ao índice fornecido, precisaríamos reatribuir a próxima propriedade do nó anterior para fazer referência ao novo nó adicionado. E o novo nó deve referenciar o próximo nó no currentIndex. Voltando ao exemplo da linha de conga, uma nova pessoa quer entrar na linha, mas ele quer se juntar ao meio. Você está no meio da linha, então tire as mãos da pessoa à sua frente. A nova pessoa se aproxima e coloca as mãos sobre a pessoa que você teve uma vez, e agora você tem as mãos na nova pessoa. Instruções Crie um método addAt (index, element) que adiciona um elemento em um determinado índice. Retornar false se um elemento não puder ser adicionado. Nota Lembre-se de verificar se o índice fornecido é negativo ou maior que o comprimento da lista vinculada. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu método <code>addAt</code> deve reatribuir a <code>head</code> para o novo nó quando o índice fornecido for 0.
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog"); test.addAt(0,"cat"); return test.head().element === "cat"}()), "Your <code>addAt</code> method should reassign <code>head</code> to the new node when the given index is 0.");'
  - text: Seu método <code>addAt</code> deve aumentar o tamanho da lista vinculada em um para cada novo nó adicionado à lista vinculada.
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog"); test.addAt(0,"cat"); return test.size() === 3}()), "Your <code>addAt</code> method should increase the length of the linked list by one for each new node added to the linked list.");'
  - text: Seu método <code>addAt</code> deve retornar <code>false</code> se um nó não puder ser adicionado.
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
