---
id: 5900f4b71000cf542c50ffca
challengeType: 5
videoUrl: ''
title: 问题331：交叉翻转
---

## Description
<section id="description"> N×N个盘放在方形游戏板上。每个磁盘都有黑色和白色。 <p>在每个回合中，您可以选择一个磁盘并翻转与该磁盘相同的行和同一列中的所有磁盘：因此翻转2×N-1个磁盘。当所有磁盘显示其白色边时，游戏结束。以下示例显示了5×5板上的游戏。 </p><p>可以证明3是完成这个游戏的最小转弯次数。 </p><p> N×N板上的左下盘具有坐标（0,0）;右下盘具有坐标（N-1,0），左上盘具有坐标（0，N-1）。 </p><p> CN为具有N×N个盘的板的以下配置：（x，y）处的盘满足，表示其黑色侧;否则，它显示其白色的一面。 C5如上所示。 </p><p>设T（N）是从配置CN开始完成游戏的最小圈数，如果配置CN不可解，则为0。我们已经证明T（5）= 3。你还得到T（10）= 29和T（1 000）= 395253。 </p><p>找 。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler331()</code>应该返回467178235146843500。
    testString: assert.strictEqual(euler331(), 467178235146843500);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler331() {
  // Good luck!
  return true;
}

euler331();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
