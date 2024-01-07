---
id: cf1111c1c11feddfaeb8bdef
title: تعديل بيانات القوائم برقم الترتيب
challengeType: 1
videoUrl: 'https://scrimba.com/c/czQM4A8'
forumTopicId: 18241
dashedName: modify-array-data-with-indexes
---

# --description--

على عكس المقاطع النصية، عناصر القائمة هي <dfn>قابلة للتغيير</dfn> (mutable) ويمكن تغييرها بحرية، حتى لو تم تعريف القائمة بواسطة `const`.

**مثال**

```js
const ourArray = [50, 40, 30];
ourArray[0] = 15;
```

يحتوي `ourArray` على قيمة `[15, 40, 30]`.

**ملاحظة:** لا ينبغي أن تكون هناك أي مسافات بين اسم القائمة والأقواس المربعة، مثل `array [0]`. مع أنّ JavaScript قادر على معالجة هذا الأمر بشكل صحيح، إلا أن هذا قد يحير المبرمجين الآخرين الذين يقرؤون الكود الخاص بك.

# --instructions--

عدل البيانات المخزنة في موقع الترتيب رَقَم `0` من `myArray` إلى قيمة `45`.

# --hints--

يجب أن يساوي `myArray` قيمة `[45, 64, 99]` الآن.

```js
assert(
  (function () {
    if (
      typeof myArray != 'undefined' &&
      myArray[0] == 45 &&
      myArray[1] == 64 &&
      myArray[2] == 99
    ) {
      return true;
    } else {
      return false;
    }
  })()
);
```

يجب عليك استخدام رقم الترتيب الصحيح لتعديل القيمة في `myArray`.

```js
assert(
  (function () {
    if (code.match(/myArray\[0\]\s*=\s*/g)) {
      return true;
    } else {
      return false;
    }
  })()
);
```

# --seed--

## --after-user-code--

```js
if(typeof myArray !== "undefined"){(function(){return myArray;})();}
```

## --seed-contents--

```js
// Setup
const myArray = [18, 64, 99];

// Only change code below this line

```

# --solutions--

```js
const myArray = [18, 64, 99];
myArray[0] = 45;
```
