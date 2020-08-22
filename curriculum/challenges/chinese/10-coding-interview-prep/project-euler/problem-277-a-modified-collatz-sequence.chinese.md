---
id: 5900f4811000cf542c50ff94
challengeType: 5
title: 'Problem 277: A Modified Collatz sequence'
videoUrl: ''
localeTitle: 问题277：修改的Collat​​z序列
---

## Description
<section id="description">通过以下方式从起始值a1获得修改的整数Collat​​z序列： <p>如果a可以被3整除，则a + 1 = an / 3.我们将此表示为一个大的向下步骤，“D”。 </p><p>如果除以3得到1的余数，则a + 1 =（4an + 2）/ 3。我们将其称为向上步骤“U”。 </p><p>如果除以3得到余数为2，则a + 1 =（2an-1）/ 3.我们将这表示为一个小的向下步骤，“d”。 </p><p>当某些a = 1时，序列终止。 </p><p>给定任何整数，我们可以列出步骤的顺序。例如，如果a1 = 231，则序列{an} = {231,77,51,17,11,7,10,14,9,3,1}对应于步骤“DdDddUUdDD”。 </p><p>当然，还有其他序列以相同的序列“DdDddUUdDD ....”开头。例如，如果a1 = 1004064，则序列为DdDddUUdDDDdUDUUUdDdUUDDDUdDD。实际上，1004064是以序列DdDddUUdDD开头的最小可能a1&gt; 106。 </p><p>从序列“UDDDUdddDDUDDddDdDddDDUDDdUUDd”开始的最小a1&gt; 1015是多少？ </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler277()</code>应该返回1125977393124310。
    testString: assert.strictEqual(euler277(), 1125977393124310);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler277() {
  // Good luck!
  return true;
}

euler277();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
