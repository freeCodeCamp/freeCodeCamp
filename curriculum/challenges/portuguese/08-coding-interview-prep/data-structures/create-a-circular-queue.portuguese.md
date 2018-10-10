---
id: 587d8255367417b2b2512c75
title: Create a Circular Queue
challengeType: 1
videoUrl: ''
localeTitle: Criar uma fila circular
---

## Description
<section id="description"> Neste desafio você estará criando uma Fila Circular. Uma fila circular é basicamente uma fila que grava no final de uma coleção e começa a escrever no próprio início da coleção. Este é o tipo de estrutura de dados tem algumas aplicações úteis em determinadas situações. Por exemplo, uma fila circular pode ser usada para streaming de mídia. Quando a fila está cheia, os novos dados de mídia simplesmente começam a substituir os dados antigos. Uma boa maneira de ilustrar esse conceito é com uma matriz: <blockquote> [1, 2, 3, 4, 5] <br> ^ Leia @ 0 <br> ^ Escreva @ 0 </blockquote> Aqui, a leitura e a gravação estão na posição <code>0</code> . Agora a fila recebe 3 novos registros <code>a</code> , <code>b</code> e <code>c</code> . Nossa fila agora parece com: <blockquote> [a, b, c, 4, 5] <br> ^ Leia @ 0 <br> ^ Escreva @ 3 </blockquote> Como o cabeçote de leitura lê, ele pode remover valores ou mantê-los: <blockquote> [nulo, nulo, nulo, 4, 5] <br> ^ Leia @ 3 <br> ^ Escreva @ 3 </blockquote> Quando a gravação chega ao final da matriz, volta ao início: <blockquote> [f, null, null, d, e] <br> ^ Leia @ 3 <br> ^ Escreva @ 1 </blockquote> Essa abordagem requer uma quantidade constante de memória, mas permite que arquivos de tamanho muito maior sejam processados. Instruções: Neste desafio, vamos implementar uma fila circular. A fila circular deve fornecer métodos de <code>enqueue</code> e de <code>dequeue</code> que permitem ler e gravar na fila. A classe em si também deve aceitar um número inteiro que você possa usar para especificar o tamanho da fila ao criá-la. Nós escrevemos a versão inicial desta classe para você no editor de código. Quando você enfileira itens na fila, o ponteiro de gravação deve avançar e retornar ao início assim que chegar ao final da fila. Da mesma forma, o ponteiro de leitura deve avançar conforme você desencaixa itens. O ponteiro de escrita não deve passar pelo ponteiro de leitura (nossa classe não permitirá que você sobrescreva dados que você ainda não tenha lido) e o ponteiro de leitura não deve ser capaz de avançar dados passados ​​que você escreveu. Além disso, o método de <code>enqueue</code> deve retornar o item que você enfileirou se tiver êxito e, caso contrário, retornará <code>null</code> . Da mesma forma, quando você desenfileirar um item, ele deve ser retornado e, se não for possível, você deve retornar <code>null</code> . </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O método de <code>enqueue</code> adiciona itens à fila circular.
    testString: 'assert((function(){ var test = new CircularQueue(3); test.enqueue(17); test.enqueue(32); test.enqueue(591); var print = test.print(); return print[0] === 17 && print[1] === 32 && print[2] === 591; })(), "The <code>enqueue</code> method adds items to the circular queue.");'
  - text: Você não pode enfileirar itens após o ponteiro de leitura.
    testString: 'assert((function(){ var test = new CircularQueue(3); test.enqueue(17); test.enqueue(32); test.enqueue(591); test.enqueue(13); test.enqueue(25); test.enqueue(59); var print = test.print(); return print[0] === 17 && print[1] === 32 && print[2] === 591; })(), "You cannot enqueue items past the read pointer.");'
  - text: O método de <code>dequeue</code> retira itens da fila.
    testString: 'assert((function(){ var test = new CircularQueue(3); test.enqueue(17); test.enqueue(32); test.enqueue(591); return test.dequeue() === 17 && test.dequeue() === 32 && test.dequeue() === 591; })(), "The <code>dequeue</code> method dequeues items from the queue.");'
  - text: 'Depois que um item é desenfileirado, sua posição na fila deve ser redefinida como <code>null</code> .'
    testString: 'assert((function(){ var test = new CircularQueue(3); test.enqueue(17); test.enqueue(32); test.enqueue(672); test.dequeue(); test.dequeue(); var print = test.print(); return print[0] === null && print[1] === null && print[2] === 672; })(), "After an item is dequeued its position in the queue should be reset to <code>null</code>.");'
  - text: A tentativa de desenfileirar após o ponteiro de gravação retorna <code>null</code> e não avança o ponteiro de gravação.
    testString: 'assert((function(){ var test = new CircularQueue(3); test.enqueue(17); test.enqueue(32); test.enqueue(591); return test.dequeue() === 17 && test.dequeue() === 32 && test.dequeue() === 591 && test.dequeue() === null && test.dequeue() === null && test.dequeue() === null && test.dequeue() === null && test.enqueue(100) === 100 && test.dequeue() === 100; })(), "Trying to dequeue past the write pointer returns <code>null</code> and does not advance the write pointer.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
class CircularQueue {
   constructor(size) {

     this.queue = [];
     this.read = 0;
     this.write = 0;
     this.max = size - 1;

     while (size > 0) {
        this.queue.push(null);
        size--;
     }

   }

   print() {
     return this.queue;
   }


   enqueue(item) {
    // Only change code below this line

    // Only change code above this line
   }

   dequeue() {
    // Only change code below this line

    // Only change code above this line
   }
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
