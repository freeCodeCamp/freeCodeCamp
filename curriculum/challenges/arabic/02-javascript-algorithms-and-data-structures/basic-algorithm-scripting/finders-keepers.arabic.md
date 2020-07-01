---
id: a6e40f1041b06c996f7b2406
title: Finders Keepers
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: من يجد شيئا يحتفظ به
---

## Description
<section id="description"> إنشاء دالة تبحث خلال صفيف (الوسيطة الأولى) وإرجاع العنصر الأول في الصفيف الذي يمرر اختبار الحقيقة (الوسيطة الثانية). إذا لم يجتاز أي عنصر الاختبار ، فارجع غير معروف. تذكر استخدام <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> إذا واجهتك مشكلة. حاول إقران البرنامج. اكتب الكود الخاص بك. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })</code> يجب أن ترجع 8.'
    testString: 'assert.strictEqual(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }), 8, "<code>findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })</code> should return 8.");'
  - text: '<code>findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })</code> يجب أن تُرجع غير معرفة.'
    testString: 'assert.strictEqual(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }), undefined, "<code>findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })</code> should return undefined.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function findElement(arr, func) {
  let num = 0;
  return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
