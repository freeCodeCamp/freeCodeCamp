---
id: af2170cad53daa0770fabdea
title: Mutations
challengeType: 1
forumTopicId: 16025
dashedName: mutations
---

# --description--

Gib `true` zurück, wenn der String im ersten Element des Arrays alle Buchstaben des Strings im zweiten Element des Arrays enthält.

Zum Beispiel sollte `["hello", "Hello"]` den Wert `true` zurückgeben, weil unabhängig von der Groß- und Kleinschreibung, alle Buchstaben des zweiten Strings im ersten enthalten sind.

Die Argumente `["hello", "hey"]` sollten `false` zurückgeben, weil der String `hello` kein `y` beinhaltet.

Schließlich sollte `["Alien", "line"]` den Wert `true` zurückgeben, weil alle Buchstaben von `line` in `Alien` vorhanden sind.

# --hints--

`mutation(["hello", "hey"])` sollte `false` zurückgeben.

```js
assert(mutation(['hello', 'hey']) === false);
```

`mutation(["hello", "Hello"])` sollte `true` zurückgeben.

```js
assert(mutation(['hello', 'Hello']) === true);
```

`mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])` sollte `true` zurückgeben.

```js
assert(mutation(['zyxwvutsrqponmlkjihgfedcba', 'qrstu']) === true);
```

`mutation(["Mary", "Army"])` sollte `true` zurückgeben.

```js
assert(mutation(['Mary', 'Army']) === true);
```

`mutation(["Mary", "Aarmy"])` sollte `true` zurückgeben.

```js
assert(mutation(['Mary', 'Aarmy']) === true);
```

`mutation(["Alien", "line"])` sollte `true` zurückgeben.

```js
assert(mutation(['Alien', 'line']) === true);
```

`mutation(["floor", "for"])` sollte `true` zurückgeben.

```js
assert(mutation(['floor', 'for']) === true);
```

`mutation(["hello", "neo"])` sollte `false` zurückgeben.

```js
assert(mutation(['hello', 'neo']) === false);
```

`mutation(["voodoo", "no"])` sollte `false` zurückgeben.

```js
assert(mutation(['voodoo', 'no']) === false);
```

`mutation(["ate", "date"])` sollte `false` zurückgeben.

```js
assert(mutation(['ate', 'date']) === false);
```

`mutation(["Tiger", "Zebra"])` sollte `false` zurückgeben.

```js
assert(mutation(['Tiger', 'Zebra']) === false);
```

`mutation(["Noel", "Ole"])` sollte `true` zurückgeben.

```js
assert(mutation(['Noel', 'Ole']) === true);
```

# --seed--

## --seed-contents--

```js
function mutation(arr) {
  return arr;
}

mutation(["hello", "hey"]);
```

# --solutions--

```js
function mutation(arr) {
  let hash = Object.create(null);

  arr[0].toLowerCase().split('').forEach(c => hash[c] = true);

  return !arr[1].toLowerCase().split('').filter(c => !hash[c]).length;
}

mutation(["hello", "hey"]);
```
