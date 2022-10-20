---
id: 56533eb9ac21ba0edf2244d5
title: المقارنات باستخدام مشغل أكبر من أو يساوي (=>)
challengeType: 1
videoUrl: 'https://scrimba.com/c/c6KBqtV'
forumTopicId: 16785
dashedName: comparison-with-the-greater-than-or-equal-to-operator
---

# --description--

يقارن مشغل أكبر من أو يساوي (`>=`) بين قيمتين لرقمين. إذا كان الرَّقَم إلى اليسار أكبر من لو يساوي الرَّقَم إلى اليمين، فإنه يرجع `true`. خلاف ذلك، فإنه يرجع `false`.

وعلى غرار المشغل المعني بالمساواة، سيحول مشغل أكبر من أو يساوي أنواع البيانات من القيم عند مقارنتها.

**على سبيل المثال**

```js
6   >=  6  // true
7   >= '3' // true
2   >=  3  // false
'7' >=  9  // false
```

# --instructions--

أضف أكبر من أو يساوي إلى الخطوط المشار إليها بحيث تكون عبارات المراجعة منطقية.

# --hints--

يجب أن ينتج `testGreaterOrEqual(0)` مقطع `Less than 10`

```js
assert(testGreaterOrEqual(0) === 'Less than 10');
```

يجب أن ينتج `testGreaterOrEqual(9)` مقطع `Less than 10`

```js
assert(testGreaterOrEqual(9) === 'Less than 10');
```

يجب أن ينتج `testGreaterOrEqual(10)` مقطع `10 or Over`

```js
assert(testGreaterOrEqual(10) === '10 or Over');
```

يجب أن ينتج `testGreaterOrEqual(11)` مقطع `10 or Over`

```js
assert(testGreaterOrEqual(11) === '10 or Over');
```

يجب أن ينتج `testGreaterOrEqual(19)` مقطع `10 or Over`

```js
assert(testGreaterOrEqual(19) === '10 or Over');
```

يجب أن ينتج `testGreaterOrEqual(100)` مقطع `20 or Over`

```js
assert(testGreaterOrEqual(100) === '20 or Over');
```

يجب أن ينتج `testGreaterOrEqual(21)` مقطع `20 or Over`

```js
assert(testGreaterOrEqual(21) === '20 or Over');
```

يجب عليك استخدام مشغل `>=` مرتين في الأقل

```js
assert(code.match(/val\s*>=\s*('|")*\d+('|")*/g).length > 1);
```

# --seed--

## --seed-contents--

```js
function testGreaterOrEqual(val) {
  if (val) {  // Change this line
    return "20 or Over";
  }

  if (val) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);
```

# --solutions--

```js
function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}
```
