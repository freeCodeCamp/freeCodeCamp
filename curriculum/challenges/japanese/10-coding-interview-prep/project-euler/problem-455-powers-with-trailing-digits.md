---
id: 5900f5331000cf542c510046
title: '問題 455: 累乗の下位桁'
challengeType: 1
forumTopicId: 302129
dashedName: problem-455-powers-with-trailing-digits
---

# --description--

$n^x$ の下位 9 桁が $x$ (先行ゼロを含む) になるような ${10}^9$ 未満の最大の正の整数 $x$ を $f(n)$ とし、そのような整数が存在しないときはその関数の結果を 0 とします。

次に例を示します。

$$\begin{align}   & f(4) = 411\\,728\\,896 (4^{411\\,728\\,896} = ...490\underline{411728896}) \\\\
  & f(10) = 0 \\\\   & f(157) = 743\\,757 (157^{743\\,757} = ...567\underline{000743757}) \\\\
  & Σf(n), 2 ≤ n ≤ 103 = 442\\,530\\,011\\,399 \end{align}$$

$2 ≤ n ≤ {10}^6$ のとき、$\sum f(n)$ を求めなさい。

# --hints--

`powersWithTrailingDigits()` は `450186511399999` を返す必要があります。

```js
assert.strictEqual(powersWithTrailingDigits(), 450186511399999);
```

# --seed--

## --seed-contents--

```js
function powersWithTrailingDigits() {

  return true;
}

powersWithTrailingDigits();
```

# --solutions--

```js
// solution required
```
