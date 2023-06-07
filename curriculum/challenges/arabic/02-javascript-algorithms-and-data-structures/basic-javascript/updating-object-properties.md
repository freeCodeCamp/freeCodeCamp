---
id: 56bbb991ad1ed5201cd392d1
title: تحديث خصائص الكائن (Updating Object Properties)
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9yEJT4'
forumTopicId: 18336
dashedName: updating-object-properties
---

# --description--

بعد إنشاء كائن JavaScript، يمكنك تحديث خصائصه في أي وقت كما يمكنك تحديث أي متغير آخر. يمكنك استخدام أي من رمز النقطة أو علامات الأقواس (dot or bracket notation).

على سبيل المثال، دعونا ننظر إلى `ourDog`:

```js
const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
```

بما أنه كلب سعيد، دعونا نغير اسمه إلى مقطع `Happy Camper`. إليك كيف, تحدث الاسم: `ourDog.name = "Happy Camper";` أو `ourDog["name"] = "Happy Camper";`، الآن عندما نقيّم `ourDog.name`، بدلا من الحصول علي `Camper`، سوف نحصل علي اسمه الجديد `Happy Camper`.

# --instructions--

حدث خاصية اسم الكائن `myDog`. غيّر اسمه من `Coder` إلى `Happy Coder`. يمكنك استخدام أي من رمز النقطة أو علامات الأقواس (dot or bracket notation).

# --hints--

يجب عليك تحديث خاصية `name` في `myDog` لتساوي مقطع `Happy Coder`.

```js
assert(/happy coder/gi.test(myDog.name));
```

لا يجب عليك تعديل تعريف `myDog`.

```js
assert(/"name": "Coder"/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(z){return z;})(myDog);
```

## --seed-contents--

```js
// Setup
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line

```

# --solutions--

```js
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.name = "Happy Coder";
```
