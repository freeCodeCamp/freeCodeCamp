---
id: a77dbc43c33f39daa4429b4f
title: Boo who
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: بو من
---

## Description
<section id="description"> تحقق مما إذا كانت القيمة مصنفة على أنها بدائية منطقية. إرجاع صح أو خطأ. الأجناس البولية هي صحيحة وكاذبة. تذكر استخدام <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> إذا واجهتك مشكلة. حاول إقران البرنامج. اكتب الكود الخاص بك. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>booWho(true)</code> يجب أن <code>booWho(true)</code> true.
    testString: 'assert.strictEqual(booWho(true), true, "<code>booWho(true)</code> should return true.");'
  - text: <code>booWho(false)</code> يجب أن يعود صحيحًا.
    testString: 'assert.strictEqual(booWho(false), true, "<code>booWho(false)</code> should return true.");'
  - text: '<code>booWho([1, 2, 3])</code> يجب أن تعود خاطئة.'
    testString: 'assert.strictEqual(booWho([1, 2, 3]), false, "<code>booWho([1, 2, 3])</code> should return false.");'
  - text: 'يجب أن تعود <code>booWho([].slice)</code> كاذبة.'
    testString: 'assert.strictEqual(booWho([].slice), false, "<code>booWho([].slice)</code> should return false.");'
  - text: ''
    testString: 'assert.strictEqual(booWho({ "a": 1 }), false, "<code>booWho({ "a": 1 })</code> should return false.");'
  - text: يجب أن يقوم <code>booWho(1)</code> بإرجاع false.
    testString: 'assert.strictEqual(booWho(1), false, "<code>booWho(1)</code> should return false.");'
  - text: يجب أن تعود <code>booWho(NaN)</code> كاذبة.
    testString: 'assert.strictEqual(booWho(NaN), false, "<code>booWho(NaN)</code> should return false.");'
  - text: <code>booWho(&quot;a&quot;)</code> بإرجاع false.
    testString: 'assert.strictEqual(booWho("a"), false, "<code>booWho("a")</code> should return false.");'
  - text: <code>booWho(&quot;true&quot;)</code> بإرجاع false.
    testString: 'assert.strictEqual(booWho("true"), false, "<code>booWho("true")</code> should return false.");'
  - text: <code>booWho(&quot;false&quot;)</code> بإرجاع false.
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
