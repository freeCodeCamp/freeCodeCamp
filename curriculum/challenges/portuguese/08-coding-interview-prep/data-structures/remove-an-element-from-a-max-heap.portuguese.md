---
id: 587d825b367417b2b2512c8b
title: Remove an Element from a Max Heap
challengeType: 1
videoUrl: ''
localeTitle: Remover um elemento de um heap máximo
---

## Description
<section id="description"> Agora que podemos adicionar elementos à nossa pilha, vamos ver como podemos remover elementos. A remoção e a inserção de elementos requerem lógica semelhante. Em um heap máximo, você geralmente deseja remover o maior valor, portanto, isso envolve simplesmente extraí-lo da raiz de nossa árvore. Isso vai quebrar a propriedade heap da nossa árvore, então devemos restabelecê-la de alguma forma. Normalmente, para um heap máximo, isso é feito da seguinte maneira: Mova o último elemento do heap para a posição raiz. Se um dos filhos da raiz for maior que ele, troque a raiz pelo filho de maior valor. Continue trocando até que o pai seja maior que os dois filhos ou você alcance o último nível na árvore. Instruções: Adicione um método ao nosso heap máximo chamado remove. Esse método deve retornar o maior valor que foi adicionado ao nosso heap máximo e removê-lo do heap. Ele também deve reordenar o heap para que a propriedade heap seja mantida. Depois de remover um elemento, o próximo elemento remanescente no heap deve se tornar a raiz. Adicione seu método de inserção novamente aqui também. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: A estrutura de dados MaxHeap existe.
    testString: 'assert((function() { var test = false; if (typeof MaxHeap !== "undefined") { test = new MaxHeap() }; return (typeof test == "object")})(), "The MaxHeap data structure exists.");'
  - text: MaxHeap tem um método chamado print.
    testString: 'assert((function() { var test = false; if (typeof MaxHeap !== "undefined") { test = new MaxHeap() } else { return false; }; return (typeof test.print == "function")})(), "MaxHeap has a method called print.");'
  - text: MaxHeap tem um método chamado insert.
    testString: 'assert((function() { var test = false; if (typeof MaxHeap !== "undefined") { test = new MaxHeap() } else { return false; }; return (typeof test.insert == "function")})(), "MaxHeap has a method called insert.");'
  - text: MaxHeap tem um método chamado remover.
    testString: 'assert((function() { var test = false; if (typeof MaxHeap !== "undefined") { test = new MaxHeap() } else { return false; }; return (typeof test.remove == "function")})(), "MaxHeap has a method called remove.");'
  - text: 'O método remove remove o maior elemento do heap máximo, mantendo a propriedade heap máximo.'
    testString: 'assert((function() { var test = false; if (typeof MaxHeap !== "undefined") { test = new MaxHeap() } else { return false; }; test.insert(30); test.insert(300); test.insert(500); test.insert(10); let result = []; result.push(test.remove()); result.push(test.remove()); result.push(test.remove()); result.push(test.remove());  return (result.join("") == "5003003010") })(), "The remove method removes the greatest element from the max heap while maintaining the max heap property.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var MaxHeap = function() {
  // change code below this line
  // change code above this line
};

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
