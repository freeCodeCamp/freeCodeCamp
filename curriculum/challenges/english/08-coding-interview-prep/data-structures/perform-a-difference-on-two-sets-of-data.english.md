---
id: 587d8254367417b2b2512c6e
title: Perform a Difference on Two Sets of Data
challengeType: 1
forumTopicId: 301706
---

## Description
<section id='description'>
In this exercise we are going to perform a difference on 2 sets of data. We will create a method on our <code>Set</code> data structure called <code>difference</code>. A difference of sets should compare two sets and return the items present in the first set that are absent in the second. This method should take another <code>Set</code> as an argument and return the <code>difference</code> of the two sets.
For example, if <code>setA = ['a','b','c']</code> and <code>setB = ['a','b','d','e']</code>, then the difference of setA and setB is: <code>setA.difference(setB) = ['c']</code>.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>Set</code> class should have a <code>difference</code> method.
    testString: assert((function(){var test = new Set(); return (typeof test.difference === 'function')})());
  - text: Your <code>difference</code> method should return the proper collection.
    testString: assert((function(){var setA = new Set(); var setB = new Set(); setA.add('a'); setA.add('b'); setA.add('c'); setB.add('c'); setB.add('d'); var differenceSetAB = setA.difference(setB); return (differenceSetAB.size() === 2) && DeepEqual(differenceSetAB.values(), [ 'a', 'b' ])})());

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
  // Add difference method here

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

  difference(otherSet) {
    const differenceSet = new Set();
    const firstSet = this.values();
    firstSet.forEach(function(e) {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  }
}
```

</section>
