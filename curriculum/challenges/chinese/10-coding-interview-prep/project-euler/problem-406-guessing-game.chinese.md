---
id: 5900f5021000cf542c510015
challengeType: 5
title: 'Problem 406: Guessing Game'
videoUrl: ''
localeTitle: 问题406：猜猜游戏
---

## Description
<section id="description">我们试图通过提问来找到从整数集{1,2，...，n}中选择的隐藏数字。我们问的每个数字（问题），我们得到三个可能的答案之一：“你的猜测低于隐藏的数字”（并且你需要花费一个成本），或者“你的猜测高于隐藏的数字”（和你承担b）的费用，或“是的，就是这样！” （游戏结束）。给定n，a和b的值，最优策略最小化最坏情况下的总成本。 <p>例如，如果n = 5，a = 2，b = 3，那么我们可以先问“2”作为我们的第一个问题。 </p><p>如果我们被告知2高于隐藏号码（b = 3的成本），那么我们确定“1”是隐藏号码（总成本为3）。如果我们被告知2低于隐藏号码（a = 2的成本），那么我们的下一个问题将是“4”。如果我们被告知4高于隐藏号码（b = 3的成本），那么我们确定“3”是隐藏号码（总成本为2 + 3 = 5）。如果我们被告知4低于隐藏号码（a = 2的成本），那么我们确定“5”是隐藏号码（总成本为2 + 2 = 4）。因此，该策略实现的最坏情况成本为5.还可以证明这是可以实现的最低的最坏情况成本。所以，事实上，我们刚刚描述了给定n，a和b值的最优策略。 </p><p>设C（n，a，b）是针对给定n，a和b值的最优策略实现的最坏情况成本。 </p><p>以下是几个例子：C（5,2,3）= 5 C（500，√2，√3）= 13.22073197 ... C（20000,5,7）= 82 C（2000000，√5，√7 ）= 49.63755955 ...... </p><p>设Fk为斐波纳契数：Fk = Fk-1 + Fk-2，基本情况F1 = F2 =1.FindΣ1≤k≤30C（1012，√k，√Fk），并将答案四舍五入为8小数点后面的小数位数。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler406()</code>应返回36813.12757207。
    testString: assert.strictEqual(euler406(), 36813.12757207);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler406() {
  // Good luck!
  return true;
}

euler406();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
