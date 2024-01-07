---
id: 587d8255367417b2b2512c72
title: .has і .size в ES6 Set
challengeType: 1
forumTopicId: 301717
dashedName: use--has-and--size-on-an-es6-set
---

# --description--

Розгляньмо методи .has і .size, які доступні для об'єкту ES6 Set.

Спершу створімо ES6 Set

```js
var set = new Set([1,2,3]);
```

Метод .has визначить, чи існує елемент із певним значенням в об'єкті Set.

```js
var hasTwo = set.has(2);
```

Метод .size поверне ціле число на позначення розміру об'єкту Set

```js
var howBig = set.size;
```

# --instructions--

У цьому завданні ми передамо масив і значення до функції checkSet(). Ваша функція повинна створити об'єкт ES6 set з масиву-аргументу. Перевірте об'єкт set на наявність аргументу зі значенням. Визначте розмір об'єкту set. Потім поверніть ті два значення в масив.

# --hints--

Функція `checkSet([4, 5, 6], 3)` повинна повернути [ false, 3 ]

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
