---
title: Hofstadter Figure-Figure sequences
id: 59622f89e4e137560018a40e
challengeType: 5
isHidden: false
forumTopicId: 302286
---

## Description
<section id='description'>
These two sequences of positive integers are defined as:
<span style="margin-left: 2em;"><big>$R(1)=1\ ;\ S(1)=2 \\R(n)=R(n-1)+S(n-1), \quad n>1.$</big></span>
The sequence <big>$S(n)$</big> is further defined as the sequence of positive integers not present in <big>$R(n)$</big>.
Sequence <big>$R$</big> starts:
<pre>1, 3, 7, 12, 18, ...</pre>
Sequence <big>$S$</big> starts:
<pre>2, 4, 5, 6, 8, ...</pre>
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
  - text: <code>ffr</code> should be a function.
    testString: assert(typeof ffr === 'function');
  - text: <code>ffs</code> should be a function.
    testString: assert(typeof ffs === 'function');
  - text: <code>ffr</code> should return integer.
    testString: assert(Number.isInteger(ffr(1)));
  - text: <code>ffs</code> should return integer.
    testString: assert(Number.isInteger(ffs(1)));
  - text: <code>ffr(10)</code> should return <code>69</code>
    testString: assert.equal(ffr(ffrParamRes[0][0]), ffrParamRes[0][1]);
  - text: <code>ffr(50)</code> should return <code>1509</code>
    testString: assert.equal(ffr(ffrParamRes[1][0]), ffrParamRes[1][1]);
  - text: <code>ffr(100)</code> should return <code>5764</code>
    testString: assert.equal(ffr(ffrParamRes[2][0]), ffrParamRes[2][1]);
  - text: <code>ffr(1000)</code> should return <code>526334</code>
    testString: assert.equal(ffr(ffrParamRes[3][0]), ffrParamRes[3][1]);
  - text: <code>ffs(10)</code> should return <code>14</code>
    testString: assert.equal(ffs(ffsParamRes[0][0]), ffsParamRes[0][1]);
  - text: <code>ffs(50)</code> should return <code>59</code>
    testString: assert.equal(ffs(ffsParamRes[1][0]), ffsParamRes[1][1]);
  - text: <code>ffs(100)</code> should return <code>112</code>
    testString: assert.equal(ffs(ffsParamRes[2][0]), ffsParamRes[2][1]);
  - text: <code>ffs(1000)</code> should return <code>1041</code>
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


### After Test
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
