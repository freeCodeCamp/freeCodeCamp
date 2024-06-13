---
id: 587d8255367417b2b2512c72
title: Використайте .has та .size на множині ES6
challengeType: 1
forumTopicId: 301717
dashedName: use--has-and--size-on-an-es6-set
---

# --description--

Розглянемо методи .has та .size, які доступні для множини ES6.

Спочатку створимо множину ES6.

```js
var set = new Set([1,2,3]);
```

Метод .has перевірить, чи в множині існує певне значення.

```js
var hasTwo = set.has(2);
```

Метод .size поверне ціле число, що позначає розмір множини.

```js
var howBig = set.size;
```

# --instructions--

У цій вправі ми передамо масив і значення до функції checkSet(). Функція має створити множину ES6 з аргументу-масиву. Перевірте, чи множина містить аргумент-значення. Знайдіть розмір множини. Потім поверніть ці два значення в масиві.

# --hints--

`checkSet([4, 5, 6], 3)` має повернути [ false, 3 ].

```js
assert(
  (function () {
    var test = checkSet([4, 5, 6], 3);
    return DeepEqual(test, [false, 3]);
  })()
);
```

# --seed--

## --seed-contents--

```js
function checkSet(arrToBeSet, checkValue){

   // Only change code below this line

   // Only change code above this line

}
```

# --solutions--

```js
function checkSet(arrToBeSet, checkValue){
var set = new Set(arrToBeSet);
var result = [
set.has(checkValue),
set.size
];
return result;
}
```
