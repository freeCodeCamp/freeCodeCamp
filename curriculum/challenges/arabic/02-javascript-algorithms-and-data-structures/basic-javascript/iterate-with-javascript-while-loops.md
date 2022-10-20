---
id: cf1111c1c11feddfaeb1bdef
title: التكرار حلَقات While في JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/c8QbnCM'
forumTopicId: 18220
dashedName: iterate-with-javascript-while-loops
---

# --description--

يمكنك تشغيل نفس الكود عدة مرات باستخدام حلقة.

النوع الأول من الحلقة التي سنتعلمها تسمى حلقة `while` لأنها تعمل بينما يكون الشرط المحدد صحيحا ويتوقف عندما يصبح الشرط غير صحيح.

```js
const ourArray = [];
let i = 0;

while (i < 5) {
  ourArray.push(i);
  i++;
}
```

في مثال الكود أعلاه، `while` سوف تنفذ 5 مرات و تضيف الأرقام من 0 إلى 4 إلى `ourArray`.

دعونا نحاول جعل حلقة while تعمل عن طريق أضافة القيم إلى قائمة.

# --instructions--

أضف الأرقام 5 إلى 0 (شاملة) بترتيب تنازلي إلى `myArray` باستخدام `while`.

# --hints--

يجب أن تستخدم حلقة `while`.

```js
assert(code.match(/while/g));
```

يجب أن يساوي `myArray` قيمة `[5, 4, 3, 2, 1, 0]`.

```js
assert.deepEqual(myArray, [5, 4, 3, 2, 1, 0]);
```

# --seed--

## --after-user-code--

```js
if(typeof myArray !== "undefined"){(function(){return myArray;})();}
```

## --seed-contents--

```js
// Setup
const myArray = [];

// Only change code below this line

```

# --solutions--

```js
const myArray = [];
let i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
}
```
