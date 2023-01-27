---
id: 56533eb9ac21ba0edf2244d6
title: المقارنات باستخدام مشغل ألأصغر من (>)
challengeType: 1
videoUrl: 'https://scrimba.com/c/cNVRWtB'
forumTopicId: 16789
dashedName: comparison-with-the-less-than-operator
---

# --description--

يقارن مشغل آلأصغر من (`<`) بين قيمتين رقمين. إذا كان الرَّقَم إلى اليسار أصغر من الرَّقَم إلى اليمين، فإنه يرجع `true`. خلاف ذلك، فإنه يرجع `false`. وعلى غرار المشغل المعني بالمساواة، يقوم المشغل أقل من بتحويل أنواع البيانات عند مقارنتها.

**مثال**

```js
2   < 5 // true
'3' < 7 // true
5   < 5 // false
3   < 2 // false
'8' < 4 // false
```

# --instructions--

أضف مشغل أقل من إلى الخطوط المشار إليها بحيث تكون تعبيرات مراجعة منطقية.

# --hints--

يجب أن ينتج `testLessThan(0)` مقطع `Under 25`

```js
assert(testLessThan(0) === 'Under 25');
```

يجب أن ينتج `testLessThan(24)` مقطع `Under 25`

```js
assert(testLessThan(24) === 'Under 25');
```

يجب أن ينتج `testLessThan(25)` مقطع `Under 55`

```js
assert(testLessThan(25) === 'Under 55');
```

يجب أن ينتج `testLessThan(54)` مقطع `Under 55`

```js
assert(testLessThan(54) === 'Under 55');
```

يجب أن ينتج `testLessThan(55)` مقطع `55 or Over`

```js
assert(testLessThan(55) === '55 or Over');
```

يجب أن ينتج `testLessThan(99)` مقطع `55 or Over`

```js
assert(testLessThan(99) === '55 or Over');
```

يجب عليك استخدام مشغل `<` مرتين في الأقل

```js
assert(code.match(/val\s*<\s*('|")*\d+('|")*/g).length > 1);
```

# --seed--

## --seed-contents--

```js
function testLessThan(val) {
  if (val) {  // Change this line
    return "Under 25";
  }

  if (val) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);
```

# --solutions--

```js
function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}
```
