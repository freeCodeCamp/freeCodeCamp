---
title: Hailstone sequence
id: 595608ff8bcd7a50bd490181
challengeType: 5
videoUrl: ''
localeTitle: Sequência de granizo
---

## Description
<section id="description"><p> A sequência de números Hailstone pode ser gerada a partir de um inteiro positivo inicial, n por: </p> Se n é 1, a sequência termina. Se n é par, então o próximo n da sequência <code>= n/2</code> Se n é ímpar, então o próximo n da sequência <code>= (3 * n) + 1</code> <p> A <a href="https://en.wikipedia.org/wiki/Collatz conjecture" title="wp: conjectura de Collatz">conjectura de Collatz</a> (não comprovada) é que a sequência do granizo para qualquer número inicial sempre termina. </p><p> A sequência do granizo é também conhecida como números de granizo (porque os valores geralmente estão sujeitos a múltiplas descidas e subidas como granizo em uma nuvem), ou como a sequência Collatz. </p> Tarefa: Crie uma rotina para gerar a seqüência de granizo para um número. Use a rotina para mostrar que a sequência do granizo para o número 27 tem 112 elementos começando com <code>27, 82, 41, 124</code> e terminando com <code>8, 4, 2, 1</code> Mostre o número menor que 100.000 que tem a maior sequência de granizo junto com aquela comprimento da sequência. (Mas não mostre a seqüência real!) Veja também: <a href="http://xkcd.com/710" title="link: http://xkcd.com/710">xkcd</a> (humourous). </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>hailstoneSequence</code> é uma função.
    testString: 'assert(typeof hailstoneSequence === "function", "<code>hailstoneSequence</code> is a function.");'
  - text: '<code>hailstoneSequence()</code> deve retornar <code>[[27,82,41,124,8,4,2,1], [351, 77031]]</code>'
    testString: 'assert.deepEqual(hailstoneSequence(), res, "<code>hailstoneSequence()</code> should return <code>[[27,82,41,124,8,4,2,1], [351, 77031]]</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// noprotect
function hailstoneSequence () {
  const res = [];
  // Good luck!

  return res;
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
