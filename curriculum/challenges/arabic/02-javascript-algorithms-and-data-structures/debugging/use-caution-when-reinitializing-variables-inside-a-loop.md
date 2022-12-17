---
id: 587d7b86367417b2b2512b3c
title: توخي الحذر عند إعادة تهيئة المتغيرات داخل حلقة تكرارية
challengeType: 1
forumTopicId: 301194
dashedName: use-caution-when-reinitializing-variables-inside-a-loop
---

# --description--

في بعض الأحيان من الضروري حفظ المعلومات، تزويد العدادات، أو إعادة تعيين المتغيرات ضمن الحلقة التكرارية. تتمثل المشكلة المحتملة في الوقت الذي يجب إعادة تهيئة المتغيرات فيه ، وعدم حدوث ذلك ، أو العكس. هذا أمر خطير بشكل خاص إذا قمت عن طريق الخطأ بإعادة تعيين المتغير المستخدم في حالة الشرط الانتهائي، مما يسبب حلقة لا نهائية.

يمكن أن تكشف طباعة القيم المتغيرة مع كل دورة من الحلقة باستخدام `console.log()` عن سلوك خاطئ متعلق بإعادة التعيين أو الفشل في إعادة تعيين متغير.

# --instructions--

من المفترض أن تنشئ الوظيفة التالية قائمة ذات بعدين بعدد `m` صفوف و `n` أعمدة من الأصفار. لسوء الحظ إنه لا ينتج الإخراج المتوقع لأن متغير `row` لا يتم إعادة تهيئته (ضبطه إلى قائمة فارغة) في الحلقة الخارجية. أصلح الكود بحيث ينتج قائمة 3x2 تتكون من الأصفار، التي تبدو مثل `[[0, 0], [0, 0], [0, 0]]`.

# --hints--

يجب أن يقوم الكود الخاصة بك بتعيين متغير `matrix` إلى قائمة تحتوي علي 3 صفوف من عمودين من الأصفار.

```js
assert(JSON.stringify(matrix) == '[[0,0],[0,0],[0,0]]');
```

يجب أن يحتوي متغير `matrix` على 3 قائمة.

```js
assert(matrix.length == 3);
```

يجب أن يحتوي متغير `matrix` على عمودين في كل صف.

```js
assert(
  matrix[0].length == 2 && matrix[1].length === 2 && matrix[2].length === 2
);
```

يجب أن ينتج `zeroArray(4,3)` قائمة تحتوي علي 4 صفوف من 3 أعمدة من الأصفار.

```js
assert(JSON.stringify(zeroArray(4,3)) == '[[0,0,0],[0,0,0],[0,0,0],[0,0,0]]');
```

# --seed--

## --seed-contents--

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

# --solutions--

```js
function zeroArray(m, n) {
 // Creates a 2-D array with m rows and n columns of zeroes
 let newArray = [];
 for (let i = 0; i < m; i++) {
   let row = [];
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
