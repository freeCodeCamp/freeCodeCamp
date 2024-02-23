---
id: 56533eb9ac21ba0edf2244db
title: مقدمة إلى تعبيرات Else/If
challengeType: 1
videoUrl: 'https://scrimba.com/c/caeJ2hm'
forumTopicId: 18206
dashedName: introducing-else-if-statements
---

# --description--

إذا كان لديك شروط متعددة تحتاج التعامل معها، يمكنك استخدام `if` بالإضافة مع `else if` في تسلسل.

```js
if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}
```

# --instructions--

حول المنطق (logic) لاستخدام `else if`.

# --hints--

يجب أن يكون لديك اثنين من تعبيرات `else` في الأقل

```js
assert(code.match(/else/g).length > 1);
```

يجب أن يكون لديك اثنين من تعبيرات `if` في الأقل

```js
assert(code.match(/if/g).length > 1);
```

يجب أن يكون لديك قوسين مقرونتين (curly braces) لكل `if else` لكتابه الكود بداخلها.

```js
assert(
  code.match(
    /if\s*\((.+)\)\s*\{[\s\S]+\}\s*else\s+if\s*\((.+)\)\s*\{[\s\S]+\}\s*else\s*\{[\s\S]+\s*\}/
  )
);
```

يجب أن تنتج `testElseIf(0)` المقطع النصي `Smaller than 5`

```js
assert(testElseIf(0) === 'Smaller than 5');
```

يجب أن تنتج `testElseIf(5)` المقطع النصي `Between 5 and 10`

```js
assert(testElseIf(5) === 'Between 5 and 10');
```

يجب أن تنتج `testElseIf(7)` المقطع النصي `Between 5 and 10`

```js
assert(testElseIf(7) === 'Between 5 and 10');
```

يجب أن تنتج `testElseIf(10)` المقطع النصي `Between 5 and 10`

```js
assert(testElseIf(10) === 'Between 5 and 10');
```

يجب أن تنتج `testElseIf(12)` المقطع النصي `Greater than 10`

```js
assert(testElseIf(12) === 'Greater than 10');
```

# --seed--

## --seed-contents--

```js
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  if (val < 5) {
    return "Smaller than 5";
  }

  return "Between 5 and 10";
}

testElseIf(7);
```

# --solutions--

```js
function testElseIf(val) {
  if(val > 10) {
    return "Greater than 10";
  } else if(val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}
```
