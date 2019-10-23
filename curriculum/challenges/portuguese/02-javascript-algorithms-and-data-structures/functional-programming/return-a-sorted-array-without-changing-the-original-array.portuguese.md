---
id: 587d7da9367417b2b2512b6a
title: Return a Sorted Array Without Changing the Original Array
challengeType: 1
videoUrl: ''
localeTitle: Retornar uma matriz classificada sem alterar a matriz original
---

## Description
<section id="description"> Um efeito colateral do método de <code>sort</code> é que ele altera a ordem dos elementos no array original. Em outras palavras, ele transforma o array no lugar. Uma maneira de evitar isso é primeiro concatenar uma matriz vazia para a que está sendo classificada (lembre-se de que a <code>concat</code> retorna uma nova matriz) e, em seguida, execute o método de <code>sort</code> . </section>

## Instructions
<section id="instructions"> Use o método de <code>sort</code> na função <code>nonMutatingSort</code> para classificar os elementos de uma matriz em ordem crescente. A função deve retornar uma nova matriz e não alterar a variável <code>globalArray</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve usar o método de <code>sort</code> .
    testString: 'assert(code.match(/\.sort/g), "Your code should use the <code>sort</code> method.");'
  - text: Seu código deve usar o método <code>concat</code> .
    testString: 'assert(code.match(/\.concat/g), "Your code should use the <code>concat</code> method.");'
  - text: A variável <code>globalArray</code> não deve ser alterada.
    testString: 'assert(JSON.stringify(globalArray) === JSON.stringify([5, 6, 3, 2, 9]), "The <code>globalArray</code> variable should not change.");'
  - text: '<code>nonMutatingSort(globalArray)</code> deve retornar <code>[2, 3, 5, 6, 9]</code> .'
    testString: 'assert(JSON.stringify(nonMutatingSort(globalArray)) === JSON.stringify([2, 3, 5, 6, 9]), "<code>nonMutatingSort(globalArray)</code> should return <code>[2, 3, 5, 6, 9]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line


  // Add your code above this line
}
nonMutatingSort(globalArray);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
