---
id: 587d7b7e367417b2b2512b20
title: Використання масиву для зберігання зібраних даних
challengeType: 1
forumTopicId: 301167
dashedName: use-an-array-to-store-a-collection-of-data
---

# --description--

Нижче наведено приклад найпростішої реалізації структури масиву даних. Його називають <dfn>one-dimensional array</dfn>, що означає, що він має лише один рівень або що він не має жодних інших вкладених масивів. Зверніть увагу, що в ньому містяться <dfn>booleans</dfn>, <dfn>strings</dfn> і <dfn>numbers</dfn> серед інших дійсних типів даних JavaScript:

```js
let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length);
```

Виклик `console.log` відображає `7`.

Усі масиви мають властивість довжини, до якої, як згадується вище, дуже легко можна отримати доступ за допомогою синтаксису `Array.length`. Складнішу реалізацію масиву можна побачити нижче. Це відомий <dfn>multi-dimensional array</dfn>, або масив що містить інші масиви. Зверніть увагу, що цей масив також включає JavaScript <dfn>objects</dfn>, які ми ретельно вивчатимемо в наступному розділі, але поки вам потрібно знати тільки те, що масиви також здатні зберігати складні об'єкти.

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

Ми визначили змінну з назвою `yourArray`. Виконайте інструкцію, призначаючи масив принаймні з 5 елементів у довжину до змінної `yourArray`. Ваш масив повинен містити щонайменше по-одному <dfn>string</dfn>, <dfn>number</dfn> і <dfn>boolean</dfn>.

# --hints--

`yourArray` повинна бути масивом.

```js
assert.strictEqual(Array.isArray(yourArray), true);
```

`yourArray` повинна складати щонайменше з 5 елементів в довжину.

```js
assert.isAtLeast(yourArray.length, 5);
```

`yourArray` повинна містити щонайменше одне `boolean`.

```js
assert(yourArray.filter((el) => typeof el === 'boolean').length >= 1);
```

`yourArray` повинна містити щонайменше одне `number`.

```js
assert(yourArray.filter((el) => typeof el === 'number').length >= 1);
```

`yourArray` повинна містити щонайменше один `string`.

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
