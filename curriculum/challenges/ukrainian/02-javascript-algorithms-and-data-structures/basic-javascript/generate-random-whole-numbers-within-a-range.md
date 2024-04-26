---
id: cf1111c1c12feddfaeb2bdef
title: Генерація випадкових цілих чисел в межах діапазону
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm83yu6'
forumTopicId: 18187
dashedName: generate-random-whole-numbers-within-a-range
---

# --description--

Ви можете згенерувати випадкове ціле число в діапазоні від нуля до заданого числа. Ви також можете вибрати будь-яке інше менше число для цього діапазону.

Мінімальне число називають `min`, а максимальне — `max`.

Завдяки цій формулі можна отримати випадкове ціле число від `min` до `max`. Зробіть паузу, щоб прочитати і зрозуміти, що робить цей код:

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
      __helpers.removeJSComments(code).match(/myMax/g).length > 1 &&
      __helpers.removeJSComments(code).match(/myMin/g).length > 2 &&
      __helpers.removeJSComments(code).match(/Math.floor/g) &&
      __helpers.removeJSComments(code).match(/Math.random/g)
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
