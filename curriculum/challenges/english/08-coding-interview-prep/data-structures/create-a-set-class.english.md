---
id: 8d1323c8c441eddfaeb5bdef
title: Create a Set Class
challengeType: 1
---

## Description
<section id='description'>
In this exercise we are going to create a function to emulate a data structure called a "Set". A Set is like an array, but it cannot contain duplicate values. The typical use for a Set is to simply check for the presence of an item. This can be implemented with an object, for instance:
<blockquote>var set = new Object();<br>set.foo = true;<br>// See if foo exists in our set:<br>console.log(set.foo) // true</blockquote>
In this exercise, we will build a full featured Set from scratch.
First, we will create a function that will add a value to our set collection as long as the value does not already exist in the set. For example:
<blockquote>this.add = function(element) {<br>  //some code to add value to the set<br>}</blockquote>

Then we will create a delete function for our set that will accept a value, and if this value exists inside the set collection, this method will remove it and return true, whereas it will return false if the value does not exist inside the set collection.

And finally, we will create a size function for our Set. This function will be named <code>this.size</code> and it will return the number of elements inside the set collection.
</section>

## Instructions
<section id='instructions'>
Create a new <code>this.add</code> method/function that should add a value to the set and return <code>true</code> if the value was successfully added to the set and <code>false</code> otherwise.

Create a new <code>this.remove</code> method/function which should accept a value and check if it exists in the set. If it does, then this function should remove that value from the set, and return <code>true</code>. Otherwise, it should return <code>false</code>.

Create a new <code>this.size</code> property for our set and it should return the size of the set.
</section>


## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>Set</code> class should have an <code>add</code> method.
    testString: assert((function(){var test = new Set(); return (typeof test.add === 'function')}()), 'Your <code>Set</code> class should have an <code>add</code> method.');
  - text: Your <code>add</code> method should not add duplicate values.
    testString: assert((function(){var test = new Set(); test.add('a'); test.add('b'); test.add('a'); var vals = test.values(); return (vals[0] === 'a' && vals[1] === 'b' && vals.length === 2)}()), 'Your <code>add</code> method should not add duplicate values.');
  - text: Your <code>add</code> method should return <code>true</code> when a value has been successfully added.
    testString: assert((function(){var test = new Set(); var result = test.add('a'); return (result != undefined) && (result === true);}()), 'Your <code>add</code> method should return <code>true</code> when a value has been successfully added.');
  - text: Your <code>add</code> method should return <code>false</code> when a duplicate value is added.
    testString: assert((function(){var test = new Set(); test.add('a'); var result = test.add('a'); return (result != undefined) && (result === false);}()), 'Your <code>add</code> method should return <code>false</code> when a duplicate value is added.');
  - text: Your <code>Set</code> class should have a <code>remove</code> method.
    testString: assert((function(){var test = new Set(); return (typeof test.remove === 'function')}()), 'Your <code>Set</code> class should have a <code>remove</code> method.');
  - text: Your <code>remove</code> method should only remove items that are present in the set.
    testString: assert.deepEqual((function(){var test = new Set(); test.add('a');test.add('b');test.remove('c'); return test.values(); })(), ['a', 'b'], 'Your <code>remove</code> method should only remove items that are present in the set.');
  - text: Your <code>remove</code> method should remove the given item from the set.
    testString: assert((function(){var test = new Set(); test.add('a');test.add('b');test.remove('a'); var vals = test.values(); return (vals[0] === 'b' && vals.length === 1)}()), 'Your <code>remove</code> method should remove the given item from the set.');
  - text: Your <code>Set</code> class should have a <code>size</code> method.
    testString: assert((function(){var test = new Set(); return (typeof test.size === 'function')}()), 'Your <code>Set</code> class should have a <code>size</code> method.');
  - text: The <code>size</code> method should return the number of elements in the collection.
    testString: assert((function(){var test = new Set(); test.add('a');test.add('b');test.remove('a');return (test.size() === 1)}()), 'The <code>size</code> method should return the number of elements in the collection.');

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

    // write your this.add function here

    // write your this.remove function here

    // write your this.size function here
}
```

</div>


</section>

## Solution
<section id='solution'>


```js
function Set() {var collection = []; this.has = function(e){return(collection.indexOf(e) !== -1);};this.values = function() {return collection;};this.add = function(element) {if (!this.has(element)) {collection.push(element);return true;} else {return false;}};this.remove = function(element) {if(this.has(element)) {var i = collection.indexOf(element);collection.splice(i, 1);return true;}return false;};this.size = function() {return collection.length;};}
```

</section>
