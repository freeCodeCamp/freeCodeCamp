---
id: 587d7b85367417b2b2512b3a
title: إدراك المعطيات (Arguments) المارة بترتيب خاطئ عند تفعيل وظيفة
challengeType: 1
forumTopicId: 301184
dashedName: catch-arguments-passed-in-the-wrong-order-when-calling-a-function
---

# --description--

متابعة للمناقشة حول تفعيل الوظائف (functions)، الخطأ التالي الذي يجب مراقبته هو عندما يقدم الوسائط (arguments) الوظيفة بالترتيب غير الصحيح. إذا كانت المعطيات (arguments) مختلفة الأنواع، مثل الوظيفة (function) التي تتوقع قائمة (array) وعدد صحيح، فمن المرجح أن يؤدي ذلك إلى خطأ في وقت التفعيل. إذا كانت المعطيات (arguments) من نفس النوع (كلها أعداد، على سبيل المثال)، فلن يكون لمنطق الكود أي معنى. تأكد من تقديم جميع المعطيات (arguments) المطلوبة، بالترتيب الصحيح لتجنب هذه المشاكل.

# --instructions--

ترفع الوظيفة (function) مسمى `raiseToPower` الأساس (base) إلى الأس (exponent). لسوء الحظ، لم يتم استدعائها بشكل صحيح - أصلح الكود حتي تكون قيمة `power` هي 8 المتوقعة.

# --hints--

الكود الخاص بك يجب أن يصلح المتغير `power` بحيث يساوي 2 مرفوعًا إلى الاس الثالث، وليس 3 مرفوعًا إلى الأس الثاني.

```js
assert(power == 8);
```

يجب أن يستخدم كودك الترتيب الصحيح لمعطيات (arguments) لتفعيل الوظيفة (funciton) المسمى `raiseToPower`.

```js
assert(code.match(/raiseToPower\(\s*?base\s*?,\s*?exp\s*?\);/g));
```

# --seed--

## --seed-contents--

```js
function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(exp, base);
console.log(power);
```

# --solutions--

```js
function raiseToPower(b, e) {
 return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);
```
