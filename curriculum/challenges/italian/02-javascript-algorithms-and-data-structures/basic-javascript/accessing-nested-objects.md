---
id: 56533eb9ac21ba0edf2244cc
title: Accedere ad oggetti nidificati
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRnRnfa'
forumTopicId: 16161
dashedName: accessing-nested-objects
---

# --description--

Le sotto-proprietà degli oggetti possono essere accessibili concatenando insieme la notazione a punto o a parentesi.

Ecco un oggetto nidificato:

```js
const ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};

ourStorage.cabinet["top drawer"].folder2;
ourStorage.desk.drawer;
```

`ourStorage.cabinet["top drawer"].folder2` sarebbe la stringa `secrets`e `ourStorage.desk.drawer` sarebbe la stringa `stapler`.

# --instructions--

Accedi all'oggetto `myStorage` e assegna il contenuto della proprietà `glove box` alla variabile `gloveBoxContents`. Utilizza la notazione a punto per tutte le proprietà, se possibile, altrimenti utilizzare la notazione a parentesi.

# --hints--

`gloveBoxContents` dovrebbe essere uguale alla stringa `maps`.

```js
assert(gloveBoxContents === 'maps');
```

Il tuo codice dovrebbe utilizzare la notazione a punti e parentesi per accedere a `myStorage`.

```js
assert(/=\s*myStorage\.car\.inside\[\s*("|')glove box\1\s*\]/g.test(code));
```

# --seed--

## --after-user-code--

```js
(function(x) { 
  if(typeof x != 'undefined') { 
    return "gloveBoxContents = " + x;
  }
  return "gloveBoxContents is undefined";
})(gloveBoxContents);
```

## --seed-contents--

```js
const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = undefined;
```

# --solutions--

```js
const myStorage = {
  "car":{
    "inside":{
      "glove box":"maps",
      "passenger seat":"crumbs"
    },
    "outside":{
      "trunk":"jack"
    }
  }
};
const gloveBoxContents = myStorage.car.inside["glove box"];
```
