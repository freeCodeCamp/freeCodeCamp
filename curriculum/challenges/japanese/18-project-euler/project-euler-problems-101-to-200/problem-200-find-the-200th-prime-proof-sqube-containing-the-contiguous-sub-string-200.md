---
id: 5900f4351000cf542c50ff47
title: >-
  問題 200: 連続する部分文字列 "200" が含まれる、200 番目の素数耐性スクーブを求める
challengeType: 1
forumTopicId: 301840
dashedName: >-
  problem-200-find-the-200th-prime-proof-sqube-containing-the-contiguous-sub-string-200
---

# --description--

相異なる素数 $p$ と $q$ があるとき、${p^2}{q^3}$ で表される数を、スクエア (平方数) とキューブ (立方数) を合体させた「スクーブ」と呼ぶことにします。

例えば、$200 = {5^2}{2^3}$, $120072949 = {{23}^2}{{61}^3}$ です。

最初の 5 つのスクーブは 72, 108, 200, 392, 500 です。

興味深いことに、200 はいずれの 1 桁の数字を変えても素数にならない最小の数でもあります。このような性質を「素数耐性」と呼ぶことにします。 連続する部分文字列 `200` が含まれる、200 の次の素数耐性スクーブは 1992008 です。

連続する部分文字列 `200` が含まれる、200 番目の素数耐性スクーブを求めなさい。

# --hints--

`primeProofSqubeWithSubString()` は `229161792008` を返す必要があります 。

```js
assert.strictEqual(primeProofSqubeWithSubString(), 229161792008);
```

# --seed--

## --seed-contents--

```js
function primeProofSqubeWithSubString() {

  return true;
}

primeProofSqubeWithSubString();
```

# --solutions--

```js
// solution required
```
