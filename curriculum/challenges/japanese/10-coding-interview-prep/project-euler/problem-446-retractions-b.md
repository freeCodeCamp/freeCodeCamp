---
id: 5900f52c1000cf542c51003d
title: '問題 446: レトラクション B'
challengeType: 1
forumTopicId: 302118
dashedName: problem-446-retractions-b
---

# --description--

$n > 1$ のすべての整数について、関数族 $f_{n, a, b}$ を次のように定義します。

整数 $a, b, x$ および $0 \lt a \lt n$, $0 \le b \lt n$, $0 \le x \lt n$ について、$f_{n, a, b}(x) ≡ ax + b\bmod n$

$0 \le x \lt n$ のすべてにおいて、$f_{n, a, b}(f_{n, a, b}(x)) \equiv f_{n, a, b}(x)\bmod n$ のとき、$f_{n, a, b}$ をレトラクションと呼ぶことにします。

$n$ のレトラクションの個数を $R(n)$ とします。

$F(N) = \displaystyle\sum_{n = 1}^N R(n^4 + 4)$

$F(1024) = 77\\,532\\,377\\,300\\,600$

$F({10}^7)$ を求めなさい。 mod $1\\,000\\,000\\,007$ で答えること。

# --hints--

`retractionsB()` は `907803852` を返す必要があります。

```js
assert.strictEqual(retractionsB(), 907803852);
```

# --seed--

## --seed-contents--

```js
function retractionsB() {

  return true;
}

retractionsB();
```

# --solutions--

```js
// solution required
```
