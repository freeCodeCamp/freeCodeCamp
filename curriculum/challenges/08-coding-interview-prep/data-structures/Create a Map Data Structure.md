---
id: 8d5823c8c441eddfaeb5bdef
title: Create a Map Data Structure
challengeType: 1
---

## Description
<section id='description'>
The next few challenges will cover maps and hash tables. Maps are data structures that store key-value pairs. In JavaScript, these are available to us as objects. Maps provide rapid lookup of stored items based on key values and are very common and useful data structures.
Instructions: Let's get some practice creating our own map. Because JavaScript objects provide a much more efficient map structure than anything we could write here, this is intended primarily as a learning exercise. However, JavaScript objects only provide us with certain operations. What if we wanted to define custom operations?
Use the <code>Map</code> object provided here as a wrapper around a JavaScript <code>object</code>. Create the following methods and operations on the Map object:
<ul>
<li><code>add</code> accepts a <code>key, value</code> pair to add to the map.</li>
<li><code>remove</code> accepts a key and removes the associated <code>key, value</code> pair</li>
<li><code>get</code> accepts a <code>key</code> and returns the stored <code>value</code></li>
<li><code>has</code> accepts a <code>key</code> and returns <dfn>true</dfn> if the key exists or <dfn>false</dfn> if it doesn't.</li>
<li><code>values</code> returns an array of all the values in the map</li>
<li><code>size</code> returns the number of items in the map</li>
<li><code>clear</code> empties the map</li>
</ul>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
- text: The Map data structure exists.
  testString: 'assert((function() { var test = false; if (typeof Map !== "undefined") { test = new Map() }; return (typeof test == "object")})(), "The Map data structure exists.");'
- text: 'The Map object has the following methods: add, remove, get, has, values, clear, and size.'
  testString: 'assert((function() { var test = false; if (typeof Map !== "undefined") { test = new Map() }; return (typeof test.add == "function" && typeof test.remove == "function" && typeof test.get == "function" && typeof test.has == "function" && typeof test.values == "function" && typeof test.clear == "function" && typeof test.size == "function")})(), "The Map object has the following methods: add, remove, get, has, values, clear, and size.");'
- text: The add method adds items to the map.
  testString: 'assert((function() { var test = false; if (typeof Map !== "undefined") { test = new Map() }; test.add(5,6); test.add(2,3); test.add(2,5); return (test.size() == 2)})(), "The add method adds items to the map.");'
- text: The has method returns true for added items and false for absent items.
  testString: 'assert((function() { var test = false; if (typeof Map !== "undefined") { test = new Map() }; test.add("test","value"); return (test.has("test") && !test.has("false"))})(), "The has method returns true for added items and false for absent items.");'
- text: The get method accepts keys as input and returns the associated values.
  testString: 'assert((function() { var test = false; if (typeof Map !== "undefined") { test = new Map() }; test.add("abc","def"); return (test.get("abc") == "def")})(), "The get method accepts keys as input and returns the associated values.");'
- text: The values method returns all the values stored in the map as strings in an array.
  testString: 'assert((function() { var test = false; if (typeof Map !== "undefined") { test = new Map() }; test.add("a","b"); test.add("c","d"); test.add("e","f"); var vals = test.values(); return (vals.indexOf("b") != -1 && vals.indexOf("d") != -1 && vals.indexOf("f") != -1)})(), "The values method returns all the values stored in the map as strings in an array.");'
- text: The clear method empties the map and the size method returns the number of items present in the map.
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
