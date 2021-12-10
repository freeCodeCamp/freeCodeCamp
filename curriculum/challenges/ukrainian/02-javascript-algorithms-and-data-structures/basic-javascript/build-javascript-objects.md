---
id: 56bbb991ad1ed5201cd392d0
title: Створення об'єктів JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWGkbtd'
forumTopicId: 16769
dashedName: build-javascript-objects
---

# --description--

Ви могли чути термін `object` раніше.

Об'єкти подібні до `arrays`, за винятком того, що для отримання доступу та зміни їхніх даних використовуються не індекси, а `properties`.

Об'єкти придатні для структурованого зберігання даних, і також можуть представляти об'єкти реального світу, такі як кіт, наприклад.

Зразок об'єкта кота:

```js
const cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};
```

У цьому прикладі всі властивості зберігаються у вигляді рядків, таких як `name`, `legs` і `tails`. Однак, ви також можете використовувати числа як характеристики. Лапки для характеристик, які складаються з одного слова, можна пропустити наступним чином:

```js
const anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};
```

Якщо ваші об'єкти містять будь-які не рядкові характеристики, JavaScript автоматично надрукує їх як рядки.

# --instructions--

Створіть об'єкт під назвою `myDog`, який має такі характеристики: `name` (a string), `legs`, `tails` and `friends`.

Ви можете надати характеристикам цих об'єктів будь-які значення, доки `name` - це рядок, `legs` and `tails` - числа, і `friends` - масив.

# --hints--

`myDog` має містити характеристику `name` і бути `string`.

```js
assert(
  (function (z) {
    if (
      z.hasOwnProperty('name') &&
      z.name !== undefined &&
      typeof z.name === 'string'
    ) {
      return true;
    } else {
      return false;
    }
  })(myDog)
);
```

`myDog` має містити характеристику `legs` і бути `number`.

```js
assert(
  (function (z) {
    if (
      z.hasOwnProperty('legs') &&
      z.legs !== undefined &&
      typeof z.legs === 'number'
    ) {
      return true;
    } else {
      return false;
    }
  })(myDog)
);
```

`myDog` має містити характеристику `tails` і бути `number`.

```js
assert(
  (function (z) {
    if (
      z.hasOwnProperty('tails') &&
      z.tails !== undefined &&
      typeof z.tails === 'number'
    ) {
      return true;
    } else {
      return false;
    }
  })(myDog)
);
```

`myDog` має містити характеристику `friends` і бути `array`.

```js
assert(
  (function (z) {
    if (
      z.hasOwnProperty('friends') &&
      z.friends !== undefined &&
      Array.isArray(z.friends)
    ) {
      return true;
    } else {
      return false;
    }
  })(myDog)
);
```

`myDog` має містити всі задані характеристики.

```js
assert(
  (function (z) {
    return Object.keys(z).length === 4;
  })(myDog)
);
```

# --seed--

## --after-user-code--

```js
(function(z){return z;})(myDog);
```

## --seed-contents--

```js
const myDog = {
  // Only change code below this line


  // Only change code above this line
};
```

# --solutions--

```js
const myDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
```
