---
id: 587d7b89367417b2b2512b48
title: Use the Spread Operator to Evaluate Arrays In-Place
challengeType: 1
forumTopicId: 301222
dashedName: use-the-spread-operator-to-evaluate-arrays-in-place
---

# --description--

يقدم ES6 <dfn>مشغل الانتشار (spread operator)</dfn>، الذي يسمح لنا بتوسيع القوائم (arrays) وغيرها من العبارات في الأماكن التي يتوقع أن تكون فيها وسائط (parameters) أو عناصر متعددة.

كود ES5 أدناه يستخدم `apply()` لحساب القيمة القصوى في الـ array:

```js
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);
```

`maximus` ستكون لة القيمة `89`.

كان علينا استخدام `Math.max.apply(null, arr)` لأن `Math.max(arr)` يرجع `NaN`. `Math.max()` يتوقع الـ arguments مفصولة بفواصل ولكن ليس array. spread operator يجعل قراءة الجملة هذه وصيانتها أفضل بكثير.

```js
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
```

`maximus` ستكون لة القيمة `89`.

`...arr` يعيد array غير معبأ. In other words, it spreads the array. ومع ذلك، فإن spread operator يعمل في مكانه فقط، كما هو الحال في argument لـ functiom أو في array. For example:

```js
const spreaded = [...arr];
```

However, the following code will not work:

```js
const spreaded = ...arr;
```

# --instructions--

Copy all contents of `arr1` into another array `arr2` using the spread operator.

# --hints--

`arr2` should be correct copy of `arr1`.

```js
assert(arr2.every((v, i) => v === arr1[i]) && arr2.length);
```

`...` spread operator should be used to duplicate `arr1`.

```js
assert(__helpers.removeJSComments(code).match(/Array\(\s*\.\.\.arr1\s*\)|\[\s*\.\.\.arr1\s*\]/));
```

`arr2` should remain unchanged when `arr1` is changed.

```js
assert((arr1, arr2) => {
  arr1.push('JUN');
  return arr2.length < arr1.length;
});
```

# --seed--

## --seed-contents--

```js
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [];  // Change this line

console.log(arr2);
```

# --solutions--

```js
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];
```
