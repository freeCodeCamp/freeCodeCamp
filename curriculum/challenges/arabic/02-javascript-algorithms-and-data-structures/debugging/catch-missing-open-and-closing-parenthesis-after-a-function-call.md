---
id: 587d7b85367417b2b2512b39
title: إدراك أقواس (Parenthesis) الفتح والإغلاق المفقودة بعد تفعيل وظيفة (Function)
challengeType: 1
forumTopicId: 301185
dashedName: catch-missing-open-and-closing-parenthesis-after-a-function-call
---

# --description--

عندما لا تأخذ الوظيفة (function) أو الطريقة (method) أي معطيات (arguments)، قد تنسى إدراج أقواس الفتح والإغلاق (فارغة) عند تفعيلها. غالباً ما يتم حفظ نتيجة تفعيل وظيفة (function) في متغير (variable) لاستخدام آخر في كودك. يمكن اكتشاف هذا الخطأ عن طريق تسجيل قيم المتغيرات (variables) (أو أنواعها) إلى الوحدة (console) وملاحظة أن القيمة المعينة للمتغير (variable) هي مرجع وظيفة (function reference)، بدلاً من القيمة المتوقعة وهي ناتج تنفيذ الوظيفة (function).

فتختلف المتغيرات الواردة في المثال التالي:

```js
function myFunction() {
  return "You rock!";
}
let varOne = myFunction;
let varTwo = myFunction();
```

تكون `varOne` الوظيفة (function) هنا مسمى `myFunction`، ويكون `varTwo` المقطع نصي (string) من `You rock!`.

# --instructions--

أصلح الكود بحيث يتم تعيين المتغير (variable) المسمى `result` بقيمة الناتحة من تفعيل الوظيفة (function) مسمى `getNine`.

# --hints--

يجب أن يصلح الوظيفة المتغير (variable) مسمى `result` حيث يتم تعيينه الرَّقْم الذي ينتج الوظيفة (function) مسمى `getNine`.

```js
assert(result == 9);
```

يجب أن يفعيل كودك وظيفة `getNine`.

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
