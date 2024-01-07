---
id: 56533eb9ac21ba0edf2244d4
title: المقارنات باستخدام مشغل أكبر من (>)
challengeType: 1
videoUrl: 'https://scrimba.com/c/cp6GbH4'
forumTopicId: 16786
dashedName: comparison-with-the-greater-than-operator
---

# --description--

مشغل أكبر من (`>`) يقارن بين قيمة رقمين. إذا كان الرَّقَم إلى اليسار أكبر من الرَّقَم إلى اليمين (لأن التعليمات البرمجية بالإنجليزية)، فإنه ينتج `true`. خلاف ذلك، فإنه ينتج `false`.

وعلى غرار مشغل المساواة، فإن مشغل أكبر من سيحول أنواع قيم البيانات عند مقارنتها.

**على سبيل المثال**

```js
5   >  3  // true
7   > '3' // true
2   >  3  // false
'1' >  9  // false
```

# --instructions--

أضف مشغل أكبر من (<) إلى الخطوط المشار إليها بحيث تكون التعبيرات المنتجة منطقية.

# --hints--

يجب أن ينتج `testGreaterThan(0)` مقطع نصي `10 or Under`

```js
assert(testGreaterThan(0) === '10 or Under');
```

يجب أن ينتج `testGreaterThan(10)` مقطع نصي `10 or Under`

```js
assert(testGreaterThan(10) === '10 or Under');
```

يجب أن ينتج `testGreaterThan(11)` مقطع نصي `Over 10`

```js
assert(testGreaterThan(11) === 'Over 10');
```

يجب أن ينتج `testGreaterThan(99)` مقطع نصي `Over 10`

```js
assert(testGreaterThan(99) === 'Over 10');
```

يجب أن ينتج `testGreaterThan(100)` مقطع نصي `Over 10`

```js
assert(testGreaterThan(100) === 'Over 10');
```

يجب أن ينتج `testGreaterThan(101)` مقطع نصي `Over 100`

```js
assert(testGreaterThan(101) === 'Over 100');
```

يجب أن ينتج `testGreaterThan(150)` مقطع نصي `Over 100`

```js
assert(testGreaterThan(150) === 'Over 100');
```

يجب عليك استخدام مشغل `>` مرتين في الأقل

```js
assert(code.match(/val\s*>\s*('|")*\d+('|")*/g).length > 1);
```

# --seed--

## --seed-contents--

```js
function testGreaterThan(val) {
  if (val) {  // Change this line
    return "Over 100";
  }

  if (val) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);
```

# --solutions--

```js
function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }
  if (val > 10) {  // Change this line
    return "Over 10";
  }
  return "10 or Under";
}
```
