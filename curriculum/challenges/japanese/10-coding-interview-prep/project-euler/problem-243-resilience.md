---
id: 5900f4601000cf542c50ff73
title: '問題 243: 抵抗力'
challengeType: 1
forumTopicId: 301890
dashedName: problem-243-resilience
---

# --description--

分子が分母より小さい正の分数は真分数と呼ばれます。

任意の分母 $d$ に対して $d−1$ 個の真分数があります。例えば、$d = 12$ の真分数は次のとおりです。

$$\frac{1}{12}, \frac{2}{12}, \frac{3}{12}, \frac{4}{12}, \frac{5}{12}, \frac{6}{12}, \frac{7}{12}, \frac{8}{12}, \frac{9}{12}, \frac{10}{12}, \frac{11}{12}$$

約分できない分数を「抵抗分数」 (resilient fraction) と呼ぶことにします。

さらに、分母の抵抗性 (resilience) を、その分母の真分数に対する抵抗分数の比率と定義して $R(d) と表します。例えば、$R(12) = \frac{4}{11}$ です。

実のところ $d = 12$ は、$R(d) &lt; \frac{4}{10} $ を満たす抵抗性を持つ最小の分母です。

$R(d) &lt; \frac{15\\,499}{94\\,744}$ を満たす抵抗性を持つ最小の分母 $d$ を求めなさい。

# --hints--

`resilience()` は `892371480` を返す必要があります。

```js
assert.strictEqual(resilience(), 892371480);
```

# --seed--

## --seed-contents--

```js
function resilience() {

  return true;
}

resilience();
```

# --solutions--

```js
// solution required
```
