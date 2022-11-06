---
id: 587d7b85367417b2b2512b39
title: إدراك أقواس الفتح والإغلاق المفقودة بعد استدعاء دالة (Catch Missing Open and Closing Parenthesis After a Function Call)
challengeType: 1
forumTopicId: 301185
dashedName: catch-missing-open-and-closing-parenthesis-after-a-function-call
---

# --description--

عندما لا تأخذ الfunction أو الmethod أي arguments، قد تنسى إدراج أقواس الفتح والإغلاق (فارغة) عند استدعائها. غالباً ما يتم حفظ نتيجة استدعاء function في variable لاستخدام آخر في الكود الخاص بك. يمكن اكتشاف هذا الخطأ عن طريق تسجيل قيم الvariables (أو أنواعها) إلى الconsole وملاحظة أن القيمة المعينة للvariable هي function reference (مرجع دالة)، بدلاً من القيمة المتوقعة وهي ناتج تنفيذ ال الfunction.

فتختلف المتغيرات الواردة في المثال التالي:

```js
function myFunction() {
  return "You rock!";
}
let varOne = myFunction;
let varTwo = myFunction();
```

هنا `varOne` هو الـ function المسماه `myFunction`، و `varTwo` هو الـ string المكون من `You rock!`.

# --instructions--

أصلح الـ code بحيث يتم تعيين الـ variable المسمى `result` القيمة العائدة من استعداء الـ function المسماه `getNine`.

# --hints--

يجب أن يصلح الـ code الـ variable المسمى `result` حيث يتم تعيينه الرقم الذي يعيده الـ function المسمى `getNine`.

```js
assert(result == 9);
```

يجب أن يستدعي الكود الخاص بك دالة `getNine`.

```js
assert(code.match(/getNine\(\)/g).length == 2);
```

# --seed--

## --seed-contents--

```js
function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let result = getNine;
console.log(result);
```

# --solutions--

```js
function getNine() {
 let x = 6;
 let y = 3;
 return x + y;
}

let result = getNine();
console.log(result);
```
