---
id: 587d7db1367417b2b2512b86
title: إعادة تعيين خاصية موروثة
challengeType: 1
forumTopicId: 301324
dashedName: reset-an-inherited-constructor-property
---

# --description--

عندما يرث الـ object الـ `prototype` من object آخر، فإنه يرث أيضا الـ supertype's constructor property.

على سبيل المثال:

```js
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor
```

ولكن `duck` وجميع الـ instances من `Bird` يجب أن تظهر أنها بنيت اي constructed، بواسطة `Bird` وليس `Animal`. للقيام بذلك، يمكنك تعيين constructor property لـ `Bird` إلى object الـ `Bird`:

```js
Bird.prototype.constructor = Bird;
duck.constructor
```

# --instructions--

أصلح الكود بحيث يقوم `duck.constructor` و `beagle.constructor` بإرجاع الـ constructors لكل منهم.

# --hints--

`Bird.prototype` يجب أن يكون instance لـ `Animal`.

```js
assert(Animal.prototype.isPrototypeOf(Bird.prototype));
```

`duck.constructor` يجب أن يرجع `Bird`.

```js
assert(duck.constructor === Bird);
```

`Dog.prototype` يجب أن يكون instance لـ `Animal`.

```js
assert(Animal.prototype.isPrototypeOf(Dog.prototype));
```

`beagle.constructor` يجب أن يرجع `Dog`.

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
