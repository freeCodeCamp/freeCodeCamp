---
id: 59622f89e4e137560018a40e
title: Hofstadters Figur-Figur-Folgen
challengeType: 1
forumTopicId: 302286
dashedName: hofstadter-figure-figure-sequences
---

# --description--

The Hofstadter Figure-Figure sequences $R_n$ and $S_n$ are given by

$R_1 = 1\\ ;\\ S_1 = 2 \\\\R_n = R_{n-1} + S_{n-1}, \\quad n>1.$

Konkret enthält die Folge $R_n$ die Werte

<pre>1, 3, 7, 12, 18, ...</pre>

und die Folge $S_n$ enthält die Werte

<pre>2, 4, 5, 6, 8, ...</pre>

Die Folge $R_n$ ist durch die Rekursionsbeziehung $R_n = R_{n-1} + S_{n-1}$ definiert, während $S_n$ als Folge von positiven ganzen Zahlen definiert ist, die nicht in der Folge $R_n$ enthalten sind.

# --instructions--

Erstelle zwei Funktionen namens `ffr` und `ffs`, die `R(n)` bzw. `S(n)` für jeden Index `n` zurückgeben. Man beachte, dass die Hofstadter Figur-Figur-Folgen 1-indiziert sind, mit $R_1 = 1$ und $S_1 = 2$.

Es sollte kein Höchstwert für `n` angenommen werden.

**Verweise**<p>Rosetta: <a href='https://rosettacode.org/wiki/Hofstadter_Figure-Figure_sequences' target='_blank'>Hofstadter Figur-Figur-Folgen</a></p>.


# --hints--

`ffr` sollte eine Funktion sein.

```js
assert(typeof ffr === 'function');
```

`ffs` sollte eine Funktion sein.

```js
assert(typeof ffs === 'function');
```

`ffr` sollte Integer zurückgeben.

```js
assert(Number.isInteger(ffr(1)));
```

`ffs` sollte Integer zurückgeben.

```js
assert(Number.isInteger(ffs(1)));
```

`ffr(10)` sollte `69` zurückgeben

```js
assert.equal(ffr(ffrParamRes[0][0]), ffrParamRes[0][1]);
```

`ffr(50)` sollte `1509` zurückgeben

```js
assert.equal(ffr(ffrParamRes[1][0]), ffrParamRes[1][1]);
```

`ffr(100)` sollte `5764` zurückgeben

```js
assert.equal(ffr(ffrParamRes[2][0]), ffrParamRes[2][1]);
```

`ffr(1000)` sollte `526334` zurückgeben

```js
assert.equal(ffr(ffrParamRes[3][0]), ffrParamRes[3][1]);
```

`ffs(10)` sollte `14` zurückgeben

```js
assert.equal(ffs(ffsParamRes[0][0]), ffsParamRes[0][1]);
```

`ffs(50)` sollte `59` zurückgeben

```js
assert.equal(ffs(ffsParamRes[1][0]), ffsParamRes[1][1]);
```

`ffs(100)` sollte `112` zurückgeben

```js
assert.equal(ffs(ffsParamRes[2][0]), ffsParamRes[2][1]);
```

`ffs(1000)` sollte `1041` zurückgeben

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
