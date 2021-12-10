---
id: 56bbb991ad1ed5201cd392d1
title: Оновлення властивостей об'єкта
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9yEJT4'
forumTopicId: 18336
dashedName: updating-object-properties
---

# --description--

Після того, як ви створили об'єкт JavaScript, ви можете оновити його властивості в будь-який час, так як і будь-які інші його змінні. Ви можете використовувати точкову або дужкову нотацію для оновлення.

Наприклад, погляньмо на `ourDog`:

```js
const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
```

Оскільки це винятково щасливий собака, змінімо його ім'я на рядок `Happy Camper`. Ось як ми оновимо властивість імені його об'єкта: `ourDog.name = "Happy Camper";` або `ourDog["name"] = "Happy Camper";` Тепер коли ми оцінюємо `ourDog.name`, замість того, щоб отримати `Camper`, ми отримаємо його нове ім'я `Happy Camper`.

# --instructions--

Оновити властивість імені об'єкта `myDog`. Змінімо його ім'я з `Coder` на `Happy Coder`. Ви можете використовувати точкову або крапкову нотацію.

# --hints--

Вам слід оновити властивість `name` `myDog`, щоб вона дорівнювала рядку`Happy Coder`.

```js
assert(/happy coder/gi.test(myDog.name));
```

Не слід змінювати визначення `myDog`.

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
