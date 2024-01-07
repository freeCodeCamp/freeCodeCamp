---
id: 587d7dae367417b2b2512b7c
title: Usare le proprietà di Prototype per ridurre il codice duplicato
challengeType: 1
forumTopicId: 301336
dashedName: use-prototype-properties-to-reduce-duplicate-code
---

# --description--

Poiché `numLegs` avrà probabilmente lo stesso valore per tutte le istanze di `Bird`, hai essenzialmente una variabile duplicata `numLegs` all'interno di ogni istanza di `Bird`.

Può non essere un problema se ci sono solo due istanze, ma immagina se ce ne fossero milioni! Sarebbe un sacco di variabili duplicate.

Un modo migliore è quello di utilizzare il `prototype` di `Bird`. Le proprietà del `prototype` sono condivise tra TUTTE le istanze di `Bird`. Ecco come aggiungere `numLegs` al `Bird prototype`:

```js
Bird.prototype.numLegs = 2;
```

Ora tutte le istanze di `Bird` hanno la proprietà `numLegs`.

```js
console.log(duck.numLegs);
console.log(canary.numLegs);
```

Dal momento che tutte le istanze hanno automaticamente le proprietà del `prototype`, pensa a un `prototype` come una "ricetta" per creare oggetti. Nota che il `prototype` per `duck` e per `canary` fa parte del costruttore `Bird` come `Bird.prototype`.

# --instructions--

Aggiungi una proprietà `numLegs` al `prototype` di `Dog`

# --hints--

`beagle` dovrebbe avere una proprietà `numLegs`.

```js
assert(beagle.numLegs !== undefined);
```

`beagle.numLegs` dovrebbe essere un numero.

```js
assert(typeof beagle.numLegs === 'number');
```

`numLegs` dovrebbe essere una proprietà del `prototype`, non una proprietà propria.

```js
assert(beagle.hasOwnProperty('numLegs') === false);
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}



// Only change code above this line
let beagle = new Dog("Snoopy");
```

# --solutions--

```js
function Dog (name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;
let beagle = new Dog("Snoopy");
```
