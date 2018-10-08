---
title: Hofstadter Figure-Figure sequences
id: 59622f89e4e137560018a40e
localeTitle: 59622f89e4e137560018a40e
challengeType: 5
---

## Description
<section id='description'> 
<p> Estas dos secuencias de enteros positivos se definen como: </p> 
<p> <big>$ R (1) = 1 \; \ S (1) = 2 \\ R (n) = R (n-1) + S (n-1), \ quad n&gt; 1. $</big> </p> 
<p> La secuencia <big>$ S (n) $</big> se define además como la secuencia de enteros positivos que no están presentes en <big>$ R (n) $</big> . </p><p> Secuencia <big>$ R $</big> comienza: </p> 
<p> 1, 3, 7, 12, 18, ... </p> 
<p> Secuencia <big>$ S $</big> comienza: </p> 
<p> 2, 4, 5, 6, 8, ... </p> 
Tarea: 
Crea dos funciones denominadas ffr y ffs que cuando se dan n devuelven R (n) o S (n) respectivamente. (Ten en cuenta que R (1) = 1 y S (1) = 2 para evitar el apagado por uno errores). 
No se debe asumir ningún valor máximo para n. 
<a href="http://oeis.org/A005228" title="enlace: http://oeis.org/A005228">A005228</a> y <a href="http://oeis.org/A030124" title="enlace: http://oeis.org/A030124">A030124 de Sloane</a> . 
<a href="http://mathworld.wolfram.com/HofstadterFigure-FigureSequence.html" title="enlace: http://mathworld.wolfram.com/HofstadterFigure-FigureSequence.html">Wolfram MathWorld</a> 
Wikipedia: <a href="https://en.wikipedia.org/wiki/Hofstadter_sequence#Hofstadter_Figure-Figure_sequences" title="wp: Hofstadter_sequence # Hofstadter_Figure-Figure_sequences">Hofstadter Figura-Figura secuencias</a> . 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>ffr</code> es una función.
    testString: 'assert(typeof ffr === "function", "<code>ffr</code> is a function.");'
  - text: <code>ffs</code> es una función.
    testString: 'assert(typeof ffs === "function", "<code>ffs</code> is a function.");'
  - text: <code>ffr</code> debería devolver entero.
    testString: 'assert(Number.isInteger(ffr(1)), "<code>ffr</code> should return integer.");'
  - text: <code>ffs</code> debe devolver entero.
    testString: 'assert(Number.isInteger(ffs(1)), "<code>ffs</code> should return integer.");'
  - text: <code>ffr()</code> debe devolver <code>69</code>
    testString: 'assert.equal(ffr(ffrParamRes[0][0]), ffrParamRes[0][1], "<code>ffr()</code> should return <code>69</code>");'
  - text: <code>ffr()</code> debe devolver <code>1509</code>
    testString: 'assert.equal(ffr(ffrParamRes[1][0]), ffrParamRes[1][1], "<code>ffr()</code> should return <code>1509</code>");'
  - text: <code>ffr()</code> debe devolver <code>5764</code>
    testString: 'assert.equal(ffr(ffrParamRes[2][0]), ffrParamRes[2][1], "<code>ffr()</code> should return <code>5764</code>");'
  - text: <code>ffr()</code> debe devolver <code>526334</code>
    testString: 'assert.equal(ffr(ffrParamRes[3][0]), ffrParamRes[3][1], "<code>ffr()</code> should return <code>526334</code>");'
  - text: <code>ffs()</code> debe devolver <code>14</code>
    testString: 'assert.equal(ffs(ffsParamRes[0][0]), ffsParamRes[0][1], "<code>ffs()</code> should return <code>14</code>");'
  - text: <code>ffs()</code> debe devolver <code>59</code>
    testString: 'assert.equal(ffs(ffsParamRes[1][0]), ffsParamRes[1][1], "<code>ffs()</code> should return <code>59</code>");'
  - text: <code>ffs()</code> debe devolver <code>112</code>
    testString: 'assert.equal(ffs(ffsParamRes[2][0]), ffsParamRes[2][1], "<code>ffs()</code> should return <code>112</code>");'
  - text: <code>ffs()</code> debe devolver <code>1041</code>
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
// noprotect
const R = [null, 1];
const S = [null, 2];

function extendSequences (n) {
  let current = Math.max(R[R.length - 1], S[S.length - 1]);
  let i;
  while (R.length <= n || S.length <= n) {
    i = Math.min(R.length, S.length) - 1;
    current += 1;
    if (current === R[i] + S[i]) {
      R.push(current);
    } else {
      S.push(current);
    }
  }
}

function ffr (n) {
  extendSequences(n);
  return R[n];
}

function ffs (n) {
  extendSequences(n);
  return S[n];
}

```

</section>
