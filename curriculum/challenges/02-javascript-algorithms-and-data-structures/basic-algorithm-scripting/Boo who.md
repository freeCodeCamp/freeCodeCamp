---
id: a77dbc43c33f39daa4429b4f
title: Boo who
isRequired: true
challengeType: 5
---

## Description
<section id='description'>
Check if a value is classified as a boolean primitive. Return true or false.
Boolean primitives are true and false.
Remember to use <a href='http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
- text: <code>booWho(true)</code> should return true.
  testString: 'assert.strictEqual(booWho(true), true, "<code>booWho(true)</code> should return true.");'
- text: <code>booWho(false)</code> should return true.
  testString: 'assert.strictEqual(booWho(false), true, "<code>booWho(false)</code> should return true.");'
- text: '<code>booWho([1, 2, 3])</code> should return false.'
  testString: 'assert.strictEqual(booWho([1, 2, 3]), false, "<code>booWho([1, 2, 3])</code> should return false.");'
- text: '<code>booWho([].slice)</code> should return false.'
  testString: 'assert.strictEqual(booWho([].slice), false, "<code>booWho([].slice)</code> should return false.");'
- text: '<code>booWho({ "a": 1 })</code> should return false.'
  testString: 'assert.strictEqual(booWho({ "a": 1 }), false, "<code>booWho({ "a": 1 })</code> should return false.");'
- text: <code>booWho(1)</code> should return false.
  testString: 'assert.strictEqual(booWho(1), false, "<code>booWho(1)</code> should return false.");'
- text: <code>booWho(NaN)</code> should return false.
  testString: 'assert.strictEqual(booWho(NaN), false, "<code>booWho(NaN)</code> should return false.");'
- text: <code>booWho("a")</code> should return false.
  testString: 'assert.strictEqual(booWho("a"), false, "<code>booWho("a")</code> should return false.");'
- text: <code>booWho("true")</code> should return false.
  testString: 'assert.strictEqual(booWho("true"), false, "<code>booWho("true")</code> should return false.");'
- text: <code>booWho("false")</code> should return false.
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
function booWho(bool) {
  return typeof bool === "boolean";
}

booWho(null);
```

</section>
