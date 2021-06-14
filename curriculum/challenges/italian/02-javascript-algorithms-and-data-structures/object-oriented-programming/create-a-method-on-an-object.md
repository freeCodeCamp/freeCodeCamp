---
id: 587d7dad367417b2b2512b75
title: Creare un metodo per un oggetto
challengeType: 1
forumTopicId: 301318
dashedName: create-a-method-on-an-object
---

# --description--

Gli oggetti possono avere un tipo speciale di proprietà, chiamato <dfn>metodo</dfn>.

I metodi sono proprietà che sono funzioni. Questo aggiunge comportamenti diversi a un oggetto. Ecco l'esempio di `duck` con un metodo:

```js
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + duck.name + ".";}
};
duck.sayName();
```

L'esempio aggiunge il metodo `sayName`, che è una funzione che restituisce una frase con il nome dell'anatra (`duck`). Nota che il metodo ha avuto accesso alla proprietà `name` nell'istruzione return utilizzando `duck.name`. La prossima sfida mostrerà un altro modo per farlo.

# --instructions--

Dai all'oggetto `dog` un metodo chiamato `sayLegs`. Il metodo dovrebbe restituire la frase `This dog has 4 legs.`

# --hints--

`dog.sayLegs()` dovrebbe essere una funzione.

```js
assert(typeof dog.sayLegs === 'function');
```

`dog.sayLegs()` dovrebbe restituire la stringa data; nota che la punteggiatura e la spaziatura contano.

```js
assert(dog.sayLegs() === 'This dog has 4 legs.');
```

# --seed--

## --seed-contents--

```js
let dog = {
  name: "Spot",
  numLegs: 4,

};

dog.sayLegs();
```

# --solutions--

```js
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs () {
    return 'This dog has ' + this.numLegs + ' legs.';
  }
};

dog.sayLegs();
```
