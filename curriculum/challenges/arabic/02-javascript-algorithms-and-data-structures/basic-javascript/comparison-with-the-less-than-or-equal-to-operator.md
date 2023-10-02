---
id: 56533eb9ac21ba0edf2244d7
title: المقارنات باستخدام مشغل اصغر من أو يساوي
challengeType: 1
videoUrl: 'https://scrimba.com/c/cNVR7Am'
forumTopicId: 16788
dashedName: comparison-with-the-less-than-or-equal-to-operator
---

# --description--

مشغل اصغر من أو يساوي، (`<=`) يقارن بين قيم رقمين. إذا كان الرَّقَم إلى اليسار أقل من أو يساوي الرَّقَم إلى اليمين، فإنه يعيد `true`. إذا كان الرَّقَم الموجود على اليسار أكبر من الرَّقَم الموجود على اليمين، فإنه يعيد `false`. وعلى غرار مشغل المساواة، يحول مشغل اصغر من أو يساوي أنواع البيانات عند مقارنتها.

**مثال**

```js
4   <= 5 // true
'7' <= 7 // true
5   <= 5 // true
3   <= 2 // false
'8' <= 4 // false
```

# --instructions--

أضف مشغل اصغر من أو يساوي إلى السطور المشار إليها بحيث تكون تعبيرات return منطقية.

# --hints--

يجب أن ينتج `testLessOrEqual(0)` المقطع النصي `Smaller Than or Equal to 12`

```js
assert(testLessOrEqual(0) === 'Smaller Than or Equal to 12');
```

يجب أن ينتج `testLessOrEqual(11)` المقطع النصي `Smaller Than or Equal to 12`

```js
assert(testLessOrEqual(11) === 'Smaller Than or Equal to 12');
```

يجب أن ينتج `testLessOrEqual(12)` المقطع النصي `Smaller Than or Equal to 12`

```js
assert(testLessOrEqual(12) === 'Smaller Than or Equal to 12');
```

يجب أن ينتج `testLessOrEqual(23)` المقطع النصي `Smaller Than or Equal to 24`

```js
assert(testLessOrEqual(23) === 'Smaller Than or Equal to 24');
```

يجب أن ينتج `testLessOrEqual(24)` المقطع النصي `Smaller Than or Equal to 24`

```js
assert(testLessOrEqual(24) === 'Smaller Than or Equal to 24');
```

يجب أن ينتج `testLessOrEqual(25)` المقطع النصي `More Than 24`

```js
assert(testLessOrEqual(25) === 'More Than 24');
```

يجب أن ينتج `testLessOrEqual(55)` المقطع النصي `More Than 24`

```js
assert(testLessOrEqual(55) === 'More Than 24');
```

يجب عليك استخدام مشغل `<=` مرتين في الأقل

```js
assert(code.match(/val\s*<=\s*('|")*\d+('|")*/g).length > 1);
```

# --seed--

## --seed-contents--

```js
function testLessOrEqual(val) {
  if (val) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);
```

# --solutions--

```js
function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}
```
