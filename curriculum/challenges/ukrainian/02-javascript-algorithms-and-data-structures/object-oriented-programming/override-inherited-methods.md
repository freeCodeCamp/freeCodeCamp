---
id: 587d7db1367417b2b2512b88
title: Змінити успадковані методи
challengeType: 1
forumTopicId: 301322
dashedName: override-inherited-methods
---

# --description--

У попередніх уроках ви дізналися, що об'єкт може успадковувати поведінку (методи) від іншого об'єкту, посилаючись на його `prototype`:

```js
ChildObject.prototype = Object.create(ParentObject.prototype);
```

Тоді `ChildObject` отримує власні методи завдяки привласненню їх `prototype`:

```js
ChildObject.prototype.methodName = function() {...};
```

Успадкований метод можна змінити. Це робиться так само: треба додати метод до `ChildObject.prototype`, використовуючи таку ж саму назву методу, як й у того, що підлягає редагуванню. Ось приклад `Bird` зі змінним `eat()` методом, успадкованим від `Animal`:

```js
function Animal() { }
Animal.prototype.eat = function() {
  return "nom nom nom";
};
function Bird() { }

Bird.prototype = Object.create(Animal.prototype);

Bird.prototype.eat = function() {
  return "peck peck peck";
};
```

Якщо у вас є `let duck = new Bird();`, викличте `duck.eat()` — таким чином використовується JavaScript для методу `prototype` ланцюга `duck`:

1.  `duck` => Is `eat()` визначений у цьому випадку? Ні.
2.  `Bird` => Is `eat()` визначений у цьому випадку? => Так. Виконайте це й припиніть пошуки.
3.  `Animal` => `eat()` також визначено, але JavaScript вже припинив пошук перед цим рівнем.
4.  Object => JavaScript припинив пошук до досягнення цього рівня.

# --instructions--

Замінить `fly()` метод для `Penguin` повернення рядку `Alas, this is a flightless bird.`

# --hints--

`penguin.fly()` має повернути рядок `Alas, this is a flightless bird.`

```js
assert(penguin.fly() === 'Alas, this is a flightless bird.');
```

Метод `bird.fly()` має повернути рядок `I am flying!`

```js
assert(new Bird().fly() === 'I am flying!');
```

# --seed--

## --seed-contents--

```js
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line



// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());
```

# --solutions--

```js
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;
Penguin.prototype.fly = () => 'Alas, this is a flightless bird.';
let penguin = new Penguin();
console.log(penguin.fly());
```
