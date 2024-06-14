---
id: 587d8254367417b2b2512c6f
title: Перевірка підмножин двох множин даних
challengeType: 1
forumTopicId: 301707
dashedName: perform-a-subset-check-on-two-sets-of-data
---

# --description--

У цій вправі ми виконаємо перевірку підмножин двох множин даних. Ми створимо метод на множині під назвою `isSubsetOf`. Цей метод дозволить порівняти першу множину з другою, а якщо перша множина повністю знаходиться в межах другої, то він поверне `true`.

Наприклад, якщо `setA = ['a','b']`, а `setB = ['a','b','c','d']`, то `setA` є підмножиною множини `setB`, тому `setA.isSubsetOf(setB)` має повернути `true`.

# --hints--

Клас `Set` повинен мати метод `isSubsetOf`.

```js
assert(
  (function () {
    var test = new Set();
    return typeof test.isSubsetOf === 'function';
  })()
);
```

Перша множина має знаходитись в другій множині.

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

`['a', 'b'].isSubsetOf(['a', 'b', 'c', 'd'])` має повернути `true`.

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

`['a', 'b', 'c'].isSubsetOf(['a', 'b'])` має повернути `false`.

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

`[].isSubsetOf([])` має повернути `true`.

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

`['a', 'b'].isSubsetOf(['c', 'd'])` має повернути `false`.

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
