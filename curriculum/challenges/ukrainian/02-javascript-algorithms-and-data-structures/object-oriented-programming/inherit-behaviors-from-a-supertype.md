---
id: 587d7db0367417b2b2512b84
title: Унаслідуйте поведінку від Supertype
challengeType: 1
forumTopicId: 301319
dashedName: inherit-behaviors-from-a-supertype
---

# --description--

У попередньому завданні ви створили `supertype`під назвою `Animal`, який визначав поведінку, спільну для всіх тварин:

```js
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
```

Це та наступне завдання стосуватиметься того, як повторно використати методи `Animal` всередині `Bird` та `Dog`, не визначаючи їх знову. Там використовується прийом, що називається inheritance (успадкування). Це завдання охоплює перший крок: створити екземпляр `supertype` (або батьківський компонент). Вам вже відомий один спосіб створити екземпляр `Animal` за допомогою оператора `new`:

```js
let animal = new Animal();
```

Використання цього синтаксису для inheritance має деякі недоліки, які є надто складними для охоплення цієї сфери проблеми. Натомість, ось альтернативний підхід без цих недоліків:

```js
let animal = Object.create(Animal.prototype);
```

`Object.create(obj)` створює новий об'єкт і встановлює `obj` як `prototype`. Нагадаємо, що `prototype` є своєрідним «рецептом» для створення об'єкта. Встановивши `prototype` `animal` як `prototype` `Animal`, ви фактично надаєте `animal` екземпляр того ж "рецепта", що і будь -який інший екземпляр `Animal`.

```js
animal.eat();
animal instanceof Animal;
```

Метод `instanceof` тут повертає `true`.

# --instructions--

Використовуйте `Object.create`, щоб створити два екземпляри `Animal` з іменами `duck` та `beagle`.

# --hints--

Повинна бути визначена змінна `duck`.

```js
assert(typeof duck !== 'undefined');
```

Повинна бути визначена змінна `beagle`.

```js
assert(typeof beagle !== 'undefined');
```

Змінна `duck` повинна ініціалізуватися за допомогою `Object.create`.

```js
assert(
  /(let|const|var)\s{1,}duck\s*=\s*Object\.create\s*\(\s*Animal\.prototype\s*\)\s*/.test(
    code
  )
);
```

Змінна `beagle` повинна бути ініціалізована за допомогою `Object.create`.

```js
assert(
  /(let|const|var)\s{1,}beagle\s*=\s*Object\.create\s*\(\s*Animal\.prototype\s*\)\s*/.test(
    code
  )
);
```

`duck` повинна мати `prototype` з `Animal`.

```js
assert(duck instanceof Animal);
```

`beagle` повинна мати `prototype` з `Animal`.

```js
assert(beagle instanceof Animal);
```

# --seed--

## --seed-contents--

```js
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Only change code below this line

let duck; // Change this line
let beagle; // Change this line
```

# --solutions--

```js
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);

duck.eat();
beagle.eat();
```
