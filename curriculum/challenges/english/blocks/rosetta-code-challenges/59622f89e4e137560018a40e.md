---
id: 59622f89e4e137560018a40e
title: Hofstadter Figure-Figure sequences
challengeType: 1
forumTopicId: 302286
dashedName: hofstadter-figure-figure-sequences
---

# --description--

The Hofstadter Figure-Figure sequences $R_n$ and $S_n$ are given by

$R_1 = 1\\ ;\\ S_1 = 2 \\\\R_n = R_{n-1} + S_{n-1}, \\quad n>1.$

Specifically, the sequence $R_n$ contains the values

<pre>1, 3, 7, 12, 18, ...</pre>

and the sequence $S_n$ contains the values

<pre>2, 4, 5, 6, 8, ...</pre>

The sequence $R_n$ is defined by the recurrence relation $R_n = R_{n-1} + S_{n-1}$, while $S_n$ is defined as sequence of positive integers that are not included in the sequence $R_n$.

# --instructions--

Create two functions named `ffr` and `ffs` that return `R(n)` or `S(n)`, respectively, for any index `n`. Note that the Hofstadter Figure-Figure sequences are 1-indexed, with $R_1 = 1$ and $S_1 = 2$.

No maximum value for `n` should be assumed.

**References**

 <p>Rosetta: <a href='https://rosettacode.org/wiki/Hofstadter_Figure-Figure_sequences' target='_blank'>Hofstadter Figure-Figure sequences</a></p>.


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
