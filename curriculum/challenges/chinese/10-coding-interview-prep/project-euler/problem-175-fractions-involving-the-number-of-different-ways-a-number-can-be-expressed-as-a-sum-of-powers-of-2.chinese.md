---
id: 5900f41c1000cf542c50ff2e
challengeType: 5
title: 'Problem 175: Fractions involving the number of different ways a number can be expressed as a sum of powers of 2'
videoUrl: ''
localeTitle: 问题175：涉及不同方式的数量的分数数字可以表示为2的幂的总和
---

## Description
<section id="description">将f（0）= 1和f（n）定义为将n作为2的幂之和进行写入的方式的数量，其中没有功率发生超过两次。 <p>例如，f（10）= 5因为有五种不同的表达方式10:10 = 8 + 2 = 8 + 1 + 1 = 4 + 4 + 2 = 4 + 2 + 2 + 1 + 1 = 4 + 4 + 1 + 1 </p><p>可以证明，对于每个分数p / q（p&gt; 0，q&gt; 0），存在至少一个整数n，使得f（n）/ f（n-1）= p / q。例如，f（n）/ f（n-1）= 13/17的最小n是241. 241的二进制扩展是11110001.从最高有效位到最低有效位读取这个二进制数有4个1，3个零和1个。我们将字符串4,3,1称为缩短的二进制扩展241.找到最小n的缩短二进制扩展，其中f（n）/ f（n-1）= 123456789/987654321。以逗号分隔的整数给出答案，没有任何空格。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>euler175()</code>应该返回1,13717420,8。'
    testString: assert.strictEqual(euler175(), 1, 13717420, 8);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler175() {
  // Good luck!
  return true;
}

euler175();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
