---
id: 587d7b8b367417b2b2512b50
title: Напишіть стислі декларативні функції за допомогою ES6
challengeType: 1
forumTopicId: 301224
dashedName: write-concise-declarative-functions-with-es6
---

# --description--

При визначенні функцій у об’єктах у ES5 ми маємо використовувати ключове слово `function` наступним чином:

```js
const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};
```

За допомогою ES6 ви можете взагалі видалити ключове слово `function` і двокрапку під час визначення функцій в об’єктах. Ось приклад такого синтаксису:

```js
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};
```

# --instructions--

Реорганізуйте функцію `setGear` всередині об’єкта `bicycle`, щоб використати скорочений синтаксис, описаний вище.

# --hints--

Традиційні вираження функцій не повинні використовуватися.

```js
(getUserInput) => assert(!code.match(/function/));
```

`setGear` повинна бути декларативною функцією.

```js
assert(
  typeof bicycle.setGear === 'function' && code.match(/setGear\s*\(.+\)\s*\{/)
);
```

`bicycle.setGear(48)` повинен змінити значення `gear` для 48.

```js
bicycle.setGear(48);
assert(bicycle.gear === 48);
```

# --seed--

## --seed-contents--

```js
// Only change code below this line
const bicycle = {
  gear: 2,
  setGear: function(newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
```

# --solutions--

```js
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
bicycle.setGear(3);
```
