---
id: 56533eb9ac21ba0edf2244c9
title: الوصول إلى خصائص الكائن باستخدام المتغيرات (Accessing Object Properties with Variables)
challengeType: 1
videoUrl: 'https://scrimba.com/c/cnQyKur'
forumTopicId: 16165
dashedName: accessing-object-properties-with-variables
---

# --description--

وثمة استخدام آخر لعلامات الأقواس للوصول إلى الخصائص المخزنة كقيمة للمتغير. يمكن أن يكون هذا مفيداً جداً خلال تكرار خصائص الكائن أو عند الوصول إلى جدول البحث.

فيما يلي, مثال على استخدام متغير للوصول إلى خاصية ما:

```js
const dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
};

const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed);
```

سوف يتم عرض `Doberman` في وحدة التحكم (console).

لاحظ أننا *لا* نستخدم علامات التنصيص حول اسم المتغير عند استخدامه للوصول إلى الخاصية لأننا نستخدم *قيمة* المتغير، ليس *الاسم*.

# --instructions--

عيّن متغير `playerNumber` إلى `16`. ثم استخدم المتغير للبحث عن اسم اللاعب وتعيينه إلى `player`.

# --hints--

`playerNumber` يجب أن يكون رقما

```js
assert(typeof playerNumber === 'number');
```

المتغير `player` يجب أن يكون مقطع نصي (string)

```js
assert(typeof player === 'string');
```

يجب أن تكون قيمة `player` مقطع نصي `Montana`

```js
assert(player === 'Montana');
```

يجب عليك استخدام علامات الأقواس للوصول إلى `testObj`

```js
assert(/testObj\s*?\[.*?\]/.test(code));
```

لا يجب عليك تعيين قيمة `Montana` للمتغير `player` مباشرة.

```js
assert(!code.match(/player\s*=\s*"|\'\s*Montana\s*"|\'\s*;/gi));
```

يجب أن تستخدم المتغير `playerNumber` في علامات الأقواس

```js
assert(/testObj\s*?\[\s*playerNumber\s*\]/.test(code));
```

# --seed--

## --after-user-code--

```js
if(typeof player !== "undefined"){(function(v){return v;})(player);}
```

## --seed-contents--

```js
// Setup
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line
const playerNumber = 42;  // Change this line
const player = testObj;   // Change this line
```

# --solutions--

```js
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
const playerNumber = 16;
const player = testObj[playerNumber];
```
