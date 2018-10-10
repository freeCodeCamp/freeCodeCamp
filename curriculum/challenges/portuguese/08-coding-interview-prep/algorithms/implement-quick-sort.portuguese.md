---
id: 587d825a367417b2b2512c89
title: Implement Quick Sort
challengeType: 1
videoUrl: ''
localeTitle: Implementar classificação rápida
---

## Description
<section id="description"> Aqui, vamos passar para um algoritmo de classificação intermediário: quick sort. A classificação rápida é uma abordagem eficiente e recursiva de divisão e conquista para classificar uma matriz. Nesse método, um valor dinâmico é escolhido no array original. A matriz é então particionada em dois submatrizes de valores menores e maiores que o valor de pivô. Em seguida, combinamos o resultado de chamar recursivamente o algoritmo de ordenação rápida em ambas as sub-matrizes. Isso continua até que o caso base de uma matriz vazia ou de item único seja atingido, o que retornamos. O desenrolar das chamadas recursivas nos devolve o array ordenado. A classificação rápida é um método de classificação muito eficiente, fornecendo, em média, o desempenho <i>O (nlog (n))</i> . Também é relativamente fácil de implementar. Esses atributos o tornam um método de classificação popular e útil. <strong>Instruções:</strong> Escreva uma função <code>quickSort</code> que <code>quickSort</code> uma matriz de números inteiros como entrada e retorne uma matriz desses números inteiros na ordem classificada de menor para maior. Embora a escolha do valor de pivot seja importante, qualquer pivô serve para nossos propósitos aqui. Por simplicidade, o primeiro ou último elemento pode ser usado. <strong>Nota:</strong> <br> Estamos chamando essa função dos bastidores; a matriz de teste que estamos usando é comentada no editor. Tente registrar a <code>array</code> para ver seu algoritmo de classificação em ação! </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>quickSort</code> é uma função.
    testString: 'assert(typeof quickSort == "function", "<code>quickSort</code> is a function.");'
  - text: <code>quickSort</code> retorna uma matriz classificada (pelo menos para o maior).
    testString: 'assert(isSorted(quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])), "<code>quickSort</code> returns a sorted array (least to greatest).");'
  - text: '<code>quickSort</code> retorna uma matriz que é inalterada, exceto por ordem.'
    testString: 'assert.sameMembers(quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]), [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92], "<code>quickSort</code> returns an array that is unchanged except for order.");'
  - text: <code>quickSort</code> não deve usar o método <code>.sort()</code> .
    testString: 'assert.strictEqual(code.search(/\.sort\(/), -1, "<code>quickSort</code> should not use the built-in <code>.sort()</code> method.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function quickSort(array) {
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
