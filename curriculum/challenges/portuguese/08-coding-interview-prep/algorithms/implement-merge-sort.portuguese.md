---
id: 587d825c367417b2b2512c8f
title: Implement Merge Sort
challengeType: 1
videoUrl: ''
localeTitle: Implementar o Merge Sort
---

## Description
<section id="description"> Outro algoritmo de classificação intermediário que é muito comum é o merge sort. Como a ordenação rápida, a ordenação por mesclagem também usa uma metodologia recursiva de divisão e conquista para classificar uma matriz. Ele tira proveito do fato de que é relativamente fácil classificar dois arrays desde que cada um seja classificado em primeiro lugar. Mas começaremos com apenas um array como entrada, então como chegaremos a dois arrays ordenados a partir disso? Bem, podemos dividir recursivamente a entrada original em dois até chegarmos ao caso base de uma matriz com um item. Uma matriz de item único é naturalmente classificada, então podemos começar a combinar. Essa combinação irá desanuviar as chamadas recursivas que dividem o array original, produzindo finalmente uma matriz ordenada final de todos os elementos. Os passos da ordenação por mesclagem, então, são: <strong>1)</strong> Divide recursivamente a matriz de entrada pela metade até que uma sub-matriz com apenas um elemento seja produzida. <strong>2)</strong> Mesclar cada sub-array ordenado para produzir o array ordenado final. Merge sort é um método de classificação eficiente, com complexidade de tempo de <i>O (nlog (n))</i> . Esse algoritmo é popular porque tem desempenho e é relativamente fácil de implementar. Como um aparte, este será o último algoritmo de ordenação que cobrimos aqui. Entretanto, mais tarde, na seção sobre estruturas de dados em árvore, descreveremos o heap sort, outro método eficiente de classificação que requer um heap binário em sua implementação. <strong>Instruções:</strong> Escreva uma função <code>mergeSort</code> que <code>mergeSort</code> uma matriz de inteiros como entrada e retorne uma matriz desses números inteiros na ordem classificada de menor para maior. Uma boa maneira de implementar isso é escrever uma função, por exemplo, <code>merge</code> , que é responsável por mesclar duas matrizes ordenadas, e outra função, por exemplo <code>mergeSort</code> , que é responsável pela recursão que produz matrizes de item único para alimentar a mesclagem. Boa sorte! <strong>Nota:</strong> <br> Estamos chamando essa função dos bastidores; a matriz de teste que estamos usando é comentada no editor. Tente registrar a <code>array</code> para ver seu algoritmo de classificação em ação! </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>mergeSort</code> é uma função.
    testString: 'assert(typeof mergeSort == "function", "<code>mergeSort</code> is a function.");'
  - text: <code>mergeSort</code> retorna uma matriz classificada (pelo menos até o maior).
    testString: 'assert(isSorted(mergeSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])), "<code>mergeSort</code> returns a sorted array (least to greatest).");'
  - text: '<code>mergeSort</code> retorna uma matriz que é inalterada, exceto por ordem.'
    testString: 'assert.sameMembers(mergeSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]), [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92], "<code>mergeSort</code> returns an array that is unchanged except for order.");'
  - text: <code>mergeSort</code> não deve usar o método <code>.sort()</code> .
    testString: 'assert.strictEqual(code.search(/\.sort\(/), -1, "<code>mergeSort</code> should not use the built-in <code>.sort()</code> method.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function mergeSort(array) {
  // change code below this line

  // change code above this line
  return array;
}

// test array:
// [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
