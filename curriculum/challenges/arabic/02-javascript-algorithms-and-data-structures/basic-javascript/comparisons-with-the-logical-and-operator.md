---
id: 56533eb9ac21ba0edf2244d8
title: المقارنات باستخدام مشغل الإضافة المنطقي (&&)
challengeType: 1
videoUrl: 'https://scrimba.com/c/cvbRVtr'
forumTopicId: 16799
dashedName: comparisons-with-the-logical-and-operator
---

# --description--

ستحتاج أحيانًا إلى اختبار أكثر من شيء في وقت واحد. مشغل <dfn>الإضافة المنطقي</dfn> ورمزه (`&&`) يرجع `true` فقط إذا كان <dfn>المعاملتين</dfn> إلى اليسار واليمين صحيحين.

ويمكن تحقيق نفس التأثير عن طريق وضع عبارة if داخل if أخري:

```js
if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";
```

سوف يعيد `Yes` فقط إذا كان `num` أكبر من `5` وأقل من `10`. ويمكن كتابة نفس المنطق كما يلي:

```js
if (num > 5 && num < 10) {
  return "Yes";
}
return "No";
```

# --instructions--

استبدل العبارتان if إلى if واحدة، باستخدام المشغل `&&`، الذي سوف يعيد المقطع `Yes` إذا كان `val` أقل من أو يساوي `50` وأكثر من أو يساوي `25`. خلاف ذلك، سوف يعيد المقطع `No`.

# --hints--

يجب عليك استخدام المشغل `&&` مرة واحدة

```js
assert(code.match(/&&/g).length === 1);
```

يجب أن يكون لديك عبارة `if` واحد فقط

```js
assert(code.match(/if/g).length === 1);
```

يجب أن ينتج `testLogicalAnd(0)` المقطع النصي `No`

```js
assert(testLogicalAnd(0) === 'No');
```

يجب أن ينتج `testLogicalAnd(24)` المقطع النصي `No`

```js
assert(testLogicalAnd(24) === 'No');
```

يجب أن ينتج `testLogicalAnd(25)` المقطع النصي `Yes`

```js
assert(testLogicalAnd(25) === 'Yes');
```

يجب أن ينتج `testLogicalAnd(30)` المقطع النصي `Yes`

```js
assert(testLogicalAnd(30) === 'Yes');
```

يجب أن ينتج `testLogicalAnd(50)` المقطع النصي `Yes`

```js
assert(testLogicalAnd(50) === 'Yes');
```

يجب أن ينتج `testLogicalAnd(51)` المقطع النصي `No`

```js
assert(testLogicalAnd(51) === 'No');
```

يجب أن ينتج `testLogicalAnd(75)` المقطع النصي `No`

```js
assert(testLogicalAnd(75) === 'No');
```

يجب أن ينتج `testLogicalAnd(80)` المقطع النصي `No`

```js
assert(testLogicalAnd(80) === 'No');
```

# --seed--

## --seed-contents--

```js
function testLogicalAnd(val) {
  // Only change code below this line

  if (val) {
    if (val) {
      return "Yes";
    }
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);
```

# --solutions--

```js
function testLogicalAnd(val) {
  if (val >= 25 && val <= 50) {
    return "Yes";
  }
  return "No";
}
```
