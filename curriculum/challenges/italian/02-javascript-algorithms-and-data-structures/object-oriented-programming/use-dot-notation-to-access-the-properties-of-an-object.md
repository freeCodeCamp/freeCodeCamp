---
id: 587d7dac367417b2b2512b74
title: Usare la notazione a punti per accedere alle proprietà di un oggetto
challengeType: 1
forumTopicId: 301333
dashedName: use-dot-notation-to-access-the-properties-of-an-object
---

# --description--

L'ultima sfida ha creato un oggetto con varie proprietà. Ora vedrai come accedere ai valori di queste proprietà. Ecco un esempio:

```js
let duck = {
  name: "Aflac",
  numLegs: 2
};
console.log(duck.name);
```

La notazione a punti è usata sul nome dell'oggetto, `duck`, seguita dal nome della proprietà, `name`, per accedere al valore `Aflac`.

# --instructions--

Mostra entrambe le proprietà dell'oggetto `dog` sulla tua console.

# --hints--

Il tuo codice dovrebbe utilizzare `console.log` per mostrare il valore della proprietà `name` dell'oggetto `dog`.

```js
assert(/console.log\(.*dog\.name.*\)/g.test(code));
```

Il tuo codice dovrebbe utilizzare `console.log` per mostrare il valore della proprietà `numLegs` dell'oggetto `dog`.

```js
assert(/console.log\(.*dog\.numLegs.*\)/g.test(code));
```

# --seed--

## --seed-contents--

```js
let dog = {
  name: "Spot",
  numLegs: 4
};
// Only change code below this line
```

# --solutions--

```js
let dog = {
  name: "Spot",
  numLegs: 4
};
console.log(dog.name);
console.log(dog.numLegs);
```
