---
id: 5900f3db1000cf542c50feec
challengeType: 5
videoUrl: ''
title: 问题109：飞镖
---

## Description
<section id="description">在飞镖游戏中，玩家在目标板上投掷三个飞镖，该目标板被分成二十个相等大小的部分，编号为一到二十。 <p>飞镖的得分由飞镖着陆区域的数量决定。红色/绿色外圈外的飞镖着陆得分为零。该戒指内的黑色和奶油色区域代表单个分数。然而，红色/绿色外圈和中圈分别得分为双倍和高音。在董事会的中心是两个同心圆，称为公牛区或公牛眼。外面的公牛价值25点，内部公牛是双倍，价值50点。规则有很多变化，但在最流行的游戏中，玩家将以301或501的分数开始，并且第一个将他们的总跑动总数减少到零的玩家是胜利者。然而，玩“双打”系统是正常的，这意味着玩家必须在他们的最终飞镖上获得双倍（包括在棋盘中央的双靶心）才能获胜;任何其他飞镖都会将他们的跑动总数减少到一个或更低意味着这组三个飞镖的得分是“半身像”。当玩家能够完成他们当前的分数时，它被称为“结账”，最高结账时间是170：T20 T20 D25（两个高音20和双牛）。有6种截然不同的结账方式，分数为6： </p><p> D3 </p><p> D1 D2 </p><p> S2 D2 </p><p> D2 D1 </p><p> S4 D1 </p><p> S1 S1 D2 S1 T1 D1 S1 S3 D1 D1 D1 D1 D1 S2 D1 S2 S2 D1 </p><p>请注意，D1 D2被认为与D2 D1不同，因为它们在不同的双打上完成。但是，组合S1 T1 D1被认为与T1 S1 D1相同。此外，我们不会在考虑组合时包含未命中数;例如，D3与0 D3和0 0 D3相同。令人难以置信的是，共有42336种不同的检查方式。玩家以低于100的分数结账有多少种不同的方式？ </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler109()</code>应返回38182。
    testString: assert.strictEqual(euler109(), 38182);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler109() {
  // Good luck!
  return true;
}

euler109();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
