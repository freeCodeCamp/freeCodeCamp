---
id: 587d8255367417b2b2512c74
title: Create a Priority Queue Class
challengeType: 1
videoUrl: ''
localeTitle: Criar uma classe de fila de prioridade
---

## Description
<section id="description"> Neste desafio você estará criando uma Fila de Prioridades. Uma Fila Prioritária é um tipo especial de Fila no qual os itens podem ter informações adicionais que especificam sua prioridade. Isso poderia ser simplesmente representado com um inteiro. A prioridade do item substituirá a ordem de veiculação para determinar se os itens da sequência são retirados da fila. Se um item com uma prioridade mais alta for enfileirado após os itens com prioridade mais baixa, o item com prioridade mais alta será retirado antes de todos os outros. Por exemplo, vamos imaginar que temos uma fila de prioridades com três itens: <code>[[&#39;kitten&#39;, 2], [&#39;dog&#39;, 2], [&#39;rabbit&#39;, 2]]</code> Aqui o segundo valor (um inteiro) representa a prioridade do item. . Se enfileirarmos <code>[&#39;human&#39;, 1]</code> com uma prioridade de <code>1</code> (assumindo que prioridades mais baixas recebem precedência), ele seria o primeiro item a ser retirado. A coleção seria assim: <code>[[&#39;human&#39;, 1], [&#39;kitten&#39;, 2], [&#39;dog&#39;, 2], [&#39;rabbit&#39;, 2]]</code> . Nós começamos a escrever um <code>PriorityQueue</code> no editor de código. Você precisará adicionar um método de <code>enqueue</code> para adicionar itens com prioridade, um método de <code>dequeue</code> para remover itens, um método de <code>size</code> para retornar o número de itens na fila, um método de <code>front</code> para retornar o elemento na frente da fila e finalmente, um método <code>isEmpty</code> que retornará <code>true</code> se a fila estiver vazia ou <code>false</code> se não estiver. O <code>enqueue</code> deve aceitar itens com o formato mostrado acima ( <code>[&#39;human&#39;, 1]</code> ), em que <code>1</code> representa a prioridade. O <code>dequeue</code> deve retornar apenas o item atual, não sua prioridade. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Sua classe <code>Queue</code> deve ter um método de <code>enqueue</code> .
    testString: 'assert((function(){var test = new PriorityQueue();  return (typeof test.enqueue === "function")}()), "Your <code>Queue</code> class should have a <code>enqueue</code> method.");'
  - text: Sua classe <code>Queue</code> deve ter um método de <code>Queue</code> <code>dequeue</code> .
    testString: 'assert((function(){var test = new PriorityQueue();  return (typeof test.dequeue === "function")}()), "Your <code>Queue</code> class should have a <code>dequeue</code> method.");'
  - text: Sua classe <code>Queue</code> deve ter um método de <code>size</code> .
    testString: 'assert((function(){var test = new PriorityQueue();  return (typeof test.size === "function")}()), "Your <code>Queue</code> class should have a <code>size</code> method.");'
  - text: Sua classe <code>Queue</code> deve ter um método <code>isEmpty</code> .
    testString: 'assert((function(){var test = new PriorityQueue();  return (typeof test.isEmpty === "function")}()), "Your <code>Queue</code> class should have an <code>isEmpty</code> method.");'
  - text: 'Seu PriorityQueue deve controlar corretamente o número atual de itens usando o método de <code>size</code> , à medida que os itens são enfileirados e retirados.'
    testString: 'assert((function(){var test = new PriorityQueue(); test.enqueue(["David Brown", 2]); test.enqueue(["Jon Snow", 1]); var size1 = test.size(); test.dequeue(); var size2 = test.size(); test.enqueue(["A", 3]); test.enqueue(["B", 3]); test.enqueue(["C", 3]); return (size1 === 2 && size2 === 1 && test.size() === 4)}()), "Your PriorityQueue should correctly keep track of the current number of items using the <code>size</code> method as items are enqueued and dequeued.");'
  - text: O método <code>isEmpty</code> deve retornar <code>true</code> quando a fila estiver vazia.
    testString: 'assert((function(){var test = new PriorityQueue(); test.enqueue(["A", 1]); test.enqueue(["B", 1]); test.dequeue(); var first = test.isEmpty(); test.dequeue(); return (!first && test.isEmpty()); }()), "The <code>isEmpty</code> method should return <code>true</code> when the queue is empty.");'
  - text: 'A fila de prioridade deve retornar itens com prioridade mais alta antes dos itens com prioridade mais baixa e retornar os itens na ordem de primeiro a sair, caso contrário.'
    testString: 'assert((function(){var test = new PriorityQueue(); test.enqueue(["A", 5]); test.enqueue(["B", 5]); test.enqueue(["C", 5]); test.enqueue(["D", 3]); test.enqueue(["E", 1]); test.enqueue(["F", 7]); var result = []; result.push(test.dequeue()); result.push(test.dequeue()); result.push(test.dequeue()); result.push(test.dequeue()); result.push(test.dequeue()); result.push(test.dequeue()); return result.join("") === "EDABCF";}()), "The priority queue should return items with a higher priority before items with a lower priority and return items in first-in-first-out order otherwise.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function PriorityQueue () {
    this.collection = [];
    this.printCollection = function() {
      console.log(this.collection);
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
