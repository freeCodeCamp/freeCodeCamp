---
id: af2170cad53daa0770fabdea
title: Мутації
challengeType: 5
forumTopicId: 16025
dashedName: mutations
---

# --description--

Повертає `true` якщо рядок у першому елементі масиву містить усі літери рядка у другому елементі масиву.

Наприклад, для `["hello", "Hello"]` має повертати `true` тому що всі літери у другому рядку присутні й у першому, незважаючи на їх регістр.

Аргументи `["hello", "hey"]` мають повертати `false`, тому що рядок `hello` не містить літеру `y`.

Зрештою, для `["Alien", "line"]` має повертати `true`, тому що всі літери слова`line` присутні у слові `Alien`.

# --hints--

`mutation(["hello", "hey"])` має повертати `false`.

```js
assert(mutation(['hello', 'hey']) === false);
```

`mutation(["hello", "Hello"])` має повертати `true`.

```js
assert(mutation(['hello', 'Hello']) === true);
```

`mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])` має повертати `true`.

```js
assert(mutation(['zyxwvutsrqponmlkjihgfedcba', 'qrstu']) === true);
```

`mutation(["Mary", "Army"])` має повертати `true`.

```js
assert(mutation(['Mary', 'Army']) === true);
```

`mutation(["Mary", "Aarmy"])` має повертати `true`.

```js
assert(mutation(['Mary', 'Aarmy']) === true);
```

`mutation(["Alien", "line"])` має повертати`true`.

```js
assert(mutation(['Alien', 'line']) === true);
```

`mutation(["floor", "for"])` має повертати `true`.

```js
assert(mutation(['floor', 'for']) === true);
```

`mutation(["hello", "neo"])` має повертати `false`.

```js
assert(mutation(['hello', 'neo']) === false);
```

`mutation(["voodoo", "no"])` має повертати `false`.

```js
assert(mutation(['voodoo', 'no']) === false);
```

`mutation(["ate", "date"])` має повертати `false`.

```js
assert(mutation(['ate', 'date']) === false);
```

`mutation(["Tiger", "Zebra"])` має повертати `false`.

```js
assert(mutation(['Tiger', 'Zebra']) === false);
```

`mutation(["Noel", "Ole"])` має повертати `true`.

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
