---
id: 587d825a367417b2b2512c89
title: Implement Quick Sort
challengeType: 1
videoUrl: ''
localeTitle: Implementar quick sort
---

## Description
<section id="description"> Aqui, vamos passar para um algoritmo de ordenação intermediário: quick sort. Quick sort é uma abordagem eficiente e recursiva de divisão e conquista para ordenar um array. Nesse método, um valor dinâmico é escolhido no array original. O array é então particionado em dois subarrays de valores menores e maiores que o valor de pivô. Em seguida, combinamos o resultado de chamar recursivamente o algoritmo de ordenação rápida em ambos os sub-arrays. Isso acontece até que o caso base de um array vazio ou de item único seja alcançado, e então é retornado. O desenrolar das chamadas recursivas nos devolve o array ordenado. O quick sort é um método de ordenação muito eficiente, fornecendo, em média, o desempenho <i>O (nlog (n))</i> . Também é relativamente fácil de implementar. Esses atributos o tornam um método de ordenação popular e útil. <strong>Instruções:</strong> Escreva uma função <code>quickSort</code> que recebe um array de números inteiros como entrada e retorne um array desses números inteiros ordenados de menor para maior. Embora a escolha do valor de pivô seja importante, qualquer pivô serve para nossos propósitos aqui. Por simplicidade, o primeiro ou último elemento pode ser usado. <strong>Nota:</strong> <br> Estamos chamando essa função 'por trás dos panos'; o array de teste que estamos usando está comentado no editor. Tente logar o <code>array</code> para ver seu algoritmo de ordenação em ação! </section>

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
