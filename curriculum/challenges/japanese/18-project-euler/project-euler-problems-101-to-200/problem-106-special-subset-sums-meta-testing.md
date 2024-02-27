---
id: 5900f3d71000cf542c50fee9
title: '問題 106: 特殊和部分集合: メタ検証'
challengeType: 1
forumTopicId: 301730
dashedName: problem-106-special-subset-sums-meta-testing
---

# --description--

大きさが n である集合 A の要素の和を、$S(A)$ で表します。 空でなく互いに素な 2 つの部分集合 B と C について、次の性質が真の場合、それを「特殊和集合」と呼ぶことにします。

1. $S(B) ≠ S(C)$ である。すなわち、部分集合の和が等しくてはならない。
2. B が C より多くの要素を含むとき、$S(B) > S(C)$ である。

この問題では、与えられた集合が n 個の狭義単調増加要素を含み、上の 2 つ目のルールに沿っていると仮定します。

意外ですが、n = 4 の集合から得られる 25 個の可能な部分集合の対のうち、等価性の検証が必要なものは 1 つだけです (1 つ目のルール)。 同様に、n = 7 のとき、966 個の部分集合の対のうち検証が必要なものは 70 個だけです。

N = 12 のとき、得られる 261625 個の部分集合の対のうち、等価性の検証が必要なものはいくつありますか。

**注:** この問題は、問題 103 および問題 105 と関連しています。

# --hints--

`subsetSumsMetaTesting()` は `21384` を返す必要があります。

```js
assert.strictEqual(subsetSumsMetaTesting(), 21384);
```

# --seed--

## --seed-contents--

```js
function subsetSumsMetaTesting() {

  return true;
}

subsetSumsMetaTesting();
```

# --solutions--

```js
// solution required
```
