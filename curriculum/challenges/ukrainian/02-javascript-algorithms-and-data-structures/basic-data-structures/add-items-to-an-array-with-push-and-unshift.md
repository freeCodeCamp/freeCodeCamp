---
id: 587d78b2367417b2b2512b0e
title: Додавання елементів до масиву завдяки push() та unshift()
challengeType: 1
forumTopicId: 301151
dashedName: add-items-to-an-array-with-push-and-unshift
---

# --description--

Довжина масиву, як і типи даних у ньому, не фіксована. Масиви можуть бути створені з будь-якою кількістю елементів, а елементи можуть бути додані або видалені з плином часу. Іншими словами, масиви <dfn>мінливі</dfn>. У цьому завданні ми розглянемо два методи, за допомогою яких ми можемо програмно змінювати масив: `Array.push()` і `Array.unshift()`.

Обидва методи приймають один або кілька елементів як параметри і додають ці елементи в масив, для якого викликається метод. Метод `push()` додає елементи в кінець масиву, а `unshift()` додає елементи на початку. Зверніть увагу:

```js
let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX');
```

`romanNumerals` мав би значення `['XIX', 'XX', 'XXI', 'XXII']`.

```js
romanNumerals.push(twentyThree);
```

`romanNumerals` мав би значення `['XIX', 'XX', 'XXI', 'XXII', 'XXIII']`. Зверніть увагу: ми також можемо передавати змінні, що дає більшу гнучкість при динамічній зміні даних масиву.

# --instructions--

Ми визначили функцію `mixedNumbers`, якій передаємо масив як аргумент. Змініть функцію за допомогою `push()` й `unshift()`, додавши `'I', 2, 'three'` на початок масиву та `7, 'VIII', 9` в кінець, щоб повернутий масив містив числа від 1 до 9 (послідовно).

# --hints--

Тепер `mixedNumbers(["IV", 5, "six"])` має повернути `["I", 2, "three", "IV", 5, "six", 7, "VIII", 9]`

```js
assert.deepEqual(mixedNumbers(['IV', 5, 'six']), [
  'I',
  2,
  'three',
  'IV',
  5,
  'six',
  7,
  'VIII',
  9
]);
```

Функція `mixedNumbers` повинна використовувати метод `push()`

```js
assert(mixedNumbers.toString().match(/\.push/));
```

Функція `mixedNumbers` повинна використовувати метод `unshift()`

```js
assert(mixedNumbers.toString().match(/\.unshift/));
```

# --seed--

## --seed-contents--

```js
function mixedNumbers(arr) {
  // Only change code below this line

  // Only change code above this line
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));
```

# --solutions--

```js
function mixedNumbers(arr) {
  arr.push(7,'VIII',9);
  arr.unshift('I',2,'three');
  return arr;
}
```
