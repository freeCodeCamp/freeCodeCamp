---
id: 587d8259367417b2b2512c85
title: Implement Selection Sort
challengeType: 1
videoUrl: ''
localeTitle: Implementar ordenação por seleção
---

## Description
<section id="description"> Aqui vamos implementar a ordenação por seleção. A ordenação por seleção funciona selecionando o valor mínimo em uma lista e trocando-o pelo primeiro valor da lista. Em seguida, ele inicia na segunda posição, seleciona o menor valor na lista restante e o troca com o segundo elemento. Ele continua percorrendo a lista e trocando elementos até atingir o final da lista. Agora a lista está ordenada. A ordenação por seleção tem complexidade de tempo quadrática em todos os casos. <strong>Instruções</strong> : Escreva uma função <code>selectionSort</code> que recebe um array de inteiros como entrada e retorna um array desses números inteiros ordenados do menor para o maior. <strong>Nota:</strong> <br> Estamos chamando essa função 'por trás dos panos'; o array de teste que estamos usando está comentado no editor. Tente logar o <code>array</code> para ver seu algoritmo de ordenação em ação! </section>

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
  // escreva código abaixo desta linha

  // escreva código acima desta linha
  return array;
}

// array de teste:
// [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]

```

</div>


### After test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solução requerida
```
</section>
