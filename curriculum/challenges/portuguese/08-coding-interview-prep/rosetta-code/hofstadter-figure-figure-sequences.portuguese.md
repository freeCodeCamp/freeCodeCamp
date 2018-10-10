---
title: Hofstadter Figure-Figure sequences
id: 59622f89e4e137560018a40e
challengeType: 5
videoUrl: ''
localeTitle: Sequências Figura-Figura de Hofstadter
---

## Description
<section id="description"><p> Essas duas seqüências de inteiros positivos são definidas como: </p><p> <big>$$ R (1) = 1 \; \ S (1) = 2 \\ R (n) = R (n-1) + S (n-1), \ quad n&gt; 1.</big> </p><p> A sequência <big>$ S (n) $</big> é ainda definida como a sequência de inteiros positivos não presentes em <big>$ R (n) $</big> . </p><p> Seqüência <big>$ R $</big> começa: </p><p> 1, 3, 7, 12, 18, ... </p><p> Seqüência <big>$ S $</big> começa: </p><p> 2, 4, 5, 6, 8, ... </p> Tarefa: Crie duas funções chamadas ffr e ffs que, quando fornecidas, retornam R (n) ou S (n), respectivamente (observe que R (1) = 1 e S (1) = 2 para evitar erros entre-um). . Nenhum valor máximo para n deve ser assumido. <a href="http://oeis.org/A005228" title="link: http://oeis.org/A005228">A005228</a> e <a href="http://oeis.org/A030124" title="link: http://oeis.org/A030124">A030124 de</a> Sloane. <a href="http://mathworld.wolfram.com/HofstadterFigure-FigureSequence.html" title="link: http://mathworld.wolfram.com/HofstadterFigure-FigureSequence.html">Wolfram MathWorld</a> Wikipedia: <a href="https://en.wikipedia.org/wiki/Hofstadter_sequence#Hofstadter_Figure-Figure_sequences" title="wp: Hofstadter_sequence # Hofstadter_Figure-Figure_sequences">Sequências de figura-figura de Hofstadter</a> . </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>ffr</code> é uma função.
    testString: 'assert(typeof ffr === "function", "<code>ffr</code> is a function.");'
  - text: <code>ffs</code> é uma função.
    testString: 'assert(typeof ffs === "function", "<code>ffs</code> is a function.");'
  - text: <code>ffr</code> deve retornar inteiro.
    testString: 'assert(Number.isInteger(ffr(1)), "<code>ffr</code> should return integer.");'
  - text: <code>ffs</code> deve retornar inteiro.
    testString: 'assert(Number.isInteger(ffs(1)), "<code>ffs</code> should return integer.");'
  - text: <code>ffr()</code> deve retornar <code>69</code>
    testString: 'assert.equal(ffr(ffrParamRes[0][0]), ffrParamRes[0][1], "<code>ffr()</code> should return <code>69</code>");'
  - text: <code>ffr()</code> deve retornar <code>1509</code>
    testString: 'assert.equal(ffr(ffrParamRes[1][0]), ffrParamRes[1][1], "<code>ffr()</code> should return <code>1509</code>");'
  - text: <code>ffr()</code> deve retornar <code>5764</code>
    testString: 'assert.equal(ffr(ffrParamRes[2][0]), ffrParamRes[2][1], "<code>ffr()</code> should return <code>5764</code>");'
  - text: <code>ffr()</code> deve retornar <code>526334</code>
    testString: 'assert.equal(ffr(ffrParamRes[3][0]), ffrParamRes[3][1], "<code>ffr()</code> should return <code>526334</code>");'
  - text: <code>ffs()</code> deve retornar <code>14</code>
    testString: 'assert.equal(ffs(ffsParamRes[0][0]), ffsParamRes[0][1], "<code>ffs()</code> should return <code>14</code>");'
  - text: <code>ffs()</code> deve retornar <code>59</code>
    testString: 'assert.equal(ffs(ffsParamRes[1][0]), ffsParamRes[1][1], "<code>ffs()</code> should return <code>59</code>");'
  - text: <code>ffs()</code> deve retornar <code>112</code>
    testString: 'assert.equal(ffs(ffsParamRes[2][0]), ffsParamRes[2][1], "<code>ffs()</code> should return <code>112</code>");'
  - text: <code>ffs()</code> deve retornar <code>1041</code>
    testString: 'assert.equal(ffs(ffsParamRes[3][0]), ffsParamRes[3][1], "<code>ffs()</code> should return <code>1041</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// noprotect
function ffr(n) {
  return n;
}

function ffs(n) {
  return n;
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
