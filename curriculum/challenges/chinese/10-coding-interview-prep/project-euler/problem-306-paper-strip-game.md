---
id: 5900f49f1000cf542c50ffb1
challengeType: 5
videoUrl: ''
title: 问题306：纸条游戏
---

## Description
<section id="description">
以下游戏是组合博弈论的经典示例：

两名玩家从n个白色方块开始，轮流交替进行。
在每个回合中，玩家选择两个连续的白色方块并将其涂成黑色。
第一个无法移动的玩家输了。

如果n = 1，则没有有效的移动，因此第一个玩家会自动失败。
如果n = 2，则只有一招有效，此后第二名玩家输了。
如果n = 3，则有两个有效的举动，但都留下第二个玩家输掉的情况。
如果n = 4，则第一个玩家有3个有效动作；她可以通过绘制两个中间方块来赢得比赛。
如果n = 5，则第一个玩家有四次有效移动（下面以红色显示）；但无论她做什么，第二名玩家（蓝色）都会获胜。



因此，对于1≤n≤5，有3个n值，第一位玩家可以对其施加强制胜利。
类似地，对于1≤n≤50，第一个玩家可以强制取胜的n值为40。

对于1≤n≤1 000 000，第一个玩家可以强制赢得多少n值？
</section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler306()</code>应该返回852938。
    testString: assert.strictEqual(euler306(), 852938);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler306() {
  // Good luck!
  return true;
}

euler306();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
