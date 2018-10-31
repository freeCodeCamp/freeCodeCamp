---
id: 8d5123c8c441eddfaeb5bdef
title: Implement Bubble Sort
challengeType: 1
videoUrl: ''
localeTitle: Implementar o Bubble Sort
---

## Description
<section id="description"> Este é o primeiro de vários desafios na classificação de algoritmos. Dada uma matriz de itens não classificados, queremos poder retornar uma matriz classificada. Vamos ver vários métodos diferentes para fazer isso e aprender algumas compensações entre essas diferentes abordagens. Embora a maioria das linguagens modernas tenha métodos internos de classificação para operações como essa, ainda é importante entender algumas das abordagens básicas comuns e aprender como elas podem ser implementadas. Aqui vamos ver o tipo de bolha. O método de classificação de bolhas inicia no início de uma matriz não classificada e &#39;borbulha&#39; valores não classificados no final, percorrendo a matriz até que ela seja completamente classificada. Ele faz isso comparando itens adjacentes e trocando-os se estiverem fora de ordem. O método continua percorrendo o array até que não ocorram swaps, momento em que o array é classificado. Esse método requer várias iterações por meio do array e, para os casos médios e piores, tem complexidade de tempo quadrática. Embora simples, geralmente é impraticável na maioria das situações. <strong>Instruções:</strong> Escreva uma função <code>bubbleSort</code> que <code>bubbleSort</code> uma matriz de inteiros como entrada e retorne uma matriz desses números inteiros na ordem classificada de menor para maior. <strong>Nota:</strong> <br> Estamos chamando essa função dos bastidores; a matriz de teste que estamos usando é comentada no editor. Tente registrar a <code>array</code> para ver seu algoritmo de classificação em ação! </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>bubbleSort</code> é uma função.
    testString: 'assert(typeof bubbleSort == "function", "<code>bubbleSort</code> is a function.");'
  - text: <code>bubbleSort</code> retorna uma matriz classificada (pelo menos até o maior).
    testString: 'assert(isSorted(bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])), "<code>bubbleSort</code> returns a sorted array (least to greatest).");'
  - text: '<code>bubbleSort</code> retorna uma matriz que é inalterada, exceto por ordem.'
    testString: 'assert.sameMembers(bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]), [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92], "<code>bubbleSort</code> returns an array that is unchanged except for order.");'
  - text: <code>bubbleSort</code> não deve usar o método <code>.sort()</code> .
    testString: 'assert.strictEqual(code.search(/\.sort\(/), -1, "<code>bubbleSort</code> should not use the built-in <code>.sort()</code> method.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function bubbleSort(array) {
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
