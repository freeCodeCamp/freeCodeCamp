---
id: 5900f4811000cf542c50ff94
title: '問題 277: 変形コラッツ数列'
challengeType: 1
forumTopicId: 301927
dashedName: problem-277-a-modified-collatz-sequence
---

# --description--

整数の変形コラッツ列は、開始値 $a_1$ から次のようにして得られます。

$a_n$ が 3 で割り切れる場合、$a_{n + 1} = \frac{a_n}{3}$ です。 これを、大きな下向きのステップ "D"と表すことにします。

$a_n$ を 3 で割ると 1 余る場合、$a_{n + 1} = \frac{4a_n + 2}{3}$ です。 これを、大きな上向きのステップ "U" と表すことにします。

$a_n$ を 3 で割ると 2 余る場合、$a_{n + 1} = \frac{2a_n - 1}{3}$ です。 これを、小さな下向きのステップ "d" と表すことにします。

この数列は $a_n = 1$ のときに終了します。

任意の整数について、ステップの数列を列挙できます。 例えば $a_1 = 231$ の場合、数列 $\\{a_n\\} = \\{231, 77, 51, 17, 11, 7, 10, 14, 9, 3, 1\\}$ は "DdDddUUdDD" に相当します。

もちろん、同じ数列 "DdDddUUdDD...." で始まる数列は他にもあります。

例えば、$a_1 = 1004064$ の場合、数列は DdDddUUdDDDdUDUUUdDdUUDDDUdDD です。

実は、1004064 は数列 DdDddUUdDD から始まる最小の $a_1 > {10}^6$ です。

"UDDDUdddDDUDDddDdDddDDUDDdUUDd" で始まる最小の $a_1 > {10}^{15}$を求めなさい。

# --hints--

`modifiedCollatzSequence()` は `1125977393124310` を返す必要があります。

```js
assert.strictEqual(modifiedCollatzSequence(), 1125977393124310);
```

# --seed--

## --seed-contents--

```js
function modifiedCollatzSequence() {

  return true;
}

modifiedCollatzSequence();
```

# --solutions--

```js
// solution required
```
