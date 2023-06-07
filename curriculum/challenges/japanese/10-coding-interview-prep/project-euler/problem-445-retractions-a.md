---
id: 5900f52a1000cf542c51003c
title: '問題 445: レトラクション A'
challengeType: 1
forumTopicId: 302117
dashedName: problem-445-retractions-a
---

# --description--

$n > 1$ のすべての整数について、関数族 $f_{n, a, b}$ は次のように定義されます。

整数 $a, b, x$ および $0 \lt a \lt n$, $0 \le b \lt n$, $0 \le x \lt n$ について、$f_{n, a, b}(x) ≡ ax + b\bmod n$

$0 \le x \lt n$ のすべてにおいて、$f_{n, a, b}(f_{n, a, b}(x)) \equiv f_{n, a, b}(x)\bmod n$ のとき、$f_{n, a, b}$ をレトラクションと呼ぶことにします。

$n$ のレトラクションの個数を $R(n)$ とします。

次が与えられます。

$$\sum_{k = 1}^{99\\,999} R(\displaystyle\binom{100\\,000}{k}) \equiv 628\\,701\\,600\bmod 1\\,000\\,000\\,007$$

$$\sum_{k = 1}^{9\\,999\\,999} R(\displaystyle\binom{10\\,000\\,000}{k})$$ を求め、mod $1\\,000\\,000\\,007$ で答えなさい。

# --hints--

`retractionsA()` は `659104042` を返す必要があります。

```js
assert.strictEqual(retractionsA(), 659104042);
```

# --seed--

## --seed-contents--

```js
function retractionsA() {

  return true;
}

retractionsA();
```

# --solutions--

```js
// solution required
```
