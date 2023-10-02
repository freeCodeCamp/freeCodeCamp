---
id: 587d7db1367417b2b2512b86
title: Скидання властивості успадкованого конструктора
challengeType: 1
forumTopicId: 301324
dashedName: reset-an-inherited-constructor-property
---

# --description--

Якщо об’єкт успадковує `prototype` від іншого об’єкту, він також успадковує властивість конструктора супертипу.

Наприклад:

```js
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor
```

Але `duck` та усі екземпляри `Bird` мають показати, що їх створив `Bird`, а не `Animal`. Для цього ви можете власноруч встановити властивість конструктора `Bird` на об’єкт `Bird`:

```js
Bird.prototype.constructor = Bird;
duck.constructor
```

# --instructions--

Змініть код, щоб `duck.constructor` та `beagle.constructor` повернули відповідні конструктори.

# --hints--

`Bird.prototype` має бути екземпляром `Animal`.

```js
assert(Animal.prototype.isPrototypeOf(Bird.prototype));
```

`duck.constructor` має повернути `Bird`.

```js
assert(duck.constructor === Bird);
```

`Dog.prototype` має бути екземпляром `Animal`.

```js
assert(Animal.prototype.isPrototypeOf(Dog.prototype));
```

`beagle.constructor` має повернути `Dog`.

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
