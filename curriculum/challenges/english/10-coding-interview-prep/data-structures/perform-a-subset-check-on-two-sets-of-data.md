---
id: 587d8254367417b2b2512c6f
title: Perform a Subset Check on Two Sets of Data
challengeType: 1
forumTopicId: 301707
dashedName: perform-a-subset-check-on-two-sets-of-data
---

# --description--

In this exercise, we are going to perform a subset test on 2 sets of data. We will create a method on our `Set` data structure called `isSubsetOf`. This will compare the first set against the second, and if the first set is fully contained within the second, it will return `true`.

For example, if `setA = ['a','b']` and `setB = ['a','b','c','d']`, then `setA` is a subset of `setB`, so `setA.isSubsetOf(setB)` should return `true`.

# --hints--

Your `Set` class should have a `isSubsetOf` method.

```js
assert(
  (function () {
    var test = new Set();
    return typeof test.isSubsetOf === 'function';
  })()
);
```

The first `Set` should be contained in the second `Set`.

```js
assert(
  (function () {
    var setA = new Set();
    var setB = new Set();
    setA.add('a');
    setB.add('b');
    setB.add('c');
    setB.add('a');
    setB.add('d');
    var aIsSubsetOfB = setA.isSubsetOf(setB);
    return aIsSubsetOfB === true;
  })()
);
```

`['a', 'b'].isSubsetOf(['a', 'b', 'c', 'd'])` should return `true`.

```js
assert(
  (function () {
    var setA = new Set();
    var setB = new Set();
    setA.add('a');
    setA.add('b');
    setB.add('a');
    setB.add('b');
    setB.add('c');
    setB.add('d');
    var aIsSubsetOfB = setA.isSubsetOf(setB);
    return aIsSubsetOfB === true;
  })()
);
```

`['a', 'b', 'c'].isSubsetOf(['a', 'b'])` should return `false`.

```js
assert(
  (function () {
    var setA = new Set();
    var setB = new Set();
    setA.add('a');
    setA.add('b');
    setA.add('c');
    setB.add('a');
    setB.add('b');
    var aIsSubsetOfB = setA.isSubsetOf(setB);
    return aIsSubsetOfB === false;
  })()
);
```

`[].isSubsetOf([])` should return `true`.

```js
assert(
  (function () {
    var setA = new Set();
    var setB = new Set();
    var aIsSubsetOfB = setA.isSubsetOf(setB);
    return aIsSubsetOfB === true;
  })()
);
```

`['a', 'b'].isSubsetOf(['c', 'd'])` should return `false`.

```js
assert(
  (function () {
    var setA = new Set();
    var setB = new Set();
    setA.add('a');
    setA.add('b');
    setB.add('c');
    setB.add('d');
    var aIsSubsetOfB = setA.isSubsetOf(setB);
    return aIsSubsetOfB === false;
  })()
);
```

# --seed--

## --seed-contents--

```js
class Set {
  constructor() {
    // This will hold the set
    this.dictionary = {};
    this.length = 0;
  }
  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }
  // This method will return all the values in the set
  values() {
    return Object.keys(this.dictionary);
  }
  // This method will add an element to the set
  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = true;
      this.length++;
      return true;
    }

    return false;
  }
  // This method will remove an element from a set
  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }

    return false;
  }
  // This method will return the size of the set
  size() {
    return this.length;
  }
  // This is our union method 
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
  // This is our intersection method
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
  // Only change code below this line
  
  // Only change code above this line
}
```

# --solutions--

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
