---
id: a24c1a4622e3c05097f71d67
title: Where do I Belong
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: إلى أين أنتمي
---

## Description
<section id="description"> قم بإرجاع أدنى مؤشر يتم فيه إدراج قيمة (وسيطة ثانية) في صفيف (وسيطة أولى) بمجرد فرزها. يجب أن تكون القيمة التي تم إرجاعها رقمًا. على سبيل المثال ، يجب أن تقوم <code>getIndexToIns([1,2,3,4], 1.5)</code> بإرجاع <code>1</code> لأنه أكبر من <code>1</code> (index 0) ، ولكن أقل من <code>2</code> (index 1). وبالمثل ، يجب أن تعود <code>getIndexToIns([20,3,5], 19)</code> <code>2</code> لأنه بمجرد فرز المصفوفة ستبدو مثل <code>[3,5,20]</code> و <code>19</code> أقل من <code>20</code> (مؤشر 2) وأكبر من <code>5</code> ( مؤشر 1). تذكر استخدام <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> إذا واجهتك مشكلة. اكتب الكود الخاص بك. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>getIndexToIns([10, 20, 30, 40, 50], 35)</code> <code>3</code> .'
    testString: 'assert(getIndexToIns([10, 20, 30, 40, 50], 35) === 3, "<code>getIndexToIns([10, 20, 30, 40, 50], 35)</code> should return <code>3</code>.");'
  - text: '<code>getIndexToIns([10, 20, 30, 40, 50], 35)</code> بإرجاع رقم.'
    testString: 'assert(typeof(getIndexToIns([10, 20, 30, 40, 50], 35)) === "number", "<code>getIndexToIns([10, 20, 30, 40, 50], 35)</code> should return a number.");'
  - text: '<code>getIndexToIns([10, 20, 30, 40, 50], 30)</code> <code>2</code> .'
    testString: 'assert(getIndexToIns([10, 20, 30, 40, 50], 30) === 2, "<code>getIndexToIns([10, 20, 30, 40, 50], 30)</code> should return <code>2</code>.");'
  - text: '<code>getIndexToIns([10, 20, 30, 40, 50], 30)</code> بإرجاع رقم.'
    testString: 'assert(typeof(getIndexToIns([10, 20, 30, 40, 50], 30)) === "number", "<code>getIndexToIns([10, 20, 30, 40, 50], 30)</code> should return a number.");'
  - text: 'يجب أن تعود <code>getIndexToIns([40, 60], 50)</code> <code>1</code> .'
    testString: 'assert(getIndexToIns([40, 60], 50) === 1, "<code>getIndexToIns([40, 60], 50)</code> should return <code>1</code>.");'
  - text: '<code>getIndexToIns([40, 60], 50)</code> بإرجاع رقم.'
    testString: 'assert(typeof(getIndexToIns([40, 60], 50)) === "number", "<code>getIndexToIns([40, 60], 50)</code> should return a number.");'
  - text: '<code>getIndexToIns([3, 10, 5], 3)</code> <code>0</code> .'
    testString: 'assert(getIndexToIns([3, 10, 5], 3) === 0, "<code>getIndexToIns([3, 10, 5], 3)</code> should return <code>0</code>.");'
  - text: '<code>getIndexToIns([3, 10, 5], 3)</code> بإرجاع رقم.'
    testString: 'assert(typeof(getIndexToIns([3, 10, 5], 3)) === "number", "<code>getIndexToIns([3, 10, 5], 3)</code> should return a number.");'
  - text: '<code>getIndexToIns([5, 3, 20, 3], 5)</code> <code>2</code> .'
    testString: 'assert(getIndexToIns([5, 3, 20, 3], 5) === 2, "<code>getIndexToIns([5, 3, 20, 3], 5)</code> should return <code>2</code>.");'
  - text: '<code>getIndexToIns([5, 3, 20, 3], 5)</code> بإرجاع رقم.'
    testString: 'assert(typeof(getIndexToIns([5, 3, 20, 3], 5)) === "number", "<code>getIndexToIns([5, 3, 20, 3], 5)</code> should return a number.");'
  - text: '<code>getIndexToIns([2, 20, 10], 19)</code> <code>2</code> .'
    testString: 'assert(getIndexToIns([2, 20, 10], 19) === 2, "<code>getIndexToIns([2, 20, 10], 19)</code> should return <code>2</code>.");'
  - text: '<code>getIndexToIns([2, 20, 10], 19)</code> بإرجاع رقم.'
    testString: 'assert(typeof(getIndexToIns([2, 20, 10], 19)) === "number", "<code>getIndexToIns([2, 20, 10], 19)</code> should return a number.");'
  - text: '<code>getIndexToIns([2, 5, 10], 15)</code> <code>3</code> .'
    testString: 'assert(getIndexToIns([2, 5, 10], 15) === 3, "<code>getIndexToIns([2, 5, 10], 15)</code> should return <code>3</code>.");'
  - text: '<code>getIndexToIns([2, 5, 10], 15)</code> بإرجاع رقم.'
    testString: 'assert(typeof(getIndexToIns([2, 5, 10], 15)) === "number", "<code>getIndexToIns([2, 5, 10], 15)</code> should return a number.");'
  - text: 'يجب أن ترجع <code>getIndexToIns([], 1)</code> <code>0</code> .'
    testString: 'assert(getIndexToIns([], 1) === 0, "<code>getIndexToIns([], 1)</code> should return <code>0</code>.");'
  - text: '<code>getIndexToIns([], 1)</code> بإرجاع رقم.'
    testString: 'assert(typeof(getIndexToIns([], 1)) === "number", "<code>getIndexToIns([], 1)</code> should return a number.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  return num;
}

getIndexToIns([40, 60], 50);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
