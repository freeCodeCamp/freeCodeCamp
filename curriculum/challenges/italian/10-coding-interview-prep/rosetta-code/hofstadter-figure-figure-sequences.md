---
id: 59622f89e4e137560018a40e
title: Sequenze figura-figura di Hofstadter
challengeType: 1
forumTopicId: 302286
dashedName: hofstadter-figure-figure-sequences
---

# --description--

Le sequenze di Hofstadter figura-figura $R_n$ e $S_n$ sono date da

$R_1 = 1\\ ;\\ S_1 = 2 \\\\R_n = R_{n-1} + S_{n-1}, \\quad n>1.$

Specificatamente, la sequenza $R_n$ contiene i valori

<pre>1, 3, 7, 12, 18, ...</pre>

e la sequenza $S_n$ contiene i valori

<pre>2, 4, 5, 6, 8, ...</pre>

La sequenza $R_n$ è definita dalla relazione ricorrente $R_n = R_{n-1} + S_{n-1}$, mentre $S_n$ è definita come la sequenza di numeri interi positivi che non sono inclusi nella sequenza $R_n$.

# --instructions--

Crea due funzioni chiamate `ffr` e `ffs` che restituiscono `R(n)` o `S(n)` rispettivamente, per ogni indice `n`. Nota che le sequenze figura-figura di Hofstadfer sono indicizzate da 1, con $R_1 = 1$ e $S_1 = 2$.

Non deve essere ipotizzato un valore massimo di `n`.

**Riferimenti**<p>Rosetta: <a href='https://rosettacode.org/wiki/Hofstadter_Figure-Figure_sequences' target='_blank'>Hofstadter Figure-Figure sequences</a></p>.


# --hints--

`ffr` dovrebbe essere una funzione.

```js
assert(typeof ffr === 'function');
```

`ffs` dovrebbe essere una funzione.

```js
assert(typeof ffs === 'function');
```

`ffr` dovrebbe restituire un numero intero.

```js
assert(Number.isInteger(ffr(1)));
```

`ffs` dovrebbe restituire un numero intero.

```js
assert(Number.isInteger(ffs(1)));
```

`ffr(10)` dovrebbe restituire `69`

```js
assert.equal(ffr(ffrParamRes[0][0]), ffrParamRes[0][1]);
```

`ffr(50)` dovrebbe restituire `1509`

```js
assert.equal(ffr(ffrParamRes[1][0]), ffrParamRes[1][1]);
```

`ffr(100)` dovrebbe restituire `5764`

```js
assert.equal(ffr(ffrParamRes[2][0]), ffrParamRes[2][1]);
```

`ffr(1000)` dovrebbe restituire `526334`

```js
assert.equal(ffr(ffrParamRes[3][0]), ffrParamRes[3][1]);
```

`ffs(10)` dovrebbe restituire `14`

```js
assert.equal(ffs(ffsParamRes[0][0]), ffsParamRes[0][1]);
```

`ffs(50)` dovrebbe restituire `59`

```js
assert.equal(ffs(ffsParamRes[1][0]), ffsParamRes[1][1]);
```

`ffs(100)` dovrebbe restituire `112`

```js
assert.equal(ffs(ffsParamRes[2][0]), ffsParamRes[2][1]);
```

`ffs(1000)` dovrebbe restituire `1041`

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
