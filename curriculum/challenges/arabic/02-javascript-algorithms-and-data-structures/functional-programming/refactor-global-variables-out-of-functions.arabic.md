---
id: 587d7b8f367417b2b2512b60
title: Refactor Global Variables Out of Functions
challengeType: 1
videoUrl: ''
localeTitle: برمجة وظيفية: اعد كتابة المتغيرات العالمية من الوظائف
---

## Description
<section id="description">:حتى الآن ، رأينا مبدأين مختلفين للبرمجة الوظيفية

١) عدم تغيير متغير أو كائن - إنشاء متغيرات وكائنات جديدة وإعادتها إذا دعت الحاجة إلى ذلك من وظيفة

٢) قم بتعريف وسيطات الدالة - أي حساب داخل دالة يعتمد فقط على الوسيطات ، وليس على أي كائن أو متغير عالمي

إن إضافة رقم واحد إلى رقم ليس شيئًا مثيرًا جدًا ، ولكن يمكننا تطبيق هذه المبادئ عند التعامل مع المصفوفات أو الأجسام الأكثر تعقيدًا.  
</section>

## Instructions
<section id="instructions"> اعد كتابتها بحيث لا يتم تغيير <code>booklist</code> مجموعة عالمية داخل أي وظيفة. الوظيفة الإضافية<code>add</code> يجب أن تضيف المعطى <code>bookName</code> إلى نهاية صفيف. الوظيفة <code>remove</code> يجب ان تضيف المعطي <code>bookName</code> من الصفيف. كلتا الوظيفتين يجب إرجاع الصفيف, وينبغي إضافة أي معلمات جديدة من قبل <code>bookName</code>. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert(JSON.stringify(bookList) === JSON.stringify(["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]), "<code>bookList</code> should not change and still equal <code>["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]</code>.");'
  - text: ''
    testString: 'assert(JSON.stringify(newBookList) === JSON.stringify(["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]), "<code>newBookList</code> should equal <code>["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]</code>.");'
  - text: ''
    testString: 'assert(JSON.stringify(newerBookList) === JSON.stringify(["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]), "<code>newerBookList</code> should equal <code>["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]</code>.");'
  - text: ''
    testString: 'assert(JSON.stringify(newestBookList) === JSON.stringify(["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]), "<code>newestBookList</code> should equal <code>["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function add (bookName) {

  return bookList.push(bookName);

  // Add your code above this line
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function remove (bookName) {
  if (bookList.indexOf(bookName) >= 0) {

    return bookList.splice(0, 1, bookName);

    // Add your code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
