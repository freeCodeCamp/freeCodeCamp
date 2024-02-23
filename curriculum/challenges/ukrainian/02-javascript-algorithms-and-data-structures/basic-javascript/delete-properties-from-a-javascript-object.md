---
id: 56bbb991ad1ed5201cd392d3
title: Видалення властивостей з об’єкта JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cDqKdTv'
forumTopicId: 17560
dashedName: delete-properties-from-a-javascript-object
---

# --description--

Ми також можемо видалити властивості з об’єктів, ось так:

```js
delete ourDog.bark;
```

Приклад:

```js
const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;
```

Після останнього рядка, показано вище, об’єкт `ourDog` виглядає ось так:

```js
{
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
}
```

# --instructions--

Видаліть властивість `tails` з `myDog`. Ви можете використати точкову або дужкову нотацію.

# --hints--

Ви повинні видалити властивість `tails` з `myDog`.

```js
assert(typeof myDog === 'object' && myDog.tails === undefined);
```

Ви не повинні змінювати налаштування `myDog`.

```js
assert(code.match(/"tails": 1/g).length > 0);
```

# --seed--

## --after-user-code--

```js
(function(z){return z;})(myDog);
```

## --seed-contents--

```js
// Setup
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line

```

# --solutions--

```js
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};
delete myDog.tails;
```
