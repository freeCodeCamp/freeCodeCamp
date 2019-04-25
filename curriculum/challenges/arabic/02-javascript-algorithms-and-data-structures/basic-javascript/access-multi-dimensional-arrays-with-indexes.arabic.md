---
id: 56592a60ddddeae28f7aa8e1
title: Access Multi-Dimensional Arrays With Indexes
challengeType: 1
videoUrl: ''
localeTitle: الوصول إلى صفائف متعددة الأبعاد مع فهارس
---

## Description
<section id="description"> طريقة واحدة للتفكير في مصفوفة <dfn>متعددة الأبعاد</dfn> ، هي بمثابة <em>صفيف من المصفوفات</em> . عند استخدام الأقواس للوصول إلى الصفيف الخاص بك ، تشير المجموعة الأولى من الأقواس إلى الإدخالات الموجودة في مصفوفة الجزء الخارجي (المستوى الأول) ، ويشير كل زوج إضافي من الأقواس إلى المستوى التالي من الإدخالات بالداخل. <strong>مثال</strong> <blockquote style=";text-align:right;direction:rtl"> var arr = [ <br> [1،2،3]، <br> [4،5،6]، <br> [7،8،9]، <br> [[10،11،12] ، 13 ، 14] <br> ]. <br> آر [3]. // يساوي [[10،11،12] ، 13 ، 14] <br> آر [3] [0]؛ // يساوي [10،11،12] <br> آر [3] [0] [1]؛ // يساوي 11 </blockquote> <strong>ملحوظة</strong> <br> يجب ألا يكون هناك أي مسافات بين اسم الصفيف والأقواس المربعة ، مثل <code>array [0][0]</code> وحتى هذا <code>array [0] [0]</code> غير مسموح به. على الرغم من أن JavaScript قادر على معالجة هذا بشكل صحيح ، فقد يؤدي ذلك إلى إرباك المبرمجين الآخرين في قراءة التعليمات البرمجية. </section>

## Instructions
<section id="instructions"> باستخدام <code>myArray</code> قوس حدد عنصر من <code>myArray</code> بحيث يكون <code>myData</code> يساوي <code>8</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تساوي <code>myData</code> <code>8</code> .
    testString: 'assert(myData === 8, "<code>myData</code> should be equal to <code>8</code>.");'
  - text: يجب أن تستخدم تدوين قوس لقراءة القيمة الصحيحة من <code>myArray</code> .
    testString: 'assert(/myArray\[2\]\[1\]/g.test(code) && !/myData\s*=\s*(?:.*[-+*/%]|\d)/g.test(code), "You should be using bracket notation to read the correct value from <code>myArray</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

// Only change code below this line.
var myData = myArray[0][0];

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
