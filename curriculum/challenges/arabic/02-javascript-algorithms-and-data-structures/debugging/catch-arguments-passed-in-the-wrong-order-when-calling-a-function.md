---
id: 587d7b85367417b2b2512b3a
title: Catch Arguments Passed in the Wrong Order When Calling a Function
challengeType: 1
forumTopicId: 301184
dashedName: catch-arguments-passed-in-the-wrong-order-when-calling-a-function
---

# --description--

متابعة للمناقشة حول استدعاد الـ functions، الخطأ التالي الذي يجب مراقبته هو عندما يتم تقديم الـ function's arguments بالترتيب غير الصحيح. إذا كانت الـ arguments مختلفة الأنواع، مثل الـ function التي تتوقع array وعدد صحيح، فمن المرجح أن يؤدي ذلك إلى خطأ في وقت التشغيل. إذا كانت الـ arguments هي من نفس النوع (كلها أعداد، على سبيل المثال)، فلن يكون لمنطق الكود أي معنى. تأكد من تقديم جميع الـ arguments المطلوبة، بالترتيب الصحيح لتجنب هذه المشاكل.

# --instructions--

ترفع الدالة `raiseToPower` الأساس (base) إلى الأس (exponent). لسوء الحظ، لم يتم استدعائها بشكل صحيح - أصلح الكود حتي تكون قيمة `power` هي 8 المتوقعة.

# --hints--

الكود الخاص بك يجب أن يصلح المتغير `power` بحيث يساوي 2 مرفوعًا إلى الاس الثالث، وليس 3 مرفوعًا إلى الأس الثاني.

```js
assert(power == 8);
```

يجب أن يستخدم الكود الخاص بك الترتيب الصحيح للـ arguments لاستدعاء الدالة `raiseToPower`.

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
