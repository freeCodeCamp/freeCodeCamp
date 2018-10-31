---
id: 587d8254367417b2b2512c6f
title: Perform a Subset Check on Two Sets of Data
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
    testString: 'assert(function(){var test = new Set(); return (typeof test.subset === "function")}, "Your <code>Set</code> class should have a <code>union</code> method.");'
  - text: ''
    testString: 'assert(function(){var setA = new Set(); var setB = new Set(); setA.add("a"); setB.add("b"); setB.add("c"); setB.add("a"); setB.add("d"); var subsetSetAB = setA.subset(setB);return (subsetSetAB === true)}, "The first Set() was contained in the second Set");'
  - text: ''
    testString: 'assert(function(){var setA = new Set(); var setB = new Set(); setA.add("a"); setA.add("b"); setB.add("a"); setB.add("b"); setB.add("c"); setB.add("d"); var subsetSetAB = setA.subset(setB); return (subsetSetAB === true)}, "<code>["a", "b"].subset(["a", "b", "c", "d"])</code> should return <code>true</code>");'
  - text: ''
    testString: 'assert(function(){var setA = new Set(); var setB = new Set(); setA.add("a"); setA.add("b"); setA.add("c"); setB.add("a"); setB.add("b"); var subsetSetAB = setA.subset(setB); return (subsetSetAB === false)}, "<code>["a", "b", "c"].subset(["a", "b"])</code> should return <code>false</code>");'
  - text: ''
    testString: 'assert(function(){var setA = new Set(); var setB = new Set(); var subsetSetAB = setA.subset(setB); return (subsetSetAB === true)}, "<code>[].subset([])</code> should return <code>true</code>");'
  - text: ''
    testString: 'assert(function(){var setA = new Set(); var setB = new Set(); setA.add("a"); setA.add("b"); setB.add("c"); setB.add("d"); var subsetSetAB = setA.subset(setB); return (subsetSetAB === false)}, "<code>["a", "b"].subset(["c", "d"])</code> should return <code>false</code>");'

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
    // this method will return the size of the collection
    this.size = function() {
        return collection.length;
    };
    // this method will return the union of two sets
    this.union = function(otherSet) {
        var unionSet = new Set();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function(e){
            unionSet.add(e);
        });
        secondSet.forEach(function(e){
            unionSet.add(e);
        });
        return unionSet;
    };
    // this method will return the intersection of two sets as a new set
    this.intersection = function(otherSet) {
        var intersectionSet = new Set();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            if(otherSet.has(e)){
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    };
    // this method will return the difference of two sets as a new set
    this.difference = function(otherSet) {
        var differenceSet = new Set();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            if(!otherSet.has(e)){
                differenceSet.add(e);
            }
        });
        return differenceSet;
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
// solution required
```
</section>
