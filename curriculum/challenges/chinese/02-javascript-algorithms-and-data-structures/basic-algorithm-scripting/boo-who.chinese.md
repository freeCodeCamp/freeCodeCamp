---
id: a77dbc43c33f39daa4429b4f
title: Boo who
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: 嘘谁
---

## Description
<section id="description">检查值是否归类为布尔基元。返回true或false。布尔基元是true和false。如果卡住，请记得使用<a href="http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514" target="_blank">Read-Search-Ask</a> 。尝试配对程序。编写自己的代码。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>booWho(true)</code>应该返回true。
    testString: 'assert.strictEqual(booWho(true), true, "<code>booWho(true)</code> should return true.");'
  - text: <code>booWho(false)</code>应该返回true。
    testString: 'assert.strictEqual(booWho(false), true, "<code>booWho(false)</code> should return true.");'
  - text: '<code>booWho([1, 2, 3])</code>应该返回false。'
    testString: 'assert.strictEqual(booWho([1, 2, 3]), false, "<code>booWho([1, 2, 3])</code> should return false.");'
  - text: '<code>booWho([].slice)</code>应该返回false。'
    testString: 'assert.strictEqual(booWho([].slice), false, "<code>booWho([].slice)</code> should return false.");'
  - text: '<code>booWho({ &quot;a&quot;: 1 })</code>应该返回false。'
    testString: 'assert.strictEqual(booWho({ "a": 1 }), false, "<code>booWho({ "a": 1 })</code> should return false.");'
  - text: <code>booWho(1)</code>应该返回false。
    testString: 'assert.strictEqual(booWho(1), false, "<code>booWho(1)</code> should return false.");'
  - text: <code>booWho(NaN)</code>应该返回false。
    testString: 'assert.strictEqual(booWho(NaN), false, "<code>booWho(NaN)</code> should return false.");'
  - text: <code>booWho(&quot;a&quot;)</code>应该返回false。
    testString: 'assert.strictEqual(booWho("a"), false, "<code>booWho("a")</code> should return false.");'
  - text: <code>booWho(&quot;true&quot;)</code>应该返回false。
    testString: 'assert.strictEqual(booWho("true"), false, "<code>booWho("true")</code> should return false.");'
  - text: <code>booWho(&quot;false&quot;)</code>应该返回false。
    testString: 'assert.strictEqual(booWho("false"), false, "<code>booWho("false")</code> should return false.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  return bool;
}

booWho(null);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
