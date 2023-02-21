---
id: 56bbb991ad1ed5201cd392d1
title: Оновлення властивостей об’єкта
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9yEJT4'
forumTopicId: 18336
dashedName: updating-object-properties
---

# --description--

Після створення об’єкта JavaScript ви можете будь-коли оновити його властивості так само, як оновлювали б будь-яку іншу змінну. Для оновлення можна використати точкову або дужкову нотацію.

Наприклад, погляньмо на `ourDog`:

```js
const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
```

Оскільки це особливо щаслива собака, змінимо його ім’я на рядок `Happy Camper`. Ось як ми оновлюємо властивість назви об’єкта: `ourDog.name = "Happy Camper";` або `ourDog["name"] = "Happy Camper";`. Тепер, коли ми визначаємо `ourDog.name`, замість `Camper` ми отримуватимемо нове ім’я `Happy Camper`.

# --instructions--

Оновіть властивість імені об’єкта `myDog`. Змінимо ім’я з `Coder` на `Happy Coder`. Ви можете використати точкову або дужкову нотацію.

# --hints--

Ви повинні оновити властивість `name` об’єкта `myDog`, щоб вона дорівнювала рядку `Happy Coder`.

```js
assert(/happy coder/gi.test(myDog.name));
```

Ви не повинні редагувати визначення `myDog`.

```js
assert(/"name": "Coder"/.test(code));
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
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line

```

# --solutions--

```js
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.name = "Happy Coder";
```
