---
id: 56bbb991ad1ed5201cd392d1
title: Aggiornare le proprietà di un oggetto
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9yEJT4'
forumTopicId: 18336
dashedName: updating-object-properties
---

# --description--

Dopo aver creato un oggetto JavaScript, è possibile aggiornare le sue proprietà in qualsiasi momento proprio come quando si aggiorna qualsiasi altra variabile. Per aggiornare le proprietà è possibile utilizzare la notazione a punti o a parentesi.

Ad esempio, diamo un'occhiata a `ourDog`:

```js
const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
```

Dal momento che è un cane particolarmente felice, cambiamo il suo nome nella stringa `Happy Camper`. Ecco come aggiorniamo la proprietà del nome del suo oggetto: `ourDog.name = "Happy Camper";` o `ourDog["name"] = "Happy Camper";` Adesso quando valutiamo `ourDog.name`, invece di ottenere `Camper`, otterremo il suo nuovo nome, `Happy Camper`.

# --instructions--

Aggiorna la proprietà nome dell'oggetto `myDog`. Cambia il suo nome da `Coder` a `Happy Coder`. È possibile utilizzare la notazione a punti o a parentesi per aggiornare.

# --hints--

Dovresti aggiornare la proprietà di `myDog` denominata `name`per assegnarle la stringa `Happy Coder`.

```js
assert(/happy coder/gi.test(myDog.name));
```

Non dovresti modificare la definizione di `myDog`.

```js
assert(/"name": "Coder"/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(z){return z;})(myDog);
```

## --seed-contents--

```js
// Setup
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line

```

# --solutions--

```js
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.name = "Happy Coder";
```
