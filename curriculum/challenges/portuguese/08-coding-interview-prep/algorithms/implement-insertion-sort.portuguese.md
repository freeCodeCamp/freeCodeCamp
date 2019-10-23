---
id: 587d8259367417b2b2512c86
title: Implement Insertion Sort
challengeType: 1
videoUrl: ''
localeTitle: Implemente a ordem de inserção
---

## Descrição
<section id="description"> O próximo método de classificação que analisaremos será o tipo de inserção. Esse método funciona criando um array ordenado no início da lista. Começa o array ordenado com o primeiro elemento. Em seguida, ele inspeciona o próximo elemento e o troca de volta para a matriz classificada até que esteja na posição classificada. Ele continua percorrendo a lista e trocando novos itens para trás na porção classificada até atingir o final. Esse algoritmo possui complexidade de tempo quadrático na média e nos piores casos. <strong>Instruções:</strong> Escreva uma <code>insertionSort</code> que recebe uma matriz de números inteiros como entrada e retorna uma matriz desses inteiros na ordem classificada de menor para maior. <strong>Nota:</strong> <br> Estamos chamando essa função dos bastidores; a matriz de teste que estamos usando é comentada no editor. Tente registrar a <code>array</code> para ver seu algoritmo de classificação em ação! </section>

## Instruções
<section id="instructions">
</section>

## Testes
<section id='tests'>

```yml
tests:
  - text: <code>insertionSort</code> é uma função.
    testString: 'assert(typeof insertionSort == "function", "<code>insertionSort</code> is a function.");'
  - text: <code>insertionSort</code> retorna uma matriz classificada (pelo menos até o maior).
    testString: 'assert(isSorted(insertionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])), "<code>insertionSort</code> returns a sorted array (least to greatest).");'
  - text: '<code>insertionSort</code> retorna uma matriz que é inalterada, exceto por ordem.'
    testString: 'assert.sameMembers(insertionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]), [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92], "<code>insertionSort</code> returns an array that is unchanged except for order.");'
  - text: <code>insertionSort</code> não deve usar o método <code>.sort()</code> .
    testString: 'assert.strictEqual(code.search(/\.sort\(/), -1, "<code>insertionSort</code> should not use the built-in <code>.sort()</code> method.");'

```

</section>

## Semente do desafio
<section id='challengeSeed'>

<div id='js-seed'>

```js
function insertionSort(array) {
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
