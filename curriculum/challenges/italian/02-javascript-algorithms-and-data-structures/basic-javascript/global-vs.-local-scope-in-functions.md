---
id: 56533eb9ac21ba0edf2244c0
title: Ambito globale e ambito locale nelle funzioni
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2QwKH2'
forumTopicId: 18194
dashedName: global-vs--local-scope-in-functions
---

# --description--

È possibile avere sia variabili <dfn>locali</dfn> che <dfn>globali</dfn> con lo stesso nome. Quando fai questo, la variabile locale ha la precedenza sulla variabile globale.

In questo esempio:

```js
const someVar = "Hat";

function myFun() {
  const someVar = "Head";
  return someVar;
}
```

La funzione `myFun` restituirà la stringa `Head` perché è presente la versione locale della variabile.

# --instructions--

Aggiungi una variabile locale alla funzione `myOutfit` per sovrascrivere il valore di `outerWear` con la stringa `sweater`.

# --hints--

Non dovresti cambiare il valore della variabile globale `outerWear`.

```js
assert(outerWear === 'T-Shirt');
```

`myOutfit` dovrebbe restituire la stringa `sweater`.

```js
assert(myOutfit() === 'sweater');
```

Non dovresti cambiare l'istruzione return.

```js
assert(/return outerWear/.test(code));
```

# --seed--

## --seed-contents--

```js
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line

  // Only change code above this line
  return outerWear;
}

myOutfit();
```

# --solutions--

```js
const outerWear = "T-Shirt";
function myOutfit() {
  const outerWear = "sweater";
  return outerWear;
}
```
