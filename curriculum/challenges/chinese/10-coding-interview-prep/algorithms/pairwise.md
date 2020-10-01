---
id: a3f503de51cfab748ff001aa
challengeType: 5
videoUrl: ''
title: 成对
---

## Description
<section id="description">给定一个数组<code>arr</code> ，找到其总和等于第二个参数<code>arg</code>元素对，并返回它们的索引之和。您可以使用具有相同数字元素但索引不同的多个对。每对应使用尽可能低的可用指数。一旦元素被使用，它就不能被重用来与另一个元素配对。例如， <code>pairwise([1, 1, 2], 3)</code>使用indice 0处的1而不是indice 1处的1创建一对<code>[2, 1]</code> ，因为0 + 2 &lt;1 + 2。例如， <code>pairwise([7, 9, 11, 13, 15], 20)</code>返回<code>6</code> 。总和为20的对是<code>[7, 13]</code>和<code>[9, 11]</code> 。然后我们可以用它们的索引和值写出数组。 <table class="table"><tbody><tr><th> <strong>指数</strong> </th><th> 0 </th><th> 1 </th><th> 2 </th><th> 3 </th><th> 4 </th></tr><tr><td>值</td><td> 7 </td><td> 9 </td><td> 11 </td><td> 13 </td><td> 15 </td></tr></tbody></table>下面我们将采用相应的索引并添加它们。 7 + 13 = 20→指数0 + 3 = 3 <br> 9 + 11 = 20→指数1 + 2 = 3 <br> 3 + 3 = 6→返回<code>6</code>如果卡住，请记住使用<a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> 。尝试配对程序。编写自己的代码。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>pairwise([1, 4, 2, 3, 0, 5], 7)</code>应该返回11。'
    testString: assert.deepEqual(pairwise([1, 4, 2, 3, 0, 5], 7), 11);
  - text: '<code>pairwise([1, 3, 2, 4], 4)</code>应该返回1。'
    testString: assert.deepEqual(pairwise([1, 3, 2, 4], 4), 1);
  - text: '<code>pairwise([1, 1, 1], 2)</code>应该返回1。'
    testString: assert.deepEqual(pairwise([1, 1, 1], 2), 1);
  - text: '<code>pairwise([0, 0, 0, 0, 1, 1], 1)</code>应返回10。'
    testString: assert.deepEqual(pairwise([0, 0, 0, 0, 1, 1], 1), 10);
  - text: '<code>pairwise([], 100)</code>应该返回0。'
    testString: assert.deepEqual(pairwise([], 100), 0);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function pairwise(arr, arg) {
  return arg;
}

pairwise([1,4,2,3,0,5], 7);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
