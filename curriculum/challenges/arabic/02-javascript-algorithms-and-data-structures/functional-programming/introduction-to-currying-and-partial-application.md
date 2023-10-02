---
id: 587d7dab367417b2b2512b70
title: Introduction to Currying and Partial Application
challengeType: 1
forumTopicId: 301232
dashedName: introduction-to-currying-and-partial-application
---

# --description--

<dfn>arity</dfn> الـ function هو عدد الـ arguments التي يتطلبها. <dfn>Currying</dfn> الـ function يعني تحويل function من N arity الي N functions of arity 1، اي عدد N من الـ functions التي تأخذ argument واحد.

وبعبارة أخرى، فهي تعيد هيكلة الـ function بحيث يأخذ argument واحدة، ثم يعيد function أخر يأخذ الـ argument التالية، وهكذا.

إليك مثال:

```js
function unCurried(x, y) {
  return x + y;
}

function curried(x) {
  return function(y) {
    return x + y;
  }
}

const curried = x => y => x + y

curried(1)(2)
```

`curried(1)(2)` سيعيد `3`.

هذا مفيد في لرنامجك إذا كنت لا تستطيع توفير جميع الـ arguments للـ function في وقت واحد. يمكنك حفظ كل استدعاء للـ function في متغير، والذي سيحتفظ بمرجع الـ function المرتجع الذي يأخذ الـ argument التالية عندما تكون متاحة. إليك مثال يستخدم الـ curried function في المثال أعلاه:

```js
const funcForY = curried(1);
console.log(funcForY(2)); // 3
```

وبالمثل، <dfn>partial application</dfn> يمكن وصفه بأنه تطبيق بعض الـ arguments على function في وقت واحد وإعادة function أخر يطبق على المزيد من الـ arguments. إليك مثال:

```js
function impartial(x, y, z) {
  return x + y + z;
}

const partialFn = impartial.bind(this, 1, 2);
partialFn(10); // 13
```

# --instructions--

املأ نص الوظيفة (function) المسمى `add` بحيث تستخدم خاصية curry لإضافة الوسائط (parameters) المسمى `x`, و `y`, و `z`.

# --hints--

`add(10)(20)(30)` يجب أن يرجع `60`.

```js
assert(add(10)(20)(30) === 60);
```

`add(1)(2)(3)` يجب أن يرجع `6`.

```js
assert(add(1)(2)(3) === 6);
```

`add(11)(22)(33)` يجب أن يرجع `66`.

```js
assert(add(11)(22)(33) === 66);
```

يجب أن يتضمن الكود الخاص بك بيانا نهائيا يرجع `x + y + z`.

```js
assert(code.match(/[xyz]\s*?\+\s*?[xyz]\s*?\+\s*?[xyz]/g));
```

# --seed--

## --seed-contents--

```js
function add(x) {
  // Only change code below this line


  // Only change code above this line
}

add(10)(20)(30);
```

# --solutions--

```js
const add = x => y => z => x + y + z
```
