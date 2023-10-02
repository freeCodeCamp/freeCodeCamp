---
id: af2170cad53daa0770fabdea
title: Mutazioni
challengeType: 1
forumTopicId: 16025
dashedName: mutations
---

# --description--

Restituisci `true` se la stringa nel primo elemento dell'array contiene tutte le lettere della stringa nel secondo elemento dell'array.

Per esempio, `["hello", "Hello"]`, dovrebbe restituire `true` perché tutte le lettere nella seconda stringa sono presenti nel primo, ignorando la maiuscola.

Gli argomenti `["hello", "hey"]` dovrebbero restituire `false` perché la stringa `hello` non contiene una `y`.

Infine, `["Alien", "line"]`, dovrebbe restituire `true` perché tutte le lettere in `line` sono presenti in `Alien`.

# --hints--

`mutation(["hello", "hey"])` dovrebbe restituire `false`.

```js
assert(mutation(['hello', 'hey']) === false);
```

`mutation(["hello", "Hello"])` dovrebbe restituire `true`.

```js
assert(mutation(['hello', 'Hello']) === true);
```

`mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])` dovrebbe restituire `true`.

```js
assert(mutation(['zyxwvutsrqponmlkjihgfedcba', 'qrstu']) === true);
```

`mutation(["Mary", "Army"])` dovrebbe restituire `true`.

```js
assert(mutation(['Mary', 'Army']) === true);
```

`mutation(["Mary", "Aarmy"])` dovrebbe restituire `true`.

```js
assert(mutation(['Mary', 'Aarmy']) === true);
```

`mutation(["Alien", "line"])` dovrebbe restituire `true`.

```js
assert(mutation(['Alien', 'line']) === true);
```

`mutation(["floor", "for"])` dovrebbe restituire `true`.

```js
assert(mutation(['floor', 'for']) === true);
```

`mutation(["hello", "neo"])` dovrebbe restituire `false`.

```js
assert(mutation(['hello', 'neo']) === false);
```

`mutation(["voodoo", "no"])` dovrebbe restituire `false`.

```js
assert(mutation(['voodoo', 'no']) === false);
```

`mutation(["ate", "date"])` dovrebbe restituire `false`.

```js
assert(mutation(['ate', 'date']) === false);
```

`mutation(["Tiger", "Zebra"])` dovrebbe restituire `false`.

```js
assert(mutation(['Tiger', 'Zebra']) === false);
```

`mutation(["Noel", "Ole"])` dovrebbe restituire `true`.

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
