---
id: 587d8259367417b2b2512c84
title: Create a Trie Search Tree
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
    testString: 'assert((function testTrie() { var test = false; if (typeof Trie !== "undefined") { test = new Trie() } else { return false; }; return (typeof test.add == "function") }()), "The Trie has an add method.");'
  - text: ''
    testString: 'assert((function testTrie() { var test = false; if (typeof Trie !== "undefined") { test = new Trie() } else { return false; }; return (typeof test.print == "function") }()), "The Trie has a print method.");'
  - text: ''
    testString: 'assert((function testTrie() { var test = false; if (typeof Trie !== "undefined") { test = new Trie() } else { return false; }; return (typeof test.isWord == "function") }()), "The Trie has an isWord method.");'
  - text: ''
    testString: 'assert((function testTrie() { var test = false; if (typeof Trie !== "undefined") { test = new Trie() } else { return false; }; test.add("jump"); test.add("jumps"); test.add("jumped"); test.add("house"); test.add("mouse"); var added = test.print(); return (added.indexOf("jump") != -1 && added.indexOf("jumps") != -1 && added.indexOf("jumped") != -1 && added.indexOf("house") != -1 && added.indexOf("mouse") != -1 && added.length == 5); }()), "The print method returns all items added to the trie as strings in an array.");'
  - text: ''
    testString: 'assert((function testTrie() { var test = false; if (typeof Trie !== "undefined") { test = new Trie() } else { return false; }; test.add("hop"); test.add("hops"); test.add("hopped"); test.add("hoppy"); test.add("hope"); return (test.isWord("hop") && !test.isWord("ho") && test.isWord("hopped") && !test.isWord("hopp") && test.isWord("hoppy") && !test.isWord("hoping")); }()), "The isWord method returns true only for words added to the trie and false for all other words.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
var Node = function() {
  this.keys = new Map();
  this.end = false;
  this.setEnd = function() {
    this.end = true;
  };
  this.isEnd = function() {
    return this.end;
  };
};
var Trie = function() {
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
