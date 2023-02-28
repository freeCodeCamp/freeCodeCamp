---
id: 56533eb9ac21ba0edf2244df
title: عدّة خيرات متشابهة في تعبيرات switch
challengeType: 1
videoUrl: 'https://scrimba.com/c/cdBKWCV'
forumTopicId: 18242
dashedName: multiple-identical-options-in-switch-statements
---

# --description--

إذا تم حذف عبارة `break` من عبارة `switch` في أي `case`، سيتم تنفيذ عبارات `case` التالية حتى مقابلة عبارة `break`. إذا كان لديك مدخلات متعددة بنفس المخرج، يمكنك تمثيلها في عبارة `switch`, أليك مثال:

```js
let result = "";
switch (val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}
```

ستنتج الحالات 1 و 2 و 3 جميعها نفس النتيجة.

# --instructions--

اكتب عبارة switch لتعيين `answer` للنطاقات التالية   
`1-3` - `Low`  
`4-6` - `Mid`  
`7-9` - `High`

**ملاحظة:** ستحتاج إلى `case` لكل رَقْم في النطاق.

# --hints--

يجب أن ينتج `sequentialSizes(1)` مقطع `Low`

```js
assert(sequentialSizes(1) === 'Low');
```

يجب أن ينتج `sequentialSizes(2)` مقطع `Low`

```js
assert(sequentialSizes(2) === 'Low');
```

يجب أن ينتج `sequentialSizes(3)` مقطع `Low`

```js
assert(sequentialSizes(3) === 'Low');
```

يجب أن ينتج `sequentialSizes(4)` مقطع `Mid`

```js
assert(sequentialSizes(4) === 'Mid');
```

يجب أن ينتج `sequentialSizes(5)` مقطع `Mid`

```js
assert(sequentialSizes(5) === 'Mid');
```

يجب أن ينتج `sequentialSizes(6)` مقطع `Mid`

```js
assert(sequentialSizes(6) === 'Mid');
```

يجب أن ينتج `sequentialSizes(7)` مقطع `High`

```js
assert(sequentialSizes(7) === 'High');
```

يجب أن ينتج `sequentialSizes(8)` مقطع `High`

```js
assert(sequentialSizes(8) === 'High');
```

يجب أن ينتج `sequentialSizes(9)` مقطع `High`

```js
assert(sequentialSizes(9) === 'High');
```

يجب ألا تستخدم أي عبارات `if` أو `else`

```js
assert(!/else/g.test(code) || !/if/g.test(code));
```

يجب أن يكون لديك تسع عبارات `case`

```js
assert(code.match(/case/g).length === 9);
```

# --seed--

## --seed-contents--

```js
function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line



  // Only change code above this line
  return answer;
}

sequentialSizes(1);
```

# --solutions--

```js
function sequentialSizes(val) {
  let answer = "";

  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
  }

  return answer;
}
```
