---
id: 587d7b88367417b2b2512b47
title: Use the Rest Parameter with Function Parameters
challengeType: 1
forumTopicId: 301221
dashedName: use-the-rest-parameter-with-function-parameters
---

# --description--

من أجل مساعدتنا في إنشاء functions أكثر مرونة، يوفر ES6 الـ <dfn>rest parameters</dfn> للـ function parameters. مع rest parameter، يمكنك إنشاء functions تأخذ عددا متغيرا من الـ arguments. يتم تخزين هذه الـ arguments في array يمكن الوصول إليها في وقت لاحق من داخل الـ function.

تحقق من هذا الكود:

```js
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));
```

ستعرض وحدة التحكم السلاسل `You have passed 3 arguments.` و `You have passed 4 arguments.`.

الـ rest parameter تزيل الحاجة إلى التحقق من array الـ `args` وتسمح لنا بتطبيق `map()` و `filter()` و `reduce()` على array المعلمات (parameters).

# --instructions--

قم بتعديل الدالة `sum` باستخدام rest parameter بطريقة تجعل الدالة `sum` قادرة على أخذ أي عدد من الـ arguments وإرجاع مجموعها.

# --hints--

نتيجة `sum(0,1,2)` يجب أن تكون 3

```js
assert(sum(0, 1, 2) === 3);
```

نتيجة `sum(1,2,3,4)` يجب ان تكون 10

```js
assert(sum(1, 2, 3, 4) === 10);
```

نتيجة `sum(5)` يجب أن تكون 5

```js
assert(sum(5) === 5);
```

نتيجة `sum()` يجب أن تكون 0

```js
assert(sum() === 0);
```

`sum` يجب أن يكون arrow function يستخدم rest parameter syntax الآتي (`...`) على معلمة `args`.

```js
assert(__helpers.removeWhiteSpace(code).match(/sum=\(\.\.\.args\)=>/));
```

# --seed--

## --seed-contents--

```js
const sum = (x, y, z) => {
  const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
}
```

# --solutions--

```js
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}
```
