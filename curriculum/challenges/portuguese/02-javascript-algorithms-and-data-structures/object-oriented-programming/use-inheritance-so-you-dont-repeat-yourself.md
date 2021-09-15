---
id: 587d7db0367417b2b2512b83
title: Utilizar herança para não se repetir
challengeType: 1
forumTopicId: 301334
dashedName: use-inheritance-so-you-dont-repeat-yourself
---

# --description--

Tem um princípio da programação chamado <dfn>Don't Repeat Yourself (DRY) - Não se Repita</dfn>. O motivo pelo qual código repetido é um problema se deve ao fato de qualquer alteração exige correção de código em vários locais. Geralmente isso significa mais trabalho para os programadores e mais espaço para erros.

Note que, no exemplo abaixo, o método `describe` é compartilhado por `Bird` e `Dog`:

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

O método `describe` é repetido em dois locais. O código pode ser editado para seguir o princípio DRY (Não se Repita) ao criar um `supertype` (ou parente) chamado `Animal`:

```js
function Animal() { };

Animal.prototype = {
  constructor: Animal, 
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

Desde que `Animal` inclui o método `describe`, você pode remover ele de `Bird` e `Dog`:

```js
Bird.prototype = {
  constructor: Bird
};

Dog.prototype = {
  constructor: Dog
};
```

# --instructions--

O método `eat` é repetido em `Cat` e `Bear`. Edite o código no espírito do princípio DRY ao mover o método `eat` do `supertype` de `Animal`.

# --hints--

`Animal.prototype` deve ter a propriedade `eat`.

```js
assert(Animal.prototype.hasOwnProperty('eat'));
```

`Bear.prototype` não deve ter a propriedade `eat`.

```js
assert(!Bear.prototype.hasOwnProperty('eat'));
```

`Cat.propotype` não deve ter a propriedade `eat`.

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
