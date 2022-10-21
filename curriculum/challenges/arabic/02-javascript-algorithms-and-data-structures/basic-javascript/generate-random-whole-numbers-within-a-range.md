---
id: cf1111c1c12feddfaeb2bdef
title: توليد أعداد صحيحة عشوائية داخل نطاق (Generate Random Whole Numbers within a Range)
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm83yu6'
forumTopicId: 18187
dashedName: generate-random-whole-numbers-within-a-range
---

# --description--

بدلاً من إنشاء رَقَم صحيح عشوائي بين صفر ورَقَم أخر معين، كما فعلنا من قبل، يمكننا إنشاء رَقَم صحيح عشوائي يقع ضمن نطاق رَقَمين محددين.

لفعل ذلك، سنحدد الحد الأدنى للرَقْم `min` والحد الأقصى `max`.

هذه هي الصيغة التي سنستخدمها. خذ لحظة لقراءتها ومحاولة فهم ما يفعله هذا الكود:

```js
Math.floor(Math.random() * (max - min + 1)) + min
```

# --instructions--

أنشئ وظيفة (function) تسمى `randomRange` التي تأخذ نطاق `myMin` و `myMax` وترجع رَقَماً صحيحاً عشوائياً أكبر من أو يساوي `myMax`، و أقل من أو يساوي `myMin`، بشمول الاثنين.

# --hints--

أقل عدد عشوائي يمكن إنشاؤه بواسطة `randomRange` يجب أن يكون مساويا للحد الأدنى من الرَّقْم الخاص بك `myMin`.

```js
assert(calcMin === 5);
```

أعلى رقم عشوائي يمكن إنشاؤه بواسطة `randomRange` يجب أن يكون مساوياً للحد الأقصى من الرقم الخاص بك `myMax`.

```js
assert(calcMax === 15);
```

الرَّقَم العشوائي التي تم إنشاؤه بواسطة `randomRange` يجب أن يكون عددًا صحيحًا وليس عشريًا.

```js
assert(randomRange(0, 1) % 1 === 0);
```

يجب أن يستخدم `randomRange` كلا من `myMax` و `myMin`, لإنتاج رَقَم عشوائي في نطاقك.

```js
assert(
  (function () {
    if (
      code.match(/myMax/g).length > 1 &&
      code.match(/myMin/g).length > 2 &&
      code.match(/Math.floor/g) &&
      code.match(/Math.random/g)
    ) {
      return true;
    } else {
      return false;
    }
  })()
);
```

# --seed--

## --after-user-code--

```js
var calcMin = 100;
var calcMax = -100;
for(var i = 0; i < 100; i++) {
  var result = randomRange(5,15);
  calcMin = Math.min(calcMin, result);
  calcMax = Math.max(calcMax, result);
}
(function(){
  if(typeof myRandom === 'number') {
    return "myRandom = " + myRandom;
  } else {
    return "myRandom undefined";
  }
})()
```

## --seed-contents--

```js
function randomRange(myMin, myMax) {
  // Only change code below this line
  return 0;
  // Only change code above this line
}
```

# --solutions--

```js
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
```
