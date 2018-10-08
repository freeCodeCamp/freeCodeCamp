---
id: 56533eb9ac21ba0edf2244cf
title: Record Collection
challengeType: 1
---

## Description
<section id='description'>
You are given a JSON object representing a part of your musical album collection. Each album has several properties and a unique id number as its key. Not all albums have complete information.
Write a function which takes an album's <code>id</code> (like <code>2548</code>), a property <code>prop</code> (like <code>"artist"</code> or <code>"tracks"</code>), and a <code>value</code> (like <code>"Addicted to Love"</code>) to modify the data in this collection.
If <code>prop</code> isn't <code>"tracks"</code> and <code>value</code> isn't empty (<code>""</code>), update or set the <code>value</code> for that record album's property.
Your function must always return the entire collection object.
There are several rules for handling incomplete data:
If <code>prop</code> is <code>"tracks"</code> but the album doesn't have a <code>"tracks"</code> property, create an empty array before adding the new value to the album's corresponding property.
If <code>prop</code> is <code>"tracks"</code> and <code>value</code> isn't empty (<code>""</code>), push the <code>value</code> onto the end of the album's existing <code>tracks</code> array.
If <code>value</code> is empty (<code>""</code>), delete the given <code>prop</code> property from the album.
<strong>Hints</strong><br>Use <code>bracket notation</code> when <a href="javascript-algorithms-and-data-structures/basic-javascript/accessing-object-properties-with-variables" target="_blank">accessing object properties with variables</a>.
Push is an array method you can read about on <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push" target="_blank">Mozilla Developer Network</a>.
You may refer back to <a href="javascript-algorithms-and-data-structures/basic-javascript/manipulating-complex-objects" target="_blank">Manipulating Complex Objects</a> Introducing JavaScript Object Notation (JSON) for a refresher.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'After <code>updateRecords(5439, "artist", "ABBA")</code>, <code>artist</code> should be <code>"ABBA"</code>'
    testString: 'collection = collectionCopy; assert(updateRecords(5439, "artist", "ABBA")[5439]["artist"] === "ABBA", "After <code>updateRecords(5439, "artist", "ABBA")</code>, <code>artist</code> should be <code>"ABBA"</code>");'
  - text: 'After <code>updateRecords(5439, "tracks", "Take a Chance on Me")</code>, <code>tracks</code> should have <code>"Take a Chance on Me"</code> as the last element.'
    testString: 'assert(updateRecords(5439, "tracks", "Take a Chance on Me")[5439]["tracks"].pop() === "Take a Chance on Me", "After <code>updateRecords(5439, "tracks", "Take a Chance on Me")</code>, <code>tracks</code> should have <code>"Take a Chance on Me"</code> as the last element.");'
  - text: 'After <code>updateRecords(2548, "artist", "")</code>, <code>artist</code> should not be set'
    testString: 'updateRecords(2548, "artist", ""); assert(!collection[2548].hasOwnProperty("artist"), "After <code>updateRecords(2548, "artist", "")</code>, <code>artist</code> should not be set");'
  - text: 'After <code>updateRecords(1245, "tracks", "Addicted to Love")</code>, <code>tracks</code> should have <code>"Addicted to Love"</code> as the last element.'
    testString: 'assert(updateRecords(1245, "tracks", "Addicted to Love")[1245]["tracks"].pop() === "Addicted to Love", "After <code>updateRecords(1245, "tracks", "Addicted to Love")</code>, <code>tracks</code> should have <code>"Addicted to Love"</code> as the last element.");'
  - text: 'After <code>updateRecords(2468, "tracks", "Free")</code>, <code>tracks</code> should have <code>"1999"</code> as the first element.'
    testString: 'assert(updateRecords(2468, "tracks", "Free")[2468]["tracks"][0] === "1999", "After <code>updateRecords(2468, "tracks", "Free")</code>, <code>tracks</code> should have <code>"1999"</code> as the first element.");'
  - text: 'After <code>updateRecords(2548, "tracks", "")</code>, <code>tracks</code> should not be set'
    testString: 'updateRecords(2548, "tracks", ""); assert(!collection[2548].hasOwnProperty("tracks"), "After <code>updateRecords(2548, "tracks", "")</code>, <code>tracks</code> should not be set");'
  - text: 'After <code>updateRecords(1245, "album", "Riptide")</code>, <code>album</code> should be <code>"Riptide"</code>'
    testString: 'assert(updateRecords(1245, "album", "Riptide")[1245]["album"] === "Riptide", "After <code>updateRecords(1245, "album", "Riptide")</code>, <code>album</code> should be <code>"Riptide"</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [
        "1999",
        "Little Red Corvette"
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {


  return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>


```js
var collection = {
    2548: {
      album: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    2468: {
      album: "1999",
      artist: "Prince",
      tracks: [
        "1999",
        "Little Red Corvette"
      ]
    },
    1245: {
      artist: "Robert Palmer",
      tracks: [ ]
    },
    5439: {
      album: "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  if(value === "") delete collection[id][prop];
  else if(prop === "tracks") {
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value;
  }

  return collection;
}
```

</section>
