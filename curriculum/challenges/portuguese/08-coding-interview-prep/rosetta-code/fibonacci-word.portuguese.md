---
title: Fibonacci word
id: 5992e222d397f00d21122931
challengeType: 5
videoUrl: ''
localeTitle: Palavra Fibonacci
---

## Description
<section id="description"><p> Escreva uma função para retornar as palavras de Fibonacci até N. O N. será fornecido como um parâmetro para a função. A função deve retornar uma matriz de objetos. Os objetos devem estar no formato: {N: 1, Comprimento: 1, Entropia: 0, Word: &#39;1&#39;}. Mais detalhes são fornecidos abaixo: </p><p> O Fibonacci Word pode ser criado de uma maneira análoga à seqüência de Fibonacci <a href="http://hal.archives-ouvertes.fr/docs/00/36/79/72/PDF/The_Fibonacci_word_fractal.pdf" title="link: http://hal.archives-ouvertes.fr/docs/00/36/79/72/PDF/The_Fibonacci_word_fractal.pdf">como descrito aqui</a> : </p><p> Definir F_Word <sub>1</sub> como 1 </p><p> Definir F_Word <sub>2</sub> como 0 </p><p> Formulário F_Word <sub>3</sub> como F_Word <sub>2</sub> concatenado com F_Word <sub>1,</sub> ou seja: 01 </p><p> Form F_Word <sub>n</sub> como F_Word <sub>n-1</sub> concatenado com F_word <sub>n-2</sub> </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>fibWord</code> é uma função.
    testString: 'assert(typeof fibWord === "function", "<code>fibWord</code> is a function.");'
  - text: <code>fibWord(5)</code> deve retornar um array.
    testString: 'assert(Array.isArray(fibWord(5)),"<code>fibWord(5)</code> should return an array.");'
  - text: '<code>fibWord(5)</code> deve retornar <code>&#39;+JSON.stringify(ans)+&#39;</code> .'
    testString: 'assert.deepEqual(fibWord(5),ans,"<code>fibWord(5)</code> should return <code>"+JSON.stringify(ans)+"</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function fibWord (n) {
  // Good luck!
}

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
