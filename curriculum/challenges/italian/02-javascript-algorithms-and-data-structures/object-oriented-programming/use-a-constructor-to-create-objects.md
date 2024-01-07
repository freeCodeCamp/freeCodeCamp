---
id: 587d7dad367417b2b2512b78
title: Usare un costruttore per creare oggetti
challengeType: 1
forumTopicId: 18233
dashedName: use-a-constructor-to-create-objects
---

# --description--

Ecco il costruttore di `Bird` della sfida precedente:

```js
function Bird() {
  this.name = "Albert";
  this.color  = "blue";
  this.numLegs = 2;
}

let blueBird = new Bird();
```

**NOTA:** `this` all'interno del costruttore si riferisce sempre all'oggetto che viene creato.

Nota che l'operatore `new` viene utilizzato per chiamare un costruttore. Questo dice a JavaScript di creare una nuova istanza di `Bird` chiamata `blueBird`. Senza l'operatore `new`, `this` all'interno del costruttore non punterebbe all'oggetto appena creato, dando risultati inattesi. Ora `blueBird` ha tutte le proprietà definite all'interno del costruttore `Bird`:

```js
blueBird.name;
blueBird.color;
blueBird.numLegs;
```

Proprio come qualsiasi altro oggetto, le sue proprietà sono accessibili e possono essere modificate:

```js
blueBird.name = 'Elvira';
blueBird.name;
```

# --instructions--

Usa il costruttore `Dog` dell'ultima lezione per creare una nuova istanza di `Dog`, assegnandola a una variabile `hound`.

# --hints--

`hound` dovrebbe essere creato usando il costruttore `Dog`.

```js
assert(hound instanceof Dog);
```

Il tuo codice dovrebbe utilizzare l'operatore `new` per creare un'istanza di `Dog`.

```js
assert(code.match(/new/g));
```

# --seed--

## --seed-contents--

```js
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Only change code below this line
```

# --solutions--

```js
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
const hound = new Dog();
```
