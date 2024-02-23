---
id: 587d7db1367417b2b2512b88
title: Sobrescrever métodos herdados
challengeType: 1
forumTopicId: 301322
dashedName: override-inherited-methods
---

# --description--

Nas lições passadas, você aprendeu que um objeto pode herdar seus comportamentos (métodos) de outro objeto ao referenciar o `prototype` do objeto:

```js
ChildObject.prototype = Object.create(ParentObject.prototype);
```

Em seguida, o `ChildObject` recebeu seu próprio método ao encadear eles neste `prototype`:

```js
ChildObject.prototype.methodName = function() {...};
```

É possível sobrescrever um método herdado. É feito da mesma maneira - ao adicionar o método a `ChildObject.prototype` utilizando o mesmo nome do método que aquele a ser sobrescrito. Aqui está um exemplo de `Bird` sobrescrevendo o método `eat()` herdado de `Animal`:

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

Se você tem uma instância `let duck = new Bird();` e você chamar `duck.eat()`, é assim que o JavaScript procura pelo método na cadeia de `prototype` de `duck`:

1.  `duck` => o método `eat()` está definido aqui? Não.
2.  `Bird` => o método `eat()` está definido aqui? => Sim. Execute isso e pare de procurar.
3.  `Animal` => `eat()` também é definido, mas o JavaScript parou de procurar antes de chegar a este nível.
4.  Objeto => JavaScript parou de procurar antes de chegar a este nível.

# --instructions--

Sobrescreva o método `fly()` para `Penguin` para que retorne a string `Alas, this is a flightless bird.` (Infelizmente, este pássaro não voa.)

# --hints--

`penguin.fly()` deve retornar a string `Alas, this is a flightless bird.` (Infelizmente, este pássaro não voa.)

```js
assert(penguin.fly() === 'Alas, this is a flightless bird.');
```

O método `bird.fly()` deve retornar a string `I am flying!` (Eu estou voando!)

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
