---
id: 56533eb9ac21ba0edf2244d1
title: المقارنات باستخدام مشغِّل المساواة الصارمة
challengeType: 1
videoUrl: 'https://scrimba.com/c/cy87atr'
forumTopicId: 16790
dashedName: comparison-with-the-strict-equality-operator
---

# --description--

يكون مشغل المساواة الصارمة (`===`) نظير مشغل المساواة (`==`). ومع ذلك، وخلافاً لمشغل المساواة، الذي يحاول تحويل القيمتين إلى نوع مشترك، لا يقوم مشغل المساواة الصارمة (strict equality) بإجراء تحويل من نوع إلى آخر.

وإذا كانت القيم التي تقارن ذات أنواع مختلفة، فإنها تعدّ غير متساوية، وسيعيد مشغل المساواة الصارمة القيمة false.

**على سبيل المثال**

```js
3 ===  3  // true
3 === '3' // false
```

في المثال الثاني، تكون `3` من نوع `Number` ويكون `'3'` من نوع `String`.

# --instructions--

استخدم مشغل المساواة الصارمة في بيان `if` حتي تنتج الوظيفة مقطع نصي قيمته `Equal` عندما يكون `val` مساوي بطريقة صارمة (strictly equal) إلى `7`.

# --hints--

يجب أن ينتج `testStrict(10)` المقطع النصي `Not Equal`

```js
assert(testStrict(10) === 'Not Equal');
```

يجب أن ينتج `testStrict(7)` مقطع `Equal`

```js
assert(testStrict(7) === 'Equal');
```

يجب أن ينتج `testStrict("7")` المقطع النصي `Not Equal`

```js
assert(testStrict('7') === 'Not Equal');
```

يجب عليك استخدام مشغل `===`

```js
assert(code.match(/(val\s*===\s*\d+)|(\d+\s*===\s*val)/g).length > 0);
```

# --seed--

## --seed-contents--

```js
// Setup
function testStrict(val) {
  if (val) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);
```

# --solutions--

```js
function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}
```
