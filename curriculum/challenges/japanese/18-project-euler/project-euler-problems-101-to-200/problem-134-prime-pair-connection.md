---
id: 5900f3f21000cf542c50ff05
title: '問題 134: 素数ペアのつながり'
challengeType: 1
forumTopicId: 301762
dashedName: problem-134-prime-pair-connection
---

# --description--

連続する素数 $p_1 = 19$ と $p_2 = 23$ について考えます。 1219 は下位の数字が $p_1$ であり、かつ、$p_2$ によって割り切れる最小の数であることを確認できます。

実際、$p_1 = 3$ と $p_2 = 5$ を除くと、連続する素数 ($p_2 > p_1$) のすべてのペアに対して、下位の桁が $p_1$ であり $n$ が$p_2$ で割り切れるような $n$ の値が存在します。 これらの $n$ の最小値を $S$ とします。

$5 ≤ p_1 ≤ 1000000$ のとき、連続する素数の全ペアの $\sum{S}$ を求めなさい。

# --hints--

`primePairConnection()` は `18613426663617120` を返す必要があります。

```js
assert.strictEqual(primePairConnection(), 18613426663617120);
```

# --seed--

## --seed-contents--

```js
function primePairConnection() {

  return true;
}

primePairConnection();
```

# --solutions--

```js
// solution required
```
