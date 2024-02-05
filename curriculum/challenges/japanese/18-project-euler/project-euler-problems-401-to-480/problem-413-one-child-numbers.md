---
id: 5900f50a1000cf542c51001c
title: '問題 413: 一人っ子数'
challengeType: 1
forumTopicId: 302082
dashedName: problem-413-one-child-numbers
---

# --description--

$d$ 桁の正の数 (先行ゼロなし) の部分文字列のうちちょうど 1 つが $d$ で割り切れる場合、その正の数を「一人っ子数」と呼ぶことにします。

例えば、5671 は 4 桁の一人っ子数です。 すべての部分文字列 5, 6, 7, 1, 56, 67, 71, 567, 671, 5671 の中で、4 で割り切れるのは 56 のみです。

同様に、104 は 3 桁の 一人っ子数であり、3 で割り切れるのは 0 のみです。 また、1132451 は 7 桁の一人っ子数であり、7 で割り切れるのは 245 のみです。

$N$ 未満の一人っ子数の個数を $F(N)$ とします。 $F(10) = 9$, $F({10}^3) = 389$, $F({10}^7) = 277\\,674$ であることを確認できます。

$F({10}^{19})$ を求めなさい

# --hints--

`oneChildNumbers()` は `3079418648040719` を返す必要があります。

```js
assert.strictEqual(oneChildNumbers(), 3079418648040719);
```

# --seed--

## --seed-contents--

```js
function oneChildNumbers() {

  return true;
}

oneChildNumbers();
```

# --solutions--

```js
// solution required
```
