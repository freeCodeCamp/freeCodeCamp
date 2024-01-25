---
id: 59622f89e4e137560018a40e
title: Послідовність Хофштадтера
challengeType: 1
forumTopicId: 302286
dashedName: hofstadter-figure-figure-sequences
---

# --description--

The Hofstadter Figure-Figure sequences $R_n$ and $S_n$ are given by

$R_1 = 1\\ ;\\ S_1 = 2 \\\\R_n = R_{n-1} + S_{n-1}, \\quad n>1.$

Зокрема, послідовність $R_n$ містить значення

<pre>1, 3, 7, 12, 18, ...</pre>

а послідовність $S_n$ містить значення

<pre>2, 4, 5, 6, 8, ...</pre>

Послідовність $R_n$ визначається рекурентним співвідношенням $R_n = R_{n-1} + S_{n-1}$, тоді як $S_n$ визначається як послідовність натуральних чисел, які не входять до послідовності $R_n$.

# --instructions--

Створіть дві функції з іменами `ffr` та `ffs`, які повертають `R(n)` або `S(n)`, відповідно, для будь-якого індексу `n`. Зауважте, що послідовності малюнок-малюнок Хофштадтера індексовані з 1, де $R_1 = 1$ та $S_1 = 2$.

Не слід припускати жодного максимального значення для ` n `.

**Посилання**<p>Rosetta: <a href='https://rosettacode.org/wiki/Hofstadter_Figure-Figure_sequences' target='_blank'> Послідовність Хофштадтера</a></p>.


# --hints--

`ffr` має бути функцією.

```js
assert(typeof ffr === 'function');
```

`ffs` має бути функцією.

```js
assert(typeof ffs === 'function');
```

`ffr` повинен повернути ціле число.

```js
assert(Number.isInteger(ffr(1)));
```

`ffs` повинен повернути ціле число.

```js
assert(Number.isInteger(ffs(1)));
```

`ffr(10)` повинен повертати `69`

```js
assert.equal(ffr(ffrParamRes[0][0]), ffrParamRes[0][1]);
```

`ffr(50)` повинен повертати `1509`

```js
assert.equal(ffr(ffrParamRes[1][0]), ffrParamRes[1][1]);
```

`ffr(100)` повинен повертати `5764`

```js
assert.equal(ffr(ffrParamRes[2][0]), ffrParamRes[2][1]);
```

`ffr(1000)` повинен повертати `526334`

```js
assert.equal(ffr(ffrParamRes[3][0]), ffrParamRes[3][1]);
```

`ffs(10)` має повернути `14`

```js
assert.equal(ffs(ffsParamRes[0][0]), ffsParamRes[0][1]);
```

`ffs(50)` має повернути `59`

```js
assert.equal(ffs(ffsParamRes[1][0]), ffsParamRes[1][1]);
```

`ffs(100)` має повернути `112`

```js
assert.equal(ffs(ffsParamRes[2][0]), ffsParamRes[2][1]);
```

`ffs(1000)` має повернути `1041`

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
