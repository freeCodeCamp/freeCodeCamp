---
id: 56533eb9ac21ba0edf2244cb
title: Manipulating Complex Objects
challengeType: 1
forumTopicId: 18208
dashedName: manipulating-complex-objects
---

# --description--

Sometimes you may want to store data in a flexible <dfn>Data Structure</dfn>. A JavaScript object is one way to handle flexible data. They allow for arbitrary combinations of <dfn>strings</dfn>, <dfn>numbers</dfn>, <dfn>booleans</dfn>, <dfn>arrays</dfn>, <dfn>functions</dfn>, and <dfn>objects</dfn>.

Here's an example of a complex data structure:

```js
const ourMusic = [
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

This is an array which contains one object inside. The object has various pieces of <dfn>metadata</dfn> about an album. It also has a nested `formats` array. If you want to add more album records, you can do this by adding records to the top level array. Objects hold data in a property, which has a key-value format. In the example above, `"artist": "Daft Punk"` is a property that has a key of `artist` and a value of `Daft Punk`.

**Note:** You will need to place a comma after every object in the array, unless it is the last object in the array.

# --instructions--

Add a new album to the `myMusic` array. Add `artist` and `title` strings, `release_year` number, and a `formats` array of strings.

# --hints--

`myMusic` should be an array

```js
assert.isArray(myMusic);
```

`myMusic` should have at least two elements

```js
assert.isAtLeast(myMusic.length, 2);
```

The elements in the `myMusic` array should be objects

```js
myMusic.forEach(object => {assert.typeOf(object, 'object')})
```

Your object in `myMusic` should have at least 4 properties

```js
myMusic.forEach(object => {assert.isAtLeast(Object.keys(object), 4); });
```

Your object in `myMusic` should contain the property `artist` which is a string

```js
myMusic.forEach(object => {
  assert.containsAllKeys(object, ['artist']);
  assert.isString(object.artist)
})
```

Your object in `myMusic` should contain the property `title` which is a string

```js
myMusic.forEach(object => {
  assert.containsAllKeys(object, ['title']);
  assert.isString(object.title)
})
```

Your object in `myMusic` should contain the property `release_year` which is a number

```js
myMusic.forEach(object => {
  assert.containsAllKeys(object, ['release_year']);
  assert.isNumber(object.release_year)
})
```

Your object in `myMusic` should contain a `formats` property which is an array

```js
myMusic.forEach(object => {
  assert.containsAllKeys(object, ['formats']);
  assert.isArray(object.formats)
})
```

`formats` should be an array of strings with at least two elements

```js
myMusic.forEach(object => {
  object.formats.forEach(format => {
    assert.isString(format)
  });
  assert.isAtLeast(object.formats.length, 2)
})
```

# --seed--

## --seed-contents--

```js
const myMusic = [
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
];
```

# --solutions--

```js
const myMusic = [
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
