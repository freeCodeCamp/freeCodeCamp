---
id: 5900f4ba1000cf542c50ffcd
title: '問題 334: 豆をこぼす'
challengeType: 1
forumTopicId: 301992
dashedName: problem-334-spilling-the-beans
---

# --description--

プラトンの天国に、無数のボウルが一直線に並べられています。 各ボウルには、有限個の豆が 0 個またはいくつか入っています。 1 人の子供がゲームをします。そのゲームでは、任意のボウルから豆を 2 つ取って両隣のボウルに 1 つずつ入れるという、1 種類の移動だけが許されます。 いずれのボウルにも 1 個または 0 個の豆が入っているとき、ゲームは終了です。

例えば、隣り合う 2 つのボウルにそれぞれ 2 つと 3 つの豆が入っており、他のボウルがすべて空であるとします。 次の 8 回の移動でゲームが終了します。

<img class="img-responsive center-block" alt="animation of game when two adjacent bowls contain 2 and 3 beans respectively" src="https://cdn.freecodecamp.org/curriculum/project-euler/spilling-the-beans.gif" style="background-color: white; padding: 10px;" />

次の数列が与えられます。

$$\begin{align}   & t_0 = 123456, \\\\
  & t_i = \begin{cases}          \frac{t_{i - 1}}{2},               & \text{$t_{i - 1}$ が偶数の場合} \\\\
         \left\lfloor\frac{t_{i - 1}}{2}\right\rfloor \oplus 926252, & \text{$t_{i - 1}$ が奇数の場合}          \end{cases} \\\\
         & \qquad \text{ここで、$⌊x⌋$ は床関数、$\oplus$ はビット排他論理和演算子} \\\\ & b_i = (t_i\bmod 2^{11}) + 1 \end{align}$$

最後の数列に含まれる最初の 2 項は $b_1 = 289$ と $b_2 = 145$ です。 隣り合う 2 つのボウルでそれぞれ $b_1$ 個と $b_2$ 個の豆から始めると、ゲームを終えるまでに 3419100 回動かす必要があります。

隣り合う 1500 個のボウルにそれぞれ $b_1, b_2, \ldots, b_{1500}$ 個の豆が入っており、他のボウルはすべて空であるとします。 ゲームを終了させるのに必要な移動回数を求めなさい。

# --hints--

`spillingTheBeans()` は `150320021261690850` を返す必要があります。

```js
assert.strictEqual(spillingTheBeans(), 150320021261690850);
```

# --seed--

## --seed-contents--

```js
function spillingTheBeans() {

  return true;
}

spillingTheBeans();
```

# --solutions--

```js
// solution required
```
