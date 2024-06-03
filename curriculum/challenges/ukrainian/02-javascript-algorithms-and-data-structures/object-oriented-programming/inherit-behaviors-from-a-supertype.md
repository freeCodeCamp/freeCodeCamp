---
id: 587d7db0367417b2b2512b84
title: Успадкування поведінки від супертипу
challengeType: 1
forumTopicId: 301319
dashedName: inherit-behaviors-from-a-supertype
---

# --description--

У попередньому завданні ви створили `supertype` під назвою `Animal`, який визначав поведінку, спільну для всіх тварин:

```js
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
```

Це та наступне завдання стосуватиметься того, як повторно використати методи `Animal` всередині `Bird` та `Dog`, не визначаючи їх знову. Тут використовується техніка, що називається успадкуванням. Це завдання охоплює перший крок: створити екземпляр `supertype` (або батьківський елемент). Вам вже відомий один спосіб створити екземпляр `Animal` за допомогою оператора `new`:

```js
let animal = new Animal();
```

Цей синтаксис успадкування має деякі недоліки, які надто складні для цього завдання. Ось альтернативний підхід без цих недоліків:

```js
let animal = Object.create(Animal.prototype);
```

`Object.create(obj)` створює новий об’єкт і налаштовує `obj` як `prototype`. Нагадаємо, що `prototype` є своєрідним «рецептом» для створення об’єкта. Встановивши `animal` `prototype` як `Animal` `prototype`, ви фактично надаєте `animal` екземпляр того ж «рецепта», що і будь-який інший екземпляр `Animal`.

```js
animal.eat();
animal instanceof Animal;
```

Метод `instanceof` поверне `true`.

# --instructions--

Використайте `Object.create`, щоб створити два екземпляри `Animal` під назвою `duck` та `beagle`.

# --hints--

Змінна `duck` має бути визначеною.

```js
assert(typeof duck !== 'undefined');
```

Змінна `beagle` має бути визначеною.

```js
assert(typeof beagle !== 'undefined');
```

Змінну `duck` потрібно ініціалізувати, використавши `Object.create`.

```js
assert(
  /(let|const|var)\s{1,}duck\s*=\s*Object\.create\s*\(\s*Animal\.prototype\s*\)\s*/.test(
    __helpers.removeJSComments(code)
  )
);
```

Змінну `beagle` потрібно ініціалізувати, використавши `Object.create`.

```js
assert(
  /(let|const|var)\s{1,}beagle\s*=\s*Object\.create\s*\(\s*Animal\.prototype\s*\)\s*/.test(
    __helpers.removeJSComments(code)
  )
);
```

`duck` повинна мати `Animal` `prototype`.

```js
assert(duck instanceof Animal);
```

`beagle` повинна мати `Animal` `prototype`.

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
