---
id: 587d7b7b367417b2b2512b16
title: Erstelle komplexe mehrdimensionale Arrays
challengeType: 1
forumTopicId: 301159
dashedName: create-complex-multi-dimensional-arrays
---

# --description--

Großartig! Du hast gerade eine Menge über Arrays gelernt! Das war ein relativ großer Überblick, und es gibt viel mehr über die Arbeit mit Arrays zu lernen, vieles, was wir uns in späteren Abschnitten ansehen werden. Bevor wir uns aber mit <dfn>Objects</dfn> beschäftigen, schauen wir uns noch einmal an, wie Arrays etwas komplexer als in den bisherigen Aufgaben werden können.

Eines der mächtigsten Merkmale bei der Betrachtung von Arrays als Datastrukturen, ist, dass Arrays andere Arrays enthalten oder sogar komplett aus anderen bestehen können. Wir haben bereits in bisherigen Aufgaben Arrays gesehen, die selbst Arrays enthalten – aber nur recht einfache. Arrays können jedoch eine unendliche Tiefe von Arrays enthalten, die wiederum andere Arrays enthalten können, jeweils mit einer bestimmten Tiefe, und so weiter. Auf diese Weise kann ein Array sehr schnell zu einer sehr komplexen Datenstruktur werden, die als <dfn>multi-dimensional</dfn> oder verschachteltes Array bekannt ist. Beachte das folgende Beispiel:

```js
let nestedArray = [
  ['deep'],
  [
    ['deeper'], ['deeper'] 
  ],
  [
    [
      ['deepest'], ['deepest']
    ],
    [
      [
        ['deepest-est?']
      ]
    ]
  ]
];
```

Der `deep` Array ist in 2 Ebenen verschachtelt. Die Arrays `deeper` sind 3 Ebenen tief. Die Arrays `deepest` sind 4 Ebenen und `deepest-est?` beträgt 5.

Während dieses Beispiel sehr verworren erscheint, ist diese Ebene an Komplexität nicht unbekannt oder gar unüblich, wenn man mit großen Mengen an Daten arbeitet. Jedoch können wir immer noch sehr leicht auf die tiefsten Ebenen eines Arrays, der so komplex ist, mit Klammernotation zugreifen:

```js
console.log(nestedArray[2][1][0][0][0]);
```

Dies protokolliert der String `deepest-est?`. Und jetzt, da wir wissen, wo die Daten sind, können wir sie zurücksetzen, wenn wir es brauchen:

```js
nestedArray[2][1][0][0][0] = 'deeper still';

console.log(nestedArray[2][1][0][0][0]);
```

Jetzt protokolliert es `deeper still`.

# --instructions--

Wir haben eine Variable `myNestedArray` definiert, die einem Array entspricht. Verändere `myNestedArray`, indem du irgendeine Kombination von <dfn>strings</dfn>, <dfn>numbers</dfn>, und <dfn>booleans</dfn> für Datenelemente verwendest, sodass es genau fünf Tiefenebenen hat (denk daran, der äußerste Array ist Ebene 1). Füge den String `deep` irgendwo auf der 3. Ebene ein, den String `deeper` auf der vierten Ebene und auf der fünften Ebene, füge den String `deepest` ein.

# --hints--

`myNestedArray` sollte nur Nummern, Booleans und Strings als Datenelemente enthalten

```js
assert.strictEqual(
  (function (arr) {
    let flattened = (function flatten(arr) {
      const flat = [].concat(...arr);
      return flat.some(Array.isArray) ? flatten(flat) : flat;
    })(arr);
    for (let i = 0; i < flattened.length; i++) {
      if (
        typeof flattened[i] !== 'number' &&
        typeof flattened[i] !== 'string' &&
        typeof flattened[i] !== 'boolean'
      ) {
        return false;
      }
    }
    return true;
  })(myNestedArray),
  true
);
```

`myNestedArray` sollte genau 5 Ebenen in die Tiefe haben

```js
assert.strictEqual(
  (function (arr) {
    let depth = 0;
    function arrayDepth(array, i, d) {
      if (Array.isArray(array[i])) {
        arrayDepth(array[i], 0, d + 1);
      } else {
        depth = d > depth ? d : depth;
      }
      if (i < array.length) {
        arrayDepth(array, i + 1, d);
      }
    }
    arrayDepth(arr, 0, 0);
    return depth;
  })(myNestedArray),
  4
);
```

`myNestedArray` sollte genau ein Auftreten der Strings `deep` in einen Array enthalten, der 3 Ebenen tief verschachtelt ist

```js
assert(
  (function howDeep(array, target, depth = 0) {
    return array.reduce((combined, current) => {
      if (Array.isArray(current)) {
        return combined.concat(howDeep(current, target, depth + 1));
      } else if (current === target) {
        return combined.concat(depth);
      } else {
        return combined;
      }
    }, []);
  })(myNestedArray, 'deep').length === 1 &&
    (function howDeep(array, target, depth = 0) {
      return array.reduce((combined, current) => {
        if (Array.isArray(current)) {
          return combined.concat(howDeep(current, target, depth + 1));
        } else if (current === target) {
          return combined.concat(depth);
        } else {
          return combined;
        }
      }, []);
    })(myNestedArray, 'deep')[0] === 2
);
```

`myNestedArray` sollte genau ein Auftreten der Strings `deeper` in einem Array enthalten, der 4 Ebenen tief verschachtelt ist

```js
assert(
  (function howDeep(array, target, depth = 0) {
    return array.reduce((combined, current) => {
      if (Array.isArray(current)) {
        return combined.concat(howDeep(current, target, depth + 1));
      } else if (current === target) {
        return combined.concat(depth);
      } else {
        return combined;
      }
    }, []);
  })(myNestedArray, 'deeper').length === 1 &&
    (function howDeep(array, target, depth = 0) {
      return array.reduce((combined, current) => {
        if (Array.isArray(current)) {
          return combined.concat(howDeep(current, target, depth + 1));
        } else if (current === target) {
          return combined.concat(depth);
        } else {
          return combined;
        }
      }, []);
    })(myNestedArray, 'deeper')[0] === 3
);
```

`myNestedArray` sollte genau ein Auftreten der Strings `deepest` in einem Array enthalten, der 5 Ebenen tief verschachtelt ist

```js
assert(
  (function howDeep(array, target, depth = 0) {
    return array.reduce((combined, current) => {
      if (Array.isArray(current)) {
        return combined.concat(howDeep(current, target, depth + 1));
      } else if (current === target) {
        return combined.concat(depth);
      } else {
        return combined;
      }
    }, []);
  })(myNestedArray, 'deepest').length === 1 &&
    (function howDeep(array, target, depth = 0) {
      return array.reduce((combined, current) => {
        if (Array.isArray(current)) {
          return combined.concat(howDeep(current, target, depth + 1));
        } else if (current === target) {
          return combined.concat(depth);
        } else {
          return combined;
        }
      }, []);
    })(myNestedArray, 'deepest')[0] === 4
);
```

# --seed--

## --seed-contents--

```js
let myNestedArray = [
  // Only change code below this line
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
  // Only change code above this line
];
```

# --solutions--

```js
let myNestedArray = [
  ['unshift', ['deep', ['deeper', ['deepest']]],false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
];
```
