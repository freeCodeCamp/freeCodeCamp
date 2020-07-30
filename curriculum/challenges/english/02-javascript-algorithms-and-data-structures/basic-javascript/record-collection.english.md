---
id: 56533eb9ac21ba0edf2244cf
title: Record Collection
challengeType: 1
isHidden: false
videoUrl: 'https://scrimba.com/c/c4mpysg'
forumTopicId: 18261
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
<strong>Hints</strong><br>Use <code>bracket notation</code> when <a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/accessing-object-properties-with-variables" target="_blank">accessing object properties with variables</a>.
The `push` array method will be helpful here. Check out our <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/manipulate-arrays-with-push" target="_blank">Manipulate Arrays With push()</a> challenge to review how it works.
You may refer back to <a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/manipulating-complex-objects" target="_blank">Manipulating Complex Objects</a> Introducing JavaScript Object Notation (JSON) for a refresher.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should not change the <code>collection</code> object's initialization
    testString: 'assert(code.match(/var collection = {\s*2548: {\s*album: "Slippery When Wet",\s*artist: "Bon Jovi",\s*tracks: \[\s*"Let It Rock",\s*"You Give Love a Bad Name"\s*\]\s*},\s*2468: {\s*album: "1999",\s*artist: "Prince",\s*tracks: \[\s*"1999",\s*"Little Red Corvette"\s*\]\s*},\s*1245: {\s*artist: "Robert Palmer",\s*tracks: \[ \]\s*},\s*5439: {\s*album: "ABBA Gold"\s*}\s*};/g));'
  - text: After <code>updateRecords(5439, "artist", "ABBA")</code>, <code>artist</code> should be <code>"ABBA"</code>
    testString: assert(updateRecords(5439, "artist", "ABBA")[5439]["artist"] === "ABBA");
  - text: After <code>updateRecords(5439, "tracks", "Take a Chance on Me")</code>, <code>tracks</code> should have <code>"Take a Chance on Me"</code> as the last element.
    testString: assert(updateRecords(5439, "tracks", "Take a Chance on Me")[5439]["tracks"].pop() === "Take a Chance on Me");
  - text: After <code>updateRecords(2548, "artist", "")</code>, <code>artist</code> should not be set
    testString: updateRecords(2548, "artist", ""); assert(!collection[2548].hasOwnProperty("artist"));
  - text: After <code>updateRecords(1245, "tracks", "Addicted to Love")</code>, <code>tracks</code> should have <code>"Addicted to Love"</code> as the last element.
    testString: assert(updateRecords(1245, "tracks", "Addicted to Love")[1245]["tracks"].pop() === "Addicted to Love");
  - text: After <code>updateRecords(2468, "tracks", "Free")</code>, <code>tracks</code> should have <code>"1999"</code> as the first element.
    testString: assert(updateRecords(2468, "tracks", "Free")[2468]["tracks"][0] === "1999");
  - text: After <code>updateRecords(2548, "tracks", "")</code>, <code>tracks</code> should not be set
    testString: updateRecords(2548, "tracks", ""); assert(!collection[2548].hasOwnProperty("tracks"));
  - text: After <code>updateRecords(1245, "album", "Riptide")</code>, <code>album</code> should be <code>"Riptide"</code>
    testString: assert(updateRecords(1245, "album", "Riptide")[1245]["album"] === "Riptide");

```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='js-seed'>

```js
// Setup
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

// Only change code below this line
function updateRecords(id, prop, value) {


  return collection;
}

updateRecords(5439, "artist", "ABBA");
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
