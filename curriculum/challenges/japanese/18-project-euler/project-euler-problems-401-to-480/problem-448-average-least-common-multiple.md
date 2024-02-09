---
id: 5900f52c1000cf542c51003f
title: '問題 448: 平均最小公倍数'
challengeType: 1
forumTopicId: 302120
dashedName: problem-448-average-least-common-multiple
---

# --description--

関数 $lcm(a, b)$ は $a$ と $b$ の最小公倍数を表します。

$1 ≤ i ≤ n$ のとき、$lcm(n, i)$ の値の平均を $A(n)$ とします。

例: $A(2) = \frac{2 + 2}{2} = 2$ および $A(10) = \frac{10 + 30 + 20 + 30 + 70 + 40 + 90 + 10}{10} = 32$

$1 ≤ k ≤ n$ のとき、$S(n) = \sum A(k)$ とします。

$S(100) = 122\\,726$

$S(99\\,999\\,999\\,019)\bmod 999\\,999\\,017$ を求めなさい。

# --hints--

`averageLCM()` は `106467648` を返す必要があります。

```js
assert.strictEqual(averageLCM(), 106467648);
```

# --seed--

## --seed-contents--

```js
function averageLCM() {

  return true;
}

averageLCM();
```

# --solutions--

```js
// solution required
```
