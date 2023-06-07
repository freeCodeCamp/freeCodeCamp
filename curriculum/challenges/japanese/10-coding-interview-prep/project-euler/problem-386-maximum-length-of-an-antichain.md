---
id: 5900f4ef1000cf542c510001
title: '問題 386: 反鎖の最大長'
challengeType: 1
forumTopicId: 302050
dashedName: problem-386-maximum-length-of-an-antichain
---

# --description--

$n$ を整数、 $S(n)$ を $n$ の約数の集合とします。

$A$ に要素が 1 つのみ含まれるか、または、$A$ のいずれの要素も $A$ の他の要素によって割り切れない場合、$S(n)$ の部分集合 $A$ は $S(n)$ の反鎖と呼ばれます。

例: $S(30) = \\{1, 2, 3, 5, 6, 10, 15, 30\\}$

$\\{2, 5, 6\\}$ は $S(30)$ の反鎖ではありません。

しかし $\\{2, 3, 5\\}$ は $S(30)$ の反鎖です。

$N(n)$ を $S(n)$ の反鎖の最大長とします。

$1 ≤ n ≤ {10}^8$ のとき、$\sum N(n)$ を求めなさい。

# --hints--

`maximumLengthOfAntichain()` は `528755790` を返す必要があります。

```js
assert.strictEqual(maximumLengthOfAntichain(), 528755790);
```

# --seed--

## --seed-contents--

```js
function maximumLengthOfAntichain() {

  return true;
}

maximumLengthOfAntichain();
```

# --solutions--

```js
// solution required
```
