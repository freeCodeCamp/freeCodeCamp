---
id: af2170cad53daa0770fabdea
title: Mutations
challengeType: 5
forumTopicId: 16025
dashedName: mutations
---

# --description--

Return `true` if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, `["hello", "Hello"]`, should return `true` because all of the letters in the second string are present in the first, ignoring case.

The arguments `["hello", "hey"]` should return `false` because the string `hello` does not contain a `y`.

Lastly, `["Alien", "line"]`, should return `true` because all of the letters in `line` are present in `Alien`.

# --hints--

`mutation(["hello", "hey"])` should return `false`.

```js
assert(mutation(['hello', 'hey']) === false);
```

`mutation(["hello", "Hello"])` should return `true`.

```js
assert(mutation(['hello', 'Hello']) === true);
```

`mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])` should return `true`.

```js
assert(mutation(['zyxwvutsrqponmlkjihgfedcba', 'qrstu']) === true);
```

`mutation(["Mary", "Army"])` should return `true`.

```js
assert(mutation(['Mary', 'Army']) === true);
```

`mutation(["Mary", "Aarmy"])` should return `true`.

```js
assert(mutation(['Mary', 'Aarmy']) === true);
```

`mutation(["Alien", "line"])` should return `true`.

```js
assert(mutation(['Alien', 'line']) === true);
```

`mutation(["floor", "for"])` should return `true`.

```js
assert(mutation(['floor', 'for']) === true);
```

`mutation(["hello", "neo"])` should return `false`.

```js
assert(mutation(['hello', 'neo']) === false);
```

`mutation(["voodoo", "no"])` should return `false`.

```js
assert(mutation(['voodoo', 'no']) === false);
```

`mutation(["ate", "date"])` should return `false`.

```js
assert(mutation(['ate', 'date']) === false);
```

`mutation(["Tiger", "Zebra"])` should return `false`.

```js
assert(mutation(['Tiger', 'Zebra']) === false);
```

`mutation(["Noel", "Ole"])` should return `true`.

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
