---
id: cf1111c1c12feddfaeb2bdef
title: توليد أعداد صحيحة عشوائية داخل نطاق (Generate Random Whole Numbers within a Range)
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm83yu6'
forumTopicId: 18187
dashedName: generate-random-whole-numbers-within-a-range
---

# --description--

You can generate a random whole number in the range from zero to a given number. You can also pick a different lower number for this range.

You'll call your minimum number `min` and your maximum number `max`.

This formula gives a random whole number in the range from `min` to `max`. خذ لحظة لقراءتها ومحاولة فهم ما يفعله هذا الكود:

```js
Math.floor(Math.random() * (max - min + 1)) + min
```

# --instructions--

Create a function called `randomRange` that takes a range `myMin` and `myMax` and returns a random whole number that's greater than or equal to `myMin` and less than or equal to `myMax`.

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
  return 0;
}
```

# --solutions--

```js
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
```
