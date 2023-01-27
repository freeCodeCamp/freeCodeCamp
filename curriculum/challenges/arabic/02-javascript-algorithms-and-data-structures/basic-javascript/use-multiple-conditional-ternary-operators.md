---
id: 587d7b7e367417b2b2512b21
title: استخدام مشغلان (Ternary) مشروطان متعددان
challengeType: 1
videoUrl: 'https://scrimba.com/c/cyWJBT4'
forumTopicId: 301179
dashedName: use-multiple-conditional-ternary-operators
---

# --description--

في التحدي السابق، كنت تستخدم مشغلاً شرطياً واحداً. يمكنك أيضًا تجميعهم معاً للتحقق من وجود ظروف متعددة.

تستخدم الوظيفة التالية `else if`، و `if`، و `else` بيانات للتحقق من عدّة شروط:

```js
function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  }
  else if (a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
```

ويمكن إعادة صياغة الوظيفة المذكورة أعلاه باستخدام متعهدين شرطيين متعددين:

```js
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}
```

ويعدّ من أفضل الممارسات تشكيل متعهدين شرطيين متعددين، بحيث يكون كل شرط على خط منفصل، كما هو مبين أعلاه. استخدام عدة مشغلين مشروطين دون إهدار مناسب قد يجعل من الصعب قراءة الكود الخاص بك. على سبيل المثال:

```js
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}
```

# --instructions--

في وظيفة `checkSign`، استخدام العديد من المشغلين الشرطيين - باتباع التنسيق الموصى به المستخدم في `findGreaterOrEqual` - للتحقق مما إذا كان الرقم إيجابياً، سلبي أو صفر. يجب أن ينتج الوظيفة `positive`, أو `negative`, أو `zero`.

# --hints--

يجب أن يستخدم `checkSign` مشغلين مشروطين متعددين

```js
assert(/.+?\s*?\?\s*?.+?\s*?:\s*?.+?\s*?\?\s*?.+?\s*?:\s*?.+?/gi.test(code));
```

يجب أن ينتج `checkSign(10)` مقطع `positive`. هذا يعني أن الكتابة بالأحرف الكبيرة (capitalization) شيئ مؤثر

```js
assert(checkSign(10) === 'positive');
```

يجب أن ينتج `checkSign(-12)` مقطع `negative`. هذا يعني أن الكتابة بالأحرف الكبيرة (capitalization) شيئ مؤثر

```js
assert(checkSign(-12) === 'negative');
```

يجب أن ينتج `checkSign(0)` مقطع `zero`. هذا يعني أن الكتابة بالأحرف الكبيرة (capitalization) شيئ مؤثر

```js
assert(checkSign(0) === 'zero');
```

# --seed--

## --seed-contents--

```js
function checkSign(num) {

}

checkSign(10);
```

# --solutions--

```js
function checkSign(num) {
  return (num > 0) ? 'positive' : (num < 0) ? 'negative' : 'zero';
}
```
