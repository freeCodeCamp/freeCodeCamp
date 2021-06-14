---
id: 587d7db0367417b2b2512b83
title: Usare l'ereditarietà per non ripeterti
challengeType: 1
forumTopicId: 301334
dashedName: use-inheritance-so-you-dont-repeat-yourself
---

# --description--

C'è un principio nella programmazione chiamato <dfn>Don't Repeat Yourself (DRY)</dfn>, che significa "non ripetere te stesso". Il motivo per cui il codice ripetuto è un problema è che qualsiasi modifica richiede di sistemare il codice in più punti. Questo di solito significa più lavoro per i programmatori e più spazio per gli errori.

Nota nell'esempio sottostante che il metodo `describe` è condiviso da `Bird` e da `Dog`:

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

Il metodo `describe` viene ripetuto in due punti. Il codice può essere modificato per seguire il principio DRY creando un `supertype` (o genitore) chiamato `Animal`:

```js
function Animal() { };

Animal.prototype = {
  constructor: Animal, 
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

Dal momento che `Animal` include il metodo `describe`, puoi rimuoverlo da `Bird` e `Dog`:

```js
Bird.prototype = {
  constructor: Bird
};

Dog.prototype = {
  constructor: Dog
};
```

# --instructions--

Il metodo `eat` viene ripetuto sia in `Cat` che in `Bear`. Modifica il codice nello spirito di DRY spostando il metodo `eat` nel `supertype` `Animal`.

# --hints--

`Animal.prototype` dovrebbe avere la proprietà `eat`.

```js
assert(Animal.prototype.hasOwnProperty('eat'));
```

`Bear.prototype` non dovrebbe avere la proprietà `eat`.

```js
assert(!Bear.prototype.hasOwnProperty('eat'));
```

`Cat.prototype` non dovrebbe avere la proprietà `eat`.

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
