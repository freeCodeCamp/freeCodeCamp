---
id: 5900f49b1000cf542c50ffae
title: '問題 303: 小さい数字からなる倍数'
challengeType: 1
forumTopicId: 301957
dashedName: problem-303-multiples-with-small-digits
---

# --description--

正の整数 $n$ について、$n$ の最小の正の倍数であり 10 進数表記で 2 以下の数字のみを使用する数を、$f(n)$ とします。

したがって、$f(2) = 2$, $f(3) = 12$, $f(7) = 21$, $f(42) = 210$, $f(89) = 1\\,121\\,222$ です。

また、$\displaystyle\sum_{n = 1}^{100} \frac{f(n)}{n} = 11\\,363\\,107$ です。

$\displaystyle\sum_{n = 1}^{10\\000} \frac{f(n)}{n} $ を求めなさい。

# --hints--

`multiplesWithSmallDigits()` は `1111981904675169` を返す必要があります。

```js
assert.strictEqual(multiplesWithSmallDigits(), 1111981904675169);
```

# --seed--

## --seed-contents--

```js
function multiplesWithSmallDigits() {

  return true;
}

multiplesWithSmallDigits();
```

# --solutions--

```js
// solution required
```
