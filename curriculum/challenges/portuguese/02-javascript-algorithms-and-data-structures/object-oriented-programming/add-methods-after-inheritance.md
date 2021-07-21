---
id: 587d7db1367417b2b2512b87
title: Adicionar métodos após a herança
challengeType: 1
forumTopicId: 301315
dashedName: add-methods-after-inheritance
---

# --description--

Uma função construtora, ou simplesmente construtor, que herda seu objeto de `protótipo` de uma função construtora de supertipo, além dos métodos herdados, ainda poderá ter seus próprios métodos.

Por exemplo, `Bird` é um construtor que herda seu `protótipo` de `Animal`:

```js
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
```

Como adicional do que é herdado da classe `Animal`, você deseja adicionar o comportamento que é único de objetos `Bird`. Aqui, `Bird` irá definir a função `fly()`. As funções são adicionadas ao `protótipo` `Bird` da mesma forma que qualquer função construtora:

```js
Bird.prototype.fly = function() {
  console.log("I'm flying!");
};
```

Agora as instâncias de `Bird` terão ambos os métodos, `eat()` e `fly()`:

```js
let duck = new Bird();
duck.eat();
duck.fly();
```

`duck.eat()` exibe no console a string `nom nom nom`, e `duck.fly()` mostra a string `I'm flying!`.

# --instructions--

Adiciona todos os códigos necessários para que o objeto `Dog` herde de `Animal` e o `protótipo` de construtor de `Dog` está definido para `Dog`. Então adiciona o método `bark()` para o objeto `Dog` para que um `beagle` possa `eat()` e `bark()`. O método `bark()` deveria imprimir no console a string: `Woof!`.

# --hints--

`Animal` não deve possuir o método `bark()`.

```js
assert(typeof Animal.prototype.bark == 'undefined');
```

`Dog` deve herdar o método `eat()` de `Animal`.

```js
assert(typeof Dog.prototype.eat == 'function');
```

O protótipo de `Dog` deve ter o método `bark()`.

```js
assert('bark' in Dog.prototype);
```

`beagle` deve ser uma `instância` de `Animal`.

```js
assert(beagle instanceof Animal);
```

O construtor para `beagle` deve ser definido para `Dog`.

```js
assert(beagle.constructor === Dog);
```

`beagle.eat()` deve mostrar no console a string `nom nom nom`

```js
console.log = function (msg) {
  throw msg;
};
assert.throws(() => beagle.eat(), 'nom nom nom');
```

`beagle.bark()` deve mostrar no console a string `nom nom nom`

```js
console.log = function (msg) {
  throw msg;
};
assert.throws(() => beagle.bark(), 'Woof!');
```

# --seed--

## --seed-contents--

```js
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line




// Only change code above this line

let beagle = new Dog();
```

# --solutions--

```js
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
  console.log('Woof!');
};
let beagle = new Dog();

beagle.eat();
beagle.bark();
```
