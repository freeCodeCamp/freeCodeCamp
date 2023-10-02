---
id: 5900f4d61000cf542c50ffe9
title: '問題 362: 無平方因数'
challengeType: 1
forumTopicId: 302023
dashedName: problem-362-squarefree-factors
---

# --description--

54 という数について考えます。

1 より大きい因数を 1 つ以上使って 54 を因数分解する方法は、次のように 7 通りあります。

$$54, 2 × 27, 3 × 18, 6 × 9, 3 × 3 × 6, 2 × 3 × 9, \text{ および } 2 × 3 × 3 × 3$$

すべての因数は無平方因数でなければならないとした場合、$3 × 3 × 3$ と $2 × 3 × 3$ の 2 通りに限定されます。

1 より大きい、かつ無平方因数を 1 つ以上使って $n$ を因数分解できる方法の数を $Fsf(n)$ とします。したがって、$Fsf(54) = 2$ です。

2 から $n$ までの $k$ について、$S(n)$ を $\sum Fsf(k)$ とします。

$S(100) = 193$ です。

$S(10\\,000\\,000\\,000)$ を求めなさい。

# --hints--

`squarefreeFactors()` は `457895958010` を返す必要があります。

```js
assert.strictEqual(squarefreeFactors(), 457895958010);
```

# --seed--

## --seed-contents--

```js
function squarefreeFactors() {

  return true;
}

squarefreeFactors();
```

# --solutions--

```js
// solution required
```
