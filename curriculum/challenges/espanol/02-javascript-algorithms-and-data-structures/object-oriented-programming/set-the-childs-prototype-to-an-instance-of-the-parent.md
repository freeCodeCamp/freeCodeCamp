---
id: 587d7db1367417b2b2512b85
title: Establece el prototipo de hijo para una instancia del padre
challengeType: 1
forumTopicId: 301325
dashedName: set-the-childs-prototype-to-an-instance-of-the-parent
---

# --description--

En el desafío anterior, viste el primer paso para heredar el comportamiento del supertipo (o padre) `Animal`: creando una nueva instancia de `Animal`.

Este desafío cubre el siguiente paso: establecer el prototipo `prototype` del subtipo (o hijo) —en este caso, `Bird`— para ser una instancia de `Animal`.

```js
Bird.prototype = Object.create(Animal.prototype);
```

Recuerda que el prototipo `prototype` es como la "receta" para crear un objeto. En cierto modo, la receta de `Bird` ahora incluye todos los "ingredientes" clave de `Animal`.

```js
let duck = new Bird("Donald");
duck.eat();
```

`duck` hereda todas las propiedades de `Animal`, incluyendo el método `eat`.

# --instructions--

Modifica el código para que las instancias de `Dog` hereden de `Animal`.

# --hints--

`Dog.prototype` debe ser una instancia de `Animal`.

```js
assert(Animal.prototype.isPrototypeOf(Dog.prototype));
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

function Dog() { }

// Only change code below this line


let beagle = new Dog();
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

function Dog() { }
Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();
beagle.eat();
```
