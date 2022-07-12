---
id: 59622f89e4e137560018a40e
title: Sequências de Figura-Figura de Hofstadter
challengeType: 1
forumTopicId: 302286
dashedName: hofstadter-figure-figure-sequences
---

# --description--

As sequências de figura-figura de Hofstadter $R_n$ e $S_n$ são dadas por

$R_1 = 1\\ ;\\ S_1 = 2 \\\\R_n = R_{n-1} + S_{n-1}, \\quad n>1.$

Especificamente, a sequência $R_n$ contém os valores

<pre>1, 3, 7, 12, 18, ...</pre>

e a sequência $S_n$ contém os valores

<pre>2, 4, 5, 6, 8, ...</pre>

A sequência $R_n$ é definida pela relação de recorrência $R_n = R_{n-1} + S_{n-1}$, enquanto $S_n$ é definida como a sequência de números inteiros positivos não incluídos na sequência $R_n$.

# --instructions--

Crie duas funções, chamadas `ffr` e `ffs` que retornem `R(n)` ou `S(n)`, respectivamente, para qualquer índice `n`. Observe que as sequências de figura-figura de Hofstadter são de índice 1, com $R_1 = 1$ e $S_1 = 2$.

Nenhum valor máximo para `n` deve ser assumido.

**Referências**<p>Rosetta: <a href='https://rosettacode.org/wiki/Hofstadter_Figure-Figure_sequences' target='_blank'>sequências de figura-figura de Hofstadter</a></p>.


# --hints--

`ffr` deve ser uma função.

```js
assert(typeof ffr === 'function');
```

`ffs` deve ser uma função.

```js
assert(typeof ffs === 'function');
```

`ffr` deve retornar um número inteiro.

```js
assert(Number.isInteger(ffr(1)));
```

`ffs` deve retornar um número inteiro.

```js
assert(Number.isInteger(ffs(1)));
```

`ffr(10)` deve retornar `69`

```js
assert.equal(ffr(ffrParamRes[0][0]), ffrParamRes[0][1]);
```

`ffr(50)` deve retornar `1509`

```js
assert.equal(ffr(ffrParamRes[1][0]), ffrParamRes[1][1]);
```

`ffr(100)` deve retornar `5764`

```js
assert.equal(ffr(ffrParamRes[2][0]), ffrParamRes[2][1]);
```

`ffr(1000)` deve retornar `526334`

```js
assert.equal(ffr(ffrParamRes[3][0]), ffrParamRes[3][1]);
```

`ffs(10)` deve retornar `14`

```js
assert.equal(ffs(ffsParamRes[0][0]), ffsParamRes[0][1]);
```

`ffs(50)` deve retornar `59`

```js
assert.equal(ffs(ffsParamRes[1][0]), ffsParamRes[1][1]);
```

`ffs(100)` deve retornar `112`

```js
assert.equal(ffs(ffsParamRes[2][0]), ffsParamRes[2][1]);
```

`ffs(1000)` deve retornar `1041`

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
