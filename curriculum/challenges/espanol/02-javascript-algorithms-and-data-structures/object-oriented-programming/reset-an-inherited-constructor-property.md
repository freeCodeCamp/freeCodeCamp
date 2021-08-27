---
id: 587d7db1367417b2b2512b86
title: Restablece una propiedad "constructor" heredada
challengeType: 1
forumTopicId: 301324
dashedName: reset-an-inherited-constructor-property
---

# --description--

Cuando un objeto hereda el `prototype` de otro objeto, también hereda la propiedad del constructor del supertipo.

Por ejemplo:

```js
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor
```

Pero `duck` y todas las instancias de `Bird` deberían mostrar que fueron construidas por `Bird` y no `Animal`. Para ello, puedes establecer manualmente la propiedad del constructor de `Bird` al objeto `Bird`:

```js
Bird.prototype.constructor = Bird;
duck.constructor
```

# --instructions--

Corrige el código para que `duck.constructor` y `beagle.constructor` devuelvan sus constructores respectivos.

# --hints--

`Bird.prototype` debe ser una instancia de `Animal`.

```js
assert(Animal.prototype.isPrototypeOf(Bird.prototype));
```

`duck.constructor` debe devolver `Bird`.

```js
assert(duck.constructor === Bird);
```

`Dog.prototype` debe ser una instancia de `Animal`.

```js
assert(Animal.prototype.isPrototypeOf(Dog.prototype));
```

`beagle.constructor` debe devolver `Dog`.

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
