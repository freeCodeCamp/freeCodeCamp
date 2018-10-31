---
id: 587d7b86367417b2b2512b3c
title: Use Caution When Reinitializing Variables Inside a Loop
challengeType: 1
videoUrl: ''
localeTitle: استخدام الحذر عند Reinitializing متغيرات داخل حلقة
---

## Description
<section id="description"> في بعض الأحيان يكون من الضروري حفظ المعلومات أو زيادة العدادات أو إعادة تعيين المتغيرات داخل حلقة. وتتمثل إحدى المشكلات المحتملة في ضرورة إعادة تهيئة المتغيرات ، وليس العكس ، أو العكس. هذا أمر خطير بشكل خاص إذا قمت بإعادة تعيين المتغير الذي يتم استخدامه لحالة المحطة عن طريق الخطأ ، مما تسبب في حلقة لا نهائية. يمكن لقيم الطباعة المتغيرة مع كل دورة من الحلقات باستخدام <code>console.log()</code> الكشف عن سلوك عربات التي تجرها الدواب المتعلقة بإعادة الضبط أو الفشل في إعادة تعيين متغير. </section>

## Instructions
<section id="instructions"> من المفترض أن تقوم الدالة التالية بإنشاء مصفوفة ثنائية الأبعاد مع صفوف <code>m</code> وأعمدة <code>n</code> من الأصفار. لسوء الحظ ، فإنه لا ينتج الإخراج المتوقع لأنه لا تتم إعادة تهيئة متغير <code>row</code> (إعادة تعيين صفيف فارغ) في الحلقة الخارجية. قم بإصلاح الكود بحيث يقوم بإرجاع صفيف 3x2 الصحيح من الأصفار ، والذي يشبه <code>[[0, 0], [0, 0], [0, 0]]</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يقوم <code>matrix</code> بتعيين متغير <code>matrix</code> على صفيف يحتوي على 3 صفوف من عمودين من الأصفار لكل منهما.
    testString: 'assert(JSON.stringify(matrix) == "[[0,0],[0,0],[0,0]]", "Your code should set the <code>matrix</code> variable to an array holding 3 rows of 2 columns of zeroes each.");'
  - text: يجب أن يكون متغير <code>matrix</code> 3 صفوف.
    testString: 'assert(matrix.length == 3, "The <code>matrix</code> variable should have 3 rows.");'
  - text: يجب أن يحتوي متغير <code>matrix</code> على عمودين في كل صف.
    testString: 'assert(matrix[0].length == 2 && matrix[1].length === 2 && matrix[2].length === 2, "The <code>matrix</code> variable should have 2 columns in each row.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    // Adds the m-th row into newArray

    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
