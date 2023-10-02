---
id: a3f503de51cfab748ff001aa
title: Paarweise
challengeType: 1
forumTopicId: 301617
dashedName: pairwise
---

# --description--

Finde innerhalb des Arrays `arr` Elementpaare, deren Summe gleichzusetzen ist mit dem zweiten Argument `arg`. Gebe dann die Summe ihrer Indizes zurück.

Hierbei darfst du Paare mit gleichen numerischen Werten mehrfach verwenden, solange sich die Indizes jeweils unterscheiden. Jedes Paar sollte möglichst niedrige Indizes verwenden. Wurde ein Element benutzt, kann es nicht in einem anderen Paar verwendet werden. Zum Beispiel erstellt `pairwise([1, 1, 2], 3)` das Paar `[2, 1]`, und verwendet die 1 am Index 0 statt der 1 am Index 1, da 0+2 &lt; 1+2.

So gibt beispielsweise `pairwise([7, 9, 11, 13, 15], 20)` den Wert `6` zurück. Die Paare, die eine Summe von 20 bilden, sind `[7, 13]` und `[9, 11]`. Wir können nun den Array mitsamt seiner Indizes und Werte ausgeben.

<div style='margin-left: 2em;'>

| Index | 0 | 1 | 2  | 3  | 4  |
| ----- | - | - | -- | -- | -- |
| Value | 7 | 9 | 11 | 13 | 15 |

</div>

Im Folgenden werden wir die entsprechenden Indizes verwenden und sie addieren.

<div style='margin-left: 2em;'>

7 + 13 = 20 → Indizes 0 + 3 = 3  
9 + 11 = 20 → Indizes 1 + 2 = 3  
3 + 3 = 6 → Gebe `6` zurück

</div>

# --hints--

`pairwise([1, 4, 2, 3, 0, 5], 7)` sollte 11 zurückgeben.

```js
assert.deepEqual(pairwise([1, 4, 2, 3, 0, 5], 7), 11);
```

`pairwise([1, 3, 2, 4], 4)` sollte 1 zurückgeben.

```js
assert.deepEqual(pairwise([1, 3, 2, 4], 4), 1);
```

`pairwise([1, 1, 1], 2)` sollte 1 zurückgeben.

```js
assert.deepEqual(pairwise([1, 1, 1], 2), 1);
```

`pairwise([0, 0, 0, 0, 1, 1], 1)` sollte 10 zurückgeben.

```js
assert.deepEqual(pairwise([0, 0, 0, 0, 1, 1], 1), 10);
```

`pairwise([], 100)` sollte 0 zurückgeben.

```js
assert.deepEqual(pairwise([], 100), 0);
```

# --seed--

## --seed-contents--

```js
function pairwise(arr, arg) {
  return arg;
}

pairwise([1,4,2,3,0,5], 7);
```

# --solutions--

```js
function pairwise(arr, arg) {
  var sum = 0;
  arr.forEach(function(e, i, a) {
    if (e != null) {
      var diff = arg-e;
      a[i] = null;
      var dix = a.indexOf(diff);
      if (dix !== -1) {
        sum += dix;
        sum += i;
        a[dix] = null;
      }
    }
  });
  return sum;
}

pairwise([1,4,2,3,0,5], 7);
```
