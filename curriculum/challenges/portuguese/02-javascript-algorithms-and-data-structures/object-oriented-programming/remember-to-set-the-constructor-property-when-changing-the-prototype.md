---
id: 587d7daf367417b2b2512b80
title: Lembre-se de Definir a Propriedade Construtora quando Alterar o Protótipo
challengeType: 1
forumTopicId: 301323
dashedName: remember-to-set-the-constructor-property-when-changing-the-prototype
---

# --description--

Tem um efeito colateral crucial de definir manualmente o protótipo de um novo objeto. Isso apaga a propriedade `construtor`! Essa propriedade pode ser utilizada para verificar qual função construtora criou a instância, mas já que a propriedade foi sobrescrita, agora retorna resultados falsos:

```js
duck.constructor === Bird;
duck.constructor === Object;
duck instanceof Bird;
```

Em ordem, essas expressões seriam avaliadas a `false`, `true` e `true`.

Para corrigir isso, toda vez que o protótipo é manualmente definido para um novo objeto, lembre-se de definir a propriedade `construtor`:

```js
Bird.prototype = {
  constructor: Bird,
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name); 
  }
};
```

# --instructions--

Define a propriedade `construtor` no `prototype` de `Dog`.

# --hints--

`Dog.prototype` deve definir a propriedade `construtor`.

```js
assert(Dog.prototype.constructor === Dog);
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

// Only change code below this line
Dog.prototype = {

  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}
Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```
