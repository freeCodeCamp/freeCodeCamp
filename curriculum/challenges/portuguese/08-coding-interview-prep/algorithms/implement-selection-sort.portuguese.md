---
id: 587d8259367417b2b2512c85
title: Implement Selection Sort
challengeType: 1
videoUrl: ''
localeTitle: Implementar o tipo de seleção
---

## Description
<section id="description"> Aqui vamos implementar a classificação de seleção. A classificação de seleção funciona selecionando o valor mínimo em uma lista e trocando-o pelo primeiro valor da lista. Em seguida, ele inicia na segunda posição, seleciona o menor valor na lista restante e o troca com o segundo elemento. Ele continua percorrendo a lista e trocando elementos até atingir o final da lista. Agora a lista está classificada. A classificação de seleção tem complexidade de tempo quadrática em todos os casos. <strong>Instruções</strong> : Escreva uma <code>selectionSort</code> que leva uma matriz de inteiros como entrada e retorna uma matriz desses números inteiros na ordem classificada de menor para maior. <strong>Nota:</strong> <br> Estamos chamando essa função dos bastidores; a matriz de teste que estamos usando é comentada no editor. Tente registrar a <code>array</code> para ver seu algoritmo de classificação em ação! </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>selectionSort</code> é uma função.
    testString: 'assert(typeof selectionSort == "function", "<code>selectionSort</code> is a function.");'
  - text: <code>selectionSort</code> retorna um array ordenado (menor para maior).
    testString: 'assert(isSorted(selectionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])), "<code>selectionSort</code> returns a sorted array (least to greatest).");'
  - text: '<code>selectionSort</code> retorna uma matriz que é inalterada, exceto por ordem.'
    testString: 'assert.sameMembers(selectionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]), [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92], "<code>selectionSort</code> returns an array that is unchanged except for order.");'
  - text: <code>selectionSort</code> não deve usar o método <code>.sort()</code> .
    testString: 'assert.strictEqual(code.search(/\.sort\(/), -1, "<code>selectionSort</code> should not use the built-in <code>.sort()</code> method.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function selectionSort(array) {
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
