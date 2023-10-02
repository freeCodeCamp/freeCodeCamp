---
id: 5900f4bd1000cf542c50ffce
title: '問題 335: 豆を集める'
challengeType: 1
forumTopicId: 301993
dashedName: problem-335-gathering-the-beans
---

# --description--

ピーターは退屈に感じるたびに、ボウルをいくつか置き、それぞれに 1 つ豆を入れて円形に並べます。 この後、ある 1 つのボウルからすべての豆を取り出し、右回りに 1つずつボウルに落としていきます。 最後の豆を落としたボウルから再び同じことをします。これを、最初の状態に戻るまで繰り返します。 例えば 5 つのボウルでは次のようにします。

<img class="img-responsive center-block" alt="5 つのボウルに豆を動かすアニメーション" src="https://cdn.freecodecamp.org/curriculum/project-euler/gathering-the-beans.gif" style="background-color: white; padding: 10px;" />

したがって、ボウルが 5 つの場合、最初の状況に戻るまでに豆を 15 回動かします。

$x$ 個のボウルで始めて最初の状況に戻るまでに必要な移動回数を、$M(x)$ とします。 したがって、$M(5) = 15$ です。 $M(100) = 10920$ であることも確認できます。

$\displaystyle\sum_{k = 0}^{{10}^{18}} M(2^k + 1)$ を求めなさい。 mod $7^9$ で答えること。

# --hints--

`gatheringTheBeans()` は `5032316` を返す必要があります。

```js
assert.strictEqual(gatheringTheBeans(), 5032316);
```

# --seed--

## --seed-contents--

```js
function gatheringTheBeans() {

  return true;
}

gatheringTheBeans();
```

# --solutions--

```js
// solution required
```
