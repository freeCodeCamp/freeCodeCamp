---
id: 5900f43e1000cf542c50ff4f
title: '問題 209: 循環論法'
challengeType: 1
forumTopicId: 301850
dashedName: problem-209-circular-logic
---

# --description--

$k$ 入力の 2 進真理値表は、$k$ 個の入力ビット (2 進数、0 [false] または 1 [true]) から 1 個の出力ビットへの写像です。 例えば、論理関数 $AND$ と $XOR$ に対する $2$ 入力の 2 進真理値表は次のとおりです。

| x | y | x AND y |
| - | - | ------- |
| 0 | 0 | 0       |
| 0 | 1 | 0       |
| 1 | 0 | 0       |
| 1 | 1 | 1       |

| x | y | x XOR y |
| - | - | ------- |
| 0 | 0 | 0       |
| 0 | 1 | 1       |
| 1 | 0 | 1       |
| 1 | 1 | 0       |

次の式を満たす $6$ 入力の 2 進真理値表 $τ$ はいくつありますか。

$$τ(a, b, c, d, e, f) \\; AND \\; τ(b, c, d, e, f, a \\; XOR \\; (b \\; AND \\; c)) = 0$$

ただし、すべての $6$ ビット入力 ($a$, $b$, $c$, $d$, $e$, $f$) についてこれを満たす必要があります。

# --hints--

`circularLogic()` は `15964587728784` を返す必要があります。

```js
assert.strictEqual(circularLogic(), 15964587728784);
```

# --seed--

## --seed-contents--

```js
function circularLogic() {

  return true;
}

circularLogic();
```

# --solutions--

```js
// solution required
```
