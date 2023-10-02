---
id: 587d8254367417b2b2512c70
title: Creare e aggiungere ai set in ES6
challengeType: 1
forumTopicId: 301636
dashedName: create-and-add-to-sets-in-es6
---

# --description--

Ora che avete lavorato su ES5, state per eseguire qualcosa di simile in ES6. Questo sarà molto più facile. ES6 contiene una struttura di dati integrata `Set` quindi molte delle operazioni che hai scritto a mano sono ora incluse per te. Diamo un'occhiata:

Per creare un nuovo set vuoto:

```js
var set = new Set();
```

È possibile creare un set con un valore:

```js
var set = new Set(1);
```

È possibile creare un set con un array:

```js
var set = new Set([1, 2, 3]);
```

Una volta creato un set, puoi aggiungere i valori che desideri utilizzando il metodo `add`:

```js
var set = new Set([1, 2, 3]);
set.add([4, 5, 6]);
```

Come promemoria, un insieme è una struttura di dati che non può contenere valori duplicati:

```js
var set = new Set([1, 2, 3, 1, 2, 3]);
// set contains [1, 2, 3] only
```

# --instructions--

Per questo esercizio, restituisci un set con i seguenti valori: `1, 2, 3, 'Taco', 'Cat', 'Awesome'`

# --hints--

Il tuo `Set` deve contenere solo i valori `1, 2, 3, Taco, Cat, Awesome`.

```js
assert(
  (function () {
    var test = checkSet();
    return (
      test.size == 6 &&
      test.has(1) &&
      test.has(2) &&
      test.has(3) &&
      test.has('Taco') &&
      test.has('Cat') &&
      test.has('Awesome')
    );
  })()
);
```

# --seed--

## --seed-contents--

```js
function checkSet() {
  var set = new Set([1, 2, 3, 3, 2, 1, 2, 3, 1]);
  // Only change code below this line

  // Only change code above this line
  console.log(Array.from(set));
  return set;
}

checkSet();
```

# --solutions--

```js
function checkSet(){var set = new Set([1,2,3,'Taco','Cat','Awesome']);
return set;}
```
