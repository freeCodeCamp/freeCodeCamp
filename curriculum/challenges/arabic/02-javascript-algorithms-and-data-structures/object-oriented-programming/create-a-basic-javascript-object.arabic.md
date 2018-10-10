---
id: 587d7dac367417b2b2512b73
title: Create a Basic JavaScript Object
challengeType: 1
videoUrl: ''
localeTitle: قم بإنشاء كائن JavaScript أساسي
---

## Description
<section id="description"> فكّر في الأشياء التي يشاهدها الناس يوميًا ، مثل السيارات والمحلات التجارية والطيور. هذه كلها <code>objects</code> : أشياء ملموسة يستطيع الناس ملاحظتها والتفاعل معها. ما هي بعض صفات هذه <code>objects</code> ؟ سيارة لديها عجلات. محلات بيع المواد. الطيور لديها أجنحة. هذه الصفات ، أو <code>properties</code> ، تحدد ما الذي يصنع <code>object</code> . لاحظ أن <code>objects</code> المتشابهة تتشارك في نفس <code>properties</code> ، ولكن قد تحتوي على قيم مختلفة لتلك <code>properties</code> . على سبيل المثال ، تحتوي جميع السيارات على عجلات ، ولكن لا تحتوي جميع السيارات على نفس عدد العجلات. يتم استخدام <code>Objects</code> في JavaScript <code>Objects</code> في العالم الحقيقي ، مما يمنحها <code>properties</code> وسلوكًا مثل نظيراتها في العالم الحقيقي. في ما يلي مثال على استخدام هذه المفاهيم لإنشاء <code>object</code> <code>duck</code> : <blockquote style=";text-align:right;direction:rtl"> دع بطة = { <br> الاسم: &quot;Aflac&quot; ، <br> numLegs: 2 <br> }؛ </blockquote> يحتوي هذا <code>object</code> <code>duck</code> أزواج الخاصية / قيمة اثنين: <code>name</code> &quot;Aflac&quot; و <code>numLegs</code> من 2. </section>

## Instructions
<section id="instructions"> إنشاء <code>object</code> <code>dog</code> مع <code>name</code> وخصائص <code>numLegs</code> ، <code>numLegs</code> إلى سلسلة ورقم ، على التوالي. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يكون <code>dog</code> <code>object</code> .
    testString: 'assert(typeof(dog) === "object", "<code>dog</code> should be an <code>object</code>.");'
  - text: يجب أن يكون <code>dog</code> خاصية <code>name</code> معيّنة إلى <code>string</code> .
    testString: 'assert(typeof(dog.name) === "string", "<code>dog</code> should have a <code>name</code> property set to a <code>string</code>.");'
  - text: يجب أن يكون لدى <code>dog</code> خاصية <code>numLegs</code> معيّنة إلى <code>number</code> .
    testString: 'assert(typeof(dog.numLegs) === "number", "<code>dog</code> should have a <code>numLegs</code> property set to a <code>number</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let dog = {

};

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
