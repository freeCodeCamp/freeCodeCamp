---
id: 56533eb9ac21ba0edf2244cf
title: Collezione di dischi
challengeType: 1
forumTopicId: 18261
dashedName: record-collection
---

# --description--

Ti viene dato un oggetto letterale che rappresenta una parte della tua collezione di album musicali. Ogni album ha un id numerico unico come chiave, e diverse altre proprietà. Non tutti gli album hanno informazioni complete.

Partirai con una funzione `updateRecords` che prende un oggetto letterale, `records`, contenente la collezione di album musicali, un `id`, una proprietà `prop` (come `artist` o `tracks`), e un valore `value`. Completa la funzione usando le regole sottostanti per modificare l'oggetto passato alla funzione.

-   La tua funzione deve sempre restituire l'intero oggetto della raccolta di dischi.
-   Se `prop` non è `tracks` e `value` non è una stringa vuota, aggiorna o imposta la `prop` di quell'album a `value`.
-   Se `prop` è `tracks` ma l'album non ha una proprietà `tracks`, crea un array vuoto e aggiungi `value` ad esso.
-   Se `prop` è `tracks` e `value` non è una stringa vuota, aggiungi `value` alla fine dell'array `tracks` già esistente.
-   Se il valore `value` è una stringa vuota, elimina la proprietà `prop` dall'album.

**Nota:** Una copia dell'oggetto `recordCollection` viene utilizzata per i test.

# --hints--

Dopo aver eseguito `updateRecords(recordCollection, 5439, "artist", "ABBA")`, `artist` dovrebbe essere la stringa `ABBA`

```js
assert(
  updateRecords(_recordCollection, 5439, 'artist', 'ABBA')[5439]['artist'] ===
    'ABBA'
);
```

Dopo `updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")`, `tracks` dovrebbe avere la stringa `Take a Chance on Me` come solo e ultimo elemento.

```js
assert(
  updateRecords(_recordCollection, 5439, 'tracks', 'Take a Chance on Me') &&
  _recordCollection[5439]['tracks'].length === 1 &&
  _recordCollection[5439]['tracks'].pop() === 'Take a Chance on Me'
);
```

Dopo `updateRecords(recordCollection, 2548, "artist", "")`, `artist` non dovrebbe essere impostato

```js
updateRecords(_recordCollection, 2548, 'artist', '');
assert(!_recordCollection[2548].hasOwnProperty('artist'));
```

Dopo `updateRecords(recordCollection, 1245, "tracks", "Addicted to Love")`, `tracks` dovrebbero avere la stringa `Addicted to Love` come ultimo elemento.

```js
assert(
  updateRecords(_recordCollection, 1245, 'tracks', 'Addicted to Love')[1245][
    'tracks'
  ].pop() === 'Addicted to Love'
);
```

Dopo `updateRecords(recordCollection, 2468, "tracks", "Free")`, `tracks` dovrebbero avere la stringa `1999` come primo elemento.

```js
assert(
  updateRecords(_recordCollection, 2468, 'tracks', 'Free')[2468][
    'tracks'
  ][0] === '1999'
);
```

Dopo `updateRecords(recordCollection, 2548, "tracks", "")`, `tracks` non dovrebbe essere impostato

```js
updateRecords(_recordCollection, 2548, 'tracks', '');
assert(!_recordCollection[2548].hasOwnProperty('tracks'));
```

Dopo `updateRecords(recordCollection, 1245, "albumTitle", "Riptide")`, `albumTitle` dovrebbe essere la stringa `Riptide`

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
