---
id: 5cfa550e84205a357704ccb6
title: Usare l'assegnazione destrutturante per estrarre valori dagli oggetti
challengeType: 1
forumTopicId: 301216
dashedName: use-destructuring-assignment-to-extract-values-from-objects
---

# --description--

<dfn>L'assegnazione destrutturante</dfn> è una sintassi speciale introdotta in ES6, per assegnare efficacemente dei valori presi da un oggetto.

Considerare il seguente codice ES5:

```js
const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;
```

`name` avrebbe come valore la stringa `John Doe`, e `age` avrebbe il numero `34`.

Ecco una dichiarazione di assegnazione equivalente che utilizza la sintassi di destrutturazione ES6:

```js
const { name, age } = user;
```

Ancora una volta, `name` avrà come valore la stringa `John Doe`, e `age` il numero `34`.

Qui, le variabili `name` e `age` verranno create e assegnate ai rispettivi valori nell'oggetto `user`. Puoi constatare quanto questo sia più pulito.

Potrai estrarre dall'oggetto tutti i valori che desideri.

# --instructions--

Sostituisci le due assegnazioni con un'assegnazione destrutturante equivalente. Dovrebbe ancora assegnare alle variabili `today` e `tomorrow` i valori di `today` e `tomorrow` dell'oggetto `HIGH_TEMPERATURES`.

# --hints--

Dovresti rimuovere la sintassi di assegnazione ES5.

```js
assert(
  !code.match(/today\s*=\s*HIGH_TEMPERATURES\.(today|tomorrow)/g)
);
```

Dovresti usare la destrutturazione per creare la variabile `today`.

```js
assert(
  code.match(/(var|let|const)\s*{\s*(today[^}]*|[^,]*,\s*today)\s*}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g)
);
```

Dovresti usare la destrutturazione per creare la variabile `tomorrow`.

```js
assert(
  code.match(/(var|let|const)\s*{\s*(tomorrow[^}]*|[^,]*,\s*tomorrow)\s*}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g)
);
```

`today` dovrebbe essere uguale a `77` e `tomorrow` dovrebbe essere uguale a `80`.

```js
assert(today === 77 && tomorrow === 80);
```

# --seed--

## --seed-contents--

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line

const today = HIGH_TEMPERATURES.today;
const tomorrow = HIGH_TEMPERATURES.tomorrow;

// Only change code above this line
```

# --solutions--

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const { today, tomorrow } = HIGH_TEMPERATURES;
```
