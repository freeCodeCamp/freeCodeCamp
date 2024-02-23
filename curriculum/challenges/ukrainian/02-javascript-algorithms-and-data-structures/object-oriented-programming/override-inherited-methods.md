---
id: 587d7db1367417b2b2512b88
title: Перевизначення успадкованих методів
challengeType: 1
forumTopicId: 301322
dashedName: override-inherited-methods
---

# --description--

У попередніх завданнях ви дізналися, що об’єкт може успадковувати поведінку (методи) від іншого об’єкта, посилаючись на його `prototype`:

```js
ChildObject.prototype = Object.create(ParentObject.prototype);
```

Тоді `ChildObject` отримує власні методи, приєднавши їх до `prototype`:

```js
ChildObject.prototype.methodName = function() {...};
```

Успадкований метод можна змінити. Це робиться так само: треба додати метод до `ChildObject.prototype`, використовуючи таку ж саму назву методу, як й у того, що підлягає редагуванню. Ось приклад `Bird` зі зміненим методом `eat()`, успадкованим від `Animal`:

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

Якщо ви маєте екземпляр `let duck = new Bird();` та викличете `duck.eat()`, ось так JavaScript шукатиме метод у ланцюгу прототипів `duck`:

1.  `duck` => Чи визначено `eat()`? Ні.
2.  `Bird` => Чи визначено `eat()`? => Так. Виконайте й припиніть пошуки.
3.  `Animal` => Також визначено `eat()`, але JavaScript вже припинив пошуки.
4.  Об’єкт => JavaScript припинив пошуки.

# --instructions--

Перевизначте метод `fly()` для `Penguin`, щоб він повернув рядок `Alas, this is a flightless bird.`

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
