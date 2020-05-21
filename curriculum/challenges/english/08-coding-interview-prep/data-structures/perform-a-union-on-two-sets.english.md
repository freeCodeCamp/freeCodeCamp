---
id: 587d8253367417b2b2512c6c
title: Perform a Union on Two Sets
challengeType: 1
isHidden: false
forumTopicId: 301708
---

## Description
<section id='description'>
In this exercise we are going to perform a union on two sets of data. We will create a method on our <code>Set</code> data structure called <code>union</code>. This method should take another <code>Set</code> as an argument and return the <code>union</code> of the two sets, excluding any duplicate values.
For example, if <code>setA = ['a','b','c']</code> and <code>setB = ['a','b','d','e']</code>, then the union of setA and setB is: <code>setA.union(setB) = ['a', 'b', 'c', 'd', 'e']</code>.
</section>

## Instructions
<section id='instructions'>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>Set</code> class should have a <code>union</code> method.
    testString: assert((function(){var test = new Set(); return (typeof test.union === 'function')})());
  - text: The union of <code>["a", "b", "c"]</code> and <code>["c", "d"]</code> should return <code>["a", "b", "c", "d"]</code>.
    testString: assert((function(){var setA = new Set();  var setB = new Set();  setA.add('a');  setA.add('b');  setA.add('c');  setB.add('c');  setB.add('d');  var unionSetAB = setA.union(setB); var final = unionSetAB.values(); return (final.indexOf('a') !== -1 && final.indexOf('b') !== -1 && final.indexOf('c') !== -1 && final.indexOf('d') !== -1 && final.length === 4)})());

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
}
```

</section>
