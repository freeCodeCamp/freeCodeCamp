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
var ourMusic = [
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

Esto es una arreglo que contiene un objeto en su interior. El objeto tiene varias piezas de <dfn>metadatos</dfn> sobre un álbum. También tiene un arreglo anidado de `formats`. Si desea añadir más registros de álbumes, puede hacerlo añadiendo registros a la parte superior del arreglo. Los objetos almacenan datos en una propiedad, con formato clave-valor. En el ejemplo anterior, `"artist": "Daft Punk"` es una propiedad que tiene como clave `artist` y su valor es `Daft Punk`. [JavaScript Object Notation](http://www.json.org/) o `JSON` es un formato de intercambio de datos relacionado utilizado para almacenar información.

```json
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
```

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

`myMusic[1]` debe ser un objeto

```js
assert(typeof myMusic[1] === 'object');
```

`myMusic[1]` debe tener al menos 4 propiedades

```js
assert(Object.keys(myMusic[1]).length > 3);
```

`myMusic[1]` debe contener una propiedad `artist` que es una cadena

```js
assert(
  myMusic[1].hasOwnProperty('artist') && typeof myMusic[1].artist === 'string'
);
```

`myMusic[1]` debe contener una propiedad `title` que es una cadena

```js
assert(
  myMusic[1].hasOwnProperty('title') && typeof myMusic[1].title === 'string'
);
```

`myMusic[1]` debe contener una propiedad `release_year` que es un número

```js
assert(
  myMusic[1].hasOwnProperty('release_year') &&
    typeof myMusic[1].release_year === 'number'
);
```

`myMusic[1]` debe contener una propiedad `formats` que es un arreglo

```js
assert(
  myMusic[1].hasOwnProperty('formats') && Array.isArray(myMusic[1].formats)
);
```

`formats` debe ser un arreglo de cadenas con al menos dos elementos

```js
assert(
  myMusic[1].formats.every(function (item) {
    return typeof item === 'string';
  }) && myMusic[1].formats.length > 1
);
```

# --seed--

## --after-user-code--

```js
(function(x){ if (Array.isArray(x)) { return JSON.stringify(x); } return "myMusic is not an array"})(myMusic);
```

## --seed-contents--

```js
var myMusic = [
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
  // Add a record here
];
```

# --solutions--

```js
var myMusic = [
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
