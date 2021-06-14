---
id: 587d7dac367417b2b2512b73
title: Creare un semplice oggetto JavaScript
challengeType: 1
forumTopicId: 301317
dashedName: create-a-basic-javascript-object
---

# --description--

Pensa alle cose che la gente vede ogni giorno, come automobili, negozi e uccelli. Queste sono tutti <dfn>oggetti</dfn> (objects): cose tangibili che le persone possono osservare e con cui possono interagire.

Quali sono alcune caratteristiche di questi oggetti? Un'automobile ha delle ruote. I negozi vendono oggetti. Gli uccelli hanno le ali.

Queste caratteristiche, o <dfn>proprietà</dfn>, definiscono ciò che costituisce un oggetto. Nota che oggetti simili condividono le stesse proprietà, ma possono avere valori diversi per quelle proprietà. Per esempio, tutte le automobili hanno ruote, ma non tutte le automobili hanno lo stesso numero di ruote.

Gli oggetti in JavaScript sono utilizzati per modellare oggetti del mondo reale, dando loro proprietà e comportamenti proprio come le loro controparti del mondo reale. Ecco un esempio che utilizza questi concetti per creare un oggetto `duck` (anatra):

```js
let duck = {
  name: "Aflac",
  numLegs: 2
};
```

Questo oggetto `duck` ha due coppie proprietà/valore: un `name` di `Aflac` e un `numLegs` (numero di zampe) di 2.

# --instructions--

Crea un oggetto `dog` con delle proprietà `name` e `numLegs`, e impostale rispettivamente su una stringa e un numero.

# --hints--

`dog` dovrebbe essere un oggetto.

```js
assert(typeof dog === 'object');
```

`dog` dovrebbe avere una proprietà di `name` impostata su una stringa.

```js
assert(typeof dog.name === 'string');
```

`dog` dovrebbe avere una proprietà `numLegs` impostata su un numero.

```js
assert(typeof dog.numLegs === 'number');
```

# --seed--

## --seed-contents--

```js
let dog = {

};
```

# --solutions--

```js
let dog = {
  name: '',
  numLegs: 4
};
```
