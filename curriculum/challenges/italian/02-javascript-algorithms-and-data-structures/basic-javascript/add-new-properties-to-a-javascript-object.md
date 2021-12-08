---
id: 56bbb991ad1ed5201cd392d2
title: Aggiungere nuove proprietà a un oggetto JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cQe38UD'
forumTopicId: 301169
dashedName: add-new-properties-to-a-javascript-object
---

# --description--

Puoi aggiungere nuove proprietà agli oggetti JavaScript esistenti proprio come faresti se volessi modificarli.

Ecco come aggiungere una proprietà `bark` a `ourDog`:

```js
ourDog.bark = "bow-wow";
```

oppure

```js
ourDog["bark"] = "bow-wow";
```

Ora quando valuteremo `ourDog.bark`, otterremo il suo abbaiare, `bow-wow`.

Esempio:

```js
const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";
```

# --instructions--

Aggiungi una proprietà `bark` a `myDog` e impostala sul suono di un cane, come "woof". È possibile utilizzare sia la notazione a punti che quella a parentesi.

# --hints--

Dovresti aggiungere la proprietà `bark` a `myDog`.

```js
assert(myDog.bark !== undefined);
```

Non dovresti aggiungere `bark` all'inizializzazione di `myDog`.

```js
assert(!/bark[^\n]:/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(z){return z;})(myDog);
```

## --seed-contents--

```js
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};


```

# --solutions--

```js
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.bark = "Woof Woof";
```
