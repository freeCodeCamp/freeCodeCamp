---
id: 587d7b8b367417b2b2512b53
title: Usare la sintassi class per definire una funzione costruttore
challengeType: 1
forumTopicId: 301212
dashedName: use-class-syntax-to-define-a-constructor-function
---

# --description--

ES6 fornisce una nuova sintassi per creare oggetti, utilizzando la parola chiave <dfn>class</dfn> (classe).

In ES5, un oggetto può essere creato definendo una funzione `constructor` (costruttore) e usando la parola chiave `new` per istanziare l'oggetto.

In ES6, una dichiarazione `class` possiede un metodo `constructor` che viene invocato con la parola chiave `new`. Se il metodo `constructor` non viene esplicitamente definito, allora è definito implicitamente senza argomenti.

```js
// Explicit constructor
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
  takeOff() {
    console.log("To " + this.targetPlanet + "!");
  }
}

// Implicit constructor 
class Rocket {
  launch() {
    console.log("To the moon!");
  }
}

const zeus = new SpaceShuttle('Jupiter');
// prints To Jupiter! in console
zeus.takeOff();

const atlas = new Rocket();
// prints To the moon! in console
atlas.launch();
```

Va notato che la parola chiave `class` dichiara una nuova funzione, alla quale viene aggiunto un costruttore. Questo costruttore viene invocato quando `new` viene chiamata per creare un nuovo oggetto.

**Nota:** per i nomi di classi ES6 dovrebbe essere usato per convenzione lo stile di scrittura UpperCamelCase, come fatto sopra in `SpaceShuttle`.

Il metodo `constructor` è un metodo speciale per creare e inizializzare un oggetto creato con class. Potrai approfondire la questione nella sezione Programmazione Orientata agli Oggetti della certificazione Algoritmi e Strutture Dati in JavaScript.

# --instructions--

Usa la parola chiave `class` e scrivi una funzione `constructor` per creare la classe `Vegetable`.

La classe `Vegetable` consente di creare un oggetto con una proprietà `name` che viene passata al `constructor`.

# --hints--

`Vegetable` dovrebbe essere una `class` con un metodo `constructor` definito.

```js
assert(
  typeof Vegetable === 'function' && typeof Vegetable.constructor === 'function'
);
```

Dovresti usare la parola chiave `class`.

```js
assert(code.match(/class/g));
```

`Vegetable` dovrebbe poter essere istanziata.

```js
assert(() => {
  const a = new Vegetable('apple');
  return typeof a === 'object';
});
```

`carrot.name` dovrebbe restituire `carrot`.

```js
assert(carrot.name == 'carrot');
```

# --seed--

## --seed-contents--

```js
// Only change code below this line

// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'
```

# --solutions--

```js
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}
const carrot = new Vegetable('carrot');
```
