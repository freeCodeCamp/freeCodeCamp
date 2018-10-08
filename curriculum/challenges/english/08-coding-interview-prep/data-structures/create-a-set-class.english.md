---
id: 8d1323c8c441eddfaeb5bdef
title: Create a Set Class
challengeType: 1
---

## Description
<section id='description'>
In the next few exercises we are going to create a function to emulate a data structure called a "Set". A Set is like an array, but it cannot contain duplicate values. The typical use for a Set is to simply check for the presence of an item. This can be implemented with an object, for instance:
<blockquote>var set = new Object();<br>set.foo = true;<br>// See if foo exists in our set:<br>console.log(set.foo) // true</blockquote>
In the next few exercises, we will build a full featured Set from scratch.
For this exercise, create a function that will add a value to our set collection as long as the value does not already exist in the set. For example:
<blockquote>this.add = function(element) {<br>  //some code to add value to the set<br>}</blockquote>
The function should return <code>true</code> if the value is successfully added and <code>false</code> otherwise.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>Set</code> class should have an <code>add</code> method.
    testString: 'assert((function(){var test = new Set(); return (typeof test.add === "function")}()), "Your <code>Set</code> class should have an <code>add</code> method.");'
  - text: Your <code>add</code> method should not add duplicate values.
    testString: 'assert((function(){var test = new Set(); test.add("a"); test.add("b"); test.add("a"); var vals = test.values(); return (vals[0] === "a" && vals[1] === "b" && vals.length === 2)}()), "Your <code>add</code> method should not add duplicate values.");'
  - text: Your <code>add</code> method should return <code>true</code> when a value has been successfully added.
    testString: 'assert((function(){var test = new Set(); var result = test.add("a"); return (result != undefined) && (result === true);}()), "Your <code>add</code> method should return <code>true</code> when a value has been successfully added.");'
  - text: Your <code>add</code> method should return <code>false</code> when a duplicate value is added.
    testString: 'assert((function(){var test = new Set(); test.add("a"); var result = test.add("a"); return (result != undefined) && (result === false);}()), "Your <code>add</code> method should return <code>false</code> when a duplicate value is added.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Set() {
    // the var collection will hold our set
    var collection = [];
    // this method will check for the presence of an element and return true or false
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };
    // this method will return all the values in the set
    this.values = function() {
        return collection;
    };
    // change code below this line
    // change code above this line
}
```

</div>



</section>

## Solution
<section id='solution'>


```js
function Set() {var collection = []; this.has = function(e){return(collection.indexOf(e) !== -1);};this.values = function() {return collection;};this.add = function(element) {if (!this.has(element)) {collection.push(element);return true;} else {return false;}};}
```

</section>
