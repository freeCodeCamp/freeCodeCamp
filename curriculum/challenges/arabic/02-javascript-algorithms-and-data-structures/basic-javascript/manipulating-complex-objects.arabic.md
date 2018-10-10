---
id: 56533eb9ac21ba0edf2244cb
title: Manipulating Complex Objects
challengeType: 1
videoUrl: ''
localeTitle: ''
---

## Description
undefined

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert(Array.isArray(myMusic), "<code>myMusic</code> should be an array");'
  - text: ''
    testString: 'assert(myMusic.length > 1, "<code>myMusic</code> should have at least two elements");'
  - text: ''
    testString: 'assert(typeof myMusic[1] === "object", "<code>myMusic[1]</code> should be an object");'
  - text: ''
    testString: 'assert(Object.keys(myMusic[1]).length > 3, "<code>myMusic[1]</code> should have at least 4 properties");'
  - text: ''
    testString: 'assert(myMusic[1].hasOwnProperty("artist") && typeof myMusic[1].artist === "string", "<code>myMusic[1]</code> should contain an <code>artist</code> property which is a string");'
  - text: ''
    testString: 'assert(myMusic[1].hasOwnProperty("title") && typeof myMusic[1].title === "string", "<code>myMusic[1]</code> should  contain a <code>title</code> property which is a string");'
  - text: ''
    testString: 'assert(myMusic[1].hasOwnProperty("release_year") && typeof myMusic[1].release_year === "number", "<code>myMusic[1]</code> should contain a <code>release_year</code> property which is a number");'
  - text: ''
    testString: 'assert(myMusic[1].hasOwnProperty("formats") && Array.isArray(myMusic[1].formats), "<code>myMusic[1]</code> should contain a <code>formats</code> property which is an array");'
  - text: ''
    testString: 'assert(myMusic[1].formats.every(function(item) { return (typeof item === "string")}) && myMusic[1].formats.length > 1, "<code>formats</code> should be an array of strings with at least two elements");'

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
  // Add record here
];

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
// solution required
```
</section>
