---
id: 5a23c84252665b21eecc8010
title: Sortieralgorithmen/Shell-Sortierung
challengeType: 1
forumTopicId: 302317
dashedName: sorting-algorithmsshell-sort
---

# --description--

Write a function to sort an array of elements using the Shell sort algorithm, a diminishing increment sort. The function should return the sorted array.

Die Shell-Sortierung (auch Shellsort oder Shell-Methode genannt) ist nach ihrem Erfinder, Donald Shell, benannt, der den Algorithmus 1959 veröffentlichte.

Die Shell-Sortierung ist eine Folge von verschachtelten Einfügungssortierungen auf der Grundlage einer Inkrementfolge. Die Schrittweite wird nach jedem Durchlauf verringert, bis die Schrittweite 1 beträgt.

Mit einer Inkrementgröße von 1 ist die Sortierung eine einfache Einfügesortierung, aber zu diesem Zeitpunkt sind die Daten garantiert fast sortiert, was der "beste Fall" der Einfügesortierung ist.

Jede beliebige Folge sortiert die Daten, solange sie auf 1 endet, aber einige funktionieren besser als andere.

Empirische Studien haben gezeigt, dass eine geometrische Schrittfolge mit einem Verhältnis von etwa 2,2 in der Praxis gut funktioniert.

# --hints--

`shellSort` sollte eine Funktion sein.

```js
assert(typeof shellSort == 'function');
```

`shellSort([25, 32, 12, 7, 20])` sollte ein Array zurückgeben.

```js
assert(Array.isArray(shellSort([25, 32, 12, 7, 20])));
```

`shellSort([25, 32, 12, 7, 20])` sollte `[7, 12, 20, 25, 32]` zurückgeben.

```js
assert.deepEqual(shellSort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32]);
```

`shellSort([38, 45, 35, 8, 13])` sollte `[8, 13, 35, 38, 45]` zurückgeben.

```js
assert.deepEqual(shellSort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45]);
```

`shellSort([43, 36, 20, 34, 24])` sollte `[20, 24, 34, 36, 43]` zurückgeben.

```js
assert.deepEqual(shellSort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43]);
```

`shellSort([12, 33, 26, 18, 1, 16, 38])` sollte `[1, 12, 16, 18, 26, 33, 38]` zurückgeben.

```js
assert.deepEqual(shellSort([12, 33, 26, 18, 1, 16, 38]), [
  1,
  12,
  16,
  18,
  26,
  33,
  38
]);
```

`shellSort([3, 39, 48, 16, 1, 4, 29])` sollte `[1, 3, 4, 16, 29, 39, 48]` zurückgeben.

```js
assert.deepEqual(shellSort([3, 39, 48, 16, 1, 4, 29]), [
  1,
  3,
  4,
  16,
  29,
  39,
  48
]);
```

# --seed--

## --seed-contents--

```js
function shellSort(a) {

}
```

# --solutions--

```js
function shellSort(a) {
  for (var h = a.length; h > 0; h = parseInt(h / 2)) {
    for (var i = h; i < a.length; i++) {
      var k = a[i];
      for (var j = i; j >= h && k < a[j - h]; j -= h) a[j] = a[j - h];
      a[j] = k;
    }
  }
  return a;
}
```
