---
id: cf1111c1c12feddfaeb2bdef
title: Генерація випадкових цілих чисел в межах діапазону
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm83yu6'
forumTopicId: 18187
dashedName: generate-random-whole-numbers-within-a-range
---

# --description--

Замість генерації випадкового цілого числа між нулем і заданим числом, як ми робили це раніше, ми можемо згенерувати випадкове ціле число, що потрапляє в діапазон двох конкретних чисел.

Для цього ми визначимо мінімальне число `min` і максимальне число `max`.

Ми будемо використовувати наступну формулу. Зробіть паузу, щоб прочитати і зрозуміти, що робить цей код:

```js
Math.floor(Math.random() * (max - min + 1)) + min
```

# --instructions--

Створіть функцію під назвою `randomRange`, яка приймає діапазон `myMin` та `myMax` і повертає випадкове ціле число, яке більше або дорівнює `myMin` і менше або дорівнює `myMax`.

# --hints--

Найменше випадкове число, яке може згенерувати `randomRange`, повинне дорівнювати вашому мінімальному числу (`myMin`).

```js
assert(calcMin === 5);
```

Найбільше випадкове число, яке може згенерувати `randomRange`, повинне дорівнювати вашому максимальному числу (`myMax`).

```js
assert(calcMax === 15);
```

Випадкове число, згенероване за допомогою `randomRange`, повинне бути цілим, а не десятковим.

```js
assert(randomRange(0, 1) % 1 === 0);
```

`randomRange` має використовувати `myMax` та `myMin`, і повертати випадкове число у межах вашого діапазону.

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
