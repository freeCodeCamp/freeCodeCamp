---
id: af2170cad53daa0770fabdea
title: Мутації
challengeType: 1
forumTopicId: 16025
dashedName: mutations
---

# --description--

Поверніть `true`, якщо рядок у першому елементі масиву містить усі літери рядка у другому елементі масиву.

Наприклад, `["hello", "Hello"]` повинен повертати `true`, оскільки всі літери другого рядка наявні у першому, незважаючи на регістр.

Аргументи `["hello", "hey"]` повинні повертати `false`, оскільки рядок `hello` не містить `y`.

`["Alien", "line"]` повинен повертати `true`, оскільки всі літери в `line` наявні в `Alien`.

# --hints--

`mutation(["hello", "hey"])` повинен повертати `false`.

```js
assert(mutation(['hello', 'hey']) === false);
```

`mutation(["hello", "Hello"])` повинен повертати `true`.

```js
assert(mutation(['hello', 'Hello']) === true);
```

`mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])` повинен повертати `true`.

```js
assert(mutation(['zyxwvutsrqponmlkjihgfedcba', 'qrstu']) === true);
```

`mutation(["Mary", "Army"])` повинен повертати `true`.

```js
assert(mutation(['Mary', 'Army']) === true);
```

`mutation(["Mary", "Aarmy"])` повинен повертати `true`.

```js
assert(mutation(['Mary', 'Aarmy']) === true);
```

`mutation(["Alien", "line"])` повинен повертати `true`.

```js
assert(mutation(['Alien', 'line']) === true);
```

`mutation(["floor", "for"])` повинен повертати `true`.

```js
assert(mutation(['floor', 'for']) === true);
```

`mutation(["hello", "neo"])` повинен повертати `false`.

```js
assert(mutation(['hello', 'neo']) === false);
```

`mutation(["voodoo", "no"])` повинен повертати `false`.

```js
assert(mutation(['voodoo', 'no']) === false);
```

`mutation(["ate", "date"])` повинен повертати `false`.

```js
assert(mutation(['ate', 'date']) === false);
```

`mutation(["Tiger", "Zebra"])` повинен повертати `false`.

```js
assert(mutation(['Tiger', 'Zebra']) === false);
```

`mutation(["Noel", "Ole"])` повинен повертати `true`.

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
