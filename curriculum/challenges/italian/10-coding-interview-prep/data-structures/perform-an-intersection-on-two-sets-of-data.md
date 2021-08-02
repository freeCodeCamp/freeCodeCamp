---
id: 587d8253367417b2b2512c6d
title: Eseguire un'intersezione tra due insiemi di dati
challengeType: 1
forumTopicId: 301709
dashedName: perform-an-intersection-on-two-sets-of-data
---

# --description--

In questo esercizio ci accingiamo a eseguire un intersezione su 2 set di dati. Creeremo un metodo nella nostra struttura dati `Set` chiamato `intersection`. Un'intersezione di insiemi rappresenta tutti i valori che sono comuni a due o più insiemi. Questo metodo dovrebbe prendere un altro `Set` come argomento e restituire l' `intersection` dei due set.

Per esempio, se `setA = ['a','b','c']` e `setB = ['a','b','d','e']`, allora l'intersezione di setA e setB è: `setA.intersection(setB) = ['a', 'b']`.

# --hints--

La tua classe `Set` dovrebbe avere un metodo `intersection`.

```js
assert(
  (function () {
    var test = new Set();
    return typeof test.intersection === 'function';
  })()
);
```

Dovrebbe essere restituita la collezione corretta.

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
