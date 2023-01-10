---
id: 5900f4331000cf542c50ff45
title: '問題 198: 曖昧数'
challengeType: 1
forumTopicId: 301836
dashedName: problem-198-ambiguous-numbers
---

# --description--

分母の上限が $d$ のとき、実数 $x$ に対する最良近似は、$\frac{r}{s}$ より $x$ に近い任意の有理数 $\frac{p}{q}$ が $q > d$ であるような (既約の) 有理数 $\frac{r}{s}$ (ここで $s ≤ d$) です。

通常、実数の最良近似は、すべての分母の上限に対して一意に決定されます。 ただし、いくつかの例外があります。例えば $\frac{9}{40}$ は、分母の上限が $6$ のとき、$\frac{1}{4}$ と $\frac{1}{5}$ の 2 つの最良近似を持ちます。 少なくとも 1 つの分母の上限について $x$ が 2 つの最良近似を持つ場合、実数 $x$ を「曖昧数」と呼ぶことにします。 明らかに、曖昧数は必ず有理数です。

$0 &lt; x &lt; \frac{1}{100}$ のとき、分母 $q$ が ${10}^8$ を超えない曖昧数 $x = \frac{p}{q}$ はいくつありますか。

# --hints--

`ambiguousNumbers()` は `52374425` を返す必要があります。

```js
assert.strictEqual(ambiguousNumbers(), 52374425);
```

# --seed--

## --seed-contents--

```js
function ambiguousNumbers() {

  return true;
}

ambiguousNumbers();
```

# --solutions--

```js
// solution required
```
