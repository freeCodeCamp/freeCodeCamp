---
id: 587d8253367417b2b2512c6d
title: 2 つのデータセットの積集合を求める
challengeType: 1
forumTopicId: 301709
dashedName: perform-an-intersection-on-two-sets-of-data
---

# --description--

この課題では、2 つのデータセットの積集合を求めます。 `intersection` と呼ばれるメソッドを `Set` データ構造に作成します。 セットの積集合とは、2 つ以上のセットに共通するすべての値のことです。 このメソッドは、別の `Set` を引数として取り、2 つのセットの `intersection` を返す必要があります。

例えば、`setA = ['a','b','c']` かつ `setB = ['a','b','d','e']` の場合、setA と setB の積集合は `setA.intersection(setB) = ['a', 'b']` です。

# --hints--

`Set` クラスに `intersection` メソッドが必要です。

```js
assert(
  (function () {
    var test = new Set();
    return typeof test.intersection === 'function';
  })()
);
```

適切なコレクションが返される必要があります。

```js
assert(
  (function () {
    var setA = new Set();
    var setB = new Set();
    setA.add('a');
    setA.add('b');
    setA.add('c');
    setB.add('c');
    setB.add('d');
    var intersectionSetAB = setA.intersection(setB);
    return (
      intersectionSetAB.size() === 1 && intersectionSetAB.values()[0] === 'c'
    );
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
}
```
