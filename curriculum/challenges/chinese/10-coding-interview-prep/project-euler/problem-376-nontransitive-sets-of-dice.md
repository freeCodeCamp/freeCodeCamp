---
id: 5900f4e51000cf542c50fff7
challengeType: 5
videoUrl: ''
title: 问题376：不可传递的骰子集
---

## Description
<section id="description">考虑以下一组具有非标准点的骰子： <p>模具A：1 4 4 4 4 4模具B：2 2 2 5 5 5模具C：3 3 3 3 3 6 </p><p>两个玩家轮流挑选骰子并滚动它来玩游戏。赢得最高价值的玩家获胜。 </p><p>如果第一个玩家选择A和第二个玩家选择B，我们得到P（第二个玩家获胜）= 7/12&gt; 1/2 </p><p>如果第一个玩家选择死亡B并且第二个玩家选择死亡C我们得到P（第二个玩家获胜）= 7/12&gt; 1/2 </p><p>如果第一个玩家选择死C并且第二个玩家选择死A我们得到P（第二个玩家获胜）= 25/36&gt; 1/2 </p><p>因此，无论第一个玩家选择什么模特，第二个玩家都可以选择另一个模具并获得超过50％的获胜机会。具有此属性的一组骰子称为非传递骰子组。 </p><p>我们希望研究存在多少组非传递性骰子。我们将假设以下条件：有三个六面骰子，每边有1到N个点，包括1和N点。具有相同点数的骰子是相等的，无论骰子位于骰子的哪一侧。相同的点值可能出现在多个骰子上;如果两个玩家都滚动相同的值，则玩家不会获胜。骰子{A，B，C}，{B，C，A}和{C，A，B}的集合是相同的集合。 </p><p>对于N = 7，我们发现有9780个这样的集合。 N = 30有多少？ </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler376()</code>应该返回973059630185670。
    testString: assert.strictEqual(euler376(), 973059630185670);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler376() {
  // Good luck!
  return true;
}

euler376();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
