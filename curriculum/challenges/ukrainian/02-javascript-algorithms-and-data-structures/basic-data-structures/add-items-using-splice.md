---
id: 587d78b3367417b2b2512b11
title: Додавання елементів за допомогою splice()
challengeType: 1
forumTopicId: 301152
dashedName: add-items-using-splice
---

# --description--

Пам’ятаєте, в попередньому завданні ми згадували, що `splice()` може приймати до трьох параметрів? Що ж, ви можете використовувати третій параметр, що складається з одного або декількох елементів, для додавання в масив. Це може бути неймовірно корисно для швидкої зміни елемента або набору елементів.

```js
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);
```

Повторний елемент `12` видалений, та ми додали `13` й `14` на цьому індексі. Тепер масивом `numbers` буде `[ 10, 11, 12, 13, 14, 15 ]`.

Тут ми починаємо з масиву чисел. Потім ми передаємо до `splice()`: індекс, з якого починаємо видалення елементів (3); кількість елементів, які потрібно видалити (1); решту аргументів (13, 14), які будуть вставлені, починаючи з того ж індексу. Зверніть увагу, що після `amountToDelete` може бути будь-яка кількість елементів (розділених комами), кожен з яких вставляється.

# --instructions--

Ми визначили функцію `htmlColorNames`, яка приймає масив кольорів HTML як аргумент. Змініть функцію за допомогою `splice()`, щоб видалити перші два елементи масиву і додати `'DarkSalmon'` та `'BlanchedAlmond'` на відповідні місця.

# --hints--

`htmlColorNames` має повернути `["DarkSalmon", "BlanchedAlmond", "LavenderBlush", "PaleTurquoise", "FireBrick"]`

```js
assert.deepEqual(
  htmlColorNames([
    'DarkGoldenRod',
    'WhiteSmoke',
    'LavenderBlush',
    'PaleTurquoise',
    'FireBrick'
  ]),
  [
    'DarkSalmon',
    'BlanchedAlmond',
    'LavenderBlush',
    'PaleTurquoise',
    'FireBrick'
  ]
);
```

Функція `htmlColorNames` повинна використовувати метод `splice()`

```js
assert(/.splice/.test(__helpers.removeJSComments(code)));
```

Не використовуйте `shift()` або `unshift()`.

```js
assert(!/shift|unshift/.test(__helpers.removeJSComments(code)));
```

Не використовуйте дужкову нотацію масиву.

```js
assert(!/\[\d\]\s*=/.test(__helpers.removeJSComments(code)));
```

# --seed--

## --seed-contents--

```js
function htmlColorNames(arr) {
  // Only change code below this line

  // Only change code above this line
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
```

# --solutions--

```js
function htmlColorNames(arr) {
  arr.splice(0,2,'DarkSalmon', 'BlanchedAlmond');
  return arr;
}
```
