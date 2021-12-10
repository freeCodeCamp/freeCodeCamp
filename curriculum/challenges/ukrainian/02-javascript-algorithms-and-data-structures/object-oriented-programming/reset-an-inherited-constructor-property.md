---
id: 587d7db1367417b2b2512b86
title: Скинути властивість успадкованого конструктора
challengeType: 1
forumTopicId: 301324
dashedName: reset-an-inherited-constructor-property
---

# --description--

Якщо об'єкт успадковує `prototype` від іншого об'єкту, він також успадковує властивість конструктору супертипу.

Наприклад:

```js
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor
```

Але `duck` й усі відбитки `Bird` повинні відображати, що вони були відтворені в `Bird`, а не в `Animal`. Для цього ви можете власноруч встановити властивість конструктора `Bird` для `Bird`:

```js
Bird.prototype.constructor = Bird;
duck.constructor
```

# --instructions--

Змініть код, щоб `duck.constructor` й `beagle.constructor` повернули їх відповідні конструктори.

# --hints--

`Bird.prototype` повинен бути частиною `Animal`.

```js
assert(Animal.prototype.isPrototypeOf(Bird.prototype));
```

`duck.constructor` має повертати `Bird`.

```js
assert(duck.constructor === Bird);
```

`Dog.prototype` має бути частиною `Animal`.

```js
assert(Animal.prototype.isPrototypeOf(Dog.prototype));
```

`beagle.constructor` має повертати `Dog`.

```js
assert(beagle.constructor === Dog);
```

# --seed--

## --seed-contents--

```js
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line



let duck = new Bird();
let beagle = new Dog();
```

# --solutions--

```js
function Animal() { }
function Bird() { }
function Dog() { }
Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Bird.prototype.constructor = Bird;
let duck = new Bird();
let beagle = new Dog();
```
