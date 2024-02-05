---
id: 5900f5471000cf542c510059
title: '問題 474: 約数の下位桁'
challengeType: 1
forumTopicId: 302151
dashedName: problem-474-last-digits-of-divisors
---

# --description--

正の整数 $n$ と桁の数字 $d$ について、$n$ の約数のうち下位桁が $d$ と等しいものの個数を $F(n, d)$ と定義します。

例えば、$F(84, 4) = 3$ です。 84 の約数 (1, 2, 3, 4, 6, 7, 12, 14, 21, 28, 42, 84) のうち、最下位の桁が 4 であるのは 3 つ (4, 14, 84) だからです。

$F(12!, 12) = 11$, $F(50!, 123) = 17\\,888$ であることも確認できます。

$F({10}^6!, 65\\,432) \text{ mod } ({10}^{16} + 61)$ を求めなさい。

# --hints--

`lastDigitsOfDivisors()` は `9690646731515010` を返す必要があります。

```js
assert.strictEqual(lastDigitsOfDivisors(), 9690646731515010);
```

# --seed--

## --seed-contents--

```js
function lastDigitsOfDivisors() {

  return true;
}

lastDigitsOfDivisors();
```

# --solutions--

```js
// solution required
```
