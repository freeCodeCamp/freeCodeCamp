---
id: 5e4ce2bbac708cc68c1df25f
title: Frequenza delle lettere
challengeType: 1
forumTopicId: 385263
dashedName: letter-frequency
---

# --description--

Data una stringa, calcolare la frequenza di ogni carattere.

Tutti i caratteri devono essere contati. Questo include lettere maiuscole e minuscole, cifre, spazi bianchi, caratteri speciali o qualsiasi altro carattere distinto.

# --instructions--

Scrivi una funzione per contare le occorrenze di ogni carattere in una determinata stringa.

La funzione dovrebbe restituire un array 2D con ciascuno degli elementi nella seguente forma: `['char', freq]`. Il carattere deve essere una stringa con una lunghezza di 1, e la frequenza è un numero che indica il conteggio.

Per esempio, data la stringa "ab", la tua funzione dovrebbe restituire `[['a', 1], ['b', 1]]`.

# --hints--

`letterFrequency` dovrebbe essere una funzione.

```js
assert(typeof letterFrequency == 'function');
```

`letterFrequency("Not all that Mrs. Bennet, however")` dovrebbe restituire un array.

```js
assert(Array.isArray(letterFrequency('Not all that Mrs. Bennet, however')));
```

`letterFrequency("Not all that Mrs. Bennet, however")` dovrebbe restituire `[[" ", 5], [",", 1], [".", 1], ["B", 1], ["M", 1], ["N", 1], ["a", 2], ["e", 4], ["h", 2], ["l", 2], ["n", 2], ["o", 2], ["r", 2], ["s", 1], ["t", 4], ["v", 1], ["w", 1]]`.

```js
assert.deepEqual(letterFrequency('Not all that Mrs. Bennet, however'), [
  [' ', 5],
  [',', 1],
  ['.', 1],
  ['B', 1],
  ['M', 1],
  ['N', 1],
  ['a', 2],
  ['e', 4],
  ['h', 2],
  ['l', 2],
  ['n', 2],
  ['o', 2],
  ['r', 2],
  ['s', 1],
  ['t', 4],
  ['v', 1],
  ['w', 1]
]);
```

`letterFrequency("daughters, could ask on the ")` dovrebbe restituire `[[" ", 5],[",", 1],["a", 2],["c", 1],["d", 2],["e", 2],["g", 1],["h", 2],["k", 1],["l", 1],["n", 1],["o", 2],["r", 1],["s", 2],["t", 2],["u", 2]]`.

```js
assert.deepEqual(letterFrequency('daughters, could ask on the '), [
  [' ', 5],
  [',', 1],
  ['a', 2],
  ['c', 1],
  ['d', 2],
  ['e', 2],
  ['g', 1],
  ['h', 2],
  ['k', 1],
  ['l', 1],
  ['n', 1],
  ['o', 2],
  ['r', 1],
  ['s', 2],
  ['t', 2],
  ['u', 2]
]);
```

`letterFrequency("husband any satisfactory description")` dovrebbe restituire `[[" ", 3], ["a", 4], ["b", 1], ["c", 2], ["d", 2], ["e", 1], ["f", 1], ["h", 1], ["i", 3], ["n", 3], ["o", 2], ["p", 1], ["r", 2], ["s", 4], ["t", 3], ["u", 1], ["y", 2]]`.

```js
assert.deepEqual(letterFrequency('husband any satisfactory description'), [
  [' ', 3],
  ['a', 4],
  ['b', 1],
  ['c', 2],
  ['d', 2],
  ['e', 1],
  ['f', 1],
  ['h', 1],
  ['i', 3],
  ['n', 3],
  ['o', 2],
  ['p', 1],
  ['r', 2],
  ['s', 4],
  ['t', 3],
  ['u', 1],
  ['y', 2]
]);
```

`letterFrequency("in various ways--with barefaced")` dovrebbe restituire `[[" ", 3], ["-", 2], ["a", 4], ["b", 1], ["c", 1], ["d", 1], ["e", 2], ["f", 1], ["h", 1], ["i", 3], ["n", 1], ["o", 1], ["r", 2], ["s", 2], ["t", 1], ["u", 1], ["v", 1], ["w", 2], ["y", 1]]`.

```js
assert.deepEqual(letterFrequency('in various ways--with barefaced'), [
  [' ', 3],
  ['-', 2],
  ['a', 4],
  ['b', 1],
  ['c', 1],
  ['d', 1],
  ['e', 2],
  ['f', 1],
  ['h', 1],
  ['i', 3],
  ['n', 1],
  ['o', 1],
  ['r', 2],
  ['s', 2],
  ['t', 1],
  ['u', 1],
  ['v', 1],
  ['w', 2],
  ['y', 1]
]);
```

`letterFrequency("distant surmises; but he eluded")` dovrebbe restituire `[[" ", 4], [";", 1], ["a", 1], ["b", 1], ["d", 3], ["e", 4], ["h", 1], ["i", 2], ["l", 1], ["m", 1], ["n", 1], ["r", 1], ["s", 4], ["t", 3], ["u", 3]]`.

```js
assert.deepEqual(letterFrequency('distant surmises; but he eluded'), [
  [' ', 4],
  [';', 1],
  ['a', 1],
  ['b', 1],
  ['d', 3],
  ['e', 4],
  ['h', 1],
  ['i', 2],
  ['l', 1],
  ['m', 1],
  ['n', 1],
  ['r', 1],
  ['s', 4],
  ['t', 3],
  ['u', 3]
]);
```

`letterFrequency("last obliged to accept the second-hand,")` dovrebbe restituire `[[" ", 5], [",", 1], ["-", 1], ["a", 3], ["b", 1], ["c", 3], ["d", 3], ["e", 4], ["g", 1], ["h", 2], ["i", 1], ["l", 2], ["n", 2], ["o", 3], ["p", 1], ["s", 2], ["t", 4]]`.

```js
assert.deepEqual(letterFrequency('last obliged to accept the second-hand,'), [
  [' ', 5],
  [',', 1],
  ['-', 1],
  ['a', 3],
  ['b', 1],
  ['c', 3],
  ['d', 3],
  ['e', 4],
  ['g', 1],
  ['h', 2],
  ['i', 1],
  ['l', 2],
  ['n', 2],
  ['o', 3],
  ['p', 1],
  ['s', 2],
  ['t', 4]
]);
```

# --seed--

## --seed-contents--

```js
function letterFrequency(txt) {

}
```

# --solutions--

```js
function letterFrequency(txt) {
    var cs = txt.split(''),
        i = cs.length,
        dct =  {},
        c = '',
        keys;

    while (i--) {
        c = cs[i];
        dct[c] = (dct[c] || 0) + 1;
    }

    keys = Object.keys(dct);
    keys.sort();
    return keys.map(function (c) { return [c, dct[c]]; });
}
```
