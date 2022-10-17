---
id: 5900f5151000cf542c510028
title: '問題 425: 素数の親類関係'
challengeType: 1
forumTopicId: 302095
dashedName: problem-425-prime-connection
---

# --description--

2 つの正の整数 $A$ と $B$ が次の条件のいずれか 1 つを満たすとき、それらは親類関係にある ("$A ↔ B$" で表記) ものとします。

1. $A$ と $B$ の桁数が同じで、ちょうど 1 桁が異なる。例: 123 ↔ 173
2. $A$ (または $B$) の左側に 1 桁追加すると $B$ (または $A$) になる。例: 23 ↔ 223 および 123 ↔ 23

親類関係にある素数の連鎖が 2 と 素数 $P$ の間にあり、その連鎖の中に $P$ を超える素数がないとき、$P$ を 2 の親類と呼ぶことにします。

例えば、127 は 2 の親類です。 考えられる連鎖の一つを次に示します。

$$2 ↔ 3 ↔ 13 ↔ 113 ↔ 103 ↔ 107 ↔ 127$$

しかし、11 と 103 は 2 の親類ではありません。

2 の親類ではない N 以下の素数の和を $F(N)$ とします。 $F({10}^3) = 431$, $F({10}^4) = 78\\,728$ であることを確認できます。

$F({10}^7)$ を求めなさい。

# --hints--

`primeConnection()` は `46479497324` を返す必要があります。

```js
assert.strictEqual(primeConnection(), 46479497324);
```

# --seed--

## --seed-contents--

```js
function primeConnection() {

  return true;
}

primeConnection();
```

# --solutions--

```js
// solution required
```
