---
id: 59622f89e4e137560018a40e
title: Hofstadter Figure-Figure sequences
challengeType: 5
forumTopicId: 302286
dashedName: hofstadter-figure-figure-sequences
---

# --description--

These two sequences of positive integers are defined as:

$R(1)=1\\ ;\\ S(1)=2 \\\\R(n)=R(n-1)+S(n-1), \\quad n>1.$

The sequence $S(n)$ is further defined as the sequence of positive integers not present in $R(n)$.

Sequence $R$ starts:

<pre>1, 3, 7, 12, 18, ...</pre>

Sequence $S$ starts:

<pre>2, 4, 5, 6, 8, ...</pre>

# --instructions--

Create two functions named `ffr` and `ffs` that when given `n` return `R(n)` or `S(n)` respectively. (Note that R(1) = 1 and S(1) = 2 to avoid off-by-one errors).

No maximum value for `n` should be assumed.

**References**

<ul>
  <li>
    Sloane's <a href='https://oeis.org/A005228' target='_blank'>A005228</a> and <a href='https://oeis.org/A030124' target='_blank'>A030124</a>.
  </li>
  <li>
    Wikipedia: <a href='https://en.wikipedia.org/wiki/Hofstadter_sequence#Hofstadter_Figure-Figure_sequences' title='wp: Hofstadter_sequence#Hofstadter_Figure-Figure_sequences' target='_blank'>Hofstadter Figure-Figure sequences</a>.
  </li>
</ul>

# --hints--

`ffr` should be a function.

```js
assert(typeof ffr === 'function');
```

`ffs` should be a function.

```js
assert(typeof ffs === 'function');
```

`ffr` should return integer.

```js
assert(Number.isInteger(ffr(1)));
```

`ffs` should return integer.

```js
assert(Number.isInteger(ffs(1)));
```

`ffr(10)` should return `69`

```js
assert.equal(ffr(ffrParamRes[0][0]), ffrParamRes[0][1]);
```

`ffr(50)` should return `1509`

```js
assert.equal(ffr(ffrParamRes[1][0]), ffrParamRes[1][1]);
```

`ffr(100)` should return `5764`

```js
assert.equal(ffr(ffrParamRes[2][0]), ffrParamRes[2][1]);
```

`ffr(1000)` should return `526334`

```js
assert.equal(ffr(ffrParamRes[3][0]), ffrParamRes[3][1]);
```

`ffs(10)` should return `14`

```js
assert.equal(ffs(ffsParamRes[0][0]), ffsParamRes[0][1]);
```

`ffs(50)` should return `59`

```js
assert.equal(ffs(ffsParamRes[1][0]), ffsParamRes[1][1]);
```

`ffs(100)` should return `112`

```js
assert.equal(ffs(ffsParamRes[2][0]), ffsParamRes[2][1]);
```

`ffs(1000)` should return `1041`

```js
assert.equal(ffs(ffsParamRes[3][0]), ffsParamRes[3][1]);
```

# --seed--

## --after-user-code--

```js
const ffrParamRes = [[10, 69], [50, 1509], [100, 5764], [1000, 526334]];
const ffsParamRes = [[10, 14], [50, 59], [100, 112], [1000, 1041]];
```

## --seed-contents--

```js
function ffr(n) {
  return n;
}

function ffs(n) {
  return n;
}
```

# --solutions--

```js
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
