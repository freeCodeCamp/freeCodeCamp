---
id: 587d7db0367417b2b2512b81
title: Capire da dove viene il prototipo di un oggetto
challengeType: 1
forumTopicId: 301330
dashedName: understand-where-an-objects-prototype-comes-from
---

# --description--

Proprio come le persone ereditano i geni dai loro genitori, un oggetto eredita il suo `prototype` direttamente dalla funzione costruttore che lo ha creato. Ad esempio, qui il costruttore `Bird` crea l'oggetto `duck`:

```js
function Bird(name) {
  this.name = name;
}

let duck = new Bird("Donald");
```

`duck` eredita il suo `prototype` dalla funzione costruttore di `Bird`. Puoi mostrare questa relazione con il metodo `isPrototypeOf`:

```js
Bird.prototype.isPrototypeOf(duck);
```

Questo restituirà `true`.

# --instructions--

Usa `isPrototypeOf` per controllare il `prototype` di `beagle`.

# --hints--

Dovresti mostrare che `Dog.prototype` è il `prototype` di `beagle`

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
