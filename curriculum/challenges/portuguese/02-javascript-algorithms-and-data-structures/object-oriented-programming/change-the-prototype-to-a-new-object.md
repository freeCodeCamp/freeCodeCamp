---
id: 587d7daf367417b2b2512b7f
title: Mudar o protótipo para um novo objeto
challengeType: 1
forumTopicId: 301316
dashedName: change-the-prototype-to-a-new-object
---

# --description--

Até o momento, você tem adicionado propriedades para cada `prototype` individualmente:

```js
Bird.prototype.numLegs = 2;
```

Isto se torna entediante após mais do que algumas propriedades.

```js
Bird.prototype.eat = function() {
  console.log("nom nom nom");
}

Bird.prototype.describe = function() {
  console.log("My name is " + this.name);
}
```

Uma forma mais eficiente é definir o `prototype` para um novo objeto que já possui as propriedades. Dessa maneira, as propriedades são adicionadas todas de uma vez:

```js
Bird.prototype = {
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

Adiciona a propriedade `numLegs` e os dois métodos `eat()` e `describe()` para o `prototype` de `Dog` definindo o `prototype` para um novo objeto.

# --hints--

`Dog.prototype` deve ser definido para um novo objeto.

```js
assert(/Dog\.prototype\s*?=\s*?{/.test(code));
```

`Dog.prototype` deve ter a propriedade `numLegs`.

```js
assert(Dog.prototype.numLegs !== undefined);
```

`Dog.prototype` deve ter o método `eat()`.

```js
assert(typeof Dog.prototype.eat === 'function');
```

`Dog.prototype` deve ter o método `describe()`.

```js
assert(typeof Dog.prototype.describe === 'function');
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line

};
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}
Dog.prototype = {
numLegs: 4,
  eat () {
    console.log('nom nom nom');
  },
  describe () {
    console.log('My name is ' + this.name);
  }
};
```
