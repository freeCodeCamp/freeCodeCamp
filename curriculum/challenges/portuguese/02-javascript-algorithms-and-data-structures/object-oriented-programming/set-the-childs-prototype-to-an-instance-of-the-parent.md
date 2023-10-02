---
id: 587d7db1367417b2b2512b85
title: Definir o protótipo da classe filha para que seja uma instância do pai
challengeType: 1
forumTopicId: 301325
dashedName: set-the-childs-prototype-to-an-instance-of-the-parent
---

# --description--

No desafio anterior, você viu o primeiro passo para herdar comportamento do supertipo (ou parente) `Animal`: fazendo uma instância de `Animal`.

Este desafio cobre o próximo passo: definir o `prototype` do subtipo (ou filho) - neste caso, `Bird` - para ser uma instância de `Animal`.

```js
Bird.prototype = Object.create(Animal.prototype);
```

Lembre-se de que o `prototype` é como uma receita para criar um objeto. De certo modo, a receita de `Bird` agora inclui todos os "ingredientes" importantes de `Animal`.

```js
let duck = new Bird("Donald");
duck.eat();
```

`duck` herda todas as propriedades de `Animal`, incluindo o método `eat`.

# --instructions--

Modifique o código para que as instâncias de `Dog` herdem de `Animal`.

# --hints--

`Dog.prototype` deve ser uma instância de `Animal`.

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
