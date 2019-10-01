---
title: Hofstadter Figure-Figure sequences
id: 59622f89e4e137560018a40e
challengeType: 5
forumTopicId: 302286
localeTitle: Последовательности Рисунка Hofstadter
---

## Description
<section id='description'>
<p> Эти две последовательности положительных целых чисел определяются как: </p><p> <big>$$ R (1) = 1 \; \ S (1) = 2 \\ R (n) = R (n-1) + S (n-1), \ quad n&gt; 1. $$</big> </p><p> Последовательность <big>$ S (n) $</big> дополнительно определяется как последовательность положительных целых чисел, не присутствующих в <big>$ R (n) $</big> . </p><p> Последовательность <big>$ R $</big> начинается: </p><p> 1, 3, 7, 12, 18, ... </p><p> Последовательность <big>$ S $</big> начинается: </p><p> 2, 4, 5, 6, 8, ... </p> Задача: создать две функции с именем ffr и ffs, которые при задании n возвращают R (n) или S (n) соответственно. (Обратите внимание, что R (1) = 1 и S (1) = 2, чтобы избежать ошибок, , Максимальное значение n не должно приниматься. Sloane <a href="http://oeis.org/A005228" title="ссылка: http://oeis.org/A005228">A005228</a> и <a href="http://oeis.org/A030124" title="ссылка: http://oeis.org/A030124">A030124</a> . <a href="http://mathworld.wolfram.com/HofstadterFigure-FigureSequence.html" title="ссылка: http://mathworld.wolfram.com/HofstadterFigure-FigureSequence.html">Wolfram MathWorld</a> Wikipedia: <a href="https://en.wikipedia.org/wiki/Hofstadter_sequence#Hofstadter_Figure-Figure_sequences" title="wp: Hofstadter_sequence # Hofstadter_Figure-Figure_sequences">последовательности Hofstadter Figure-Figure</a> .
</section>

## Instructions
<section id='instructions'>
Create two functions named <code>ffr</code> and <code>ffs</code>  that when given <code>n</code> return <code>R(n)</code> or <code>S(n)</code> respectively. (Note that R(1) = 1 and S(1) = 2 to avoid off-by-one errors).
No maximum value for <code>n</code> should be assumed.
<strong>References</strong>
<ul>
  <li>
    Sloane's <a href="https://oeis.org/A005228" target="_blank">A005228</a> and <a href="https://oeis.org/A030124" target="_blank">A030124</a>.
  </li>
  <li>
    Wikipedia: <a href="https://en.wikipedia.org/wiki/Hofstadter_sequence#Hofstadter_Figure-Figure_sequences" title="wp: Hofstadter_sequence#Hofstadter_Figure-Figure_sequences" target="_blank">Hofstadter Figure-Figure sequences</a>.
  </li>
</ul>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>ffr</code> is a function.
    testString: assert(typeof ffr === 'function');
  - text: <code>ffs</code> is a function.
    testString: assert(typeof ffs === 'function');
  - text: <code>ffr</code> should return integer.
    testString: assert(Number.isInteger(ffr(1)));
  - text: <code>ffs</code> should return integer.
    testString: assert(Number.isInteger(ffs(1)));
  - text: <code>ffr()</code> should return <code>69</code>
    testString: assert.equal(ffr(ffrParamRes[0][0]), ffrParamRes[0][1]);
  - text: <code>ffr()</code> should return <code>1509</code>
    testString: assert.equal(ffr(ffrParamRes[1][0]), ffrParamRes[1][1]);
  - text: <code>ffr()</code> should return <code>5764</code>
    testString: assert.equal(ffr(ffrParamRes[2][0]), ffrParamRes[2][1]);
  - text: <code>ffr()</code> should return <code>526334</code>
    testString: assert.equal(ffr(ffrParamRes[3][0]), ffrParamRes[3][1]);
  - text: <code>ffs()</code> should return <code>14</code>
    testString: assert.equal(ffs(ffsParamRes[0][0]), ffsParamRes[0][1]);
  - text: <code>ffs()</code> should return <code>59</code>
    testString: assert.equal(ffs(ffsParamRes[1][0]), ffsParamRes[1][1]);
  - text: <code>ffs()</code> should return <code>112</code>
    testString: assert.equal(ffs(ffsParamRes[2][0]), ffsParamRes[2][1]);
  - text: <code>ffs()</code> should return <code>1041</code>
    testString: assert.equal(ffs(ffsParamRes[3][0]), ffsParamRes[3][1]);

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

### After Tests
<div id='js-teardown'>

```js
const ffrParamRes = [[10, 69], [50, 1509], [100, 5764], [1000, 526334]];
const ffsParamRes = [[10, 14], [50, 59], [100, 112], [1000, 1041]];

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
