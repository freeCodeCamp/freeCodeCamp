---
id: 5900f5371000cf542c51004a
title: 问题459：翻转游戏
challengeType: 5
videoUrl: ''
dashedName: problem-459-flipping-game
---

# --description--

翻转游戏是在N×N方板上玩的双人游戏。每个方块包含一面白色和一面黑色的圆盘。游戏开始时所有磁盘都显示白色。

转弯包括翻转具有以下属性的矩形中的所有磁盘：矩形的右上角包含一个白色圆盘，矩形宽度是一个完美的正方形（1,4,9,16，...），矩形高度为三角形数字（1,3,6,10 ......）

球员轮流转换。玩家通过将网格全黑变为胜利。

假设完美游戏，让W（N）为N×N板上第一个玩家的获胜动作数，所有盘都是白色的。 W（1）= 1，W（2）= 0，W（5）= 8，W（102）= 31395。

对于N = 5，第一个玩家的八个获胜第一步是：

找到W（106）。

# --hints--

`euler459()`应该返回3996390106631。

```js
assert.strictEqual(euler459(), 3996390106631);
```

# --seed--

## --seed-contents--

```js
function euler459() {

  return true;
}

euler459();
```

# --solutions--

```js
// solution required
```
