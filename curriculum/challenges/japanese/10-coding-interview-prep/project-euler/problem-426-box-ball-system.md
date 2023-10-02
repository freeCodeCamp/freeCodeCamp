---
id: 5900f5171000cf542c510029
title: '問題 426: 箱玉系'
challengeType: 1
forumTopicId: 302096
dashedName: problem-426-box-ball-system
---

# --description--

無限に並べられた箱について考えます。 いくつかの箱には玉が入っています。 例えば、玉入りの箱が 2 個連続し、その後に空箱が 2 個、玉入りの箱が 2 個、空箱が 1 個、玉入りの箱が 2 個並んでいる初期配置は、数列 (2, 2, 2, 1, 2) と表すことができます。これは、玉入りの箱の連続数と空箱の連続数とを交互に表したものです。

1 回の操作は、「まだ移動していない最も左にある玉を、その玉より右側の最も近い空箱に入れる」というルールに従って、それぞれの玉をちょうど 1 回移動させることです。

1 回の操作の後、下図のように数列 (2, 2, 2, 1, 2) が (2, 2, 1, 2, 3) になります。新たにできた数列が最初の玉入りの箱から始まっていることに注意してください。

<img class="img-responsive center-block" alt="(2, 2, 2, 1, 2) から (2, 2, 1, 2, 3) までの完全な操作を示すアニメーション" src="https://cdn.freecodecamp.org/curriculum/project-euler/box-ball-system-1.gif" style="background-color: white; padding: 10px;" />

このような系は箱玉系、または略して BBS (Box-Ball System) と呼ばれます。

この操作を十分に繰り返すと、玉入りの箱の連続数が一定となる状態へと箱玉系が発展することが分かっています。 下の例では、玉入りの箱の連続数が [1, 2, 3] に発展します。これを最終状態と呼ぶことにします。

<img class="img-responsive center-block" alt="玉入りの箱 [2, 2, 2] から最終状態 [1, 2, 3] までの 4 操作" src="https://cdn.freecodecamp.org/curriculum/project-euler/box-ball-system-2.gif" style="background-color: white; padding: 10px;" />

数列 $\\{t_i\\}$ を次のように定義します。

$$\begin{align}   & s_0 = 290\\,797 \\\\
  & s_{k + 1} = {s_k}^2\bmod 50\\,515\\,093 \\\\ & t_k = (s_k\bmod 64) + 1 \end{align}$$

初期配置 $(t_0, t_1, \ldots, t_{10})$ から開始すると、最終状態は [1, 3, 10, 24, 51, 75] となります。

初期配置 $(t_0, t_1, \ldots, t_{10\\,000\\,000})$ から開始したときの最終状態を求めなさい。

回答は、最終状態の各要素の 2 乗の和とすること。 例えば、最終状態が [1, 2, 3] のとき、回答は $14 (= 1^2 + 2^2 + 3^2)$ となります。

# --hints--

`boxBallSystem()` は `31591886008` を返す必要があります。

```js
assert.strictEqual(boxBallSystem(), 31591886008);
```

# --seed--

## --seed-contents--

```js
function boxBallSystem() {

  return true;
}

boxBallSystem();
```

# --solutions--

```js
// solution required
```
