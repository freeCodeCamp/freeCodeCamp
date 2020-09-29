---
id: 5900f3781000cf542c50fe8b
challengeType: 5
title: 'Problem 12: Highly divisible triangular number'
videoUrl: ''
localeTitle: 问题12：高度可分的三角数
---

## Description
<section id="description">通过添加自然数生成三角数的序列。所以第7个三角形数字是1 + 2 + 3 + 4 + 5 + 6 + 7 = 28.前十个术语是： <div style="text-align: center;"> 1,3,6,10,15,21,28,36,45,55 ...... </div>让我们列出前七个三角形数字的因子： <div style="padding-left: 4em;"> <b>1：</b> 1 </div><div style="padding-left: 4em;"> <b>3：</b> 1,3 </div><div style="padding-left: 4em;"> <b>6：</b> 1,2,3,6 </div><div style="padding-left: 4em;"> <b>10：</b> 1,2,5,10 </div><div style="padding-left: 4em;"> <b>15：</b> 1,3,5,15 </div><div style="padding-left: 4em;"> <b>21：</b> 1,3,7,21 </div><div style="padding-left: 4em;"> <b>28：</b> 1,2,4,7,14,28 </div>我们可以看到28是第一个超过五个除数的三角形数。超过<code>n</code>除数的第一个三角形数的值是多少？ </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>divisibleTriangleNumber(5)</code>应该返回28。
    testString: assert.strictEqual(divisibleTriangleNumber(5), 28);
  - text: <code>divisibleTriangleNumber(23)</code>应该返回630。
    testString: assert.strictEqual(divisibleTriangleNumber(23), 630);
  - text: divisibleTriangleNumber <code>divisibleTriangleNumber(167)</code>应该返回1385280。
    testString: assert.strictEqual(divisibleTriangleNumber(167), 1385280);
  - text: divisibleTriangleNumber <code>divisibleTriangleNumber(374)</code>应该返回17907120。
    testString: assert.strictEqual(divisibleTriangleNumber(374), 17907120);
  - text: divisibleTriangleNumber <code>divisibleTriangleNumber(500)</code>应该返回76576500。
    testString: assert.strictEqual(divisibleTriangleNumber(500), 76576500);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function divisibleTriangleNumber(n) {
  // Good luck!
  return true;
}

divisibleTriangleNumber(500);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
