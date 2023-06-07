---
id: 56533eb9ac21ba0edf2244bc
title: Список покупок
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9MEKHZ'
forumTopicId: 18280
dashedName: shopping-list
---

# --description--

Створіть список покупок у змінній `myList`. Список повинен бути багатовимірним масивом, який містить декілька підмасивів.

Перший елемент у кожному підмасиві повинен містити рядок з назвою одиниці. Другим елементом повинне бути число, яке вказує кількість.

```js
["Chocolate Bar", 15]
```

У списку повинно бути принаймні 5 підмасивів.

# --hints--

`myList` повинен бути масивом.

```js
assert(isArray);
```

Першими елементами у кожному з ваших підмасивів повинні бути рядки.

```js
assert(hasString);
```

Другими елементами у кожному підмасиві повинні бути числа.

```js
assert(hasNumber);
```

У списку повинно бути принаймні 5 одиниць.

```js
assert(count > 4);
```

# --seed--

## --after-user-code--

```js
var count = 0;
var isArray = false;
var hasString = false;
var hasNumber = false;
(function(list){
  if(Array.isArray(myList)) {
    isArray = true;
    if(myList.length > 0) {
      hasString = true;
      hasNumber = true;
      for (var elem of myList) {
        if(!elem || !elem[0] || typeof elem[0] !== 'string') {
          hasString = false;
        }
        if(!elem || typeof elem[1] !== 'number') {
          hasNumber = false;
        }
      }
    }
    count = myList.length;
    return JSON.stringify(myList);
  } else {
    return "myList is not an array";
  }

})(myList);
```

## --seed-contents--

```js
const myList = [];
```

# --solutions--

```js
const myList = [
  ["Candy", 10],
  ["Potatoes", 12],
  ["Eggs", 12],
  ["Catfood", 1],
  ["Toads", 9]
];
```
