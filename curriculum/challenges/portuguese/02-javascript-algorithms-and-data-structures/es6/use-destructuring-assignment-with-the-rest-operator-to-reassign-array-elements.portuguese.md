---
id: 587d7b8a367417b2b2512b4c
title: Use Destructuring Assignment with the Rest Operator to Reassign Array Elements
challengeType: 1
videoUrl: ''
localeTitle: Use Destructuring Assignment com o Operador Descanso para Reatribuir Elementos da Matriz
---

## Description
<section id="description"> Em algumas situações envolvendo a desestruturação de matriz, podemos querer coletar o restante dos elementos em uma matriz separada. O resultado é semelhante ao <code>Array.prototype.slice()</code> , conforme mostrado abaixo: <blockquote> const [a, b, ... arr] = [1, 2, 3, 4, 5, 7]; <br> console.log (a, b); // 1, 2 <br> console.log (arr); // [3, 4, 5, 7] </blockquote> Variáveis <code>a</code> e <code>b</code> levar o primeiro e segundo valores da matriz. Depois disso, por causa da presença do operador resto, <code>arr</code> recebe resto dos valores sob a forma de uma matriz. O elemento restante só funciona corretamente como a última variável na lista. Como em, você não pode usar o operador de descanso para capturar um subarray que deixa de fora o último elemento da matriz original. </section>

## Instructions
<section id="instructions"> Use atribuição desestruturação com o operador de descanso para realizar uma eficaz <code>Array.prototype.slice()</code> de modo que <code>arr</code> é um sub-matriz da matriz original <code>source</code> com os dois primeiros elementos omitidos. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>arr</code> deve ser <code>[3,4,5,6,7,8,9,10]</code>'
    testString: 'assert(arr.every((v, i) => v === i + 3) && arr.length === 8,"<code>arr</code> should be <code>[3,4,5,6,7,8,9,10]</code>");'
  - text: Destructuring deve ser usado.
    testString: 'getUserInput => assert(getUserInput("index").match(/\[\s*\w*\s*,\s*\w*\s*,\s*...\w+\s*\]/g),"Destructuring should be used.");'
  - text: <code>Array.slice()</code> não deve ser usado.
    testString: 'getUserInput => assert(!getUserInput("index").match(/slice/g), "<code>Array.slice()</code> should not be used.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // change code below this line
  arr = list; // change this
  // change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
