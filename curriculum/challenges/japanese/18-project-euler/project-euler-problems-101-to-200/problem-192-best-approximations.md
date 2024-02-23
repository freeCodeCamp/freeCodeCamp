---
id: 5900f42c1000cf542c50ff3f
title: '問題 192: 最良近似'
challengeType: 1
forumTopicId: 301830
dashedName: problem-192-best-approximations
---

# --description--

$x$ を実数とします。

分母の上限が $d$ のとき、$x$ に対する最良近似は、$\frac{r}{s}$ より $x$ に近い任意の有理数の分母が $d$ より大きくなるような、既約の有理数 $\frac{r}{s}$ (ここで $s ≤ d$) です。

すなわち、$$|\frac{p}{q} - x| &lt; |\frac{r}{s} - x| ⇒ q > d$$ です。

例えば、分母の上限が $20$ のとき、$\sqrt{13}$ の最良近似は $\frac{18}{5}$ であり、分母の上限が $30$ のとき、$\sqrt{13}$ の最良近似は $\frac{101}{28}$ です。

$n$ が完全平方数でなく、かつ $1 &lt; n ≤ 100000$ であるとします。分母の上限が ${10}^{12}$ のとき、$\sqrt{n}$ の最良近似の分母の総和を求めなさい。

# --hints--

`bestApproximations()` は `57060635927998344` を返す必要があります。

```js
assert.strictEqual(bestApproximations(), 57060635927998344);
```

# --seed--

## --seed-contents--

```js
function bestApproximations() {

  return true;
}

bestApproximations();
```

# --solutions--

```js
// solution required
```
