---
id: 587d7dab367417b2b2512b70
title: Introduction to Currying and Partial Application
challengeType: 1
videoUrl: ''
localeTitle: مقدمة في التجلي والتطبيق الجزئي
---

## Description
<section id="description"> إن <code>arity</code> الوظيفة هو عدد الحجج التي يتطلبها. تعني وظيفة <code>Currying</code> دالة تحويل دالة N <code>arity</code> إلى N دالتي <code>arity</code> 1. وبعبارة أخرى ، فإنها تعيد هيكلة إحدى الدالتين بحيث تأخذ إحدى الحجة ، ثم ترجع دالة أخرى تأخذ الحجة التالية ، وهكذا. إليك مثال على ذلك: <blockquote style=";text-align:right;direction:rtl"> // غير بالكاري وظيفة <br> وظيفة غير مضمنة (x، y) { <br> ارجع x + y؛ <br> } <br><br> // وظيفة الكاري <br> الوظيفة curried (x) { <br> وظيفة الإرجاع (y) { <br> ارجع x + y؛ <br> } <br> } <br> curried (1) (2) // Returns 3 </blockquote> هذا مفيد في البرنامج الخاص بك إذا كنت لا تستطيع توفير جميع الوسائط إلى وظيفة في وقت واحد. يمكنك حفظ كل استدعاء دالة في متغير ، والذي سيحافظ على مرجع الدالة المرتجعة الذي يأخذ الوسيطة التالية عندما تكون متاحة. في ما يلي مثال على ذلك باستخدام وظيفة <code>curried</code> في المثال أعلاه: <blockquote style=";text-align:right;direction:rtl"> // استدعاء وظيفة بالكاري في أجزاء: <br> var funcForY = curried (1)؛ <br> console.log (funcForY (2))؛ // المطبوعات 3 </blockquote> وبالمثل ، يمكن وصف <code>partial application</code> على أنه تطبيق عدد قليل من الوسيطات على إحدى الوظائف في وقت ما وإرجاع وظيفة أخرى يتم تطبيقها على مزيد من الوسيطات. إليك مثال على ذلك: <blockquote style=";text-align:right;direction:rtl"> // وظيفة محايدة <br> وظيفة غير متحيزة (x، y، z) { <br> ارجع x + y + z؛ <br> } <br> var partialFn = impartial.bind (هذا ، 1 ، 2) ؛ <br> partialFn (10)؛ // إرجاع 13 </blockquote></section>

## Instructions
<section id="instructions"> املأ جسم وظيفة <code>add</code> بحيث يستخدم currying لإضافة المعلمات <code>x</code> و <code>y</code> و <code>z</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>add(10)(20)(30)</code> يجب أن ترجع <code>60</code> .
    testString: 'assert(add(10)(20)(30) === 60, "<code>add(10)(20)(30)</code> should return <code>60</code>.");'
  - text: <code>add(1)(2)(3)</code> يجب أن ترجع <code>6</code> .
    testString: 'assert(add(1)(2)(3) === 6, "<code>add(1)(2)(3)</code> should return <code>6</code>.");'
  - text: <code>add(11)(22)(33)</code> يجب أن ترجع <code>66</code> .
    testString: 'assert(add(11)(22)(33) === 66, "<code>add(11)(22)(33)</code> should return <code>66</code>.");'
  - text: يجب أن تتضمن شفرتك عبارة نهائية تُرجع <code>x + y + z</code> .
    testString: 'assert(code.match(/[xyz]\s*?\+\s*?[xyz]\s*?\+\s*?[xyz]/g), "Your code should include a final statement that returns <code>x + y + z</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function add(x) {
  // Add your code below this line


  // Add your code above this line
}
add(10)(20)(30);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
