---
id: 5900f4621000cf542c50ff74
title: '問題 245: 共役抵抗力'
challengeType: 1
forumTopicId: 301892
dashedName: problem-245-coresilience
---

# --description--

約分できない分数を「抵抗分数」 (resilient fraction) と呼ぶことにします。

さらに、分母の抵抗性 (resilience) を、その分母の真分数に対する抵抗分数の比率と定義して $R(d) と表します。例えば、$R(12) = \frac{4}{11}$ です。

そうすると数 $d > 1$ の抵抗性は $\frac{φ(d)}{d − 1}$ となります。ここで、$φ$ はオイラーのトーティエント関数です。

さらに、数 $n > 1$ の共役抵抗性を $C(n) = \frac{n − φ(n)}{n − 1}$ と定義します。

素数 $p$ の共役抵抗性は $C(p) = \frac{1}{p − 1}$です。

$1 &lt; n ≤ 2 × {10}^{11}$ のとき、$C(n)$ が単位分数となる合成整数 n の総和を求めなさい。

# --hints--

`coresilience()` は `288084712410001` を返す必要があります。

```js
assert.strictEqual(coresilience(), 288084712410001);
```

# --seed--

## --seed-contents--

```js
function coresilience() {

  return true;
}

coresilience();
```

# --solutions--

```js
// solution required
```
