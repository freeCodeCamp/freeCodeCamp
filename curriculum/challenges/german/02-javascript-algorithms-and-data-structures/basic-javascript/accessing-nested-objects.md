---
id: 56533eb9ac21ba0edf2244cc
title: Zugriff auf verschachtelte Objekte
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRnRnfa'
forumTopicId: 16161
dashedName: accessing-nested-objects
---

# --description--

Auf die Untereigenschaften von Objekten kann durch Aneinanderreihen der Punkt- oder Klammerschreibweise zugegriffen werden.

Hier ist ein verschachteltes Objekt:

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

`ourStorage.cabinet["top drawer"].folder2` wäre der String `secrets` und `ourStorage.desk.drawer` wäre der String `stapler`.

# --instructions--

Greife auf das Objekt `myStorage` zu und weise den Inhalt der Eigenschaft `glove box` der Variablen `gloveBoxContents` zu. Verwende nach Möglichkeit die Punktschreibweise für alle Eigenschaften, ansonsten die Klammerschreibweise.

# --hints--

`gloveBoxContents` sollte gleich dem String `maps` sein.

```js
assert(gloveBoxContents === 'maps');
```

Dein Code sollte die Punkt- und Klammerschreibweise verwenden, um auf `myStorage` zuzugreifen.

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
