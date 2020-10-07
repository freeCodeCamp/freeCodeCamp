---
id: a7bf700cd123b9a54eef01d5
challengeType: 5
videoUrl: ''
title: 请不要重复
---

## Description
<section id="description">返回没有重复连续字母的提供字符串的总排列数。假设提供的字符串中的所有字符都是唯一的。例如， <code>aab</code>应该返回2，因为它总共有6个排列（ <code>aab</code> ， <code>aab</code> ， <code>aba</code> ， <code>aba</code> ， <code>baa</code> ， <code>baa</code> ），但只有2个（ <code>aba</code>和<code>aba</code> ）没有相同的字母（在这种情况下为<code>a</code> ）重复。如果卡住，请记得使用<a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> 。尝试配对程序。编写自己的代码。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>permAlone(&quot;aab&quot;)</code>应返回一个数字。
    testString: assert.isNumber(permAlone('aab'));
  - text: <code>permAlone(&quot;aab&quot;)</code>应返回2。
    testString: assert.strictEqual(permAlone('aab'), 2);
  - text: <code>permAlone(&quot;aaa&quot;)</code>应该返回0。
    testString: assert.strictEqual(permAlone('aaa'), 0);
  - text: <code>permAlone(&quot;aabb&quot;)</code>应该返回8。
    testString: assert.strictEqual(permAlone('aabb'), 8);
  - text: <code>permAlone(&quot;abcdefa&quot;)</code>应返回3600。
    testString: assert.strictEqual(permAlone('abcdefa'), 3600);
  - text: <code>permAlone(&quot;abfdefa&quot;)</code>应返回2640。
    testString: assert.strictEqual(permAlone('abfdefa'), 2640);
  - text: <code>permAlone(&quot;zzzzzzzz&quot;)</code>应该返回0。
    testString: assert.strictEqual(permAlone('zzzzzzzz'), 0);
  - text: <code>permAlone(&quot;a&quot;)</code>应返回1。
    testString: assert.strictEqual(permAlone('a'), 1);
  - text: <code>permAlone(&quot;aaab&quot;)</code>应该返回0。
    testString: assert.strictEqual(permAlone('aaab'), 0);
  - text: <code>permAlone(&quot;aaabb&quot;)</code>应该返回12。
    testString: assert.strictEqual(permAlone('aaabb'), 12);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function permAlone(str) {
  return str;
}

permAlone('aab');

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
