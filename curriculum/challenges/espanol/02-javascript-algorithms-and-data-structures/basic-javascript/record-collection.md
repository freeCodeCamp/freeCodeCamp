---
id: 56533eb9ac21ba0edf2244cf
title: Colección de discos
challengeType: 1
forumTopicId: 18261
dashedName: record-collection
---

# --description--

Se te da un objeto JSON que representa una parte de tu colección de álbumes musicales. Cada álbum tiene un número de id único como clave y varias otras propiedades. No todos los álbumes tienen una información completa.

Empiezas con una función `updateRecords` el cual toma un objeto `collection`, un `id`, una `prop` (como `artist` o `tracks`), y un `value`. Completa la función usando las reglas siguientes para modificar el objeto pasado a la función.

-   Tu función siempre debe devolver el objeto completo.
-   Si `prop` no es `tracks` y `value` no es una cadena vacía, actualiza o establece la propiedad `prop` del album a `value`.
-   Si `prop` es `tracks` pero el álbum no tiene una propiedad `tracks`, crea un arreglo vacío y agrégale `value` a él.
-   Si `prop` es `tracks` y `value` no es una cadena vacía, agrega `value` al final del arreglo de `tracks` existentes del álbum.
-   Si `value` es una cadena vacía, elimina esa propiedad `prop` del álbum.

**Nota:** Una copia del objeto `collection` es usada para las pruebas.

# --hints--

Después de `updateRecords(collection, 5439, "artist", "ABBA")`, `artist` debe ser la cadena `ABBA`

```js
assert(
  updateRecords(_recordCollection, 5439, 'artist', 'ABBA')[5439]['artist'] ===
    'ABBA'
);
```

Después de `updateRecords(collection, 5439, "tracks", "Take a Chance on Me")`, `tracks` debe tener la cadena `Take a Chance on Me` como último elemento.

```js
assert(
  updateRecords(_recordCollection, 5439, 'tracks', 'Take a Chance on Me')[5439][
    'tracks'
  ].pop() === 'Take a Chance on Me'
);
```

Después de `updateRecords(collection, 2548, "artist", "")`, `artist` no debe establecerse

```js
updateRecords(_recordCollection, 2548, 'artist', '');
assert(!_recordCollection[2548].hasOwnProperty('artist'));
```

Después de `updateRecords(collection, 1245, "tracks", "Addicted to Love")`, `tracks` debe tener la cadena `Addicted to Love` como último elemento.

```js
assert(
  updateRecords(_recordCollection, 1245, 'tracks', 'Addicted to Love')[1245][
    'tracks'
  ].pop() === 'Addicted to Love'
);
```

Después de `updateRecords(collection, 2468, "tracks", "Free")`, `tracks` debe tener la cadena `1999` como primer elemento.

```js
assert(
  updateRecords(_recordCollection, 2468, 'tracks', 'Free')[2468][
    'tracks'
  ][0] === '1999'
);
```

Después de `updateRecords(collection, 2548, "tracks", "")`, `tracks` no debe establecerse

```js
updateRecords(_recordCollection, 2548, 'tracks', '');
assert(!_recordCollection[2548].hasOwnProperty('tracks'));
```

Después de `updateRecords(collection, 1245, "albumTitle", "Riptide")`, `albumTitle` debe ser la cadena `Riptide`

```js
assert(
  updateRecords(_recordCollection, 1245, 'albumTitle', 'Riptide')[1245][
    'albumTitle'
  ] === 'Riptide'
);
```

# --seed--

## --before-user-code--

```js
const _recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};
```

## --seed-contents--

```js
// Setup
var collection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(object, id, prop, value) {
  return object;
}

updateRecords(collection, 5439, 'artist', 'ABBA');
```

# --solutions--

```js
var collection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(object, id, prop, value) {
  if (value === '') delete object[id][prop];
  else if (prop === 'tracks') {
    object[id][prop] = object[id][prop] || [];
    object[id][prop].push(value);
  } else {
    object[id][prop] = value;
  }

  return object;
}
```
