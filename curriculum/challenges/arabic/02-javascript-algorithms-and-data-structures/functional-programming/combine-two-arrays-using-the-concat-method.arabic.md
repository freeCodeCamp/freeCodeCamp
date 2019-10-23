---
id: 587d7da9367417b2b2512b66
title: Combine Two Arrays Using the concat Method
challengeType: 1
videoUrl: ''
localeTitle: الجمع بين اثنين من المصفوفات باستخدام طريقة concat
---

## Description
<section id="description"> يعني <code>Concatenation</code> للانضمام إلى العناصر من طرف إلى آخر. تقدم JavaScript طريقة <code>concat</code> لكل من السلاسل والمصفوفات التي تعمل بنفس الطريقة. بالنسبة إلى المصفوفات ، يتم استدعاء هذه الطريقة على واحد ، ثم يتم توفير مجموعة أخرى كوسيطة <code>concat</code> ، والتي يتم إضافتها إلى نهاية الصفيف الأول. تقوم بإرجاع صفيف جديد ولا يتم تغيير أي من المصفوفات الأصلية. إليك مثال على ذلك: <blockquote style=";text-align:right;direction:rtl"> [1 ، 2 ، 3] .concat ([4 ، 5 ، 6]) ؛ <br> // إرجاع مصفوفة جديدة [1 ، 2 ، 3 ، 4 ، 5 ، 6] </blockquote></section>

## Instructions
<section id="instructions"> استخدام <code>concat</code> الأسلوب في <code>nonMutatingConcat</code> وظيفة لسلسلة <code>attach</code> إلى نهاية <code>original</code> . يجب أن تقوم الدالة بإرجاع الصفيف المتسلسل. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تستخدم التعليمات البرمجية الخاصة بك طريقة <code>concat</code> .
    testString: 'assert(code.match(/\.concat/g), "Your code should use the <code>concat</code> method.");'
  - text: يجب أن لا تتغير الصفيف <code>first</code> .
    testString: 'assert(JSON.stringify(first) === JSON.stringify([1, 2, 3]), "The <code>first</code> array should not change.");'
  - text: لا يجب تغيير الصفيف <code>second</code> .
    testString: 'assert(JSON.stringify(second) === JSON.stringify([4, 5]), "The <code>second</code> array should not change.");'
  - text: '<code>nonMutatingConcat([1, 2, 3], [4, 5])</code> <code>[1, 2, 3, 4, 5]</code> .'
    testString: 'assert(JSON.stringify(nonMutatingConcat([1, 2, 3], [4, 5])) === JSON.stringify([1, 2, 3, 4, 5]), "<code>nonMutatingConcat([1, 2, 3], [4, 5])</code> should return <code>[1, 2, 3, 4, 5]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function nonMutatingConcat(original, attach) {
  // Add your code below this line


  // Add your code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
