---
id: a5deed1811a43193f9f1c841
title: Drop it
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: أسقطها
---

## Description
<section id="description"> بالنظر إلى صفيف <code>arr</code> ، قم بالتمرير عبر كل عنصر بدءًا من العنصر الأول (مؤشر 0) وإزالته إلى أن تعود الدالة <code>func</code> إلى <code>true</code> عند تمرير العنصر المتكرر عبرها. ثم أعد بقية المصفوفة بمجرد استيفاء الشرط ، وإلا ، يجب إرجاع <code>arr</code> كصفيف فارغ. تذكر استخدام <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> إذا واجهتك مشكلة. حاول إقران البرنامج. اكتب الكود الخاص بك. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>dropElements([1, 2, 3, 4], function(n) {return n &gt;= 3;})</code> return <code>[3, 4]</code> .'
    testString: 'assert.deepEqual(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}), [3, 4], "<code>dropElements([1, 2, 3, 4], function(n) {return n >= 3;})</code> should return <code>[3, 4]</code>.");'
  - text: '<code>dropElements([0, 1, 0, 1], function(n) {return n === 1;})</code> بإرجاع <code>[1, 0, 1]</code> .'
    testString: 'assert.deepEqual(dropElements([0, 1, 0, 1], function(n) {return n === 1;}), [1, 0, 1], "<code>dropElements([0, 1, 0, 1], function(n) {return n === 1;})</code> should return <code>[1, 0, 1]</code>.");'
  - text: '<code>dropElements([1, 2, 3], function(n) {return n &gt; 0;})</code> return <code>[1, 2, 3]</code> .'
    testString: 'assert.deepEqual(dropElements([1, 2, 3], function(n) {return n > 0;}), [1, 2, 3], "<code>dropElements([1, 2, 3], function(n) {return n > 0;})</code> should return <code>[1, 2, 3]</code>.");'
  - text: '<code>dropElements([1, 2, 3, 4], function(n) {return n &gt; 5;})</code> return <code>[]</code> .'
    testString: 'assert.deepEqual(dropElements([1, 2, 3, 4], function(n) {return n > 5;}), [], "<code>dropElements([1, 2, 3, 4], function(n) {return n > 5;})</code> should return <code>[]</code>.");'
  - text: '<code>dropElements([1, 2, 3, 7, 4], function(n) {return n &gt; 3;})</code> يجب أن تعود <code>[7, 4]</code> .'
    testString: 'assert.deepEqual(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}), [7, 4], "<code>dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})</code> should return <code>[7, 4]</code>.");'
  - text: '<code>dropElements([1, 2, 3, 9, 2], function(n) {return n &gt; 2;})</code> يجب أن تعود <code>[3, 9, 2]</code> .'
    testString: 'assert.deepEqual(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}), [3, 9, 2], "<code>dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})</code> should return <code>[3, 9, 2]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function dropElements(arr, func) {
  // Drop them elements.
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
