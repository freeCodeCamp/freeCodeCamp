---
id: 5900f3901000cf542c50fea3
title: '問題 36: 2 種類の基数の回文'
challengeType: 1
forumTopicId: 302020
dashedName: problem-36-double-base-palindromes
---

# --description--

10 進数 585 = 1001001001001<sub>2</sub> (2 進数) は、両方の基数で回文になります。

1000 ≤ `n` ≤ 1000000 のとき、10 進法と 2 進法で回文になる `n` 未満の数の総和を求めなさい。

(注: いずれの基数でも、回文数には先行ゼロを使えません。)

# --hints--

`doubleBasePalindromes(1000)` は数値を返す必要があります。

```js
assert(typeof doubleBasePalindromes(1000) === 'number');
```

`doubleBasePalindromes(1000)` は 1772 を返す必要があります。

```js
assert(doubleBasePalindromes(1000) == 1772);
```

`doubleBasePalindromes(50000)` は 105795 を返す必要があります。

```js
assert(doubleBasePalindromes(50000) == 105795);
```

`doubleBasePalindromes(500000)` は 286602 を返す必要があります。

```js
assert(doubleBasePalindromes(500000) == 286602);
```

`doubleBasePalindromes(1000000)` は 872187 を返す必要があります。

```js
assert(doubleBasePalindromes(1000000) == 872187);
```

# --seed--

## --seed-contents--

```js
function doubleBasePalindromes(n) {

  return n;
}

doubleBasePalindromes(1000000);
```

# --solutions--

```js
// solution required
```
