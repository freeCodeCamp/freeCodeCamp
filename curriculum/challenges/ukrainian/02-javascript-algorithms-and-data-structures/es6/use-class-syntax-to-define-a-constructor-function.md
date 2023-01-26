---
id: 587d7b8b367417b2b2512b53
title: Використовуйте клас синтаксису для визначення функції Constructor
challengeType: 1
forumTopicId: 301212
dashedName: use-class-syntax-to-define-a-constructor-function
---

# --description--

ES6 забезпечує новий синтаксис для створення об'єктів, використовуючи ключове слово <dfn>class</dfn>.

Варто зазначити, що синтаксис `class` є просто синтаксисом, а не повноцінною реалізацією об'єктно-орієнтованої парадигми, на відміну від таких мов як Java, Python, Ruby, і т.д.

In ES5, an object can be created by defining a `constructor` function and using the `new` keyword to instantiate the object.

In ES6, a `class` declaration has a `constructor` method that is invoked with the `new` keyword. If the `constructor` method is not explicitly defined, then it is implicitly defined with no arguments.

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

Варто зазначити, що ключове слово `class` оголошує нову функцію, до якої додається конструктор. Конструктор викликається, коли ключове слово `new` використовується для створення нового об'єкту.

**Примітка:** UpperCamelCase слід використовувати в конвенції для назв класів ES6, як і в `SpaceShuttle` використаного вище.

Метод `constructor` це спеціальний метод для створення та ініціалізації об'єкта, створений за допомогою класу. Ви можете дізнатись про це більше у розділі "Об"єктно-орієнтоване програмування" JavaScript алгоритми та структура даних.

# --instructions--

Використайте ключове слово `class` та напишіть `constructor` для створення класу `Vegetable`.

Клас `Vegetable` дозволяє створити об'єкт vegetable з параметром `name`, що опускає `constructor`.

# --hints--

`Vegetable` має бути `class` визначений методом `constructor`.

```js
assert(
  typeof Vegetable === 'function' && typeof Vegetable.constructor === 'function'
);
```

Використовуйте ключове слово `class`.

```js
assert(code.match(/class/g));
```

`Vegetable` має бути інстальовано.

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
