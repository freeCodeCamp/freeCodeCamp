---
id: 587d7b8f367417b2b2512b60
title: Refactor Global Variables Out of Functions
challengeType: 1
forumTopicId: 301235
dashedName: refactor-global-variables-out-of-functions
---

# --description--

وقد شهدنا حتى الآن مبدأين متميزين للـ functional programming:

1) لا تغير متغير (variable) أو object - قم بإنشاء متغيرات و objects جديدة و قم بإرجاعها إذا لزم الأمر من function. تلميح: باستخدام شيء مثل `const newArr = arrVar`، حيث `arrVar` هو array، سوف يقوم ببساطة بإنشاء مرجع إلى المتغير الحالي وليس نسخة. لذا فإن تغيير قيمة في `newArr` سيغير القيمة في `arrVar`.

2) تعريف معلمات الدالة - أي حساب داخل الـ function يعتمد فقط على الـ arguments التي تحال إلى الـ function، وليس على أي global object أو متغير.

إن إضافة واحد إلى رقما ليس مثيراً جداً، ولكن يمكننا تطبيق هذه المبادئ عند العمل مع arrays أو objects أكثر تعقيداً.

# --instructions--

أعد كتابة الكود حتى لا يتم تغيير الـ array العامة `bookList` داخل أي من الـ functions. يجب أن تضيف دالة `add` الـ `bookName` إلى نهاية الـ array الذي تم تمريره إليه وإعادة array جديدة (قائمة). يجب أن تقوم دالة `remove` بإزالة `bookName` من الـ array الذي تم تمريره إليه.

**ملاحظة:** يجب أن تعيد كلتا الدالتين، array، وينبغي إضافة أي معلمات جديدة قبل معلمة `bookName`.

# --hints--

`bookList` لا يجب أن تتغير وان تظل متساوية الي `["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]`.

```js
add(bookList, "Test");
remove(bookList, "The Hound of the Baskervilles");
assert(
  JSON.stringify(bookList) ===
    JSON.stringify([
      'The Hound of the Baskervilles',
      'On The Electrodynamics of Moving Bodies',
      'Philosophiæ Naturalis Principia Mathematica',
      'Disquisitiones Arithmeticae'
    ])
);
```

`add(bookList, "A Brief History of Time")` يجب أن تعيد `["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]`.

```js
assert(
  JSON.stringify(add(bookList, "A Brief History of Time")) ===
    JSON.stringify([
      'The Hound of the Baskervilles',
      'On The Electrodynamics of Moving Bodies',
      'Philosophiæ Naturalis Principia Mathematica',
      'Disquisitiones Arithmeticae',
      'A Brief History of Time'
    ])
);
```

`remove(bookList, "On The Electrodynamics of Moving Bodies")` يجب أن تعيد `["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]`.

```js
assert(
  JSON.stringify(remove(bookList, 'On The Electrodynamics of Moving Bodies')) ===
    JSON.stringify([
      'The Hound of the Baskervilles',
      'Philosophiæ Naturalis Principia Mathematica',
      'Disquisitiones Arithmeticae'
    ])
);
```

`remove(add(bookList, "A Brief History of Time"), "On The Electrodynamics of Moving Bodies");` يجب أن تعيد `["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]`.

```js
assert(
  JSON.stringify(remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies')) ===
    JSON.stringify([
      'The Hound of the Baskervilles',
      'Philosophiæ Naturalis Principia Mathematica',
      'Disquisitiones Arithmeticae',
      'A Brief History of Time'
    ])
);
```

# --seed--

## --seed-contents--

```js
// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookName) {

  bookList.push(bookName);
  return bookList;

  // Change code above this line
}

// Change code below this line
function remove(bookName) {
  const book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {

    bookList.splice(book_index, 1);
    return bookList;

    // Change code above this line
    }
}
```

# --solutions--

```js
// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add(bookList, bookName) {
  return [...bookList, bookName];
}

function remove(bookList, bookName) {
  const bookListCopy = [...bookList];
  const bookNameIndex = bookList.indexOf(bookName);
  if (bookNameIndex >= 0) {
    bookListCopy.splice(bookNameIndex, 1);
  }
  return bookListCopy;
}
```
