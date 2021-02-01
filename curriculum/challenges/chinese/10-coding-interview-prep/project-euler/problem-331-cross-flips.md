---
id: 5900f4b71000cf542c50ffca
title: 问题331：交叉翻转
challengeType: 5
videoUrl: ''
dashedName: problem-331-cross-flips
---

# --description--

N×N个盘放在方形游戏板上。每个磁盘都有黑色和白色。

在每个回合中，您可以选择一个磁盘并翻转与该磁盘相同的行和同一列中的所有磁盘：因此翻转2×N-1个磁盘。当所有磁盘显示其白色边时，游戏结束。以下示例显示了5×5板上的游戏。

可以证明3是完成这个游戏的最小转弯次数。

N×N板上的左下盘具有坐标（0,0）;右下盘具有坐标（N-1,0），左上盘具有坐标（0，N-1）。

CN为具有N×N个盘的板的以下配置：（x，y）处的盘满足，表示其黑色侧;否则，它显示其白色的一面。 C5如上所示。

设T（N）是从配置CN开始完成游戏的最小圈数，如果配置CN不可解，则为0。我们已经证明T（5）= 3。你还得到T（10）= 29和T（1 000）= 395253。

找 。

# --hints--

`euler331()`应该返回467178235146843500。

```js
assert.strictEqual(euler331(), 467178235146843500);
```

# --seed--

## --seed-contents--

```js
function euler331() {

  return true;
}

euler331();
```

# --solutions--

```js
// solution required
```
