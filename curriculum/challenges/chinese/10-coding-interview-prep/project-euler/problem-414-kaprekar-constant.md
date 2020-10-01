---
id: 5900f50b1000cf542c51001d
challengeType: 5
videoUrl: ''
title: 问题414：标题常量
---

## Description
<section id="description"> 6174是一个了不起的数字;如果我们按递增顺序对其数字进行排序，并从按降序排序数字时得到的数字中减去该数字，我们得到7641-1467 = 6174。更值得注意的是，如果我们从任何4位数字开始并重复这个排序和减法过程，我们最终将以6174结束或者如果所有数字相等则立即结束0。如果我们用前导零填充数字直到我们有4位数，这也适用于少于4位的数字。例如，让我们从数字0837开始：8730-0378 = 8352 8532-2358 = 6174 <p> 6174被称为Kaprekar常数。排序和减去并重复这一过程直到0或达到Kaprekar常数的过程称为Kaprekar例程。 </p><p>我们可以考虑其他基数和位数的Kaprekar例程。不幸的是，并不能保证在所有情况下都存在Kaprekar常数;例程可以在某个输入数字的循环中结束，或者例程到达的常数对于不同的输入数字可以是不同的。然而，可以证明，对于5位数并且基数b = 6t + 3≠9，存在Kaprekar常数。例如，基数15：（10,4,14,9,5）15基数21：（14,6,20,13,7）21 </p><p>将Cb定义为基数b中的Kaprekar常数，为5位数。如果i = Cb，则将函数sb（i）定义为0，或者如果i写入基数b，则由5个相同的数字组成，基数b中的Kaprekar例程到达Cb所需的迭代次数，否则</p><p>注意，我们可以为所有整数i &lt;b5定义sb（i）。如果我在基数b中写入少于5位数，则在应用Kaprekar例程之前，我们有5位数字，前面加零数字。 </p><p>将S（b）定义为0 &lt;i &lt;b5的sb（i）之和。例如S（15）= 5274369 S（111）= 400668930299 </p><p>找到S（6k + 3）的总和2≤k≤300。给出最后18位数字作为答案。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler414()</code>应该返回552506775824935500。
    testString: assert.strictEqual(euler414(), 552506775824935500);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler414() {
  // Good luck!
  return true;
}

euler414();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
