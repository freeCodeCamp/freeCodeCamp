---
id: 5900f50c1000cf542c51001e
challengeType: 5
videoUrl: ''
title: 问题415：泰坦尼克号集
---

## Description
<section id="description">
如果存在一条直线恰好经过S中的两个点，则一组晶格点S称为钛酸组。

泰坦尼克集的示例是S = {（0，0），（0，1），（0，2），（1，1），（2，0），（1，0）}，其中 通过（0，1）和（2，0）的通道不会通过S中的任何其他点。

另一方面，集合{（0，0），（1，1），（2，2），（4，4）}不是泰坦尼克号集合，因为穿过集合中任意两点的线也经过 通过其他两个。

对于任何正整数N，令T（N）为每个点（x，y）都满足0≤x，y≤N的钛酸集合S的数量。
可以验证T（1）= 11，T（2）= 494，T（4）= 33554178，T（111）mod 108 = 13500401和T（105）mod 108 = 63259062。

找出T（1011）mod 108。
</section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler415()</code>应该返回55859742。
    testString: assert.strictEqual(euler415(), 55859742);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler415() {
  // Good luck!
  return true;
}

euler415();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
