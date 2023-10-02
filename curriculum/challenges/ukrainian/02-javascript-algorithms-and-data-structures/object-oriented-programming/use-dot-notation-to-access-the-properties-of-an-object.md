---
id: 587d7dac367417b2b2512b74
title: Точкова нотація, щоб отримати доступ до властивостей об’єкта
challengeType: 1
forumTopicId: 301333
dashedName: use-dot-notation-to-access-the-properties-of-an-object
---

# --description--

У попередньому завданні було створено об’єкт із різними властивостями. Тепер ви побачите як отримати доступ до значень цих властивостей. Ось приклад:

```js
let duck = {
  name: "Aflac",
  numLegs: 2
};
console.log(duck.name);
```

Щоб отримати доступ до значення `Aflac` використали точкову нотацію на імені об’єкта `duck`, після якого йде назва властивості `name`.

# --instructions--

Виведіть обидві властивості об’єкта `dog` на консоль.

# --hints--

Код має використати `console.log`, щоб вивести значення властивості `name` об’єкта `dog`.

```js
assert(/console.log\(.*dog\.name.*\)/g.test(code));
```

Код має використати `console.log`, щоб вивести значення властивості `numLegs` об’єкта `dog`.

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
