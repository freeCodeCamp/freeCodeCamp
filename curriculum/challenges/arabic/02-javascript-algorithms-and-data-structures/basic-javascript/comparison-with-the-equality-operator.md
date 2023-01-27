---
id: 56533eb9ac21ba0edf2244d0
title: المقارنات باستخدام عملية المساواة (==)
challengeType: 1
videoUrl: 'https://scrimba.com/c/cKyVMAL'
forumTopicId: 16784
dashedName: comparison-with-the-equality-operator
---

# --description--

هناك العديد من <dfn>عمليات المساواة</dfn> في JavaScript. كل هذه العمليات يعيدون قيمة boolean منطقية `true` أو `false`.

ابسط أنواع هذه العمليات هي عملية مقارنة المساواة `==`. تقارن عملية المساواة بين قيمتين وتعيد `true` إذا كانتا القيمتين متساويتين أو `false` إذا لم تكونا متساويتين. لاحظ أن المساواة تختلف عن تعيين (`=`)، التي تعطي القيمة على يمين العملية إلى متغير على يسارها.

```js
function equalityTest(myVal) {
  if (myVal == 10) {
    return "Equal";
  }
  return "Not Equal";
}
```

إذا كانت قيمة `myVal` تساوي `10`، عملية المساواة تعيد `true`، و بهذا سيتم تنفيذ التعليمات البرمجية في الأقواس، وستعيد الوظيفة `Equal`. وإلا فإن الوظيفة ستعيد `Not Equal`. لكي تقوم JavaScript بمقارنة نوعين مختلفين في ا <dfn> نوع البيانات</dfn> (على سبيل المثال، مقارنة بين نوع `numbers` و نوع `strings`)، يجب أن تحول احدمها إلى نوع الآخر. هذا يُعرف بالقسر النوع (Type Coercion). بمجرد فعل ذلك، يتمكن Javascript من المقارنة بين المصطلحات التالية:

```js
1   ==  1  // true
1   ==  2  // false
1   == '1' // true
"3" ==  3  // true
```

# --instructions--

اضف عملية المساواة إلى المكان المشار أليه كي تعيد الوظيفة `Equal` إذا تساوي `val` قيمة `12`.

# --hints--

يجب أن `testEqual(10)` تعيد `Not Equal`

```js
assert(testEqual(10) === 'Not Equal');
```

يجب أن `testEqual(12)` تعيد `Equal`

```js
assert(testEqual(12) === 'Equal');
```

يجب أن `testEqual("12")` تعيد `Equal`

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
