---
id: 587d8254367417b2b2512c6f
title: Perform a Subset Check on Two Sets of Data
challengeType: 1
forumTopicId: 301707
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
tests:
  - text: Your <code>Set</code> class should have a <code>subset</code> method.
    testString: assert((function(){var test = new Set(); return (typeof test.subset === 'function')})());
  - text: The first Set() was contained in the second Set
    testString: assert((function(){var setA = new Set(); var setB = new Set(); setA.add('a'); setB.add('b'); setB.add('c'); setB.add('a'); setB.add('d'); var subsetSetAB = setA.subset(setB);return (subsetSetAB === true)})());
  - text: <code>['a', 'b'].subset(['a', 'b', 'c', 'd'])</code> should return <code>true</code>
    testString: assert((function(){var setA = new Set(); var setB = new Set(); setA.add('a'); setA.add('b'); setB.add('a'); setB.add('b'); setB.add('c'); setB.add('d'); var subsetSetAB = setA.subset(setB); return (subsetSetAB === true)})());
  - text: <code>['a', 'b', 'c'].subset(['a', 'b'])</code> should return <code>false</code>
    testString: assert((function(){var setA = new Set(); var setB = new Set(); setA.add('a'); setA.add('b'); setA.add('c'); setB.add('a'); setB.add('b'); var subsetSetAB = setA.subset(setB); return (subsetSetAB === false)})());
  - text: <code>[].subset([])</code> should return <code>true</code>
    testString: assert((function(){var setA = new Set(); var setB = new Set(); var subsetSetAB = setA.subset(setB); return (subsetSetAB === true)})());
  - text: <code>['a', 'b'].subset(['c', 'd'])</code> should return <code>false</code>
    testString: assert((function(){var setA = new Set(); var setB = new Set(); setA.add('a'); setA.add('b'); setB.add('c'); setB.add('d'); var subsetSetAB = setA.subset(setB); return (subsetSetAB === false)})());

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
  // Add subset method here

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
    firstSet.forEach(e => {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    })
    return intersectionSet;
  }

  difference(otherSet) {
    const differenceSet = new Set();
    const firstSet = this.values();
    firstSet.forEach(e => {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  }

  subset(otherSet) {
    const firstSet = this.values();
    return firstSet.every(e => otherSet.has(e));
  }
}
```

</section>
