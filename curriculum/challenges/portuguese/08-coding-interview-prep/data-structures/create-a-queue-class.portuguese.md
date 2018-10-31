---
id: 587d8250367417b2b2512c60
title: Create a Queue Class
challengeType: 1
videoUrl: ''
localeTitle: Crie uma classe de fila
---

## Description
<section id="description"> Como pilhas, as filas são uma coleção de elementos. Mas, ao contrário das pilhas, as filas seguem o princípio FIFO (First-In First-Out). Os elementos adicionados a uma fila são colocados na cauda ou no final da fila, e somente o elemento na frente da fila pode ser removido. Poderíamos usar uma matriz para representar uma fila, mas, assim como as pilhas, queremos limitar a quantidade de controle que temos sobre nossas filas. Os dois métodos principais de uma classe de fila são o enfileiramento e o método de desenfileiramento. O método de enfileiramento envia um elemento para o final da fila, e o método de desenfileiramento remove e retorna o elemento na frente da fila. Outros métodos úteis são os métodos front, size e isEmpty. Instruções Escreva um método de enfileiramento que empurre um elemento para o final da fila, um método de desenfileiramento que remova e retorne o elemento frontal, um método frontal que nos permita ver o elemento frontal, um método de tamanho que mostre o comprimento e um método isEmpty. para verificar se a fila está vazia. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Sua classe <code>Queue</code> deve ter um método de <code>enqueue</code> .
    testString: 'assert((function(){var test = new Queue();  return (typeof test.enqueue === "function")}()), "Your <code>Queue</code> class should have a <code>enqueue</code> method.");'
  - text: Sua classe <code>Queue</code> deve ter um método de <code>Queue</code> <code>dequeue</code> .
    testString: 'assert((function(){var test = new Queue();  return (typeof test.dequeue === "function")}()), "Your <code>Queue</code> class should have a <code>dequeue</code> method.");'
  - text: Sua classe <code>Queue</code> deve ter um método <code>front</code> .
    testString: 'assert((function(){var test = new Queue();  return (typeof test.front === "function")}()), "Your <code>Queue</code> class should have a <code>front</code> method.");'
  - text: Sua classe <code>Queue</code> deve ter um método de <code>size</code> .
    testString: 'assert((function(){var test = new Queue();  return (typeof test.size === "function")}()), "Your <code>Queue</code> class should have a <code>size</code> method.");'
  - text: Sua classe <code>Queue</code> deve ter um método <code>isEmpty</code> .
    testString: 'assert((function(){var test = new Queue();  return (typeof test.isEmpty === "function")}()), "Your <code>Queue</code> class should have an <code>isEmpty</code> method.");'
  - text: O método de <code>dequeue</code> deve remover e retornar o elemento frontal da fila
    testString: 'assert((function(){var test = new Queue();  test.enqueue("Smith"); return (test.dequeue() === "Smith")}()), "The <code>dequeue</code> method should remove and return the front element of the queue");'
  - text: O método <code>front</code> deve retornar o valor do elemento frontal da fila
    testString: 'assert((function(){var test = new Queue();  test.enqueue("Smith"); test.enqueue("John"); return (test.front() === "Smith")}()), "The <code>front</code> method should return value of the front element of the queue");'
  - text: O método de <code>size</code> deve retornar o comprimento da fila
    testString: 'assert((function(){var test = new Queue();  test.enqueue("Smith"); return (test.size() === 1)}()), "The <code>size</code> method should return the length of the queue");'
  - text: O método <code>isEmpty</code> deve retornar <code>false</code> se houver elementos na fila
    testString: 'assert((function(){var test = new Queue();  test.enqueue("Smith"); return !(test.isEmpty())}()), "The <code>isEmpty</code> method should return <code>false</code> if there are elements in the queue");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Queue () {
    var collection = [];
    this.print = function() {
        console.log(collection);
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
