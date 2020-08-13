---
id: 5900f49a1000cf542c50ffac
challengeType: 5
title: 'Problem 300: Protein folding'
videoUrl: ''
localeTitle: 问题300：蛋白质折叠
---

## Description
<section id="description">
以一种非常简化的形式，我们可以将蛋白质视为由疏水（H）和极性（P）元素（例如HHPPHHHPHHPH。
对于这个问题，蛋白质的方向很重要。例如HPP被认为与PPH不同。因此，存在2n个由n个元素组成的不同蛋白质。

当人们自然地遇到这些弦时，它们总是以H-H接触点的数量尽可能多的方式折叠，因为这在能量上是有利的。
结果，H元素倾向于在内部积累，而P元素在外部。
天然蛋白质当然会在三个维度上折叠，但我们只会考虑蛋白质在两个维度上的折叠。

下图显示了我们的示例蛋白质可以折叠的两种可能方式（H-H接触点用红色圆点显示）。



左侧的折叠只有六个H-H接触点，因此永远不会自然发生。
另一方面，右侧的折叠具有9个H-H接触点，这对于此琴弦是最佳的。

假设H和P元素同样可能出现在沿着字符串的任何位置，那么长度为8的随机蛋白质字符串最优折叠中H-H接触点的平均数量为850/28 = 3.3203125。

在最佳折叠长度为15的随机蛋白质串中，H-H接触点的平均数量是多少？
要获得准确的结果，请使用尽可能多的小数位给出答案。
</section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler300()</code>应该返回8.0540771484375。
    testString: assert.strictEqual(euler300(), 8.0540771484375);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler300() {
  // Good luck!
  return true;
}

euler300();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
