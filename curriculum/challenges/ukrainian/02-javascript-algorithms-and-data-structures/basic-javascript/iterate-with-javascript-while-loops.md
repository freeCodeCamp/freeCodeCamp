---
id: cf1111c1c11feddfaeb1bdef
title: Ітерація циклів JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/c8QbnCM'
forumTopicId: 18220
dashedName: iterate-with-javascript-while-loops
---

# --description--

Завдяки циклу, Ви можете запустити той самий код декілька разів.

Перший тип циклу, який ми вивчатимемо, називається `while`, оскільки виконується за заданою істинною умовою і припиняється, як тільки ця умова більше не буде істинною.

```js
const ourArray = [];
let i = 0;

while (i < 5) {
  ourArray.push(i);
  i++;
}
```

У прикладі вище коду цикл `while` виконуватиметься 5 разів і додаватиме числа від 0 до 4 до `ourArray`.

Спробуймо підготувати цикл while до роботи, розміщуючи значення в масиві даних.

# --instructions--

Додайте числа від 5 до 0 (включно) у порядку спадання до `myArray`, використовуючи цикл `while`.

# --hints--

Для цього слід використовувати цикл `while`.

```js
assert(code.match(/while/g));
```

`myArray` повинне дорівнювати `[5, 4, 3, 2, 1, 0]`.

```js
assert.deepEqual(myArray, [5, 4, 3, 2, 1, 0]);
```

# --seed--

## --after-user-code--

```js
if(typeof myArray !== "undefined"){(function(){return myArray;})();}
```

## --seed-contents--

```js
// Setup
const myArray = [];

// Only change code below this line

```

# --solutions--

```js
const myArray = [];
let i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
}
```
