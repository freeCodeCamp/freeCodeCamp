---
id: 8d5123c8c441eddfaeb5bdef
title: Implement Bubble Sort
challengeType: 1
videoUrl: ''
localeTitle: Implementar o Bubble Sort
---

## Description
<section id="description"> Este é o primeiro de vários desafios de ordenação de algoritmos. Dado um array de itens não ordenados, queremos retornar um array ordenado. Vamos ver várias maneiras diferentes para fazer isso e aprender os pontos positivos e negativos entre essas diferentes abordagens. Embora a maioria das linguagens modernas tenha métodos internos de ordenação para operações como essa, ainda é importante entender algumas das abordagens básicas comuns e aprender como elas podem ser implementadas. Aqui vamos ver o bubble sort. O método de ordenação bubble sort inicia no início de um array não ordenado e &#39;borbulha&#39; valores não ordenados no final, percorrendo o array até que ele seja completamente ordenado. Ele faz isso comparando itens adjacentes e trocando-os se estiverem fora de ordem. O método continua percorrendo o array até que não ocorram swaps, momento em que o array é ordenado. Esse método requer várias iterações por meio do array e, para os casos médios e piores, tem complexidade de tempo quadrática. Embora simples, geralmente é impraticável na maioria das situações. <strong>Instruções:</strong> Escreva uma função <code>bubbleSort</code> que receba um array de inteiros como entrada e retorne um array desses números inteiros na ordem classificada de menor para maior. <strong>Nota:</strong> <br> Estamos chamando essa função 'por trás dos panos'; o array de teste que estamos usando está comentado no editor. Tente logar o <code>array</code> para ver seu algoritmo de ordenação em ação! </section>

## Instruções
<section id="instructions">
</section>

## Testes
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


### Depois do teste
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solução
<section id='solution'>

```js
// solution required
```
</section>
