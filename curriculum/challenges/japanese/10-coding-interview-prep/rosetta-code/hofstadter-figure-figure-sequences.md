---
id: 59622f89e4e137560018a40e
title: ホフスタッターフィギュア-フィギュア数列 (Hofstadter Figure-Figure sequences)
challengeType: 5
forumTopicId: 302286
dashedName: hofstadter-figure-figure-sequences
---

# --description--

この正の整数の2つの数列は次のように定義されます。

$R(1)=1\\ ;\\ S(1)=2 \\\\R(n)=R(n-1)+S(n-1), \\quad n>1.$

数列 $S(n)$ は $R(n)$ に存在しない正の整数の数列としてさらに定義されます。

数列 $R$ は次のように始まります:

<pre>1, 3, 7, 12, 18, ...</pre>

数列 $S$ は次のように始まります:

<pre>2, 4, 5, 6, 8, ...</pre>

# --instructions--

`n` を与えられると、それぞれ `R(n)` または`S(n)` を返す、`ffr` と `ffs` という名前の2つの関数を作成してください。 （オフバイワンエラーを避けるために、R(1) = 1であり、 S(1) = 2 であることに注意してください。）

`n` の最大値は仮定しないものとします。

**参照**

<ul>
  <li>
    Sloaneの<a href='https://oeis.org/A005228' target='_blank'>A005228</a> と <a href='https://oeis.org/A030124' target='_blank'>A030124</a>
  </li>
  <li>
    Wikipedia: <a href='https://en.wikipedia.org/wiki/Hofstadter_sequence#Hofstadter_Figure-Figure_sequences' title='wp: Hofstadter_sequence#Hofstadter_Figure-Figure_sequences' target='_blank'>Hofstadter Figure-Figure sequences</a>.
  </li>
</ul>

# --hints--

`ffr` は関数とします。

```js
assert(typeof ffr === 'function');
```

`ffs` は関数とします。

```js
assert(typeof ffs === 'function');
```

`ffr` は整数を返す必要があります。

```js
assert(Number.isInteger(ffr(1)));
```

`ffs` は整数を返す必要があります。

```js
assert(Number.isInteger(ffs(1)));
```

`ffr(10)` は`69`を返す必要があります。

```js
assert.equal(ffr(ffrParamRes[0][0]), ffrParamRes[0][1]);
```

`ffr(50)` は`1509`を返す必要があります。

```js
assert.equal(ffr(ffrParamRes[1][0]), ffrParamRes[1][1]);
```

`ffr(100)` は`5764`を返す必要があります。

```js
assert.equal(ffr(ffrParamRes[2][0]), ffrParamRes[2][1]);
```

`ffr(1000)` は`526334`を返す必要があります。

```js
assert.equal(ffr(ffrParamRes[3][0]), ffrParamRes[3][1]);
```

`ffs(10)` は`14`を返す必要があります。

```js
assert.equal(ffs(ffsParamRes[0][0]), ffsParamRes[0][1]);
```

`ffs(50)` は `59`を返す必要があります。

```js
assert.equal(ffs(ffsParamRes[1][0]), ffsParamRes[1][1]);
```

`ffs(100)` は `112`を返す必要があります。

```js
assert.equal(ffs(ffsParamRes[2][0]), ffsParamRes[2][1]);
```

`ffs(1000)` は`1041`を返す必要があります。

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
