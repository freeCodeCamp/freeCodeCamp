---
id: 587d7db1367417b2b2512b86
title: Ripristinare una proprietà constructor ereditata
challengeType: 1
forumTopicId: 301324
dashedName: reset-an-inherited-constructor-property
---

# --description--

Quando un oggetto eredita il suo `prototype` da un altro oggetto, eredita anche la proprietà costruttore del supertipo.

Ecco un esempio:

```js
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor
```

Ma `duck` e tutte le istanze di `Bird` dovrebbero mostrare che sono stati costruiti da `Bird` e non da `Animal`. Per farlo, puoi impostare manualmente la proprietà costruttore di `Bird` all'oggetto `Bird`:

```js
Bird.prototype.constructor = Bird;
duck.constructor
```

# --instructions--

Correggi il codice in modo che `duck.constructor` e `beagle.constructor` restituiscano i rispettivi costruttori.

# --hints--

`Bird.prototype` dovrebbe essere un'istanza di `Animal`.

```js
assert(Animal.prototype.isPrototypeOf(Bird.prototype));
```

`duck.constructor` dovrebbe restituire `Bird`.

```js
assert(duck.constructor === Bird);
```

`Dog.prototype` dovrebbe essere un'istanza di `Animal`.

```js
assert(Animal.prototype.isPrototypeOf(Dog.prototype));
```

`beagle.constructor` dovrebbe restituire `Dog`.

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
