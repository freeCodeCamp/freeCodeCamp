---
id: 8d5823c8c441eddfaeb5bdef
title: Create a Map Data Structure
challengeType: 1
forumTopicId: 301629
---

## Description
<section id='description'>

The next few challenges will cover maps and hash tables. Maps are data structures that store key-value pairs. In JavaScript, these are available to us as objects. Maps provide rapid lookup of stored items based on key values and are very common and useful data structures.
</section>

## Instructions
<section id='instructions'>

Let's get some practice creating our own map. Because JavaScript objects provide a much more efficient map structure than anything we could write here, this is intended primarily as a learning exercise. However, JavaScript objects only provide us with certain operations. What if we wanted to define custom operations?
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

## Tests
<section id='tests'>

```yml
tests:
  - text: The Map data structure should exist.
    testString: assert((function() { var test = false; if (typeof Map !== 'undefined') { test = new Map() }; return (typeof test == 'object')})());
  - text: 'The Map object should have the following methods: add, remove, get, has, values, clear, and size.'
    testString: "assert((function() { var test = false; if (typeof Map !== 'undefined') { test = new Map() }; return (typeof test.add == 'function' && typeof test.remove == 'function' && typeof test.get == 'function' && typeof test.has == 'function' && typeof test.values == 'function' && typeof test.clear == 'function' && typeof test.size == 'function')})());"
  - text: The add method should add items to the map.
    testString: assert((function() { var test = false; if (typeof Map !== 'undefined') { test = new Map() }; test.add(5,6); test.add(2,3); test.add(2,5); return (test.size() == 2)})());
  - text: The has method should return true for added items and false for absent items.
    testString: assert((function() { var test = false; if (typeof Map !== 'undefined') { test = new Map() }; test.add('test','value'); return (test.has('test') && !test.has('false'))})());
  - text: The get method should accept keys as input and should return the associated values.
    testString: assert((function() { var test = false; if (typeof Map !== 'undefined') { test = new Map() }; test.add('abc','def'); return (test.get('abc') == 'def')})());
  - text: The values method should return all the values stored in the map as strings in an array.
    testString: assert((function() { var test = false; if (typeof Map !== 'undefined') { test = new Map() }; test.add('a','b'); test.add('c','d'); test.add('e','f'); var vals = test.values(); return (vals.indexOf('b') != -1 && vals.indexOf('d') != -1 && vals.indexOf('f') != -1)})());
  - text: The clear method should empty the map and the size method should return the number of items present in the map.
    testString: assert((function() { var test = false; if (typeof Map !== 'undefined') { test = new Map() }; test.add('b','b'); test.add('c','d'); test.remove('asdfas'); var init = test.size(); test.clear(); return (init == 2 && test.size() == 0)})());
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var Map = function() {
  this.collection = {};
  // Only change code below this line
  
  // Only change code above this line
};
```

</div>
</section>

## Solution
<section id='solution'>

```js
var Map = function() {
    this.collection = {};
    // Only change code below this line

    this.add = function(key,value) {
      this.collection[key] = value;
    }

    this.remove = function(key) {
      delete this.collection[key];
    }

    this.get = function(key) {
      return this.collection[key];
    }

    this.has = function(key) {
      return this.collection.hasOwnProperty(key)
    }

    this.values = function() {
      return Object.values(this.collection);
    }

    this.size = function() {
      return Object.keys(this.collection).length;
    }

    this.clear = function() {
      for(let item of Object.keys(this.collection)) {
        delete this.collection[item];
      }
    }
    // Only change code above this line
};
```

</section>
