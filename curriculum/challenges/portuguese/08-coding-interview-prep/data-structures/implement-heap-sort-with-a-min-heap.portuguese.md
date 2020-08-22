---
id: 587d825b367417b2b2512c8c
title: Implement Heap Sort with a Min Heap
challengeType: 1
videoUrl: ''
localeTitle: Implementar a ordenação de heap com uma pilha mínima
---

## Description
<section id="description"> Agora que podemos adicionar e remover elementos, vamos ver alguns dos heaps de aplicativos que podem ser usados. Heaps são comumente usados ​​para implementar filas de prioridade porque eles sempre armazenam um item de maior ou menor valor na primeira posição. Além disso, eles são usados ​​para implementar um algoritmo de classificação chamado heap sort. Vamos ver como fazer isso aqui. A classificação de heap usa um heap mínimo, o contrário de um heap máximo. Um heap mínimo sempre armazena o elemento de menor valor na posição raiz. Ordenação de heap funciona tomando uma matriz não classificada, adicionando cada item na matriz em um heap mínimo e, em seguida, extrair cada item fora do heap min em uma nova matriz. A estrutura de heap min garante que o novo array conterá os itens originais no mínimo para o maior pedido. Este é um dos algoritmos de ordenação mais eficientes, com desempenho médio e pior de O (nlog (n)). Instruções: Vamos implementar a classificação de heap com um heap mínimo. Sinta-se à vontade para adaptar seu código de heap máximo aqui. Crie um objeto MinHeap com métodos de inserção, remoção e classificação. O método de classificação deve retornar uma matriz de todos os elementos no heap min classificados do menor para o maior. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: A estrutura de dados MinHeap existe.
    testString: 'assert((function() { var test = false; if (typeof MinHeap !== "undefined") { test = new MinHeap() }; return (typeof test == "object")})(), "The MinHeap data structure exists.");'
  - text: MinHeap tem um método chamado insert.
    testString: 'assert((function() { var test = false; if (typeof MinHeap !== "undefined") { test = new MinHeap() } else { return false; }; return (typeof test.insert == "function")})(), "MinHeap has a method called insert.");'
  - text: MinHeap tem um método chamado remover.
    testString: 'assert((function() { var test = false; if (typeof MinHeap !== "undefined") { test = new MinHeap() } else { return false; }; return (typeof test.remove == "function")})(), "MinHeap has a method called remove.");'
  - text: MinHeap tem um método chamado sort.
    testString: 'assert((function() { var test = false; if (typeof MinHeap !== "undefined") { test = new MinHeap() } else { return false; }; return (typeof test.sort == "function")})(), "MinHeap has a method called sort.");'
  - text: O método de classificação retorna uma matriz contendo todos os itens adicionados ao heap min na ordem classificada.
    testString: 'assert((function() { var test = false; if (typeof MinHeap !== "undefined") { test = new MinHeap() } else { return false; }; test.insert(3); test.insert(12); test.insert(5); test.insert(10); test.insert(1); test.insert(27); test.insert(42); test.insert(57); test.insert(5); var result = test.sort(); return (isSorted(result)); })(), "The sort method returns an array containing all items added to the min heap in sorted order.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// check if array is sorted
function isSorted(a){
  for(let i = 0; i < a.length - 1; i++)
    if(a[i] > a[i + 1])
      return false;
  return true;
}
// generate a randomly filled array
var array = new Array();
(function createArray(size = 5) {
  array.push(+(Math.random() * 100).toFixed(0));
  return (size > 1) ? createArray(size - 1) : undefined;
})(25);
var MinHeap = function() {
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
