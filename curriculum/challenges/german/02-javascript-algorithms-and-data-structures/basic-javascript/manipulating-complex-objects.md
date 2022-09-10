---
id: 56533eb9ac21ba0edf2244cb
title: Manipulation komplexer Objekte
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9yNMfR'
forumTopicId: 18208
dashedName: manipulating-complex-objects
---

# --description--

Manchmal möchte man Daten in einer flexiblen <dfn>Datenstruktur</dfn> speichern. Ein JavaScript-Objekt ist eine Möglichkeit, flexible Daten zu verarbeiten. Sie erlauben beliebige Kombinationen von <dfn>Strings</dfn>, <dfn>Zahlen</dfn>, <dfn>Booleans</dfn>, <dfn>Arrays</dfn>, <dfn>Funktionen</dfn> und <dfn>Objekten</dfn>.

Hier ist ein Beispiel für eine komplexe Datenstruktur:

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

Dies ist ein Array, in dem ein Objekt enthalten ist. Das Objekt enthält verschiedene <dfn>Metadaten</dfn> über ein Album. Es hat auch ein verschachteltes `formats`-Array. Wenn du weitere Albumdatensätze hinzufügen möchtest, kannst du dies tun, indem du dem Array der obersten Ebene Datensätze hinzufügst. Objekte enthalten Daten in einer Eigenschaft, die ein Schlüssel-Wert-Format hat. Im obigen Beispiel ist `"artist": "Daft Punk"` eine Eigenschaft, die einen Schlüssel `artist` und einen Wert `Daft Punk` hat.

**Hinweis:** Du musst nach jedem Objekt im Array ein Komma setzen, außer es ist das letzte Objekt im Array.

# --instructions--

Füge ein neues Album zum Array `myMusic` hinzu. Füge `artist` und `title` Strings, `release_year` Nummer und ein `formats` Array mit Strings hinzu.

# --hints--

`myMusic` sollte ein Array sein

```js
assert(Array.isArray(myMusic));
```

`myMusic` sollte mindestens zwei Elemente enthalten

```js
assert(myMusic.length > 1);
```

Die Elemente im Array `myMusic` sollten Objekte sein

```js
myMusic.forEach(object => {assert.typeOf(object, 'object')})
```

Dein Objekt in `myMusic` sollte mindestens 4 Eigenschaften haben

```js
myMusic.forEach(object => {assert(Object.keys(object).length > 3); });
```

Dein Objekt in `myMusic` sollte die Eigenschaft `artist` enthalten, die ein String ist

```js
myMusic.forEach(object => {
  assert.containsAllKeys(object, ['artist']);
  assert.typeOf(object.artist, 'string')
})
```

Dein Objekt in `myMusic` sollte die Eigenschaft `title` enthalten, die ein String ist

```js
myMusic.forEach(object => {
  assert.containsAllKeys(object, ['title']);
  assert.typeOf(object.title, 'string')
})
```

Dein Objekt in `myMusic` sollte die Eigenschaft `release_year` enthalten, die eine Zahl ist

```js
myMusic.forEach(object => {
  assert.containsAllKeys(object, ['release_year']);
  assert.typeOf(object.release_year, 'number')
})
```

Dein Objekt in `myMusic` sollte eine Eigenschaft `formats` enthalten, die ein Array ist

```js
myMusic.forEach(object => {
  assert.containsAllKeys(object, ['formats']);
  assert.typeOf(object.formats, 'array')
})
```

`formats` sollte ein Array von Strings mit mindestens zwei Elementen sein

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
