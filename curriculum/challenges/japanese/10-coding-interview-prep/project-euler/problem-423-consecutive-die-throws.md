---
id: 5900f5141000cf542c510027
title: '問題 423: 連続サイコロ投げ'
challengeType: 1
forumTopicId: 302093
dashedName: problem-423-consecutive-die-throws
---

# --description--

$n$ を正の整数とします。

6 面サイコロを $n$ 回投げます。 連続する同じ出目の対がいくつあるかを $c$ で表します。

例えば、$n = 7$、サイコロの出目が (1, 1, 5, 6, 6, 6, 3) の場合、連続する同じ出目の対は次のとおりです。

$$\begin{align}   & (\underline{1}, \underline{1}, 5, 6, 6, 6, 3) \\\\
  & (1, 1, 5, \underline{6}, \underline{6}, 6, 3) \\\\ & (1, 1, 5, 6, \underline{6}, \underline{6}, 3) \end{align}$$

したがって、(1, 1, 5, 6, 6, 6, 3) のとき、$c = 3$ になります。

6 面サイコロを $n$ 回投げた結果のうち、$c$ が $π(n)$ を超えない結果の数を $C(n)$ とします<sup>1</sup>。

例えば、$C(3) = 216$, $C(4) = 1290$, $C(11) = 361\\,912\\,500$, $C(24) = 4\\,727\\,547\\,363\\,281\\,250\\,000$ です。

$1 ≤ n ≤ L$ のとき、$\sum C(n)$ を $S(L)$ と定義します。

例えば、$S(50)\bmod 1\\,000\\,000\\,007 = 832\\,833\\,871$ です。

$S(50\\,000\\,000)\bmod 1\\,000\\,000\\,007$ を求めなさい。

<sup>1</sup> $π$ は素数計数関数を意味します。すなわち、$π(n)$ は $n$ 以下の素数の数です。

# --hints--

`consecutiveDieThrows()` は `653972374` を返す必要があります。

```js
assert.strictEqual(consecutiveDieThrows(), 653972374);
```

# --seed--

## --seed-contents--

```js
function consecutiveDieThrows() {

  return true;
}

consecutiveDieThrows();
```

# --solutions--

```js
// solution required
```
