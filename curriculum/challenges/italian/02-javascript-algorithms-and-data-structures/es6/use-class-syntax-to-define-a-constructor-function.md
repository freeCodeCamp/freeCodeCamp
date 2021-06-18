---
id: 587d7b8b367417b2b2512b53
title: Usare la sintassi class per definire una funzione costruttore
challengeType: 1
forumTopicId: 301212
dashedName: use-class-syntax-to-define-a-constructor-function
---

# --description--

ES6 fornisce una nuova sintassi per creare oggetti, utilizzando la parola chiave <dfn>class</dfn> (classe).

Va notato che la sintassi `class` è appunto solo una sintassi, e non la vera e propria implementazione basata su classi di un paradigma orientato agli oggetti, a differenza di quanto accade in linguaggi come Java, Python, Ruby, ecc.

In ES5, di solito definiamo una funzione `constructor` e usiamo la parola chiave `new` per istanziare un oggetto.

```js
var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');
```

La sintassi `class` sostituisce semplicemente la creazione della funzione `constructor`:

```js
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');
```

Va notato che la parola chiave `class` dichiara una nuova funzione, alla quale viene aggiunto un costruttore. Questo costruttore viene invocato quando `new` viene chiamata per creare un nuovo oggetto.

**Nota:** Per i nomi di classi ES6 dovrebbe essere usato per convenzione lo stile di scrittura UpperCamelCase, come fatto sopra in `SpaceShuttle`.

Il metodo costruttore `constructor` è un metodo speciale per creare e inizializzare un oggetto creato con class. Potrai approfondire la cosa nella sezione Programmazione Orientata agli Oggetti della certificazione Algoritmi e Strutture Dati in JavaScript.

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

Dovrebbe essere usata la parola chiave `class`.

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
