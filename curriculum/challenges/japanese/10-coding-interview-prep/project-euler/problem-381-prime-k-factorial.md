---
id: 5900f4ea1000cf542c50fffc
title: '問題 381: (素数-k) 階乗'
challengeType: 1
forumTopicId: 302045
dashedName: problem-381-prime-k-factorial
---

# --description--

素数 $p$ について、$1 ≤ k ≤ 5$ のとき $S(p) = (\sum (p - k)!)\bmod (p)$ が成り立つとします。

例えば、$p = 7$ のとき、次の式が成り立ちます。

$$(7 - 1)! + (7 - 2)! + (7 - 3)! + (7 - 4)! + (7 - 5)! = 6! + 5! + 4! + 3! + 2! = 720 + 120 + 24 + 6 + 2 = 872$$

$872\bmod (7) = 4$ なので $S(7) = 4$ となります。

$5 ≤ p &lt; 100$ のとき、$\sum S(p) = 480$ となることを確認できます。

$5 ≤ p &lt; {10}^8$ のとき、$\sum S(p)$ を求めなさい。

# --hints--

`primeKFactorial()` は`139602943319822` を返す必要があります。

```js
assert.strictEqual(primeKFactorial(), 139602943319822);
```

# --seed--

## --seed-contents--

```js
function primeKFactorial() {

  return true;
}

primeKFactorial();
```

# --solutions--

```js
// solution required
```
