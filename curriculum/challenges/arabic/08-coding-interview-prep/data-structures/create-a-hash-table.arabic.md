---
id: 587d825b367417b2b2512c8e
title: Create a Hash Table
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
    testString: 'assert((function() { var test = false; if (typeof HashTable !== "undefined") { test = new HashTable() }; return (typeof test === "object")})(), "The HashTable data structure exists.");'
  - text: ''
    testString: 'assert((function() { var test = false; if (typeof HashTable !== "undefined") { test = new HashTable() }; return ((typeof test.add) === "function")})(), "The HashTable has an add method.");'
  - text: ''
    testString: 'assert((function() { var test = false; if (typeof HashTable !== "undefined") { test = new HashTable() }; return ((typeof test.remove) === "function")})(), "The HashTable has an remove method.");'
  - text: ''
    testString: 'assert((function() { var test = false; if (typeof HashTable !== "undefined") { test = new HashTable() }; return ((typeof test.lookup) === "function")})(), "The HashTable has an lookup method.");'
  - text: ''
    testString: 'assert((function() { var test = false; if (typeof HashTable !== "undefined") { test = new HashTable() }; test.add("key", "value"); return (test.lookup("key") === "value")})(), "The add method adds key value pairs and the lookup method returns the values associated with a given key.");'
  - text: ''
    testString: 'assert((function() { var test = false; if (typeof HashTable !== "undefined") { test = new HashTable() }; test.add("key", "value"); test.remove("key"); return (test.lookup("key") === null)})(), "The remove method accepts a key as input and removes the associated key value pair.");'
  - text: ''
    testString: 'assert((function() { var test = false; if (typeof HashTable !== "undefined") { test = new HashTable() }; called = 0; test.add("key1","value1"); test.add("key2","value2"); test.add("key3","value3"); return (called === 3)})(), "Items are added using the hash function.");'
  - text: ''
    testString: 'assert((function() { var test = false; if (typeof HashTable !== "undefined") { test = new HashTable() }; called = 0; test.add("key1","value1"); test.add("1key","value2"); test.add("ke1y","value3"); return (test.lookup("key1") === "value1" && test.lookup("1key") == "value2" && test.lookup("ke1y") == "value3")})(), "The hash table handles collisions.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var called = 0;
var hash = (string) => {
  called++;
  var hash = 0;
  for (var i = 0; i < string.length; i++) { hash += string.charCodeAt(i); }
  return hash;
};
var HashTable = function() {
  this.collection = {};
  // change code below this line
  // change code above this line
};

```

</div>

### Before Test
<div id='js-setup'>

```js
  var called = 0;
    var hash = (string) => {
     called++;
      var hash = 0;
      for (var i = 0; i < string.length; i++) { hash += string.charCodeAt(i); };
      return hash;
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
