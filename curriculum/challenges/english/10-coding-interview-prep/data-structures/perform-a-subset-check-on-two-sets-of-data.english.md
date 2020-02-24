---
id: 587d8254367417b2b2512c6f
title: Perform a Subset Check on Two Sets of Data
challengeType: 1
isHidden: false
forumTopicId: 301707
---

## Description
<section id='description'>
In this exercise, we are going to perform a subset test on 2 sets of data. We will create a method on our <code>Set</code> data structure called <code>isSubsetOf</code>. This will compare the first set against the second, and if the first set is fully contained within the second, it will return <code>true</code>.
For example, if <code>setA = ['a','b']</code> and <code>setB = ['a','b','c','d']</code>, then <code>setA</code> is a subset of <code>setB</code>, so <code>setA.isSubsetOf(setB)</code> should return <code>true</code>.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>Set</code> class should have a <code>isSubsetOf</code> method.
    testString: assert((function(){var test = new Set(); return (typeof test.isSubsetOf === 'function')})());
  - text: The first Set() should be contained in the second Set
    testString: assert((function(){var setA = new Set(); var setB = new Set(); setA.add('a'); setB.add('b'); setB.add('c'); setB.add('a'); setB.add('d'); var aIsSubsetOfB = setA.isSubsetOf(setB);return (aIsSubsetOfB === true)})());
  - text: <code>['a', 'b'].isSubsetOf(['a', 'b', 'c', 'd'])</code> should return <code>true</code>
    testString: assert((function(){var setA = new Set(); var setB = new Set(); setA.add('a'); setA.add('b'); setB.add('a'); setB.add('b'); setB.add('c'); setB.add('d'); var aIsSubsetOfB = setA.isSubsetOf(setB); return (aIsSubsetOfB === true)})());
  - text: <code>['a', 'b', 'c'].isSubsetOf(['a', 'b'])</code> should return <code>false</code>
    testString: assert((function(){var setA = new Set(); var setB = new Set(); setA.add('a'); setA.add('b'); setA.add('c'); setB.add('a'); setB.add('b'); var aIsSubsetOfB = setA.isSubsetOf(setB); return (aIsSubsetOfB === false)})());
  - text: <code>[].isSubsetOf([])</code> should return <code>true</code>
    testString: assert((function(){var setA = new Set(); var setB = new Set(); var aIsSubsetOfB = setA.isSubsetOf(setB); return (aIsSubsetOfB === true)})());
  - text: <code>['a', 'b'].isSubsetOf(['c', 'd'])</code> should return <code>false</code>
    testString: assert((function(){var setA = new Set(); var setB = new Set(); setA.add('a'); setA.add('b'); setB.add('c'); setB.add('d'); var aIsSubsetOfB = setA.isSubsetOf(setB); return (aIsSubsetOfB === false)})());

```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='js-seed'>

```js
class Set {
  constructor() {
    // This will hold the set
    this.dictionary = {};
    this.length = 0;
  }
  // this method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }
  // this method will return all the values in the set
  values() {
    return Object.keys(this.dictionary);
  }
  // this method will add an element to the set
  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = true;
      this.length++;
      return true;
    }

    return false;
  }
  // this method will remove an element from a set
  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }

    return false;
  }
  // this method will return the size of the set
  size() {
    return this.length;
  }
  // This is our union method from that lesson
  union(set) {
    const newSet = new Set();
    this.values().forEach(value => {
      newSet.add(value);
    })
    set.values().forEach(value => {
      newSet.add(value);
    })

    return newSet;
  }
  // This is our intersection method from that lesson
  intersection(set) {
    const newSet = new Set();

    let largeSet;
    let smallSet;
    if (this.dictionary.length > set.length) {
      largeSet = this;
      smallSet = set;
    } else {
      largeSet = set;
      smallSet = this;
    }

    smallSet.values().forEach(value => {
      if (largeSet.dictionary[value]) {
        newSet.add(value);
      }
    })

    return newSet;
  }
  // This is our difference method from that lesson
  difference(set) {
    const newSet = new Set();

    this.values().forEach(value => {
      if (!set.dictionary[value]) {
        newSet.add(value);
      }
    })

    return newSet;
  }
  // change code below this line
  // change code above this line
}
```

</div>
</section>

## Solution
<section id='solution'>

```js
class Set {
  constructor() {
    this.dictionary = {};
    this.length = 0;
  }

  has(element) {
    return this.dictionary[element] !== undefined;
  }

  values() {
    return Object.keys(this.dictionary);
  }

  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = true;
      this.length++;
      return true;
    }

    return false;
  }

  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }

    return false;
  }

  size() {
    return this.length;
  }

  union(set) {
    const newSet = new Set();
    this.values().forEach(value => {
      newSet.add(value);
    })
    set.values().forEach(value => {
      newSet.add(value);
    })

    return newSet;
  }

  intersection(set) {
    const newSet = new Set();

    let largeSet;
    let smallSet;
    if (this.dictionary.length > set.length) {
      largeSet = this;
      smallSet = set;
    } else {
      largeSet = set;
      smallSet = this;
    }

    smallSet.values().forEach(value => {
      if (largeSet.dictionary[value]) {
        newSet.add(value);
      }
    })

    return newSet;
  }  

  difference(set) {
    const newSet = new Set();

    this.values().forEach(value => {
      if (!set.dictionary[value]) {
        newSet.add(value);
      }
    })

    return newSet;
  }

  isSubsetOf(set) {
    for(const value of this.values()){
      if(!set.dictionary[value]) return false;
    }
    return true
  }
}
```

</section>
