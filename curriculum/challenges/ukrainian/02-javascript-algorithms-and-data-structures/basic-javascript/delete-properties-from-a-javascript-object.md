---
id: 56bbb991ad1ed5201cd392d3
title: Видалення властивостей з об'єкту JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cDqKdTv'
forumTopicId: 17560
dashedName: delete-properties-from-a-javascript-object
---

# --description--

Ми також можемо видалити властивості з таких об'єктів, як цей:

```js
delete ourDog.bark;
```

До прикладу:

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

Після того, як зазначено останній рядок, `ourDog` виглядає так:

```js
{
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
}
```

# --instructions--

Видаліть властивість `tails` з `myDog`. Ви можете використовувати крапковий запис або запис квадратними дужками.

# --hints--

Вам слід видалити властивість `tails` з `myDog`.

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
