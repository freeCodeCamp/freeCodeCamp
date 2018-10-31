---
id: 587d7b89367417b2b2512b4b
title: Use Destructuring Assignment to Assign Variables from Arrays
challengeType: 1
videoUrl: ''
localeTitle: Use Destructuring Assignment para atribuir variáveis ​​de matrizes
---

## Description
<section id="description"> O ES6 torna os arrays de desestruturação tão fáceis quanto os objetos de desestruturação. Uma diferença fundamental entre o operador de propagação e a desestruturação de matriz é que o operador de distribuição descompacta todo o conteúdo de uma matriz em uma lista separada por vírgulas. Conseqüentemente, você não pode escolher quais elementos você deseja atribuir às variáveis. Destructuring uma matriz nos permite fazer exatamente isso: <blockquote> const [a, b] = [1, 2, 3, 4, 5, 6]; <br> console.log (a, b); // 1, 2 </blockquote> A variável <code>a</code> é atribuída ao primeiro valor da matriz e <code>b</code> é atribuído ao segundo valor da matriz. Também podemos acessar o valor em qualquer índice em uma matriz com desestruturação usando vírgulas para alcançar o índice desejado: <blockquote> const [a, b ,,, c] = [1, 2, 3, 4, 5, 6]; <br> console.log (a, b, c); // 1, 2, 5 </blockquote></section>

## Instructions
<section id="instructions"> Use atribuição desestruturação para trocar os valores de <code>a</code> e <code>b</code> para que <code>a</code> recebe o valor armazenado em <code>b</code> e <code>b</code> recebe o valor armazenado em <code>a</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'O valor de <code>a</code> deve ser 6, após a troca.'
    testString: 'assert(a === 6, "Value of <code>a</code> should be 6, after swapping.");'
  - text: 'O valor de <code>b</code> deve ser 8, após a troca.'
    testString: 'assert(b === 8, "Value of <code>b</code> should be 8, after swapping.");'
  - text: Use a desestruturação de matriz para trocar a e b.
    testString: '// assert(/\[\s*(\w)\s*,\s*(\w)\s*\]\s*=\s*\[\s*\2\s*,\s*\1\s*\]/g.test(code), "Use array destructuring to swap a and b.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line

  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
