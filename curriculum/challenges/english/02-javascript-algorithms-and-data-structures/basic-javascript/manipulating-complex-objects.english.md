---
id: 56533eb9ac21ba0edf2244cb
title: Manipulating Complex Objects
challengeType: 1
isHidden: false
videoUrl: 'https://scrimba.com/c/c9yNMfR'
forumTopicId: 18208
---

## Description
<section id='description'>
Sometimes you may want to store data in a flexible <dfn>Data Structure</dfn>. A JavaScript object is one way to handle flexible data. They allow for arbitrary combinations of <dfn>strings</dfn>, <dfn>numbers</dfn>, <dfn>booleans</dfn>, <dfn>arrays</dfn>, <dfn>functions</dfn>, and <dfn>objects</dfn>.
Here's an example of a complex data structure:

```js
var ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP"
    ],
    "gold": true
  }
];
```

This is an array which contains one object inside. The object has various pieces of <dfn>metadata</dfn> about an album. It also has a nested <code>"formats"</code> array. If you want to add more album records, you can do this by adding records to the top level array.
Objects hold data in a property, which has a key-value format. In the example above, <code>"artist": "Daft Punk"</code> is a property that has a key of <code>"artist"</code> and a value of <code>"Daft Punk"</code>.
<a href='http://www.json.org/' target=_blank>JavaScript Object Notation</a> or <code>JSON</code> is a related data interchange format used to store data.

```json
{
  "artist": "Daft Punk",
  "title": "Homework",
  "release_year": 1997,
  "formats": [ 
    "CD",
    "Cassette",
    "LP"
  ],
  "gold": true
}
```

<strong>Note</strong><br>You will need to place a comma after every object in the array, unless it is the last object in the array.
</section>

## Instructions
<section id='instructions'>
Add a new album to the <code>myMusic</code> array. Add <code>artist</code> and <code>title</code> strings, <code>release_year</code> number, and a <code>formats</code> array of strings.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myMusic</code> should be an array
    testString: assert(Array.isArray(myMusic));
  - text: <code>myMusic</code> should have at least two elements
    testString: assert(myMusic.length > 1);
  - text: <code>myMusic[1]</code> should be an object
    testString: assert(typeof myMusic[1] === 'object');
  - text: <code>myMusic[1]</code> should have at least 4 properties
    testString: assert(Object.keys(myMusic[1]).length > 3);
  - text: <code>myMusic[1]</code> should contain an <code>artist</code> property which is a string
    testString: assert(myMusic[1].hasOwnProperty('artist') && typeof myMusic[1].artist === 'string');
  - text: <code>myMusic[1]</code> should  contain a <code>title</code> property which is a string
    testString: assert(myMusic[1].hasOwnProperty('title') && typeof myMusic[1].title === 'string');
  - text: <code>myMusic[1]</code> should contain a <code>release_year</code> property which is a number
    testString: assert(myMusic[1].hasOwnProperty('release_year') && typeof myMusic[1].release_year === 'number');
  - text: <code>myMusic[1]</code> should contain a <code>formats</code> property which is an array
    testString: assert(myMusic[1].hasOwnProperty('formats') && Array.isArray(myMusic[1].formats));
  - text: <code>formats</code> should be an array of strings with at least two elements
    testString: assert(myMusic[1].formats.every(function(item) { return (typeof item === "string")}) && myMusic[1].formats.length > 1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
  // Add a record here
];

```

</div>


### After Test
<div id='js-teardown'>

```js
(function(x){ if (Array.isArray(x)) { return JSON.stringify(x); } return "myMusic is not an array"})(myMusic);
```

</div>

</section>

## Solution
<section id='solution'>


```js
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CS",
      "8T",
      "LP" ],
    "gold": true
  },
  {
    "artist": "ABBA",
    "title": "Ring Ring",
    "release_year": 1973,
    "formats": [
      "CS",
      "8T",
      "LP",
    "CD",
  ]
  }
];
```

</section>
