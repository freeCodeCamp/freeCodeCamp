---
id: 8d5823c8c441eddfaeb5bdef
title: Create a Map Data Structure
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
    testString: 'assert((function() { var test = false; if (typeof Map !== "undefined") { test = new Map() }; return (typeof test == "object")})(), "The Map data structure exists.");'
  - text: ''
    testString: 'assert((function() { var test = false; if (typeof Map !== "undefined") { test = new Map() }; return (typeof test.add == "function" && typeof test.remove == "function" && typeof test.get == "function" && typeof test.has == "function" && typeof test.values == "function" && typeof test.clear == "function" && typeof test.size == "function")})(), "The Map object has the following methods: add, remove, get, has, values, clear, and size.");'
  - text: ''
    testString: 'assert((function() { var test = false; if (typeof Map !== "undefined") { test = new Map() }; test.add(5,6); test.add(2,3); test.add(2,5); return (test.size() == 2)})(), "The add method adds items to the map.");'
  - text: ''
    testString: 'assert((function() { var test = false; if (typeof Map !== "undefined") { test = new Map() }; test.add("test","value"); return (test.has("test") && !test.has("false"))})(), "The has method returns true for added items and false for absent items.");'
  - text: ''
    testString: 'assert((function() { var test = false; if (typeof Map !== "undefined") { test = new Map() }; test.add("abc","def"); return (test.get("abc") == "def")})(), "The get method accepts keys as input and returns the associated values.");'
  - text: ''
    testString: 'assert((function() { var test = false; if (typeof Map !== "undefined") { test = new Map() }; test.add("a","b"); test.add("c","d"); test.add("e","f"); var vals = test.values(); return (vals.indexOf("b") != -1 && vals.indexOf("d") != -1 && vals.indexOf("f") != -1)})(), "The values method returns all the values stored in the map as strings in an array.");'
  - text: ''
    testString: 'assert((function() { var test = false; if (typeof Map !== "undefined") { test = new Map() }; test.add("b","b"); test.add("c","d"); test.remove("asdfas"); var init = test.size(); test.clear(); return (init == 2 && test.size() == 0)})(), "The clear method empties the map and the size method returns the number of items present in the map.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var Map = function() {
  this.collection = {};
  // change code below this line
  // change code above this line
};

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
