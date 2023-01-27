---
id: 587d7b8b367417b2b2512b50
title: Написання стислих декларативних функцій з ES6
challengeType: 1
forumTopicId: 301224
dashedName: write-concise-declarative-functions-with-es6
---

# --description--

Ми повинні використовувати ключове слово `function`, коли визначаємо функції в межах об’єктів у ES5:

```js
const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};
```

В ES6 ви можете взагалі видалити ключове слово `function` і двокрапку, коли визначаєте функції в об’єктах. Ось приклад такого синтаксису:

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

Не використовуйте традиційні вирази функцій.

```js
(getUserInput) => assert(!code.match(/function/));
```

`setGear` повинна бути декларативною функцією.

```js
assert(
  typeof bicycle.setGear === 'function' && code.match(/setGear\s*\(.+\)\s*\{/)
);
```

`bicycle.setGear(48)` має змінити значення `gear` на 48.

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
