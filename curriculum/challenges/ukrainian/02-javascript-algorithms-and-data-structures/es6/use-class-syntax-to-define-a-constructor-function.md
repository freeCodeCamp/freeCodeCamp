---
id: 587d7b8b367417b2b2512b53
title: Синтаксис class для визначення конструктурної функції
challengeType: 1
forumTopicId: 301212
dashedName: use-class-syntax-to-define-a-constructor-function
---

# --description--

ES6 надає новий синтаксис для створення об’єктів, використовуючи ключове слово <dfn>class</dfn>.

В ES5 можна створити об’єкт, визначивши функцію `constructor` та використавши ключове слово `new`, щоб конкретизувати об’єкт.

В ES6 оголошення `class` має метод `constructor`, який викликається з ключовим словом `new`. Якщо метод `constructor` не визначений явно, то він визначається неявно без аргументів.

```js
// Explicit constructor
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
  takeOff() {
    console.log("To " + this.targetPlanet + "!");
  }
}

// Implicit constructor 
class Rocket {
  launch() {
    console.log("To the moon!");
  }
}

const zeus = new SpaceShuttle('Jupiter');
// prints To Jupiter! in console
zeus.takeOff();

const atlas = new Rocket();
// prints To the moon! in console
atlas.launch();
```

Варто зазначити, що ключове слово `class` оголошує нову функцію, до якої додається конструктор. Конструктор прокидається, коли для створення нового об’єкта викликають `new`.

**Примітка:** згідно з конвенцією для назв класів потрібно використовувати ВерхнійВерблюдячийРегістр, як у `SpaceShuttle` вище.

Метод `constructor` є спеціальним методом для створення та ініціалізації об’єкта, створеного за допомогою класу. Ви дізнаєтесь про це детальніше у розділі об’єктноорієнтованого програмування сертифікації «Алгоритми JavaScript та структури даних».

# --instructions--

Використайте ключове слово `class` та напишіть `constructor`, щоб створити клас `Vegetable`.

Клас `Vegetable` дозволяє створити об’єкт-овоч із властивістю `name`, що передається до `constructor`.

# --hints--

`Vegetable` повинен бути класом (`class`) із визначеним методом `constructor`.

```js
assert(
  typeof Vegetable === 'function' && typeof Vegetable.constructor === 'function'
);
```

Використайте ключове слово `class`.

```js
assert(code.match(/class/g));
```

`Vegetable` повинен бути реалізованим.

```js
assert(() => {
  const a = new Vegetable('apple');
  return typeof a === 'object';
});
```

`carrot.name` має повертати `carrot`.

```js
assert(carrot.name == 'carrot');
```

# --seed--

## --seed-contents--

```js
// Only change code below this line

// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'
```

# --solutions--

```js
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}
const carrot = new Vegetable('carrot');
```
