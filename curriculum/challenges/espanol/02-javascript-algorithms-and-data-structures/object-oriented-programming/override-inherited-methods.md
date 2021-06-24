---
id: 587d7db1367417b2b2512b88
title: Sobrescribir métodos heredados
challengeType: 1
forumTopicId: 301322
dashedName: override-inherited-methods
---

# --description--

En lecciones anteriores, aprendiste que un objeto puede heredar su comportamiento (métodos) de otro objeto al referenciar su `prototype`:

```js
ChildObject.prototype = Object.create(ParentObject.prototype);
```

Luego, el `ChildObject` recibió sus propios métodos al encadenarlos a su `prototype`:

```js
ChildObject.prototype.methodName = function() {...};
```

Es posible sobreescribir un método heredado. Se hace de la misma manera: agregando un método a `ChildObject.prototype` usando el mismo nombre de método que el que se va a sobrescribir. Aquí hay un ejemplo de `Bird` sobrescribiendo el método `eat()` heredado de `Animal`:

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

Si tienes una instancia de `let duck = new Bird();` y llamas a `duck.eat()`, así es como JavaScript busca el método en la cadena `prototype` de `duck`:

1.  `duck` => ¿Está `eat()` definido aquí? No.
2.  `Bird` => ¿Está `eat()` definido aquí? => Sí. Ejecútala y detén la búsqueda.
3.  `Animal` => `eat()` también está definido, pero JavaScript dejó de buscar antes de llegar a este nivel.
4.  Object => JavaScript dejó de buscar antes de llegar a este nivel.

# --instructions--

Sobrescribe el método `fly()` para `Penguin` de manera que devuelva la cadena de texto `Alas, this is a flightless bird.`

# --hints--

`penguin.fly()` debe devolver la cadena de texto `Alas, this is a flightless bird.`

```js
assert(penguin.fly() === 'Alas, this is a flightless bird.');
```

El método `bird.fly()` debe devolver la cadena de texto `I am flying!`

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
