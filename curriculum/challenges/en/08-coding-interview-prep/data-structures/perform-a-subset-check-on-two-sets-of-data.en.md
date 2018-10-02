---
id: 587d8254367417b2b2512c6f
title: Perform a Subset Check on Two Sets of Data
challengeType: 1
---

## Description
<section id='description'>
In this exercise we are going to perform a subset test on 2 sets of data. We will create a method on our <code>Set</code> data structure called <code>subset</code>. This will compare the first set, against the second and if the first set is fully contained within the Second then it will return true.
For example, if <code>setA = ['a','b']</code> and <code>setB = ['a','b','c','d']</code>, then the subset of setA and setB is: <code>setA.subset(setB)</code> should be <code>true</code>.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
- text: Your <code>Set</code> class should have a <code>union</code> method.
  testString: 'assert(function(){var test = new Set(); return (typeof test.subset === ''function'')}, ''Your <code>Set</code> class should have a <code>union</code> method.'');'
- text: The first Set() was contained in the second Set
  testString: 'assert(function(){var setA = new Set(); var setB = new Set(); setA.add(''a''); setB.add(''b''); setB.add(''c''); setB.add(''a''); setB.add(''d''); var subsetSetAB = setA.subset(setB);return (subsetSetAB === true)}, ''The first Set() was contained in the second Set'');'
- text: '<code>[''a'', ''b''].subset([''a'', ''b'', ''c'', ''d''])</code> should return <code>true</code>")'
  testString: 'assert(function(){var setA = new Set(); var setB = new Set(); setA.add(''a''); setA.add(''b''); setB.add(''a''); setB.add(''b''); setB.add(''c''); setB.add(''d''); var subsetSetAB = setA.subset(setB); return (subsetSetAB === true)}, "<code>[''a'', ''b''].subset([''a'', ''b'', ''c'', ''d''])</code> should return <code>true</code>");'
- text: '<code>[''a'', ''b'', ''c''].subset([''a'', ''b''])</code> should return <code>false</code>")'
  testString: 'assert(function(){var setA = new Set(); var setB = new Set(); setA.add(''a''); setA.add(''b''); setA.add(''c''); setB.add(''a''); setB.add(''b''); var subsetSetAB = setA.subset(setB); return (subsetSetAB === false)}, "<code>[''a'', ''b'', ''c''].subset([''a'', ''b''])</code> should return <code>false</code>");'
- text: '<code>[].subset([])</code> should return <code>true</code>'
  testString: 'assert(function(){var setA = new Set(); var setB = new Set(); var subsetSetAB = setA.subset(setB); return (subsetSetAB === true)}, ''<code>[].subset([])</code> should return <code>true</code>'');'
- text: '<code>[''a'', ''b''].subset([''c'', ''d''])</code> should return <code>false</code>")'
  testString: 'assert(function(){var setA = new Set(); var setB = new Set(); setA.add(''a''); setA.add(''b''); setB.add(''c''); setB.add(''d''); var subsetSetAB = setA.subset(setB); return (subsetSetAB === false)}, "<code>[''a'', ''b''].subset([''c'', ''d''])</code> should return <code>false</code>");'

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
function Set() {var collection = []; this.has = function(e){return(collection.indexOf(e) !== -1);};this.values = function() {return collection;};this.add = function(element) {if (!this.has(element)) {collection.push(element);return true;} else {return false;}};this.remove = function(element) {if(this.has(element)) {var i = collection.indexOf(element);collection.splice(i, 1);return true;}return false;};this.size = function() {return collection.length;};this.union = function(set) {var u = new Set();var c = this.values();var s = set.values();c.forEach(function(element){u.add(element);});s.forEach(function(element){u.add(element);});return u;};this.intersection = function(set) {var i = new Set();var c = this.values();c.forEach(function(element){if(s.has(element)) i.add(element);});};this.difference = function(set) {var d = new Set();var c = this.values();c.forEach(function(e){if(!set.has(e)) d.add(e);});};this.subset = function(set) {var isSubset = true;var c = this.values();c.forEach(function(e){if(!set.has(e)) isSubset = false;});return isSubset;};}
```

</section>
