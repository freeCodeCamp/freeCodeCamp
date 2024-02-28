---
id: 56533eb9ac21ba0edf2244cf
title: Schallplattensammlung
challengeType: 1
forumTopicId: 18261
dashedName: record-collection
---

# --description--

Du wirst eine Funktion erstellen, die bei der Verwaltung einer Musikalbensammlung helfen wird. Die Sammlung ist als ein Objekt organisiert, das mehrere Alben enthält, die ebenfalls Objekte darstellen. Jedes Album wird in der Sammlung mit einer einzigartigen `id` als Eigenschaftsname dargestellt. Innerhalb jedes Albumobjekts befinden sich verschiedene Eigenschaften, die Informationen über das Album enthalten. Nicht alle Alben enthalten vollständige Informationen.

Die `updateRecords`-Funktion erwartet 4 Argumente, die durch die folgenden Funktionsparameter repräsentiert werden:

-   `records` - ein Objekt mit mehreren einzelnen Alben
-   `id` - eine Zahl, die ein bestimmtes Album im `records`-Objekt repräsentiert
-   `prop` - ein String, der den Namen der zu aktualisierenden Eigenschaft des Albums angibt
-   `value` - ein String, der die Informationen enthält, die zur Aktualisierung der Album-Eigenschaft verwendet werden

Vervollständige die Funktion mit Hilfe der folgenden Regeln, um das an die Funktion übergebene Objekt zu verändern.

-   Deine Funktion muss immer das gesamte `records`-Objekt zurückgeben.
-   Falls `value` einen leeren String darstellt, lösche die angegebene `prop`-Eigenschaft aus dem Album.
-   Falls `prop` nicht `tracks` darstellt und `value` kein leerer String ist, dann weise `value` dem `prop` des jeweiligen Albums zu.
-   If `prop` is `tracks` and `value` isn't an empty string, but the album doesn't have a `tracks` property, create an empty array and add `value` to it.
-   If prop is `tracks` and `value` isn't an empty string, add `value` to the end of the album's existing `tracks` array.

**Hinweis:** Für die Tests wird eine Kopie des Objekts `recordCollection` verwendet. Du solltest das Objekt `recordCollection` nicht direkt anpassen.

# --hints--

Nachdem `updateRecords(recordCollection, 5439, "artist", "ABBA")` ausgeführt wurde, sollte `artist` den String `ABBA` darstellen

```js
assert(
  updateRecords(_recordCollection, 5439, 'artist', 'ABBA')[5439]['artist'] ===
    'ABBA'
);
```

Nachdem `updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")` ausgeführt wurde, sollte `tracks` den String `Take a Chance on Me` als letztes und einziges Element enthalten.

```js
assert(
  updateRecords(_recordCollection, 5439, 'tracks', 'Take a Chance on Me') &&
  _recordCollection[5439]['tracks'].length === 1 &&
  _recordCollection[5439]['tracks'].pop() === 'Take a Chance on Me'
);
```

Nachdem `updateRecords(recordCollection, 2548, "artist", "")` ausgeführt wurde, sollte kein Wert für `artist` eingestellt sein

```js
updateRecords(_recordCollection, 2548, 'artist', '');
assert(!_recordCollection[2548].hasOwnProperty('artist'));
```

Nachdem `updateRecords(recordCollection, 1245, "tracks", "Addicted to Love")` ausgeführt wurde, sollte `tracks` den String `Addicted to Love` als letztes Element enthalten.

```js
assert(
  updateRecords(_recordCollection, 1245, 'tracks', 'Addicted to Love')[1245][
    'tracks'
  ].pop() === 'Addicted to Love'
);
```

Nachdem `updateRecords(recordCollection, 2468, "tracks", "Free")` ausgeführt wurde, sollte `tracks` den String `1999` als erstes Element enthalten.

```js
assert(
  updateRecords(_recordCollection, 2468, 'tracks', 'Free')[2468][
    'tracks'
  ][0] === '1999'
);
```

Nachdem `updateRecords(recordCollection, 2548, "tracks", "")` ausgeführt wurde, sollte kein Wert für `tracks` eingestellt sein

```js
updateRecords(_recordCollection, 2548, 'tracks', '');
assert(!_recordCollection[2548].hasOwnProperty('tracks'));
```

Nachdem `updateRecords(recordCollection, 1245, "albumTitle", "Riptide")` ausgeführt wurde, sollte `albumTitle` den String `Riptide` darstellen

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
