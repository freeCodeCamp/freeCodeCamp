---
id: 5a23c84252665b21eecc8014
title: Stabilität der Sortierung
challengeType: 1
forumTopicId: 302308
dashedName: sort-stability
---

# --description--

When sorting records in a table by a particular column or field, a <a href="https://www.freecodecamp.org/news/stability-in-sorting-algorithms-a-treatment-of-equality-fa3140a5a539/" target="_blank" rel="noopener noreferrer nofollow">stable sort</a> will always retain the relative order of records that have the same key.

In dieser Tabelle mit Ländern und Städten würde zum Beispiel eine stabile Sortierung nach der **second** Spalte, den Städten, das US-amerikanische Birmingham über dem britischen Birmingham halten. (Obwohl eine unstabile Sortierung in diesem Falle die US-Birmingham über die UK-Birmingham platzieren *könnte*, würde eine stabile Sortierung es *garantieren*).

<pre>UK  London
US  New York
US  Birmingham
UK  Birmingham
</pre>

In ähnlicher Weise würde eine stabile Sortierung nur nach der ersten Spalte "UK London" als erstes Element und "US Birmingham" als letztes Element erzeugen (da die Reihenfolge der Elemente mit demselben ersten Wort - "UK" oder "US" - beibehalten werden würde).

# --instructions--

Schreibe eine Funktion, die ein 2D-Array als Parameter nimmt. Jedes Element hat 2 Elemente, ähnlich wie im obigen Beispiel. Wie bereits erwähnt, sollte die Funktion das Array sortieren und ein sortiertes Array zurückgeben.

# --hints--

`stableSort` sollte eine Funktion sein.

```js
assert(typeof stableSort == 'function');
```

`stableSort([["UK", "London"], ["US", "New York"], ["US", "Birmingham"], ["UK", "Birmingham"]])` sollte ein Array zurückgeben.

```js
assert(
  Array.isArray(
    stableSort([
      ['UK', 'London'],
      ['US', 'New York'],
      ['US', 'Birmingham'],
      ['UK', 'Birmingham']
    ])
  )
);
```

`stableSort([["UK", "London"], ["US", "New York"], ["US", "Birmingham"], ["UK", "Birmingham"]])` sollte `[["US", "Birmingham"], ["UK", "Birmingham"], ["UK", "London"], ["US", "New York"]]` zurückgeben.

```js
assert.deepEqual(
  stableSort([
    ['UK', 'London'],
    ['US', 'New York'],
    ['US', 'Birmingham'],
    ['UK', 'Birmingham']
  ]),
  [
    ['US', 'Birmingham'],
    ['UK', 'Birmingham'],
    ['UK', 'London'],
    ['US', 'New York']
  ]
);
```

`stableSort([[2, 2], [1, 2], [1, 4], [1, 5]])` sollte `[[2, 2], [1, 2], [1, 4], [1, 5]]` zurückgeben.

```js
assert.deepEqual(
  stableSort([
    [2, 2],
    [1, 2],
    [1, 4],
    [1, 5]
  ]),
  [
    [2, 2],
    [1, 2],
    [1, 4],
    [1, 5]
  ]
);
```

`stableSort([[11, 55], [12, 45], [11, 45], [32, 45]])` sollte `[[12, 45], [11, 45], [32, 45], [11, 55]]` zurückgeben.

```js
assert.deepEqual(
  stableSort([
    [11, 55],
    [12, 45],
    [11, 45],
    [32, 45]
  ]),
  [
    [12, 45],
    [11, 45],
    [32, 45],
    [11, 55]
  ]
);
```

`stableSort([[10, 22], [1, 2], [1, 4], [1, 5], [10, 9]])` sollte `[[1, 2], [1, 4], [1, 5], [10, 9], [10, 22]]` zurückgeben.

```js
assert.deepEqual(
  stableSort([
    [10, 22],
    [1, 2],
    [1, 4],
    [1, 5],
    [10, 9]
  ]),
  [
    [1, 2],
    [1, 4],
    [1, 5],
    [10, 9],
    [10, 22]
  ]
);
```

`stableSort([[55, 54], [12, 22], [31, 43], [31, 54], [10, 49]])` sollte `[[12, 22], [31, 43], [10, 49], [55, 54], [31, 54]]` zurückgeben.

```js
assert.deepEqual(
  stableSort([
    [55, 54],
    [12, 22],
    [31, 43],
    [31, 54],
    [10, 49]
  ]),
  [
    [12, 22],
    [31, 43],
    [10, 49],
    [55, 54],
    [31, 54]
  ]
);
```

# --seed--

## --seed-contents--

```js
function stableSort(arr) {

}
```

# --solutions--

```js
function stableSort(arr) {
  arr.sort(function(a, b) {
    return a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0;
  });
  return arr;
}
```
