---
id: 5675e877dbd60be8ad28edc6
title: التكرار عبر محتويات قائمة باستخدام حلقة for
challengeType: 1
videoUrl: 'https://scrimba.com/c/caeR3HB'
forumTopicId: 18216
dashedName: iterate-through-an-array-with-a-for-loop
---

# --description--

من المهام الشائعة في JavaScript، التكرار عبر محتويات القائمة. إحدى الطرق لفعل ذلك هي استخدام حلقة `for`. سينتج هذا الكود كل عنصر من قائمة `arr` إلى وحدة التحكم:

```js
const arr = [10, 9, 8, 7, 6];

for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
```

تذكر أن القوائم (arrays) لديها ترتيب (index) من الصفر، مما يعني أن ترتيب الأخير في القائمة (array) هو `length - 1`. يكون شرطك لهذه الحلقة (loop) هو `i < arr.length`، الذي يوقف الحلقة (loop) عندما `i` يساوي `length`. في هذه الحالة يكون آخر تكرار `i === 4`, بمعنى عندما تصبح `i` مساوي `arr.length - 1` وتنتج `6` ألى وحدة التحكم. ثم `i` يزيد إلى `5`، وتنتهي الحلقة (loop) لأن `i < arr.length` يكون `false`.

# --instructions--

عرف وهيئ المتغير `total` ليساوي `0`. استخدم الحلقة (loop) باسم `for` لإضافة قيمة كل عنصر من `myArr` إلى `total`.

# --hints--

يجب إعلان وتهيئة `total` بقيمة 0.

```js
assert(code.match(/(var|let|const)\s*?total\s*=\s*0.*?;?/));
```

يجب أن يساوي `total` قيمة 20.

```js
assert(total === 20);
```

يجب عليك استخدام حلقة `for` للتكرار عبر `myArr`.

```js
assert(/for\s*\(/g.test(code) && /myArr\s*\[/g.test(code));
```

لا يجب عليك محاولة تعيين القيمة 20 إلى `total` قاصدًا.

```js
assert(!__helpers.removeWhiteSpace(code).match(/total[=+-]0*[1-9]+/gm));
```

# --seed--

## --after-user-code--

```js
(function(){if(typeof total !== 'undefined') { return "total = " + total; } else { return "total is undefined";}})()
```

## --seed-contents--

```js
// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line

```

# --solutions--

```js
const myArr = [2, 3, 4, 5, 6];
let total = 0;

for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
```
