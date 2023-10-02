---
id: 587d7dad367417b2b2512b78
title: Use a Constructor to Create Objects
challengeType: 1
forumTopicId: 18233
dashedName: use-a-constructor-to-create-objects
---

# --description--

إليك constructor الـ `Bird` من التحدي السابق:

```js
function Bird() {
  this.name = "Albert";
  this.color  = "blue";
  this.numLegs = 2;
}

let blueBird = new Bird();
```

**ملاحظة:** كلمة `this` داخل الـ constructor تشير دائما إلى الـ object الذي يتم إنشاؤه.

لاحظ أن مشغل `new` يستخدم عند استدعاء الـ constructor. هذا يخبر جافا سكريبت بإنشاء instance جديد من `Bird` يسمى `blueBird`. بدون مشغل `new`، كلمة `this` داخل الـ constructor لن تشير إلى ال object المنشأ حديثا، مما يعطي نتائج غير متوقعة. الآن `blueBird` لديه جميع الخصائص المرفة داخل constructor الـ `Bird`:

```js
blueBird.name;
blueBird.color;
blueBird.numLegs;
```

تماما مثل أي object آخر، يمكن الوصول إلى خصائصه وتعديلها:

```js
blueBird.name = 'Elvira';
blueBird.name;
```

# --instructions--

استخدم constructor الـ `Dog` من الدرس الأخير لإنشاء instance جديد من `Dog` و تعيينه إلى متغير `hound`.

# --hints--

`hound` يجب أن يتم إنشاؤه باستخدام constructor الـ `Dog`.

```js
assert(hound instanceof Dog);
```

الكود الخاص بك يجب أن يستخدم مشغل `new` لإنشاء instance الـ `Dog`.

```js
assert(code.match(/new/g));
```

# --seed--

## --seed-contents--

```js
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Only change code below this line
```

# --solutions--

```js
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
const hound = new Dog();
```
