---
id: 587d7db1367417b2b2512b86
title: Redefinir uma propriedade herdada do construtor
challengeType: 1
forumTopicId: 301324
dashedName: reset-an-inherited-constructor-property
---

# --description--

Quando um objeto herda seu `prototype` de outro objeto, ele também herda a propriedade construtora do supertipo.

Exemplo:

```js
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor
```

Mas `duck` e todas as instâncias de `Bird` devem mostrar que eles foram construídos por `Bird` e não `Animal`. Para fazer isso, você pode manualmente definir a propriedade construtora de `Bird` para o objeto `Bird`:

```js
Bird.prototype.constructor = Bird;
duck.constructor
```

# --instructions--

Corrija o código para que `duck.constructor` e `beagle.constructor` retornem seus respectivos construtores.

# --hints--

`Bird.prototype` deve ser uma instância de `Animal`.

```js
assert(Animal.prototype.isPrototypeOf(Bird.prototype));
```

`duck.constructor` deve retornar `Bird`.

```js
assert(duck.constructor === Bird);
```

`Dog.prototype` deve ser uma instância de `Animal`.

```js
assert(Animal.prototype.isPrototypeOf(Dog.prototype));
```

`beagle.constructor` deve retornar `Dog`.

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
