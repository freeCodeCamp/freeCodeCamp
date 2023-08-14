---
id: 587d7b7e367417b2b2512b20
title: Використання масиву для зберігання зібраних даних
challengeType: 1
forumTopicId: 301167
dashedName: use-an-array-to-store-a-collection-of-data
---

# --description--

Нижче наведено приклад найпростішої реалізації структури масиву даних. Це <dfn>одновимірний масив</dfn>, тобто він має лише один рівень або не містить жодних вкладених масивів. Зверніть увагу, що в ньому містяться <dfn>булеві значення</dfn>, <dfn>рядки</dfn> та <dfn>числа</dfn> серед інших дійсних типів даних JavaScript:

```js
let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length);
```

Виклик `console.log` виводить `7`.

Усі масиви мають властивість довжини, до якої, як згадується вище, дуже легко можна отримати доступ за допомогою синтаксису `Array.length`. Складнішу реалізацію масиву можна побачити нижче. Це <dfn>багатовимірний масив</dfn>, тобто масив, який містить інші масиви. Зверніть увагу, що цей масив також містить <dfn>об’єкти</dfn>, які ми ретельно вивчатимемо в наступному розділі, але поки вам потрібно знати тільки те, що масиви також здатні зберігати складні об’єкти.

```js
let complexArray = [
  [
    {
      one: 1,
      two: 2
    },
    {
      three: 3,
      four: 4
    }
  ],
  [
    {
      a: "a",
      b: "b"
    },
    {
      c: "c",
      d: "d"
    }
  ]
];
```

# --instructions--

Ми визначили змінну під назвою `yourArray`. Закінчіть інструкцію, призначивши масив з принаймні п’яти елементів до змінної `yourArray`. Ваш масив повинен містити принаймні по одному <dfn>рядку</dfn>, <dfn>числу</dfn> і <dfn>булевому значенню</dfn>.

# --hints--

`yourArray` має бути масивом.

```js
assert.strictEqual(Array.isArray(yourArray), true);
```

`yourArray` має містити принаймні п’ять елементів у довжину.

```js
assert.isAtLeast(yourArray.length, 5);
```

`yourArray` має містити принаймні одне `boolean`.

```js
assert(yourArray.filter((el) => typeof el === 'boolean').length >= 1);
```

`yourArray` має містити принаймні одне `number`.

```js
assert(yourArray.filter((el) => typeof el === 'number').length >= 1);
```

`yourArray` має містити принаймні одне `string`.

```js
assert(yourArray.filter((el) => typeof el === 'string').length >= 1);
```

# --seed--

## --seed-contents--

```js
let yourArray; // Change this line
```

# --solutions--

```js
let yourArray = ['a string', 100, true, ['one', 2], 'another string'];
```
