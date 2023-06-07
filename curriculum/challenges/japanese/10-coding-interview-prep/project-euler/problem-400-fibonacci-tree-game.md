---
id: 5900f4fe1000cf542c510010
title: '問題 400: フィボナッチ木ゲーム'
challengeType: 1
forumTopicId: 302067
dashedName: problem-400-fibonacci-tree-game
---

# --description--

フィボナッチ木とは、次のように再帰的に定義される二分木です。

- $T(0)$ は空木である。
- $T(1)$ は 1 つのノードのみを持つ二分木である。
- $T(k)$ は、$T(k - 1)$, $T(k - 2)$ を子ノードとして持つ根ノードからなる。

このような木構造上で 2 人のプレイヤーが削除ゲームをします。 各ターンでプレイヤーがノードを選び、そのノードと、それを根とする部分木を削除します。 木全体の根ノードを取らざるを得なくなったプレイヤーが負けです。

$k = 1$ から $k = 6$ までの $T(k)$ において、最初のターンで先手必勝となる手は次のとおりです。

<img class="img-responsive center-block" alt="k = 1 から k = 6 の木における、最初のターンでの先手必勝の手" src="https://cdn.freecodecamp.org/curriculum/project-euler/fibonacci-tree-game.png" style="background-color: white; padding: 10px;" />

$T(k)$ の木構造でゲームをするとき、最初のターンにおける先手必勝の手 (すなわち、後手がどのような戦略でも勝てなくなるような手) の数を $f(k)$ とします。

例えば、$f(5) = 1$, $f(10) = 17$ です。

$f(10000)$ を求めなさい。 回答は、下位 18 桁とすること。

# --hints--

`fibonacciTreeGame()` は `438505383468410600` を返す必要があります。

```js
assert.strictEqual(fibonacciTreeGame(), 438505383468410600);
```

# --seed--

## --seed-contents--

```js
function fibonacciTreeGame() {

  return true;
}

fibonacciTreeGame();
```

# --solutions--

```js
// solution required
```
