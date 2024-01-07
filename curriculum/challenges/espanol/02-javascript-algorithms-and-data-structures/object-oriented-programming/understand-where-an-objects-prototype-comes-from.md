---
id: 587d7db0367417b2b2512b81
title: Entendiendo de dónde viene el prototipo de un objeto
challengeType: 1
forumTopicId: 301330
dashedName: understand-where-an-objects-prototype-comes-from
---

# --description--

Así como las personas heredamos genes de nuestros padres, los objetos también heredan su `prototype` directamente de la función constructor que lo creó. Por ejemplo, aquí el constructor `Bird` crea el objeto `duck`:

```js
function Bird(name) {
  this.name = name;
}

let duck = new Bird("Donald");
```

`duck` hereda su `prototype` de la función constructor `Bird`. Puedes mostrar esta relación con el método `isPrototypeOf`:

```js
Bird.prototype.isPrototypeOf(duck);
```

Este devolvería `true`.

# --instructions--

Utiliza `isPrototypeOf` para comprobar el `prototype` de `beagle`.

# --hints--

Debes mostrar que `Dog.prototype` es el `prototype` de `beagle`

```js
assert(/Dog\.prototype\.isPrototypeOf\(beagle\)/.test(code));
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Only change code below this line
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}
let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);
```
