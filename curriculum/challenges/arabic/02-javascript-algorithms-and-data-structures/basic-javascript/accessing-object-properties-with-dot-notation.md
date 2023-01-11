---
id: 56533eb9ac21ba0edf2244c7
title: الوصول إلى خصائص الكائن مع النقطة التأشير (Accessing Object Properties with Dot Notation)
challengeType: 1
videoUrl: 'https://scrimba.com/c/cGryJs8'
forumTopicId: 16164
dashedName: accessing-object-properties-with-dot-notation
---

# --description--

هناك طريقتان للوصول إلى خصائص الكائن: نقطة التأشير (`.`) و علامات الأقواس (`[]`)، على غرار القائمة.

ترميز النقطة هو ما تستخدمه عندما تعرف اسم الخاصية التي تحاول الوصول إليها مسبقاً.

هذا مثال من استخدام النقطة التأشير (`.`) لقراءة خاصية الكائن:

```js
const myObj = {
  prop1: "val1",
  prop2: "val2"
};

const prop1val = myObj.prop1;
const prop2val = myObj.prop2;
```

سيكون إلى `prop1val` قيمة نص `val1`، و سيكون إلى `prop2val` قيمة نص `val2`.

# --instructions--

اقرأ في قيم الخاصية `testObj` باستخدام النقطة التأشير. عيّن المتغير `hatValue` مساوية لخاصية الكائن `hat`, وعيّن المتغير `shirtValue` مساوية لخاصية الكائن `shirt`.

# --hints--

قيمة `hatVvalue` يجب أن تكون نص

```js
assert(typeof hatValue === 'string');
```

يجب أن تكون قيمة `hatValue` نص `ballcap`

```js
assert(hatValue === 'ballcap');
```

يجب أن تكون قيمة `shirtValue` نص

```js
assert(typeof shirtValue === 'string');
```

يجب أن تكون قيمة `shirtValue` نص `jersey`

```js
assert(shirtValue === 'jersey');
```

يجب عليك استخدام النقطة التأشير مرتين

```js
assert(code.match(/testObj\.\w+/g).length > 1);
```

# --seed--

## --after-user-code--

```js
(function(a,b) { return "hatValue = '" + a + "', shirtValue = '" + b + "'"; })(hatValue,shirtValue);
```

## --seed-contents--

```js
// Setup
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj;      // Change this line
const shirtValue = testObj;    // Change this line
```

# --solutions--

```js
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

const hatValue = testObj.hat;
const shirtValue = testObj.shirt;
```
