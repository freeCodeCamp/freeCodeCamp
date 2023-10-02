---
id: 5900f52c1000cf542c51003e
title: '問題 447: レトラクション C'
challengeType: 1
forumTopicId: 302119
dashedName: problem-447-retractions-c
---

# --description--

$n > 1$ のすべての整数について、関数族 $f_{n, a, b}$ を次のように定義します。

整数 $a, b, x$ および $0 \lt a \lt n$, $0 \le b \lt n$, $0 \le x \lt n$ について、$f_{n, a, b}(x) ≡ ax + b\bmod n$

$0 \le x \lt n$ のすべてにおいて、$f_{n, a, b}(f_{n, a, b}(x)) \equiv f_{n, a, b}(x)\bmod n$ のとき、$f_{n, a, b}$ をレトラクションと呼ぶことにします。

$n$ のレトラクションの個数を $R(n)$ とします。

$F(N) = \displaystyle\sum_{n = 2}^N R(n)$

$F({10}^7) ≡ 638\\,042\\,271\bmod 1\\,000\\,000\\,007$

$F({10}^{14})$ を求めなさい。 mod $1\\,000\\,000\\,007$ で答えること。

# --hints--

`retractionsC()` は `530553372` を返す必要があります。

```js
assert.strictEqual(retractionsC(), 530553372);
```

# --seed--

## --seed-contents--

```js
function retractionsC() {

  return true;
}

retractionsC();
```

# --solutions--

```js
// solution required
```
