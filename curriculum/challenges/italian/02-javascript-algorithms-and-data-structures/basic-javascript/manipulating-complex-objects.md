---
id: 56533eb9ac21ba0edf2244cb
title: Manipolare oggetti complessi
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9yNMfR'
forumTopicId: 18208
dashedName: manipulating-complex-objects
---

# --description--

A volte potresti voler memorizzare i dati in una <dfn>struttura di dati</dfn> flessibile. Un oggetto JavaScript è un modo per gestire dati flessibili. Gli oggetti consentono combinazioni arbitrarie di <dfn>stringhe</dfn>, <dfn>numeri</dfn>, <dfn>booleani</dfn>, <dfn>array</dfn>, <dfn>funzioni</dfn> e <dfn>oggetti</dfn>.

Ecco un esempio di struttura di dati complessa:

```js
const ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP"
    ],
    "gold": true
  }
];
```

Questo è un array che contiene un oggetto al suo interno. L'oggetto ha vari pezzi di <dfn>metadati</dfn> riguardanti un album. Ha anche un array annidato `formats`. Se volessi aggiungere più record di tipo album, potresti farlo aggiungendo dei record all'array di livello superiore. Gli oggetti contengono i dati nelle proprietà, che hanno un formato chiave-valore (key-value). Nell'esempio sopra, `"artist": "Daft Punk"` è una proprietà che ha una chiave `artist` e un valore `Daft Punk`.

**Nota:** Dovrai inserire una virgola dopo ogni oggetto nell'array, a meno che non sia l'ultimo.

# --instructions--

Aggiungi un nuovo album all'array `myMusic`. Aggiungi le stringhe `artist` e `title`, il numero `release_year` e un array di stringhe `formats`.

# --hints--

`myMusic` dovrebbe essere un array

```js
assert(Array.isArray(myMusic));
```

`myMusic` dovrebbe avere almeno due elementi

```js
assert(myMusic.length > 1);
```

Gli elementi dell'array `myMusic` dovrebbero essere oggetti

```js
myMusic.forEach(object => {assert.typeOf(object, 'object')})
```

Il tuo oggetto in `myMusic` dovrebbe avere almeno 4 proprietà

```js
myMusic.forEach(object => {assert(Object.keys(object).length > 3); });
```

Il tuo oggetto in `myMusic` dovrebbe contenere la proprietà `artist`, di tipo string

```js
myMusic.forEach(object => {
  assert.containsAllKeys(object, ['artist']);
  assert.typeOf(object.artist, 'string')
})
```

Il tuo oggetto in `myMusic` dovrebbe contenere la proprietà `title`, di tipo string

```js
myMusic.forEach(object => {
  assert.containsAllKeys(object, ['title']);
  assert.typeOf(object.title, 'string')
})
```

Il tuo oggetto in `myMusic` dovrebbe contenere la proprietà `release_year`, di tipo number

```js
myMusic.forEach(object => {
  assert.containsAllKeys(object, ['release_year']);
  assert.typeOf(object.release_year, 'number')
})
```

Il tuo oggetto in `myMusic` dovrebbe contenere una proprietà `formats`, di tipo array

```js
myMusic.forEach(object => {
  assert.containsAllKeys(object, ['formats']);
  assert.typeOf(object.formats, 'array')
})
```

`formats` dovrebbe essere un array di stringhe con almeno due elementi

```js
myMusic.forEach(object => {
  object.formats.forEach(format => {
    assert.typeOf(format, 'string')
  });
  assert.isAtLeast(object.formats.length, 2)
})
```

# --seed--

## --after-user-code--

```js
(function(x){ if (Array.isArray(x)) { return JSON.stringify(x); } return "myMusic is not an array"})(myMusic);
```

## --seed-contents--

```js
const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
];
```

# --solutions--

```js
const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CS",
      "8T",
      "LP" ],
    "gold": true
  },
  {
    "artist": "ABBA",
    "title": "Ring Ring",
    "release_year": 1973,
    "formats": [
      "CS",
      "8T",
      "LP",
    "CD",
  ]
  }
];
```
