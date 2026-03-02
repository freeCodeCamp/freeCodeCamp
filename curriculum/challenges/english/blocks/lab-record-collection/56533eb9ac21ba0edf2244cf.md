---
id: 56533eb9ac21ba0edf2244cf
title: Build a Record Collection
challengeType: 26
dashedName: build-a-record-collection
---

# --description--

You are creating a function that aids in the maintenance of a musical album collection. The collection is organized as an object that contains multiple albums which are also objects. Each album is represented in the collection with a unique `id` as the property name. Within each album object, there are various properties describing information about the album. Not all albums have complete information.

The `updateRecords` function takes 4 arguments represented by the following function parameters:

-   `records` - an object containing several individual albums
-   `id` - a number representing a specific album in the `records` object
-   `prop` - a string representing the name of the album’s property to update
-   `value` - a string containing the information used to update the album’s property

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. Your function must always return the entire `records` object.
2. If `value` is an empty string, delete the given `prop` property from the album.
3. If `prop` isn't `tracks` and `value` isn't an empty string, assign the `value` to that album's `prop`.
4. If `prop` is `tracks` and `value` isn't an empty string, but the album doesn't have a `tracks` property, create an empty array and add `value` to it.
5. If prop is `tracks` and `value` isn't an empty string, add `value` to the end of the album's existing `tracks` array.

**Note:** A copy of the `recordCollection` object is used for the tests. Your function should not directly refer to the `recordCollection` object, only the function parameter.

# --before-each--

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

# --hints--

You should have a `updateRecords` function.

```js
assert.isFunction(updateRecords);
```

After `updateRecords(recordCollection, 5439, "artist", "ABBA")`, `artist` should be the string `ABBA`

```js
assert.equal(
  updateRecords(_recordCollection, 5439, 'artist', 'ABBA')[5439]['artist'],
    'ABBA'
);
```

After `updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")`, `tracks` should have the string `Take a Chance on Me` as the last and only element.

```js
updateRecords(_recordCollection, 5439, 'tracks', 'Take a Chance on Me');
assert.lengthOf(_recordCollection[5439]['tracks'], 1);
assert.equal(_recordCollection[5439]['tracks'].pop(), 'Take a Chance on Me');
```

After `updateRecords(recordCollection, 2548, "artist", "")`, `artist` should not be set

```js
updateRecords(_recordCollection, 2548, 'artist', '');
assert.isFalse(_recordCollection[2548].hasOwnProperty('artist'));
```

After `updateRecords(recordCollection, 1245, "tracks", "Addicted to Love")`, `tracks` should have the string `Addicted to Love` as the last element.

```js
assert.equal(
  updateRecords(_recordCollection, 1245, 'tracks', 'Addicted to Love')[1245][
    'tracks'
  ].pop(), 'Addicted to Love'
);
```

After `updateRecords(recordCollection, 2468, "tracks", "Free")`, `tracks` should have the string `1999` as the first element.

```js
assert.equal(
  updateRecords(_recordCollection, 2468, 'tracks', 'Free')[2468][
    'tracks'
  ][0], '1999'
);
```

After `updateRecords(recordCollection, 2548, "tracks", "")`, `tracks` should not be set

```js
updateRecords(_recordCollection, 2548, 'tracks', '');
assert.isFalse(_recordCollection[2548].hasOwnProperty('tracks'));
```

After `updateRecords(recordCollection, 1245, "albumTitle", "Riptide")`, `albumTitle` should be the string `Riptide`

```js
assert.equal(
  updateRecords(_recordCollection, 1245, 'albumTitle', 'Riptide')[1245][
    'albumTitle'
  ], 'Riptide'
);
```

# --seed--

## --seed-contents--

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
