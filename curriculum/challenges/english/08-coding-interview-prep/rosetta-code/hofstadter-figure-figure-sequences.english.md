---
title: Hofstadter Figure-Figure sequences
id: 59622f89e4e137560018a40e
challengeType: 5
---

## Description
<section id='description'>
<p>These two sequences of positive integers are defined as:</p>
<p><big>$$R(1)=1\ ;\ S(1)=2 \\R(n)=R(n-1)+S(n-1), \quad n>1.$$</big></p>
<p>The sequence <big>$S(n)$</big> is further defined as the sequence of positive integers not present in <big>$R(n)$</big>.</p><p>Sequence <big>$R$</big> starts:</p>
<p>1, 3, 7, 12, 18, ...</p>
<p>Sequence <big>$S$</big> starts:</p>
<p>2, 4, 5, 6, 8, ...</p>
Task:
Create two functions named ffr and ffs that when given n return R(n) or S(n) respectively.(Note that R(1) = 1 and S(1) = 2 to avoid off-by-one errors).
No maximum value for n should be assumed.
Sloane's <a href="http://oeis.org/A005228" title="link: http://oeis.org/A005228">A005228</a> and <a href="http://oeis.org/A030124" title="link: http://oeis.org/A030124">A030124</a>.
<a href="http://mathworld.wolfram.com/HofstadterFigure-FigureSequence.html" title="link: http://mathworld.wolfram.com/HofstadterFigure-FigureSequence.html">Wolfram MathWorld</a>
Wikipedia: <a href="https://en.wikipedia.org/wiki/Hofstadter_sequence#Hofstadter_Figure-Figure_sequences" title="wp: Hofstadter_sequence#Hofstadter_Figure-Figure_sequences">Hofstadter Figure-Figure sequences</a>.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>ffr</code> is a function.
    testString: 'assert(typeof ffr === ''function'', ''<code>ffr</code> is a function.'');'
  - text: <code>ffs</code> is a function.
    testString: 'assert(typeof ffs === ''function'', ''<code>ffs</code> is a function.'');'
  - text: <code>ffr</code> should return integer.
    testString: 'assert(Number.isInteger(ffr(1)), ''<code>ffr</code> should return integer.'');'
  - text: <code>ffs</code> should return integer.
    testString: 'assert(Number.isInteger(ffs(1)), ''<code>ffs</code> should return integer.'');'
  - text: <code>ffr()</code> should return <code>69</code>
    testString: 'assert.equal(ffr(ffrParamRes[0][0]), ffrParamRes[0][1], ''<code>ffr()</code> should return <code>69</code>'');'
  - text: <code>ffr()</code> should return <code>1509</code>
    testString: 'assert.equal(ffr(ffrParamRes[1][0]), ffrParamRes[1][1], ''<code>ffr()</code> should return <code>1509</code>'');'
  - text: <code>ffr()</code> should return <code>5764</code>
    testString: 'assert.equal(ffr(ffrParamRes[2][0]), ffrParamRes[2][1], ''<code>ffr()</code> should return <code>5764</code>'');'
  - text: <code>ffr()</code> should return <code>526334</code>
    testString: 'assert.equal(ffr(ffrParamRes[3][0]), ffrParamRes[3][1], ''<code>ffr()</code> should return <code>526334</code>'');'
  - text: <code>ffs()</code> should return <code>14</code>
    testString: 'assert.equal(ffs(ffsParamRes[0][0]), ffsParamRes[0][1], ''<code>ffs()</code> should return <code>14</code>'');'
  - text: <code>ffs()</code> should return <code>59</code>
    testString: 'assert.equal(ffs(ffsParamRes[1][0]), ffsParamRes[1][1], ''<code>ffs()</code> should return <code>59</code>'');'
  - text: <code>ffs()</code> should return <code>112</code>
    testString: 'assert.equal(ffs(ffsParamRes[2][0]), ffsParamRes[2][1], ''<code>ffs()</code> should return <code>112</code>'');'
  - text: <code>ffs()</code> should return <code>1041</code>
    testString: 'assert.equal(ffs(ffsParamRes[3][0]), ffsParamRes[3][1], ''<code>ffs()</code> should return <code>1041</code>'');'

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
