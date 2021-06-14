---
id: 587d7b8a367417b2b2512b4f
title: Scrivere dichiarazioni letterali di oggetti concise utilizzando scorciatoie sulle proprietà
challengeType: 1
forumTopicId: 301225
dashedName: write-concise-object-literal-declarations-using-object-property-shorthand
---

# --description--

ES6 aggiunge un bel supporto per definire facilmente gli oggetti letterali.

Considera il seguente codice:

```js
const getMousePosition = (x, y) => ({
  x: x,
  y: y
});
```

`getMousePosition` è una semplice funzione che restituisce un oggetto contenente due proprietà. ES6 fornisce lo zucchero sintattico per eliminare la ridondanza di dover scrivere `x: x`. Puoi semplicemente scrivere `x` una volta, e verrà convertito in `x: x` (o qualcosa di equivalente) dietro le quinte. Ecco la stessa funzione di cui sopra, riscritta utilizzando questa nuova sintassi:

```js
const getMousePosition = (x, y) => ({ x, y });
```

# --instructions--

Usa la scorciatoia sulle proprietà degli oggetti letterali per creare e restituire un oggetto con proprietà `name`, `age` e `gender`.

# --hints--

`createPerson("Zodiac Hasbro", 56, "male")` dovrebbe restituire `{name: "Zodiac Hasbro", age: 56, gender: "male"}`.

```js
assert.deepEqual(
  { name: 'Zodiac Hasbro', age: 56, gender: 'male' },
  createPerson('Zodiac Hasbro', 56, 'male')
);
```

Il tuo codice non dovrebbe usare la coppia `key:value`.

```js
(getUserInput) => assert(!getUserInput('index').match(/:/g));
```

# --seed--

## --seed-contents--

```js
const createPerson = (name, age, gender) => {
  // Only change code below this line
  return {
    name: name,
    age: age,
    gender: gender
  };
  // Only change code above this line
};
```

# --solutions--

```js
const createPerson = (name, age, gender) => {
  return {
    name,
    age,
    gender
  };
};
```
