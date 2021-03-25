---
id: 587d7daf367417b2b2512b7f
title: Cambia el prototipo a un nuevo objeto
challengeType: 1
forumTopicId: 301316
dashedName: change-the-prototype-to-a-new-object
---

# --description--

Hasta ahora, has estado agregando propiedades al `prototype` (prototipo) individualmente:

```js
Bird.prototype.numLegs = 2;
```

Esto se vuelve tedioso después de varias propiedades.

```js
Bird.prototype.eat = function() {
  console.log("nom nom nom");
}

Bird.prototype.describe = function() {
  console.log("My name is " + this.name);
}
```

Una forma más eficiente es establecer el `prototype` a un nuevo objeto que ya contenga las propiedades. De esta forma, las propiedades son añadidas todas a la vez:

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

Agrega la propiedad `numLegs`, y los dos métodos `eat()` y `describe()` al `prototype` de `Dog`, estableciendo `prototype` a un nuevo objeto.

# --hints--

`Dog.prototype` debe establecerse a un nuevo objeto.

```js
assert(/Dog\.prototype\s*?=\s*?{/.test(code));
```

`Dog.prototype` debe tener la propiedad `numLegs`.

```js
assert(Dog.prototype.numLegs !== undefined);
```

`Dog.prototype` debe tener el método `eat()`.

```js
assert(typeof Dog.prototype.eat === 'function');
```

`Dog.prototype` debe tener el método `describe()`.

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
