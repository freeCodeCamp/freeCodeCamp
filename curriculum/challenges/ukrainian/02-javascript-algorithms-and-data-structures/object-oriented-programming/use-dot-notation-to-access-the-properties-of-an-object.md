---
id: 587d7dac367417b2b2512b74
title: Крапкова нотація для доступу до властивостей об'єкту
challengeType: 1
forumTopicId: 301333
dashedName: use-dot-notation-to-access-the-properties-of-an-object
---

# --description--

У попередньому завданні було створено об'єкт із різними властивостями. Тепер ви побачите як отримати доступ до значень цих властивостей. Ось приклад:

```js
let duck = {
  name: "Aflac",
  numLegs: 2
};
console.log(duck.name);
```

Для доступу до значення `Aflac`, використовується крапкова нотація при імені об'єкта `duck` із відповідним іменем властивості `name` опісля.

# --instructions--

Виведіть на екран обидві властивості об'єкта `dog`.

# --hints--

Ваш код повинен використовувати `console.log` для виведення на екран значення властивості `name` об'єкту `dog`.

```js
assert(/console.log\(.*dog\.name.*\)/g.test(code));
```

Ваш код повинен використовувати `console.log` для виведення на екран значення властивості `numLegs` об'єкту `dog`.

```js
assert(/console.log\(.*dog\.numLegs.*\)/g.test(code));
```

# --seed--

## --seed-contents--

```js
let dog = {
  name: "Spot",
  numLegs: 4
};
// Only change code below this line
```

# --solutions--

```js
let dog = {
  name: "Spot",
  numLegs: 4
};
console.log(dog.name);
console.log(dog.numLegs);
```
