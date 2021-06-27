---
id: 587d7daf367417b2b2512b7f
title: Cambiare il prototipo in un nuovo oggetto
challengeType: 1
forumTopicId: 301316
dashedName: change-the-prototype-to-a-new-object
---

# --description--

Fino ad ora hai aggiunto singole proprietà al `prototype`:

```js
Bird.prototype.numLegs = 2;
```

Questo diventa noioso se hai un certo numero di proprietà.

```js
Bird.prototype.eat = function() {
  console.log("nom nom nom");
}

Bird.prototype.describe = function() {
  console.log("My name is " + this.name);
}
```

Un modo più efficiente è quello di impostare il `prototype` su un nuovo oggetto che contenga già le proprietà. In questo modo, le proprietà vengono aggiunte tutte contemporaneamente:

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

Aggiungi la proprietà `numLegs` e i due metodi `eat()` e `describe()` al `prototype` di `Dog` impostando il `prototype` a un nuovo oggetto.

# --hints--

`Dog.prototype` dovrebbe essere impostato su un nuovo oggetto.

```js
assert(/Dog\.prototype\s*?=\s*?{/.test(code));
```

`Dog.prototype` dovrebbe avere la proprietà `numLegs`.

```js
assert(Dog.prototype.numLegs !== undefined);
```

`Dog.prototype` dovrebbe avere il metodo `eat()`.

```js
assert(typeof Dog.prototype.eat === 'function');
```

`Dog.prototype` dovrebbe avere il metodo `describe()`.

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
