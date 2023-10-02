---
id: 5900f4571000cf542c50ff69
title: '問題 234: 半整除可能な数'
challengeType: 1
forumTopicId: 301878
dashedName: problem-234-semidivisible-numbers
---

# --description--

整数 $n ≥ 4$ について、$n$ の「下位素数平方根 (lower prime square root)」を $lps(n)$ と表し、$\text{最大の素数} ≤ \sqrt{n}$ と定義します。また、$n$ の「上位素数平方根 (upper prime square root)」を $ups(n)$ と表し、$\text{最小の素数} ≥ \sqrt{n}$ と定義します。

例えば、$lps(4) = 2 = ups(4)$, $lps(1000) = 31$, $ups(1000) = 37$ です。

$lps(n)$ と $ups(n)$ の両方ではなくいずれか 1 つが $n$ の約数であるとき、整数 $n ≥4$ を「半整除可能 (semidivisible)」な数と呼ぶことにします。

15 以下の半整除可能な数は 8, 10, 12 で、それらの和は 30 です。 15 は $lps(15) = 3$ と $ups(15) = 5$ の倍数なので、半整除可能な数ではありません。 他の例としては、1000 以下の半整除可能な数は 92 個 あり、それらの和は 34825 です。

999966663333 以下の半整除可能な数の総和を求めなさい。

# --hints--

`semidivisibleNumbers()` は `1259187438574927000` を返す必要があります。

```js
assert.strictEqual(semidivisibleNumbers(), 1259187438574927000);
```

# --seed--

## --seed-contents--

```js
function semidivisibleNumbers() {

  return true;
}

semidivisibleNumbers();
```

# --solutions--

```js
// solution required
```
