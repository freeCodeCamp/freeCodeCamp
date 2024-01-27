---
id: 5a23c84252665b21eecc7ec5
title: Josephus-Problem
challengeType: 1
forumTopicId: 302294
dashedName: josephus-problem
---

# --description--

Josephus problem is a math puzzle with a grim description: $n$ prisoners are standing on a circle, sequentially numbered from $0$ to $n-1$.

Ein Hinrichter geht entlang des Kreises, beginnend bei Gefangenem $0$, entfernt jeden $k$-ten Gefangenen und tötet ihn.

Im Laufe des Prozesses wird der Kreis immer kleiner, bis nur ein Gefangener übrig bleibt, der dann freigelassen wird.

Ein Beispiel: Wenn es $n=5$ Gefangene gibt und $k=2$ ist, wird die Reihenfolge, in der die Gefangenen getötet werden (nennen wir es die "Tötungssequenz") 1, 3, 0 und 4 sein und der Überlebende wird #2 sein.

Wenn irgendein $n und k > 0$ gegeben ist, finde heraus, welcher Gefangene der endgültige Überlebende sein wird.

In einem solchen Fall gab es 41 Gefangene und jeder 3<sup>te</sup> Gefangene wurde getötet ($k=3$).

Unter ihnen befand sich ein cleverer Bursche namens Josephus, der das Problem löste, an der überlebenden Stelle stand und weiterlebte, um die Geschichte zu erzählen.

Welche Zahl war er?

# --instructions--

Schreibe eine Funktion, die die anfängliche Anzahl der Gefangenen und `k` als Parameter nimmt und die Anzahl der überlebenden Gefangenen zurückgibt.

# --hints--

`josephus` sollte eine Funktion sein.

```js
assert(typeof josephus == 'function');
```

`josephus(30,3)` sollte eine Zahl zurückgeben.

```js
assert(typeof josephus(30, 3) == 'number');
```

`josephus(30,3)` sollte `28` zurückgeben.

```js
assert.equal(josephus(30, 3), 28);
```

`josephus(30,5)` sollte `2` zurückgeben.

```js
assert.equal(josephus(30, 5), 2);
```

`josephus(20,2)` sollte `8` zurückgeben.

```js
assert.equal(josephus(20, 2), 8);
```

`josephus(17,6)` sollte `1` zurückgeben.

```js
assert.equal(josephus(17, 6), 1);
```

`josephus(29,4)` sollte `1` zurückgeben.

```js
assert.equal(josephus(29, 4), 1);
```

# --seed--

## --seed-contents--

```js
function josephus(init, kill) {

}
```

# --solutions--

```js
function josephus(init, kill) {
  const arr = Array.from(Array(init).keys());
  let curr = -1
  while (arr.length > 1) {
    curr = (curr + kill) % arr.length;
    arr.splice(curr, 1);
    curr--;
  }
  return arr[0];
}
```
