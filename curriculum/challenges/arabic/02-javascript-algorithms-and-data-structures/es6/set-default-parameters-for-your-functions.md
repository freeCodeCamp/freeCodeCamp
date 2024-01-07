---
id: 587d7b88367417b2b2512b46
title: تعيين الوسائط (Parameters) الافتراضية للوظيفتك (Functions)
challengeType: 1
forumTopicId: 301209
dashedName: set-default-parameters-for-your-functions
---

# --description--

من أجل مساعدتنا في إنشاء وظائف (functions) أكثر مرونة، يوفر ES6 أمكانية وضع <dfn>وسائط أفتراضية (default parameters)</dfn> إلى الوظائف (functions).

تحقق من هذا الكود:

```js
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());
```

ستعرض وحدة التحكم الـ strings الآتية `Hello John` و `Hello Anonymous`.

يبدأ الوسيط الافتراضي (default parameter) في العمل عندما لا يتم تحديد المعطى argument (عندما تكون undefined). كما ترون في المثال أعلاه، سوف يتلقى الوسيط (parameter) المسمى `name` الآتي القيمة الافتراضية `Anonymous`، عندما لا تقدم قيمة للوسيط. يمكنك إضافة القيم الافتراضية لأي عدد من الوسائط (parameters) كما تريد.

# --instructions--

عدّل الوظيفة `increment` بإضافة الوسائط الافتراضية (default parameters) بحيث تضيف 1 إلى `number` إذا لم يتم تحديد `value`.

# --hints--

نتيجة `increment(5, 2)` يجب أن تكون `7`.

```js
assert(increment(5, 2) === 7);
```

نتيجة `increment(5)` يجب أن تكون `6`.

```js
assert(increment(5) === 6);
```

يجب استخدام قيمة `1` للوسائط الافتراضية (default parameter) في `value`.

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
