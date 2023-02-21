---
id: 587d7b87367417b2b2512b43
title: استخدام Arrow Functions لكتابة الوظائف المجهولة الموجزة
challengeType: 1
forumTopicId: 301211
dashedName: use-arrow-functions-to-write-concise-anonymous-functions
---

# --description--

في جافا سكريبت، غالبا ما لا نحتاج إلى تسمية الـ functions، خاصة عند تمرير الـ fuction كـ argument لـ function أخر. وبدلا من ذلك، نحن ننشئ inline functions. نحن لسنا بحاجة إلى تسمية هذه الـ functions لأننا لا نعيد استخدامها في أي مكان آخر.

ولتحقيق ذلك، كثيرا ما نستخدم الصيغة التالية:

```js
const myFunc = function() {
  const myVar = "value";
  return myVar;
}
```

يزودنا ES6 بـ syntactic sugar اي طريقة مبسطة لكي لا نضطر إلى كتابة anonymous functions بهذه الطريقة. بدلاً من ذلك، يمكنك استخدام **arrow function syntax**:

```js
const myFunc = () => {
  const myVar = "value";
  return myVar;
}
```

عندما لا يكون هناك function body، و يوجد فقط قيمة إرجاع، تسمح لك الـ arrow function بحذف كلمة `return` وكذلك الأقواس المحيطة بالكود. وهذا يساعد على تبسيط الـ functions الأصغر حجماً في بيانات ذات سطر واحد:

```js
const myFunc = () => "value";
```

سيظل هذا الكود يعيد string بقيمة `value` افتراضيا.

# --instructions--

أعد كتابة الـ function المسندة إلى المتغير `magic` الذي يرجع `new Date()` لتستخدم الـ arrow function syntax. أيضا، تأكد من عدم تعريف أي شيء باستخدام كلمة `var`.

# --hints--

يجب عليك استبدال كلمة `var`.

```js
assert.notMatch(code, /var/g)
```

`magic` يجب أن يكون متغير ثابت (باستخدام `const`).

```js
assert.match(code, /const\s+magic/g)
```

`magic` يجب أن يكون `function`.

```js
assert(typeof magic === 'function');
```

`magic()` يجب أن يعيد التاريخ الصحيح.

```js
assert(magic().setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0));
```

لا ينبغي استخدام كلمة `function`.

```js
assert.notMatch(code, /function/g)
```

# --seed--

## --seed-contents--

```js
var magic = function() {
  return new Date();
};
```

# --solutions--

```js
const magic = () => {
  return new Date();
};
```
