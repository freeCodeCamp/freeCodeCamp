---
id: 56533eb9ac21ba0edf2244cf
title: Colección de discos
challengeType: 1
forumTopicId: 18261
dashedName: record-collection
---

# --description--

Se te da un objeto literal que representa una parte de tu colección de álbumes musicales. Cada álbum tiene un número de id único como clave y varias otras propiedades. No todos los álbumes tienen una información completa.

Empiezas con una función `updateRecords` la cual toma un objeto literal, `records`, que contiene el álbum musical de la colección, un `id`, `prop` (como `artist` o `tracks`), y `value`. Completa la función usando las reglas siguientes para modificar el objeto pasado a la función.

-   Tu función siempre debe devolver el objeto de colección de registros completo.
-   Si `prop` no es `tracks` y `value` no es una cadena vacía, actualiza o establece la propiedad `prop` del album a `value`.
-   Si `prop` es `tracks` pero el álbum no tiene una propiedad `tracks`, crea un arreglo vacío y agrégale `value` a él.
-   Si `prop` es `tracks` y `value` no es una cadena vacía, agrega `value` al final del arreglo de `tracks` existentes del álbum.
-   Si `value` es una cadena vacía, elimina esa propiedad `prop` del álbum.

**Nota:** Se usa una copia del objeto `recordCollection` para las pruebas.

# --hints--

Después `updateRecords(recordCollection, 5439, "artist", "ABBA")`, `artist` debe ser la cadena `ABBA`

```js
assert(
  updateRecords(_recordCollection, 5439, 'artist', 'ABBA')[5439]['artist'] ===
    'ABBA'
);
```

Después `updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")`, `tracks` debe de tener la cadena `Take a Chance on Me` como el último y único elemento.

```js
assert(
  updateRecords(_recordCollection, 5439, 'tracks', 'Take a Chance on Me') &&
  _recordCollection[5439]['tracks'].length === 1 &&
  _recordCollection[5439]['tracks'].pop() === 'Take a Chance on Me'
);
```

Después de `updateRecords(recordCollection, 2548, "artist", "")`, `artist` no se debe establecido

```js
updateRecords(_recordCollection, 2548, 'artist', '');
assert(!_recordCollection[2548].hasOwnProperty('artist'));
```

Después de `updateRecords(recordCollection, 1245, "tracks", "Addicted to Love")`, `tracks` debe tener la cadena `Addicted to Love` como último elemento.

```js
assert(
  updateRecords(_recordCollection, 1245, 'tracks', 'Addicted to Love')[1245][
    'tracks'
  ].pop() === 'Addicted to Love'
);
```

Después `updateRecords(recordCollection, 2468, "tracks", "Free")`, `tracks` debe tener la cadena `1999` como el primer elemento.

```js
assert(
  updateRecords(_recordCollection, 2468, 'tracks', 'Free')[2468][
    'tracks'
  ][0] === '1999'
);
```

Después `updateRecords(recordCollection, 2548, "tracks", "")`, `tracks` no se debe establecido

```js
updateRecords(_recordCollection, 2548, 'tracks', '');
assert(!_recordCollection[2548].hasOwnProperty('tracks'));
```

Después de `updateRecords(recordCollection, 1245, "albumTitle", "Riptide")`, `albumTitle` debe ser la cadena `Riptide`

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
const recordCollection = {
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
function updateRecords(records, id, prop, value) {
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');
```

# --solutions--

```js
const recordCollection = {
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
function updateRecords(records, id, prop, value) {
  if (value === '') delete records[id][prop];
  else if (prop === 'tracks') {
    records[id][prop] = records[id][prop] || [];
    records[id][prop].push(value);
  } else {
    records[id][prop] = value;
  }

  return records;
}
```
