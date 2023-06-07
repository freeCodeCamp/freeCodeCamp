---
id: 56104e9e514f539506016a5c
title: تكرار الأرقام الفردية باستخدام حلقة For التكرارية (Iterate Odd Numbers With a For Loop)
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm8n7T9'
forumTopicId: 18212
dashedName: iterate-odd-numbers-with-a-for-loop
---

# --description--

لا تتطلب For loops مرور علي عناصر واحد تلو الآخر. بتغيير `final-expression` الخاص بك، يمكننا أن تعد بأرقام زوجية.

سنبدأ عند `i = 0` والحلقة (loop) مادام `i < 10`. أكثر قيمة `i` بمقدار 2 في كل loop باستخدام `i += 2`.

```js
const ourArray = [];

for (let i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
```

سوف تحتوي `ourArray` على `[0, 2, 4, 6, 8]` الآن. غيّر `initialization` حتى نتمكن من عد بالأرقام الفردية.

# --instructions--

اضف الأرقام الفردية من 1 ألى 9 ألى `myArray` باستخدام حلقة `for`.

# --hints--

يجب أن تستخدم حلقة `for`.

```js
assert(/for\s*\([^)]+?\)/.test(code));
```

يجب أن يساوي `myArray` قيمة `[1, 3, 5, 7, 9]`.

```js
assert.deepEqual(myArray, [1, 3, 5, 7, 9]);
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
for (let i = 1; i < 10; i += 2) {
  myArray.push(i);
}
```
