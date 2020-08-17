---
title: Harshad or Niven series
id: 595668ca4cfe1af2fb9818d4
challengeType: 5
videoUrl: ''
localeTitle: Harshad或Niven系列
---

## Description
<section id="description"><p> <a href="http://mathworld.wolfram.com/HarshadNumber.html" title="链接：http：//mathworld.wolfram.com/HarshadNumber.html">Harshad</a>或Niven数是正整数≥1，可以被它们的数字之和整除。 </p><p>例如，42是<a href="http://rosettacode.org/wiki/oeis:A005349" title="OEIS：A005349">Harshad数，</a>因为42可以被（4 + 2）整除而没有余数。 </p>假设系列被定义为按递增顺序排列的数字。任务： <p>实现一个函数来生成Harshad序列的连续成员。 </p><p>使用它列出序列的前20个成员并列出第一个大于1000的Harshad数。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>isHarshadOrNiven</code>是一个函数。
    testString: assert(typeof isHarshadOrNiven === 'function');
  - text: '<code>isHarshadOrNiven()</code>应该返回<code>{"firstTwenty": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, 20, 21, 24, 27, 30, 36, 40, 42],"firstOver1000": 1002}</code>'
    testString: assert.deepEqual(isHarshadOrNiven(), res);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function isHarshadOrNiven () {
  const res = {
    firstTwenty: [],
    firstOver1000: undefined
  };
  // Change after this line

  return res;
}

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
