---
id: 587d8251367417b2b2512c62
title: Create a Linked List Class
challengeType: 1
videoUrl: ''
localeTitle: Criar uma classe de lista vinculada
---

## Description
<section id="description"> Vamos criar uma classe de <code>linked list</code> . Cada lista encadeada deve começar com algumas propriedades básicas: uma <code>head</code> (o primeiro item na sua lista) e uma <code>length</code> (número de itens na sua lista). Às vezes, você verá implementações de listas vinculadas que incorporam uma <code>tail</code> para o último elemento da lista, mas, por enquanto, vamos continuar com essas duas. Sempre que adicionamos um elemento à lista vinculada, nossa propriedade <code>length</code> deve ser incrementada em um. Nós queremos ter uma maneira de adicionar itens à nossa lista vinculada, então o primeiro método que vamos criar é o método <code>add</code> . Se a nossa lista estiver vazia, adicionar um elemento à nossa lista encadeada é bastante simples: apenas envolvemos esse elemento em uma classe <code>Node</code> e atribuímos esse nó à <code>head</code> de nossa lista encadeada. Mas e se a nossa lista já tiver um ou mais membros? Como adicionamos um elemento à lista? Lembre-se de que cada nó em uma lista vinculada possui uma propriedade <code>next</code> . Para adicionar um nó à lista, encontre o último nó na lista e aponte a <code>next</code> propriedade do último nó em nosso novo nó. (Dica: você sabe que chegou ao final de uma lista vinculada quando a <code>next</code> propriedade de um nó é <code>null</code> .) </section>

## Instructions
<section id="instructions"> Escreva um método add que atribua o primeiro nó que você envia para a lista vinculada ao <code>head</code> ; depois disso, sempre que adicionar um nó, cada nó deve ser referenciado pela <code>next</code> propriedade do nó anterior. Nota A <code>length</code> da sua lista deve aumentar em um sempre que um elemento é adicionado à lista vinculada. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Sua classe <code>LinkedList</code> deve ter um método <code>add</code> .
    testString: 'assert((function(){var test = new LinkedList(); return (typeof test.add === "function")}()), "Your <code>LinkedList</code> class should have a <code>add</code> method.");'
  - text: Sua classe <code>LinkedList</code> deve atribuir <code>head</code> ao primeiro nó adicionado.
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); return test.head().element === "cat"}()), "Your <code>LinkedList</code> class should assign <code>head</code> to the first node added.");'
  - text: O <code>node</code> anterior na sua classe <code>LinkedList</code> deve ter referência ao nó mais novo criado.
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog"); return test.head().next.element === "dog"}()), "The previous <code>node</code> in your <code>LinkedList</code> class should have reference to the newest node created.");'
  - text: O <code>size</code> da sua classe <code>LinkedList</code> deve ser igual à quantidade de nós na lista vinculada.
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
