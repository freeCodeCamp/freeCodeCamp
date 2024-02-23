---
id: 587d8255367417b2b2512c73
title: Використання Spread і Notes для інтеграції ES5 Set()
challengeType: 1
forumTopicId: 301720
dashedName: use-spread-and-notes-for-es5-set-integration
---

# --description--

Пригадуєте оператора розкидання ES6 `...`?

`...` може підібрати об'єкти-ітератори в ES6 і перетворити їх на масиви.

Створімо Set та перевіримо функцію spread.

```js
var set = new Set([1,2,3]);
var setToArr = [...set]
console.log(setToArr) // returns [ 1, 2, 3 ]
```

# --instructions--

У цій вправі ми передамо заданий об'єкт до функції `checkSet`. Функція повинна повернути масив, що містить значення обʼєкта Set.

Тепер ви успішно дізналися, як використовувати об'єкт ES6 `Set()`. Гарна робота!

# --hints--

Функція `checkSet(new Set([1,2,3,4,5,6,7])` повинна повернути `[1, 2, 3, 4, 5, 6, 7]`.

```js
assert(
  (function () {
    var test = checkSet(new Set([1, 2, 3, 4, 5, 6, 7]));
    return DeepEqual(test, [1, 2, 3, 4, 5, 6, 7]);
  })()
);
```

# --seed--

## --seed-contents--

```js
function checkSet(set){
   // Only change code below this line

   // Only change code above this line
}
```

# --solutions--

```js
function checkSet(set){
return [...set];}
```
