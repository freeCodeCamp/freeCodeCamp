---
id: 5900f37a1000cf542c50fe8d
challengeType: 5
videoUrl: ''
title: 问题14：最长的Collat​​z序列
---

## Description
<section id="description">为正整数集定义以下迭代序列： <div style="padding-left: 4em;"> <var>n</var> → <var>n</var> / 2（ <var>n</var>是偶数） </div><div style="padding-left: 4em;"> <var>n</var> →3 <var>n</var> + 1（ <var>n</var>为奇数） </div>使用上面的规则并从13开始，我们生成以下序列： <div style="text-align: center;"> 13→40→20→10→5→16→8→4→2→1 </div>可以看出，该序列（从13开始并在1结束）包含10个项。虽然尚未证实（Collat​​z问题），但是认为所有起始数字都在1处结束。在给定<code>limit</code>下，哪个起始数产生最长链？注意：一旦链条启动，条款允许超过一百万。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>longestCollatzSequence(14)</code>应该返回9。
    testString: assert.strictEqual(longestCollatzSequence(14), 9);
  - text: <code>longestCollatzSequence(5847)</code>应返回3711。
    testString: assert.strictEqual(longestCollatzSequence(5847), 3711);
  - text: <code>longestCollatzSequence(46500)</code>应返回35655。
    testString: assert.strictEqual(longestCollatzSequence(46500), 35655);
  - text: <code>longestCollatzSequence(54512)</code>应返回52527。
    testString: assert.strictEqual(longestCollatzSequence(54512), 52527);
  - text: <code>longestCollatzSequence(1000000)</code>应返回837799。
    testString: assert.strictEqual(longestCollatzSequence(100000), 77031);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function longestCollatzSequence(limit) {
  // Good luck!
  return true;
}

longestCollatzSequence(14);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
