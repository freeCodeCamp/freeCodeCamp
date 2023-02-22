---
id: 56533eb9ac21ba0edf2244b7
title: ربط المقاطع النصية باستخدام مشغل الجمع
challengeType: 1
videoUrl: 'https://scrimba.com/c/cNpM8AN'
forumTopicId: 16802
dashedName: concatenating-strings-with-plus-operator
---

# --description--

في JavaScript، عندما يستخدم مشغل `+` مع `String`، فإنه يسمى مشغل <dfn>الضم</dfn>. يمكنك بناء مقطع نصي جديد من المقاطع الأخرى عن طريق <dfn>ضم</dfn> بعضها مع بعض.

**مثال**

```js
'My name is Alan,' + ' I concatenate.'
```

**ملاحظة:** احترس من المسافات. لإن مشغِّل الضم لا يضيف مسافات بين المقاطع الذي يجمعها، لذا ستحتاج إلى إضافتها بنفسك.

مثال:

```js
const ourStr = "I come first. " + "I come second.";
```

سيعرض الكونسول المقطع الآتي `I come first. I come second.`.
# --instructions--

أنشئ `myStr` من المقاطع الآتية `This is the start.` و `This is the end.` باستخدام المشغل `+`. تيقن من تضمين مسافة بين المقاطع.

# --hints--

يجب أن يوجد حرف فراغ واحد بين المقطعين في `myStr`.

```js
assert(/start\. This/.test(myStr));
```

يجب أن يكون قيمة `myStr` النص الآتي `This is the start. This is the end.`

```js
assert(myStr === 'This is the start. This is the end.');
```

يجب عليك استخدام مشغل `+` لبناء `myStr`.

```js
assert(code.match(/(["']).*\1\s*\+\s*(["']).*\2/g));
```

يجب أن يتم إنشاء `myStr` باستخدام كلمة `const`.

```js
assert(/const\s+myStr/.test(code));
```

يجب عليك تعيين النتيجة إلى المتغير `myStr`.

```js
assert(/myStr\s*=/.test(code));
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
const myStr = ""; // Change this line
```

# --solutions--

```js
const myStr = "This is the start. " + "This is the end.";
```
