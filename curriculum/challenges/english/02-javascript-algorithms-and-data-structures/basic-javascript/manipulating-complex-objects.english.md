---
id: 56533eb9ac21ba0edf2244cb
title: Manipulating Complex Objects
challengeType: 1
---

## Description
<section id='description'>
Sometimes you may want to store data in a flexible <dfn>Data Structure</dfn>. A JavaScript object is one way to handle flexible data. They allow for arbitrary combinations of <dfn>strings</dfn>, <dfn>numbers</dfn>, <dfn>booleans</dfn>, <dfn>arrays</dfn>, <dfn>functions</dfn>, and <dfn>objects</dfn>.
Here's an example of a complex data structure:
<blockquote>var ourMusic = [<br>&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;"artist": "Daft Punk",<br>&nbsp;&nbsp;&nbsp;&nbsp;"title": "Homework",<br>&nbsp;&nbsp;&nbsp;&nbsp;"release_year": 1997,<br>&nbsp;&nbsp;&nbsp;&nbsp;"formats": [ <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"CD", <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Cassette", <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"LP"<br>&nbsp;&nbsp;&nbsp;&nbsp;],<br>&nbsp;&nbsp;&nbsp;&nbsp;"gold": true<br>&nbsp;&nbsp;}<br>];</blockquote>
This is an array which contains one object inside. The object has various pieces of <dfn>metadata</dfn> about an album. It also has a nested <code>"formats"</code> array. If you want to add more album records, you can do this by adding records to the top level array.
Objects hold data in a property, which has a key-value format. In the example above, <code>"artist": "Daft Punk"</code> is a property that has a key of <code>"artist"</code> and a value of <code>"Daft Punk"</code>.
<a href='http://www.json.org/' target=_blank>JavaScript Object Notation</a> or <code>JSON</code> is a related data interchange format used to store data.
<blockquote>{<br>&nbsp;&nbsp;"artist": "Daft Punk",<br>&nbsp;&nbsp;"title": "Homework",<br>&nbsp;&nbsp;"release_year": 1997,<br>&nbsp;&nbsp;"formats": [ <br>&nbsp;&nbsp;&nbsp;&nbsp;"CD",<br>&nbsp;&nbsp;&nbsp;&nbsp;"Cassette",<br>&nbsp;&nbsp;&nbsp;&nbsp;"LP"<br>&nbsp;&nbsp;],<br>&nbsp;&nbsp;"gold": true<br>}</blockquote>
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
    testString: 'assert(Array.isArray(myMusic), "<code>myMusic</code> should be an array");'
  - text: <code>myMusic</code> should have at least two elements
    testString: 'assert(myMusic.length > 1, "<code>myMusic</code> should have at least two elements");'
  - text: '<code>myMusic[1]</code> should be an object'
    testString: 'assert(typeof myMusic[1] === "object", "<code>myMusic[1]</code> should be an object");'
  - text: '<code>myMusic[1]</code> should have at least 4 properties'
    testString: 'assert(Object.keys(myMusic[1]).length > 3, "<code>myMusic[1]</code> should have at least 4 properties");'
  - text: '<code>myMusic[1]</code> should contain an <code>artist</code> property which is a string'
    testString: 'assert(myMusic[1].hasOwnProperty("artist") && typeof myMusic[1].artist === "string", "<code>myMusic[1]</code> should contain an <code>artist</code> property which is a string");'
  - text: '<code>myMusic[1]</code> should  contain a <code>title</code> property which is a string'
    testString: 'assert(myMusic[1].hasOwnProperty("title") && typeof myMusic[1].title === "string", "<code>myMusic[1]</code> should  contain a <code>title</code> property which is a string");'
  - text: '<code>myMusic[1]</code> should contain a <code>release_year</code> property which is a number'
    testString: 'assert(myMusic[1].hasOwnProperty("release_year") && typeof myMusic[1].release_year === "number", "<code>myMusic[1]</code> should contain a <code>release_year</code> property which is a number");'
  - text: '<code>myMusic[1]</code> should contain a <code>formats</code> property which is an array'
    testString: 'assert(myMusic[1].hasOwnProperty("formats") && Array.isArray(myMusic[1].formats), "<code>myMusic[1]</code> should contain a <code>formats</code> property which is an array");'
  - text: <code>formats</code> should be an array of strings with at least two elements
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
