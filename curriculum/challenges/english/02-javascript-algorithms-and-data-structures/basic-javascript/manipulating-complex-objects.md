---
id: 56533eb9ac21ba0edf2244cb
title: Manipulating Complex Objects
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9yNMfR'
forumTopicId: 18208
---

# --description--

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

This is an array which contains one object inside. The object has various pieces of <dfn>metadata</dfn> about an album. It also has a nested `"formats"` array. If you want to add more album records, you can do this by adding records to the top level array. Objects hold data in a property, which has a key-value format. In the example above, `"artist": "Daft Punk"` is a property that has a key of `"artist"` and a value of `"Daft Punk"`. [JavaScript Object Notation](http://www.json.org/) or `JSON` is a related data interchange format used to store data.

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

**Note**  
You will need to place a comma after every object in the array, unless it is the last object in the array.

# --instructions--

Add a new album to the `myMusic` array. Add `artist` and `title` strings, `release_year` number, and a `formats` array of strings.

# --hints--

`myMusic` should be an array

```js
assert(Array.isArray(myMusic));
```

`myMusic` should have at least two elements

```js
assert(myMusic.length > 1);
```

`myMusic[1]` should be an object

```js
assert(typeof myMusic[1] === 'object');
```

`myMusic[1]` should have at least 4 properties

```js
assert(Object.keys(myMusic[1]).length > 3);
```

`myMusic[1]` should contain an `artist` property which is a string

```js
assert(
  myMusic[1].hasOwnProperty('artist') && typeof myMusic[1].artist === 'string'
);
```

`myMusic[1]` should  contain a `title` property which is a string

```js
assert(
  myMusic[1].hasOwnProperty('title') && typeof myMusic[1].title === 'string'
);
```

`myMusic[1]` should contain a `release_year` property which is a number

```js
assert(
  myMusic[1].hasOwnProperty('release_year') &&
    typeof myMusic[1].release_year === 'number'
);
```

`myMusic[1]` should contain a `formats` property which is an array

```js
assert(
  myMusic[1].hasOwnProperty('formats') && Array.isArray(myMusic[1].formats)
);
```

`formats` should be an array of strings with at least two elements

```js
assert(
  myMusic[1].formats.every(function (item) {
    return typeof item === 'string';
  }) && myMusic[1].formats.length > 1
);
```

# --seed--

## --after-user-code--

```js
(function(x){ if (Array.isArray(x)) { return JSON.stringify(x); } return "myMusic is not an array"})(myMusic);
```

## --seed-contents--

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

# --solutions--

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
