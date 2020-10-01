---
id: 5900f4761000cf542c50ff88
challengeType: 5
videoUrl: ''
title: 问题265：二进制圆圈
---

## Description
<section id="description"> 2N二进制数字可以放在一个圆圈中，这样所有N位顺时针子序列都是不同的。 <p>对于N = 3，两个这样的圆形布置是可能的，忽略旋转： </p><p>对于第一种布置，顺时针顺序的3位子序列是：000,001,010,101,011,111,110和100。 </p><p>通过将以全零的子序列开始的二进制数字连接为最高有效位并顺时针进行，可以将每个循环排列编码为数字。因此，N = 3的两种排列表示为23和29：00010111 2 = 23 00011101 2 = 29 </p><p>调用S（N）唯一数值表示的总和，我们可以看到S（3）= 23 + 29 = 52。 </p><p>找到S（5）。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler265()</code>应该返回209110240768。
    testString: assert.strictEqual(euler265(), 209110240768);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler265() {
  // Good luck!
  return true;
}

euler265();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
