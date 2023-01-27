---
id: 56533eb9ac21ba0edf2244cb
title: Manipulando objectos complejos
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9yNMfR'
forumTopicId: 18208
dashedName: manipulating-complex-objects
---

# --description--

A veces, es posible que desees almacenar datos en una <dfn>estructura de datos</dfn> flexible. Un objeto de JavaScript es una forma de manejar datos flexibles. Permiten combinaciones arbitrarias de <dfn>cadenas</dfn>, <dfn>números</dfn>, <dfn>booleanos</dfn>, <dfn>arreglos</dfn>, <dfn>funciones</dfn>, y <dfn>objetos</dfn>.

Este es un ejemplo de una estructura de datos compleja:

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

Esto es una arreglo que contiene un objeto en su interior. El objeto tiene varias piezas de <dfn>metadatos</dfn> sobre un álbum. También tiene un arreglo anidado de `formats`. Si desea añadir más registros de álbumes, puede hacerlo añadiendo registros a la parte superior del arreglo. Los objetos almacenan datos en una propiedad, con formato clave-valor. En el ejemplo anterior, `"artist": "Daft Punk"` es una propiedad que tiene como clave `artist` y su valor es `Daft Punk`.

**Nota:** Deberás colocar una coma después de cada objeto en el arreglo, a menos que sea el último objeto.

# --instructions--

Añade un nuevo álbum al arreglo `myMusic`. Añade las cadenas `artist` y `title`, el número `release_year`, y un arreglo de cadenas `formats`.

# --hints--

`myMusic` debe ser un arreglo

```js
assert(Array.isArray(myMusic));
```

`myMusic` debe tener al menos dos elementos

```js
assert(myMusic.length > 1);
```

Los elementos en el arreglo `myMusic` deben ser objetos

```js
myMusic.forEach(object => {assert.typeOf(object, 'object')})
```

Tu objeto en `myMusic` debe tener al menos 4 propiedades

```js
myMusic.forEach(object => {assert(Object.keys(object).length > 3); });
```

Tu objeto en `myMusic` debe contener la propiedad `artist` que es una cadena

```js
myMusic.forEach(object => {
  assert.containsAllKeys(object, ['artist']);
  assert.typeOf(object.artist, 'string')
})
```

Tu objeto en `myMusic` debe contener la propiedad `title` que es una cadena

```js
myMusic.forEach(object => {
  assert.containsAllKeys(object, ['title']);
  assert.typeOf(object.title, 'string')
})
```

Tu objeto en `myMusic` debe contener la propiedad `release_year` que es un número

```js
myMusic.forEach(object => {
  assert.containsAllKeys(object, ['release_year']);
  assert.typeOf(object.release_year, 'number')
})
```

Tu objeto en `myMusic` debe contener una propiedad de `formats` que es un arreglo

```js
myMusic.forEach(object => {
  assert.containsAllKeys(object, ['formats']);
  assert.typeOf(object.formats, 'array')
})
```

`formats` debe ser un arreglo de cadenas con al menos dos elementos

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
