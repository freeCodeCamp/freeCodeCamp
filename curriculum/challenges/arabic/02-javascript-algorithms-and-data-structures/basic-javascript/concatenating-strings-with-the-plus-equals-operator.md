---
id: 56533eb9ac21ba0edf2244b8
title: ضم المقاطع النصية باستخدام مشغل =+ (Concatenating Strings with the Plus Equals Operator)
challengeType: 1
videoUrl: 'https://scrimba.com/c/cbQmmC4'
forumTopicId: 16803
dashedName: concatenating-strings-with-the-plus-equals-operator
---

# --description--

يمكننا أيضًا استخدام المشغل `+=` <dfn>لضم</dfn> مقطع نصي في نهاية متغير مقطع نصي آخر موجود. ويمكن أن يكون ذلك مفيدا جدا لكسر مقطع نصي طويل على عدة اسطر.

**ملاحظة:** احترس من المسافات. لا يضيف المشغِّل مسافات بين المقاطع النصية المتسلسلة عند جمعها، لذا ستحتاج إلى إضافتها بنفسك.

مثال:

```js
let ourStr = "I come first. ";
ourStr += "I come second.";
```

يحتوي `ourStr` على قيمة المقطع النصي الآتي `I come first. I come second.` الآن.

# --instructions--

ابني `myStr` على عدة اسطر بضم المقاطع الآتية: `This is the first sentence.` و `This is the second sentence.` و استخدم المشغل `+=`. استخدم مشغل `+=` بطريقة مشابهة للمثال وتيقن من تضمين مسافة بين المقاطع. ابدأ بتعيين المقطع الأول إلى `myStr`، ثم أضف المقطع الثاني.

# --hints--

يجب أن يوجد حرف فراغ واحد بين المقطعين في `myStr`.

```js
assert(/sentence\. This/.test(myStr));
```

يجب أن يكون قيمة `myStr` المقطع النصي الآتي `This is the first sentence. This is the second sentence.`

```js
assert(myStr === 'This is the first sentence. This is the second sentence.');
```

يجب عليك استخدام مشغل `+=` لبناء `myStr`.

```js
assert(code.match(/myStr\s*\+=\s*(["']).*\1/g));
```

# --seed--

## --after-user-code--

```js
(function(){
  if(typeof myStr === 'string') {
    return 'myStr = "' + myStr + '"';
  } else {
    return 'myStr is not a string';
  }
})();
```

## --seed-contents--

```js
let myStr;
```

# --solutions--

```js
let myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";
```
