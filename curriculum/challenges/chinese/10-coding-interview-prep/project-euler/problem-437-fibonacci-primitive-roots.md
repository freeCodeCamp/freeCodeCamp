---
id: 5900f5241000cf542c510036
challengeType: 5
videoUrl: ''
title: 问题437：斐波那契原始根
---

## Description
<section id="description">当我们计算8n模11为n = 0到9时，我们得到：1,8,9,6,4,10,3,2,5,7。我们看到所有可能的值从1到10出现。所以8是11的原始根。但还有更多：如果我们仔细看看，我们看到：1 + 8 = 9 8 + 9 =17≡6mod11 9 + 6 =15≡4mod11 6 + 4 = 10 4 + 10 =14≡3mod11 10 + 3 =13≡2mod11 3 + 2 = 5 2 + 5 = 7 5 + 7 =12≡1mod11。 <p>因此，8 mod 11的幂是循环的，具有周期10，并且8n + 8n +1≡8n+ 2（mod 11）。 8被称为11的斐波那契原始根。不是每个素数都有斐波那契原始根。有一个或多个Fibonacci原始根有323个小于10000的素数，这些素数的总和是1480491.用至少一个Fibonacci原始根找到小于100,000,000的素数之和。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler437()</code>应该返回74204709657207。
    testString: assert.strictEqual(euler437(), 74204709657207);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler437() {
  // Good luck!
  return true;
}

euler437();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
