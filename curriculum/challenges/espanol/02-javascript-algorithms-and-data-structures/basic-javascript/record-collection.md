---
id: 56533eb9ac21ba0edf2244cf
title: Colección de discos
challengeType: 1
forumTopicId: 18261
dashedName: record-collection
---

# --description--

Está creando una función que ayuda en el mantenimiento de una colección de álbumes musicales. La colección se organiza como un objeto que contiene múltiples álbumes que también son objetos. Cada álbum se representa en la colección con un `id` único como nombre de la propiedad. Dentro de cada objeto álbum, hay varias propiedades que describen información sobre el álbum. No todos los álbumes tienen información completa.

La función `updateRecords` toma 4 argumentos representados por los siguientes parámetros de función:

-   `records` - un objeto que contiene varios álbumes individuales
-   `id` - un número que representa un álbum específico en el objeto `records`
-   `prop` - una cadena que representa el nombre de la propiedad del álbum a actualizar
-   `value` - una cadena que contiene la información utilizada para actualizar la propiedad del álbum

Completa la función utilizando las reglas siguientes para modificar el objeto pasado a la función.

-   Tu función debe devolver siempre el objeto `records` completo.
-   Si `value` es una cadena vacía, elimina la propiedad `prop` dada del álbum.
-   Si `prop` no es `tracks` y `value` no es una cadena vacía, asigna el `value` a la `prop` de ese álbum.
-   Si `prop` es `tracks` y `value` no es una cadena vacía, agrega `value` al final del array de `tracks` existentes del álbum. Primero, si el álbum no tiene una propiedad `tracks`, asigne un array vacío. Luego añade el `valor` como el último elemento en el array `de pistas` del álbum.

**Nota:** Para las pruebas se utiliza una copia del objeto `recordCollection`. No debes modificar directamente el objeto `recordCollection`.

# --hints--

Después de `updateRecords(recordCollection, 5439, "artist", "ABBA")`, `artist` debe ser la cadena `ABBA`

```js
assert(
  updateRecords(_recordCollection, 5439, 'artist', 'ABBA')[5439]['artist'] ===
    'ABBA'
);
```

Después de `updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")`, `tracks` debe tener la cadena `Take a Chance on Me` como último y único elemento.

```js
assert(
  updateRecords(_recordCollection, 5439, 'tracks', 'Take a Chance on Me') &&
  _recordCollection[5439]['tracks'].length === 1 &&
  _recordCollection[5439]['tracks'].pop() === 'Take a Chance on Me'
);
```

Después de `updateRecords(recordCollection, 2548, "artist", "")`, `artist` no debe establecerse

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

Después de `updateRecords(recordCollection, 2468, "tracks", "Free")`, `tracks` debe tener la cadena `1999` como primer elemento.

```js
assert(
  updateRecords(_recordCollection, 2468, 'tracks', 'Free')[2468][
    'tracks'
  ][0] === '1999'
);
```

Después de `updateRecords(recordCollection, 2548, "tracks", "")`, `tracks` no debe establecerse

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
