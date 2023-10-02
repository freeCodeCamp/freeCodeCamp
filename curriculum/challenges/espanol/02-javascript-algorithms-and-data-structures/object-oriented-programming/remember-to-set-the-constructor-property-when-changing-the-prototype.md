---
id: 587d7daf367417b2b2512b80
title: Recuerda establecer la propiedad "constructor" al cambiar el prototipo
challengeType: 1
forumTopicId: 301323
dashedName: remember-to-set-the-constructor-property-when-changing-the-prototype
---

# --description--

Hay un efecto secundario crucial de ajustar manualmente el prototipo a un nuevo objeto. ¡Elimina la propiedad `constructor`! Esta propiedad puede ser usada para verificar cuál función de constructor creó la instancia. Sin embargo, dado que la propiedad ha sido sobrescrita, ahora devuelve resultados falsos:

```js
duck.constructor === Bird;
duck.constructor === Object;
duck instanceof Bird;
```

En orden, estas expresiones se evaluarían como `false`, `true` y `true`.

Para solucionar esto, cada vez que un prototipo se establece de forma manual a un nuevo objeto, recuerda definir la propiedad `constructor`:

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

Define la propiedad `constructor` en el `Dog` `prototype`.

# --hints--

`Dog.prototype` debe establecer la propiedad `constructor`.

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
