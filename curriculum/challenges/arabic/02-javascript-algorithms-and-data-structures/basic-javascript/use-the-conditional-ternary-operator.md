---
id: 587d7b7e367417b2b2512b24
title: استخدام مشغل (Ternary) المشروط
challengeType: 1
forumTopicId: 301181
dashedName: use-the-conditional-ternary-operator
---

# --description--

<dfn>conditional operator (المشغل الشرطي)</dfn>، الذي يسمى أيضًا <dfn>ternary operator (المشغل الثلاثي)</dfn>، يمكن استخدامه كبديل من if-else مكون من سطر واحد.

يكون تركيب الجملة كذلك `a ? b : c`، حيث `a` هو الشرط، ويكون `b` الكود المراد تشغيله عندما يرجع الشرط `true`، ويكون `c` الكود المراد تشغيله عندما يرجع الشرط `false`.

الوظيفة التالية تستخدم تعبير `if/else` للتحقق من شرط:

```js
function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater or equal";
  }
}
```

ويمكن إعادة صياغة الوظيفة المذكورة أعلاه باستخدام المشغل المشروط:

```js
function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater or equal";
}
```

# --instructions--

استخدم المشغل المشروط في الوظيفة اسمها `checkEqual` للتحقق مما إذا كان رقمان متساويان أم لا. يجب أن تنتج الوظيفة مقطع `Equal` أو مقطع `Not Equal`.

# --hints--

يجب أن يستخدم `checkEqual` المشغل مشروط

```js
assert(/.+?\s*?\?\s*?.+?\s*?:\s*?.+?/.test(code));
```

يجب أن ينتج `checkEqual(1, 2)` مقطع الآتي: `Not Equal`

```js
assert(checkEqual(1, 2) === 'Not Equal');
```

يجب أن ينتج `checkEqual(1, 1)` مقطع الآتي: `Equal`

```js
assert(checkEqual(1, 1) === 'Equal');
```

يجب أن ينتج `checkEqual(1, -1)` مقطع الآتي: `Not Equal`

```js
assert(checkEqual(1, -1) === 'Not Equal');
```

# --seed--

## --seed-contents--

```js
function checkEqual(a, b) {

}

checkEqual(1, 2);
```

# --solutions--

```js
function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}
```
