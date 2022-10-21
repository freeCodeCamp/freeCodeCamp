---
id: 587d7b88367417b2b2512b46
title: تعيين المعلمات الافتراضية للدوال (Set Default Parameters for Your Functions)
challengeType: 1
forumTopicId: 301209
dashedName: set-default-parameters-for-your-functions
---

# --description--

من أجل مساعدتنا في إنشاء functions أكثر مرونة، يوفر ES6 الـ <dfn>default parameters</dfn> للـ functions.

تحقق من هذا الكود:

```js
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());
```

ستعرض وحدة التحكم الـ strings الآتية `Hello John` و `Hello Anonymous`.

يبدأ الـ default parameter في العمل عندما لا يتم تحديد الـ argument (عندما تكون undefined). كما ترون في المثال أعلاه، الـ parameter الآتي `name` سوف يتلقى القيمة الافتراضية `Anonymous` ، عندما لا تقدم قيمة للـ parameter. يمكنك إضافة القيم الافتراضية لاي عدد من الـ parameters كما تريد.

# --instructions--

قم بتعديل الدالة `increment` بإضافة الـ default parameters بحيث تضيف 1 إلى `number` إذا لم يتم تحديد `value`.

# --hints--

نتيجة `increment(5, 2)` يجب أن تكون `7`.

```js
assert(increment(5, 2) === 7);
```

نتيجة `increment(5)` يجب أن تكون `6`.

```js
assert(increment(5) === 6);
```

قيمة الـ default parameter لـ `1` يجب استخدامها لـ `value`.

```js
assert(code.match(/value\s*=\s*1/g));
```

# --seed--

## --seed-contents--

```js
// Only change code below this line
const increment = (number, value) => number + value;
// Only change code above this line
```

# --solutions--

```js
const increment = (number, value = 1) => number + value;
```
