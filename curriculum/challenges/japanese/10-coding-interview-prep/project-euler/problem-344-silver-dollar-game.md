---
id: 5900f4c51000cf542c50ffd7
title: '問題 344: 銀貨ゲーム'
challengeType: 1
forumTopicId: 302003
dashedName: problem-344-silver-dollar-game
---

# --description--

One variant of N.G. de Bruijn's silver dollar game can be described as follows:

マスが並ぶ細長い盤上に硬貨が何枚か置かれています (1 マスにたかだか 1 枚)。 銀貨 (1 ドル硬貨) と呼ばれる 1 枚しかない硬貨に、任意の価値があります。 2 人のプレイヤーが交互にプレイします。 各ターンで、プレイヤーは通常の移動または特別な移動を行う必要があります。

通常の移動とは、硬貨を 1 枚 選び、それを 1 マス以上左へ動かすことです。 硬貨を盤の外に出したり、他のコインの上に置いたり、その上を飛び越えさせたりすることはできません。

あるいは、通常の移動ではなく、左端の硬貨を取り自分がもらうという特殊な移動を選ぶこともできます。 通常の移動が不可能であれば、必然的に左端の硬貨をもらうことになります。

銀貨を手に入れたプレイヤーが勝者です。

<img class="img-responsive center-block" alt="銀貨ゲーム" src="https://cdn.freecodecamp.org/curriculum/project-euler/silver-dollar-game.gif" style="background-color: white; padding: 10px;" />

後手が何をしようが先手が必ず勝てるような硬貨の配列を、「勝利構成」と呼びます。

$n$ 個のマス、$c$ 枚の無価値硬貨、および 1 枚の銀貨を使用する場合の勝利構成の数を、$W(n, c)$ とします。

$W(10, 2) = 324$, $W(100, 10) = 1\\,514\\,704\\,946\\,113\\,500$ が与えられます。

$W(1\\,000\\,000, 100)$ を求め、半素数 $1000\\,036\\,000\\,099 (= 1\\,000\\,003 \times 1\\,000\\,033)$ で割った余りを答えなさい。

# --hints--

`silverDollarGame()` は `65579304332` を返す必要があります。

```js
assert.strictEqual(silverDollarGame(), 65579304332);
```

# --seed--

## --seed-contents--

```js
function silverDollarGame() {

  return true;
}

silverDollarGame();
```

# --solutions--

```js
// solution required
```
