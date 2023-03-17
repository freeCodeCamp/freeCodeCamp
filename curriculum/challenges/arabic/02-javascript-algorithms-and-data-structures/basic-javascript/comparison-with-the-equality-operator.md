---
id: 56533eb9ac21ba0edf2244d0
title: المقارنة باستخدام مشغِّل المساواة (==)
challengeType: 1
videoUrl: 'https://scrimba.com/c/cKyVMAL'
forumTopicId: 16784
dashedName: comparison-with-the-equality-operator
---

# --description--

هناك العديد من <dfn>مشغلي المقارنة</dfn> في JavaScript. كل هذه المشغلين ينتجون قيمة منطقية boolean من `true` أو `false`.

ابسط نوع مشغِّل هو مشغِّل المساواة `==`. يقارن مشغِّل المساواة بين قيمتين و ينتج `true` إذا كانتا القيمتين متساويتين أو `false` إذا لم تكونا كذلك. لاحظ أن المساواة تختلف عن التعيين (`=`)، التي تعطي القيمة على يمين المشغِّل إلى متغير على يساره.

```js
function equalityTest(myVal) {
  if (myVal == 10) {
    return "Equal";
  }
  return "Not Equal";
}
```

إذا كانت قيمة `myVal` تساوي `10`، عملية المساواة تعيد `true`، و بهذا سيتم تنفيذ التعليمات البرمجية المكتوبة بين الأقواس، وستنتج الوظيفة `Equal`. وإلا فإن الوظيفة ستنتج `Not Equal`. لكي تقوم JavaScript بمقارنة بين نوعين مختلفين من <dfn>أنواع البيانات</dfn> (على سبيل المثال، نوع `numbers` و نوع `strings`)، يجب أن تحوِّل احدمها إلى النوع الآخر. هذا يُعرف بقسر النوع (Type Coercion). بمجرد فعل ذلك، يتمكن Javascript من المقارنة بين المصطلحات كما يلي:

```js
1   ==  1  // true
1   ==  2  // false
1   == '1' // true
"3" ==  3  // true
```

# --instructions--

اضف مشغِّل المساواة إلى المكان المشار أليه كي تنتج الوظيفة `Equal` إذا تساوت `val` بعدد `12`.

# --hints--

يجب أن `testEqual(10)` تنتج `Not Equal`

```js
assert(testEqual(10) === 'Not Equal');
```

يجب أن `testEqual(12)` تنتج `Equal`

```js
assert(testEqual(12) === 'Equal');
```

يجب أن `testEqual("12")` تنتج `Equal`

```js
assert(testEqual('12') === 'Equal');
```

يجب عليك أن تستخدم العملية `==`

```js
assert(code.match(/==/g) && !code.match(/===/g));
```

# --seed--

## --seed-contents--

```js
// Setup
function testEqual(val) {
  if (val) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);
```

# --solutions--

```js
function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}
```
