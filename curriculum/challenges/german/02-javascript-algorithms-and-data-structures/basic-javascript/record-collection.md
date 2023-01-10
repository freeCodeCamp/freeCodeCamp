---
id: 56533eb9ac21ba0edf2244cf
title: Schallplattensammlung
challengeType: 1
forumTopicId: 18261
dashedName: record-collection
---

# --description--

Du bekommst ein Objektliteral, das einen Teil deiner Musikalbensammlung darstellt. Jedes Album hat eine eindeutige ID-Nummer als Schlüssel und verschiedene andere Eigenschaften. Nicht alle Alben enthalten vollständige Informationen.

Du beginnst mit einer Funktion `updateRecords`, die ein Objektliteral, `records`, mit der Musikalbensammlung, einer `id`, einer `prop` (wie `artist` oder `tracks`) und einem `value` nimmt. Vervollständige die Funktion mit Hilfe der folgenden Regeln, um das an die Funktion übergebene Objekt zu verändern.

-   Deine Funktion muss immer das gesamte Objekt der Datensammlung zurückgeben.
-   Wenn `prop` nicht `tracks` ist und `value` keinen leeren String enthält, aktualisiere oder setze `prop` für dieses Album auf `value`.
-   Wenn `prop` `tracks` ist, das Album aber keine Eigenschaft `tracks` hat, erstelle ein leeres Array und füge `value` hinzu.
-   Wenn `prop` `tracks` ist und `value` keinen leeren String darstellt, füge `value` an das Ende des bestehenden Arrays `tracks` des Albums an.
-   Wenn `value` ein leerer String ist, lösche die angegebene Eigenschaft `prop` aus dem Album.

**Hinweis:** Für die Tests wird eine Kopie des Objekts `recordCollection` verwendet.

# --hints--

Nach `updateRecords(recordCollection, 5439, "artist", "ABBA")`, sollte `artist` der String `ABBA` sein

```js
assert(
  updateRecords(_recordCollection, 5439, 'artist', 'ABBA')[5439]['artist'] ===
    'ABBA'
);
```

Nach `updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")`, sollte `tracks` den String `Take a Chance on Me` als einziges und letztes Element enthalten.

```js
assert(
  updateRecords(_recordCollection, 5439, 'tracks', 'Take a Chance on Me') &&
  _recordCollection[5439]['tracks'].length === 1 &&
  _recordCollection[5439]['tracks'].pop() === 'Take a Chance on Me'
);
```

Nach `updateRecords(recordCollection, 2548, "artist", "")`, sollte `artist` nicht gesetzt werden

```js
updateRecords(_recordCollection, 2548, 'artist', '');
assert(!_recordCollection[2548].hasOwnProperty('artist'));
```

Nach `updateRecords(recordCollection, 1245, "tracks", "Addicted to Love")` sollte `tracks` den String `Addicted to Love` als letztes Element enthalten.

```js
assert(
  updateRecords(_recordCollection, 1245, 'tracks', 'Addicted to Love')[1245][
    'tracks'
  ].pop() === 'Addicted to Love'
);
```

Nach `updateRecords(recordCollection, 2468, "tracks", "Free")` sollte `tracks` den String `1999` als erstes Element enthalten.

```js
assert(
  updateRecords(_recordCollection, 2468, 'tracks', 'Free')[2468][
    'tracks'
  ][0] === '1999'
);
```

Nach `updateRecords(recordCollection, 2548, "tracks", "")`, sollte `tracks` nicht gesetzt werden

```js
updateRecords(_recordCollection, 2548, 'tracks', '');
assert(!_recordCollection[2548].hasOwnProperty('tracks'));
```

Nach `updateRecords(recordCollection, 1245, "albumTitle", "Riptide")`, sollte `albumTitle` der String `Riptide` sein

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
