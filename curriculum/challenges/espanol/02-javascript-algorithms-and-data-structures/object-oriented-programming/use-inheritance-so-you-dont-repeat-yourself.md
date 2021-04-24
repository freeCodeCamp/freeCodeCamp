---
id: 587d7db0367417b2b2512b83
title: Usa herencia para que no te repitas
challengeType: 1
forumTopicId: 301334
dashedName: use-inheritance-so-you-dont-repeat-yourself
---

# --description--

Hay un principio en la programación llamado <dfn>No te repitas (Don't Repeat Yourself "DRY")</dfn>. La razón por la que el código repetido es un problema es porque cualquier tipo de cambio requiere corregir código en múltiples lugares. Esto suele significar más trabajo para los programadores y más espacio para errores.

Observa en el siguiente ejemplo como el método `describe` es compartido por `Bird` y `Dog`:

```js
Bird.prototype = {
  constructor: Bird,
  describe: function() {
    console.log("My name is " + this.name);
  }
};

Dog.prototype = {
  constructor: Dog,
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

El método `describe` se repite en dos lugares. El código se puede editar para seguir el principio DRY creando un `supertype` (o padre) llamado `Animal`:

```js
function Animal() { };

Animal.prototype = {
  constructor: Animal, 
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

Dado que `Animal` incluye el método `describe`, puedes eliminarlo de `Bird` y `Dog`:

```js
Bird.prototype = {
  constructor: Bird
};

Dog.prototype = {
  constructor: Dog
};
```

# --instructions--

El método `eat` se repite tanto en `Cat` como `Bear`. Edita el código utilizando el principio DRY, moviendo el método `eat` al `supertype` `Animal`.

# --hints--

`Animal.prototype` debe tener la propiedad `eat`.

```js
assert(Animal.prototype.hasOwnProperty('eat'));
```

`Bear.prototype` no debe tener la propiedad `eat`.

```js
assert(!Bear.prototype.hasOwnProperty('eat'));
```

`Cat.prototype` no debe tener la propiedad `eat`.

```js
assert(!Cat.prototype.hasOwnProperty('eat'));
```

# --seed--

## --seed-contents--

```js
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,

};
```

# --solutions--

```js
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
```
