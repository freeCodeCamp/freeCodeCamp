---
id: 587d78b2367417b2b2512b0e
title: Додати елементи в масив за допомогою функцій push() і unshift()
challengeType: 1
forumTopicId: 301151
dashedName: add-items-to-an-array-with-push-and-unshift
---

# --description--

Довжина масиву, як і типи даних, які він може містити, не фіксована. Масиви можуть бути створені з будь-якою кількістю елементів, і елементи можуть бути додані або видалені з плином часу; іншими словами, масиви <dfn> мінливі</dfn>. У цьому завданні ми розглянемо два методи, за допомогою яких ми можемо програмно змінювати масив: `Array.push()` і `Array.unshift()`.

Обидва методи приймають один або кілька елементів в якості параметрів і додають ці елементи в масив, для якого викликається метод; метод `push()` додає елементи в кінець масиву, а `unshift()` додає елементи на початок. Зверніть увагу:

```js
let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX');
```

`romanNumerals` мав би значення `['XIX', 'XX', 'XXI', 'XXII']`.

```js
romanNumerals.push(twentyThree);
```

`romanNumerals` мав би значення `['XIX', 'XX', 'XXI', 'XXII', 'XXIII']`. Зверніть увагу, що ми також можемо передавати змінні, що дає нам ще більшу гнучкість при динамічній зміні даних нашого масиву.

# --instructions--

Ми визначили функцію, `mixedNumbers`, якій ми передаємо масив як аргумент. Змініть функцію за допомогою `push()` та`unshift()` щоб додати `'I', 2, 'three'` на початок масиву і `7, 'VIII', 9` в кінець, щоб повернутий масив містив числа 1-9 по порядку.

# --hints--

`mixedNumbers(["IV", 5, "six"])` тепер повинен повернути `["I", 2, "three", "IV", 5, "six", 7, "VIII", 9]`

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

Функція `mixedNumbers` повинна використовувати `push()` метод

```js
assert(mixedNumbers.toString().match(/\.push/));
```

Функція `mixedNumbers` повинна використовувати `unshift()` метод

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
