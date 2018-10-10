---
title: Hofstadter Figure-Figure sequences
id: 59622f89e4e137560018a40e
challengeType: 5
videoUrl: ''
localeTitle: Последовательности Рисунка Hofstadter
---

## Description
<section id="description"><p> Эти две последовательности положительных целых чисел определяются как: </p><p> <big>$$ R (1) = 1 \; \ S (1) = 2 \\ R (n) = R (n-1) + S (n-1), \ quad n&gt; 1. $$</big> </p><p> Последовательность <big>$ S (n) $</big> дополнительно определяется как последовательность положительных целых чисел, не присутствующих в <big>$ R (n) $</big> . </p><p> Последовательность <big>$ R $</big> начинается: </p><p> 1, 3, 7, 12, 18, ... </p><p> Последовательность <big>$ S $</big> начинается: </p><p> 2, 4, 5, 6, 8, ... </p> Задача: создать две функции с именем ffr и ffs, которые при задании n возвращают R (n) или S (n) соответственно. (Обратите внимание, что R (1) = 1 и S (1) = 2, чтобы избежать ошибок, , Максимальное значение n не должно приниматься. Sloane <a href="http://oeis.org/A005228" title="ссылка: http://oeis.org/A005228">A005228</a> и <a href="http://oeis.org/A030124" title="ссылка: http://oeis.org/A030124">A030124</a> . <a href="http://mathworld.wolfram.com/HofstadterFigure-FigureSequence.html" title="ссылка: http://mathworld.wolfram.com/HofstadterFigure-FigureSequence.html">Wolfram MathWorld</a> Wikipedia: <a href="https://en.wikipedia.org/wiki/Hofstadter_sequence#Hofstadter_Figure-Figure_sequences" title="wp: Hofstadter_sequence # Hofstadter_Figure-Figure_sequences">последовательности Hofstadter Figure-Figure</a> . </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>ffr</code> - функция.
    testString: 'assert(typeof ffr === "function", "<code>ffr</code> is a function.");'
  - text: <code>ffs</code> - функция.
    testString: 'assert(typeof ffs === "function", "<code>ffs</code> is a function.");'
  - text: <code>ffr</code> должно возвращать целое число.
    testString: 'assert(Number.isInteger(ffr(1)), "<code>ffr</code> should return integer.");'
  - text: <code>ffs</code> должно возвращать целое число.
    testString: 'assert(Number.isInteger(ffs(1)), "<code>ffs</code> should return integer.");'
  - text: <code>ffr()</code> должен возвращать <code>69</code>
    testString: 'assert.equal(ffr(ffrParamRes[0][0]), ffrParamRes[0][1], "<code>ffr()</code> should return <code>69</code>");'
  - text: <code>ffr()</code> должен вернуть <code>1509</code>
    testString: 'assert.equal(ffr(ffrParamRes[1][0]), ffrParamRes[1][1], "<code>ffr()</code> should return <code>1509</code>");'
  - text: <code>ffr()</code> должен возвращать <code>5764</code>
    testString: 'assert.equal(ffr(ffrParamRes[2][0]), ffrParamRes[2][1], "<code>ffr()</code> should return <code>5764</code>");'
  - text: <code>ffr()</code> должен вернуть <code>526334</code>
    testString: 'assert.equal(ffr(ffrParamRes[3][0]), ffrParamRes[3][1], "<code>ffr()</code> should return <code>526334</code>");'
  - text: <code>ffs()</code> должен возвращать <code>14</code>
    testString: 'assert.equal(ffs(ffsParamRes[0][0]), ffsParamRes[0][1], "<code>ffs()</code> should return <code>14</code>");'
  - text: <code>ffs()</code> должен вернуть <code>59</code>
    testString: 'assert.equal(ffs(ffsParamRes[1][0]), ffsParamRes[1][1], "<code>ffs()</code> should return <code>59</code>");'
  - text: <code>ffs()</code> должен возвращать <code>112</code>
    testString: 'assert.equal(ffs(ffsParamRes[2][0]), ffsParamRes[2][1], "<code>ffs()</code> should return <code>112</code>");'
  - text: <code>ffs()</code> должен возвращать <code>1041</code>
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
