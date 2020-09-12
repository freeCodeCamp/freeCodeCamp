---
id: 56533eb9ac21ba0edf2244cf
title: Record Collection
challengeType: 1
forumTopicId: 18261
---

## Description

<section id='description'>

You are given a JSON object representing a part of your musical album collection. Each album has a unique id number as its key and several other properties. Not all albums have complete information.

You start with an `updateRecords` function that takes an object like `collection`, an `id`, a `prop` (like `artist` or `tracks`), and a `value`. Complete the function using the rules below to modify the object passed to the function.

- Your function must always return the entire object.
- If `prop` isn't `tracks` and `value` isn't an empty string, update or set that album's `prop` to `value`.
- If `prop` is `tracks` but the album doesn't have a `tracks` property, create an empty array and add `value` to it.
- If `prop` is `tracks` and `value` isn't an empty string, add `value` to the end of the album's existing `tracks` array.
- If `value` is an empty string, delete the given `prop` property from the album.

**Note:** A copy of the `collection` object is used for the tests.
</section>

## Instructions

<section id='instructions'>

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: After <code>updateRecords(collection, 5439, "artist", "ABBA")</code>, <code>artist</code> should be <code>ABBA</code>
    testString: assert(updateRecords(_recordCollection, 5439, "artist", "ABBA")[5439]["artist"] === "ABBA");
  - text: After <code>updateRecords(collection, 5439, "tracks", "Take a Chance on Me")</code>, <code>tracks</code> should have <code>Take a Chance on Me</code> as the last element.
    testString: assert(updateRecords(_recordCollection, 5439, "tracks", "Take a Chance on Me")[5439]["tracks"].pop() === "Take a Chance on Me");
  - text: After <code>updateRecords(collection, 2548, "artist", "")</code>, <code>artist</code> should not be set
    testString: updateRecords(_recordCollection, 2548, "artist", ""); assert(!_recordCollection[2548].hasOwnProperty("artist"));
  - text: After <code>updateRecords(collection, 1245, "tracks", "Addicted to Love")</code>, <code>tracks</code> should have <code>Addicted to Love</code> as the last element.
    testString: assert(updateRecords(_recordCollection, 1245, "tracks", "Addicted to Love")[1245]["tracks"].pop() === "Addicted to Love");
  - text: After <code>updateRecords(collection, 2468, "tracks", "Free")</code>, <code>tracks</code> should have <code>1999</code> as the first element.
    testString: assert(updateRecords(_recordCollection, 2468, "tracks", "Free")[2468]["tracks"][0] === "1999");
  - text: After <code>updateRecords(collection, 2548, "tracks", "")</code>, <code>tracks</code> should not be set
    testString: updateRecords(_recordCollection, 2548, "tracks", ""); assert(!_recordCollection[2548].hasOwnProperty("tracks"));
  - text: After <code>updateRecords(collection, 1245, "albumTitle", "Riptide")</code>, <code>albumTitle</code> should be <code>Riptide</code>
    testString: assert(updateRecords(_recordCollection, 1245, "albumTitle", "Riptide")[1245]["albumTitle"] === "Riptide");
```

</section>

## Challenge Seed

<section id='challengeSeed'>
<div id='js-seed'>

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

</div>

## Before Test

<div id="js-setup">

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

</div>

</section>

## Solution

<section id='solution'>

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

</section>
