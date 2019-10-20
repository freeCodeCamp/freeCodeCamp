---
id: 587d7b89367417b2b2512b48
title: Use the Spread Operator to Evaluate Arrays In-Place
challengeType: 1
videoUrl: ''
localeTitle: Use o operador de propagação para avaliar matrizes no local
---

## Description
<section id="description"> O ES6 introduz o <dfn>operador spread</dfn> , que nos permite expandir matrizes e outras expressões em locais onde vários parâmetros ou elementos são esperados. O código ES5 abaixo usa <code>apply()</code> para calcular o valor máximo em uma matriz: <blockquote> var arr = [6, 89, 3, 45]; <br> var maximus = Math.max.apply (null, arr); // retorna 89 </blockquote> Nós tivemos que usar <code>Math.max.apply(null, arr)</code> porque <code>Math.max(arr)</code> retorna <code>NaN</code> . <code>Math.max()</code> espera argumentos separados por vírgula, mas não uma matriz. O operador de spread torna essa sintaxe muito melhor para ler e manter. <blockquote> const arr = [6, 89, 3, 45]; <br> const maximus = Math.max (... arr); // retorna 89 </blockquote> <code>...arr</code> retorna um array descompactado. Em outras palavras, ele <em>espalha</em> o array. No entanto, o operador de propagação só funciona no local, como em um argumento para uma função ou em um literal de matriz. O código a seguir não funcionará: <blockquote> const spreaded = ... arr; // lançará um erro de sintaxe </blockquote></section>

## Instructions
<section id="instructions"> Copie todo o conteúdo de <code>arr1</code> em outro array <code>arr2</code> usando o operador spread. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>arr2</code> é a cópia correta de <code>arr1</code> .
    testString: 'assert(arr2.every((v, i) => v === arr1[i]), "<code>arr2</code> is correct copy of <code>arr1</code>.");'
  - text: <code>...</code> operador de propagação foi usado para duplicar <code>arr1</code> .
    testString: 'getUserInput => assert(getUserInput("index").match(/\[\s*...arr1\s*\]/g),"<code>...</code> spread operator was used to duplicate <code>arr1</code>.");'
  - text: <code>arr2</code> permanece inalterado quando <code>arr1</code> é alterado.
    testString: 'assert((arr1, arr2) => {arr1.push("JUN"); return arr2.length < arr1.length},"<code>arr2</code> remains unchanged when <code>arr1</code> is changed.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = []; // change this line
})();
console.log(arr2);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
