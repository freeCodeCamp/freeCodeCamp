---
id: 5900f4c21000cf542c50ffd4
title: '問題 340: クレイジー関数'
challengeType: 1
forumTopicId: 301999
dashedName: problem-340-crazy-function
---

# --description--

固定小数点整数 $a$, $b$, $c$ について、クレイジー関数 (crazy function) $F(n)$ を次のように定義します。

$$\begin{align}   & F(n) = n - c \\;\text{ (すべての } n > b \text{ に対して)}\\\\
  & F(n) = F(a + F(a + F(a + F(a + n)))) \\;\text{ (すべての } n ≤ b \text{ に対して)} \end{align}$$

また、$S(a, b, c) = \displaystyle\sum_{n = 0}^b F(n)$ と定義します。

例えば、$a = 50$, $b = 2000$, $c = 40$ の場合、$F(0) = 3240$, $F(2000) = 2040$ です。 また、$S(50, 2000, 40) = 5\\,204\\,240$ です。

$S({21}^7, 7^{21}, {12}^7)$ の下位 9 桁を求めなさい。

# --hints--

`crazyFunction()` は `291504964` を返す必要があります。

```js
assert.strictEqual(crazyFunction(), 291504964);
```

# --seed--

## --seed-contents--

```js
function crazyFunction() {

  return true;
}

crazyFunction();
```

# --solutions--

```js
// solution required
```
