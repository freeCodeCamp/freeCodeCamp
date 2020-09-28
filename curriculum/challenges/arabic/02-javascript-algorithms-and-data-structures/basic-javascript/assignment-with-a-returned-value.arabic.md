---
id: 56533eb9ac21ba0edf2244c3
title: Assignment with a Returned Value
challengeType: 1
videoUrl: ''
localeTitle: التنازل مع القيمة المرتجعة
---

## Description
<section id="description"> إذا كنت ستتذكر من مناقشتنا لـ <a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assignment-operator" target="_blank">Storing Values ​​مع Assignment Operator</a> ، يتم حل كل شيء على يمين علامة المساواة قبل تعيين القيمة. هذا يعني أنه يمكننا أخذ قيمة الإرجاع للدالة وتعيينها لمتغير. افترض أننا حددنا مسبقا <code>sum</code> وظيفة يضيف رقمين معا ، ثم: <code>ourSum = sum(5, 12);</code> سوف تستدعي دالة <code>sum</code> ، والتي تُرجع قيمة <code>17</code> <code>ourSum</code> المتغير. </section>

## Instructions
<section id="instructions"> استدعاء الدالة <code>processArg</code> مع وسيطة من <code>7</code> وتعيين قيمته الإرجاع إلى المتغير <code>processed</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>processed</code> يجب أن يكون لها قيمة <code>2</code>
    testString: 'assert(processed === 2, "<code>processed</code> should have a value of <code>2</code>");'
  - text: يجب عليك تعيين <code>processArg</code> <code>processed</code>
    testString: 'assert(/processed\s*=\s*processArg\(\s*7\s*\)\s*;/.test(code), "You should assign <code>processArg</code> to <code>processed</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(10);

// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line

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
</section>
