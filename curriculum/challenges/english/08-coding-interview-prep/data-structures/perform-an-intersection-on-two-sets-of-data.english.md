---
id: 587d8253367417b2b2512c6d
title: Perform an Intersection on Two Sets of Data
challengeType: 1
forumTopicId: 301709
---

## Description
<section id='description'>
In this exercise we are going to perform an intersection on 2 sets of data. We will create a method on our <code>Set</code> data structure called <code>intersection</code>. An intersection of sets represents all values that are common to two or more sets. This method should take another <code>Set</code> as an argument and return the <code>intersection</code> of the two sets.
For example, if <code>setA = ['a','b','c']</code> and <code>setB = ['a','b','d','e']</code>, then the intersection of setA and setB is: <code>setA.intersection(setB) = ['a', 'b']</code>.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>Set</code> class should have a <code>intersection</code> method.
    testString: assert((function(){var test = new Set(); return (typeof test.intersection === 'function')})());
  - text: The proper collection was returned
    testString: assert((function(){  var setA = new Set();  var setB = new Set();  setA.add('a');  setA.add('b');  setA.add('c');  setB.add('c');  setB.add('d');  var intersectionSetAB = setA.intersection(setB); return (intersectionSetAB.size() === 1 && intersectionSetAB.values()[0] === 'c')})());

```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='js-seed'>

```js
class Set {
  constructor() {
    this.collection = [];
  }

  has(element) {
    return this.collection.indexOf(element) !== -1;
  }

  values() {
    return this.collection;
  }

  add(element) {
    if (!this.has(element)) {
      this.collection.push(element);
      return true;
    }
    return false;
  }

  remove(element) {
    if (this.has(element)) {
      const index = this.collection.indexOf(element);
      this.collection.splice(index, 1);
      return true;
    }
    return false;
  }

  size() {
    return this.collection.length;
  }

  union(anotherSet){
    const newSet = new Set();
    const addToSet = (el) => newSet.add(el);
    this.values().forEach(addToSet);
    anotherSet.values().forEach(addToSet);
    return newSet;
  }
  // Add intersection method here

}
```

</div>
</section>

## Solution
<section id='solution'>


```js
class Set {
  constructor() {
    this.collection = [];
  }

  has(element) {
    return this.collection.indexOf(element) !== -1;
  }

  values() {
    return this.collection;
  }

  add(element) {
    if (!this.has(element)) {
      this.collection.push(element);
      return true;
    }
    return false;
  }

  remove(element) {
    if (this.has(element)) {
      const index = this.collection.indexOf(element);
      this.collection.splice(index, 1);
      return true;
    }
    return false;
  }

  size() {
    return this.collection.length;
  }

  union(anotherSet){
    const newSet = new Set();
    const addToSet = (el) => newSet.add(el);
    this.values().forEach(addToSet);
    anotherSet.values().forEach(addToSet);
    return newSet;
  }

  intersection(otherSet) {
    const intersectionSet = new Set();
    const firstSet = this.values();
    firstSet.forEach(function(e) {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    })
    return intersectionSet;
  }
}
```

</section>
