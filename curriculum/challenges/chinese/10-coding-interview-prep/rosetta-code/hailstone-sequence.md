---
id: 595608ff8bcd7a50bd490181
challengeType: 5
videoUrl: ''
title: 冰雹序列
---

## Description
<section id="description"><p> Hailstone数字序列可以从起始正整数n生成： </p>如果n为1，则序列结束。如果n是偶数，那么序列的下一个n <code>= n/2</code>如果n是奇数，那么序列的下一个n <code>= (3 * n) + 1</code> <p> （未经证实的） <a href="https://en.wikipedia.org/wiki/Collatz conjecture" title="wp：Collat​​z猜想">Collat​​z猜想</a>是任何起始编号的冰雹序列总是终止。 </p><p>冰雹序列也称为冰雹数（因为这些值通常受到多个下降和上升，如云中的冰雹），或者作为Collat​​z序列。 </p>任务：创建例程以生成数字的hailstone序列。使用例程表明，对于27号的冰雹序列具有开始与112个元件<code>27, 82, 41, 124</code> ，结束时用<code>8, 4, 2, 1</code>与显示具有最长冰雹序列的数目少于100,000一起序列的长度。 （但不要显示实际的序列！）参见： <a href="http://xkcd.com/710" title="链接：http：//xkcd.com/710">xkcd</a> （幽默）。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>hailstoneSequence</code>是一个函数。
    testString: assert(typeof hailstoneSequence === 'function');
  - text: '<code>[[27,82,41,124,8,4,2,1], [351, 77031]]</code> <code>hailstoneSequence()</code>应返回<code>[[27,82,41,124,8,4,2,1], [351, 77031]]</code>'
    testString: assert.deepEqual(hailstoneSequence(), res);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// noprotect
function hailstoneSequence () {
  const res = [];
  // Good luck!

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
