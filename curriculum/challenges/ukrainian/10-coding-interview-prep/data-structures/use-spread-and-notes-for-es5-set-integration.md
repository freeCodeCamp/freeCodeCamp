---
id: 587d8255367417b2b2512c73
title: Використайте поширення та нотатки для інтеграції Set() від ES5
challengeType: 1
forumTopicId: 301720
dashedName: use-spread-and-notes-for-es5-set-integration
---

# --description--

Пам’ятаєте оператор поширення `...` від ES6?

`...` може приймати ітеровані об’єкти в ES6 і перетворювати їх на масиви.

Створимо множину та перевіримо функцію поширення.

```js
var set = new Set([1,2,3]);
var setToArr = [...set]
console.log(setToArr) // returns [ 1, 2, 3 ]
```

# --instructions--

У цій вправі ми передамо об’єкт-множину до функції `checkSet`. Функція має повернути масив, який містить значення множини.

Ви успішно дізналися, як використовувати об’єкт `Set()` від ES6. Хороша робота!

# --hints--

`checkSet(new Set([1,2,3,4,5,6,7])` має повернути `[1, 2, 3, 4, 5, 6, 7]`.

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
