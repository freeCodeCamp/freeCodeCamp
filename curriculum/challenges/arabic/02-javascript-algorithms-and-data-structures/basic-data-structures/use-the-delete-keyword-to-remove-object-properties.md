---
id: 587d7b7c367417b2b2512b1b
title: استخدم كلمة delete لإزالة خصائص الكائن (Use the delete Keyword to Remove Object Properties)
challengeType: 1
forumTopicId: 301168
dashedName: use-the-delete-keyword-to-remove-object-properties
---

# --description--

الآن أنت تعرف ما هي objects ومميزاتها الأساسية. وباختصار، فهي مخازن بطريقه key-value توفر طريقة مرنة وبديهية لهيكلة البيانات، ***و***، و توفر وقت بحث سريع جدا. وطوال بقية هذه التحديات، سوف نصف عدة عمليات مشتركة يمكنك القيام بها على objects حتى تصبح مرتاحا في تطبيق هياكل البيانات المفيدة هذه في برامجك.

في تحديات سابقة، إضافة وتعديل أزواج key-value في object ما. هنا سنرى كيف يمكننا *إزالة* زوج key-value من object.

عد النظر في مثال object باسم `foods` مرة أخيرة. إذا أردنا إزالة key باسم `apples`، يمكننا إزالته باستخدام كلمة `delete` هكذا:

```js
delete foods.apples;
```

# --instructions--

استخدم كلمة delete لإزالة keys الآتية `oranges`, و `plums`, و `strawberries` من object باسم `foods`.

# --hints--

يجب أن يحتوي object باسم `foods` على ثلاث keys فقط: `apples`, و `grapes`, و `bananas`.

```js
assert(
  !foods.hasOwnProperty('oranges') &&
    !foods.hasOwnProperty('plums') &&
    !foods.hasOwnProperty('strawberries') &&
    Object.keys(foods).length === 3
);
```

يجب إزالة keys الآتية `oranges`, و `plums`, و `strawberries` باستخدام `delete`.

```js
assert(
  code.search(/oranges:/) !== -1 &&
    code.search(/plums:/) !== -1 &&
    code.search(/strawberries:/) !== -1
);
```

# --seed--

## --seed-contents--

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// Only change code below this line

// Only change code above this line

console.log(foods);
```

# --solutions--

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

delete foods.oranges;
delete foods.plums;
delete foods.strawberries;

console.log(foods);
```
