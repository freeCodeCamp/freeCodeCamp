---
id: 8d1923c8c441eddfaeb5bdef
title: Size of the Set
challengeType: 1
---

## Description
<section id='description'>
In this exercise we are going to create a size function for our Set. This function should be named <code>this.size</code> and it should return the size of the collection.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
- text: Your <code>Set</code> class should have a <code>size</code> method.
  testString: 'assert((function(){var test = new Set(); return (typeof test.size === "function")}()), "Your <code>Set</code> class should have a <code>size</code> method.");'
- text: The <code>size</code> method should return the number of elements in the collection.
  testString: 'assert((function(){var test = new Set(); test.add("a");test.add("b");test.remove("a");return (test.size() === 1)}()), "The <code>size</code> method should return the number of elements in the collection.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Set() {
    // the var collection will hold the set
    var collection = [];
    // this method will check for the presence of an element and return true or false
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };
    // this method will return all the values in the set
    this.values = function() {
        return collection;
    };
    // this method will add an element to the set
    this.add = function(element) {
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    };
    // this method will remove an element from a set
    this.remove = function(element) {
        if(this.has(element)){
           var index = collection.indexOf(element);
            collection.splice(index,1);
            return true;
        }
        return false;
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
function Set() {var collection = []; this.has = function(e){return(collection.indexOf(e) !== -1);};this.values = function() {return collection;};this.add = function(element) {if (!this.has(element)) {collection.push(element);return true;} else {return false;}};this.remove = function(element) {if(this.has(element)) {var i = collection.indexOf(element);collection.splice(i, 1);return true;}return false;};this.size = function() {return collection.length;};}
```

</section>
