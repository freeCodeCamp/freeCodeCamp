---
id: 56533eb9ac21ba0edf2244cf
title: Collezione di dischi
challengeType: 1
forumTopicId: 18261
dashedName: record-collection
---

# --description--

Stai creando una funzione che facilita la manutenzione di una collezione di album musicali. La collezione è organizzata come un oggetto che contiene più album i quali sono anch'essi oggetti. Ogni album è rappresentato nella collezione con un `id` unico come nome della proprietà. All'interno di ogni oggetto dell'album, ci sono varie proprietà che danno informazioni sull'album. Non tutti gli album hanno informazioni complete.

La funzione `updateRecords` prende 4 argomenti rappresentati dai seguenti parametri di funzione:

-   `records` - un oggetto contenente diversi album
-   `id` - un numero che rappresenta un album specifico nell'oggetto `records`
-   `prop` - una stringa che rappresenta il nome della proprietà dell'album da aggiornare
-   `value` - una stringa contenente le informazioni usate per aggiornare la proprietà dell'album

Completa la funzione usando le regole sottostanti per modificare l'oggetto passato alla funzione.

-   La funzione deve sempre restituire l'intero oggetto `records`.
-   Se `value` è una stringa vuota, elimina la proprietà `prop` dall'album.
-   If `prop` isn't `tracks` and `value` isn't an empty string, assign the `value` to that album's `prop`.
-   If `prop` is `tracks` and value isn't an empty string, add the `value` to the end of the album's `tracks` array. You need to create this array first if the album does not have a `tracks` property.

**Nota:** una copia dell'oggetto `recordCollection` viene utilizzata per i test. Non dovresti modificare direttamente l'oggetto `recordCollection`.

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

Dopo `updateRecords(recordCollection, 1245, "tracks", "Addicted to Love")`, `tracks` dovrebbe avere la stringa `Addicted to Love` come ultimo elemento.

```js
assert(
  updateRecords(_recordCollection, 1245, 'tracks', 'Addicted to Love')[1245][
    'tracks'
  ].pop() === 'Addicted to Love'
);
```

Dopo `updateRecords(recordCollection, 2468, "tracks", "Free")`, `tracks` dovrebbe avere la stringa `1999` come primo elemento.

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
