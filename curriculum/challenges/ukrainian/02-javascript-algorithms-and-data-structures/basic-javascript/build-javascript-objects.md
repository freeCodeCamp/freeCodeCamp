---
id: 56bbb991ad1ed5201cd392d0
title: Створення об’єктів JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWGkbtd'
forumTopicId: 16769
dashedName: build-javascript-objects
---

# --description--

Можливо, ви вже чули термін `object`.

Об’єкти подібні до `arrays`, за винятком того, що для отримання доступу та зміни їхніх даних використовуються не індекси, а властивості (`properties`).

Об’єкти придатні для структурованого зберігання даних, і також можуть представляти реальні об’єкти (наприклад, кота).

Приклад об’єкта-кота:

```js
const cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};
```

У цьому прикладі всі властивості зберігаються як рядки, як-от `name`, `legs` та `tails`. Однак числа також можна використовувати як властивості. Ви навіть можете пропустити лапки для властивостей з одним словом, як показано нижче:

```js
const anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};
```

Однак, якщо ваші об’єкти містять будь-які не рядкові властивості, JavaScript автоматично перетворить їх на рядки.

# --instructions--

Створіть об’єкт, який представляє собаку, під назвою `myDog` і який має властивості `name` (рядок), `legs`, `tails` та `friends`.

Ви можете встановити властивості на будь-яке значення, але `name` має бути рядком, `legs` та `tails` мають бути числами, а `friends` має бути масивом.

# --hints--

`myDog` повинен містити властивість `name`, яка є рядком (`string`).

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

`myDog` повинен містити властивість `legs`, яка є числом (`number`).

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

`myDog` повинен містити властивість `tails`, яка є числом (`number`).

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

`myDog` повинен містити властивість `friends`, яка є масивом (`array`).

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

`myDog` має містити всі задані властивості.

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
